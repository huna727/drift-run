import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rng, noise2, PM, canvasTex, mkCanvas, scaleUV, place, instanced, mesh, paveTex, laneTex, asphaltTex, speckleTex, concreteTex, makeWater, wallRing, addClouds, ribbon } from './wtex.js';
import { boxObs, circleObs } from './collision.js';
import { facadeMaterial, NIGHT } from './facade.js';
import { contGeo, contMats, L40, L20, CONT_H, PITCH, TINTS } from './cargo.js';
import { Traffic } from './traffic.js';

/* ================= layout constants (metres) =================
   Streets every P metres, 18 m wide. Blocks are 72 m, split into 2x2 lots of 33 m (11 window bays),
   so every building edge lands on a 3 m grid and the world-space window shader never cuts a window. */
export const WALL = 1150, P = 90, SW = 18, SH = 9, PATCH = 12, LOT = 33, GRID_R = 930, RING_R = 690, HWY = 15, ART = 4, COAST_R = 990;
const STADIUM = { x: -630, z: 540, r: 72 }, EXCL = [{ x: -630, z: 540, r: 92 }];
const NI = 11;                                      // street index range -11..11
const inHwy = (x, z) => Math.abs(Math.hypot(x, z) - RING_R) < HWY + 2.5 || Math.abs(z) < HWY + 2.5;
const nearStreet = (x, z, m = SH + 2.5) => {
  const cx = Math.round(x / P) * P, cz = Math.round(z / P) * P;
  return (Math.abs(x - cx) < m && lineOK('z', cx, z)) || (Math.abs(z - cz) < m && lineOK('x', cz, x));
};
const q3 = v => Math.max(3, Math.round(v / 3) * 3);
const isArt = c => Math.round(c / P) % ART === 0;
const hs = (...a) => a.reduce((h, v) => (Math.imul(h ^ (v | 0), 0x9E3779B1) + 0x7F4A7C15) >>> 0, 12345);
const poly = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 };

// Is there street at parameter s along the line? axis 'z' = line x=c running along z; axis 'x' = line z=c running along x.
export function lineOK(axis, c, s) {
  const x = axis === 'z' ? c : s, z = axis === 'z' ? s : c, r = Math.hypot(x, z);
  if (r > GRID_R) return false;
  if (axis === 'x' && c === 0) return false;                      // that line is the cross-island highway
  if (!isArt(c)) { if (Math.abs(r - RING_R) < HWY + 12) return false; if (Math.abs(z) < HWY + 12) return false; }
  for (const e of EXCL) if (Math.hypot(x - e.x, z - e.z) < e.r) return false;
  return true;
}
export function districtAt(x, z) {
  const r = Math.hypot(x, z);
  if (Math.hypot(x - STADIUM.x, z - STADIUM.z) < 150) return 'Stadium';
  if (Math.abs(r - RING_R) < HWY + 1 || (Math.abs(z) < HWY + 1 && Math.abs(x) < 1100)) return 'Highway';
  if (r > 960) return (x > 200 && z < -300) ? 'Port' : 'Beach';
  if (r < 300) return 'Downtown';
  if (x > 200 && z < -120 && r > 520) return 'Industrial';
  return r < 640 ? 'Midtown' : 'Suburbs';
}

/* ================= chunk store + streaming pool: only what is near the player is drawn ================= */
class ChunkStore {
  constructor(cs = 100) { this.cs = cs; this.map = new Map(); this.total = 0; }
  add(x, z, mat, hex, q) {
    const key = Math.floor(x / this.cs) * 4096 + Math.floor(z / this.cs);
    let c = this.map.get(key); if (!c) this.map.set(key, c = { m: [], c: [], q: [], x: [], z: [] });
    const e = mat.elements; for (let i = 0; i < 16; i++) c.m.push(e[i]);
    const col = _col.setHex(hex ?? 0xffffff); c.c.push(col.r, col.g, col.b); c.q.push(q); c.x.push(x); c.z.push(z); this.total++;
  }
  finish() { for (const c of this.map.values()) { c.m = new Float32Array(c.m); c.c = new Float32Array(c.c); } }
}
const _col = new THREE.Color();
class Pool {
  constructor(group, store, parts) {
    this.store = store; this.key = ''; const cap = Math.max(1, store.total);
    this.parts = parts.map(p => {
      const m = new THREE.InstancedMesh(p.geo, p.mat, cap); m.count = 0; m.frustumCulled = false; m.castShadow = p.cast !== false; m.receiveShadow = true;
      if (p.color) m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3), 3);
      group.add(m); return { m, color: !!p.color };
    });
    this.cap = cap;
  }
  update(px, pz, radius, density) {
    const cs = this.store.cs, key = Math.floor(px / (cs / 2)) + ',' + Math.floor(pz / (cs / 2)) + ',' + radius + ',' + density;
    if (key === this.key) return; this.key = key;
    const x0 = Math.floor((px - radius) / cs), x1 = Math.floor((px + radius) / cs), z0 = Math.floor((pz - radius) / cs), z1 = Math.floor((pz + radius) / cs), r2 = radius * radius;
    let n = 0;
    for (let ix = x0; ix <= x1; ix++) for (let iz = z0; iz <= z1; iz++) {
      const c = this.store.map.get(ix * 4096 + iz); if (!c) continue;
      for (let j = 0; j < c.q.length && n < this.cap; j++) {
        if (c.q[j] > density) continue;
        const dx = c.x[j] - px, dz = c.z[j] - pz; if (dx * dx + dz * dz > r2) continue;
        for (const p of this.parts) {
          p.m.instanceMatrix.array.set(c.m.subarray(j * 16, j * 16 + 16), n * 16);
          if (p.color) p.m.instanceColor.array.set(c.c.subarray(j * 3, j * 3 + 3), n * 3);
        }
        n++;
      }
    }
    for (const p of this.parts) { p.m.count = n; p.m.instanceMatrix.needsUpdate = true; if (p.color) p.m.instanceColor.needsUpdate = true; }
  }
}

/* ================= small geometry kits ================= */
const blob = (r, seed, detail = 1) => {
  const g = new THREE.IcosahedronGeometry(r, detail), p = g.attributes.position, n = noise2(seed);
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 1 + 0.25 * (n(x * 0.9 + 5, z * 0.9 + y * 0.7) - 0.5); p.setXYZ(i, x * k, y * k * 0.85, z * k); }
  g.computeVertexNormals(); return g;
};
const vcol = (geo, hex) => { const n = geo.attributes.position.count, c = new THREE.Color(hex), a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } geo.setAttribute('color', new THREE.BufferAttribute(a, 3)); return geo; };
function palmGeo() {
  const parts = [vcol(new THREE.CylinderGeometry(0.22, 0.4, 9, 6).translate(0, 4.5, 0).rotateZ(0.08), 0x6b5440)];
  for (let k = 0; k < 7; k++) parts.push(vcol(new THREE.ConeGeometry(0.5, 5, 3).translate(0, 2.5, 0).rotateZ(1.25).rotateY(k * 0.8976).translate(0.35, 9, 0), k % 2 ? 0x3f8f3c : 0x2f7a35));
  return mergeGeometries(parts);
}
function gableGeo() {
  const A = [-.5, 0, -.5], B = [.5, 0, -.5], C = [.5, 0, .5], D = [-.5, 0, .5], E = [-.5, 1, 0], F = [.5, 1, 0], v = [];
  const tri = (a, b, c) => v.push(...a, ...b, ...c);
  tri(A, F, B); tri(A, E, F); tri(C, E, D); tri(C, F, E); tri(A, D, E); tri(B, F, C);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); g.computeVertexNormals(); return g;
}
const memoTex = {};
function interTex() {
  if (memoTex.inter) return memoTex.inter;
  const S = 256, c = mkCanvas(S, S), g = c.getContext('2d'), m = S / (PATCH * 2);
  g.drawImage(asphaltTex(3).image, 0, 0, S, S);
  g.fillStyle = '#eceae2';
  for (let t = 4; t < 20; t += 1.3) { g.fillRect(t * m, 0.4 * m, 0.65 * m, 2.6 * m); g.fillRect(t * m, S - 3 * m, 0.65 * m, 2.6 * m); g.fillRect(0.4 * m, t * m, 2.6 * m, 0.65 * m); g.fillRect(S - 3 * m, t * m, 2.6 * m, 0.65 * m); }
  return (memoTex.inter = canvasTex(c));
}
function highwayTex() {
  if (memoTex.hwy) return memoTex.hwy;
  const W = 600, H = 480, m = W / 30, c = mkCanvas(W, H), g = c.getContext('2d'), R = rng(77);
  g.drawImage(asphaltTex(8).image, 0, 0, W, H); g.drawImage(asphaltTex(9).image, 0, 0, W / 2, H / 2);
  g.globalAlpha = 0.16; g.fillStyle = '#000'; for (const u of [4, 8, 11.6, 18.4, 22, 25.6]) g.fillRect((u - 0.9) * m, 0, 1.8 * m, H); g.globalAlpha = 1;
  const bar = (u, w, col, dash) => { g.fillStyle = col; if (!dash) { g.fillRect((u - w / 2) * m, 0, w * m, H); return; } for (let y = 0; y < H; y += (dash[0] + dash[1]) * m) g.fillRect((u - w / 2) * m, y, w * m, dash[0] * m); };
  bar(2.0, 0.22, '#ecece6'); bar(28.0, 0.22, '#ecece6');                  // outer edge lines
  bar(5.6, 0.14, '#ecece6', [3, 9]); bar(9.2, 0.14, '#ecece6', [3, 9]);   // lane dashes
  bar(20.8, 0.14, '#ecece6', [3, 9]); bar(24.4, 0.14, '#ecece6', [3, 9]);
  bar(13.1, 0.16, '#e8b92a'); bar(16.9, 0.16, '#e8b92a');                 // median edge
  g.fillStyle = '#58595c'; g.fillRect(13.3 * m, 0, 3.4 * m, H);           // median strip
  g.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(0,0,0,${R() * 0.5})`; g.fillRect(R() * W, R() * H, 1 + R() * 3, 1 + R() * 2); }
  g.globalCompositeOperation = 'destination-over'; g.fillStyle = '#3c3f46'; g.fillRect(0, 0, W, H);
  return (memoTex.hwy = canvasTex(c));
}
function signTex(top, bottom) {
  const c = mkCanvas(512, 160), g = c.getContext('2d'); g.fillStyle = '#0e6b43'; g.fillRect(0, 0, 512, 160);
  g.strokeStyle = '#fff'; g.lineWidth = 6; g.strokeRect(8, 8, 496, 144); g.fillStyle = '#fff'; g.textAlign = 'center';
  g.font = '700 54px Arial, Helvetica, sans-serif'; g.fillText(top, 256, 78); g.font = '600 34px Arial, Helvetica, sans-serif'; g.fillText(bottom, 256, 126); return canvasTex(c);
}

/* ================================================================================= */
export function buildOpen(map, ctx) {
  const { group, grid, updaters } = ctx;
  const R0 = rng(31337), night = false;
  const ins = o => grid.insert(o);
  const merge = (list, mat, opts = { cast: false }) => { if (list.length) group.add(mesh(mergeGeometries(list), mat, 0, 0, 0, opts)); };

  /* ---------- ground, beach, sea, sea wall ---------- */
  group.add(mesh(scaleUV(new THREE.CircleGeometry(970, 96).rotateX(-Math.PI / 2), 160, 160), PM(0x6f9f4e, { map: speckleTex(31, { streaks: 700, contrast: 0.2, blobs: 60 }), roughness: 1 }), 0, -0.02, 0, { cast: false }));
  group.add(mesh(scaleUV(new THREE.RingGeometry(950, WALL + 3, 128, 1).rotateX(-Math.PI / 2), 300, 300), PM(0xe6d5a4, { map: speckleTex(12, { contrast: 0.16, blobs: 50, base: 238 }), roughness: 1, ...poly }), 0, -0.015, 0, { cast: false }));
  const sea = makeWater(0x1c6f94, { opacity: 1, repeat: 260 }); updaters.push(sea.update);
  group.add(mesh(new THREE.CircleGeometry(3200, 64).rotateX(-Math.PI / 2), sea.mat, 0, -0.9, 0, { cast: false, receive: false }));
  wallRing(group, WALL, { h: 1.2, t: 1.2, color: 0xc9c6bc, segs: 220 });

  /* ---------- street network (pieces between intersections, so lane paint never overlaps) ---------- */
  const pieces = [], patches = [], padRects = [];
  const patchOK = (i, k) => lineOK('z', i * P, k * P) && lineOK('x', k * P, i * P);
  for (const axis of ['z', 'x']) for (let i = -NI; i <= NI; i++) {
    if (axis === 'x' && i === 0) continue;
    const c = i * P;
    for (let j = -NI; j < NI; j++) {
      const t0 = j * P, t1 = (j + 1) * P;
      const ok0 = axis === 'z' ? patchOK(i, j) : patchOK(j, i), ok1 = axis === 'z' ? patchOK(i, j + 1) : patchOK(j + 1, i);
      const a = t0 + (ok0 ? PATCH : 0), b = t1 - (ok1 ? PATCH : 0);
      let start = null, last = null;
      for (let s = a; s <= b + 0.001; s += 3) {
        const ok = lineOK(axis, c, s);
        if (ok && start === null) start = s;
        if (ok) last = s;
        if ((!ok || s + 3 > b) && start !== null) { if (last - start >= 6) pieces.push({ axis, c, a: start, b: ok ? Math.min(b, s + 3) : last }); start = null; }
      }
    }
  }
  for (let i = -NI; i <= NI; i++) for (let k = -NI; k <= NI; k++) if (patchOK(i, k)) patches.push({ x: i * P, z: k * P });
  const streetGeos = pieces.map(p => {
    const len = p.b - p.a, g = new THREE.PlaneGeometry(len, SW).rotateX(-Math.PI / 2); scaleUV(g, len / 18, 1);
    if (p.axis === 'z') g.rotateY(Math.PI / 2);
    const mid = (p.a + p.b) / 2; return g.translate(p.axis === 'z' ? p.c : mid, 0.03, p.axis === 'z' ? mid : p.c);
  });
  merge(streetGeos, PM(0xffffff, { map: laneTex(), roughness: 0.9, ...poly }), { cast: false });
  merge(patches.map(q => new THREE.PlaneGeometry(PATCH * 2, PATCH * 2).rotateX(-Math.PI / 2).translate(q.x, 0.04, q.z)), PM(0xffffff, { map: interTex(), roughness: 0.9, ...poly }), { cast: false });

  /* ---------- highways: ring road, cross-island road, junctions, beach road ---------- */
  const hwyMat = PM(0xffffff, { map: highwayTex(), roughness: 0.88, side: THREE.DoubleSide, ...poly });
  const ringPts = Array.from({ length: 480 }, (_, i) => { const a = i / 480 * Math.PI * 2; return { x: Math.sin(a) * RING_R, z: Math.cos(a) * RING_R }; });
  group.add(mesh(ribbon(ringPts, HWY * 2, 0.07, { closed: true, tile: 24, u1: 1 }), hwyMat, 0, 0, 0, { cast: false }));
  const ewPts = []; for (let x = -1090; x <= 1090; x += 20) ewPts.push({ x, z: 0 });
  group.add(mesh(ribbon(ewPts, HWY * 2, 0.065, { tile: 24, u1: 1 }), hwyMat, 0, 0, 0, { cast: false }));
  for (const sx of [-1, 1]) group.add(mesh(new THREE.CircleGeometry(27, 40).rotateX(-Math.PI / 2), PM(0xffffff, { map: asphaltTex(), roughness: 0.9, ...poly }), sx * RING_R, 0.085, 0, { cast: false }));
  const coastPts = Array.from({ length: 360 }, (_, i) => { const a = i / 360 * Math.PI * 2; return { x: Math.sin(a) * COAST_R, z: Math.cos(a) * COAST_R }; });
  group.add(mesh(ribbon(coastPts, 16, 0.05, { closed: true, tile: 16, u1: 1 }), PM(0xffffff, { map: laneTex(), roughness: 0.9, side: THREE.DoubleSide, ...poly }), 0, 0, 0, { cast: false }));

  // guard rails + median barrier (instanced boxes, one matching collider each)
  const rails = [], jersey = [];
  const nearArt = (x, z) => { for (let n = -3; n <= 3; n++) { const c = n * P * ART; if (Math.abs(x - c) < 16 || Math.abs(z - c) < 16) return true; } return false; };
  for (const off of [HWY + 0.5, -(HWY + 0.5), 0]) {
    const r = RING_R + off, step = 11.8 / r;
    for (let a = 0; a < Math.PI * 2; a += step) {
      const x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (nearArt(x, z) || Math.abs(z) < 48 || Math.hypot(x, z) > WALL - 6) continue;
      (off === 0 ? jersey : rails).push({ x, z, a });
    }
  }
  const ewRails = [];
  for (const sz of [-1, 1]) for (let x = -1085; x <= 1085; x += 12) {
    const m = ((x % (P * ART)) + P * ART) % (P * ART);
    if (m < 16 || m > P * ART - 16 || Math.abs(Math.abs(x) - RING_R) < 34 || Math.abs(Math.abs(x) - COAST_R) < 16) continue;
    ewRails.push({ x, z: sz * (HWY + 0.5), a: 0 });
  }
  const railGeo = new THREE.BoxGeometry(12, 0.9, 0.35).translate(0, 0.45, 0), jerseyGeo = new THREE.BoxGeometry(12, 1.0, 0.7).translate(0, 0.5, 0);
  const railMat = PM(0xb9bcc2, { metalness: 0.6, roughness: 0.45 }), jerseyMat = PM(0xc8c6c0, { map: concreteTex(), roughness: 0.9 });
  group.add(instanced(railGeo, railMat, [...rails, ...ewRails].map(r => place(r.x, 0, r.z, r.a))));
  group.add(instanced(jerseyGeo, jerseyMat, jersey.map(r => place(r.x, 0, r.z, r.a))));
  for (const r of rails.concat(ewRails)) ins(boxObs(r.x, r.z, 6, 0.2, r.a, { nm: true }));
  for (const r of jersey) ins(boxObs(r.x, r.z, 6, 0.38, r.a, { nm: true }));

  // overhead exit signs
  {
    const steel = PM(0x70757c, { metalness: 0.6, roughness: 0.5 });
    const frame = mergeGeometries([new THREE.BoxGeometry(0.5, 7.2, 0.5).translate(-18, 3.6, 0), new THREE.BoxGeometry(0.5, 7.2, 0.5).translate(18, 3.6, 0), new THREE.BoxGeometry(37, 0.6, 0.6).translate(0, 6.9, 0)]);
    const variants = [['EXIT 4', 'DOWNTOWN'], ['EXIT 7', 'BEACH  PORT'], ['EXIT 2', 'STADIUM']];
    const lists = variants.map(() => []), fl = [];
    const put = (x, z, ry, v) => { fl.push(place(x, 0, z, ry)); lists[v].push(place(x, 0, z, ry)); };
    for (let n = 0; n < 8; n++) { const a = n / 8 * Math.PI * 2 + 0.4; put(Math.sin(a) * RING_R, Math.cos(a) * RING_R, a + Math.PI / 2, n % 3); }
    for (const x of [-860, -420, 260, 860]) put(x, 0, Math.PI / 2, (Math.abs(x) / 10 | 0) % 3);
    group.add(instanced(frame, steel, fl));
    variants.forEach((v, i) => {
      const t = signTex(v[0], v[1]), mat = PM(0xffffff, { map: t, roughness: 0.5, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.12 });
      const panel = mergeGeometries([new THREE.PlaneGeometry(13, 4).translate(0, 4.6, 0.31), new THREE.PlaneGeometry(13, 4).rotateY(Math.PI).translate(0, 4.6, -0.31)]);
      group.add(instanced(panel, mat, lists[i], { cast: false }));
    });
  }

  /* ---------- building kits ---------- */
  const unit = new THREE.BoxGeometry(1, 1, 1);
  const kinds = { glass: [], punched: [], strip: [], shop: [], metal: [], house: [] };
  const roofs = [], antennas = [], chimneys = [];
  const contPools = [0, 1, 2].map(b => ({ m40: [], m20: [], mt: contMats(b) }));
  const tintSets = {
    glass: [0xbfd6ea, 0x9fc0d8, 0xc9d9e2, 0x8fb3c9, 0xa8c4d4], punched: [0xe8dcc4, 0xd9c7a8, 0xc2b09a, 0xece6dc, 0xb6bfc8], strip: [0xe0e4e8, 0xc4ccd4, 0xe4dccc],
    shop: [0xffffff, 0xf4eadc, 0xe9eef2], metal: [0xdfe6ec, 0xc6d0da, 0xe8e0d0, 0xb8c4cf], house: [0xf3e9d8, 0xe7d3b3, 0xd9e2df, 0xe8ccc0, 0xcdd7c1, 0xf1efe8],
  };
  const pick = (R, a) => a[(R() * a.length) | 0];
  const addBox = (kind, x0, z0, w, d, y0, h, R, solid) => {
    kinds[kind].push({ m: place(x0 + w / 2, y0 + h / 2, z0 + d / 2, 0, w, h, d), c: pick(R, tintSets[kind]) });
    if (solid) ins(boxObs(x0 + w / 2, z0 + d / 2, w / 2, d / 2, 0));
  };
  const putCont = (b, L, x, y, z, tint) => { const c = new THREE.Color(tint).multiplyScalar(0.88 + R0() * 0.2); (L === L40 ? contPools[b].m40 : contPools[b].m20).push({ m: place(x, y, z, 0), c }); };
  const yard = (x0, z0, R, b) => {
    const slots = [L40, L40, L20]; let ox = x0 + 1.2;
    for (const L of slots) {
      for (let col = 0; col < 11; col++) {
        const stack = 1 + ((R() * 4) | 0), tint = R() < 0.4 ? TINTS[(R() * TINTS.length) | 0] : TINTS[(col + b * 3) % TINTS.length];
        for (let s = 0; s < stack; s++) putCont(b, L, ox + L / 2, CONT_H / 2 + s * CONT_H, z0 + 1.5 + (col + 0.5) * PITCH, tint);
      }
      ox += L + 0.18;
    }
    ins(boxObs(x0 + LOT / 2, z0 + LOT / 2, 15.6, 15.2, 0));
  };

  /* ---------- trees + lamps go into streamed stores ---------- */
  const trees = new ChunkStore(100), palms = new ChunkStore(100), lamps = new ChunkStore(100);
  const greens = [0x3f7f3a, 0x4f8a42, 0x5a9446, 0x356f34, 0x6a9a3e];
  const addTree = (x, z, s, R) => {
    trees.add(x, z, place(x, 0, z, R() * 6.28, s, s * (0.9 + R() * 0.25), s), greens[(R() * greens.length) | 0], R());
    ins(circleObs(x, z, 0.5 * s, { nm: true }));
  };
  const addPalm = (x, z, R) => { const s = 0.9 + R() * 0.5; palms.add(x, z, place(x, 0, z, R() * 6.28, s), 0xffffff, R()); ins(circleObs(x, z, 0.4 * s, { nm: true })); };
  const addLamp = (x, z, ry) => { lamps.add(x, z, place(x, 0, z, ry), 0xffffff, 0); ins(circleObs(x, z, 0.3, { nm: true })); };

  /* ---------- blocks and lots ---------- */
  const padPave = [], padConc = [], lawns = [], lots = [];
  const lawn = (x0, z0, w, d) => lawns.push(scaleUV(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), w / 6, d / 6).translate(x0 + w / 2, 0.05, z0 + d / 2));
  const roofCols = [0x8a3b2a, 0x4a4d55, 0x5b4636, 0x3c4a5c, 0x7a4a34];
  for (let i = -NI; i < NI; i++) for (let k = -NI; k < NI; k++) {
    const bx0 = i * P + SH, bz0 = k * P + SH, bcx = bx0 + 36, bcz = bz0 + 36, rc = Math.hypot(bcx, bcz);
    if (rc > GRID_R - 25 || Math.hypot(bcx - STADIUM.x, bcz - STADIUM.z) < 120 || Math.abs(rc - RING_R) < 58) continue;
    const bd = districtAt(bcx, bcz);
    let built = 0;
    for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) {
      const lx0 = bx0 + 3 + a * LOT, lz0 = bz0 + 3 + b * LOT, lcx = lx0 + LOT / 2, lcz = lz0 + LOT / 2, rl = Math.hypot(lcx, lcz);
      if (Math.abs(lcz) < 47 || Math.abs(rl - RING_R) < 47 || rl > GRID_R - 15) continue;
      const R = rng(hs(i, k, a, b)), d = districtAt(lcx, lcz), roll = R();
      built++; lots.push({ x: lcx, z: lcz });
      if (d === 'Downtown') {
        if (lx0 === 45 && lz0 === 45) {                                  // landmark tower
          addBox('shop', lx0, lz0, LOT, LOT, 0, 7.2, R, true);
          addBox('glass', lx0 + 3, lz0 + 3, 27, 27, 7.2, 54 * 3.6 - 7.2, R, false);
          addBox('glass', lx0 + 9, lz0 + 9, 15, 15, 54 * 3.6, 7.2 * 2, R, false);
          antennas.push({ m: place(lx0 + 16.5, 54 * 3.6 + 14.4, lz0 + 16.5, 0, 1, 2.2, 1) });
        } else if (roll < 0.58) {
          const floors = Math.max(8, Math.min(44, Math.round((10 + R() * 30) * (1.25 - rl / 300))));
          addBox('shop', lx0, lz0, LOT, LOT, 0, 7.2, R, true);
          const tw = q3(18 + R() * 9), td = q3(18 + R() * 9), ox = Math.floor(R() * ((LOT - tw) / 3 + 1)) * 3, oz = Math.floor(R() * ((LOT - td) / 3 + 1)) * 3, H = floors * 3.6;
          const kind = R() < 0.65 ? 'glass' : R() < 0.5 ? 'strip' : 'punched';
          addBox(kind, lx0 + ox, lz0 + oz, tw, td, 7.2, H - 7.2, R, false);
          if (floors > 26 && R() < 0.6 && tw > 12 && td > 12) addBox(kind, lx0 + ox + 3, lz0 + oz + 3, tw - 6, td - 6, H, 14.4, R, false);
        } else if (roll < 0.88) {
          const W = q3(27 + R() * 6), D = q3(27 + R() * 6), ox = ((LOT - W) / 6 | 0) * 3, oz = ((LOT - D) / 6 | 0) * 3, floors = 5 + ((R() * 9) | 0);
          addBox('shop', lx0 + ox, lz0 + oz, W, D, 0, 7.2, R, true);
          addBox(R() < 0.5 ? 'punched' : 'strip', lx0 + ox, lz0 + oz, W, D, 7.2, (floors - 2) * 3.6, R, false);
        } else { lawn(lx0, lz0, LOT, LOT); for (let n = 0; n < 7; n++) addTree(lx0 + 3 + R() * 27, lz0 + 3 + R() * 27, 0.9 + R() * 0.5, R); }
      } else if (d === 'Midtown') {
        if (roll < 0.42) {
          const W = q3(27 + R() * 6), D = q3(24 + R() * 9), floors = 3 + ((R() * 7) | 0);
          addBox('shop', lx0, lz0, W, D, 0, 7.2, R, true); addBox(R() < 0.6 ? 'punched' : 'strip', lx0, lz0, W, D, 7.2, (floors - 2) * 3.6, R, false);
        } else if (roll < 0.66) {
          addBox('shop', lx0, lz0, LOT, 21, 0, 7.2, R, true);
          addBox('strip', lx0, lz0, LOT, 21, 7.2, 7.2 * (1 + (R() * 2 | 0)), R, false);
        } else if (roll < 0.82) { lawn(lx0, lz0, LOT, LOT); for (let n = 0; n < 8; n++) addTree(lx0 + 3 + R() * 27, lz0 + 3 + R() * 27, 0.9 + R() * 0.5, R); }
        else { padConc.push(new THREE.PlaneGeometry(LOT, LOT).rotateX(-Math.PI / 2).translate(lcx, 0.05, lcz)); for (let n = 0; n < 3; n++) addTree(lx0 + 2 + R() * 29, lz0 + 2 + R() * 29, 0.8, R); }
      } else if (d === 'Suburbs') {
        if (roll < 0.07) { lawn(lx0, lz0, LOT, LOT); for (let n = 0; n < 9; n++) addTree(lx0 + 3 + R() * 27, lz0 + 3 + R() * 27, 1 + R() * 0.6, R); }
        else if (roll < 0.11) { addBox('strip', lx0, lz0 + 6, LOT, 21, 0, 7.2, R, true); }
        else {
          lawn(lx0, lz0, LOT, LOT);
          for (let ha = 0; ha < 2; ha++) for (let hb = 0; hb < 2; hb++) {
            const hx = lx0 + 3 + ha * 18, hz = lz0 + 3 + hb * 18, hh = R() < 0.4 ? 3.6 : 7.2, ry = R() < 0.5 ? 0 : Math.PI / 2;
            kinds.house.push({ m: place(hx + 4.5, hh / 2, hz + 4.5, 0, 9, hh, 9), c: pick(R, tintSets.house) });
            roofs.push({ m: place(hx + 4.5, hh, hz + 4.5, ry, 10.4, 3.2, 10.4), c: roofCols[(R() * roofCols.length) | 0] });
            ins(boxObs(hx + 4.5, hz + 4.5, 4.5, 4.5, 0));
          }
          addTree(lx0 + 16.5 + (R() - .5) * 3, lz0 + 16.5 + (R() - .5) * 3, 1 + R() * 0.6, R); if (R() < 0.6) addTree(lx0 + 1.2, lz0 + 1.2 + R() * 30, 0.8, R);
        }
      } else if (d === 'Industrial') {
        if (roll < 0.4) {
          const D = q3(21 + R() * 12);
          addBox('metal', lx0, lz0, LOT, D, 0, 10.8, R, true);
          if (R() < 0.3) { chimneys.push({ m: place(lx0 + 6, 0, lz0 + D + 4, 0) }); ins(circleObs(lx0 + 6, lz0 + D + 4, 2.4)); }
        } else yard(lx0, lz0, R, (hs(i, k, a, b) >>> 3) % 3);
      }
    }
    if (built) {
      padRects.push({ x0: bx0, z0: bz0, x1: bx0 + 72, z1: bz0 + 72 });
      const pg = scaleUV(new THREE.PlaneGeometry(72, 72).rotateX(-Math.PI / 2), 18, 18).translate(bx0 + 36, 0.035, bz0 + 36);
      (bd === 'Industrial' ? padConc : padPave).push(pg);
    }
  }
  merge(padPave, PM(0xe2ded6, { map: paveTex(7, 205, 158), roughness: 0.88, ...poly }), { cast: false });
  merge(padConc, PM(0xcfd1d3, { map: concreteTex(), roughness: 0.92, ...poly }), { cast: false });
  merge(lawns, PM(0x76ad54, { map: speckleTex(31, { streaks: 900, contrast: 0.2, blobs: 60 }), roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), { cast: false });

  /* ---------- port yards, cranes, beach furniture ---------- */
  {
    const R = rng(555), cranes = new THREE.Group();
    for (let n = 0; n < 12; n++) {
      const a = 1.78 + (n % 6) * 0.145, r = n < 6 ? 1040 : 1075, x = Math.round(Math.sin(a) * r / 3) * 3, z = Math.round(Math.cos(a) * r / 3) * 3;
      padConc.push(new THREE.PlaneGeometry(LOT + 3, LOT + 3).rotateX(-Math.PI / 2).translate(x, 0.05, z));
      yard(x - LOT / 2, z - LOT / 2, R, n % 3);
    }
    merge(padConc.slice(-12), PM(0xb9bcbf, { map: concreteTex(5), roughness: 0.95, ...poly }), { cast: false });
    const red = PM(0xd8452b, { roughness: 0.55, metalness: 0.3 }), grey = PM(0x8c9298, { roughness: 0.5, metalness: 0.5 });
    for (const a of [1.85, 2.2, 2.5]) {
      const g = new THREE.Group(), cx = Math.sin(a) * 1118, cz = Math.cos(a) * 1118;
      for (const sx of [-1, 1]) for (const zz of [0, -14]) g.add(mesh(new THREE.BoxGeometry(1.8, 32, 1.8), red, sx * 9, 16, zz));
      for (const sx of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(1.4, 1.4, 15.8), red, sx * 9, 31.5, -7));
      g.add(mesh(new THREE.BoxGeometry(2.6, 2.4, 78), red, 0, 36, 14)); g.add(mesh(new THREE.BoxGeometry(6, 4, 8), grey, 0, 39, -8)); g.add(mesh(new THREE.BoxGeometry(4, 2.4, 5), grey, 0, 33.8, 40));
      g.position.set(cx, 0, cz); g.rotation.y = a; group.add(g);
      for (const sx of [-1, 1]) for (const zz of [0, -14]) { const lx = sx * 9; ins(boxObs(cx + lx * Math.cos(a) + zz * Math.sin(a), cz - lx * Math.sin(a) + zz * Math.cos(a), 1.1, 1.1, a, { nm: true })); }
    }
    // sunshades, lifeguard huts
    const um = [], uc = [0xe0463a, 0x2f7dff, 0xffc21a, 0x2fe3a0, 0xffffff];
    for (let n = 0; n < 90; n++) { const a = R() * 6.283, r = 1010 + R() * 120, x = Math.sin(a) * r, z = Math.cos(a) * r; if (districtAt(x, z) !== 'Beach' || Math.abs(z) < 30 || (Math.atan2(x, z) > 1.7 && Math.atan2(x, z) < 2.6)) continue; um.push({ m: place(x, 0, z, 0), c: uc[n % 5] }); ins(circleObs(x, z, 0.5, { nm: true })); }
    group.add(instanced(mergeGeometries([new THREE.CylinderGeometry(0.05, 0.05, 2.6, 5).translate(0, 1.3, 0), new THREE.ConeGeometry(1.7, 0.6, 8).translate(0, 2.7, 0)].map(g => vcol(g, 0xffffff))), PM(0xffffff, { vertexColors: true, roughness: 0.8, side: THREE.DoubleSide }), um));
    for (let n = 0; n < 900; n++) { const a = R() * 6.283, r = 975 + R() * 160, x = Math.sin(a) * r, z = Math.cos(a) * r; const an = Math.atan2(x, z); if (districtAt(x, z) === 'Beach' && Math.abs(z) > 30 && Math.abs(r - COAST_R) > 12 && !(an > 1.7 && an < 2.6)) addPalm(x, z, R); }
  }

  /* ---------- street furniture along every street piece ---------- */
  const trafficPoles = [];
  for (const p of pieces) {
    const R = rng(hs(p.axis === 'z' ? 1 : 2, p.c, p.a | 0)), pt = s => p.axis === 'z' ? [p.c, s] : [s, p.c];
    let side = 1;
    for (let s = p.a + 12; s < p.b - 8; s += 45) {
      const lat = side * (SH + 1.1), [x, z] = p.axis === 'z' ? [p.c + lat, s] : [s, p.c + lat];
      if (!inHwy(x, z)) addLamp(x, z, p.axis === 'z' ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : (side > 0 ? Math.PI : 0)); side = -side;
    }
    for (let s = p.a + 8; s < p.b - 6; s += 15) {
      const [mx, mz] = pt(s), d = districtAt(mx, mz);
      const dens = d === 'Suburbs' ? 0.8 : d === 'Midtown' ? 0.5 : d === 'Downtown' ? 0.25 : 0;
      for (const sd of [1, -1]) if (R() < dens) { const lat = sd * (SH + 2.4), [x, z] = p.axis === 'z' ? [p.c + lat, s + 7] : [s + 7, p.c + lat]; if (!inHwy(x, z)) addTree(x, z, 0.8 + R() * 0.3, R); }
    }
  }
  for (const q of patches) if (isArt(q.x) && isArt(q.z)) for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) { const x = q.x + sx * (PATCH + 0.6), z = q.z + sz * (PATCH + 0.6); trafficPoles.push({ m: place(x, 0, z, Math.atan2(-sx, -sz)), c: (sx * sz > 0) ? 0xff3a2a : 0x34e070 }); ins(circleObs(x, z, 0.3, { nm: true })); }
  // greenbelt trees beside the highways
  {
    const R = rng(909), nearLot = (x, z) => { for (const l of lots) if (Math.abs(x - l.x) < 19 && Math.abs(z - l.z) < 19) return true; return false; };
    for (let n = 0; n < 2600; n++) {
      const a = R() * 6.283, off = (HWY + 4 + R() * 38) * (R() < 0.5 ? -1 : 1), r = RING_R + off, x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (nearArt(x, z) || Math.abs(z) < 50 || Math.hypot(x, z) > GRID_R || nearStreet(x, z) || nearLot(x, z)) continue; addTree(x, z, 0.9 + R() * 0.7, R);
    }
    for (let n = 0; n < 900; n++) { const x = (R() - .5) * 2000, z = (HWY + 4 + R() * 30) * (R() < 0.5 ? -1 : 1); if (nearArt(x, z) || Math.hypot(x, z) > GRID_R || Math.abs(Math.hypot(x, z) - RING_R) < 52 || nearStreet(x, z) || nearLot(x, z)) continue; addTree(x, z, 0.9 + R() * 0.7, R); }
  }
  trees.finish(); palms.finish(); lamps.finish();

  /* ---------- flush instanced static geometry ---------- */
  for (const kd of ['glass', 'punched', 'strip', 'shop', 'metal', 'house']) if (kinds[kd].length) group.add(instanced(unit, facadeMaterial(kd), kinds[kd]));
  group.add(instanced(gableGeo(), PM(0xffffff, { roughness: 0.85, side: THREE.DoubleSide }), roofs));
  group.add(instanced(new THREE.CylinderGeometry(1.4, 2.1, 46, 12).translate(0, 23, 0), PM(0xd8d4cc, { roughness: 0.8, map: concreteTex(3) }), chimneys));
  group.add(instanced(new THREE.CylinderGeometry(0.12, 0.3, 30, 6).translate(0, 15, 0), PM(0xc0c4c8, { metalness: 0.7, roughness: 0.4 }), antennas));
  if (antennas.length) { const a = antennas[0].m.elements; group.add(mesh(new THREE.SphereGeometry(0.9, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff3030 }), a[12], a[13] + 62, a[14], { cast: false })); }
  for (const p of contPools) { if (p.m40.length) group.add(instanced(contGeo(L40), p.mt, p.m40)); if (p.m20.length) group.add(instanced(contGeo(L20), p.mt, p.m20)); }
  const steel = PM(0x30343a, { metalness: 0.6, roughness: 0.45 });
  group.add(instanced(new THREE.CylinderGeometry(0.08, 0.12, 4.6, 8).translate(0, 2.3, 0), steel, trafficPoles.map(t => t.m)));
  group.add(instanced(new THREE.BoxGeometry(0.42, 1.1, 0.36).translate(0, 5, 0), new THREE.MeshBasicMaterial({ color: 0xffffff }), trafficPoles, { cast: false }));

  /* ---------- stadium ---------- */
  {
    const bowl = new THREE.LatheGeometry([[46, 0], [46, 5], [54, 14], [72, 15], [72, 0]].map(([x, y]) => new THREE.Vector2(x, y)), 72);
    const cc = mkCanvas(512, 512), cg = cc.getContext('2d'); cg.fillStyle = '#4c9a43'; cg.fillRect(0, 0, 512, 512); for (let n = 0; n < 12; n++) { cg.fillStyle = n % 2 ? '#47923f' : '#55a34b'; cg.fillRect(0, n * 42.6, 512, 42.6); } cg.strokeStyle = '#fff'; cg.lineWidth = 4; cg.beginPath(); cg.arc(256, 256, 60, 0, 7); cg.moveTo(0, 256); cg.lineTo(512, 256); cg.stroke();
    group.add(mesh(bowl, PM(0xcfcbc2, { map: concreteTex(14), roughness: 0.85, side: THREE.DoubleSide }), STADIUM.x, 0, STADIUM.z));
    group.add(mesh(new THREE.CircleGeometry(46, 48).rotateX(-Math.PI / 2), PM(0xffffff, { map: canvasTex(cc), roughness: 1 }), STADIUM.x, 0.06, STADIUM.z, { cast: false }));
    for (let n = 0; n < 4; n++) { const a = n * Math.PI / 2 + Math.PI / 4, x = STADIUM.x + Math.sin(a) * 74, z = STADIUM.z + Math.cos(a) * 74; group.add(mesh(new THREE.CylinderGeometry(0.5, 0.8, 38, 8), steel, x, 19, z)); group.add(mesh(new THREE.BoxGeometry(7, 3, 1), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4d0, emissiveIntensity: 1.4 }), x, 38.5, z, { ry: a, cast: false })); }
    ins(circleObs(STADIUM.x, STADIUM.z, STADIUM.r));
  }

  /* ---------- pier + ferris wheel ---------- */
  {
    const a0 = -1.45, px = Math.sin(a0) * 1070, pz = Math.cos(a0) * 1070;
    group.add(mesh(new THREE.CircleGeometry(48, 40).rotateX(-Math.PI / 2), PM(0xd7d0c4, { map: paveTex(4, 205, 160, 64), ...poly }), px, 0.06, pz, { cast: false }));
    const th = a0 + Math.PI / 2, wheel = new THREE.Group(), hub = 26, Rw = 22;
    const gm = [0xff4d6d, 0x2f7dff, 0xffc21a, 0x2fe3a0], gond = [];
    const w = new THREE.Group(); w.position.y = hub;
    w.add(mesh(new THREE.TorusGeometry(Rw, 0.4, 6, 56), PM(0xe9e9ee, { metalness: 0.4 }), 0, 0, 0, { cast: false }));
    w.add(mesh(new THREE.TorusGeometry(Rw * 0.55, 0.25, 6, 40), PM(0xe9e9ee, { metalness: 0.4 }), 0, 0, 0, { cast: false }));
    for (let n = 0; n < 12; n++) { const sp = mesh(new THREE.BoxGeometry(Rw * 2, 0.18, 0.18), PM(0xe9e9ee), 0, 0, 0, { cast: false }); sp.rotation.z = n * Math.PI / 12; w.add(sp); }
    for (let n = 0; n < 16; n++) { const a = n / 16 * Math.PI * 2, gdl = mesh(new THREE.BoxGeometry(2.2, 1.8, 2.4), PM(gm[n % 4], { roughness: 0.5 }), Math.cos(a) * Rw, Math.sin(a) * Rw - 1.2, 0, { cast: false }); const pv = new THREE.Group(); pv.position.set(Math.cos(a) * Rw, Math.sin(a) * Rw, 0); gdl.position.set(0, -1.3, 0); pv.add(gdl); w.add(pv); gond.push({ pv, a }); }
    wheel.add(w);
    for (const sz of [-1, 1]) for (const sx of [-1, 1]) { const leg = mesh(new THREE.BoxGeometry(0.9, hub + 2, 0.9), PM(0xd0d2d8, { metalness: 0.4 }), sx * 5, (hub + 2) / 2, sz * 3.2); leg.rotation.z = -sx * 0.2; wheel.add(leg); }
    wheel.position.set(px, 0, pz); wheel.rotation.y = th; group.add(wheel);
    for (const sz of [-1, 1]) ins(boxObs(px + sz * 3.2 * Math.sin(th), pz + sz * 3.2 * Math.cos(th), 9, 1.5, th, { nm: true }));
    updaters.push(dt => { w.rotation.z -= dt * 0.1; for (const g of gond) g.pv.rotation.z = -w.rotation.z; });
  }

  /* ---------- sky dressing ---------- */
  addClouds(group, 21, false);
  const stars = new THREE.Points((() => { const g = new THREE.BufferGeometry(), p = []; const R = rng(5); for (let n = 0; n < 1400; n++) { const a = R() * 6.283, e = 0.08 + R() * 1.4, r = 1400; p.push(Math.sin(a) * Math.cos(e) * r, Math.sin(e) * r, Math.cos(a) * Math.cos(e) * r); } g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); return g; })(),
    new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.9 }));
  stars.visible = false; stars.frustumCulled = false; group.add(stars);

  /* ---------- streamed pools ---------- */
  const treeCrown = mergeGeometries([blob(2.7, 3, 1).translate(0, 5.4, 0), blob(2.0, 4, 1).translate(1.4, 4.5, 0.5), blob(1.9, 5, 1).translate(-1.2, 6.4, -0.4)]);
  const treePool = new Pool(group, trees, [{ geo: new THREE.CylinderGeometry(0.26, 0.46, 3.6, 7).translate(0, 1.8, 0), mat: PM(0x5a4333, { roughness: 1 }) }, { geo: treeCrown, mat: PM(0xffffff, { roughness: 0.9 }), color: true }]);
  const palmPool = new Pool(group, palms, [{ geo: palmGeo(), mat: PM(0xffffff, { vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }) }]);
  const lampHead = PM(0xfff4d0, { emissive: 0xffe9a8, emissiveIntensity: 0.6 });
  const lampPool = new Pool(group, lamps, [
    { geo: mergeGeometries([new THREE.CylinderGeometry(0.1, 0.17, 9, 8).translate(0, 4.5, 0), new THREE.BoxGeometry(0.12, 0.12, 2.4).translate(0, 8.9, 1.2)]), mat: steel },
    { geo: new THREE.BoxGeometry(0.5, 0.16, 0.95).translate(0, 8.82, 2.2), mat: lampHead, cast: false }]);

  /* ---------- road mask: roads and paving grip, grass and sand don't ---------- */
  const MN = 600, MC = 4, mask = new Uint8Array(MN * MN);
  const mark = (x0, z0, x1, z1) => { for (let ix = Math.max(0, Math.floor((x0 + 1200) / MC)); ix <= Math.min(MN - 1, Math.floor((x1 + 1200) / MC)); ix++) for (let iz = Math.max(0, Math.floor((z0 + 1200) / MC)); iz <= Math.min(MN - 1, Math.floor((z1 + 1200) / MC)); iz++) mask[iz * MN + ix] = 1; };
  for (const p of pieces) p.axis === 'z' ? mark(p.c - SH, p.a, p.c + SH, p.b) : mark(p.a, p.c - SH, p.b, p.c + SH);
  for (const q of patches) mark(q.x - PATCH, q.z - PATCH, q.x + PATCH, q.z + PATCH);
  for (const r of padRects) mark(r.x0, r.z0, r.x1, r.z1);
  for (let iz = 0; iz < MN; iz++) for (let ix = 0; ix < MN; ix++) {
    const x = ix * MC - 1200 + 2, z = iz * MC - 1200 + 2, r = Math.hypot(x, z);
    if (Math.abs(r - RING_R) < HWY || (Math.abs(z) < HWY && Math.abs(x) < 1095) || Math.abs(r - COAST_R) < 8) mask[iz * MN + ix] = 1;
  }
  const onRoad = (x, z) => { const ix = Math.floor((x + 1200) / MC), iz = Math.floor((z + 1200) / MC); return ix >= 0 && iz >= 0 && ix < MN && iz < MN && mask[iz * MN + ix] === 1; };

  /* ---------- minimap (pre-rendered once) ---------- */
  const MM = 1024, K = MM / 2400, mm = mkCanvas(MM, MM), mg = mm.getContext('2d');
  const mx = x => (1200 - x) * K, my = z => (1200 - z) * K;
  mg.fillStyle = '#1b5d82'; mg.fillRect(0, 0, MM, MM);
  mg.fillStyle = '#e3d29f'; mg.beginPath(); mg.arc(mx(0), my(0), (WALL + 3) * K, 0, 7); mg.fill();
  mg.fillStyle = '#6f9f4e'; mg.beginPath(); mg.arc(mx(0), my(0), 965 * K, 0, 7); mg.fill();
  for (const r of padRects) { const d = districtAt((r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2); mg.fillStyle = d === 'Downtown' ? '#b8b3c4' : d === 'Midtown' ? '#cbc6b8' : d === 'Industrial' ? '#a9adb1' : '#9cc47a'; mg.fillRect(mx(r.x1), my(r.z1), 72 * K, 72 * K); }
  mg.fillStyle = '#4c9a43'; mg.beginPath(); mg.arc(mx(STADIUM.x), my(STADIUM.z), 72 * K, 0, 7); mg.fill();
  mg.strokeStyle = '#f4f1ea'; mg.lineCap = 'butt';
  for (const p of pieces) { mg.lineWidth = Math.max(1.2, 14 * K); mg.beginPath(); if (p.axis === 'z') { mg.moveTo(mx(p.c), my(p.a)); mg.lineTo(mx(p.c), my(p.b)); } else { mg.moveTo(mx(p.a), my(p.c)); mg.lineTo(mx(p.b), my(p.c)); } mg.stroke(); }
  mg.strokeStyle = '#ff9d2e'; mg.lineWidth = 30 * K; mg.beginPath(); mg.arc(mx(0), my(0), RING_R * K, 0, 7); mg.stroke();
  mg.beginPath(); mg.moveTo(mx(-1090), my(0)); mg.lineTo(mx(1090), my(0)); mg.stroke();
  mg.strokeStyle = '#f4f1ea'; mg.lineWidth = 12 * K; mg.beginPath(); mg.arc(mx(0), my(0), COAST_R * K, 0, 7); mg.stroke();
  const drawMinimap = (g, px, S) => {
    const span = 560, s = px / (span * K);
    g.clearRect(0, 0, px, px); g.save(); g.translate(px / 2, px / 2); g.rotate(S.h); g.scale(s, s); g.translate(-mx(S.x), -my(S.z)); g.drawImage(mm, 0, 0); g.restore();
    g.fillStyle = '#ff3b3b'; g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.moveTo(px / 2, px / 2 - 9); g.lineTo(px / 2 + 6, px / 2 + 7); g.lineTo(px / 2, px / 2 + 3); g.lineTo(px / 2 - 6, px / 2 + 7); g.closePath(); g.fill(); g.stroke();
  };

  /* ---------- traffic + runtime api ---------- */
  const traffic = new Traffic(group, { lineOK, P, RING_R }, 48);
  const api = {
    view: 380, density: 1, trafficOn: true, trafficMax: 24, onZone: null, _zone: '', _zt: 0,
    setQuality(view, density, trafficMax) { this.view = view; this.density = density; this.trafficMax = trafficMax; traffic.setCount(this.trafficOn ? trafficMax : 0); },
    setTraffic(on) { this.trafficOn = on; traffic.setCount(on ? this.trafficMax : 0); },
    setNight(v) { NIGHT.value = v; lampHead.emissiveIntensity = 0.6 + 3.6 * v; stars.visible = v > 0.5; this.night = v; },
    update(S, dt) {
      const rad = this.view * 1.15 + 60;
      treePool.update(S.x, S.z, rad, this.density); palmPool.update(S.x, S.z, rad, this.density); lampPool.update(S.x, S.z, Math.min(rad, this.view * 0.9 + 60), 1);
      stars.position.set(S.x, 0, S.z);
      traffic.update(S.x, S.z, dt, this.view * 0.95);
      this._zt -= dt; if (this._zt <= 0) { this._zt = 0.25; const n = districtAt(S.x, S.z); if (n !== this._zone) { this._zone = n; if (this.onZone) this.onZone(n); } }
    },
    collideTraffic(S, hit) { traffic.collide(S, hit); },
    onRoad, drawMinimap, districtAt,
  };
  api.setQuality(380, 1, 24);
  return { wall: WALL, isl: 0, roadHalf: 9, spawn: { x: -4.5, z: -315, h: 0 }, open: api };
}
