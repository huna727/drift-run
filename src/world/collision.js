// Shared 2D collision for cars vs world obstacles (used by main.js AND multi.js).
//
// Obstacle shapes, all in world XZ.  `a` is a yaw using three.js rotation.y convention,
// so a mesh with rotation.y = a and a collider with the same `a` always line up.
//   circle   { x, z, r }
//   box      { x, z, hw, hd, a }   hw = half size on local X, hd = half size on local Z
//   ellipse  { x, z, rx, rz, a }
// Optional on all: nm = true  ->  ignored by the CLOSE CALL score (lamp posts, trees...)

export const BODY_OFFS = [1.4, 0, -1.4];   // three circles along the car: nose, middle, tail
export const BODY_R = 1.0;                 // each circle ~ half the car width

const fin = o => { o.c = Math.cos(o.a || 0); o.s = Math.sin(o.a || 0); return o; };
export const circleObs = (x, z, r, extra) => ({ type: 'circle', x, z, r, br: r, ...extra });
export const boxObs = (x, z, hw, hd, a = 0, extra) => fin({ type: 'box', x, z, hw, hd, a, br: Math.hypot(hw, hd), ...extra });
export const ellipseObs = (x, z, rx, rz, a = 0, extra) => fin({ type: 'ellipse', x, z, rx, rz, a, br: Math.max(rx, rz), ...extra });

// Legacy shape {x,z,r} (no type) is treated as a circle.
const kind = o => o.type || 'circle';

// Push a circle (px,pz,rad) out of obstacle o. Returns true and fills out{nx,nz,pen}.
export function pushOut(o, px, pz, rad, out) {
  const dx = px - o.x, dz = pz - o.z, k = kind(o);
  const br = (o.br ?? o.r) + rad;
  if (dx * dx + dz * dz > br * br) return false;
  if (k === 'circle') {
    const d = Math.hypot(dx, dz), r = o.r + rad;
    if (d >= r) return false;
    if (d < 1e-6) { out.nx = 1; out.nz = 0; out.pen = r; return true; }
    out.nx = dx / d; out.nz = dz / d; out.pen = r - d; return true;
  }
  // into the shape's local frame (inverse of rotation.y)
  const lx = dx * o.c - dz * o.s, lz = dx * o.s + dz * o.c;
  let nlx, nlz, pen;
  if (k === 'box') {
    const cx = Math.max(-o.hw, Math.min(o.hw, lx)), cz = Math.max(-o.hd, Math.min(o.hd, lz));
    const ex = lx - cx, ez = lz - cz, d = Math.hypot(ex, ez);
    if (d > 1e-6) {
      if (d >= rad) return false;
      nlx = ex / d; nlz = ez / d; pen = rad - d;
    } else {                                   // centre is inside the box: leave by the nearest face
      const px2 = o.hw - Math.abs(lx), pz2 = o.hd - Math.abs(lz);
      if (px2 < pz2) { nlx = lx >= 0 ? 1 : -1; nlz = 0; pen = px2 + rad; }
      else { nlx = 0; nlz = lz >= 0 ? 1 : -1; pen = pz2 + rad; }
    }
  } else {                                     // ellipse, first-order distance estimate
    const qx = lx / o.rx, qz = lz / o.rz, f = Math.hypot(qx, qz);
    if (f < 1e-6) { nlx = 1; nlz = 0; pen = o.rx + rad; }
    else {
      const gx = qx / o.rx, gz = qz / o.rz, g = Math.hypot(gx, gz) || 1e-6;
      const dist = (f - 1) * f / g;            // signed distance to the surface
      if (dist >= rad) return false;
      nlx = gx / g; nlz = gz / g; pen = rad - dist;
    }
  }
  out.nx = nlx * o.c + nlz * o.s;              // back to world
  out.nz = -nlx * o.s + nlz * o.c;
  out.pen = pen; return true;
}

const _o = { nx: 0, nz: 0, pen: 0 };
// Resolve a car {x,z,h} against a list. apply(nx,nz,pen) must move car.x / car.z out.
export function resolveBody(car, obst, apply) {
  for (let i = 0; i < obst.length; i++) {
    const o = obst[i];
    const dx = car.x - o.x, dz = car.z - o.z, lim = (o.br ?? o.r) + BODY_R + 3.0;
    if (dx * dx + dz * dz > lim * lim) continue;
    for (let k = 0; k < 3; k++) {
      const off = BODY_OFFS[k];
      const px = car.x + Math.sin(car.h) * off, pz = car.z + Math.cos(car.h) * off;
      if (pushOut(o, px, pz, BODY_R, _o)) apply(_o.nx, _o.nz, _o.pen);
    }
  }
}

// Signed distance from a point to the obstacle surface (negative = inside).
export function surfaceDist(o, x, z) {
  const dx = x - o.x, dz = z - o.z, k = kind(o);
  if (k === 'circle') return Math.hypot(dx, dz) - o.r;
  const lx = dx * o.c - dz * o.s, lz = dx * o.s + dz * o.c;
  if (k === 'box') {
    const ex = Math.abs(lx) - o.hw, ez = Math.abs(lz) - o.hd;
    return Math.hypot(Math.max(ex, 0), Math.max(ez, 0)) + Math.min(Math.max(ex, ez), 0);
  }
  const qx = lx / o.rx, qz = lz / o.rz, f = Math.hypot(qx, qz) || 1e-6;
  const g = Math.hypot(qx / o.rx, qz / o.rz) || 1e-6;
  return (f - 1) * f / g;
}

// ---------- spatial hash: lets a big world hold tens of thousands of colliders ----------
export class ObsGrid {
  constructor(cell = 24) { this.cell = cell; this.cells = new Map(); this.count = 0; }
  _k(ix, iz) { return (ix + 2048) * 4096 + (iz + 2048); }
  insert(o) {
    const r = (o.br ?? o.r) + 0.01, c = this.cell;
    const x0 = Math.floor((o.x - r) / c), x1 = Math.floor((o.x + r) / c), z0 = Math.floor((o.z - r) / c), z1 = Math.floor((o.z + r) / c);
    for (let ix = x0; ix <= x1; ix++) for (let iz = z0; iz <= z1; iz++) {
      const k = this._k(ix, iz); let a = this.cells.get(k); if (!a) this.cells.set(k, a = []); a.push(o);
    }
    this.count++; return o;
  }
  // call fn(o) for every obstacle whose bounds touch the square around (x,z)
  near(x, z, rad, fn) {
    const c = this.cell, x0 = Math.floor((x - rad) / c), x1 = Math.floor((x + rad) / c), z0 = Math.floor((z - rad) / c), z1 = Math.floor((z + rad) / c);
    for (let ix = x0; ix <= x1; ix++) for (let iz = z0; iz <= z1; iz++) { const a = this.cells.get(this._k(ix, iz)); if (a) for (let i = 0; i < a.length; i++) fn(a[i]); }
  }
}
export function resolveBodyGrid(car, grid, apply) {
  grid.near(car.x, car.z, 3.6, o => {
    for (let k = 0; k < 3; k++) {
      const off = BODY_OFFS[k];
      const px = car.x + Math.sin(car.h) * off, pz = car.z + Math.cos(car.h) * off;
      if (pushOut(o, px, pz, BODY_R, _o)) apply(_o.nx, _o.nz, _o.pen);
    }
  });
}
