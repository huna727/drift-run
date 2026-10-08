import * as THREE from 'three';
import { rng, noise2, PM, canvasTex, mkCanvas, scaleUV, place, instanced, mesh, paveTex, speckleTex, makeWater, wallRing, hillRing, addClouds, concreteTex, clamp } from './wtex.js';
import { boxObs, circleObs, surfaceDist } from './collision.js';

// ISO container, 40 ft high-cube.  Everything below is in metres and real size.
const L40 = 12.19, L20 = 6.06, CW = 2.44, CH = 2.9, PITCH = CW + 0.22;
const BRANDS = ['NORDLINE', 'OCEANIC', 'KAIRO'];
const TINTS = [0xc23a2a, 0x2e6ab8, 0xe0a830, 0x2eaa5a, 0xb5b8bc, 0x9a4a2b, 0x244a80, 0xdadad4, 0xd0623a, 0x3a8a8f];
const poly = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 };

function sideCanvas(brand, bump) {
  const W = 1024, H = 256, c = mkCanvas(W, H), g = c.getContext('2d');
  g.fillStyle = bump ? '#808080' : '#e6e6e6'; g.fillRect(0, 0, W, H);
  for (let x = 0; x < W; x += 12) {                                   // corrugation, ~0.14 m pitch
    g.fillStyle = bump ? '#a8a8a8' : '#f4f4f4'; g.fillRect(x, 14, 6, H - 28);
    g.fillStyle = bump ? '#585858' : '#cdcdcd'; g.fillRect(x + 6, 14, 6, H - 28);
  }
  g.fillStyle = bump ? '#909090' : '#d8d8d8'; g.fillRect(0, 0, W, 14); g.fillRect(0, H - 14, W, 14);   // top / bottom rails
  if (!bump) {
    g.fillStyle = '#6b6f75'; g.font = 'italic 900 92px Arial, Helvetica, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(BRANDS[brand], 256, 118); g.fillText(BRANDS[brand], 768, 118);
    g.font = '700 16px monospace'; g.fillStyle = '#7a7e84'; g.fillText('CSC SAFETY APPROVED   MAX GROSS 30480 KG', 256, 204); g.fillText('MSKU ' + (4310000 + brand * 77711) + ' 4', 768, 204);
  }
  return c;
}
function endCanvas(bump) {
  const S = 256, c = mkCanvas(S, S), g = c.getContext('2d');
  g.fillStyle = bump ? '#808080' : '#dcdcdc'; g.fillRect(0, 0, S, S);
  for (let x = 14; x < S - 14; x += 10) { g.fillStyle = bump ? '#9a9a9a' : '#ececec'; g.fillRect(x, 16, 5, S - 32); g.fillStyle = bump ? '#666' : '#c4c4c4'; g.fillRect(x + 5, 16, 5, S - 32); }
  g.fillStyle = bump ? '#707070' : '#b4b4b4'; g.fillRect(S / 2 - 3, 10, 6, S - 20);                  // door seam
  for (const x of [58, 98, 158, 198]) { g.fillStyle = bump ? '#a0a0a0' : '#9a9a9a'; g.fillRect(x, 24, 5, S - 48); } // locking bars
  g.fillStyle = bump ? '#909090' : '#d2d2d2'; g.fillRect(0, 0, S, 12); g.fillRect(0, S - 12, S, 12); g.fillRect(0, 0, 12, S); g.fillRect(S - 12, 0, 12, S);
  return c;
}
const matCache = {};
function contMats(brand) {
  if (matCache[brand]) return matCache[brand];
  const side = canvasTex(sideCanvas(brand, false)), sideB = canvasTex(sideCanvas(brand, true), { srgb: false });
  const end = canvasTex(endCanvas(false)), endB = canvasTex(endCanvas(true), { srgb: false });
  const o = { roughness: 0.55, metalness: 0.35, envMapIntensity: 0.8 };
  const roof = new THREE.MeshStandardMaterial({ color: 0xffffff, map: speckleTex(44, { base: 205, contrast: 0.25 }), roughness: 0.7, metalness: 0.3 });
  const e = new THREE.MeshStandardMaterial({ ...o, map: end, bumpMap: endB, bumpScale: 1.2 }), sd = new THREE.MeshStandardMaterial({ ...o, map: side, bumpMap: sideB, bumpScale: 1.4 });
  return (matCache[brand] = [e, e, roof, roof, sd, sd]);
}
function contGeo(L) {
  const g = new THREE.BoxGeometry(L, CH, CW), uv = g.attributes.uv;
  const sc = (f, su, sv) => { for (let i = f * 4; i < f * 4 + 4; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv); };
  sc(4, L / L40, 1); sc(5, L / L40, 1); sc(2, L / 6, CW / 6); sc(3, L / 6, CW / 6);
  return g;
}

export function buildCargo(map, ctx) {
  const { group, obst, updaters } = ctx;
  const R = rng(777), nz = noise2(9), WALL = map.wall, Q = 105, night = !!map.night;
  const reserved = [];                                       // axis-aligned no-go boxes for the block grid
  const aabb = (x, z, hx, hz, m = 0) => ({ x0: x - hx - m, x1: x + hx + m, z0: z - hz - m, z1: z + hz + m });
  const hits = (a, b) => a.x0 < b.x1 && a.x1 > b.x0 && a.z0 < b.z1 && a.z1 > b.z0;

  /* ---- land (clipped at the quay) and sea ---- */
  const th = Math.acos(Q / (WALL + 0.5)), land = new THREE.Shape();
  for (let i = 0; i <= 96; i++) { const t = th + (Math.PI * 2 - th * 2) * i / 96, x = Math.sin(t) * (WALL + 0.5), z = Math.cos(t) * (WALL + 0.5); i ? land.lineTo(x, -z) : land.moveTo(x, -z); }
  land.closePath();
  const rotLand = g => g.rotateX(-Math.PI / 2);
  group.add(mesh(rotLand(scaleUV(new THREE.ShapeGeometry(land), 1 / 12, 1 / 12)), PM(0xc9cbcd, { map: paveTex(9, 176, 128, 128), roughness: 0.92 }), 0, -0.02, 0, { cast: false }));
  const outerS = new THREE.Shape(); outerS.moveTo(-1600, -Q); outerS.lineTo(1600, -Q); outerS.lineTo(1600, 1600); outerS.lineTo(-1600, 1600); outerS.closePath();
  group.add(mesh(rotLand(scaleUV(new THREE.ShapeGeometry(outerS), 1 / 20, 1 / 20)), PM(0x80848a, { map: speckleTex(2) }), 0, -0.06, 0, { cast: false }));
  const sea = makeWater(0x1f6f93, { opacity: 1, repeat: 180 }); updaters.push(sea.update);
  group.add(mesh(new THREE.PlaneGeometry(3200, 3200).rotateX(-Math.PI / 2), sea.mat, 0, -2.2, 0, { cast: false, receive: false }));
  group.add(mesh(new THREE.BoxGeometry(3200, 2.3, 1.2), PM(0x5a5e64, { map: concreteTex(), roughness: 0.95 }), 0, -1.17, Q + 0.6));      // quay wall face
  const stripe = mkCanvas(64, 64), sg = stripe.getContext('2d'); sg.fillStyle = '#e6b800'; sg.fillRect(0, 0, 64, 64); sg.fillStyle = '#16181c';
  for (let i = -2; i < 6; i++) { sg.beginPath(); sg.moveTo(i * 16, 64); sg.lineTo(i * 16 + 8, 64); sg.lineTo(i * 16 + 40, 0); sg.lineTo(i * 16 + 32, 0); sg.fill(); }
  const hz = new THREE.PlaneGeometry(2 * Math.sqrt((WALL + 0.5) ** 2 - Q * Q), 1.4).rotateX(-Math.PI / 2); scaleUV(hz, 2 * Math.sqrt((WALL + 0.5) ** 2 - Q * Q) / 4, 0.35);
  group.add(mesh(hz, PM(0xffffff, { map: canvasTex(stripe), ...poly }), 0, 0.04, Q - 0.9, { cast: false }));
  obst.push(boxObs(0, Q + 1.8, 220, 1.9, 0));                  // quay edge: nothing drives into the sea
  const bol = []; for (let x = -130; x <= 130; x += 13) bol.push(place(x, 0, Q - 0.2));
  group.add(instanced(new THREE.CylinderGeometry(0.3, 0.4, 0.7, 12).translate(0, 0.35, 0), PM(0x30343a, { metalness: 0.6, roughness: 0.5 }), bol));

  /* ---- containers ---- */
  const g40 = contGeo(L40), g20 = contGeo(L20);
  const pools = BRANDS.map((_, b) => { const mt = contMats(b); return { m40: [], m20: [], mt }; });
  const putCont = (pool, L, x, y, z, ry, tint) => {
    const k = 0.88 + R() * 0.2, c = new THREE.Color(tint).multiplyScalar(k);
    (L === L40 ? pool.m40 : pool.m20).push({ m: place(x, y, z, ry), c });
  };
  const blocks = [];
  const addBlock = (cx, cz, ry, brand, level) => {
    const along = ry === 0 ? [24.9, 16] : [16, 24.9];
    const bb = aabb(cx, cz, along[0] / 2, along[1] / 2);
    const cs = Math.cos(ry), sn = Math.sin(ry), pool = pools[brand];
    const hSeed = R() * 50;
    for (let col = 0; col < 6; col++) {
      const oz = (col - 2.5) * PITCH;
      const mix = R(), slots = mix < 0.6 ? [L40, L40] : mix < 0.8 ? [L40, L20, L20] : [L20, L20, L40];
      let ox = -12.45;
      for (const L of slots) {
        const cxl = ox + L / 2; ox += L + 0.18;
        const stack = clamp(Math.round(level + (nz(col * 0.9 + hSeed, ox * 0.2) - 0.5) * 2.4), 1, 4), tint = R() < 0.35 ? TINTS[(R() * TINTS.length) | 0] : TINTS[(col + brand * 3) % TINTS.length];
        for (let s = 0; s < stack; s++) putCont(pool, L, cx + cxl * cs + oz * sn, CH / 2 + s * CH, cz - cxl * sn + oz * cs, ry, s && R() < 0.4 ? TINTS[(R() * TINTS.length) | 0] : tint);
      }
    }
    obst.push(boxObs(cx, cz, 12.5, 8, ry)); reserved.push(bb); blocks.push(bb);
  };

  /* ---- fixed buildings first, so the container grid can route around them ---- */
  // warehouse (west edge), long side faces the yard
  {
    const wx = -128, wz = -32, w = 50, d = 30, h = 12.5;
    const wallTex = canvasTex((() => { const c = mkCanvas(256, 128), g = c.getContext('2d'); g.fillStyle = '#d4d8dc'; g.fillRect(0, 0, 256, 128); for (let x = 0; x < 256; x += 8) { g.fillStyle = '#eef0f2'; g.fillRect(x, 0, 4, 128); g.fillStyle = '#b8bec4'; g.fillRect(x + 4, 0, 4, 128); } g.fillStyle = '#2f5f8f'; g.fillRect(0, 96, 256, 14); return c; })());
    const f = PM(0xffffff, { map: wallTex, roughness: 0.55, metalness: 0.4 });
    const bx = new THREE.BoxGeometry(w, h, d), uv = bx.attributes.uv;
    const sc = (fa, su, sv) => { for (let i = fa * 4; i < fa * 4 + 4; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv); };
    sc(0, d / 8, h / 8); sc(1, d / 8, h / 8); sc(4, w / 8, h / 8); sc(5, w / 8, h / 8);
    const roofM = PM(0x8a9096, { metalness: 0.5, roughness: 0.5, map: speckleTex(6, { base: 220 }) });
    group.add(mesh(bx, [f, f, roofM, roofM, f, f], wx, h / 2, wz));
    const gable = new THREE.Shape(); gable.moveTo(-d / 2 - 0.6, 0); gable.lineTo(d / 2 + 0.6, 0); gable.lineTo(0, 2.6); gable.closePath();
    const gg = new THREE.ExtrudeGeometry(gable, { depth: w + 1.2, bevelEnabled: false }); gg.translate(0, 0, -(w + 1.2) / 2); gg.rotateY(Math.PI / 2);
    group.add(mesh(gg, roofM, wx, h, wz));
    const doorMat = PM(0x2a2f36, { metalness: 0.5, roughness: 0.5 }), canopy = PM(0xc9ced3, { metalness: 0.4, roughness: 0.6 });
    for (const dz of [-9, 0, 9]) {                           // roller doors + canopies + dock bumpers on the +x face
      group.add(mesh(new THREE.BoxGeometry(0.2, 5.4, 5.2), doorMat, wx + w / 2 + 0.05, 2.7, wz + dz, { cast: false }));
      group.add(mesh(new THREE.BoxGeometry(2.6, 0.25, 7), canopy, wx + w / 2 + 1.3, 6.3, wz + dz));
      group.add(mesh(new THREE.BoxGeometry(0.5, 0.35, 5.6), PM(0x20242a), wx + w / 2 + 0.25, 1.1, wz + dz, { cast: false }));
      group.add(mesh(new THREE.BoxGeometry(0.1, 0.5, 0.5), PM(0xffd23f, { emissive: 0xffb800, emissiveIntensity: night ? 2 : 0.5 }), wx + w / 2 + 0.15, 6, wz + dz + 3.2, { cast: false }));
    }
    obst.push(boxObs(wx, wz, w / 2, d / 2, 0)); reserved.push(aabb(wx, wz, w / 2, d / 2, 12));
  }
  // tank farm (east edge)
  {
    const tx = 118, tz = -88, steel = PM(0xdfe3e6, { metalness: 0.55, roughness: 0.35, envMapIntensity: 1.2 });
    for (const dx of [-17, 0, 17]) {
      const x = tx + dx, tank = new THREE.CylinderGeometry(7, 7, 12, 40);
      group.add(mesh(tank, steel, x, 6, tz));
      group.add(mesh(new THREE.SphereGeometry(7, 40, 12, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 0.22, 1), steel, x, 12, tz));
      group.add(mesh(new THREE.TorusGeometry(7.05, 0.18, 8, 48).rotateX(Math.PI / 2), PM(0xc23a2a), x, 8, tz, { cast: false }));
      group.add(mesh(new THREE.BoxGeometry(0.5, 12, 0.1), PM(0x5a5e64), x + 7.05, 6, tz, { cast: false }));          // ladder
      obst.push(circleObs(x, tz, 7.1));
    }
    group.add(mesh(new THREE.BoxGeometry(10, 4, 7), PM(0xb8bcc2), tx, 2, tz + 14)); obst.push(boxObs(tx, tz + 14, 5, 3.5, 0));
    const pipe = new THREE.CylinderGeometry(0.35, 0.35, 34, 10).rotateZ(Math.PI / 2);
    group.add(mesh(pipe, PM(0x7a8088, { metalness: 0.6, roughness: 0.4 }), tx, 5.2, tz + 9, { cast: false }));
    reserved.push(aabb(tx, tz + 6, 30, 24, 8));
  }
  // port office + gate house near the south entrance
  {
    const ox = 48, oz = -128, mat = PM(0xffffff, { map: speckleTex(17, { base: 238 }), roughness: 0.7 });
    group.add(mesh(new THREE.BoxGeometry(24, 8, 12), PM(0xe6e2d8, { roughness: 0.75 }), ox, 4, oz));
    group.add(mesh(new THREE.BoxGeometry(24.6, 0.5, 12.6), PM(0x4a4e55), ox, 8.25, oz));
    const wt = mkCanvas(256, 64), wg = wt.getContext('2d'); wg.fillStyle = '#243444'; wg.fillRect(0, 0, 256, 64); wg.fillStyle = '#7fa0b8'; for (let i = 0; i < 8; i++) wg.fillRect(i * 32 + 4, 8, 24, 48);
    for (const sz of [-1, 1]) group.add(mesh(new THREE.PlaneGeometry(22, 3.2), PM(0xffffff, { map: canvasTex(wt), metalness: 0.4, roughness: 0.25 }), ox, 5.4, oz + sz * 6.03, { ry: sz > 0 ? 0 : Math.PI, cast: false }));
    obst.push(boxObs(ox, oz, 12, 6, 0)); reserved.push(aabb(ox, oz, 12, 6, 10));
  }
  // gantry cranes straddling the quay
  const craneRed = PM(0xd8452b, { roughness: 0.55, metalness: 0.3 }), craneGrey = PM(0x8c9298, { roughness: 0.5, metalness: 0.5 });
  const addCrane = cx => {
    const gx = 9, zs = Q - 2.4, zl = Q - 19;                        // sea-side / land-side legs
    for (const sx of [-1, 1]) for (const zz of [zs, zl]) {
      group.add(mesh(new THREE.BoxGeometry(1.8, 32, 1.8), craneRed, cx + sx * gx, 16, zz)); obst.push(boxObs(cx + sx * gx, zz, 1.1, 1.1, 0, { nm: true }));
    }
    for (const sx of [-1, 1]) group.add(mesh(new THREE.BoxGeometry(1.4, 1.4, zs - zl + 1.8), craneRed, cx + sx * gx, 31.5, (zs + zl) / 2));
    group.add(mesh(new THREE.BoxGeometry(gx * 2 + 1.8, 1.6, 1.6), craneRed, cx, 31.5, zs)); group.add(mesh(new THREE.BoxGeometry(gx * 2 + 1.8, 1.6, 1.6), craneRed, cx, 31.5, zl));
    group.add(mesh(new THREE.BoxGeometry(2.6, 2.4, 78), craneRed, cx, 36, Q - 19 + 36));                   // boom + back-reach girder
    group.add(mesh(new THREE.BoxGeometry(1.4, 1.4, 52), craneGrey, cx + 2.2, 38, Q + 8, { cast: false }));  // boom rail
    group.add(mesh(new THREE.BoxGeometry(6, 4, 8), craneGrey, cx, 39, Q - 12));                              // machinery house
    group.add(mesh(new THREE.BoxGeometry(4, 2.4, 5), craneGrey, cx, 33.8, Q + 18));                           // trolley
    for (const sx of [-1, 1]) group.add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 20, 6), PM(0x2a2d32), cx + sx * 1.6, 23, Q + 18, { cast: false }));
    group.add(mesh(new THREE.BoxGeometry(2.6, 0.5, 6.2), PM(0x2a2d32), cx, 13, Q + 18));                      // spreader
    for (const sx of [-1, 1]) for (const lz of [zs, zl]) group.add(mesh(new THREE.BoxGeometry(2.6, 1, 2.6), PM(0x30343a), cx + sx * gx, 0.5, lz, { cast: false }));
    reserved.push(aabb(cx, (zs + zl) / 2, gx + 6, 14));
  };
  addCrane(-50); addCrane(38);

  /* ---- the grid: west half runs east-west, east half north-south, one main aisle between ---- */
  const AISLE = 14, GAP = 15, rLim = WALL - 7, zMax = Q - 22;
  const place2 = (cx, cz, ry, brand, level) => {
    const hx = ry === 0 ? 12.45 : 8, hz = ry === 0 ? 8 : 12.45, bb = aabb(cx, cz, hx, hz);
    if (Math.hypot(Math.abs(cx) + hx, Math.abs(cz) + hz) > rLim || cz + hz > zMax) return;
    if (surfaceDist(boxObs(cx, cz, hx, hz, 0), 0, 0) < 42) return;                     // keep the middle open for drifting
    if (reserved.some(r => hits(r, bb))) return;
    if (R() < 0.08) return;                                                             // a few gaps so it feels used
    addBlock(cx, cz, ry, brand, level);
  };
  for (let j = 0; j < 5; j++) for (let k = -5; k <= 3; k++) {
    const cx = -(AISLE + 12.45 + j * (24.9 + GAP)), cz = k * (16 + GAP) + 4, d = Math.hypot(cx, cz);
    place2(cx, cz, 0, (j + k + 9) % 3, d < 90 ? 2 : d < 130 ? 2.6 : 1.8);
  }
  for (let j = 0; j < 5; j++) for (let k = -4; k <= 2; k++) {
    const cx = AISLE + 8 + j * (16 + GAP), cz = k * (24.9 + GAP) + 6, d = Math.hypot(cx, cz);
    place2(cx, cz, Math.PI / 2, (j + k + 7) % 3, d < 90 ? 2 : d < 130 ? 2.8 : 1.8);
  }
  // flush the container instances
  for (const p of pools) {
    if (p.m40.length) group.add(instanced(g40, p.mt, p.m40));
    if (p.m20.length) group.add(instanced(g20, p.mt, p.m20));
  }

  /* ---- container ship alongside, laden ---- */
  {
    const sz = Q + 24, hull = new THREE.Shape();
    hull.moveTo(-76, -11); hull.lineTo(-76, 11); hull.lineTo(44, 13); hull.quadraticCurveTo(70, 12, 82, 0); hull.quadraticCurveTo(70, -12, 44, -13); hull.closePath();
    const hg = new THREE.ExtrudeGeometry(hull, { depth: 15, bevelEnabled: false }); hg.rotateX(-Math.PI / 2);        // y: 0..15
    group.add(mesh(hg, [PM(0x6d7379, { roughness: 0.8, metalness: 0.2 }), PM(0x1d2a3a, { roughness: 0.55, metalness: 0.35 })], 0, -5.8, sz));
    const band = new THREE.ExtrudeGeometry(hull, { depth: 3, bevelEnabled: false }); band.rotateX(-Math.PI / 2); band.scale(1.003, 1, 1.003);
    group.add(mesh(band, PM(0xa8231f, { roughness: 0.6 }), 0, -3.4, sz, { cast: false }));
    const deckY = 9.2, ship = { m40: [], mt: pools[1].mt };
    for (let bay = 0; bay < 9; bay++) for (let col = 0; col < 8; col++) {
      if (R() < 0.08) continue;
      const stack = 2 + (R() * 3 | 0), tint = TINTS[(R() * TINTS.length) | 0];
      for (let s = 0; s < stack; s++) putCont(ship, L40, -52 + bay * 12.4, deckY + CH / 2 + s * CH, sz + (col - 3.5) * PITCH, 0, s && R() < 0.4 ? TINTS[(R() * TINTS.length) | 0] : tint);
    }
    const sx = -66, white = PM(0xeceae4, { roughness: 0.6 });
    group.add(mesh(new THREE.BoxGeometry(12, 22, 20), white, sx, deckY + 11, sz));
    const wt = mkCanvas(128, 32), wg = wt.getContext('2d'); wg.fillStyle = '#e6e4de'; wg.fillRect(0, 0, 128, 32); wg.fillStyle = '#1f3447'; for (let i = 0; i < 9; i++) wg.fillRect(i * 14 + 3, 8, 10, 14);
    group.add(mesh(new THREE.BoxGeometry(12.2, 3, 21), PM(0xffffff, { map: canvasTex(wt), roughness: 0.3, metalness: 0.3 }), sx, deckY + 24.5, sz));
    group.add(mesh(new THREE.CylinderGeometry(2.2, 2.6, 8, 16), PM(0xa8231f), sx - 3, deckY + 26, sz, { cast: false }));
    group.add(instanced(g40, ship.mt, ship.m40));
  }

  /* ---- masts, markings, fence, edge ---- */
  const masts = [], mastPos = [];
  for (const z of [-125, -62, 0, 58]) for (const sx of [-1, 1]) mastPos.push([sx * 12.8, z]);
  for (const [x, z] of mastPos) { masts.push(place(x, 0, z, 0)); obst.push(circleObs(x, z, 0.8, { nm: true })); }
  const steel = PM(0x4a4f56, { metalness: 0.6, roughness: 0.45 });
  group.add(instanced(new THREE.CylinderGeometry(0.28, 0.5, 30, 10).translate(0, 15, 0), steel, masts));
  group.add(instanced(new THREE.BoxGeometry(3.6, 1.8, 0.4).translate(0, 30.4, 0), PM(0xfff6d8, { emissive: 0xfff0c0, emissiveIntensity: night ? 3 : 0.8 }), masts, { cast: false }));
  const dash = [], yel = new THREE.PlaneGeometry(0.4, 3.2).rotateX(-Math.PI / 2);
  for (let z = -150; z < Q - 24; z += 9) dash.push(place(0, 0.05, z));
  group.add(instanced(yel, PM(0xe8b92a, { roughness: 0.85, ...poly }), dash, { cast: false }));

  const ct = mkCanvas(64, 64), cg = ct.getContext('2d'); cg.strokeStyle = '#c8ccd0'; cg.lineWidth = 3; cg.beginPath(); cg.moveTo(0, 0); cg.lineTo(64, 64); cg.moveTo(64, 0); cg.lineTo(0, 64); cg.stroke();
  const cl = canvasTex(ct), thq = Math.acos(Q / (WALL + 0.7));
  const fenceG = new THREE.CylinderGeometry(WALL + 0.7, WALL + 0.7, 5, 120, 1, true, thq, Math.PI * 2 - thq * 2); scaleUV(fenceG, (Math.PI * 2 * WALL) / 3, 5 / 3);
  group.add(mesh(fenceG, new THREE.MeshBasicMaterial({ map: cl, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide }), 0, 3.9, 0, { cast: false, receive: false }));
  const posts = []; for (let i = 0; i < 90; i++) { const a = thq + (Math.PI * 2 - thq * 2) * i / 89; posts.push(place(Math.sin(a) * (WALL + 0.7), 0, Math.cos(a) * (WALL + 0.7))); }
  group.add(instanced(new THREE.CylinderGeometry(0.1, 0.1, 6.4, 6).translate(0, 3.2, 0), steel, posts, { cast: false }));
  wallRing(group, WALL, { h: 1.4, color: 0xaeb2b6, gapZ: Q });

  hillRing(group, { count: 12, rMin: 700, rMax: 900, hMin: 50, hMax: 130, colors: map.mountains, seed: 19 });
  addClouds(group, 14, night);
  return { wall: WALL, isl: 0, roadHalf: 12, spawn: { x: 0, z: -90, h: 0 } };
}

export { contGeo, contMats, L40, L20, CH as CONT_H, CW as CONT_W, PITCH, TINTS, BRANDS };
