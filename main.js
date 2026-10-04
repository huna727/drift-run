import * as THREE from 'three';
import { CAR_DEFS, CAR_ORDER, bodyLoft, cabinLoft, sampleBody, halfWidthAt, sampleCab, wheelLayout } from './cars.js';
import { MP_R, MAX_SEG, MAX_ORBS, PCOLORS, PNAMES, KEYMAPS, layout as vpLayout, createMatch, updateMatch, arenaR, segmentPoses, susStep } from './multi.js';
import { TIERS, COMPOUNDS, TUNE_GROUPS, PRESETS, defaultTune, derive } from './tuning.js';

const WALL = 150, ISL = 38, CR = 1.6;

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const wrap = a => Math.atan2(Math.sin(a), Math.cos(a));

/* ================= RENDERER / SCENE ================= */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.prepend(renderer.domElement);

const HORIZON = 0xcfe6ff, TOP = 0x4f93e8;
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(HORIZON, 220, 1100);
const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 3000);

const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.9, metalness: 0, ...o });

const sky = (() => {
  const g = new THREE.SphereGeometry(1500, 20, 12), p = g.attributes.position, col = [];
  const a = new THREE.Color(HORIZON), b = new THREE.Color(TOP), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    c.copy(a).lerp(b, Math.pow(clamp(p.getY(i) / 1500, 0, 1), 0.6));
    col.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  scene.add(m);
  return m;
})();

scene.add(new THREE.HemisphereLight(0xdfeeff, 0x6a7a5a, 1.25));
const sun = new THREE.DirectionalLight(0xfff1d6, 2.6);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 260 });
sun.shadow.bias = -0.0005;
scene.add(sun, sun.target);

/* ================= WORLD ================= */
const grass = new THREE.Mesh(new THREE.CircleGeometry(1100, 32).rotateX(-Math.PI / 2), M(0x86b84f));
grass.receiveShadow = true;
scene.add(grass);

const asphalt = new THREE.Mesh(new THREE.CircleGeometry(WALL + 8, 72).rotateX(-Math.PI / 2), M(0x5b5e68));
asphalt.position.y = 0.02;
asphalt.receiveShadow = true;
scene.add(asphalt);

for (const r of [62, 94, 126]) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(r - 0.25, r + 0.25, 160).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 })
  );
  ring.position.y = 0.04;
  scene.add(ring);
}

const island = new THREE.Mesh(new THREE.CylinderGeometry(ISL - 1, ISL + 1.5, 3, 28), M(0x7a8398));
island.position.y = 1.5; island.castShadow = island.receiveShadow = true;
const top = new THREE.Mesh(new THREE.CylinderGeometry(ISL - 3, ISL - 3, 0.2, 28), M(0x5f9a63));
top.position.y = 3.05;
const tower = new THREE.Mesh(new THREE.CylinderGeometry(4, 6, 22, 6), M(0xe9e1d4));
tower.position.y = 14; tower.castShadow = true;
const roof = new THREE.Mesh(new THREE.ConeGeometry(7, 7, 6), M(0xe63946));
roof.position.y = 28.5; roof.castShadow = true;
scene.add(island, top, tower, roof);

{
  const N = 80, mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(11.7, 1.3, 1.2), M(0xffffff), N);
  const d = new THREE.Object3D(), c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const a = i / N * Math.PI * 2;
    d.position.set(Math.sin(a) * (WALL + 0.7), 0.65, Math.cos(a) * (WALL + 0.7));
    d.rotation.y = a; d.updateMatrix();
    mesh.setMatrixAt(i, d.matrix);
    mesh.setColorAt(i, c.set(i % 2 ? 0xe63946 : 0xf4f4f4));
  }
  mesh.castShadow = mesh.receiveShadow = true;
  scene.add(mesh);
}

const OBST = [];
{
  const tyre = M(0x1c1c20), stripe = M(0xf4f4f4), geo = new THREE.CylinderGeometry(1.15, 1.15, 0.5, 10);
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2 + 0.2, r = i % 2 ? 84 : 118, x = Math.sin(a) * r, z = Math.cos(a) * r;
    const g = new THREE.Group();
    for (let k = 0; k < 3; k++) {
      const t = new THREE.Mesh(geo, k === 1 ? stripe : tyre);
      t.position.y = 0.25 + k * 0.5; t.castShadow = true; g.add(t);
    }
    g.position.set(x, 0, z); scene.add(g);
    OBST.push({ x, z, r: 1.2 });
  }
}

const ZONES = [45, 135, 225, 315].map(deg => {
  const a = deg * Math.PI / 180, x = Math.sin(a) * 100, z = Math.cos(a) * 100;
  const mat = new THREE.MeshBasicMaterial({ color: 0x66ccff, transparent: true, opacity: 0.1, depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 0.1, 28), mat);
  mesh.position.set(x, 0.07, z); scene.add(mesh);
  return { x, z, r: 16, mat, mesh };
});
const PAD = { x: 0, z: 95, r: 8 };
{
  const m = new THREE.Mesh(new THREE.CylinderGeometry(PAD.r, PAD.r, 0.1, 24), new THREE.MeshBasicMaterial({ color: 0x3dff8a, transparent: true, opacity: 0.4, depthWrite: false }));
  m.position.set(PAD.x, 0.07, PAD.z); scene.add(m); PAD.mesh = m;
}
let zoneI = 0, zoneT = 0;

{
  const N = 180, trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.4, 0.6, 3, 5), M(0x5b4636), N);
  const crown = new THREE.InstancedMesh(new THREE.ConeGeometry(3, 8, 6), M(0xffffff), N);
  const d = new THREE.Object3D(), c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2, r = WALL + 25 + Math.random() * 320, s = 0.8 + Math.random() * 1.1;
    d.position.set(Math.sin(a) * r, 1.5 * s, Math.cos(a) * r); d.scale.setScalar(s); d.updateMatrix();
    trunk.setMatrixAt(i, d.matrix);
    d.position.y = 7 * s; d.updateMatrix();
    crown.setMatrixAt(i, d.matrix);
    crown.setColorAt(i, (Math.random() < 0.45 ? c.setHSL(0.95 + Math.random() * 0.04, 0.7, 0.8) : Math.random() < 0.5 ? c.setHSL(0.14 + Math.random() * 0.04, 0.7, 0.62) : c.setHSL(0.27 + Math.random() * 0.06, 0.5, 0.42)));
  }
  scene.add(trunk, crown);
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * Math.PI * 2 + Math.random() * 0.2, r = 650 + Math.random() * 180, h = 140 + Math.random() * 180;
    const m = new THREE.Mesh(new THREE.ConeGeometry(110 + Math.random() * 90, h, 5 + Math.floor(Math.random() * 3)), M(i % 3 === 0 ? 0x7d93b8 : i % 3 === 1 ? 0x6f9f58 : 0x8aa6a0));
    m.position.set(Math.sin(a) * r, h / 2 - 5, Math.cos(a) * r);
    m.rotation.y = Math.random() * 6;
    scene.add(m);
  }
}

{
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.6, 'rgba(255,255,255,.85)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  for (let i = 0; i < 16; i++) {
    const a = Math.random() * Math.PI * 2, r = 500 + Math.random() * 700, y = 190 + Math.random() * 190;
    for (let k = 0; k < 4; k++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.9, fog: false, depthWrite: false }));
      sp.scale.set(150 + Math.random() * 120, 55 + Math.random() * 30, 1);
      sp.position.set(Math.sin(a) * r + (k - 1.5) * 90, y + Math.random() * 14, Math.cos(a) * r + (Math.random() - 0.5) * 40);
      scene.add(sp);
    }
  }
}
{
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); g.strokeStyle = '#1b1b22'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(0, 0); g.lineTo(64, 64); g.moveTo(64, 0); g.lineTo(0, 64); g.stroke();
  const tex = new THREE.CanvasTexture(c); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(160, 3);
  const fence = new THREE.Mesh(new THREE.CylinderGeometry(WALL + 6, WALL + 6, 7, 96, 1, true), new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide }));
  fence.position.y = 3.5; scene.add(fence);
  const posts = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.18, 0.18, 7.4, 6), M(0x30323a), 64), d = new THREE.Object3D();
  for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2; d.position.set(Math.sin(a) * (WALL + 6), 3.7, Math.cos(a) * (WALL + 6)); d.updateMatrix(); posts.setMatrixAt(i, d.matrix); }
  scene.add(posts);
}

/* ================= STUDIO ================= */
const STAGE = { x: 0, y: 600, z: 0 };
{
  const g = new THREE.Group(); g.position.set(STAGE.x, STAGE.y, STAGE.z);
  const HALF = 17, H = 14, box = (w, h, d, mat, x, y, z, par = g) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; par.add(m); return m; };
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  { const x = cv.getContext('2d'); x.fillStyle = '#b8bdc6'; x.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 256; i += 16) { x.fillStyle = i % 32 ? '#a7acb6' : '#cfd3da'; x.fillRect(i, 0, 8, 256); }
    x.fillStyle = 'rgba(60,64,76,.55)'; x.fillRect(0, 150, 256, 10); x.fillRect(0, 0, 256, 8); }
  const wallTex = new THREE.CanvasTexture(cv); wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping; wallTex.repeat.set(4, 1); wallTex.colorSpace = THREE.SRGBColorSpace;
  const room = new THREE.Mesh(new THREE.BoxGeometry(HALF * 2, H, HALF * 2), M(0xffffff, { map: wallTex, side: THREE.BackSide }));
  room.position.y = H / 2; room.receiveShadow = true; g.add(room);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, HALF * 2).rotateX(-Math.PI / 2), M(0x7b7e86, { roughness: 0.55 }));
  floor.position.y = 0.01; floor.receiveShadow = true; g.add(floor);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.08, 40), M(0x3a3d4a, { roughness: 0.5 })); disc.position.y = 0.05; disc.receiveShadow = true; g.add(disc);
  const ring = new THREE.Mesh(new THREE.RingGeometry(4.2, 4.5, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffd23f })); ring.position.y = 0.1; g.add(ring);
  const wood = M(0xb27a44), metal = M(0xc9ced6, { metalness: 0.6, roughness: 0.4 }), dk = M(0x23252d);
  box(15, 7, 0.4, wood, 0, 5.2, -HALF + 0.3);
  for (let i = 0; i < 9; i++) box(0.22, 1.6 + (i % 3) * 0.25, 0.12, metal, -5.5 + i * 0.5, 6.4, -HALF + 0.6);
  for (let i = 0; i < 5; i++) { const t = box(0.35, 0.18, 1.6, dk, 1 + i * 0.7, 6.2, -HALF + 0.6); t.rotation.z = 0.3 * (i % 2 ? 1 : -1); }
  box(15, 0.35, 3, wood, 0, 1.9, -HALF + 1.8); box(0.5, 1.9, 2.6, dk, -7, 0.95, -HALF + 1.8); box(0.5, 1.9, 2.6, dk, 7, 0.95, -HALF + 1.8);
  box(14, 0.2, 2.4, dk, 0, 0.7, -HALF + 1.8);
  box(9, 0.2, 1.2, metal, -2, 9.3, -HALF + 0.9);
  const cols = [0xe63946, 0xffd23f, 0x2f9bff, 0xf4f4f4, 0x3ddc5a];
  for (let i = 0; i < 18; i++) { const can = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.9, 8), M(cols[i % 5])); can.position.set(-6 + i * 0.5, 9.85, -HALF + 0.9); can.castShadow = true; g.add(can); }
  const stool = new THREE.Group(); stool.position.set(5.5, 0, -HALF + 4.6);
  const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.18, 14), dk); seat.position.y = 1.6; stool.add(seat);
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 6), metal); leg.position.y = 0.8; stool.add(leg); g.add(stool);
  const rack = new THREE.Group(); rack.position.set(-HALF + 2, 0, 3);
  box(0.25, 5.5, 4.4, dk, -0.4, 2.75, 0, rack); box(2.4, 0.25, 4.4, dk, 0.6, 0.2, 0, rack); box(2.4, 0.25, 4.4, dk, 0.6, 2.6, 0, rack);
  const tg = new THREE.TorusGeometry(0.85, 0.34, 8, 18);
  for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) { const t = new THREE.Mesh(tg, M(0x15161a)); t.rotation.y = Math.PI / 2; t.position.set(0.7, 0.75 + r * 2.4 + 0.1, -1.6 + k * 1.05); t.castShadow = true; rack.add(t); }
  g.add(rack);
  for (const [x, z] of [[8, 6], [10, -3]]) { const js = new THREE.Mesh(new THREE.ConeGeometry(0.7, 1.6, 4), M(0xe63946)); js.position.set(x, 0.8, z); js.castShadow = true; g.add(js); }
  for (const x of [-8, 0, 8]) { box(5, 0.25, 0.6, new THREE.MeshBasicMaterial({ color: 0xfff6d8 }), x, H - 0.6, 0); }
  const lampLight = new THREE.PointLight(0xfff0d8, 110, 60, 1.6); lampLight.position.set(0, H - 3, 0); g.add(lampLight);
  scene.add(g);
}

/* ================= SHARED MATERIALS ================= */
const PIV = 0.4;
const dark = M(0x15171c), darkDS = M(0x15171c, { side: THREE.DoubleSide });
const glass = M(0x1c2a42, { roughness: 0.08, metalness: 0.4, side: THREE.DoubleSide, transparent: true, opacity: 0.62 });
const glassLight = M(0x9ec8ea, { roughness: 0.04, metalness: 0.2, transparent: true, opacity: 0.55 });
const silver = M(0xd6dbe4, { metalness: 0.7, roughness: 0.3 });
const chrome = M(0xeaeef4, { metalness: 0.95, roughness: 0.15 });
const blackTrim = M(0x0c0d12, { roughness: 0.75, metalness: 0.1 });
const redCal = M(0xe3262e, { roughness: 0.5 });
const spokeMat = M(0x2a2d36, { metalness: 0.4, roughness: 0.5 });
const tyreMat = M(0x0f1015, { roughness: 0.95 });
const lamp = M(0xffffff, { emissive: 0xfff2c0, emissiveIntensity: 1.6 });
const lampHot = M(0xfff8e8, { emissive: 0xffffff, emissiveIntensity: 2.4 });
const tail = M(0xff2233, { emissive: 0xff1122, emissiveIntensity: 1.4 });
const amber = M(0xffa030, { emissive: 0xff7700, emissiveIntensity: 1.4 });
const reverseLight = M(0xfff4d0, { emissive: 0xfff0c0, emissiveIntensity: 0.9 });
const interior = M(0x14161c, { roughness: 0.9 });
const seatMat = M(0x1e2128, { roughness: 0.9 });
const seatTrim = M(0xc0182b, { roughness: 0.75 });
const cageMat = M(0x1a1c22);
const suit = M(0x16181f, { roughness: 0.7 });
const suitAccent = M(0xc0182b, { roughness: 0.65 });
const skin = M(0xecd0b0, { roughness: 0.75 });
const helmMat = M(0xd93b3b, { roughness: 0.5 });
const visorMat = M(0x0a0d14, { roughness: 0.15, metalness: 0.6 });
const belt = M(0xc0182b, { roughness: 0.75 });
const harnessMat = M(0x1c1e24, { roughness: 0.85 });
const carbonMat = M(0x24272e, { roughness: 0.55, metalness: 0.3 });
const carGroup = new THREE.Group(); scene.add(carGroup);
let model = null;

/* ================= GEOMETRY HELPERS ================= */
function loftBounds(l) {
  let zmin = Infinity, zmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  for (let i = 0; i < l.pos.length; i += 3) {
    const y = l.pos[i + 1], z = l.pos[i + 2];
    if (y < ymin) ymin = y;
    if (y > ymax) ymax = y;
    if (z < zmin) zmin = z;
    if (z > zmax) zmax = z;
  }
  return { zmin, zmax, ymin, ymax };
}

function toGeo(l, b) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(l.pos, 3));
  g.setIndex(new THREE.BufferAttribute(l.index, 1));
  for (const q of l.groups) g.addGroup(q.start, q.count, q.mat);
  g.computeVertexNormals();
  const P = g.attributes.position, N = g.attributes.normal, uv = new Float32Array(P.count * 2);
  const dz = b.zmax - b.zmin || 1, dy = b.ymax - b.ymin || 1;
  for (let i = 0; i < P.count; i++) {
    if (Math.abs(N.getX(i)) > 0.4) {
      const u = (P.getZ(i) - b.zmin) / dz;
      uv[i * 2] = clamp(N.getX(i) > 0 ? 1 - u : u, 0.005, 0.995);
      uv[i * 2 + 1] = clamp((P.getY(i) - b.ymin) / dy, 0.01, 0.99);
    } else { uv[i * 2] = 0.005; uv[i * 2 + 1] = 0.995; }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}

/* ================= LIVERY TEXTURE ================= */
function liveryTex(def, hex, b) {
  const W = 2048, H = 512, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const base = new THREE.Color(hex);
  const lum = base.r * 0.3 + base.g * 0.59 + base.b * 0.11;
  const seed = [...def.id].reduce((a, ch) => a + ch.charCodeAt(0), 0);
  const isLight = lum > 0.6;
  const baseCSS = '#' + base.getHexString();
  const shadeCSS = '#' + new THREE.Color(hex).multiplyScalar(0.72).getHexString();
  const accent = isLight ? '#d92030' : '#f5f7fb';
  const darkInk = isLight ? '#0b1230' : '#0b0820';
  const gold = '#ffd23f';

  // The texture maps to the car side: u=0 at the rear, u=1 at the front.
  // v=0 at the lowest point of the body, v=1 at the highest.
  const X = z => clamp((z - b.zmin) / (b.zmax - b.zmin), 0, 1) * W;
  const Y = y => (1 - clamp((y - b.ymin) / (b.ymax - b.ymin), 0, 1)) * H;

  // 1) base paint
  g.fillStyle = baseCSS; g.fillRect(0, 0, W, H);

  // 2) subtle top highlight band (a bright strip just under the roof line)
  const grad = g.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(255,255,255,0.18)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.05)');
  grad.addColorStop(0.55, 'rgba(0,0,0,0)');
  grad.addColorStop(1, 'rgba(0,0,0,0.28)');
  g.fillStyle = grad; g.fillRect(0, 0, W, H);

  // 3) lower rocker band (darker)
  g.fillStyle = shadeCSS; g.fillRect(0, H * 0.78, W, H * 0.22);
  // a thin bright line to separate the rocker from the body
  g.fillStyle = 'rgba(0,0,0,0.4)'; g.fillRect(0, H * 0.78, W, 3);
  g.fillStyle = 'rgba(255,255,255,0.15)'; g.fillRect(0, H * 0.782, W, 2);

  // 4) main accent swoosh (rear quarter to door)
  const wobble = i => Math.sin(i * 1.31 + seed * 0.37) * H * 0.035;
  g.beginPath();
  g.moveTo(X(-2.6), Y(0.25));
  g.lineTo(X(-2.6), Y(0.72));
  for (let i = 0; i <= 20; i++) {
    const z = -2.5 + i * 0.15;
    g.lineTo(X(z), Y(0.55 + 0.07 * (wobble(i) / (H * 0.035)) - i * 0.008));
  }
  g.lineTo(X(1.1), Y(0.48));
  g.lineTo(X(1.1), Y(0.26));
  g.closePath();
  g.fillStyle = accent; g.fill();
  // white pinline along the top edge of the swoosh
  g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 4; g.beginPath();
  for (let i = 0; i <= 20; i++) {
    const z = -2.5 + i * 0.15;
    const px = X(z), py = Y(0.6 + 0.07 * (wobble(i) / (H * 0.035)) - i * 0.008);
    i ? g.lineTo(px, py) : g.moveTo(px, py);
  }
  g.stroke();

  // 5) door shutlines
  const drawVLine = (z, thick) => {
    g.fillStyle = 'rgba(0,0,0,0.5)';
    g.fillRect(X(z), Y(b.ymax - 0.02), thick, Y(b.ymin + 0.03) - Y(b.ymax - 0.02));
    g.fillStyle = 'rgba(255,255,255,0.10)';
    g.fillRect(X(z) + thick, Y(b.ymax - 0.02), 1, Y(b.ymin + 0.03) - Y(b.ymax - 0.02));
  };
  drawVLine(0.62, 3);
  drawVLine(-1.05, 3);
  // door handle (horizontal slot)
  g.fillStyle = 'rgba(0,0,0,0.55)'; g.fillRect(X(0.35), Y(0.72), X(0.55) - X(0.35), 7);
  g.fillStyle = 'rgba(220,220,230,0.9)'; g.fillRect(X(0.36), Y(0.72) + 1, X(0.54) - X(0.36), 5);

  // 6) hood and trunk shutlines
  const drawHLine = (y) => { g.fillStyle = 'rgba(0,0,0,0.42)'; g.fillRect(0, Y(y), W, 3); };
  // engine hood around the front of the cabin (approximately)
  drawHLine(b.ymax - 0.06);
  // trunk lid around the rear
  g.fillStyle = 'rgba(0,0,0,0.42)'; g.fillRect(0, Y(b.ymin + 0.08), W, 3);

  // 7) sponsor texts
  const txt = (t, x, y, size, fill, stroke, w = 0) => {
    g.font = `900 ${size}px "Russo One","Arial Black",Impact,sans-serif`;
    g.textBaseline = 'middle';
    g.lineJoin = 'round';
    if (stroke) { g.lineWidth = w || size * 0.16; g.strokeStyle = stroke; g.strokeText(t, x, y); }
    g.fillStyle = fill; g.fillText(t, x, y);
  };
  // group of sponsor labels along the door / rear quarter
  g.save();
  // Rear-quarter low band (dark on light cars, light on dark cars)
  g.fillStyle = isLight ? darkInk : 'rgba(255,255,255,0.85)';
  g.fillRect(X(-1.55), Y(0.5), X(-0.65) - X(-1.55), 26);
  txt('NEXT LEVEL', X(-1.5), Y(0.5) + 13, 22, isLight ? '#fff' : '#0b0820', null);
  // Front-door main text
  g.save();
  g.translate(X(-0.15), Y(0.6));
  g.transform(1, 0, -0.08, 1, 0, 0);
  txt('TURBO KING', 0, 0, 30, '#fff', darkInk, 8);
  g.restore();
  // Upper mid stripe with a light background
  g.fillStyle = gold; g.fillRect(X(-0.55), Y(0.78), X(0.35) - X(-0.55), 22);
  txt('DRIFT RUN', X(-0.5), Y(0.78) + 11, 20, '#0b0820', null);
  g.restore();

  // 8) hood text
  txt('★ TURBO ★', X(1.35), Y(0.72), 22, '#fff', darkInk, 6);

  // 9) racing number roundel on door
  const numCx = X(0.15), numCy = Y(0.42);
  g.beginPath(); g.arc(numCx, numCy, 58, 0, Math.PI * 2);
  g.fillStyle = '#fff'; g.fill();
  g.lineWidth = 6; g.strokeStyle = darkInk; g.stroke();
  g.beginPath(); g.arc(numCx, numCy, 46, 0, Math.PI * 2);
  g.lineWidth = 3; g.stroke();
  txt(String(10 + seed % 90), numCx - 22, numCy + 4, 58, darkInk, '#fff', 5);

  // 10) checker patch (rear upper corner)
  const cx0 = X(-2.05), cy0 = Y(0.72);
  for (let r = 0; r < 4; r++) for (let k = 0; k < 10; k++) {
    g.fillStyle = (r + k) % 2 ? '#fff' : '#101018';
    g.fillRect(cx0 + k * 8, cy0 + r * 8, 8, 8);
  }

  // 11) sticker pack (small sponsor decals along the lower body)
  const small = (label, x, y, w, color) => {
    g.fillStyle = color || '#101018';
    g.fillRect(x, y, w, 16);
    txt(label, x + 6, y + 8, 12, '#fff', null);
  };
  small('★', X(1.35), Y(0.32), 30, '#0b0820');
  small('FUEL', X(0.05), Y(0.30), 52, '#d92030');
  small('AIR', X(-0.75), Y(0.32), 38, '#0b0820');
  small('OIL', X(-1.85), Y(0.34), 40, '#0b0820');

  // 12) hood / engine text on the front section
  txt('2.4L', X(1.75), Y(0.42), 20, 'rgba(255,255,255,0.85)', darkInk, 5);

  // 13) small sakura dots (a personal touch)
  for (let k = 0; k < 6; k++) {
    g.fillStyle = k % 2 ? '#ff8fb8' : '#ffb7d0';
    g.beginPath(); g.arc(X(-2.15) + k * 18, Y(0.62) + (k % 2) * 10, 5, 0, Math.PI * 2); g.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
const liveryMat = (def, hex, b) => new THREE.MeshStandardMaterial({ map: liveryTex(def, hex, b), flatShading: true, roughness: 0.42, metalness: 0.22, side: THREE.DoubleSide });
function repaint(m, hex) {
  m.solid.color.setHex(hex);
  m.paint.map.dispose();
  m.paint.map = liveryTex(m.def, hex, m.bb);
  m.paint.needsUpdate = true;
}

/* ================= MODEL BUILDING BLOCKS ================= */
function mkBar(a, b, r, mat, seg = 8) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const len = A.distanceTo(B);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, seg), mat);
  m.position.copy(A).add(B).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  return m;
}
function mkBox(w, h, d, mat, x, y, z, parent) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}
function mkCyl(rt, rb, h, seg, mat, x, y, z, parent) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z); m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}

/* ---------- DRIVER RIG (seated, in the cabin) ---------- */
function buildCockpitDriver(scale = 1) {
  const rig = new THREE.Group();
  const S = scale;

  // hips + pelvis
  const hips = mkBox(0.22 * S, 0.12 * S, 0.18 * S, suit, 0, 0.02 * S, 0, rig);
  // torso: leans slightly back
  const torso = new THREE.Group();
  torso.position.set(0, 0.08 * S, 0);
  torso.rotation.x = -0.12;
  rig.add(torso);
  const chest = mkBox(0.26 * S, 0.22 * S, 0.16 * S, suit, 0, 0.11 * S, 0, torso);
  // harness stripes
  mkBox(0.03 * S, 0.20 * S, 0.005, suitAccent, -0.07 * S, 0.10 * S, 0.082 * S, torso);
  mkBox(0.03 * S, 0.20 * S, 0.005, suitAccent, 0.07 * S, 0.10 * S, 0.082 * S, torso);
  // collar / HANS-ish blob
  mkBox(0.24 * S, 0.05 * S, 0.16 * S, harnessMat, 0, 0.24 * S, 0, torso);
  // neck
  mkCyl(0.035 * S, 0.04 * S, 0.05 * S, 8, skin, 0, 0.285 * S, 0.01 * S, torso);
  // head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.075 * S, 12, 10), skin);
  head.position.set(0, 0.345 * S, 0.015 * S); head.castShadow = true; torso.add(head);
  // helmet (top cap only)
  const helm = new THREE.Mesh(new THREE.SphereGeometry(0.088 * S, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.72), helmMat);
  helm.position.copy(head.position); torso.add(helm);
  // helmet visor band
  const visor = mkBox(0.15 * S, 0.055 * S, 0.03 * S, visorMat, 0, 0.345 * S, 0.075 * S, torso);
  // helmet stripe
  mkBox(0.09 * S, 0.006, 0.18 * S, suitAccent, 0, 0.42 * S, 0.01 * S, torso);

  // shoulders
  mkBox(0.34 * S, 0.06 * S, 0.16 * S, suit, 0, 0.215 * S, 0, torso);

  // steering rig — tilt group holds a spin group so the wheel turns in its own plane
  const swTilt = new THREE.Group();
  swTilt.position.set(0, 0.17 * S, 0.26 * S);
  swTilt.rotation.x = 1.15;
  torso.add(swTilt);
  const swSpin = new THREE.Group();
  swTilt.add(swSpin);
  const wr = 0.1 * S, wt = 0.014 * S;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(wr, wt, 8, 22), blackTrim);
  swSpin.add(ring);
  // three spokes
  const sH = new THREE.Mesh(new THREE.BoxGeometry(wr * 1.9, 0.016 * S, 0.016 * S), blackTrim); swSpin.add(sH);
  const sB = new THREE.Mesh(new THREE.BoxGeometry(0.016 * S, wr * 1.05, 0.016 * S), blackTrim);
  sB.position.set(0, -wr * 0.52, 0); swSpin.add(sB);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.024 * S, 0.024 * S, 0.02 * S, 10), blackTrim);
  hub.rotation.x = Math.PI / 2; swSpin.add(hub);
  const hubDot = new THREE.Mesh(new THREE.CylinderGeometry(0.008 * S, 0.008 * S, 0.026 * S, 8), redCal);
  hubDot.rotation.x = Math.PI / 2; swSpin.add(hubDot);

  // arms from shoulders to wheel
  const shL = [-0.16 * S, 0.20 * S, 0], shR = [0.16 * S, 0.20 * S, 0];
  const hdL = [-0.09 * S, 0.18 * S, 0.28 * S], hdR = [0.09 * S, 0.18 * S, 0.28 * S];
  const upL = [(-0.16 - 0.03) * S, 0.09 * S, 0.14 * S], upR = [(0.16 + 0.03) * S, 0.09 * S, 0.14 * S];
  torso.add(mkBar(shL, upL, 0.042 * S, suit, 6));
  torso.add(mkBar(upL, hdL, 0.038 * S, suit, 6));
  torso.add(mkBar(shR, upR, 0.042 * S, suit, 6));
  torso.add(mkBar(upR, hdR, 0.038 * S, suit, 6));
  // hands
  const handGeo = new THREE.SphereGeometry(0.042 * S, 8, 6);
  const hL = new THREE.Mesh(handGeo, skin); hL.position.set(...hdL); torso.add(hL);
  const hR = new THREE.Mesh(handGeo, skin); hR.position.set(...hdR); torso.add(hR);

  // legs (mostly hidden behind the dash, but a knee and a foot peek forward)
  for (const sx of [1, -1]) {
    const hip = [sx * 0.09 * S, 0.02 * S, 0];
    const knee = [sx * 0.11 * S, 0.05 * S, 0.26 * S];
    const foot = [sx * 0.12 * S, -0.06 * S, 0.38 * S];
    rig.add(mkBar(hip, knee, 0.055 * S, suit, 6));
    rig.add(mkBar(knee, foot, 0.05 * S, suit, 6));
    const boot = mkBox(0.09 * S, 0.06 * S, 0.16 * S, blackTrim, foot[0], foot[1], foot[2] + 0.03 * S, rig);
    boot.rotation.x = 0.2;
  }

  return { rig, swSpin, head };
}

/* ---------- STANDING CREW (garage editor) ---------- */
function buildStandingCrew() {
  const g = new THREE.Group();

  // legs
  for (const sx of [1, -1]) {
    const thigh = mkCyl(0.07, 0.065, 0.42, 8, suit, sx * 0.09, 0.66, 0, g);
    const shin = mkCyl(0.06, 0.055, 0.42, 8, suit, sx * 0.09, 0.24, 0.02, g);
    const shoe = mkBox(0.11, 0.075, 0.24, blackTrim, sx * 0.09, 0.04, 0.05, g);
    shoe.rotation.x = 0;
  }
  // hips
  mkBox(0.26, 0.14, 0.18, suit, 0, 0.90, 0, g);
  // belt
  mkBox(0.27, 0.035, 0.19, belt, 0, 0.965, 0, g);
  // torso
  mkBox(0.30, 0.40, 0.19, suit, 0, 1.16, 0, g);
  // chest accent stripe
  mkBox(0.26, 0.05, 0.20, suitAccent, 0, 1.24, 0, g);
  // racing number roundel on the chest
  mkCyl(0.055, 0.055, 0.006, 14, M(0xffffff), 0, 1.20, -0.1, g).rotation.x = Math.PI / 2;
  // collar
  mkBox(0.30, 0.03, 0.19, harnessMat, 0, 1.36, 0, g);
  // shoulders
  mkBox(0.40, 0.10, 0.19, suit, 0, 1.42, 0, g);

  // arms: upper + fore, elbows slightly out, hands relaxed
  for (const sx of [1, -1]) {
    const shoulder = [sx * 0.20, 1.42, 0];
    const elbow = [sx * 0.27, 1.08, 0.02];
    const hand = [sx * 0.28, 0.78, 0.06];
    g.add(mkBar(shoulder, elbow, 0.045, suit, 6));
    g.add(mkBar(elbow, hand, 0.042, suit, 6));
    const hMesh = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), skin);
    hMesh.position.set(...hand); g.add(hMesh);
    // racing stripe down the arm
    g.add(mkBar([sx * 0.20, 1.40, 0.02], [sx * 0.27, 1.08, 0.03], 0.006, suitAccent, 5));
  }

  // neck + head + helmet + visor
  mkCyl(0.045, 0.05, 0.07, 8, skin, 0, 1.51, 0, g);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.095, 12, 10), skin);
  head.position.set(0, 1.62, 0); head.castShadow = true; g.add(head);
  const helm = new THREE.Mesh(new THREE.SphereGeometry(0.112, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.72), helmMat);
  helm.position.copy(head.position); g.add(helm);
  // visor
  const visor = mkBox(0.17, 0.06, 0.045, visorMat, 0, 1.62, 0.085, g);
  // helmet stripe
  mkBox(0.09, 0.006, 0.22, suitAccent, 0, 1.70, 0, g);

  return g;
}

/* ================= THE FULL CAR MODEL ================= */
function buildModel(def, paintHex) {
  const bodyLoftData = bodyLoft(def);
  const cabinLoftData = cabinLoft(def);
  const bb = loftBounds(bodyLoftData);
  const paint = liveryMat(def, paintHex, bb);
  const solid = M(paintHex, { roughness: 0.42, metalness: 0.22, side: THREE.DoubleSide });

  const root = new THREE.Group(), pivot = new THREE.Group(), body = new THREE.Group();
  pivot.position.y = PIV; body.position.y = -PIV; root.add(pivot); pivot.add(body);

  const put = (geo, mat, x, y, z, parent = body) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z); mesh.castShadow = true;
    parent.add(mesh);
    return mesh;
  };
  const box = (w, h, d, mat, x, y, z, parent) => put(new THREE.BoxGeometry(w, h, d), mat, x, y, z, parent);
  const cyl = (rt, rb, h, seg, mat, x, y, z, parent) => put(new THREE.CylinderGeometry(rt, rb, h, seg), mat, x, y, z, parent);

  const rows = def.rows, nose = rows[0], tl = rows[rows.length - 1], nr = nose.slice(1), tr = tl.slice(1);
  const nz = nose[0], tz = tl[0];

  // ---- shell ----
  put(toGeo(bodyLoftData, bb), [paint, darkDS], 0, 0, 0);
  put(toGeo(cabinLoftData, bb), [glass, paint], 0, 0, 0);

  // cabin sample helpers used everywhere below
  const zf = def.cab[1][0], zr = def.cab[2][0], zMid = (zf + zr) / 2;
  const cf = sampleCab(def, zf), cr = sampleCab(def, zr), cm = sampleCab(def, zMid);
  const floorY = cm.yb + 0.015, roofY = cm.yr;

  /* ---------- SIDE DETAILS ---------- */
  // door shutlines as thin dark grooves on the flanks
  const halfW = z => halfWidthAt(sampleBody(rows, z), 0.45) + 0.005;
  for (const zline of [zf + 0.06, cr.z - 0.14]) {
    const hw = halfW(zline);
    for (const sx of [1, -1]) {
      box(0.015, 0.44, 0.02, blackTrim, sx * hw, 0.52, zline, body);
    }
  }
  // door handle
  for (const sx of [1, -1]) {
    const hw = halfW(0.35);
    box(0.02, 0.05, 0.12, blackTrim, sx * (hw + 0.003), 0.66, 0.35, body);
    box(0.008, 0.02, 0.09, chrome, sx * (hw + 0.01), 0.66, 0.35, body);
  }
  // rocker / side skirt
  for (const sx of [1, -1]) {
    const midRow = sampleBody(rows, 0);
    const skirt = mkBox(0.05, 0.10, def.wb * 0.95, solid, sx * (midRow[1] * 0.92), midRow[0] + 0.06, 0, body);
    skirt.rotation.z = sx * 0.08;
  }
  // side vent behind the front wheel (gills)
  if (def.vents) {
    const v = def.vents;
    const hw = halfWidthAt(sampleBody(rows, v.z), v.y);
    for (const sx of [1, -1]) {
      box(0.02, v.h * 0.9, v.l, blackTrim, sx * (hw + 0.005), v.y, v.z, body);
      // two chrome bars
      for (const k of [-0.15, 0.15]) {
        box(0.024, 0.02, v.l * 0.9, chrome, sx * (hw + 0.008), v.y + k * v.h, v.z, body);
      }
    }
  }
  // fuel cap
  const fuelZ = -1.8;
  {
    const hw = halfWidthAt(sampleBody(rows, fuelZ), 0.55);
    for (const sx of [1, -1]) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.012, 14), chrome);
      cap.rotation.z = Math.PI / 2;
      cap.position.set(sx * (hw + 0.005), 0.6, fuelZ);
      body.add(cap);
    }
  }

  /* ---------- FRONT END ---------- */
  // headlights: a black housing cup with a lens face and a DRL strip
  {
    const yRow0 = nr[0], yRow1 = nr[4];
    const yy = yRow0 + (yRow1 - yRow0) * 0.62, hh = Math.min(0.13, Math.max(0.075, (yRow1 - yRow0) * 0.3));
    const hw = halfWidthAt(nr, yy + hh / 2);
    for (const sx of [1, -1]) {
      const cx = sx * hw * 0.55;
      // housing cup
      box(hw * 0.58, hh * 1.2, 0.07, blackTrim, cx, yy, nz + 0.005, body);
      // lens face
      box(hw * 0.5, hh * 0.95, 0.02, lamp, cx, yy, nz + 0.045, body);
      // bright inner spot
      box(hw * 0.22, hh * 0.45, 0.015, lampHot, cx + sx * hw * 0.06, yy - hh * 0.05, nz + 0.056, body);
      // thin vertical DRL strip at the outboard edge
      box(0.02, hh * 1.1, 0.02, lampHot, cx + sx * hw * 0.24, yy, nz + 0.05, body);
    }
  }
  // grille: recessed black mesh with a chrome surround and a badge
  {
    const gy = nr[0] + (nr[4] - nr[0]) * 0.28;
    const gh = Math.min(0.13, (nr[4] - nr[0]) * 0.32);
    const gw = halfWidthAt(nr, gy) * 0.9;
    box(gw * 2, gh, 0.04, blackTrim, 0, gy, nz + 0.008, body);
    // horizontal chrome slats
    for (let k = -1; k <= 1; k++) box(gw * 2 - 0.05, 0.014, 0.045, chrome, 0, gy + k * gh * 0.32, nz + 0.02, body);
    // badge (small chrome block with a red dot)
    box(0.05, 0.05, 0.03, chrome, 0, gy, nz + 0.03, body);
    box(0.024, 0.024, 0.032, redCal, 0, gy, nz + 0.038, body);
  }
  // lower bumper lip
  {
    const y0 = nr[0];
    box(halfWidthAt(nr, y0 + 0.05) * 1.95, 0.07, 0.07, blackTrim, 0, y0 + 0.035, nz + 0.005, body);
  }
  // splitter with side fins
  {
    const sw = halfWidthAt(nr, nr[0]) * 2 + 0.08;
    box(sw, 0.03, 0.55, carbonMat, 0, nr[0] - 0.02, nz + 0.05, body);
    for (const sx of [1, -1]) {
      box(0.03, 0.14, 0.10, carbonMat, sx * (sw / 2 - 0.06), nr[0] + 0.07, nz + 0.04, body);
    }
  }
  // front canards (small wings on the bumper corners)
  for (const sx of [1, -1]) {
    const hw = halfWidthAt(nr, nr[0] + 0.2);
    const can = box(hw * 0.4, 0.02, 0.14, carbonMat, sx * hw * 0.72, nr[0] + 0.22, nz + 0.02, body);
    can.rotation.x = -0.12;
  }
  // tow hook (small red hook on the driver's side)
  {
    const hw = halfWidthAt(nr, nr[0] + 0.1);
    box(0.05, 0.04, 0.06, redCal, -hw * 0.6, nr[0] + 0.11, nz + 0.02, body);
  }
  // front number plate
  {
    const gy = nr[0] + 0.16;
    box(halfWidthAt(nr, gy) * 0.5, 0.09, 0.02, M(0xf3f3f3), 0, gy, nz + 0.055, body);
    box(halfWidthAt(nr, gy) * 0.5 - 0.02, 0.02, 0.024, blackTrim, 0, gy + 0.02, nz + 0.056, body);
  }

  /* ---------- REAR END ---------- */
  // taillights: black housings, bright lens, and a red LED strip
  {
    const yRow0 = tr[0], yRow1 = tr[4];
    const yy = yRow0 + (yRow1 - yRow0) * 0.6, hh = Math.min(0.14, Math.max(0.08, (yRow1 - yRow0) * 0.32));
    const hw = halfWidthAt(tr, yy + hh / 2);
    for (const sx of [1, -1]) {
      const cx = sx * hw * 0.55;
      box(hw * 0.62, hh * 1.25, 0.07, blackTrim, cx, yy, tz - 0.005, body);
      box(hw * 0.55, hh * 1.0, 0.02, tail, cx, yy, tz - 0.045, body);
      // inner amber indicator
      box(hw * 0.16, hh * 0.55, 0.025, amber, cx - sx * hw * 0.18, yy - hh * 0.05, tz - 0.05, body);
      // thin vertical reflector
      box(0.02, hh * 1.1, 0.02, tail, cx + sx * hw * 0.25, yy, tz - 0.05, body);
    }
    // centre light bar
    box(halfWidthAt(tr, yy) * 0.9, 0.03, 0.03, tail, 0, yy, tz - 0.05, body);
  }
  // rear bumper lip
  {
    const y0 = tr[0];
    box(halfWidthAt(tr, y0 + 0.05) * 1.95, 0.09, 0.08, blackTrim, 0, y0 + 0.045, tz - 0.01, body);
  }
  // reverse lights
  for (const sx of [1, -1]) {
    const y = tr[0] + (tr[4] - tr[0]) * 0.36;
    const hw = halfWidthAt(tr, y);
    box(0.06, 0.04, 0.025, reverseLight, sx * hw * 0.45, y, tz - 0.05, body);
  }
  // diffuser with vertical fins
  {
    const y0 = tr[0];
    const dw = halfWidthAt(tr, y0) * 1.9;
    box(dw, 0.13, 0.32, carbonMat, 0, y0 + 0.09, tz - 0.08, body);
    for (let k = -2; k <= 2; k++) box(0.02, 0.11, 0.28, carbonMat, k * dw / 5, y0 + 0.09, tz - 0.10, body);
  }
  // exhausts (chrome tips)
  {
    const y = tr[0] + 0.10;
    const exX = halfWidthAt(tr, y) * 0.55;
    const exGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.16, 12).rotateX(Math.PI / 2);
    for (const sx of [1, -1]) {
      const tip = put(exGeo, chrome, sx * exX, y, tz - 0.02, body);
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.155, 10).rotateX(Math.PI / 2), blackTrim);
      inner.position.set(sx * exX, y, tz - 0.022); body.add(inner);
    }
  }
  // rear number plate
  {
    const y = tr[0] + 0.22;
    box(halfWidthAt(tr, y) * 0.5, 0.09, 0.02, M(0xf3f3f3), 0, y, tz - 0.075, body);
    box(halfWidthAt(tr, y) * 0.5 - 0.02, 0.02, 0.024, blackTrim, 0, y - 0.02, tz - 0.078, body);
  }
  // rear badge
  {
    const y = tr[0] + 0.34;
    box(0.05, 0.05, 0.02, chrome, 0, y, tz - 0.075, body);
  }

  /* ---------- MIRRORS ---------- */
  {
    const c0 = sampleCab(def, def.cab[0][0] - 0.16);
    for (const sx of [1, -1]) {
      const armZ = def.cab[0][0] - 0.12;
      // arm
      const arm = box(0.06, 0.02, 0.02, blackTrim, sx * (c0.wb + 0.03), c0.yb + 0.16, armZ, body);
      // housing
      const hz = c0.yb + 0.16;
      box(0.10, 0.07, 0.14, solid, sx * (c0.wb + 0.10), hz, armZ, body);
      // glass
      box(0.02, 0.05, 0.10, glass, sx * (c0.wb + 0.155), hz, armZ, body);
    }
  }

  /* ---------- WIPERS + ANTENNA ---------- */
  {
    const wy = cf.yb - 0.02;
    const wGeoL = new THREE.BoxGeometry(0.02, 0.015, 0.34);
    for (const sx of [1, -1]) {
      const w = new THREE.Mesh(wGeoL, blackTrim);
      w.position.set(sx * 0.18, wy, zf + 0.02);
      w.rotation.y = sx * 0.28;
      body.add(w);
    }
    // roof antenna
    cyl(0.006, 0.006, 0.28, 6, blackTrim, -0.14, cr.yr + 0.14, cr.z + 0.25, body);
  }

  /* ---------- HOOD VENT / SCOOP ---------- */
  if (def.scoop) {
    const s = def.scoop;
    const sy = sampleBody(rows, s.z)[4];
    // base plate
    box(s.w * 1.15, s.h * 0.4, s.l * 1.05, blackTrim, 0, sy + s.h * 0.2, s.z, body);
    // raised scoop
    box(s.w, s.h * 1.6, s.l, solid, 0, sy + s.h * 0.9, s.z, body);
    // mouth
    box(s.w * 0.85, s.h * 0.7, 0.02, blackTrim, 0, sy + s.h * 0.9, s.z + s.l * 0.5, body);
  }
  // hood vents (small louvres for cars without a scoop)
  if (!def.scoop) {
    for (const sx of [1, -1]) {
      const hx = sx * 0.35;
      const hy = sampleBody(rows, 1.1)[4];
      box(0.18, 0.02, 0.22, blackTrim, hx, hy + 0.005, 1.1, body);
      // louvre slots
      for (let k = 0; k < 3; k++) box(0.15, 0.012, 0.02, carbonMat, hx, hy + 0.016, 1.02 + k * 0.07, body);
    }
  }
  // popup headlight pods (for popup cars)
  if (def.popup) {
    for (const sx of [1, -1]) {
      const py = sampleBody(rows, nz - 0.4)[4] + 0.02;
      box(0.32, 0.05, 0.22, solid, sx * 0.5, py + 0.015, nz - 0.4, body);
      box(0.30, 0.025, 0.20, blackTrim, sx * 0.5, py + 0.045, nz - 0.4, body);
    }
  }

  /* ---------- B-PILLAR (visible seam between side window and rear glass) ---------- */
  {
    const bp = sampleCab(def, def.bpillar), bh = bp.yr - bp.yb;
    if (bh > 0.1) for (const sx of [1, -1]) {
      const p = box(0.05, bh, 0.08, solid, sx * (bp.wb + bp.wr) / 2, (bp.yb + bp.yr) / 2, def.bpillar, body);
      p.rotation.z = sx * Math.atan((bp.wb - bp.wr) / bh);
    }
  }

  /* ---------- INTERIOR: floor, dashboard, console, seats, cage ---------- */
  const cabinW = Math.min(cm.wb, cm.wr) * 0.94;
  // floor pan
  box(cabinW * 2, 0.008, zf - zr - 0.02, interior, 0, floorY, zMid, body);
  // rear bulkhead (closes off the cabin from the trunk)
  box(cabinW * 2, (cr.yr - cr.yb) * 0.9, 0.02, interior, 0, cr.yb + (cr.yr - cr.yb) * 0.45, zr - 0.02, body);
  // dashboard slab
  const dashZ = zf + 0.02, dashH = 0.15;
  box(cabinW * 2, dashH, 0.16, interior, 0, floorY + dashH / 2, dashZ, body);
  // dash top trim
  box(cabinW * 2, 0.02, 0.18, solid, 0, floorY + dashH, dashZ, body);
  // instrument cluster in front of the driver
  box(0.20, 0.09, 0.03, blackTrim, -0.28, floorY + dashH * 0.75, dashZ + 0.085, body);
  // two round gauges
  const gFaceL = new THREE.Mesh(new THREE.CircleGeometry(0.035, 14), M(0x0a0d14));
  gFaceL.position.set(-0.33, floorY + dashH * 0.75, dashZ + 0.105); body.add(gFaceL);
  const gFaceR = new THREE.Mesh(new THREE.CircleGeometry(0.035, 14), M(0x0a0d14));
  gFaceR.position.set(-0.23, floorY + dashH * 0.75, dashZ + 0.105); body.add(gFaceR);
  // needles
  box(0.005, 0.03, 0.005, redCal, -0.33, floorY + dashH * 0.75 + 0.012, dashZ + 0.108, body);
  box(0.005, 0.03, 0.005, redCal, -0.23, floorY + dashH * 0.75 + 0.010, dashZ + 0.108, body);
  // centre screen
  box(0.18, 0.11, 0.03, blackTrim, 0.02, floorY + dashH * 0.7, dashZ + 0.09, body);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 0.08), M(0x1d4a8e, { emissive: 0x0a1c3a, emissiveIntensity: 0.6 }));
  screen.position.set(0.02, floorY + dashH * 0.7, dashZ + 0.108); body.add(screen);
  // HVAC / radio below the screen
  box(0.16, 0.04, 0.02, blackTrim, 0.02, floorY + 0.06, dashZ + 0.09, body);
  // two round vents
  for (const sx of [-1, 1]) {
    const vent = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.025, 12).rotateX(Math.PI / 2), blackTrim);
    vent.position.set(0.02 + sx * 0.13, floorY + dashH * 0.72, dashZ + 0.09); body.add(vent);
    const slat = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.005, 0.02), chrome);
    slat.position.set(0.02 + sx * 0.13, floorY + dashH * 0.72, dashZ + 0.102); body.add(slat);
  }

  // centre console
  const conL = zf - zr - 0.55;
  box(0.16, 0.10, conL, interior, 0.02, floorY + 0.05, zMid, body);
  // shifter
  const shifterBase = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.02, 10), blackTrim);
  shifterBase.position.set(0.02, floorY + 0.11, zMid + 0.12); body.add(shifterBase);
  const shifterRod = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.14, 8), blackTrim);
  shifterRod.position.set(0.02, floorY + 0.19, zMid + 0.12); shifterRod.rotation.x = -0.15; body.add(shifterRod);
  const shifterKnob = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), redCal);
  shifterKnob.position.set(0.02, floorY + 0.27, zMid + 0.13); body.add(shifterKnob);
  // handbrake lever
  const hbLever = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.22, 8), chrome);
  hbLever.position.set(0.02, floorY + 0.15, zMid - 0.02); hbLever.rotation.x = 1.3; body.add(hbLever);
  const hbGrip = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.06, 10), blackTrim);
  hbGrip.position.set(0.02, floorY + 0.15, zMid - 0.13); hbGrip.rotation.x = 1.3; body.add(hbGrip);

  // pedals (just poking out from under the dashboard)
  for (const [dx, mat] of [[-0.06, chrome], [0.02, chrome], [0.10, chrome]]) {
    const p = box(0.03, 0.02, 0.06, mat, -0.28 + dx, floorY + 0.02, dashZ - 0.05, body);
    p.rotation.x = -0.35;
  }
  // steering column
  box(0.03, 0.03, 0.18, blackTrim, -0.32, floorY + 0.20, dashZ - 0.06, body);

  // two seats
  const seats = [];
  for (const sx of [-1, 1]) {
    const s = buildSeat(def, sx, cm, zMid, floorY, body);
    seats.push(s);
  }

  // roll cage (tubes around the cabin, sits under the roof)
  {
    const czF = cf.z, czR = cr.z;
    const bars = [];
    for (const sx of [1, -1]) {
      bars.push([sx * cf.wr * 0.92, cf.yr - 0.06, czF, sx * cr.wr * 0.92, cr.yr - 0.06, czR]);
      bars.push([sx * cf.wb * 0.92, cf.yb + 0.13, czF, sx * cr.wr * 0.92, cr.yr - 0.06, czR]);
      bars.push([sx * cr.wb * 0.92, cr.yb + 0.13, czR, sx * cf.wr * 0.92, cf.yr - 0.06, czF]);
      bars.push([sx * cf.wb * 0.92, cf.yb + 0.13, czF, sx * cf.wr * 0.92, cf.yr - 0.06, czF]);
    }
    bars.push([-cf.wr * 0.92, cf.yr - 0.06, czF, cf.wr * 0.92, cf.yr - 0.06, czF]);
    bars.push([-cr.wr * 0.92, cr.yr - 0.06, czR, cr.wr * 0.92, cr.yr - 0.06, czR]);
    for (const [ax, ay, az, bx, by, bz] of bars) body.add(mkBar([ax, ay, az], [bx, by, bz], 0.019, cageMat, 8));
  }

  // fire extinguisher
  {
    const ext = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.16, 12), redCal);
    ext.position.set(-0.36, floorY + 0.10, zMid - 0.3); body.add(ext);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.04, 6), blackTrim);
    nozzle.position.set(-0.36, floorY + 0.20, zMid - 0.3); body.add(nozzle);
  }

  /* ---------- DRIVER (seated) ---------- */
  const scale = clamp((roofY - floorY) / 0.58, 0.72, 1.05);
  const driver = buildCockpitDriver(scale);
  driver.rig.position.set(-0.30, floorY + 0.02, zMid - 0.05);
  body.add(driver.rig);

  /* ---------- WING + SPLITTER-EXTENSION ---------- */
  const ws = def.wingSpec;
  const wing = new THREE.Group(), plane = new THREE.Group();
  wing.position.set(0, sampleBody(rows, ws.z)[4] - 0.01, ws.z); body.add(wing);
  plane.position.y = ws.h; wing.add(plane);
  for (const sx of [1, -1]) {
    box(0.05, ws.h, 0.12, carbonMat, sx * ws.hw * 0.55, ws.h / 2, 0, wing);
    // endplates
    box(0.02, 0.14, ws.chord + 0.06, carbonMat, sx * (ws.hw + 0.02), 0.03, 0, plane);
    // endplate details: number + accent stripe
    box(0.022, 0.005, ws.chord * 0.7, suitAccent, sx * (ws.hw + 0.03), 0.06, 0, plane);
  }
  box(ws.hw * 2, 0.035, ws.chord, carbonMat, 0, 0, 0, plane);
  // wing underside "gurney" flap
  box(ws.hw * 2, 0.02, 0.03, suitAccent, 0, -0.012, -ws.chord * 0.42, plane);

  const splitter = put(new THREE.BoxGeometry(nr[1] * 2 + 0.1, 0.03, 1), carbonMat, 0, nr[0] - 0.02, nz);

  /* ---------- WHEELS ---------- */
  const lay = wheelLayout(def), wheels = [];
  for (const axle of ['front', 'rear']) {
    const L = lay[axle];
    const front = axle === 'front';
    for (const sx of [1, -1]) {
      const wp = new THREE.Group(), cg = new THREE.Group(), roll = new THREE.Group();
      wp.position.set(sx * L.x, L.R, L.z); wp.add(cg); cg.add(roll); root.add(wp);

      // tyre
      const tyre = new THREE.Mesh(new THREE.CylinderGeometry(L.R, L.R, L.w, 24).rotateZ(Math.PI / 2), tyreMat);
      tyre.castShadow = true; roll.add(tyre);
      // tyre sidewall rings (subtle detail)
      for (const off of [-L.w / 2 + 0.005, L.w / 2 - 0.005]) {
        const sw = new THREE.Mesh(new THREE.TorusGeometry(L.R * 0.78, 0.012, 4, 18), tyreMat);
        sw.rotation.y = Math.PI / 2; sw.position.x = off; roll.add(sw);
      }

      // rim
      const rimR = L.R * 0.66;
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(rimR, rimR, L.w * 0.9, 20).rotateZ(Math.PI / 2), spokeMat);
      roll.add(rim);
      // rim outer lip
      const lip = new THREE.Mesh(new THREE.TorusGeometry(rimR - 0.005, 0.014, 6, 22), chrome);
      lip.rotation.y = Math.PI / 2; lip.position.x = sx * L.w * 0.45; roll.add(lip);

      // 6 spoke pairs (V-spokes)
      for (let k = 0; k < 6; k++) {
        const ang = k * Math.PI * 2 / 6;
        const spokeLen = rimR * 0.85;
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(L.w * 0.55, spokeLen, 0.028), silver);
        spoke.position.set(sx * L.w * 0.1, 0, 0);
        spoke.rotation.z = ang + Math.PI / 2;
        // place the spoke so it starts at the hub
        spoke.position.y = Math.cos(ang) * spokeLen / 2;
        spoke.position.z = Math.sin(ang) * spokeLen / 2;
        spoke.rotation.x = 0;
        spoke.rotation.z = 0;
        spoke.rotation.y = ang;
        // simpler: a straight radial box using a rotated group
        roll.remove(spoke);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(L.w * 0.55, rimR * 0.9, 0.026), silver);
        arm.position.y = rimR * 0.45;
        const armPivot = new THREE.Group();
        armPivot.rotation.x = ang;
        armPivot.add(arm);
        roll.add(armPivot);
      }

      // centre hub
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(rimR * 0.22, rimR * 0.22, L.w * 1.02, 12).rotateZ(Math.PI / 2), chrome);
      roll.add(hub);
      // hub cap
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(rimR * 0.12, rimR * 0.12, L.w * 1.06, 10).rotateZ(Math.PI / 2), redCal);
      roll.add(cap);
      // lug nuts (5 around the hub)
      for (let k = 0; k < 5; k++) {
        const a = k * Math.PI * 2 / 5 + 0.4;
        const nut = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, L.w * 1.05, 6).rotateZ(Math.PI / 2), silver);
        nut.position.set(0, Math.cos(a) * rimR * 0.32, Math.sin(a) * rimR * 0.32);
        roll.add(nut);
      }

      // brake disc + caliper (do not roll with the wheel)
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(L.R * 0.52, L.R * 0.52, 0.022, 18).rotateZ(Math.PI / 2), spokeMat);
      disc.position.x = -sx * L.w * 0.18; cg.add(disc);
      // drilled holes in the disc as tiny cylinders
      for (let k = 0; k < 10; k++) {
        const a = k * Math.PI * 2 / 10;
        const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.026, 6).rotateZ(Math.PI / 2), blackTrim);
        hole.position.set(-sx * L.w * 0.18, Math.cos(a) * L.R * 0.36, Math.sin(a) * L.R * 0.36);
        cg.add(hole);
      }
      // caliper
      const cal = new THREE.Mesh(new THREE.BoxGeometry(L.w * 0.32, L.R * 0.42, L.R * 0.30), redCal);
      cal.position.set(-sx * L.w * 0.18, L.R * 0.42, L.R * 0.10);
      cg.add(cal);
      // caliper bolt detail
      for (const d of [-0.06, 0.06]) {
        const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, L.w * 0.34, 6).rotateZ(Math.PI / 2), blackTrim);
        bolt.position.set(-sx * L.w * 0.18, L.R * 0.42 + d, L.R * 0.10);
        cg.add(bolt);
      }

      // fender flare (proper half torus over the wheel)
      const flareGeo = new THREE.TorusGeometry(L.R + 0.06, 0.055, 6, 16, Math.PI).rotateY(Math.PI / 2);
      const flare = put(flareGeo, solid, sx * (L.x + 0.02), L.R, L.z);
      // flare inner liner (dark plastic inner arch)
      const linerGeo = new THREE.CylinderGeometry(L.R + 0.03, L.R + 0.03, L.w + 0.2, 16, 1, true, 0, Math.PI).rotateZ(Math.PI / 2);
      const liner = put(linerGeo, blackTrim, sx * (L.x + 0.02), L.R, L.z);

      wheels.push({ pivot: wp, camberG: cg, roll, flare, sx, axle, front, R: L.R, baseX: L.x });
    }
  }

  return {
    def, root, pivot, body, paint, solid, wheels, wing, plane, splitter, lay, nz,
    nose: nr, tune: null, toe: { front: 0, rear: 0 }, rearX: lay.rear.x,
    driverRig: driver.rig, swSpin: driver.swSpin, bb,
  };
}

/* helper used by buildModel to place a seat */
function buildSeat(def, sx, cm, zMid, floorY, parent) {
  const g = new THREE.Group();
  // base
  mkBox(0.34, 0.06, 0.34, seatMat, 0, 0.03, 0, g);
  // backrest (angled)
  const back = mkBox(0.34, 0.34, 0.08, seatMat, 0, 0.24, -0.15, g);
  back.rotation.x = -0.18;
  // headrest
  const hr = mkBox(0.18, 0.10, 0.06, seatMat, 0, 0.46, -0.22, g);
  hr.rotation.x = -0.18;
  // side bolsters on the backrest (leather wrap look)
  for (const s2 of [1, -1]) {
    const bl = mkBox(0.04, 0.34, 0.09, seatTrim, s2 * 0.16, 0.24, -0.14, g);
    bl.rotation.x = -0.18;
  }
  // shoulder harness cut-outs (little oval hole indicators — we just paint them dark)
  for (const s2 of [1, -1]) {
    mkBox(0.05, 0.03, 0.09, M(0x050609), s2 * 0.08, 0.38, -0.17, g);
  }
  // harness straps over the shoulders (thin red belts)
  for (const s2 of [1, -1]) {
    const hstrap = mkBox(0.03, 0.30, 0.008, belt, s2 * 0.09, 0.24, -0.10, g);
    hstrap.rotation.x = -0.18;
  }
  // lap belt
  mkBox(0.30, 0.03, 0.36, belt, 0, 0.055, -0.02, g);
  // seat tracks (two rails on the base)
  for (const s2 of [1, -1]) mkBox(0.02, 0.02, 0.36, blackTrim, s2 * 0.10, -0.015, 0, g);
  // mount the seat on the cabin floor
  g.position.set(sx * 0.32, floorY + 0.02, zMid + 0.05);
  parent.add(g);
  return g;
}

function applyModel(t, m = model) {
  const D = Math.PI / 180; m.tune = t;
  m.toe = { front: t.toeF * D, rear: t.toeR * D };
  for (const w of m.wheels) {
    w.camberG.rotation.z = -w.sx * (w.front ? t.camberF : t.camberR) * D;
    w.pivot.position.x = w.sx * (w.baseX + t.offset / 1000);
    w.flare.position.x = w.sx * (w.baseX + 0.02 + t.offset / 1000);
  }
  m.rearX = m.lay.rear.x + t.offset / 1000;
  m.wing.visible = t.wing > 0; m.plane.rotation.x = t.wing * 2.5 * D;
  const depth = 0.03 + 0.035 * t.splitter;
  m.splitter.visible = t.splitter > 0;
  m.splitter.scale.z = depth;
  m.splitter.position.z = m.nz + depth / 2 - 0.04;
}

function disposeGroup(g) { g.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }

function setModel(def, hex, t) {
  if (model) {
    carGroup.remove(model.root);
    model.root.traverse(o => o.geometry && o.geometry.dispose());
    model.paint.map.dispose(); model.paint.dispose(); model.solid.dispose();
    if (model.standFig) { carGroup.remove(model.standFig); disposeGroup(model.standFig); }
  }
  model = buildModel(def, hex);
  carGroup.add(model.root);
  // standing crew figure for the garage editor
  model.standFig = buildStandingCrew();
  model.standFig.position.set(-2.6, 0, -0.4);
  model.standFig.rotation.y = Math.PI / 2 + 0.2;
  model.standFig.visible = false;
  carGroup.add(model.standFig);
  applyModel(t);
}

/* ================= SAVE / STATE ================= */
const SAVE_KEY = 'driftrun-save-v2';
const save = { cash: 3000, owned: ['hachi'], car: 'hachi', tier: 0, paint: {}, tune: {} };
try { Object.assign(save, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')); } catch {}
if (!save.owned.includes('hachi')) save.owned.push('hachi');
if (!CAR_DEFS[save.car] || !save.owned.includes(save.car)) save.car = 'hachi';
if (!TIERS[save.tier]) save.tier = 0;
save.set = { ctrl: 'tilt', sens: 1, flip: false, vib: true, mute: false, ...(save.set || {}) };
save.tips = save.tips || 0;
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch {} };
const paintOf = id => save.paint[id] ?? CAR_DEFS[id].paint;
const tuneOf = id => ({ ...defaultTune(CAR_DEFS[id]), ...(save.tune[id] || {}) });
const PAINTS = [0xf2f2f2, 0xff4d6d, 0xffb703, 0x2f7dff, 0x6df0c2, 0x9b5de5, 0xff7b00, 0xd62828, 0x00bbf9, 0x23252b];

let carDef = CAR_DEFS[save.car], tune = tuneOf(save.car), tier = save.tier, stats = derive(TIERS[tier], carDef, tune);
const S = { x: 0, z: -95, h: Math.PI / 2, vx: 0, vz: 0, steer: 0, loose: 0, rpm: 0.25, sp: 0, slip: 0, thr: 0, vf: 0, hb: false };
const SUS = { pitch: 0, pv: 0, roll: 0, rv: 0, heave: 0, hv: 0 };
let camH = S.h, shake = 0, crashCd = 0, slowT = 0, ran = false;
let pending = 0, total = 0, driftT = 0, gap = 0, mult = 1;
let boost = 1, wet = false, camMode = 0, photo = false, orbit = 0, zonesCleared = 0;
let menu = 'home', orbitPitch = 0.22, orbitDist = 7.6, viewOff = 0, drag = null;
let mode = 'free', timeLeft = 90, runScore = 0, ghostRec = [], ghostBest = [], ghostScore = 0, ghostT = 0, ghostRecT = 0;
let got = {}; try { got = JSON.parse(localStorage.getItem('driftrun-ach') || '{}'); } catch {}
const ACHS = { long: 'Drift 10s in one combo', k5: 'Bank 5,000 at once', zone3: 'Clear 3 zones', wall: 'First wall ride', combo: 'Reach x6' };
let best = 0; try { best = +localStorage.getItem('driftrun-best') || 0; } catch {}

function hudCar() {
  document.querySelectorAll('#classes .cls').forEach((b, i) => {
    b.classList.toggle('on', i === tier); b.setAttribute('aria-pressed', String(i === tier));
    b.title = `Speed class ${i + 1}: ${TIERS[i].name}`;
    b.querySelector('small').textContent = Math.round(derive(TIERS[i], carDef, tune).top * 3.6);
  });
}
function recalc() { stats = derive(TIERS[tier], carDef, tune); hudCar(); }
function equip(id) { save.car = id; carDef = CAR_DEFS[id]; tune = tuneOf(id); setModel(carDef, paintOf(id), tune); recalc(); persist(); }
function showEquipped() { if (!model || model.def !== carDef) setModel(carDef, paintOf(carDef.id), tune); }
function setTier(i) {
  tier = i; save.tier = i; recalc(); persist();
  toast(`SPEED CLASS ${i + 1}  ${Math.round(stats.top * 3.6)} km/h`);
}
function reset() {
  Object.assign(S, { x: 0, z: -95, h: Math.PI / 2, vx: 0, vz: 0, steer: 0, loose: 0 });
  camH = S.h; pending = 0; driftT = 0; gap = 0; boost = 1; ghostT = 0; ghostRecT = 0;
  if (mode === 'timed') { timeLeft = 90; runScore = 0; ghostRec = []; }
}
function syncHud() {
  $('hud').style.display = (photo || menu) ? 'none' : '';
  const c = document.body.classList; c.toggle('inmenu', !!menu); c.toggle('playing', !menu); c.toggle('photo', !!photo && !menu);
}

/* ================= SUSPENSION ================= */
function suspension(dt) {
  const b = stats.bounce; let thr = 0, brk = 0, rollT = 0;
  if (menu) { /* settle */ }
  else if (photo) {
    const inp = inSteer(); thr = inGas(); brk = inBrake();
    rollT = inp * 0.09 * b.rollAmp; S.steer += (inp - S.steer) * Math.min(1, dt * 8);
  } else { thr = S.thr; brk = inBrake(); rollT = clamp((S.yaw || 0) * S.sp * 0.004, -0.12, 0.12) * b.rollAmp; }
  const pitchT = ((brk ? 0.04 : 0) - (thr ? 0.03 : 0)) * b.pitchAmp;
  const n = Math.max(1, Math.ceil(dt / 0.008)), h = dt / n, w = b.w, z = b.z, wr = w * 1.15, wh = w * 1.1;
  for (let i = 0; i < n; i++) {
    SUS.pv += (w * w * (pitchT - SUS.pitch) - 2 * z * w * SUS.pv) * h; SUS.pitch += SUS.pv * h;
    SUS.rv += (wr * wr * (rollT - SUS.roll) - 2 * z * wr * SUS.rv) * h; SUS.roll += SUS.rv * h;
    SUS.hv += (wh * wh * (0 - SUS.heave) - 2 * z * wh * SUS.hv) * h; SUS.heave += SUS.hv * h;
  }
  SUS.pitch = clamp(SUS.pitch, -0.25, 0.25); SUS.roll = clamp(SUS.roll, -0.3, 0.3); SUS.heave = clamp(SUS.heave, -0.15, 0.15);
}

/* ================= MENU ================= */
const menuEl = $('menu'), mLeft = $('mLeft'), mRight = $('mRight'), mFoot = $('mFoot');

const h = (tag, props = {}, ...kids) => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') el.className = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c != null && c !== false) el.append(c.nodeType ? c : document.createTextNode(c));
  return el;
};
const hex6 = c => '#' + c.toString(16).padStart(6, '0');
function keepScroll(fn) { const old = mLeft.querySelector('.mscroll'); const st = old ? old.scrollTop : mLeft.scrollTop; fn(); mLeft.scrollTop = st; }

const gbtn = (icon, label, sub, fn, cls = '') => h('button', {
  class: 'gbtn ' + cls, type: 'button', onclick: fn
},
  h('span', { class: 'ic' }, icon),
  h('span', { class: 'tx' }, h('span', {}, label), sub ? h('small', {}, sub) : null));
const sbtn = (label, fn, cls = '') => h('button', { class: 'gbtn sm ' + cls, type: 'button', onclick: fn }, h('span', { class: 'tx' }, h('span', {}, label)));

const mHead = (title, sub) => h('header', {},
  h('h1', { class: 'm-title' }, title),
  sub ? h('p', { class: 'm-sub' }, sub) : null);
const mSec = (title, ...kids) => h('section', { class: 'm-sec' }, title ? h('h3', {}, title) : null, ...kids);
const footSet = (...kids) => mFoot.replaceChildren(...kids.filter(Boolean));
const clearFoot = () => mFoot.replaceChildren();
const mStatus = (text) => h('div', { class: 'm-status', role: 'status' }, text);

function sfx(kind) {
  if (!audio || save.set.mute) return;
  const c = audio.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
  const f = { click: 520, pop: 700, back: 380, pickup: 980, hit: 150, score: 780, grow: 1150 }[kind] || 520;
  o.type = kind === 'hit' ? 'square' : 'triangle'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.6, t + 0.08);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
  o.connect(g); g.connect(audio.master); o.start(t); o.stop(t + 0.17);
}
addEventListener('click', e => { const b = e.target.closest && e.target.closest('button'); if (b) sfx(b.classList.contains('cls') ? 'pop' : b.textContent.trim().toLowerCase().startsWith('back') ? 'back' : 'click'); });

function updateMenuTopBar() {
  $('mCash').textContent = '$' + save.cash.toLocaleString();
  $('mBest').textContent = best.toLocaleString();
}

function openMenu(screen) {
  menu = screen; for (const k in keys) keys[k] = false; releaseTouch();
  menuEl.classList.remove('off'); syncHud(); updateMenuTopBar();
  if (screen === 'shop') { shopSel = save.car; shopMsg = ''; setModel(CAR_DEFS[shopSel], paintOf(shopSel), tuneOf(shopSel)); }
  else showEquipped();
  renderMenu();
  if (!touchUI) requestAnimationFrame(() => { const f = mLeft.querySelector('.gbtn.primary') || mLeft.querySelector('button'); if (f) f.focus({ preventScroll: true }); });
}
function closeMenu() {
  showEquipped(); menu = null; if (!mp) ran = true;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  menuEl.classList.add('off'); syncHud(); initAudio();
  if (touchUI) {
    try { const l = screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape'); if (l && l.catch) l.catch(() => {}); } catch {}
    if (save.set.ctrl === 'tilt') { enableTilt(); recenter(); }
    if (save.tips < 4 && !photo) { save.tips++; persist(); showTip(); }
  }
}
function toggleMenu() {
  if (!menu) openMenu(mp ? 'pause' : 'home');
  else if (menu === 'pause') closeMenu();
  else if (menu === 'mpend') return;
  else if (menu === 'maps') openMenu('home');
  else if (menu === 'modes') openMenu('maps');
  else if (menu === 'mpsetup') openMenu('modes');
  else if (menu === 'home') closeMenu();
  else openMenu('home');
}
function renderMenu() {
  updateMenuTopBar();
  mLeft.className = 'm-main';
  mRight.replaceChildren();
  clearFoot();
  if (menu === 'home') renderHome();
  else if (menu === 'shop') renderShop();
  else if (menu === 'edit') renderEdit();
  else if (menu === 'settings') renderSettings();
  else if (menu === 'maps') renderMaps();
  else if (menu === 'modes') renderModes();
  else if (menu === 'mpsetup') renderMpSetup();
  else if (menu === 'pause') renderPause();
  else if (menu === 'mpend') renderMpEnd();
}

function renderHome() {
  wheelEl = null;
  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead(h('span', {}, 'DRIFT '), h('span', {}, 'RUN')),
      h('p', { class: 'm-sub' }, 'Hold gas, turn in, tap the handbrake. Chain slides to build your multiplier.'),
      h('div', { class: 'm-actions' },
        gbtn('▶', 'Play', 'Sunset Arena - Solo drift', () => openMenu('maps'), 'primary'),
        gbtn('◆', 'Shop', 'Buy new cars with banked cash', () => openMenu('shop')),
        gbtn('■', 'Garage', 'Tune, paint, and set stance', () => openMenu('edit')),
        gbtn('●', 'Multiplayer', 'Split-screen, 2 to 4 players', () => openMenu('mpsetup'), 'blue'),
        gbtn('▲', 'Settings', 'Input, camera, audio', () => openMenu('settings'), 'blue')
      )
    )
  );
  footSet(
    mStatus(`${carDef.name} - class ${tier + 1} (${TIERS[tier].name}) - ${Math.round(stats.top * 3.6)} km/h`),
    ran ? sbtn('Resume', closeMenu, 'blue') : null
  );
}

const tog = (label, hint, get, set) => {
  const b = h('button', { class: 'tog' + (get() ? ' on' : ''), type: 'button', role: 'switch', 'aria-checked': String(!!get()), 'aria-label': label, onclick: () => {
    set(!get()); b.classList.toggle('on', !!get()); b.setAttribute('aria-checked', String(!!get()));
  } }, h('i'));
  return h('div', { class: 'trow' }, h('div', { class: 'tl' }, h('b', {}, label), hint ? h('div', { class: 'hint' }, hint) : null), b);
};
const segRow = (label, hint, opts, get, set) => {
  const wrap = h('div', { class: 'seg' });
  opts.forEach((o, i) => wrap.append(h('button', { class: 'segb' + (get() === i ? ' sel' : ''), type: 'button', onclick: () => { set(i); wrap.querySelectorAll('.segb').forEach((x, j) => x.classList.toggle('sel', j === i)); } }, o)));
  return h('div', { class: 'ctl' }, h('div', { class: 'clab' }, h('span', {}, label)), wrap, hint ? h('div', { class: 'hint' }, hint) : null);
};
function setWet(v) { wet = v; scene.fog.color.setHex(wet ? 0x8a93a8 : HORIZON); sun.intensity = wet ? 1.1 : 2.4; }
function setTimed(v) { mode = v ? 'timed' : 'free'; reset(); toast(v ? 'TIMED  90s' : 'FREESTYLE'); }
function setMute(v) { save.set.mute = v; persist(); if (audio) audio.master.gain.value = v ? 0 : 1; }
function setPhoto(v) {
  photo = v; syncHud();
  if (v && touchUI) showTip('Tap left / right to bounce the suspension');
}

function renderSettings() {
  const secs = [];
  if (touchUI) {
    wheelEl = h('div', { class: 'wheel', 'aria-hidden': 'true' });
    const status = h('div', { class: 'hint' }, '');
    const upd = () => { status.textContent = save.set.ctrl !== 'tilt' ? 'Steering with on-screen buttons.' : (tiltOn && tiltSeen) ? 'Tilt sensor working - turn your phone like a wheel.' : 'Tap "Tilt phone" to switch the sensor on.'; };
    upd();
    secs.push(mSec('Phone steering',
      segRow('Steering', 'Tilt: left half of the screen brakes, right half drives.', ['Tilt phone', 'Buttons'], () => (save.set.ctrl === 'tilt' ? 0 : 1), i => {
        save.set.ctrl = i === 0 ? 'tilt' : 'btn'; persist(); applyCtrl();
        if (i === 0) enableTilt().then(() => { recenter(); upd(); }); else upd();
      }),
      segRow('Tilt sensitivity', 'Soft = turn further for full lock.', ['Soft', 'Normal', 'Sharp'], () => save.set.sens, i => { save.set.sens = i; persist(); }),
      tog('Flip tilt direction', 'Turn this on if the car steers the wrong way.', () => save.set.flip, v => { save.set.flip = v; persist(); }),
      h('div', { class: 'wheelrow', style: 'display:flex;align-items:center;gap:16px;margin-top:12px' },
        wheelEl,
        h('div', { style: 'flex:1' },
          h('div', { class: 'row', style: 'display:flex;gap:8px' }, sbtn('Recenter', () => { recenter(); upd(); }, 'blue')),
          status))
    ));
  } else {
    secs.push(mSec('Keyboard',
      h('div', { class: 'ctl' },
        h('div', { class: 'hint', style: 'line-height:2' },
          'W / S  gas & brake   -   A / D  steer', h('br'),
          'Space  handbrake   -   Shift  boost', h('br'),
          '1 / 2 / 3  speed class   -   Esc  menu')
      )
    ));
  }
  const game = [
    segRow('Camera', null, ['Chase', 'Hood', 'Far'], () => camMode, i => { camMode = i; }),
    tog('Rain', 'Wet roads: less grip.', () => wet, setWet),
    tog('Timed mode', '90 seconds, race your ghost.', () => mode === 'timed', setTimed),
    tog('Photo mode', 'Pause and orbit the car. ' + (touchUI ? 'Tap left / right' : 'Press W / S') + ' to bounce the suspension.', () => photo, v => { setPhoto(v); if (v) closeMenu(); }),
    tog('Sound', null, () => !save.set.mute, v => setMute(!v)),
  ];
  if (touchUI) game.push(tog('Vibration', 'Buzz on crashes.', () => save.set.vib, v => { save.set.vib = v; persist(); if (v) navigator.vibrate?.(30); }));
  secs.push(mSec('Gameplay', ...game));

  const acts = [sbtn('Reset car', () => { reset(); closeMenu(); }, 'blue')];
  if (document.fullscreenEnabled) acts.push(sbtn('Fullscreen', () => { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {}); }, 'blue'));
  secs.push(mSec('Actions', h('div', { class: 'chips' }, ...acts)));

  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead('SETTINGS', 'Dial in the feel. Changes save automatically.'),
      ...secs
    )
  );
  footSet(mStatus(`${touchUI ? 'Touch input detected' : 'Keyboard + mouse'}`), sbtn('Back', () => openMenu('home')));
}

const MAPS = [
  { name: 'Sunset Arena', desc: 'Asphalt bowl, tower island, tyre stacks.', open: true },
  { name: 'Neon Docks', desc: 'Harbour lanes under the cranes.', open: false },
  { name: 'Frost Peak', desc: 'Icy hairpins up the mountain.', open: false },
];
function renderMaps() {
  const cards = MAPS.map((mapDef, i) => {
    const locked = !mapDef.open;
    return h('button', {
      class: 'map-card' + (locked ? ' locked' : ''), type: 'button',
      'aria-disabled': locked ? 'true' : null,
      onclick: e => {
        if (locked) { const el = e.currentTarget; el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); sfx('back'); }
        else openMenu('modes');
      }
    },
      h('span', { class: 'm-thumb t' + (i + 1) }, locked ? 'LOCKED' : 'PLAY'),
      h('span', { class: 'm-info' }, h('b', {}, mapDef.name), h('span', {}, mapDef.desc)),
      h('span', { class: 'm-go' }, locked ? 'COMING SOON' : 'SELECT')
    );
  });
  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead('PICK A MAP'),
      h('p', { class: 'm-sub' }, 'Each map has its own flow, obstacles, and shortcuts.'),
      h('div', { class: 'm-list' }, ...cards)
    )
  );
  footSet(mStatus('More maps coming in future updates.'), sbtn('Back', () => openMenu('home')));
}
function renderModes() {
  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead(h('span', {}, 'SUNSET '), h('span', {}, 'ARENA')),
      h('p', { class: 'm-sub' }, 'How do you want to drive?'),
      h('div', { class: 'm-actions' },
        gbtn('▶', 'Solo drift', 'Score pads, combos, ghost races', () => closeMenu(), 'primary'),
        gbtn('●', 'Multiplayer', 'Split-screen, 2 to 4 players', () => openMenu('mpsetup'), 'blue')
      )
    )
  );
  footSet(mStatus(`Class ${tier + 1} - ${TIERS[tier].name} - ${Math.round(stats.top * 3.6)} km/h`), sbtn('Back', () => openMenu('maps')));
}

let shopSel = null, shopMsg = '';
function renderShop() {
  const sel = CAR_DEFS[shopSel], owned = save.owned.includes(sel.id);
  const cards = CAR_ORDER.map(id => {
    const d = CAR_DEFS[id], own = save.owned.includes(id);
    const equipped = id === save.car;
    const status = equipped ? 'Equipped' : own ? 'Owned' : '$' + d.price.toLocaleString();
    return h('button', {
      class: 'card' + (id === shopSel ? ' sel' : ''), type: 'button',
      onclick: () => { shopSel = id; shopMsg = ''; setModel(d, paintOf(id), tuneOf(id)); keepScroll(renderShop); }
    },
      h('span', { class: 'cname' }, d.name),
      h('span', { class: 'ctag' }, status),
      h('span', { class: 'cdesc' }, d.tag)
    );
  });
  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead('SHOP'),
      h('p', { class: 'm-sub' }, 'Every car is available. Earn cash by banking drift points.'),
      h('div', { class: 'm-list' }, ...cards)
    )
  );
  renderStats(sel, tuneOf(sel.id));
  updateMenuTopBar();

  const act = owned
    ? (sel.id === save.car ? sbtn('Equipped', () => {}, 'dis') : sbtn('Equip', () => { equip(sel.id); shopMsg = ''; keepScroll(renderShop); }, 'primary'))
    : sbtn(`Buy - $${sel.price.toLocaleString()}`, () => buy(sel.id), 'primary');
  const sell = owned && sel.price > 0 ? sbtn(`Sell - $${Math.floor(sel.price * 0.5).toLocaleString()}`, () => sellCar(sel.id), 'red') : null;
  footSet(
    mStatus(shopMsg || (owned ? (sel.id === save.car ? 'Currently equipped.' : 'Owned - equip or sell.') : `Price $${sel.price.toLocaleString()}`)),
    sell,
    act,
    sbtn('Back', () => openMenu('home'))
  );
}
function buy(id) {
  const d = CAR_DEFS[id];
  if (save.cash < d.price) shopMsg = `Need $${(d.price - save.cash).toLocaleString()} more.`;
  else { save.cash -= d.price; save.owned.push(id); equip(id); shopMsg = d.name + ' is yours!'; }
  keepScroll(renderShop);
  updateMenuTopBar();
}
function sellCar(id) {
  const d = CAR_DEFS[id]; if (!save.owned.includes(id) || d.price <= 0) return;
  const price = Math.floor(d.price * 0.5);
  save.cash += price; save.owned = save.owned.filter(x => x !== id); delete save.tune[id];
  if (save.car === id) equip('hachi');
  shopSel = 'hachi'; setModel(CAR_DEFS.hachi, paintOf('hachi'), tuneOf('hachi'));
  shopMsg = `${d.name} sold for $${price.toLocaleString()}.`;
  persist(); keepScroll(renderShop); updateMenuTopBar();
}

function renderStats(def, t) {
  const s = derive(TIERS[tier], def, t), st = derive(TIERS[tier], def, defaultTune(def));
  const rows = Object.entries(s.ratings).map(([k, v]) => {
    const d = Math.round((v - st.ratings[k]) * 100);
    return h('div', { class: 'stat' },
      h('div', { class: 'slab' },
        h('span', {}, k),
        h('span', { class: 'delta ' + (d > 0 ? 'up' : d < 0 ? 'dn' : '') }, d === 0 ? '' : (d > 0 ? '+' : '−') + Math.abs(d))),
      h('div', { class: 'bar' }, h('i', { style: `width:${Math.round(v * 100)}%` })));
  });
  mRight.replaceChildren(
    h('h3', {}, def.name),
    h('div', { class: 'dim' }, `Class ${tier + 1} - ${TIERS[tier].name}`),
    ...rows,
    h('div', { class: 'bal' }, 'Balance: ', h('b', {}, s.balance)),
    h('div', { class: 'dim', style: 'margin-top:6px' }, `${Math.round(s.top * 3.6)} km/h top speed`)
  );
}

const fmt = (it, v) => (v > 0 && it.min < 0 ? '+' : '') + v.toFixed(it.step < 0.1 ? 2 : it.step < 1 ? 1 : 0) + it.unit;
function setTune(key, v) {
  tune[key] = v; save.tune[carDef.id] = { ...tune }; persist();
  applyModel(tune); recalc(); SUS.hv -= 0.12; renderStats(carDef, tune);
}
function control(it) {
  if (it.type === 'choice') {
    const wrap = h('div', { class: 'seg' });
    COMPOUNDS.forEach((c, i) => wrap.append(h('button', { class: 'segb' + (tune.compound === i ? ' sel' : ''), type: 'button', onclick: () => { setTune('compound', i); wrap.querySelectorAll('.segb').forEach((b, j) => b.classList.toggle('sel', j === i)); } }, c.name)));
    return h('div', { class: 'ctl' }, h('div', { class: 'clab' }, h('span', {}, it.label)), wrap, h('div', { class: 'hint' }, it.hint));
  }
  const val = h('b', {}, fmt(it, tune[it.key]));
  const inp = h('input', { type: 'range', min: it.min, max: it.max, step: it.step, value: tune[it.key], 'aria-label': it.label, oninput: () => { const v = +inp.value; val.textContent = fmt(it, v); setTune(it.key, v); } });
  return h('div', { class: 'ctl' }, h('div', { class: 'clab' }, h('span', {}, it.label), val), inp, h('div', { class: 'hint' }, it.hint));
}
function renderEdit() {
  const swatches = h('div', { class: 'swatches' });
  PAINTS.forEach(c => {
    const b = h('button', { class: 'sw' + (paintOf(carDef.id) === c ? ' sel' : ''), type: 'button', 'aria-label': 'Paint ' + hex6(c), style: 'background:' + hex6(c), onclick: () => {
      save.paint[carDef.id] = c; repaint(model, c); persist(); swatches.querySelectorAll('.sw').forEach(x => x.classList.toggle('sel', x === b));
    } });
    swatches.append(b);
  });
  const presets = h('div', { class: 'chips' }, ...Object.keys(PRESETS).map(name => h('button', { class: 'chip', type: 'button', onclick: () => {
    tune = { ...defaultTune(carDef), ...PRESETS[name]() }; save.tune[carDef.id] = { ...tune }; persist(); applyModel(tune); recalc(); SUS.hv -= 0.2; keepScroll(renderEdit);
  } }, name)));
  const carChips = h('div', { class: 'chips' },
    ...save.owned.map(id => h('button', { class: 'chip' + (id === save.car ? ' sel' : ''), type: 'button', onclick: () => { equip(id); renderEdit(); } }, CAR_DEFS[id].name)));

  const secs = [
    mSec('Car', carChips),
    mSec('Paint', swatches),
    mSec('Quick presets', presets),
    ...TUNE_GROUPS.map(g => mSec(g.title, ...g.items.map(control))),
  ];

  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead('GARAGE'),
      h('p', { class: 'm-sub' }, 'Tune the setup and paint the livery. Everything is measured against the stock tune, so a clean car is a fair baseline.'),
      ...secs
    )
  );
  renderStats(carDef, tune);
  footSet(
    mStatus(`${carDef.name} - ${save.owned.length} car${save.owned.length === 1 ? '' : 's'} owned`),
    sbtn('Stock', () => { tune = defaultTune(carDef); save.tune[carDef.id] = { ...tune }; persist(); applyModel(tune); recalc(); keepScroll(renderEdit); }, 'blue'),
    sbtn('Back', () => openMenu('home'))
  );
}

const mpCfg = { mode: 'duel', n: 2, first: 3, cls: 1, cars: [save.car, 'corsa', 'muscle', 'rallye'], ...(save.mp || {}) };
mpCfg.cars = mpCfg.cars.map(id => (CAR_DEFS[id] ? id : 'hachi'));
const saveMp = () => { save.mp = { ...mpCfg }; persist(); };
const padList = () => (navigator.getGamepads ? [...navigator.getGamepads()].filter(Boolean) : []);

function renderMpSetup() {
  const cfg = mpCfg, again = () => keepScroll(renderMpSetup);
  const modes = [
    ['duel', 'Side-Hit Duel', 'Ram the side of a rival car to score. Head-ons and nudges do not count. First to the target wins.'],
    ['snake', 'Orb Snake', 'Grab orbs to grow a tail of car copies. Hit someone else tail and you are out. Last car rolling wins the round.']
  ].map(([id, name, desc]) => h('button', {
    class: 'card' + (cfg.mode === id ? ' sel' : ''), type: 'button',
    onclick: () => { cfg.mode = id; cfg.first = id === 'duel' ? 3 : 2; saveMp(); again(); }
  },
    h('span', { class: 'cname' }, name),
    h('span', { class: 'ctag' }, cfg.mode === id ? 'Selected' : 'Choose'),
    h('span', { class: 'cdesc' }, desc)));

  const carBtn = (i, d) => h('button', {
    class: 'gbtn sm', type: 'button',
    style: 'padding:6px 10px;min-width:36px;justify-content:center',
    'aria-label': `${PNAMES[i]} ${d < 0 ? 'previous' : 'next'} car`,
    onclick: () => {
      const k = CAR_ORDER.indexOf(cfg.cars[i]);
      cfg.cars[i] = CAR_ORDER[(k + d + CAR_ORDER.length) % CAR_ORDER.length];
      saveMp(); again();
    }
  }, h('span', { class: 'tx' }, h('span', {}, d < 0 ? '<' : '>')));

  const pads = padList().length;
  const players = Array.from({ length: cfg.n }, (_, i) => h('div', { class: 'prow' },
    h('i', { class: 'pdot', style: 'background:' + hex6(PCOLORS[i]) }),
    h('b', {}, PNAMES[i]),
    carBtn(i, -1),
    h('span', { class: 'pcar' }, CAR_DEFS[cfg.cars[i]].name),
    carBtn(i, 1),
    h('span', { class: 'pkeys' }, KEYMAPS[i].name + (pads > i ? '  -  gamepad connected' : ''))
  ));

  const secs = [
    mSec('Game mode', ...modes),
    mSec('Match',
      segRow('Players', 'Split-screen on one device.', ['2', '3', '4'], () => cfg.n - 2, i => { cfg.n = i + 2; saveMp(); again(); }),
      segRow('First to', 'Rounds needed to win.', ['1', '2', '3'], () => cfg.first - 1, i => { cfg.first = i + 1; saveMp(); }),
      segRow('Speed class', 'Same stats for everybody - it stays fair.', TIERS.map((t, i) => `${i + 1} - ${t.name}`), () => cfg.cls, i => { cfg.cls = i; saveMp(); })
    ),
    mSec('Players', ...players,
      h('div', { class: 'hint', style: 'margin-top:10px;font-size:12px;opacity:.65;line-height:1.45' },
        touchUI
          ? 'On a phone, P1 uses tilt or the on-screen zones. Connect Bluetooth gamepads for the others.'
          : 'Share the keyboard, or plug in gamepads (stick steers, triggers drive, A is handbrake).'))
  ];

  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead('MULTIPLAYER'),
      h('p', { class: 'm-sub' }, 'Split-screen for two to four players on one device. Controls for each player stay on screen during the match.'),
      ...secs
    )
  );
  footSet(
    mStatus(`${cfg.n} players - first to ${cfg.first} - class ${cfg.cls + 1}`),
    sbtn('Back', () => openMenu('modes')),
    sbtn('Start', startMP, 'primary')
  );
}

function renderPause() {
  mLeft.replaceChildren(
    h('div', { class: 'm-overlay' },
      h('div', { class: 'pause-card' },
        h('h1', { class: 'm-title' }, 'PAUSED'),
        h('p', { class: 'm-sub', style: 'text-align:left;max-width:none' }, 'Esc to resume.'),
        h('div', { class: 'm-actions' },
          gbtn('▶', 'Resume', null, closeMenu, 'primary'),
          gbtn('↻', 'Restart match', null, startMP),
          gbtn('♪', save.set.mute ? 'Sound: off' : 'Sound: on', null, () => { setMute(!save.set.mute); renderPause(); }, 'blue'),
          gbtn('✕', 'Quit to menu', null, quitMP, 'red')
        )
      )
    )
  );
}
function renderMpEnd() {
  const w = mp ? mp.m.winner : 0, sc = mp ? mp.m.scores : [];
  mLeft.replaceChildren(
    h('div', { class: 'm-overlay' },
      h('div', { class: 'pause-card' },
        h('h1', { class: 'm-title', style: 'color:' + hex6(PCOLORS[w]) }, PNAMES[w] + ' WINS'),
        h('p', { class: 'm-sub', style: 'text-align:left;max-width:none' }, sc.map((v, i) => `${PNAMES[i]}  ${v}`).join('   -   ')),
        h('div', { class: 'm-actions' },
          gbtn('↻', 'Rematch', null, startMP, 'primary'),
          gbtn('✕', 'Quit to menu', null, quitMP, 'red')
        )
      )
    )
  );
}

/* ================= INPUT / AUDIO ================= */
const keys = {};
const K = (...c) => c.some(x => keys[x]);
addEventListener('keydown', e => {
  initAudio();
  if (e.code === 'Escape') { e.preventDefault(); if (!e.repeat) toggleMenu(); return; }
  if (menu) {
    if ((e.code === 'ArrowDown' || e.code === 'ArrowUp') && document.activeElement && document.activeElement.tagName === 'BUTTON') {
      const list = [...mLeft.querySelectorAll('button')], i = list.indexOf(document.activeElement);
      if (i >= 0) { e.preventDefault(); list[(i + (e.code === 'ArrowDown' ? 1 : list.length - 1)) % list.length].focus(); }
    }
    return;
  }
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  keys[e.code] = true;
  if (mp) { if (e.code === 'KeyM') setMute(!save.set.mute); return; }
  if (e.code === 'KeyR') reset();
  if (e.code === 'KeyC') camMode = (camMode + 1) % 3;
  if (e.code === 'KeyP') setPhoto(!photo);
  if (e.code === 'KeyG') setWet(!wet);
  if (e.code === 'KeyT') setTimed(mode === 'free');
  if (e.code === 'KeyM') setMute(!save.set.mute);
  if (e.code.startsWith('Digit') && TIERS[+e.code.slice(5) - 1]) setTier(+e.code.slice(5) - 1);
  if (photo && !e.repeat) {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') photoBump('gas');
    if (e.code === 'KeyS' || e.code === 'ArrowDown') photoBump('brake');
  }
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
});
addEventListener('pointerdown', e => { initAudio(); if (menu && !e.target.closest('#mLeft, #mRight, #mTop, #mFoot')) drag = { x: e.clientX, y: e.clientY }; });
addEventListener('pointermove', e => {
  if (!drag) return;
  orbit -= (e.clientX - drag.x) * 0.008; orbitPitch = clamp(orbitPitch + (e.clientY - drag.y) * 0.006, 0.02, 1.1);
  drag = { x: e.clientX, y: e.clientY };
});
addEventListener('pointerup', () => { drag = null; });
addEventListener('wheel', e => { if (menu && !e.target.closest('#mLeft, #mRight, #mTop, #mFoot')) orbitDist = clamp(orbitDist + e.deltaY * 0.005, 4.5, 12); }, { passive: true });

const D2R_ = Math.PI / 180;

$('mCog').addEventListener('click', () => { if (menu === 'settings') openMenu('home'); else openMenu('settings'); });

const dial = (() => {
  const svg = $('dial'), NS = 'http://www.w3.org/2000/svg', C = 100, A0 = -135, SW = 270;
  const pt = (r, deg) => [C + r * Math.sin(deg * D2R_), C - r * Math.cos(deg * D2R_)];
  const mk = (tag, at, par = svg) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); par.append(e); return e; };
  const pts = Array.from({ length: 12 }, (_, i) => pt(96, i * 30 + 15).join(',')).join(' ');
  mk('polygon', { points: pts, fill: '#fff', stroke: '#0b0820', 'stroke-width': 7, 'stroke-linejoin': 'round' });
  mk('path', { d: `M${pt(91, A0 + SW * 0.7)} A91 91 0 0 1 ${pt(91, A0 + SW)} L${pt(82, A0 + SW)} A82 82 0 0 0 ${pt(82, A0 + SW * 0.7)} Z`, fill: '#e3262e' });
  for (let i = 0; i <= 9; i++) {
    const ang = A0 + SW * i / 9, p = pt(66, ang), t = mk('text', { x: p[0], y: p[1] + 6, 'text-anchor': 'middle', 'font-size': 19, 'font-family': 'Russo One, Arial Black, sans-serif', fill: i >= 7 ? '#e3262e' : '#0b0820', stroke: '#fff', 'stroke-width': 0.5 });
    t.textContent = i;
    const q = pt(88, ang), r2 = pt(78, ang); mk('line', { x1: q[0], y1: q[1], x2: r2[0], y2: r2[1], stroke: '#0b0820', 'stroke-width': 3 });
  }
  const needle = mk('g', { id: 'needle' }); mk('polygon', { points: '97,100 100,28 103,100', fill: '#e3262e', stroke: '#0b0820', 'stroke-width': 2 }, needle);
  mk('circle', { cx: C, cy: C, r: 13, fill: '#1b1b24', stroke: '#0b0820', 'stroke-width': 3 });
  return needle;
})();

/* ================= TOUCH + TILT ================= */
const touch = { gas: 0, brake: 0, hb: 0, boost: 0, left: 0, right: 0 };
let touchUI = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
let tiltOn = false, tiltSeen = false, tiltRaw = 0, tiltZero = 0, tiltAxis = 0, calibrateNext = true, wheelEl = null;
const D2R = Math.PI / 180, wrap180 = a => ((a + 540) % 360) - 180;
const TILT_MAX = [55, 40, 28];

const inGas = () => (K('ArrowUp', 'KeyW') || touch.gas) ? 1 : 0;
const inBrake = () => (K('ArrowDown', 'KeyS') || touch.brake) ? 1 : 0;
const inHB = () => (K('Space') || touch.hb) ? 1 : 0;
const inBoost = () => !!(K('ShiftLeft', 'ShiftRight') || touch.boost);
const tiltActive = () => touchUI && save.set.ctrl === 'tilt' && tiltOn && tiltSeen;
function inSteer() {
  let a = (K('ArrowLeft', 'KeyA') ? 1 : 0) - (K('ArrowRight', 'KeyD') ? 1 : 0) + (touch.left ? 1 : 0) - (touch.right ? 1 : 0);
  if (tiltActive()) a -= tiltAxis * (save.set.flip ? -1 : 1);
  return clamp(a, -1, 1);
}
function photoBump(kind) {
  const b = stats.bounce;
  if (kind === 'gas') { SUS.pv -= 1.0 * b.pitchAmp; SUS.hv += 0.45; } else { SUS.pv += 1.1 * b.pitchAmp; SUS.hv -= 0.45; }
}
function onOrient(e) {
  if (e.beta == null || e.gamma == null) return;
  const b = e.beta * D2R, g = e.gamma * D2R;
  const dx = Math.sin(g) * Math.cos(b), dy = -Math.sin(b);
  const ang = ((screen.orientation && screen.orientation.angle != null) ? screen.orientation.angle : (window.orientation || 0)) * D2R;
  const sx = dx * Math.cos(ang) - dy * Math.sin(ang), sy = dx * Math.sin(ang) + dy * Math.cos(ang);
  tiltRaw = Math.atan2(sx, -sy) / D2R;
  tiltSeen = true;
}
function updateTilt(dt) {
  if (!tiltOn || !tiltSeen) { tiltAxis *= 0.9; return; }
  if (calibrateNext) { tiltZero = tiltRaw; calibrateNext = false; }
  const a = wrap180(tiltRaw - tiltZero), max = TILT_MAX[save.set.sens] || 40, dz = 2.5;
  let v = Math.abs(a) < dz ? 0 : Math.sign(a) * (Math.abs(a) - dz) / (max - dz);
  v = clamp(v, -1, 1); v = Math.sign(v) * Math.pow(Math.abs(v), 1.15);
  tiltAxis += (v - tiltAxis) * (1 - Math.exp(-dt * 25));
}
const recenter = () => { calibrateNext = true; };
function tiltFail(msg) { save.set.ctrl = 'btn'; persist(); applyCtrl(); if (msg) toast(msg, true); }
async function enableTilt() {
  if (tiltOn) return true;
  try {
    const DOE = window.DeviceOrientationEvent;
    if (!DOE) throw new Error('none');
    if (typeof DOE.requestPermission === 'function' && (await DOE.requestPermission()) !== 'granted') throw new Error('denied');
    addEventListener('deviceorientation', onOrient); tiltOn = true;
    setTimeout(() => { if (!tiltSeen && save.set.ctrl === 'tilt') tiltFail('NO TILT SENSOR - USING BUTTONS'); }, 2000);
    return true;
  } catch { tiltFail('TILT OFF - USING BUTTONS'); return false; }
}
function applyCtrl() {
  const c = document.body.classList;
  c.toggle('touch', touchUI); c.toggle('ctrl-tilt', touchUI && save.set.ctrl === 'tilt'); c.toggle('ctrl-btn', touchUI && save.set.ctrl === 'btn');
}
function showTip(text) {
  const el = $('tip');
  el.textContent = text || (save.set.ctrl === 'tilt' ? 'Tilt to steer - Left half is BRAKE - Right half is GAS' : 'Steer - GAS - BRAKE');
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
}

const holders = [];
function hold(el, apply, onDown) {
  const ids = new Set(), set = () => apply(ids.size > 0);
  el.addEventListener('pointerdown', e => {
    e.preventDefault(); ids.add(e.pointerId);
    try { el.setPointerCapture(e.pointerId); } catch {}
    set(); if (onDown) onDown();
  });
  el.addEventListener('mousedown', e => e.preventDefault());
  holders.push({ ids, set });
}
const release = e => { for (const hd of holders) if (hd.ids.delete(e.pointerId)) hd.set(); };
addEventListener('pointerup', release); addEventListener('pointercancel', release);
function releaseTouch() { for (const hd of holders) { hd.ids.clear(); hd.set(); } for (const k in touch) touch[k] = 0; }
hold($('zoneL'), v => { touch.brake = v ? 1 : 0; }, () => { if (photo) photoBump('brake'); });
hold($('zoneR'), v => { touch.gas = v ? 1 : 0; }, () => { if (photo) photoBump('gas'); });
hold($('pBrake'), v => { touch.brake = v ? 1 : 0; });
hold($('pGas'), v => { touch.gas = v ? 1 : 0; });
hold($('tL'), v => { touch.left = v ? 1 : 0; });
hold($('tR'), v => { touch.right = v ? 1 : 0; });
hold($('bHB'), v => { touch.hb = v ? 1 : 0; });
hold($('bBoost'), v => { touch.boost = v ? 1 : 0; });
addEventListener('contextmenu', e => { if (touchUI) e.preventDefault(); });
addEventListener('pointerdown', e => { if (e.pointerType === 'touch' && !touchUI) { touchUI = true; applyCtrl(); } }, { capture: true });
const reCal = () => { calibrateNext = true; };
addEventListener('orientationchange', reCal);
if (screen.orientation && screen.orientation.addEventListener) screen.orientation.addEventListener('change', reCal);

for (const el of document.querySelectorAll('#ui button')) el.addEventListener('mousedown', e => e.preventDefault());
$('btnSettings').addEventListener('click', toggleMenu);
$('photoX').addEventListener('click', () => setPhoto(false));
document.querySelectorAll('#classes .cls').forEach(b => b.addEventListener('click', () => setTier(+b.dataset.i)));

function touchHud() {
  if (touchUI) {
    $('pGas').classList.toggle('down', !!touch.gas); $('pBrake').classList.toggle('down', !!touch.brake);
    $('bHB').classList.toggle('down', !!touch.hb); $('bBoost').classList.toggle('down', !!touch.boost);
  }
  if (wheelEl) wheelEl.style.transform = `rotate(${(save.set.flip ? -1 : 1) * tiltAxis * 90}deg)`;
}

let audio = null;
function initAudio() {
  if (audio) { audio.ctx.resume?.(); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  const ctx = new AC(), master = ctx.createGain(); master.connect(ctx.destination);
  const eng = ctx.createOscillator(); eng.type = 'sawtooth';
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
  const engG = ctx.createGain(); engG.gain.value = 0;
  eng.connect(lp).connect(engG).connect(master); eng.start();
  const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), data = nb.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const ns = ctx.createBufferSource(); ns.buffer = nb; ns.loop = true;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 2.5;
  const sg = ctx.createGain(); sg.gain.value = 0;
  ns.connect(bp).connect(sg).connect(master); ns.start();
  const pad = ctx.createGain(); pad.gain.value = 0; pad.connect(master);
  const pads = [110, 138.6, 164.8, 220].map(f => { const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f; o.connect(pad); o.start(); return o; });
  audio = { ctx, master, eng, lp, engG, bp, sg, pad, pads };
  master.gain.value = save.set.mute ? 0 : 1;
}

/* ================= EFFECTS ================= */
const MAXSKID = 2400;
const skid = new THREE.InstancedMesh(
  new THREE.PlaneGeometry(0.34, 1).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x050507, transparent: true, opacity: 0.5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  MAXSKID
);
skid.frustumCulled = false;
const dummy = new THREE.Object3D();
dummy.scale.set(0, 0, 0); dummy.updateMatrix();
for (let i = 0; i < MAXSKID; i++) skid.setMatrixAt(i, dummy.matrix);
scene.add(skid);
let skidI = 0;

const smokeTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
const smoke = [];
for (let i = 0; i < 90; i++) {
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, opacity: 0, depthWrite: false, color: 0xdddde6 }));
  spr.visible = false; scene.add(spr);
  smoke.push({ s: spr, life: 0, max: 1, vx: 0, vy: 0, vz: 0 });
}
function spawnSmoke(x, z, svx = S.vx, svz = S.vz) {
  const p = smoke.find(q => q.life <= 0); if (!p) return;
  p.life = p.max = 0.9 + Math.random() * 0.5;
  p.vx = svx * 0.15 + (Math.random() - 0.5) * 2; p.vy = 0.8 + Math.random(); p.vz = svz * 0.15 + (Math.random() - 0.5) * 2;
  p.s.position.set(x, 0.4, z); p.s.visible = true;
  p.s.material.color.setHex(pending > 0 && mult >= 5 ? 0xff5d8f : pending > 0 && mult >= 3 ? 0xffb703 : 0xdddde6);
}
let smokeAcc = 0;
const ghost = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.0, 4.3), new THREE.MeshBasicMaterial({ color: 0x66ffee, transparent: true, opacity: 0.25, depthWrite: false }));
ghost.visible = false; scene.add(ghost);

/* ================= PHYSICS ================= */
function step(dt) {
  const s = stats;
  const thr = inGas(), brk = inBrake(), hb = !!inHB();
  const fx = Math.sin(S.h), fz = Math.cos(S.h), rx = -Math.cos(S.h), rz = Math.sin(S.h);
  let vf = S.vx * fx + S.vz * fz, vl = S.vx * rx + S.vz * rz;
  const sp = Math.hypot(vf, vl), slip = Math.atan2(vl, Math.abs(vf) + 0.001);
  const inp = inSteer() * (brk && vf > 5 ? 1 - s.brakeUnder : 1);
  const assist = -0.3 * clamp(vl / 12, -1, 1) * S.loose;
  S.steer += (clamp(inp + assist, -1, 1) - S.steer) * Math.min(1, dt * (inp ? 8 : 12));
  const bst = thr && inBoost() && boost > 0.02 ? 1 : 0;
  if (bst) boost = Math.max(0, boost - dt * 0.25); else if (sp > 9 && Math.abs(slip) > 0.28) boost = Math.min(1, boost + dt * 0.12);
  if (thr) vf += s.power * (bst ? 1.9 : 1) * (1 - clamp(vf / (s.top * (bst ? 1.25 : 1)), 0, 1.2)) * dt * (vf < 0 ? 2 : 1);
  if (brk) vf = vf > 0.5 ? vf - 38 * dt : Math.max(-12, vf - 14 * dt);
  vf *= Math.exp(-((thr ? 0.09 : 0.25) + s.dragK) * dt);
  if (!thr && !brk && Math.abs(vf) < 3) vf *= Math.exp(-2.5 * dt);
  if (hb) vf *= Math.exp(-0.45 * dt);
  let want = hb ? 1 : (thr && vf > 13 && (Math.abs(S.steer) > 0.35 * s.entry || Math.abs(slip) > 0.25 * s.entry)) ? 1 : 0;
  if (brk && sp > 10 && s.brakeLoose > 0 && Math.abs(S.steer) > 0.2) want = Math.max(want, s.brakeLoose * 0.8);
  S.loose += (want - S.loose) * Math.min(1, dt * (want ? 9 : 5));
  vl *= Math.exp(-lerp(s.grip, s.drift * (hb ? 0.65 : 1), S.loose) * (1 + s.aeroK * sp * sp) * (wet ? s.wetMul : 1) * dt);
  const dir = vf >= -1 ? 1 : -1;
  const sf = Math.min(1, sp / 6) / (1 + sp / (s.top * 1.5));
  const yaw = S.steer * s.steer * sf * dir * (1 + 0.3 * S.loose) * (hb ? 1.25 : 1);
  S.vx = fx * vf + rx * vl; S.vz = fz * vf + rz * vl;
  S.h += yaw * dt; S.x += S.vx * dt; S.z += S.vz * dt;
  Object.assign(S, { sp, slip, thr, vf, hb, yaw, bst });
  collide();
}
function collide() {
  const d = Math.hypot(S.x, S.z) || 1;
  if (d > WALL - CR) hit(-S.x / d, -S.z / d, d - (WALL - CR));
  if (d < ISL + CR) hit(S.x / d, S.z / d, ISL + CR - d);
  for (const o of OBST) {
    const dx = S.x - o.x, dz = S.z - o.z, dd = Math.hypot(dx, dz) || 1;
    if (dd < o.r + CR) hit(dx / dd, dz / dd, o.r + CR - dd);
  }
}
function hit(nx, nz, pen) {
  S.x += nx * pen; S.z += nz * pen;
  const vn = S.vx * nx + S.vz * nz;
  if (vn < 0) {
    S.vx -= 1.35 * vn * nx; S.vz -= 1.35 * vn * nz;
    S.vx *= 0.92; S.vz *= 0.92;
    if (-vn > 4 && crashCd <= 0) crash(-vn);
  }
}
function crash(impact) {
  crashCd = 0.6; shake = Math.min(1, impact / 20); called = 0;
  if (touchUI && save.set.vib && navigator.vibrate) navigator.vibrate(Math.min(60, 15 + impact * 3));
  SUS.hv -= impact * 0.02; SUS.pv += (Math.random() - 0.5) * impact * 0.04;
  if (pending > 200 || impact > 10) slowT = 0.35;
  if (pending > 1) toast('CRASH  -' + Math.floor(pending), true);
  pending = 0; driftT = 0; gap = 0;
}

/* ================= SCORING / HUD ================= */
const toastEl = $('toast');
function toast(t, bad) {
  toastEl.textContent = t; toastEl.className = bad ? 'bad' : '';
  void toastEl.offsetWidth; toastEl.classList.add('show');
}
let called = 0, nearCd = 0, wallCd = 0;
function unlock(id) {
  if (got[id]) return; got[id] = 1;
  try { localStorage.setItem('driftrun-ach', JSON.stringify(got)); } catch {}
  toast('ACHIEVEMENT: ' + ACHS[id]);
}
function finishRun() {
  if (pending > 0) bank(1);
  toast('TIME UP  ' + runScore);
  if (runScore > ghostScore) { ghostScore = runScore; ghostBest = ghostRec; }
  reset();
}
function bank(bonus, label) {
  const n = Math.floor(pending * bonus);
  total += n; if (total > best) { best = total; try { localStorage.setItem('driftrun-best', best); } catch {} }
  runScore += n; const cash = Math.floor(n * 0.5); save.cash += cash; persist();
  toast((label || 'BANKED') + ' +' + n + '   $' + cash); if (n > 2000) slowT = 0.3; if (n >= 5000) unlock('k5');
  pending = 0; driftT = 0; mult = 1; gap = 0; called = 0;
}
function award(pts, label) { pending += pts * mult; gap = 0; toast(label + ' +' + Math.floor(pts * mult)); }
function scoring(dt) {
  const drifting = S.sp > 9 && Math.abs(S.slip) > 0.28;
  nearCd -= dt; wallCd -= dt;
  if (drifting) {
    gap = 0; driftT += dt; mult = 1 + Math.min(driftT, 12) * 0.5;
    let rate = S.sp * Math.abs(S.slip) * 6 * mult * (1 + 0.5 * (S.bst || 0));
    const z = ZONES[zoneI];
    if (Math.hypot(S.x - z.x, S.z - z.z) < z.r && Math.abs(S.slip) > 0.35 && S.sp > 12) {
      rate *= 3; zoneT += dt;
      if (zoneT > 1.5) { pending += 400 * mult; toast('ZONE CLEARED'); zoneI = (zoneI + 1) % ZONES.length; zoneT = 0; if (++zonesCleared >= 3) unlock('zone3'); }
    }
    pending += rate * dt; if (driftT > 10) unlock('long'); if (mult >= 6) unlock('combo');
    for (const [t, w] of [[3, 'SICK'], [6, 'INSANE'], [10, 'GODLIKE']]) {
      if (driftT > t && called < t) { called = t; toast(w + '  x' + mult.toFixed(1)); }
    }
  }
  if (S.sp > 12) {
    for (const o of OBST) {
      const g = Math.hypot(S.x - o.x, S.z - o.z) - o.r - CR;
      if (g > 0 && g < 1.2 && nearCd <= 0) { nearCd = 1.2; award(150, 'CLOSE CALL'); }
    }
    const wg = WALL - CR - Math.hypot(S.x, S.z);
    if (wg > 0 && wg < 1.5 && drifting) {
      gap = 0; pending += S.sp * 4 * mult * dt;
      if (wallCd <= 0) { wallCd = 2; toast('WALL RIDE'); unlock('wall'); }
    }
  }
  if (!drifting && pending > 0 && (gap += dt) > 4) bank(1);
  if (pending > 0 && S.sp > 5 && Math.hypot(S.x - PAD.x, S.z - PAD.z) < PAD.r) bank(1.25, 'PAD BANK');
}
const ARROWS = ['↑', '↖', '←', '↙', '↓', '↘', '→', '↗'];
const arrow = (x, z) => ARROWS[(Math.round(wrap(Math.atan2(x - S.x, z - S.z) - S.h) / (Math.PI / 4)) + 8) % 8];
function hud() {
  const hz = ZONES[zoneI];
  $('obj').textContent = (mode === 'timed' ? `${Math.max(0, Math.ceil(timeLeft))}s · ${runScore} pts · ` : '') + `Gold zone ${arrow(hz.x, hz.z)} ${Math.round(Math.hypot(hz.x - S.x, hz.z - S.z))}m · Bank pad ${arrow(PAD.x, PAD.z)} ${Math.round(Math.hypot(PAD.x - S.x, PAD.z - S.z))}m`;
  $('score').textContent = Math.floor(pending);
  $('mult').textContent = pending > 0 ? 'x' + mult.toFixed(1) + (gap > 0 ? '  bank in ' + Math.max(0, 4 - gap).toFixed(1) + 's' : '') : '';
  $('angle').textContent = Math.round(Math.abs(S.slip) * 57.3);
  $('cash').textContent = save.cash; $('total').textContent = total; $('best').textContent = best;
  $('speed').firstChild.nodeValue = Math.round(S.sp * 3.6);
  dial.style.transform = `rotate(${-135 + clamp((S.rpm - 0.2) / 0.8, 0, 1) * 270}deg)`;
  $('drift').style.setProperty('--bank', Math.min(100, pending / 40) + '%');
  const v = Math.abs(S.vf), g = [0.16, 0.31, 0.49, 0.70, 1.01].map(f => f * stats.top);
  let gi = 0; while (gi < 4 && v > g[gi]) gi++;
  $('gearN').textContent = S.vf < -0.5 ? 'R' : v < 0.5 ? 'N' : gi + 1; $('boostfill').style.height = Math.round(boost * 100) + '%';
  const lo = gi ? g[gi - 1] : 0;
  let rpm = 0.3 + 0.7 * clamp((v - lo) / (g[gi] - lo), 0, 1);
  if (S.hb || (S.thr && S.sp < 6)) rpm = Math.max(rpm, 0.7);
  S.rpm += (rpm - S.rpm) * Math.min(1, 0.15);
}

/* ================= MULTIPLAYER ================= */
let mp = null;
const mpEl = $('mp'), bannerEl = $('mpBanner');
const mpCams = Array.from({ length: 4 }, () => new THREE.PerspectiveCamera(62, 1, 0.1, 3000));
const orbMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.75, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), MAX_ORBS);
orbMesh.frustumCulled = false; orbMesh.visible = false; scene.add(orbMesh);
const mpRing = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 7, 72, 1, true), new THREE.MeshBasicMaterial({ color: 0xff4d6d, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
mpRing.position.y = 3.5; mpRing.visible = false; scene.add(mpRing);
const orbCol = new THREE.Color();
let mpSmokeAcc = 0, mpSfxCd = 0;

function makeKit(def, hex) {
  const paint = liveryMat(def, hex, loftBounds(bodyLoft(def)));
  const bg = toGeo(bodyLoft(def), loftBounds(bodyLoft(def))), cg = toGeo(cabinLoft(def), loftBounds(bodyLoft(def))), lay = wheelLayout(def), tg = {};
  for (const a of ['front', 'rear']) tg[a] = new THREE.CylinderGeometry(lay[a].R, lay[a].R, lay[a].w, 14).rotateZ(Math.PI / 2);
  const make = () => {
    const g = new THREE.Group();
    const b = new THREE.Mesh(bg, [paint, darkDS]), c = new THREE.Mesh(cg, [glass, paint]); b.castShadow = c.castShadow = true; g.add(b, c);
    for (const a of ['front', 'rear']) for (const sx of [1, -1]) { const t = new THREE.Mesh(tg[a], dark); t.position.set(sx * lay[a].x, lay[a].R, lay[a].z); g.add(t); }
    g.visible = false; scene.add(g); return g;
  };
  return { make, paint, geos: [bg, cg, tg.front, tg.rear] };
}
function stopMPModels() {
  if (!mp) return;
  for (const hd of mp.heads) { scene.remove(hd.root); hd.root.traverse(o => o.geometry && o.geometry.dispose()); hd.paint.map.dispose(); hd.paint.dispose(); hd.solid.dispose(); }
  mp.pools.flat().forEach(g => scene.remove(g));
  mp.kits.forEach(k => { k.geos.forEach(g => g.dispose()); k.paint.map.dispose(); k.paint.dispose(); });
  mpEl.querySelectorAll('.pv,.divl').forEach(e => e.remove());
  mp = null;
}
function startMP() {
  stopMPModels();
  const cfg = { ...mpCfg, cars: [...mpCfg.cars] };
  const stats = Array.from({ length: cfg.n }, (_, i) => { const d = CAR_DEFS[cfg.cars[i]]; return derive(TIERS[cfg.cls], d, defaultTune(d)); });
  const m = createMatch(cfg, stats, OBST);
  const heads = [], kits = [], pools = [];
  for (let i = 0; i < cfg.n; i++) {
    const d = CAR_DEFS[cfg.cars[i]], hd = buildModel(d, PCOLORS[i]); applyModel(defaultTune(d), hd); scene.add(hd.root); heads.push(hd);
    if (cfg.mode === 'snake') { const k = makeKit(d, PCOLORS[i]); kits.push(k); pools.push(Array.from({ length: MAX_SEG }, () => k.make())); }
  }
  mp = { m, cfg, heads, kits, pools, hud: [], started: performance.now(), key: '', board: null };
  buildMpHud();
  carGroup.visible = false; ghost.visible = false; ZONES.forEach(z => { z.mesh.visible = false; }); PAD.mesh.visible = false;
  orbMesh.visible = cfg.mode === 'snake'; mpRing.visible = true;
  pending = 0; mult = 1; releaseTouch();
  document.body.classList.add('mp'); mpEl.classList.remove('off');
  camera.clearViewOffset();
  closeMenu();
  showBanner('ROUND 1', 1.2);
}
function quitMP() {
  stopMPModels();
  document.body.classList.remove('mp'); mpEl.classList.add('off');
  carGroup.visible = true; ZONES.forEach(z => { z.mesh.visible = true; }); PAD.mesh.visible = true;
  orbMesh.visible = false; mpRing.visible = false;
  renderer.setScissorTest(false); renderer.setViewport(0, 0, innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  openMenu('home');
}
function showBanner(text, secs, color) {
  bannerEl.textContent = text; bannerEl.style.color = color || ''; bannerEl.style.animationDuration = (secs || 1) + 's';
  bannerEl.classList.remove('show'); void bannerEl.offsetWidth; bannerEl.classList.add('show');
}
function buildMpHud() {
  mp.hud = [];
  for (let i = 0; i < mp.cfg.n; i++) {
    const el = h('div', { class: 'pv', 'data-i': String(i) },
      h('div', { class: 'pchip', style: 'background:' + hex6(PCOLORS[i]) }, PNAMES[i]),
      h('div', { class: 'pips' }),
      h('div', { class: 'psub' }),
      h('div', { class: 'phint' }, KEYMAPS[i].name + (i === 0 && touchUI ? '  -  or tilt / zones' : '')),
      h('div', { class: 'pout' }, 'OUT'));
    mpEl.append(el);
    mp.hud.push({ el, pips: el.querySelector('.pips'), sub: el.querySelector('.psub'), hint: el.querySelector('.phint'), pk: '', sk: '', dead: false });
  }
  if (mp.cfg.n === 3) { mp.board = h('div', { class: 'pv board' }); mpEl.append(mp.board); }
  mp.layKey = '';
}
function mpHudUpdate() {
  const m = mp.m, W = innerWidth, H = innerHeight, n = mp.cfg.n, vps = vpLayout(n, W, H), key = `${n}|${W}|${H}`;
  if (mp.layKey !== key) {
    mp.layKey = key;
    mpEl.querySelectorAll('.divl').forEach(e => e.remove());
    vps.forEach((vp, i) => { const el = (mp.hud[i] ? mp.hud[i].el : mp.board); el.style.cssText = `left:${vp.x}px;top:${vp.y}px;width:${vp.w}px;height:${vp.h}px`; });
    if (n === 3 && mp.board) { const vp = vps[3]; mp.board.style.cssText = `left:${vp.x}px;top:${vp.y}px;width:${vp.w}px;height:${vp.h}px`; }
    const line = (css) => mpEl.append(h('div', { class: 'divl', style: css }));
    if (n === 2) { if (vps[1].x > 0) line(`left:${W / 2 - 3}px;top:0;width:6px;height:100%`); else line(`left:0;top:${H / 2 - 3}px;width:100%;height:6px`); }
    else { line(`left:${W / 2 - 3}px;top:0;width:6px;height:100%`); line(`left:0;top:${H / 2 - 3}px;width:100%;height:6px`); }
  }
  m.cars.forEach((c, i) => {
    const hd = mp.hud[i];
    const pk = '●'.repeat(m.scores[i]) + '○'.repeat(Math.max(0, m.first - m.scores[i]));
    if (hd.pk !== pk) { hd.pk = pk; hd.pips.textContent = pk; }
    const sk = m.mode === 'snake' ? `Cars ${c.segs + 1} - Orbs ${c.orbs}` : '';
    if (hd.sk !== sk) { hd.sk = sk; hd.sub.textContent = sk; }
    if (hd.dead === c.alive) { hd.dead = !c.alive; hd.el.classList.toggle('dead', hd.dead); }
  });
  if (mp.board) {
    const bk = m.scores.join(',') + '|' + m.cars.map(c => (c.alive ? 1 : 0)).join('');
    if (mp.bk !== bk) { mp.bk = bk;
      mp.board.replaceChildren(h('div', { class: 'bt' }, 'SCORE'), ...m.cars.map((c, i) => h('div', { class: 'brow' }, h('i', { class: 'pdot', style: 'background:' + hex6(PCOLORS[i]) }), `${PNAMES[i]}  ${'●'.repeat(m.scores[i])}${'○'.repeat(Math.max(0, m.first - m.scores[i]))}`, c.alive ? '' : '  OUT'))); }
  }
}

function mpInput(i) {
  const km = KEYMAPS[i], any = a => a.some(k => keys[k]);
  let gas = any(km.gas), brake = any(km.brake), hb = any(km.hb), steer = (any(km.left) ? 1 : 0) - (any(km.right) ? 1 : 0);
  if (i === 0 && touchUI) {
    gas = gas || !!touch.gas; brake = brake || !!touch.brake; hb = hb || !!touch.hb;
    steer += (touch.left ? 1 : 0) - (touch.right ? 1 : 0) - (tiltActive() ? tiltAxis * (save.set.flip ? -1 : 1) : 0);
  }
  const gp = padList()[i];
  if (gp) {
    const ax = Math.abs(gp.axes[0]) > 0.12 ? gp.axes[0] : 0, b = k => (gp.buttons[k] ? gp.buttons[k].value || (gp.buttons[k].pressed ? 1 : 0) : 0);
    steer += -ax + (b(14) ? 1 : 0) - (b(15) ? 1 : 0);
    gas = gas || b(7) > 0.1; brake = brake || b(6) > 0.1; hb = hb || b(0) > 0.5 || b(2) > 0.5;
  }
  return { gas, brake, hb, steer: clamp(steer, -1, 1) };
}

function handleMpEvents(evs) {
  let hitS = false, pick = false;
  const m = mp.m, col = i => hex6(PCOLORS[i]);
  for (const e of evs) {
    if (e.type === 'round') showBanner('ROUND ' + e.round, 1.1);
    else if (e.type === 'count') { showBanner(String(e.n), 0.9); sfx('click'); }
    else if (e.type === 'go') { showBanner('GO', 0.8, '#2fe3a0'); sfx('pop'); }
    else if (e.type === 'score') { showBanner(PNAMES[e.attacker] + ' SCORES', 2.4, col(e.attacker)); sfx('score'); if (touchUI && save.set.vib && navigator.vibrate) navigator.vibrate(60); }
    else if (e.type === 'kill') { showBanner(PNAMES[e.victim] + ' IS OUT', 1.6, col(e.victim)); hitS = true; }
    else if (e.type === 'grow') { if (e.segs > 0 && e.segs % 4 === 0) sfx('grow'); }
    else if (e.type === 'roundEnd' && m.mode === 'snake') showBanner(e.winner >= 0 ? PNAMES[e.winner] + ' WINS THE ROUND' : 'DRAW', 2.4, e.winner >= 0 ? col(e.winner) : '');
    else if (e.type === 'matchEnd') openMenu('mpend');
    else if (e.type === 'bump') { e.a.sus.hv -= e.closing * 0.02; e.b.sus.hv -= e.closing * 0.02; hitS = true; }
    else if (e.type === 'wall') { e.car.sus.hv -= e.impact * 0.015; if (e.impact > 9) hitS = true; }
    else if (e.type === 'pickup') pick = true;
  }
  if (hitS && mpSfxCd <= 0) { sfx('hit'); mpSfxCd = 0.12; }
  if (pick) sfx('pickup');
}

function mpSync(dt) {
  const m = mp.m, R = arenaR(m);
  mpRing.scale.set(R, 1, R);
  mpSfxCd -= dt;
  m.cars.forEach((c, i) => {
    const hd = mp.heads[i];
    hd.root.visible = c.alive;
    hd.root.position.set(c.x, 0, c.z); hd.root.rotation.y = c.h;
    susStep(c.sus, c.st.bounce, c.thr, c.brk, clamp(c.yaw * c.sp * 0.004, -0.12, 0.12), dt);
    hd.pivot.position.y = PIV + c.sus.heave; hd.pivot.rotation.set(c.sus.pitch, 0, c.sus.roll);
    for (const w of hd.wheels) {
      w.pivot.rotation.y = (w.front ? c.steer * 0.5 : 0) - w.sx * hd.toe[w.axle];
      w.roll.rotation.x += (c.vf / w.R) * dt;
    }
    if (hd.swSpin) hd.swSpin.rotation.z = -c.steer * 2.3;
    if (c.alive && m.phase !== 'count' && ((Math.abs(c.slip) > 0.2 && c.sp > 7) || (c.hb && c.sp > 6))) mpSkid(c, hd, dt);
    if (mp.pools[i]) {
      const poses = c.alive ? segmentPoses(c) : [];
      mp.pools[i].forEach((g, k) => { const p = poses[k]; g.visible = !!p; if (p) { g.position.set(p.x, 0, p.z); g.rotation.y = p.h; } });
    }
    const vAng = c.sp > 4 ? Math.atan2(c.vx, c.vz) : c.h;
    c.camH += wrap(c.h + 0.4 * wrap(vAng - c.h) - c.camH) * Math.min(1, dt * 3.2);
    const grow = m.mode === 'snake' ? c.segs : 0, dist = 8 + c.sp * 0.03 + Math.min(7, grow * 0.55), cam = mpCams[i];
    cam.position.set(c.x - Math.sin(c.camH) * dist, 3.4 + Math.min(4, grow * 0.3), c.z - Math.cos(c.camH) * dist);
    cam.lookAt(c.x + Math.sin(c.camH) * 5, 1.1, c.z + Math.cos(c.camH) * 5);
  });
  if (m.mode === 'snake') {
    const t = performance.now() / 1000;
    m.orbs.forEach((o, i) => {
      dummy.position.set(o.x, 0.9 + Math.sin(t * 3 + i) * 0.15, o.z);
      const s = o.on ? 1 + Math.sin(t * 5 + i) * 0.15 : 0; dummy.scale.set(s, s, s); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
      orbMesh.setMatrixAt(i, dummy.matrix);
      if (o.on) orbMesh.setColorAt(i, orbCol.setHSL(o.hue, 0.95, 0.6));
    });
    orbMesh.instanceMatrix.needsUpdate = true; if (orbMesh.instanceColor) orbMesh.instanceColor.needsUpdate = true;
    dummy.scale.set(0, 0, 0);
  }
  for (const p of smoke) {
    if (p.life <= 0) continue;
    p.life -= dt; const t = 1 - p.life / p.max;
    p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
    p.s.scale.setScalar(1.6 + t * 5); p.s.material.opacity = 0.5 * (1 - t) * (1 - t);
    if (p.life <= 0) p.s.visible = false;
  }
  if (audio) {
    const c0 = m.cars[0], t = audio.ctx.currentTime;
    audio.pad.gain.setTargetAtTime(0, t, 0.2);
    audio.eng.frequency.setTargetAtTime(38 + clamp(c0.sp / c0.st.top, 0, 1) * 95, t, 0.05);
    audio.lp.frequency.setTargetAtTime(400 + clamp(c0.sp / c0.st.top, 0, 1) * 1400, t, 0.05);
    audio.engG.gain.setTargetAtTime(menu ? 0 : 0.05 + c0.thr * 0.05, t, 0.08);
    audio.sg.gain.setTargetAtTime(menu ? 0 : clamp(Math.abs(c0.slip) * 2, 0, 1) * clamp(c0.sp / 15, 0, 1) * 0.08, t, 0.05);
  }
}
function mpSkid(c, hd, dt) {
  const lx = Math.cos(c.h), lz = -Math.sin(c.h), fx = Math.sin(c.h), fz = Math.cos(c.h), rz = hd.lay.rear.z, rw = hd.rearX, ang = Math.atan2(c.vx, c.vz);
  for (const sx of [1, -1]) {
    dummy.position.set(c.x + fx * rz + lx * sx * rw, 0.05, c.z + fz * rz + lz * sx * rw); dummy.rotation.set(0, ang, 0);
    dummy.scale.set(1, 1, Math.max(0.4, c.sp * dt * 1.4)); dummy.updateMatrix(); skid.setMatrixAt(skidI++ % MAXSKID, dummy.matrix);
  }
  skid.instanceMatrix.needsUpdate = true;
  mpSmokeAcc += dt * 55 * clamp(Math.abs(c.slip) * 2, 0, 1) * clamp(c.sp / 20, 0.3, 1);
  while (mpSmokeAcc >= 1) { mpSmokeAcc--; const sx = Math.random() < 0.5 ? 1 : -1; spawnSmoke(c.x + fx * rz + lx * sx * rw, c.z + fz * rz + lz * sx * rw, c.vx, c.vz); }
}
function mpRender() {
  const W = innerWidth, H = innerHeight, vps = vpLayout(mp.cfg.n, W, H);
  renderer.setScissorTest(true);
  vps.slice(0, mp.cfg.n).forEach((vp, i) => {
    const cam = mpCams[i], c = mp.m.cars[i], gy = H - vp.y - vp.h;
    cam.aspect = vp.w / vp.h; cam.fov = cam.aspect < 1 ? 74 : 62; cam.updateProjectionMatrix();
    renderer.setViewport(vp.x, gy, vp.w, vp.h); renderer.setScissor(vp.x, gy, vp.w, vp.h);
    sun.position.set(c.x - 60, 80, c.z - 40); sun.target.position.set(c.x, 0, c.z); sky.position.set(c.x, 0, c.z);
    renderer.render(scene, cam);
  });
  renderer.setScissorTest(false); renderer.setViewport(0, 0, W, H);
}
function mpFrame(rdt) {
  if (!menu) {
    const m = mp.m;
    handleMpEvents(updateMatch(m, m.cars.map((_, i) => mpInput(i)), rdt));
  }
  if (!mp) return;
  mpSync(rdt); mpRender(); mpHudUpdate();
}

/* ================= FRAME UPDATE ================= */
function visuals(dt) {
  const inMenu = !!menu, m = model;
  const pulse = 0.14 + 0.1 * Math.sin(performance.now() / 200);
  ZONES.forEach((z, i) => { z.mat.color.setHex(i === zoneI ? 0xffd23f : 0x66ccff); z.mat.opacity = i === zoneI ? 0.2 + pulse : 0.07; });
  const P = inMenu ? STAGE : S, PY = inMenu ? STAGE.y : 0;
  carGroup.position.set(P.x, PY, P.z); carGroup.rotation.y = inMenu ? 0 : S.h;

  suspension(dt);
  m.pivot.position.y = PIV + SUS.heave + m.tune.rideH / 1000;
  m.pivot.rotation.set(SUS.pitch, 0, SUS.roll);
  const steerA = inMenu ? 0 : S.steer * 0.5;
  for (const w of m.wheels) {
    w.pivot.rotation.y = (w.front ? steerA : 0) - w.sx * m.toe[w.axle];
    if (!inMenu && !photo) w.roll.rotation.x += (S.vf / w.R) * dt;
  }
  if (m.swSpin) m.swSpin.rotation.z = inMenu ? 0 : -S.steer * 2.3;

  // the seated driver only shows during play / photo; the standing crew only in the garage editor
  if (m.driverRig) m.driverRig.visible = !inMenu;
  if (m.standFig) {
    m.standFig.visible = (menu === 'edit');
    if (menu === 'edit') {
      const tt = performance.now() / 1000;
      // slow weight-shift sway
      m.standFig.rotation.y = Math.PI / 2 + 0.22 + Math.sin(tt * 0.55) * 0.14;
      m.standFig.rotation.z = Math.sin(tt * 0.72) * 0.045;
      m.standFig.rotation.x = Math.sin(tt * 0.41 + 1.3) * 0.022;
      // breathing bob
      m.standFig.position.y = Math.sin(tt * 1.7) * 0.012;
      // knee / hip shift (scale the group a touch)
      const s = 1 + Math.sin(tt * 1.3 + 0.5) * 0.008;
      m.standFig.scale.set(s, 1, s);
    }
  }

  const skidding = !inMenu && !photo && ((Math.abs(S.slip) > 0.2 && S.sp > 7) || (S.hb && S.sp > 6));
  const lx = Math.cos(S.h), lz = -Math.sin(S.h), fx = Math.sin(S.h), fz = Math.cos(S.h);
  const rz = m.lay.rear.z, rw = m.rearX;
  if (skidding) {
    const ang = Math.atan2(S.vx, S.vz);
    for (const sx of [1, -1]) {
      const wx = S.x + fx * rz + lx * sx * rw, wz = S.z + fz * rz + lz * sx * rw;
      dummy.position.set(wx, 0.05, wz); dummy.rotation.set(0, ang, 0);
      dummy.scale.set(1, 1, Math.max(0.4, S.sp * dt * 1.4)); dummy.updateMatrix();
      skid.setMatrixAt(skidI++ % MAXSKID, dummy.matrix);
    }
    skid.instanceMatrix.needsUpdate = true;
    smokeAcc += dt * 55 * clamp(Math.abs(S.slip) * 2, 0, 1) * clamp(S.sp / 20, 0.3, 1);
    while (smokeAcc >= 1) {
      smokeAcc--; const sx = Math.random() < 0.5 ? 1 : -1;
      spawnSmoke(S.x + fx * rz + lx * sx * rw, S.z + fz * rz + lz * sx * rw);
    }
  }
  for (const p of smoke) {
    if (p.life <= 0) continue;
    p.life -= dt;
    const t = 1 - p.life / p.max;
    p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
    p.s.scale.setScalar(1.6 + t * 5); p.s.material.opacity = 0.5 * (1 - t) * (1 - t);
    if (p.life <= 0) p.s.visible = false;
  }

  const speed = Math.hypot(S.vx, S.vz), velAng = speed > 4 ? Math.atan2(S.vx, S.vz) : S.h;
  camH += wrap(S.h + 0.4 * wrap(velAng - S.h) - camH) * Math.min(1, dt * 3.2);
  let fovT = 60 + speed * 0.5;
  if (inMenu) {
    orbit += drag ? 0 : dt * 0.25;
    const cp = Math.cos(orbitPitch);
    camera.position.set(STAGE.x + Math.sin(orbit) * cp * orbitDist, STAGE.y + 0.7 + Math.sin(orbitPitch) * orbitDist, STAGE.z + Math.cos(orbit) * cp * orbitDist);
    camera.lookAt(STAGE.x, STAGE.y + 0.6, STAGE.z);
    fovT = 42;
  } else {
    const dist = 8.5 + speed * 0.03;
    shake = Math.max(0, shake - dt * 2.5);
    camera.position.set(
      S.x - Math.sin(camH) * dist + (Math.random() - 0.5) * shake,
      3.4 + speed * 0.012 + (Math.random() - 0.5) * shake,
      S.z - Math.cos(camH) * dist + (Math.random() - 0.5) * shake
    );
    camera.lookAt(S.x + Math.sin(camH) * 5, 1.1, S.z + Math.cos(camH) * 5);
    if (camMode === 1) { camera.position.set(S.x + fx * 0.6, 1.25, S.z + fz * 0.6); camera.lookAt(S.x + fx * 20, 1.2, S.z + fz * 20); }
    else if (camMode === 2) { camera.position.set(S.x - Math.sin(camH) * 18, 12, S.z - Math.cos(camH) * 18); camera.lookAt(S.x, 0, S.z); }
    if (photo) { orbit += dt * 0.4; camera.position.set(S.x + Math.sin(orbit) * 9, 2.6, S.z + Math.cos(orbit) * 9); camera.lookAt(S.x, 0.8, S.z); }
  }
  camera.fov = lerp(camera.fov, fovT, Math.min(1, dt * 3));
  const voT = !inMenu || innerWidth <= 780 ? 0 : -(menu === 'home' || menu === 'shop' || menu === 'edit' ? 240 : 200);
  viewOff += (voT - viewOff) * Math.min(1, dt * 6);
  if (Math.abs(viewOff) > 0.5) camera.setViewOffset(innerWidth, innerHeight, viewOff, 0, innerWidth, innerHeight); else camera.clearViewOffset();
  camera.updateProjectionMatrix();

  sun.position.set(P.x - 60, PY + 80, P.z - 40); sun.target.position.set(P.x, PY, P.z);
  sky.position.set(P.x, PY, P.z);

  if (!inMenu && mode === 'timed' && ghostBest.length > 1) {
    const u = ghostT / 0.1, i = Math.min(ghostBest.length - 2, Math.floor(u)), f = Math.min(1, u - i), a = ghostBest[i], b = ghostBest[i + 1];
    ghost.visible = u < ghostBest.length - 1;
    ghost.position.set(lerp(a[0], b[0], f), 0.6, lerp(a[1], b[1], f)); ghost.rotation.y = a[2] + wrap(b[2] - a[2]) * f;
  } else ghost.visible = false;
  if (audio) {
    const t = audio.ctx.currentTime, live = !inMenu, squeal = skidding ? clamp(Math.abs(S.slip) * 2, 0, 1) * clamp(S.sp / 15, 0, 1) : 0;
    audio.pad.gain.setTargetAtTime(photo || slowT > 0 ? 0 : Math.min(0.06, 0.012 + 0.008 * (pending > 0 ? mult : 0) + S.sp * 0.0004), t, 0.3);
    audio.eng.frequency.setTargetAtTime(38 + S.rpm * 95, t, 0.05);
    audio.lp.frequency.setTargetAtTime(400 + S.rpm * 1400, t, 0.05);
    audio.engG.gain.setTargetAtTime(live ? 0.06 + S.thr * 0.07 : 0, t, 0.08);
    audio.sg.gain.setTargetAtTime(squeal * 0.1, t, 0.05);
    audio.bp.frequency.setTargetAtTime(1500 + S.sp * 25, t, 0.1);
  }
}

let last = performance.now();
renderer.setAnimationLoop(now => {
  const rdt = Math.min(0.05, (now - last) / 1000); last = now;
  if (mp) { updateTilt(rdt); mpFrame(rdt); touchHud(); return; }
  const dt = slowT > 0 ? rdt * 0.25 : rdt; slowT -= rdt;
  crashCd -= rdt;
  if (!menu && dt > 0 && !photo) {
    const n = Math.ceil(dt / 0.0167);
    for (let i = 0; i < n; i++) step(dt / n);
    scoring(dt);
    if (mode === 'timed') {
      timeLeft -= dt; ghostT += dt; ghostRecT += dt;
      if (ghostRecT >= 0.1) { ghostRecT -= 0.1; ghostRec.push([S.x, S.z, S.h]); }
      if (timeLeft <= 0) finishRun();
    }
  }
  updateTilt(rdt); visuals(dt); hud(); touchHud();
  renderer.render(scene, camera);
});

applyCtrl(); setModel(carDef, paintOf(save.car), tune); recalc(); openMenu('home');