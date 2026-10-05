import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rng, PM, canvasTex, mkCanvas, scaleUV, boxUV, place, instanced, mesh, paveTex, laneTex, asphaltTex, speckleTex,
  makeWater, scatterTrees, wallRing, hillRing, addClouds, concreteTex } from './wtex.js';
import { boxObs, circleObs } from './collision.js';

/* ---------------- facade textures: one tile = 6 bays x 4 floors = 18 m x 14.4 m ---------------- */
const texCache = new Map();
function facadeCanvas(kind, lit) {
  const W = kind === 'shop' ? 768 : 640, H = kind === 'shop' ? 320 : 512;
  const c = mkCanvas(W, H), g = c.getContext('2d'), R = rng(kind.length * 977 + (lit ? 5 : 1));
  const nb = kind === 'shop' ? 4 : 6, nf = kind === 'shop' ? 1 : 4, bw = W / nb, fh = H / nf;
  if (lit) { g.fillStyle = '#000'; g.fillRect(0, 0, W, H); }
  const warm = () => { const v = 175 + R() * 80 | 0; return `rgb(${v},${v * 0.86 | 0},${v * 0.55 | 0})`; };
  if (kind === 'glass') {
    if (!lit) { g.fillStyle = '#dfe6ec'; g.fillRect(0, 0, W, H); }
    for (let f = 0; f < nf; f++) for (let b = 0; b < nb; b++) {
      const x = b * bw, y = f * fh;
      if (lit) { if (R() < 0.3) { g.fillStyle = warm(); g.fillRect(x + 3, y + 5, bw - 6, fh - 24); } continue; }
      const k = (R() - 0.5) * 18, gr = g.createLinearGradient(0, y, 0, y + fh);
      gr.addColorStop(0, `rgb(${111 + k},${148 + k},${179 + k})`); gr.addColorStop(1, `rgb(${46 + k},${74 + k},${99 + k})`);
      g.fillStyle = gr; g.fillRect(x + 3, y + 5, bw - 6, fh - 10);
      if (R() < 0.4) { g.fillStyle = 'rgba(255,255,255,0.10)'; g.beginPath(); g.moveTo(x + 3, y + fh - 5); g.lineTo(x + bw * 0.6, y + 5); g.lineTo(x + bw - 3, y + 5); g.lineTo(x + bw * 0.4, y + fh - 5); g.fill(); }
      g.fillStyle = '#c7d0d8'; g.fillRect(x + 3, y + fh - 16, bw - 6, 11);        // spandrel
    }
  } else if (kind === 'punched') {
    if (!lit) { g.fillStyle = '#e4ddd0'; g.fillRect(0, 0, W, H); for (let i = 0; i < 5000; i++) { const v = R() > .5 ? 255 : 0; g.fillStyle = `rgba(${v},${v},${v},${R() * 0.07})`; g.fillRect(R() * W, R() * H, 2, 2); } }
    for (let f = 0; f < nf; f++) for (let b = 0; b < nb; b++) {
      const x = b * bw + bw * 0.2, y = f * fh + fh * 0.2, w = bw * 0.6, h = fh * 0.58;
      if (lit) { if (R() < 0.3) { g.fillStyle = warm(); g.fillRect(x, y, w, h); } continue; }
      const gr = g.createLinearGradient(0, y, 0, y + h); gr.addColorStop(0, '#3d566b'); gr.addColorStop(1, '#1f3142');
      g.fillStyle = gr; g.fillRect(x, y, w, h);
      g.fillStyle = '#f6f1e8'; g.fillRect(x - 5, y + h, w + 10, 6);                 // sill
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x - 2, y - 5, w + 4, 5);        // lintel shadow
      g.fillStyle = 'rgba(210,225,235,0.55)'; g.fillRect(x + w / 2 - 1, y, 2, h);  // mullion
    }
  } else if (kind === 'strip') {
    if (!lit) { g.fillStyle = '#d3d7dc'; g.fillRect(0, 0, W, H); }
    for (let f = 0; f < nf; f++) {
      const y = f * fh + fh * 0.2, h = fh * 0.54;
      if (lit) { for (let b = 0; b < nb * 2; b++) if (R() < 0.3) { g.fillStyle = warm(); g.fillRect(b * bw / 2 + 2, y, bw / 2 - 4, h); } continue; }
      const gr = g.createLinearGradient(0, y, 0, y + h); gr.addColorStop(0, '#5a7a94'); gr.addColorStop(1, '#2a4256');
      g.fillStyle = gr; g.fillRect(0, y, W, h);
      g.fillStyle = '#c4cad0'; for (let b = 0; b <= nb * 2; b++) g.fillRect(b * bw / 2 - 2, y, 4, h);
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, y + h, W, 8);
    }
  } else {                                                                            // ground-floor shops
    if (!lit) { g.fillStyle = '#cdc4b6'; g.fillRect(0, 0, W, H); }
    const signs = ['#b23a3a', '#2f5f8f', '#2f7a4f', '#c7922a', '#5a3d7a', '#e0e0e0'];
    for (let b = 0; b < nb; b++) {
      const x = b * bw;
      if (lit) { g.fillStyle = warm(); g.fillRect(x + 12, 92, bw - 56, H - 100); g.fillStyle = signs[(b + 2) % 6]; g.fillRect(x + 12, 18, bw - 24, 50); continue; }
      const gr = g.createLinearGradient(0, 90, 0, H); gr.addColorStop(0, '#5c7f98'); gr.addColorStop(1, '#223645');
      g.fillStyle = gr; g.fillRect(x + 12, 92, bw - 56, H - 100);
      g.fillStyle = '#2c3138'; g.fillRect(x + bw - 40, 92, 26, H - 92);           // door
      g.fillStyle = 'rgba(170,200,220,0.35)'; g.fillRect(x + bw - 36, 100, 18, H - 120);
      g.fillStyle = signs[(b * 2 + 1) % 6]; g.fillRect(x + 12, 18, bw - 24, 50);   // sign band
      g.fillStyle = 'rgba(255,255,255,0.75)'; g.fillRect(x + 28, 36, (bw - 56) * (0.5 + R() * 0.4), 10);
      g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(x + 12, 70, bw - 24, 8);         // awning shadow
    }
  }
  return c;
}
function facadeMat(kind, tint, night) {
  const key = kind + tint + night;
  if (texCache.has(key)) return texCache.get(key);
  const mk = lit => { const k = 'tex' + kind + lit; if (!texCache.has(k)) texCache.set(k, canvasTex(facadeCanvas(kind, lit), { srgb: true })); return texCache.get(k); };
  const o = { glass: [0.2, 0.6], punched: [0.85, 0], strip: [0.45, 0.25], shop: [0.4, 0.1] }[kind];
  const m = PM(tint, { map: mk(false), roughness: o[0], metalness: o[1], envMapIntensity: kind === 'glass' ? 1.4 : 0.7 });
  if (night) { m.emissive = new THREE.Color(0xffffff); m.emissiveMap = mk(true); m.emissiveIntensity = 1.3; }
  texCache.set(key, m); return m;
}

export function buildCity(map, ctx) {
  const { group, obst, updaters } = ctx;
  const R = rng(20260), WALL = map.wall, night = !!map.night;
  const P = 58, BLK = 40, SW = 18, SH = SW / 2;
  const inPlaza = (x, z) => Math.abs(x) < 49 && Math.abs(z) < 49;
  const merge = (list, mat, y = 0, opts) => { if (!list.length) return; const m = mesh(mergeGeometries(list), mat, 0, y, 0, opts || { cast: false }); group.add(m); return m; };
  const poly = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 };

  /* ---- ground ---- */
  const outer = mesh(scaleUV(new THREE.CircleGeometry(WALL + 900, 48).rotateX(-Math.PI / 2), 150, 150), PM(0x7a7e82, { map: speckleTex(2) }), 0, -0.06, 0, { cast: false });
  const inner = mesh(scaleUV(new THREE.CircleGeometry(WALL + 0.5, 96).rotateX(-Math.PI / 2), WALL / 2, WALL / 2), PM(0xdcd8d0, { map: paveTex(7), roughness: 0.9 }), 0, -0.02, 0, { cast: false });
  group.add(outer, inner);

  /* ---- streets: pieces between intersections, so lane paint never overlaps ---- */
  const interOK = (x, z) => !inPlaza(x, z) && Math.hypot(Math.abs(x) + SH, Math.abs(z) + SH) < WALL - 1.5;
  const inters = [];
  for (let i = -3; i <= 3; i++) for (let k = -3; k <= 3; k++) if (interOK(i * P, k * P)) inters.push({ x: i * P, z: k * P });
  const pieces = [];
  for (const alongX of [true, false]) {
    for (let k = -3; k <= 3; k++) {
      const fixed = k * P, e = Math.sqrt((WALL - 1.5) ** 2 - (Math.abs(fixed) + SH) ** 2);
      if (!(e > 0)) continue;
      const ics = inters.filter(q => (alongX ? q.z : q.x) === fixed).map(q => (alongX ? q.x : q.z)).sort((a, b) => a - b);
      let start = -e;
      const push = (a0, a1) => {
        if (a1 - a0 < 2) return;
        const mid = (a0 + a1) / 2, cx = alongX ? mid : fixed, cz = alongX ? fixed : mid;
        if (inPlaza(cx, cz)) return;
        pieces.push({ alongX, a0, a1, fixed, len: a1 - a0, cx, cz });
      };
      for (const ic of ics) { push(start, ic - SH); start = ic + SH; }
      push(start, e);
    }
  }
  const streetGeos = pieces.map(p => {
    const g = new THREE.PlaneGeometry(p.len, SW).rotateX(-Math.PI / 2); scaleUV(g, p.len / 18, 1);
    if (!p.alongX) g.rotateY(Math.PI / 2);
    return g.translate(p.cx, 0.03, p.cz);
  });
  merge(streetGeos, PM(0xffffff, { map: laneTex(), roughness: 0.9, ...poly }), 0, { cast: false, receive: true });
  merge(inters.map(q => new THREE.PlaneGeometry(SW, SW).rotateX(-Math.PI / 2).translate(q.x, 0.04, q.z)),
    PM(0xffffff, { map: asphaltTex(), roughness: 0.9, ...poly }), 0, { cast: false, receive: true });

  // crosswalks
  const zebra = [], zg = new THREE.PlaneGeometry(0.55, 3).rotateX(-Math.PI / 2);
  for (const q of inters) for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const px = q.x + dx * (SH + 2.4), pz = q.z + dz * (SH + 2.4);
    if (Math.hypot(px, pz) > WALL - 6) continue;
    for (let s = -7.2; s <= 7.3; s += 1.2) zebra.push(place(dx ? px : q.x + s, 0.055, dx ? q.z + s : pz, dx ? Math.PI / 2 : 0));
  }
  group.add(instanced(zg, PM(0xeeeee8, { roughness: 0.85, ...poly }), zebra, { cast: false }));

  /* ---- blocks ---- */
  const padGeos = [], blocks = [];
  for (let i = -4; i <= 3; i++) for (let k = -4; k <= 3; k++) {
    const cx = (i + 0.5) * P, cz = (k + 0.5) * P;
    if (inPlaza(cx, cz) || Math.hypot(Math.abs(cx) + BLK / 2, Math.abs(cz) + BLK / 2) > WALL - 5) continue;
    blocks.push({ cx, cz, d: Math.hypot(cx, cz) });
  }
  // plaza floor + block pads
  padGeos.push(...blocks.map(b => scaleUV(new THREE.PlaneGeometry(BLK, BLK).rotateX(-Math.PI / 2), BLK / 4, BLK / 4).translate(b.cx, 0.035, b.cz)));
  padGeos.push(scaleUV(new THREE.PlaneGeometry(98, 98).rotateX(-Math.PI / 2), 98 / 4, 98 / 4).translate(0, 0.035, 0));
  merge(padGeos, PM(0xe2ded6, { map: paveTex(7, 205, 158), roughness: 0.88, ...poly }), 0, { cast: false, receive: true });

  const tints = { glass: [0xbfd6ea, 0x9fc0d8, 0xc9d9e2, 0x8fb3c9, 0xa8c4d4], punched: [0xe8dcc4, 0xd9c7a8, 0xc2b09a, 0xece6dc, 0xb6bfc8], strip: [0xe0e4e8, 0xc4ccd4, 0xe4dccc] };
  const pick = a => a[R() * a.length | 0];
  const roofMat = PM(0x6a6d72, { map: speckleTex(5, { contrast: 0.2 }), roughness: 0.95 });
  const acList = [], antList = [];
  const addBox = (x, z, w, d, y0, h, kind, tint) => {
    const f = facadeMat(kind, tint, night);
    group.add(mesh(boxUV(w, h, d, kind === 'shop' ? 12 : 18, kind === 'shop' ? 5 : 14.4, 8), [f, f, roofMat, roofMat, f, f], x, y0 + h / 2, z));
    return y0 + h;
  };
  const roofStuff = (x, z, w, d, y, tall) => {
    for (let n = 0, c = tall ? 3 : 2; n < c; n++) acList.push(place(x + (R() - .5) * (w - 7), y + 0.7, z + (R() - .5) * (d - 7), R() < .5 ? 0 : Math.PI / 2, 0.8 + R() * 0.5));
    if (tall) antList.push(place(x + (R() - .5) * w * 0.3, y, z + (R() - .5) * d * 0.3, 0, 1, 0.7 + R() * 0.8, 1));
  };
  const treeItems = [], parkGrass = [], lotGeos = [], bayLines = [];
  for (const b of blocks) {
    const { cx, cz, d } = b, roll = R();
    const type = d < 110 ? (roll < 0.55 ? 'tower' : 'slab') : d < 150 ? (roll < 0.3 ? 'slab' : roll < 0.7 ? 'cluster' : roll < 0.85 ? 'park' : 'lot') : (roll < 0.5 ? 'cluster' : roll < 0.75 ? 'park' : 'lot');
    const fall = clamp01(1 - d / 330);
    if (type === 'tower') {
      const pw = 33, py = 8.6;
      addBox(cx, cz, pw, pw, 0, 5, 'shop', 0xffffff); addBox(cx, cz, pw, pw, 5, py - 5, 'punched', pick(tints.punched));
      obst.push(boxObs(cx, cz, pw / 2, pw / 2, 0));
      const tw = q3(17 + R() * 7), td = q3(17 + R() * 7), ox = Math.round((R() - .5) * 8 / 3) * 3, oz = Math.round((R() - .5) * 8 / 3) * 3, H = qh(Math.min(105, (48 + R() * 44) * (0.55 + fall)));
      const top = addBox(cx + ox, cz + oz, tw, td, py, H, R() < 0.7 ? 'glass' : 'strip', R() < 0.7 ? pick(tints.glass) : pick(tints.strip));
      let t2 = top;
      if (R() < 0.5) t2 = addBox(cx + ox, cz + oz, q3(tw * 0.62), q3(td * 0.62), top, qh(12 + R() * 10), 'glass', pick(tints.glass));
      roofStuff(cx + ox, cz + oz, tw * 0.6, td * 0.6, t2, true);
    } else if (type === 'slab') {
      const swap = R() < 0.5, w = q3(28 + R() * 5), dd = q3(22 + R() * 6), W = swap ? dd : w, D = swap ? w : dd, H = qh(20 + R() * 24);
      addBox(cx, cz, W, D, 0, 5, 'shop', 0xffffff);
      const top = addBox(cx, cz, W, D, 5, H, R() < 0.5 ? 'punched' : 'strip', R() < 0.5 ? pick(tints.punched) : pick(tints.strip));
      obst.push(boxObs(cx, cz, W / 2, D / 2, 0)); roofStuff(cx, cz, W, D, top, false);
    } else if (type === 'cluster') {
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        const w = 15, H = qh(11 + R() * 15), x = cx + sx * 9.5, z = cz + sz * 9.5;
        addBox(x, z, w, w, 0, 5, 'shop', 0xffffff);
        const top = addBox(x, z, w, w, 5, H, R() < 0.5 ? 'punched' : 'strip', R() < 0.5 ? pick(tints.punched) : pick(tints.strip));
        obst.push(boxObs(x, z, w / 2, w / 2, 0)); roofStuff(x, z, w, w, top, false);
      }
    } else if (type === 'park') {
      parkGrass.push(new THREE.PlaneGeometry(33, 33).rotateX(-Math.PI / 2).translate(cx, 0.05, cz));
      for (let n = 0; n < 7; n++) treeItems.push({ x: cx + (R() - .5) * 28, z: cz + (R() - .5) * 28, s: 0.9 + R() * 0.5 });
    } else {                                                                      // parking lot with painted bays
      lotGeos.push(new THREE.PlaneGeometry(33, 33).rotateX(-Math.PI / 2).translate(cx, 0.05, cz));
      for (let n = -7; n <= 7; n++) for (const row of [-8.5, 8.5]) bayLines.push(place(cx + n * 2.3, 0.06, cz + row, 0));
    }
  }
  merge(lotGeos, PM(0xffffff, { map: asphaltTex(), roughness: 0.9, ...poly }), 0, { cast: false });
  merge(parkGrass, PM(0x6c9a4e, { map: speckleTex(31, { streaks: 600 }), roughness: 1, ...poly }), 0, { cast: false });
  if (bayLines.length) group.add(instanced(new THREE.PlaneGeometry(0.14, 5).rotateX(-Math.PI / 2), PM(0xe8e8e0, { ...poly }), bayLines, { cast: false }));
  group.add(instanced(new THREE.BoxGeometry(2.6, 1.4, 2), PM(0x8d9298, { metalness: 0.4, roughness: 0.6 }), acList));
  group.add(instanced(new THREE.CylinderGeometry(0.1, 0.18, 14, 6).translate(0, 7, 0), PM(0xb0b4b8, { metalness: 0.7, roughness: 0.4 }), antList));

  /* ---- street furniture along every street piece ---- */
  const lampM = [], sigR = [], sigG = [], treeAlong = [];
  for (const p of pieces) {
    for (let t = p.a0 + 7, n = 0; t < p.a1 - 7; t += 26, n++) for (const s of [1, -1]) {
      const tt = t + (s > 0 ? 0 : 13);
      if (tt > p.a1 - 5) continue;
      const x = p.alongX ? tt : p.fixed + s * (SH + 0.9), z = p.alongX ? p.fixed + s * (SH + 0.9) : tt;
      if (inPlaza(x, z) || Math.hypot(x, z) > WALL - 4) continue;
      const ry = p.alongX ? (s > 0 ? Math.PI : 0) : -s * Math.PI / 2;
      lampM.push(place(x, 0, z, ry)); obst.push(circleObs(x, z, 0.35, { nm: true }));
    }
    if (p.len > 34) for (let t = p.a0 + 19.5; t < p.a1 - 8; t += 26) for (const s of [1, -1]) {
      const x = p.alongX ? t : p.fixed + s * (SH + 1.9), z = p.alongX ? p.fixed + s * (SH + 1.9) : t;
      if (inPlaza(x, z) || Math.hypot(x, z) > WALL - 6) continue;
      treeAlong.push({ x, z, s: 0.75 + R() * 0.3 });
    }
  }
  const lampPole = new THREE.CylinderGeometry(0.1, 0.17, 9, 8).translate(0, 4.5, 0);
  const lampArm = new THREE.BoxGeometry(0.12, 0.12, 2.4).translate(0, 8.9, 1.2);
  const lampHead = new THREE.BoxGeometry(0.5, 0.16, 0.95).translate(0, 8.82, 2.2);
  const steel = PM(0x30343a, { metalness: 0.6, roughness: 0.45 });
  group.add(instanced(mergeGeometries([lampPole, lampArm]), steel, lampM));
  group.add(instanced(lampHead, PM(0xfff4d0, { emissive: 0xffe9a8, emissiveIntensity: night ? 3 : 0.9 }), lampM, { cast: false }));
  for (const q of inters) for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const x = q.x + sx * (SH + 1.3), z = q.z + sz * (SH + 1.3);
    if (Math.hypot(x, z) > WALL - 3) continue;
    ((sx * sz > 0) ? sigR : sigG).push(place(x, 0, z, Math.atan2(-sx, -sz))); obst.push(circleObs(x, z, 0.3, { nm: true }));
  }
  const sigPole = new THREE.CylinderGeometry(0.08, 0.12, 4.6, 8).translate(0, 2.3, 0), sigHead = new THREE.BoxGeometry(0.42, 1.2, 0.36).translate(0, 5, 0);
  group.add(instanced(sigPole, steel, sigR.concat(sigG)));
  group.add(instanced(sigHead, PM(0xff3a2a, { emissive: 0xff2a1a, emissiveIntensity: 1.6 }), sigR, { cast: false }));
  group.add(instanced(sigHead, PM(0x34e070, { emissive: 0x20d060, emissiveIntensity: 1.6 }), sigG, { cast: false }));
  scatterTrees(group, obst, treeAlong, { kind: 'oak', color: 0x4f8a42, seed: 61 });
  scatterTrees(group, obst, treeItems, { kind: 'oak', color: 0x4a8240, seed: 62 });

  /* ---- central plaza ---- */
  const stone = PM(0xcfcac0, { map: concreteTex(), roughness: 0.8 });
  const rings = mkCanvas(512, 512), rg = rings.getContext('2d');
  for (let r = 250; r > 40; r -= 26) { rg.strokeStyle = (r / 26 | 0) % 2 ? 'rgba(90,80,70,0.30)' : 'rgba(255,255,255,0.35)'; rg.lineWidth = 6; rg.beginPath(); rg.arc(256, 256, r, 0, 7); rg.stroke(); }
  for (let a = 0; a < 16; a++) { rg.strokeStyle = 'rgba(90,80,70,0.25)'; rg.lineWidth = 4; rg.beginPath(); rg.moveTo(256, 256); rg.lineTo(256 + Math.cos(a / 16 * 6.283) * 250, 256 + Math.sin(a / 16 * 6.283) * 250); rg.stroke(); }
  group.add(mesh(new THREE.CircleGeometry(32, 64).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: canvasTex(rings), transparent: true, roughness: 0.9, depthWrite: false, ...poly }), 0, 0.045, 0, { cast: false }));
  const basin = new THREE.LatheGeometry([[11.3, 0.02], [11.3, 0.95], [12.4, 1.0], [12.4, 0.02]].map(([x, y]) => new THREE.Vector2(x, y)), 64);
  group.add(mesh(basin, new THREE.MeshStandardMaterial({ color: 0xcfcac0, map: concreteTex(), roughness: 0.75, side: THREE.DoubleSide })));
  const water = makeWater(0x2f86ad, { repeat: 5 }); updaters.push(water.update);
  group.add(mesh(new THREE.CircleGeometry(11.3, 48).rotateX(-Math.PI / 2), water.mat, 0, 0.7, 0, { cast: false }));
  group.add(mesh(new THREE.CylinderGeometry(4.6, 5.0, 1.5, 40), stone, 0, 0.75, 0));
  group.add(mesh(new THREE.CylinderGeometry(2.6, 3.0, 1.2, 36), stone, 0, 2.1, 0));
  group.add(mesh(new THREE.CylinderGeometry(0.5, 0.9, 4.2, 20), stone, 0, 4.3, 0));
  group.add(mesh(new THREE.ConeGeometry(0.9, 5.5, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xdff4ff, transparent: true, opacity: 0.3, roughness: 0.1, depthWrite: false, side: THREE.DoubleSide }), 0, 7.4, 0, { cast: false }));
  obst.push(circleObs(0, 0, 12.4));
  const bench = [], benchBox = [];
  for (let n = 0; n < 10; n++) {
    const th = n / 10 * Math.PI * 2 + 0.15, bx = Math.sin(th) * 18, bz = Math.cos(th) * 18;
    bench.push(place(bx, 0, bz, th)); obst.push(boxObs(bx, bz, 0.95, 0.35, th, { nm: true }));
  }
  const wood = PM(0x8a5f3a, { roughness: 0.8 });
  group.add(instanced(new THREE.BoxGeometry(1.9, 0.12, 0.5).translate(0, 0.5, 0), wood, bench));
  group.add(instanced(new THREE.BoxGeometry(1.9, 0.45, 0.08).translate(0, 0.85, -0.22), wood, bench));
  group.add(instanced(mergeGeometries([new THREE.BoxGeometry(0.1, 0.5, 0.45).translate(-0.8, 0.25, 0), new THREE.BoxGeometry(0.1, 0.5, 0.45).translate(0.8, 0.25, 0)]), steel, bench));
  const plant = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = sx * 31, z = sz * 31;
    group.add(mesh(new THREE.BoxGeometry(8, 0.8, 8), stone, x, 0.4, z));
    group.add(mesh(new THREE.PlaneGeometry(7.2, 7.2).rotateX(-Math.PI / 2), PM(0x3d2f24, { roughness: 1 }), x, 0.82, z, { cast: false }));
    obst.push(boxObs(x, z, 4, 4, 0)); plant.push({ x, z, y: 0.8, s: 1.15, ry: R() * 6 });
  }
  scatterTrees(group, obst, plant, { kind: 'oak', color: 0x58903f, seed: 71, collide: false });
  for (const [x, z, a] of [[-38, 9, 0], [38, -9, Math.PI]]) {                   // kiosks
    group.add(mesh(new THREE.BoxGeometry(5, 3.2, 3.2), PM(0xd8d0c0), x, 1.6, z, { ry: a }));
    group.add(mesh(new THREE.BoxGeometry(6.2, 0.3, 4.4), PM(0xc0392b, { roughness: 0.6 }), x, 3.35, z, { ry: a }));
    group.add(mesh(new THREE.BoxGeometry(3.4, 1.4, 0.1), PM(0x20262c, { metalness: 0.5, roughness: 0.2 }), x + Math.sin(a) * 1.7, 1.9, z + Math.cos(a) * 1.7, { ry: a }));
    obst.push(boxObs(x, z, 2.5, 1.6, a));
  }
  const bollards = [];
  for (const sgn of [-1, 1]) for (let s = -45; s <= 45; s += 7.5) { bollards.push(place(s, 0, sgn * 49.2)); bollards.push(place(sgn * 49.2, 0, s)); }
  group.add(instanced(new THREE.CylinderGeometry(0.16, 0.16, 0.9, 10).translate(0, 0.45, 0), PM(0x40454c, { metalness: 0.6, roughness: 0.4 }), bollards, { cast: false }));

  /* ---- edge: barrier exactly at the collision wall, skyline + hills behind it ---- */
  wallRing(group, WALL, { h: 1.3, color: 0xc4c6c8 });
  const sk = [];
  for (let n = 0; n < 80; n++) {
    const a = n / 80 * Math.PI * 2 + (R() - .5) * 0.06, r = 270 + R() * 230, w = q3(22 + R() * 26), d = q3(22 + R() * 26), H = qh(50 + R() * 140 * (1 - Math.abs(Math.sin(a * 2)) * 0.3));
    const kind = R() < 0.5 ? 'glass' : 'punched', f = facadeMat(kind, kind === 'glass' ? pick(tints.glass) : pick(tints.punched), night);
    group.add(mesh(boxUV(w, H, d, 18, 14.4, 8), [f, f, roofMat, roofMat, f, f], Math.sin(a) * r, H / 2, Math.cos(a) * r, { ry: a, cast: false, receive: false }));
  }
  hillRing(group, { count: 14, rMin: 700, rMax: 900, hMin: 60, hMax: 150, colors: map.mountains, seed: 15 });
  addClouds(group, 12, night);
  return { wall: WALL, isl: 0, roadHalf: 9, spawn: { x: 0, z: -82, h: 0 } };
}
const q3 = v => Math.max(6, Math.round(v / 3) * 3), qh = v => Math.max(3.6, Math.round(v / 3.6) * 3.6);
const clamp01 = v => Math.min(1, Math.max(0, v));
