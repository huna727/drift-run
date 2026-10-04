// Car shapes + data. Pure JS (no three.js) so the geometry can be unit-tested.
// Units: metres. +Z = nose, +X = car's left, +Y = up. Every shape is built from a
// half-profile and mirrored, so left/right are identical by construction.

// body row: [z, yBottom, halfW bottom, yShoulder, halfW shoulder, yTop, halfW top]  (nose -> tail)
// cab  row: [z, roofY|null, halfW at base, halfW at roof]  (null roofY = glass meets body)

export const CAR_DEFS = {
  hachi: {
    id: 'hachi', name: 'Hachi', price: 0, paint: 0xf2f2f2,
    tag: 'Lightweight boxy coupe. Pop-up lights, tiny tyres, pure slide.',
    mods: { power: 1, top: 1, grip: 1, drift: 1.02, steer: 1.03 },
    wb: 2.4, front: { R: 0.31, w: 0.2 }, rear: { R: 0.31, w: 0.21 }, fd: 4.1, wing: 0,
    rows: [
      [2.10, .30, .60, .50, .72, .62, .52],
      [1.95, .26, .76, .50, .80, .66, .64],
      [1.55, .24, .80, .52, .83, .74, .72],
      [0.95, .24, .82, .54, .83, .82, .76],
      [-0.05, .24, .82, .56, .83, .86, .78],
      [-1.50, .24, .82, .56, .83, .86, .78],
      [-1.95, .26, .78, .54, .80, .76, .72],
      [-2.10, .30, .66, .50, .74, .66, .60],
    ],
    cab: [[0.95, null, .74, .74], [0.35, 1.34, .74, .62], [-1.25, 1.34, .74, .62], [-1.85, null, .74, .74]],
    bpillar: -0.45, popup: true,
    wingSpec: { z: -1.85, hw: 0.6, chord: 0.24, h: 0.26 },
  },
  kei: {
    id: 'kei', name: 'Kei', price: 4000, paint: 0xa8d8f0,
    tag: 'Tiny buzzbox. Slow, but it tips into every corner.',
    mods: { power: 0.86, top: 0.82, grip: 0.94, drift: 1.15, steer: 1.08 },
    wb: 2.1, front: { R: 0.28, w: 0.17 }, rear: { R: 0.28, w: 0.17 }, fd: 4.5, wing: 0,
    rows: [
      [1.75, .34, .58, .56, .68, .78, .54],
      [1.60, .30, .72, .60, .76, .90, .66],
      [1.25, .28, .76, .62, .80, .96, .72],
      [0.70, .28, .78, .64, .80, 1.02, .74],
      [-0.30, .28, .78, .66, .80, 1.06, .74],
      [-1.20, .28, .78, .66, .80, 1.06, .74],
      [-1.65, .32, .72, .62, .78, 1.0, .70],
      [-1.75, .36, .60, .58, .72, .92, .62],
    ],
    cab: [[0.85, null, .72, .72], [0.40, 1.72, .72, .58], [-1.15, 1.72, .72, .58], [-1.55, null, .72, .72]],
    bpillar: -0.35,
    wingSpec: { z: -1.55, hw: 0.5, chord: 0.18, h: 0.14 },
  },
  corsa: {
    id: 'corsa', name: 'Corsa-S', price: 6000, paint: 0xff4d6d,
    tag: 'Low, wide sports coupe with a fastback roof and GT wing.',
    mods: { power: 1, top: 1.01, grip: 1.02, drift: 1, steer: 1 },
    wb: 2.55, front: { R: 0.33, w: 0.235 }, rear: { R: 0.33, w: 0.255 }, fd: 3.9, wing: 4,
    rows: [
      [2.225, .26, .62, .42, .74, .52, .52],
      [2.05, .22, .80, .46, .84, .56, .66],
      [1.60, .20, .86, .52, .89, .66, .74],
      [0.90, .20, .88, .58, .89, .76, .80],
      [0.00, .20, .88, .60, .89, .80, .80],
      [-1.20, .20, .88, .62, .89, .84, .82],
      [-1.90, .22, .84, .62, .88, .88, .80],
      [-2.225, .26, .72, .60, .82, .84, .74],
    ],
    cab: [[0.85, null, .78, .78], [0.05, 1.2, .78, .64], [-0.85, 1.2, .78, .64], [-1.75, null, .76, .76]],
    bpillar: -0.3,
    wingSpec: { z: -1.95, hw: 0.7, chord: 0.26, h: 0.3 },
  },
  pickup: {
    id: 'pickup', name: 'Pickup', price: 8000, paint: 0x8b6a3a,
    tag: 'Short-bed truck. Long wheelbase, lazy slides.',
    mods: { power: 1.02, top: 0.96, grip: 0.94, drift: 1.10, steer: 0.94 },
    wb: 3.0, front: { R: 0.36, w: 0.24 }, rear: { R: 0.36, w: 0.26 }, fd: 3.6, wing: 0,
    rows: [
      [2.35, .32, .68, .58, .82, .78, .62],
      [2.20, .28, .88, .62, .94, .88, .80],
      [1.75, .26, .94, .68, .975, 1.0, .90],
      [0.85, .26, .96, .72, .985, 1.04, .94],
      [-0.20, .26, .96, .74, .985, 1.04, .94],
      [-1.85, .26, .94, .74, .975, 1.0, .90],
      [-2.35, .30, .82, .70, .88, .92, .78],
      [-2.55, .34, .68, .66, .80, .86, .70],
    ],
    cab: [[0.55, null, .88, .88], [-0.10, 1.48, .88, .76], [-1.05, 1.48, .88, .76], [-1.55, null, .88, .88]],
    bpillar: -0.55, scoop: { z: 1.35, w: 0.5, l: 0.55, h: 0.06 },
    wingSpec: { z: -2.4, hw: 0.85, chord: 0.22, h: 0.20 },
  },
  muscle: {
    id: 'muscle', name: 'Muscle', price: 12000, paint: 0xffb703,
    tag: 'Long hood, big shoulders, loud pedal. Hold on.',
    mods: { power: 1.04, top: 1.02, grip: 0.96, drift: 1.0, steer: 0.97 },
    wb: 2.8, front: { R: 0.35, w: 0.255 }, rear: { R: 0.36, w: 0.3 }, fd: 3.7, wing: 0,
    rows: [
      [2.45, .30, .70, .56, .84, .74, .62],
      [2.30, .26, .88, .60, .94, .86, .80],
      [1.80, .24, .94, .66, .975, .96, .88],
      [0.90, .24, .95, .70, .975, 1.0, .90],
      [0.00, .24, .95, .72, .975, 1.0, .90],
      [-1.40, .24, .95, .74, .975, 1.0, .90],
      [-2.15, .26, .90, .74, .95, .98, .86],
      [-2.45, .30, .78, .70, .88, .90, .76],
    ],
    cab: [[0.55, null, .84, .84], [-0.10, 1.42, .84, .72], [-1.0, 1.42, .84, .72], [-1.85, null, .84, .84]],
    bpillar: -0.5, scoop: { z: 1.2, w: 0.5, l: 0.65, h: 0.07 },
    wingSpec: { z: -2.2, hw: 0.7, chord: 0.2, h: 0.18 },
  },
  volt: {
    id: 'volt', name: 'Volt', price: 14000, paint: 0x2ec4b6,
    tag: 'Silent EV. Instant torque, low grip, huge slides.',
    mods: { power: 1.14, top: 1.0, grip: 0.90, drift: 1.12, steer: 1.0 },
    wb: 2.75, front: { R: 0.34, w: 0.24 }, rear: { R: 0.34, w: 0.26 }, fd: 3.4, wing: 0,
    rows: [
      [2.30, .22, .68, .38, .82, .52, .60],
      [2.15, .18, .84, .42, .90, .60, .74],
      [1.55, .16, .90, .48, .94, .72, .80],
      [0.75, .16, .92, .54, .96, .82, .84],
      [-0.20, .16, .94, .60, .98, .92, .86],
      [-1.30, .16, .94, .64, .98, .96, .88],
      [-1.95, .18, .88, .64, .94, .94, .82],
      [-2.20, .22, .74, .60, .86, .88, .72],
    ],
    cab: [[0.75, null, .84, .84], [0.10, 1.36, .84, .70], [-1.10, 1.36, .84, .70], [-1.85, null, .84, .84]],
    bpillar: -0.40,
    wingSpec: { z: -2.05, hw: 0.7, chord: 0.22, h: 0.16 },
  },
  rallye: {
    id: 'rallye', name: 'Rallye', price: 18000, paint: 0x2f7dff,
    tag: 'Short hatch, giant wing, hood scoop. Built for sideways gravel.',
    mods: { power: 1.01, top: 0.99, grip: 1.05, drift: 1.05, steer: 1.02 },
    wb: 2.6, front: { R: 0.34, w: 0.235 }, rear: { R: 0.34, w: 0.235 }, fd: 4.0, wing: 6,
    rows: [
      [2.175, .28, .66, .52, .78, .66, .58],
      [2.00, .26, .84, .56, .88, .76, .72],
      [1.55, .26, .88, .60, .91, .86, .80],
      [0.85, .26, .88, .64, .91, .92, .82],
      [-0.10, .26, .88, .66, .91, .94, .82],
      [-1.60, .26, .88, .66, .91, .94, .82],
      [-2.00, .28, .84, .66, .89, .90, .78],
      [-2.175, .30, .72, .62, .82, .84, .70],
    ],
    cab: [[0.85, null, .8, .8], [0.2, 1.46, .8, .66], [-1.45, 1.46, .8, .66], [-2.0, null, .8, .8]],
    bpillar: -0.6, scoop: { z: 1.05, w: 0.46, l: 0.55, h: 0.08 },
    wingSpec: { z: -2.05, hw: 0.74, chord: 0.3, h: 0.34 },
  },
  gt3: {
    id: 'gt3', name: 'GT3', price: 24000, paint: 0xff9a3c,
    tag: 'Race-bred aero monster. Grip on grip on grip.',
    mods: { power: 1.15, top: 1.08, grip: 1.14, drift: 0.86, steer: 1.06 },
    wb: 2.65, front: { R: 0.36, w: 0.30 }, rear: { R: 0.36, w: 0.34 }, fd: 3.5, wing: 9,
    rows: [
      [2.35, .18, .78, .32, .92, .42, .66],
      [2.15, .14, .94, .36, 1.00, .48, .80],
      [1.55, .12, .98, .42, 1.04, .58, .88],
      [0.70, .12, 1.00, .50, 1.06, .72, .94],
      [-0.30, .12, 1.02, .56, 1.08, .84, .98],
      [-1.30, .12, 1.02, .60, 1.08, .90, 1.00],
      [-1.95, .14, .96, .60, 1.02, .90, .92],
      [-2.20, .18, .82, .56, .94, .84, .78],
    ],
    cab: [[0.70, null, .82, .82], [0.05, 1.28, .82, .68], [-0.75, 1.28, .82, .68], [-1.65, null, .82, .82]],
    bpillar: -0.25, vents: { z: -1.0, y: 0.65, l: 0.7, h: 0.14 },
    wingSpec: { z: -2.15, hw: 0.9, chord: 0.32, h: 0.38 },
  },
  apex: {
    id: 'apex', name: 'Apex GT', price: 30000, paint: 0x6df0c2,
    tag: 'Mid-engine wedge. Low nose, wide hips, fast everything.',
    mods: { power: 1.03, top: 1.05, grip: 1.04, drift: 0.95, steer: 1.02 },
    wb: 2.6, front: { R: 0.34, w: 0.255 }, rear: { R: 0.36, w: 0.32 }, fd: 3.6, wing: 5,
    rows: [
      [2.30, .20, .70, .30, .80, .40, .55],
      [2.10, .16, .86, .34, .92, .46, .70],
      [1.50, .14, .90, .40, .975, .54, .78],
      [0.60, .14, .90, .46, .975, .62, .80],
      [-0.50, .14, .92, .54, .975, .78, .84],
      [-1.50, .14, .94, .60, .975, .88, .88],
      [-2.10, .16, .88, .60, .95, .90, .82],
      [-2.30, .20, .74, .56, .88, .86, .70],
    ],
    cab: [[0.65, null, .74, .74], [0.0, 1.1, .74, .54], [-0.6, 1.1, .74, .54], [-1.5, null, .74, .74]],
    bpillar: -0.3, vents: { z: -0.95, y: 0.6, l: 0.75, h: 0.16 },
    wingSpec: { z: -2.2, hw: 0.8, chord: 0.28, h: 0.3 },
  },
};
export const CAR_ORDER = ['hachi', 'kei', 'corsa', 'pickup', 'muscle', 'volt', 'rallye', 'gt3', 'apex'];

const lerp = (a, b, t) => a + (b - a) * t;

/** interpolate a body row at z -> [yBot, wBot, yShoulder, wShoulder, yTop, wTop] */
export function sampleBody(rows, z) {
  if (z >= rows[0][0]) return rows[0].slice(1);
  for (let i = 0; i < rows.length - 1; i++) {
    const a = rows[i], b = rows[i + 1];
    if (z <= a[0] && z >= b[0]) {
      const t = (a[0] - z) / (a[0] - b[0] || 1);
      return a.slice(1).map((v, k) => lerp(v, b[k + 1], t));
    }
  }
  return rows[rows.length - 1].slice(1);
}
/** half width of a body row at height y */
export function halfWidthAt(r, y) { // r = [y0,w0,ys,w1,yt,wt]
  if (y <= r[2]) return lerp(r[1], r[3], Math.max(0, (y - r[0]) / (r[2] - r[0] || 1)));
  return lerp(r[3], r[5], Math.min(1, (y - r[2]) / (r[4] - r[2] || 1)));
}
/** cabin sample at z -> {yb, yr, wb, wr} */
export function sampleCab(def, z) {
  const rings = cabRings(def);
  for (let i = 0; i < rings.length - 1; i++) {
    const a = rings[i], b = rings[i + 1];
    if (z <= a.z && z >= b.z) {
      const t = (a.z - z) / (a.z - b.z || 1);
      return { yb: lerp(a.yb, b.yb, t), yr: lerp(a.yr, b.yr, t), wb: lerp(a.wb, b.wb, t), wr: lerp(a.wr, b.wr, t) };
    }
  }
  return rings[0];
}
function cabRings(def) {
  return def.cab.map(([z, roof, wb, wr]) => {
    const yb = sampleBody(def.rows, z)[4] - 0.02;
    return { z, yb, yr: roof == null ? yb : roof, wb, wr };
  });
}

/** Generic loft. rings: arrays of [x,y,z] with equal length. Returns plain arrays. */
export function loft(rings, edgeMat, capMat = 0) {
  const n = rings[0].length, pos = [], buckets = {};
  for (const r of rings) for (const p of r) pos.push(p[0], p[1], p[2]);
  const put = (m, a, b, c) => (buckets[m] ||= []).push(a, b, c);
  for (let s = 0; s < rings.length - 1; s++) {
    for (let j = 0; j < n; j++) {
      const a = s * n + j, b = s * n + (j + 1) % n, c = (s + 1) * n + j, d = (s + 1) * n + (j + 1) % n;
      const m = edgeMat(s, j, rings.length - 1);
      put(m, a, b, d); put(m, a, d, c);
    }
  }
  const cap = (ring, base, flip) => { // fan from the centroid
    const c = [0, 0, 0]; for (const p of ring) { c[0] += p[0] / n; c[1] += p[1] / n; c[2] += p[2] / n; }
    const ci = pos.length / 3; pos.push(c[0], c[1], c[2]);
    for (let j = 0; j < n; j++) flip ? put(capMat, ci, base + (j + 1) % n, base + j) : put(capMat, ci, base + j, base + (j + 1) % n);
  };
  if (capMat != null) { cap(rings[0], 0, false); cap(rings[rings.length - 1], (rings.length - 1) * n, true); }
  const index = [], groups = [];
  for (const m of Object.keys(buckets).map(Number).sort()) {
    groups.push({ start: index.length, count: buckets[m].length, mat: m });
    index.push(...buckets[m]);
  }
  return { pos: new Float32Array(pos), index: new Uint32Array(index), groups };
}

/** lower body "tub". material 0 = paint, 1 = dark underside */
export function bodyLoft(def) {
  const rings = def.rows.map(([z, y0, w0, ys, w1, yt, wt]) =>
    [[-w0, y0, z], [w0, y0, z], [w1, ys, z], [wt, yt, z], [-wt, yt, z], [-w1, ys, z]]);
  return loft(rings, (s, j) => (j === 0 ? 1 : 0), 0);
}
/** greenhouse. material 0 = glass, 1 = paint (roof) */
export function cabinLoft(def) {
  const rr = cabRings(def);
  const rings = rr.map(r => [[-r.wb, r.yb, r.z], [r.wb, r.yb, r.z], [r.wr, r.yr, r.z], [-r.wr, r.yr, r.z]]);
  return loft(rings, (s, j, last) => (j === 0 ? 1 : j === 2 ? (s === 0 || s === last - 1 ? 0 : 1) : 0), null);
}

/** where the wheels sit so the tyre face ends up just proud of the body side */
export function wheelLayout(def, stance = 0.03) {
  const out = {};
  for (const [axle, sgn] of [['front', 1], ['rear', -1]]) {
    const a = def[axle], z = sgn * def.wb / 2, row = sampleBody(def.rows, z);
    const side = halfWidthAt(row, a.R);
    out[axle] = { z, R: a.R, w: a.w, x: side + stance - a.w / 2 };
  }
  return out;
}