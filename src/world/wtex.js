import * as THREE from 'three';
import { circleObs } from './collision.js';

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;

/* ---------- deterministic randomness: a map looks the same every time it loads ---------- */
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function noise2(seed = 1) {
  const h = (x, y) => { const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453; return n - Math.floor(n); };
  const sm = t => t * t * (3 - 2 * t);
  return (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), u = sm(x - xi), v = sm(y - yi);
    return lerp(lerp(h(xi, yi), h(xi + 1, yi), u), lerp(h(xi, yi + 1), h(xi + 1, yi + 1), u), v);
  };
}

/* ---------- canvas helpers ---------- */
export const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
export function canvasTex(c, { srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
// Textures always repeat 1x; the geometry UVs are scaled so one texture can be shared everywhere.
export function scaleUV(geo, su, sv, ou = 0, ov = 0) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su + ou, uv.getY(i) * sv + ov);
  uv.needsUpdate = true; return geo;
}
// Box whose UVs are in metres: sides tile every (tw x th) metres, top/bottom every roofTile.
export function boxUV(w, h, d, tw, th, roofTile = 8) {
  // exact (non rounded) tiling: pass dimensions that are multiples of the bay / floor size and windows never get cut
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv;
  const sc = (f, su, sv) => { for (let i = f * 4; i < f * 4 + 4; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv); };
  sc(0, d / tw, h / th); sc(1, d / tw, h / th); sc(2, w / roofTile, d / roofTile); sc(3, w / roofTile, d / roofTile); sc(4, w / tw, h / th); sc(5, w / tw, h / th);
  return g;
}
export function normalFromHeight(c, strength = 2) {
  const w = c.width, h = c.height, src = c.getContext('2d').getImageData(0, 0, w, h).data;
  const out = mkCanvas(w, h), g = out.getContext('2d'), img = g.createImageData(w, h), d = img.data;
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength, dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1), i = (y * w + x) * 4;
    d[i] = (-dx / l * 0.5 + 0.5) * 255; d[i + 1] = (dy / l * 0.5 + 0.5) * 255; d[i + 2] = (1 / l * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  g.putImageData(img, 0, 0); return canvasTex(out, { srgb: false });
}

/* ---------- material + instancing helpers ---------- */
export const PM = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o });
const _D = new THREE.Object3D();
export function place(x, y, z, ry = 0, sx = 1, sy = sx, sz = sx) {
  _D.position.set(x, y, z); _D.rotation.set(0, ry, 0); _D.scale.set(sx, sy, sz); _D.updateMatrix(); return _D.matrix.clone();
}
// list items: Matrix4  or  { m: Matrix4, c: hex | Color }
export function instanced(geo, mat, list, { cast = true, receive = true } = {}) {
  const im = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
  const col = new THREE.Color();
  list.forEach((it, i) => {
    const m = it.m || it; im.setMatrixAt(i, m);
    if (it.c !== undefined) { im.setColorAt(i, col.set(it.c)); }
  });
  im.count = list.length;
  im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.castShadow = cast; im.receiveShadow = receive; im.frustumCulled = false;
  return im;
}
export function mesh(geo, mat, x = 0, y = 0, z = 0, { ry = 0, cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = cast; m.receiveShadow = receive; return m;
}

/* ---------- surface textures (all neutral-ish so material.color can tint them) ---------- */
// Speckled ground with soft large-scale patches. Tint with material.color.
const cache = new Map();
const memo = (k, fn) => { if (!cache.has(k)) cache.set(k, fn()); return cache.get(k); };

export function speckleTex(seed = 1, { size = 256, contrast = 0.12, blobs = 36, streaks = 0, base = 232 } = {}) {
  return memo('speck' + [seed, size, contrast, blobs, streaks, base], () => {
    const c = mkCanvas(size, size), g = c.getContext('2d'), R = rng(seed);
    g.fillStyle = `rgb(${base},${base},${base})`; g.fillRect(0, 0, size, size);
    for (let i = 0; i < blobs; i++) {          // wrap-around soft patches so it tiles
      const x = R() * size, y = R() * size, r = size * (0.08 + R() * 0.2), v = R() > 0.5 ? 255 : 0;
      for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
        const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
        gr.addColorStop(0, `rgba(${v},${v},${v},${contrast * 0.6})`); gr.addColorStop(1, `rgba(${v},${v},${v},0)`);
        g.fillStyle = gr; g.fillRect(0, 0, size, size);
      }
    }
    for (let i = 0; i < size * size * 0.05; i++) {
      const v = R() > 0.5 ? 255 : 0; g.fillStyle = `rgba(${v},${v},${v},${R() * contrast})`;
      g.fillRect(R() * size, R() * size, 1 + R() * 1.5, 1 + R() * 1.5);
    }
    for (let i = 0; i < streaks; i++) {          // grass blades
      g.strokeStyle = `rgba(0,0,0,${0.05 + R() * 0.1})`; g.lineWidth = 1;
      const x = R() * size, y = R() * size; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (R() - .5) * 3, y - 3 - R() * 5); g.stroke();
    }
    return canvasTex(c);
  });
}

export function asphaltTex(seed = 3) {
  return memo('asphalt' + seed, () => {
    const c = mkCanvas(256, 256), g = c.getContext('2d'), R = rng(seed);
    g.fillStyle = '#3c3f46'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 9000; i++) { const v = 40 + R() * 55 | 0; g.fillStyle = `rgba(${v},${v},${v + 4},${0.25 + R() * 0.4})`; g.fillRect(R() * 256, R() * 256, 1 + R() * 1.2, 1 + R() * 1.2); }
    for (let i = 0; i < 14; i++) {              // soft oil / wear patches
      const x = R() * 256, y = R() * 256, r = 18 + R() * 40, gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(0,0,0,${0.08 + R() * 0.1})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
    }
    g.strokeStyle = 'rgba(15,15,18,0.55)'; g.lineWidth = 1;     // hairline cracks
    for (let i = 0; i < 4; i++) { let x = R() * 256, y = R() * 256; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 7; k++) { x += (R() - .5) * 30; y += (R() - .5) * 30; g.lineTo(x, y); } g.stroke(); }
    return canvasTex(c);
  });
}

// 4-lane street, canvas x runs ALONG the street (tile = 18 m long x 18 m wide).
export function laneTex(seed = 5) {
  return memo('lane' + seed, () => {
    const W = 512, H = 512, c = mkCanvas(W, H), g = c.getContext('2d'), R = rng(seed);
    g.drawImage(asphaltTex(seed).image, 0, 0, W, H);
    g.drawImage(asphaltTex(seed + 1).image, 0, 0, 256, 256); // slight variation
    g.globalAlpha = 0.18; g.fillStyle = '#000';             // darker tyre wear in the lanes
    for (const v of [0.14, 0.36, 0.64, 0.86]) g.fillRect(0, (v - 0.045) * H, W, 0.09 * H);
    g.globalAlpha = 1;
    const line = (y, h, col, dash) => { g.fillStyle = col; if (!dash) { g.fillRect(0, y, W, h); return; } for (let x = 0; x < W; x += dash[0] + dash[1]) g.fillRect(x, y, dash[0], h); };
    const m = H / 18;                                        // px per metre
    line(0.45 * m, 0.16 * m, '#e9e9e4'); line(H - 0.61 * m, 0.16 * m, '#e9e9e4');     // edge lines
    line(8.76 * m, 0.14 * m, '#e8b92a'); line(9.1 * m, 0.14 * m, '#e8b92a');             // double yellow
    line(4.4 * m, 0.14 * m, '#e9e9e4', [3 * m, 6 * m]); line(13.5 * m, 0.14 * m, '#e9e9e4', [3 * m, 6 * m]); // lane dashes
    g.globalCompositeOperation = 'destination-out';          // worn paint
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(0,0,0,${R() * 0.5})`; g.fillRect(R() * W, R() * H, 1 + R() * 3, 1 + R() * 2); }
    g.globalCompositeOperation = 'destination-over'; g.fillStyle = '#3c3f46'; g.fillRect(0, 0, W, H);
    return canvasTex(c);
  });
}

// Paving: 4 m tile with joints.
export function paveTex(seed = 7, base = 196, joint = 150, tilePx = 64) {
  return memo('pave' + [seed, base, joint, tilePx], () => {
    const S = 256, c = mkCanvas(S, S), g = c.getContext('2d'), R = rng(seed);
    for (let y = 0; y < S; y += tilePx) for (let x = 0; x < S; x += tilePx) {
      const v = base + (R() - .5) * 16; g.fillStyle = `rgb(${v},${v},${v - 3})`; g.fillRect(x, y, tilePx, tilePx);
    }
    g.fillStyle = `rgb(${joint},${joint},${joint})`;
    for (let i = 0; i < S; i += tilePx) { g.fillRect(i, 0, 2, S); g.fillRect(0, i, S, 2); }
    for (let i = 0; i < 2500; i++) { const v = R() > .5 ? 255 : 0; g.fillStyle = `rgba(${v},${v},${v},${R() * 0.08})`; g.fillRect(R() * S, R() * S, 1.5, 1.5); }
    return canvasTex(c);
  });
}

export function concreteTex(seed = 9) {
  return memo('concrete' + seed, () => {
    const S = 256, c = mkCanvas(S, S), g = c.getContext('2d'), R = rng(seed);
    g.fillStyle = '#b9bbbd'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 6000; i++) { const v = 150 + R() * 80 | 0; g.fillStyle = `rgba(${v},${v},${v},${R() * 0.4})`; g.fillRect(R() * S, R() * S, 1 + R() * 2, 1 + R() * 2); }
    g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 0, S, 2); g.fillRect(0, S / 2, S, 2);
    return canvasTex(c);
  });
}

export function gravelTex(seed = 11) {
  return memo('gravel' + seed, () => {
    const S = 256, c = mkCanvas(S, S), g = c.getContext('2d'), R = rng(seed);
    g.fillStyle = '#b8a67e'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 7000; i++) { const v = 120 + R() * 120 | 0; g.fillStyle = `rgba(${v},${v - 12},${v - 45},${0.35 + R() * 0.4})`; g.fillRect(R() * S, R() * S, 1 + R() * 2.5, 1 + R() * 2); }
    return canvasTex(c);
  });
}

/* ---------- animated water (call update from the main loop) ---------- */
export function makeWater(color = 0x2d7fa5, { opacity = 0.92, repeat = 1 } = {}) {
  const S = 128, c = mkCanvas(S, S), g = c.getContext('2d'), img = g.createImageData(S, S), R = rng(21);
  const waves = Array.from({ length: 7 }, () => ({ kx: 1 + (R() * 4 | 0), ky: 1 + (R() * 4 | 0), p: R() * 6.28, a: 0.4 + R() * 0.6 }));
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let v = 0; for (const w of waves) v += w.a * Math.sin(((w.kx * x + w.ky * y) / S) * Math.PI * 2 + w.p);
    const i = (y * S + x) * 4; img.data[i] = img.data[i + 1] = img.data[i + 2] = clamp(128 + v * 18, 0, 255); img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const nm = normalFromHeight(c, 3.2);
  nm.repeat.set(repeat, repeat);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.06, metalness: 0.15, normalMap: nm, normalScale: new THREE.Vector2(0.6, 0.6), transparent: opacity < 1, opacity, envMapIntensity: 1.6 });
  return { mat, update(dt) { nm.offset.x += dt * 0.012; nm.offset.y += dt * 0.007; } };
}

/* ---------- trees (instanced, smooth, colliding) ---------- */
function blobGeo(r, seed) {
  const g = new THREE.IcosahedronGeometry(r, 2), p = g.attributes.position, n = noise2(seed);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 1 + 0.22 * (n(x * 0.9 + 5, z * 0.9 + y * 0.7) - 0.5);
    p.setXYZ(i, x * k, y * k * 0.88, z * k);
  }
  g.computeVertexNormals(); return g;
}
// items: [{x, z, s, ry}]  kind: 'oak' | 'pine'
export function scatterTrees(group, obst, items, { kind = 'oak', color = 0x3f7f3a, seed = 4, collide = true, nm = true } = {}) {
  if (!items.length) return;
  const R = rng(seed), col = new THREE.Color(), n = items.length;
  const tmp = new THREE.Matrix4(), loc = new THREE.Matrix4();
  const trunk = new THREE.CylinderGeometry(0.28, 0.5, 3.6, 8); trunk.translate(0, 1.8, 0);
  const trunkM = new THREE.InstancedMesh(trunk, PM(0x5a4333, { roughness: 1 }), n);
  const parts = kind === 'oak'
    ? [[blobGeo(2.9, seed + 1), 0, 5.4, 0], [blobGeo(2.2, seed + 2), 1.5, 4.5, 0.6], [blobGeo(2.0, seed + 3), -1.3, 6.5, -0.5]]
    : [[new THREE.ConeGeometry(2.7, 4.6, 9), 0, 4.3, 0], [new THREE.ConeGeometry(2.1, 4.0, 9), 0, 6.6, 0], [new THREE.ConeGeometry(1.4, 3.4, 9), 0, 8.8, 0]];
  const leafMat = PM(0xffffff, { roughness: 0.9 });
  const leaves = parts.map(([geo]) => { const im = new THREE.InstancedMesh(geo, leafMat, n); im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false; return im; });
  items.forEach((t, i) => {
    tmp.copy(place(t.x, t.y || 0, t.z, t.ry ?? R() * 6.28, t.s, t.s * (0.92 + R() * 0.2), t.s));
    trunkM.setMatrixAt(i, tmp);
    col.setHex(color).offsetHSL((R() - .5) * 0.05, (R() - .5) * 0.1, (R() - .5) * 0.1);
    parts.forEach(([, px, py, pz], k) => {
      leaves[k].setMatrixAt(i, loc.multiplyMatrices(tmp, new THREE.Matrix4().makeTranslation(px, py, pz)));
      leaves[k].setColorAt(i, col);
    });
    if (collide) obst.push(circleObs(t.x, t.z, 0.55 * t.s, { nm }));
  });
  trunkM.instanceMatrix.needsUpdate = true; leaves.forEach(l => { l.instanceMatrix.needsUpdate = true; if (l.instanceColor) l.instanceColor.needsUpdate = true; });
  trunkM.castShadow = true; trunkM.frustumCulled = false;
  group.add(trunkM, ...leaves);
}

/* ---------- barrier / wall ring exactly at the collision radius ---------- */
// Inner face sits at radius R, the collision wall. gap = {z: quayZ} leaves out the arc beyond z.
export function wallRing(group, R, { h = 1.25, t = 0.9, color = 0xb9bbbd, tex = concreteTex(), gapZ = null, flat = true, segs = 160 } = {}) {
  let phiStart = 0, phiLen = Math.PI * 2;
  if (gapZ != null) { const th = Math.acos(clamp(gapZ / R, -1, 1)); phiStart = th; phiLen = Math.PI * 2 - th * 2; }
  const pts = [[R, 0], [R, h * 0.82], [R + 0.12, h], [R + t - 0.12, h], [R + t, h * 0.82], [R + t, 0]].map(([x, y]) => new THREE.Vector2(x, y));
  const g = new THREE.LatheGeometry(pts, segs, phiStart, phiLen);
  scaleUV(g, (Math.PI * 2 * R * (phiLen / (Math.PI * 2))) / 5, 1);
  const m = mesh(g, PM(color, { map: tex, roughness: 0.9, flatShading: flat, side: THREE.DoubleSide }));
  group.add(m); return m;
}

/* ---------- distant hills / clouds ---------- */
export function hillRing(group, { count = 16, rMin = 520, rMax = 760, hMin = 60, hMax = 170, wMin = 140, wMax = 260, colors = [0x7d93b8], seed = 8, snow = false } = {}) {
  const R = rng(seed), nz = noise2(seed);
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + (R() - .5) * 0.25, r = rMin + R() * (rMax - rMin);
    const h = hMin + R() * (hMax - hMin), w = wMin + R() * (wMax - wMin);
    const g = new THREE.SphereGeometry(1, 28, 16), p = g.attributes.position, cols = [];
    const base = new THREE.Color(colors[i % colors.length]), top = base.clone().lerp(new THREE.Color(snow ? 0xffffff : 0xdfe8ef), snow ? 0.75 : 0.25), cc = new THREE.Color();
    for (let k = 0; k < p.count; k++) {
      const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
      const bump = 1 + 0.28 * (nz(x * 2 + i * 7, z * 2 + y * 2) - 0.5) + 0.12 * (nz(x * 5 + i, z * 5) - 0.5);
      const yy = Math.max(y, -0.15) * h * bump, rr = bump * (y < 0 ? 1 : 1 - y * 0.15);
      p.setXYZ(k, x * w * rr, yy, z * w * rr * 0.8);
      cc.copy(base).lerp(top, clamp((yy / h - 0.45) * 2.2, 0, 1)); cols.push(cc.r, cc.g, cc.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
    m.position.set(Math.sin(a) * r, -h * 0.05, Math.cos(a) * r); m.rotation.y = R() * 6.28; group.add(m);
  }
}
export function addClouds(group, seed = 12, night = false) {
  if (night) {
    const N = 160, st = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1.2, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }), N), R = rng(seed);
    for (let i = 0; i < N; i++) { const a = R() * 6.28, r = 900 + R() * 500, y = 200 + R() * 800; st.setMatrixAt(i, place(Math.sin(a) * r, y, Math.cos(a) * r, 0, 0.6 + R() * 1.2)); }
    group.add(st); return;
  }
  const c = mkCanvas(128, 128), g = c.getContext('2d'), R = rng(seed);
  for (let i = 0; i < 9; i++) {
    const x = 30 + R() * 68, y = 50 + R() * 28, r = 20 + R() * 26, gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  }
  const tex = new THREE.CanvasTexture(c);
  for (let i = 0; i < 12; i++) {
    const a = R() * 6.28, r = 520 + R() * 520, y = 220 + R() * 200;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.8, fog: false, depthWrite: false }));
    sp.scale.set(220 + R() * 160, 70 + R() * 40, 1); sp.position.set(Math.sin(a) * r, y, Math.cos(a) * r); group.add(sp);
  }
}

// Spline helper -> flat ribbon strip along a polyline (used for park paths)
export function ribbon(pts, width, y, { closed = false, tile = 6, u1 = null } = {}) {
  const n = pts.length, pos = [], uv = [], idx = [];
  let len = 0;
  for (let i = 0; i < n; i++) {
    const p = pts[i], a = pts[closed ? (i - 1 + n) % n : Math.max(0, i - 1)], b = pts[closed ? (i + 1) % n : Math.min(n - 1, i + 1)];
    let tx = b.x - a.x, tz = b.z - a.z; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    const nx = -tz, nz = tx;
    if (i > 0) len += Math.hypot(p.x - pts[i - 1].x, p.z - pts[i - 1].z);
    pos.push(p.x + nx * width / 2, y, p.z + nz * width / 2, p.x - nx * width / 2, y, p.z - nz * width / 2);
    uv.push(0, len / tile, u1 ?? width / tile, len / tile);
  }
  const m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) { const j = (i + 1) % n, a = i * 2, b = i * 2 + 1, c2 = j * 2, d = j * 2 + 1; idx.push(a, c2, b, b, c2, d); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals(); return g;
}
