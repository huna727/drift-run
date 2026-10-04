import * as THREE from 'three';
import { CAR_DEFS, CAR_ORDER, bodyLoft, cabinLoft, sampleBody, halfWidthAt, sampleCab, wheelLayout } from './cars.js';
import { MP_R, MAX_SEG, MAX_ORBS, PCOLORS, PNAMES, KEYMAPS, layout as vpLayout, createMatch, updateMatch, arenaR, segmentPoses, susStep } from './multi.js';
import { TIERS, COMPOUNDS, TUNE_GROUPS, PRESETS, defaultTune, derive } from './tuning.js';

let WALL = 150, ISL = 38;
const CR = 1.6;
let HORIZON = 0xcfe6ff;
let ROAD_HALF = 11;

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const wrap = a => Math.atan2(Math.sin(a), Math.cos(a));
const safeNum = (v, fb = 0) => {
  if (typeof v === 'number' && isFinite(v)) return v;
  const n = parseFloat(v);
  return isFinite(n) ? n : fb;
};

/* ================= RENDERER ================= */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = false;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(HORIZON, 200, 900);
const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 3000);

const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.9, metalness: 0, ...o });

const sky = new THREE.Mesh(
  new THREE.SphereGeometry(1500, 16, 10),
  new THREE.MeshBasicMaterial({ color: 0x4f93e8, side: THREE.BackSide, fog: false, depthWrite: false })
);
scene.add(sky);

function tintSky(c1, c2) {
  const g = new THREE.SphereGeometry(1500, 16, 10), p = g.attributes.position, col = [];
  const a = new THREE.Color(c1), b = new THREE.Color(c2), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    c.copy(a).lerp(b, Math.pow(clamp(p.getY(i) / 1500, 0, 1), 0.6));
    col.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  sky.geometry.dispose(); sky.geometry = g;
  sky.material.dispose();
  sky.material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false });
}

const hemi = new THREE.HemisphereLight(0xdfeeff, 0x6a7a5a, 1.3);
const sun = new THREE.DirectionalLight(0xfff1d6, 2.4);
sun.castShadow = false;
scene.add(hemi, sun, sun.target);

/* ================= TEXTURES ================= */
const ROAD_TEX = (() => {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 800; i++) {
    g.fillStyle = 'rgba(0,0,0,' + (Math.random() * 0.18) + ')';
    g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
  }
  // edge white lines
  g.fillStyle = '#f4f4f4'; g.fillRect(0, 0, 4, 128); g.fillRect(124, 0, 4, 128);
  // red inner pinstripe
  g.fillStyle = '#c81020'; g.fillRect(5, 0, 2, 128); g.fillRect(121, 0, 2, 128);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4; t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

// Curbing texture - alternating red/white stripes
const CURB_TEX = (() => {
  const c = document.createElement('canvas'); c.width = 64; c.height = 16;
  const g = c.getContext('2d');
  g.fillStyle = '#e3262e'; g.fillRect(0, 0, 64, 16);
  g.fillStyle = '#f4f4f4'; for (let i = 0; i < 4; i++) g.fillRect(i * 16 + 8, 0, 8, 16);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4; t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

// Skid mark alpha texture (soft noise for smudge look)
const SKID_TEX = (() => {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 400; i++) {
    g.fillStyle = 'rgba(30,30,30,' + (Math.random() * 0.6) + ')';
    g.fillRect(Math.random() * 64, Math.random() * 64, 2, 2);
  }
  // fade edges
  const grad = g.createLinearGradient(0, 0, 64, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0.2)');
  grad.addColorStop(0.2, 'rgba(0,0,0,1)');
  grad.addColorStop(0.8, 'rgba(0,0,0,1)');
  grad.addColorStop(1, 'rgba(0,0,0,0.2)');
  g.globalCompositeOperation = 'destination-in';
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
})();

/* ================= MAPS ================= */
const MAPS = [
  {
    id: 'sunset', name: 'Sunset Arena',
    desc: 'Long oval, two wide sweepers. A classic drift shape.',
    sky: [0xcfe6ff, 0x4f93e8], fog: 0xcfe6ff,
    terrain: 0x86b84f, road: 0x50525a,
    mountains: [0x7d93b8, 0x6f9f58, 0x8aa6a0],
    decor: 'trees', night: false, slippery: false,
    wall: 165, island: true, roadHalf: 13, grip: 0.65,
    curb: true, poles: false,
    track: [[0, 130], [100, 85], [100, -85], [0, -130], [-100, -85], [-100, 85]],
  },
  {
    id: 'neon', name: 'Neon Docks',
    desc: 'Tight technical zigzag under the harbour lights.',
    sky: [0x140824, 0x3a1a5a], fog: 0x1c1030,
    terrain: 0x14121e, road: 0x303040,
    mountains: [0x2a1440, 0x3a2050, 0x1a0c2c],
    decor: 'cranes', night: true, slippery: false,
    wall: 150, island: false, roadHalf: 10, grip: 0.6,
    curb: true, poles: true,
    track: [[0, 120], [60, 105], [85, 55], [45, 20], [85, -25], [55, -85], [0, -120], [-55, -85], [-85, -25], [-45, 20], [-85, 55], [-60, 105]],
  },
  {
    id: 'frost', name: 'Frost Peak',
    desc: 'Fourteen-turn switchback on ice. Grip is a suggestion.',
    sky: [0xd8e8f8, 0x88b8e8], fog: 0xd0e0f4,
    terrain: 0xe6eef6, road: 0x888e98,
    mountains: [0xc8d8e8, 0xa8b8c8, 0xd0e0f0],
    decor: 'pines', night: false, slippery: true,
    wall: 185, island: true, roadHalf: 11, grip: 0.45,
    curb: true, poles: false,
    track: [[0, 155], [80, 140], [110, 90], [60, 60], [110, 10], [70, -35], [120, -85], [45, -155], [-45, -140], [-100, -75], [-50, -35], [-110, 20], [-65, 80], [-110, 130], [-65, 155]],
  },
  {
    id: 'harbor', name: 'Harbour Loop',
    desc: 'Enormous outer ring. Two very long straights. Top-speed heaven.',
    sky: [0xffb88a, 0x5a3a8a], fog: 0xc088a0,
    terrain: 0x4a5a4a, road: 0x48485a,
    mountains: [0x6a4a7a, 0x5a3a6a, 0x7a5a8a],
    decor: 'cranes', night: false, slippery: false,
    wall: 205, island: false, roadHalf: 14, grip: 0.7,
    curb: true, poles: true,
    track: [[0, 185], [130, 140], [180, 0], [130, -140], [0, -185], [-130, -140], [-180, 0], [-130, 140]],
  },
  {
    id: 'canyon', name: 'Red Canyon',
    desc: 'Figure-eight crossover with a tight centre chicane.',
    sky: [0xffd8a0, 0xd07040], fog: 0xe0a070,
    terrain: 0xc06840, road: 0x6a4a3a,
    mountains: [0xa05038, 0x8a4030, 0xb86848],
    decor: 'rocks', night: false, slippery: false,
    wall: 175, island: true, roadHalf: 11, grip: 0.65,
    curb: true, poles: false,
    track: [[0, 160], [110, 115], [120, 25], [35, 0], [120, -25], [110, -115], [0, -160], [-110, -115], [-120, -25], [-35, 0], [-120, 25], [-110, 115]],
  },
];

/* ================= WORLD ================= */
const worldGroup = new THREE.Group(); scene.add(worldGroup);
let currentMap = MAPS[0];
let trackSamples = [];
let raceGateGroup = null;
const OBST = [];
const ZONES = [];
const PAD = { x: 0, z: 95, r: 8, mesh: null };
let zoneI = 0, zoneT = 0;

function clearWorld() {
  worldGroup.traverse(o => { if (o.geometry) o.geometry.dispose(); });
  worldGroup.clear();
  raceGateGroup = null;
  trackSamples = [];
  OBST.length = 0;
  ZONES.length = 0;
}

function roadEdges(pts, halfW) {
  const N = pts.length;
  const edges = [];
  for (let i = 0; i < N; i++) {
    const [x, z] = pts[i];
    const [px, pz] = pts[(i - 1 + N) % N];
    const [nx, nz] = pts[(i + 1) % N];
    let ix = x - px, iz = z - pz; const il = Math.hypot(ix, iz) || 1; ix /= il; iz /= il;
    let ox = nx - x, oz = nz - z; const ol = Math.hypot(ox, oz) || 1; ox /= ol; oz /= ol;
    let ax = ix + ox, az = iz + oz; const al = Math.hypot(ax, az) || 1; ax /= al; az /= al;
    const perpX = -az, perpZ = ax;
    const dot = clamp(ix * ox + iz * oz, -0.85, 1);
    const miter = Math.min(1.5, 1 / Math.max(0.55, (dot + 1) / 2));
    edges.push({ x, z, dx: perpX * halfW * miter, dz: perpZ * halfW * miter, ang: Math.atan2(ox, oz) });
  }
  return edges;
}

function buildRoadGeometry(pts, halfW) {
  const edges = roadEdges(pts, halfW);
  const N = edges.length;
  const positions = [], uvs = [], indices = [];
  for (let i = 0; i < N; i++) {
    const e = edges[i];
    positions.push(e.x + e.dx, 0.08, e.z + e.dz);
    positions.push(e.x - e.dx, 0.08, e.z - e.dz);
    const v = i / N * 14;
    uvs.push(0, v); uvs.push(1, v);
  }
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N;
    const a = i * 2, b = i * 2 + 1, c = j * 2, d = j * 2 + 1;
    indices.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// Curbing along the road edges (red/white alternating boxes)
function buildCurbing(pts, halfW) {
  const g = new THREE.Group();
  const N = pts.length;
  const curbMat = new THREE.MeshStandardMaterial({ map: CURB_TEX.clone(), roughness: 0.7, metalness: 0.0, side: THREE.DoubleSide });
  curbMat.map.repeat.set(1, 1); curbMat.map.needsUpdate = true;
  const geo = new THREE.PlaneGeometry(0.9, 4).rotateX(-Math.PI / 2);
  for (let i = 0; i < N; i++) {
    const [x1, z1] = pts[i], [x2, z2] = pts[(i + 1) % N];
    const dx = x2 - x1, dz = z2 - z1, len = Math.hypot(dx, dz);
    const ang = Math.atan2(dx, dz);
    const nx = -Math.cos(ang), nz = Math.sin(ang); // perpendicular
    const steps = Math.max(2, Math.floor(len / 4));
    // Only place curbing on corners (segments shorter than ~40) to keep it interesting
    const isCorner = len < 50;
    if (!isCorner) continue;
    for (let s = 0; s < steps; s++) {
      const t = (s + 0.5) / steps;
      const cx = x1 + dx * t, cz = z1 + dz * t;
      for (const sgn of [1, -1]) {
        const c = new THREE.Mesh(geo, curbMat);
        c.position.set(cx + nx * halfW * sgn, 0.1, cz + nz * halfW * sgn);
        c.rotation.y = ang;
        g.add(c);
      }
    }
  }
  return g;
}

function sampleRoad(pts) {
  const out = [];
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const [x1, z1] = pts[i], [x2, z2] = pts[(i + 1) % n];
    const dx = x2 - x1, dz = z2 - z1, len = Math.hypot(dx, dz);
    const segs = Math.max(2, Math.ceil(len / 8));
    for (let s = 0; s < segs; s++) {
      const t = s / segs;
      out.push({ x: x1 + dx * t, z: z1 + dz * t });
    }
  }
  return out;
}

function buildWorld(map) {
  clearWorld();
  WALL = map.wall;
  ISL = map.island ? 38 : 0;
  HORIZON = map.fog;
  ROAD_HALF = map.roadHalf;
  tintSky(map.sky[0], map.sky[1]);
  scene.fog.color.setHex(map.fog);
  scene.fog.near = map.night ? 120 : 200;
  scene.fog.far = map.night ? 750 : 1000;
  hemi.color.setHex(map.night ? 0x5566aa : 0xdfeeff);
  if (map.night) { sun.color.setHex(0x8899cc); sun.intensity = 0.55; }
  else { sun.color.setHex(0xfff1d6); sun.intensity = map.slippery ? 2.2 : 2.4; }

  // Terrain base
  const terrain = new THREE.Mesh(
    new THREE.CircleGeometry(WALL + 40, 40).rotateX(-Math.PI / 2),
    M(map.terrain, { roughness: 1.0, metalness: 0 })
  );
  terrain.position.y = -0.02;
  worldGroup.add(terrain);

  // Dark boundary underlay
  {
    const underlay = new THREE.Mesh(
      new THREE.RingGeometry(WALL - 3, WALL + 4, 64).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: map.night ? 0x2a1440 : 0x2a2a2a })
    );
    underlay.position.y = -0.01;
    worldGroup.add(underlay);
  }

  // Road
  const roadGeo = buildRoadGeometry(map.track, ROAD_HALF);
  const roadMat = new THREE.MeshStandardMaterial({
    map: ROAD_TEX, color: map.road,
    roughness: 0.85, metalness: 0.05, side: THREE.DoubleSide,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
  });
  const road = new THREE.Mesh(roadGeo, roadMat);
  worldGroup.add(road);

  // Curbing at corners
  if (map.curb) worldGroup.add(buildCurbing(map.track, ROAD_HALF + 0.5));

  trackSamples = sampleRoad(map.track);

  // Island
  if (map.island) {
    const isle = new THREE.Mesh(new THREE.CylinderGeometry(ISL - 1, ISL + 1.5, 3, 20), M(map.night ? 0x3a2a5a : 0x7a8398));
    isle.position.y = 1.5;
    const topM = new THREE.Mesh(new THREE.CylinderGeometry(ISL - 3, ISL - 3, 0.2, 20), M(map.slippery ? 0xc8d8e8 : 0x5f9a63));
    topM.position.y = 3.05;
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(4, 6, 22, 6), M(0xe9e1d4));
    tower.position.y = 14;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(7, 7, 6), M(0xe63946));
    roof.position.y = 28.5;
    worldGroup.add(isle, topM, tower, roof);
  }

  // Fence
  {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'); g.strokeStyle = map.night ? '#4ec8ff' : '#c8c8c8'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(0, 0); g.lineTo(64, 64); g.moveTo(64, 0); g.lineTo(0, 64); g.stroke();
    const tex = new THREE.CanvasTexture(c); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(180, 3);
    const fence = new THREE.Mesh(new THREE.CylinderGeometry(WALL + 6, WALL + 6, 7, 80, 1, true), new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, opacity: map.night ? 0.85 : 1 }));
    fence.position.y = 3.5; worldGroup.add(fence);
  }

  // Tire wall barrier ring just inside the fence
  {
    const N = 60;
    const tyre = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.9, 0.9, 0.55, 8), M(0x1a1a1e), N);
    const stripe = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.9, 0.9, 0.55, 8), M(0xf4f4f4), N);
    const d = new THREE.Object3D();
    for (let i = 0; i < N; i++) {
      const a = i / N * Math.PI * 2;
      d.position.set(Math.sin(a) * (WALL - 3), 0.28, Math.cos(a) * (WALL - 3));
      d.rotation.set(0, a, 0); d.updateMatrix();
      tyre.setMatrixAt(i, d.matrix);
      d.position.y = 0.82; d.updateMatrix();
      stripe.setMatrixAt(i, d.matrix);
    }
    tyre.instanceMatrix.needsUpdate = true; stripe.instanceMatrix.needsUpdate = true;
    worldGroup.add(tyre, stripe);
  }

  // Obstacles off-road only
  const onRoad = (x, z) => {
    const rr = (ROAD_HALF + 6) * (ROAD_HALF + 6);
    for (let i = 0; i < trackSamples.length; i++) {
      const dx = x - trackSamples[i].x, dz = z - trackSamples[i].z;
      if (dx * dx + dz * dz < rr) return true;
    }
    return false;
  };
  for (let i = 0; i < 18; i++) {
    let x, z, tries = 0;
    do {
      const a = Math.random() * Math.PI * 2, r = 60 + Math.random() * (WALL - 65);
      x = Math.sin(a) * r; z = Math.cos(a) * r;
      tries++;
    } while (onRoad(x, z) && tries < 20);
    if (tries >= 20) continue;
    const g = new THREE.Group();
    if (map.id === 'sunset') {
      const tyre = M(0x1c1c20), stripe = M(0xf4f4f4), geo = new THREE.CylinderGeometry(1.1, 1.1, 0.5, 8);
      for (let k = 0; k < 3; k++) { const t = new THREE.Mesh(geo, k === 1 ? stripe : tyre); t.position.y = 0.25 + k * 0.5; g.add(t); }
      OBST.push({ x, z, r: 1.2 });
    } else if (map.id === 'neon') {
      const box = M(0x6a4a2a), geo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      for (let k = 0; k < 2; k++) { const b = new THREE.Mesh(geo, box); b.position.set(0, 0.75 + k * 1.5, 0); g.add(b); }
      OBST.push({ x, z, r: 1.3 });
    } else if (map.id === 'frost') {
      const rock = M(0xc8d8e8);
      const m = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 0), rock); m.position.y = 0.7; g.add(m);
      OBST.push({ x, z, r: 1.3 });
    } else if (map.id === 'harbor') {
      const b = M(0xc23a2a), geo = new THREE.CylinderGeometry(0.5, 0.5, 1.1, 8);
      for (let k = 0; k < 3; k++) { const o = new THREE.Mesh(geo, b); o.position.set((k - 1) * 0.9, 0.55, 0); g.add(o); }
      OBST.push({ x, z, r: 1.2 });
    } else {
      const rock = M(0xa05038);
      const m = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 0), rock); m.position.y = 0.7; g.add(m);
      OBST.push({ x, z, r: 1.4 });
    }
    g.position.set(x, 0, z);
    worldGroup.add(g);
  }

  // Drift score zones
  for (let i = 0; i < 4; i++) {
    const idx = Math.floor(i / 4 * map.track.length);
    const [x, z] = map.track[idx];
    const mat = new THREE.MeshBasicMaterial({ color: 0x66ccff, transparent: true, opacity: 0.12, depthWrite: false });
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 0.1, 20), mat);
    mesh.position.set(x, 0.11, z);
    worldGroup.add(mesh);
    ZONES.push({ x, z, r: 14, mat, mesh });
  }

  // Bank pad
  {
    const [x, z] = map.track[0];
    PAD.x = x; PAD.z = z;
    const padMesh = new THREE.Mesh(new THREE.CylinderGeometry(PAD.r, PAD.r, 0.1, 18), new THREE.MeshBasicMaterial({ color: 0x3dff8a, transparent: true, opacity: 0.5, depthWrite: false }));
    padMesh.position.set(PAD.x, 0.12, PAD.z);
    worldGroup.add(padMesh); PAD.mesh = padMesh;
  }

  // Light poles for night maps / harbour
  if (map.poles) {
    const poleMat = M(0x4a4e58, { metalness: 0.6, roughness: 0.4 });
    const bulbMat = M(0xfff0c0, { emissive: 0xffe9a0, emissiveIntensity: 1.8 });
    for (let i = 0; i < 14; i++) {
      const a = i / 14 * Math.PI * 2, r = WALL - 8;
      const x = Math.sin(a) * r, z = Math.cos(a) * r;
      const pole = new THREE.Group();
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 10, 8), poleMat);
      stem.position.y = 5; pole.add(stem);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 0.2), poleMat);
      arm.position.set(1.2, 10, 0); pole.add(arm);
      const head = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 1.0), poleMat);
      head.position.set(2.4, 9.85, 0); pole.add(head);
      const bulb = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.8), bulbMat);
      bulb.position.set(2.4, 9.55, 0); pole.add(bulb);
      pole.position.set(x, 0, z);
      pole.rotation.y = -a + Math.PI / 2;
      worldGroup.add(pole);
    }
  }

  // Decor
  const decorFar = (x, z) => {
    const rr = (ROAD_HALF + 14) * (ROAD_HALF + 14);
    for (let i = 0; i < trackSamples.length; i++) {
      const dx = x - trackSamples[i].x, dz = z - trackSamples[i].z;
      if (dx * dx + dz * dz < rr) return false;
    }
    return true;
  };
  if (map.decor === 'trees' || map.decor === 'pines') {
    const N = 70;
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.5, 3, 5), M(0x5b4636), N);
    const crownCol = map.slippery ? 0x2c5a48 : 0x3d7a3a;
    const crown = new THREE.InstancedMesh(new THREE.ConeGeometry(2.6, 7, 6), M(crownCol), N);
    const d = new THREE.Object3D();
    let placed = 0;
    for (let tries = 0; tries < N * 4 && placed < N; tries++) {
      const a = Math.random() * Math.PI * 2, r = WALL - 25 + Math.random() * 20;
      const x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (!decorFar(x, z)) continue;
      const s = 0.8 + Math.random() * 1.0;
      d.position.set(x, 1.5 * s, z); d.scale.setScalar(s); d.updateMatrix();
      trunk.setMatrixAt(placed, d.matrix);
      d.position.y = 7 * s; d.updateMatrix();
      crown.setMatrixAt(placed, d.matrix);
      placed++;
    }
    trunk.count = placed; crown.count = placed;
    trunk.instanceMatrix.needsUpdate = true; crown.instanceMatrix.needsUpdate = true;
    worldGroup.add(trunk, crown);
  } else if (map.decor === 'cranes') {
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2, r = WALL + 40 + Math.random() * 60;
      const cg = new THREE.Group();
      const c = M(map.night ? 0x2a1a4a : 0x3a3a48);
      cg.add(new THREE.Mesh(new THREE.BoxGeometry(2, 30, 2), c));
      const top = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 22), c); top.position.set(0, 15, 10); cg.add(top);
      const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), M(0x6a4a2a));
      box.position.set(0, 12, 20); cg.add(box);
      cg.position.set(Math.sin(a) * r, 15, Math.cos(a) * r);
      cg.rotation.y = a;
      worldGroup.add(cg);
    }
  } else if (map.decor === 'rocks') {
    for (let i = 0; i < 50; i++) {
      const a = i / 50 * Math.PI * 2 + Math.random() * 0.15, r = WALL + 15 + Math.random() * 130;
      const size = 2 + Math.random() * 5;
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(size, 0), M(map.mountains[i % 3]));
      rock.position.set(Math.sin(a) * r, size * 0.4, Math.cos(a) * r);
      rock.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      worldGroup.add(rock);
    }
  }

  // Distant mountains
  for (let i = 0; i < 14; i++) {
    const a = i / 14 * Math.PI * 2 + Math.random() * 0.25, r = 620 + Math.random() * 160, h = 140 + Math.random() * 160;
    const m = new THREE.Mesh(new THREE.ConeGeometry(100 + Math.random() * 80, h, 5), M(map.mountains[i % 3]));
    m.position.set(Math.sin(a) * r, h / 2 - 5, Math.cos(a) * r);
    m.rotation.y = Math.random() * 6;
    worldGroup.add(m);
  }

  // Sky objects
  if (map.night) {
    const N = 120, stars = new THREE.InstancedMesh(new THREE.SphereGeometry(1.4, 3, 3), new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }), N);
    const d = new THREE.Object3D();
    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2, r = 900 + Math.random() * 500, y = 200 + Math.random() * 700;
      d.position.set(Math.sin(a) * r, y, Math.cos(a) * r); d.updateMatrix();
      stars.setMatrixAt(i, d.matrix);
    }
    worldGroup.add(stars);
  } else {
    const c = document.createElement('canvas'); c.width = c.height = 96;
    const g = c.getContext('2d'), gr = g.createRadialGradient(48, 48, 2, 48, 48, 46);
    gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.6, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 96, 96);
    const tex = new THREE.CanvasTexture(c);
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2, r = 500 + Math.random() * 500, y = 200 + Math.random() * 180;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.85, fog: false, depthWrite: false }));
      sp.scale.set(140 + Math.random() * 100, 50 + Math.random() * 30, 1);
      sp.position.set(Math.sin(a) * r, y, Math.cos(a) * r);
      worldGroup.add(sp);
    }
  }
}

/* ================= RACE GATES ================= */
const raceState = { active: false, cp: 0, time: 0, gates: [], done: false };
function buildRaceGates(map) {
  if (raceGateGroup) { worldGroup.remove(raceGateGroup); raceGateGroup.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
  raceGateGroup = new THREE.Group();
  worldGroup.add(raceGateGroup);
  raceState.gates = [];
  const pts = map.track;
  for (let i = 0; i < pts.length; i++) {
    const [x, z] = pts[i];
    const [nx, nz] = pts[(i + 1) % pts.length];
    const ang = Math.atan2(nx - x, nz - z);
    const gate = new THREE.Group();
    gate.position.set(x, 0, z);
    gate.rotation.y = ang;
    const col = i === 0 ? 0x3ddc5a : 0xffd23f;
    const pillarMat = M(col, { emissive: col, emissiveIntensity: 0.35 });
    for (const sx of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 6, 0.5), pillarMat.clone());
      p.position.set(sx * (ROAD_HALF + 1), 3, 0); gate.add(p);
    }
    const banner = new THREE.Mesh(new THREE.BoxGeometry(ROAD_HALF * 2 + 2, 0.7, 0.4), pillarMat.clone());
    banner.position.set(0, 6.4, 0); gate.add(banner);
    raceGateGroup.add(gate);
    raceState.gates.push({ x, z, r: ROAD_HALF + 1 });
  }
  updateGateColors();
}
function updateGateColors() {
  if (!raceGateGroup) return;
  raceGateGroup.children.forEach((gate, i) => {
    const cur = raceState.cp === i;
    const past = i < raceState.cp;
    const base = past ? 0x3ddc5a : cur ? 0xffd23f : 0x666677;
    gate.children.forEach(c => {
      if (c.material && c.material.color) {
        c.material.color.setHex(base);
        if (c.material.emissive) c.material.emissive.setHex(base);
        if ('emissiveIntensity' in c.material) c.material.emissiveIntensity = cur ? 0.7 : 0.2;
      }
    });
  });
}

/* ================= STUDIO ================= */
const STAGE = { x: 0, y: 600, z: 0 };
{
  const g = new THREE.Group(); g.position.set(STAGE.x, STAGE.y, STAGE.z);
  const HALF = 17, H = 14;
  const box = (w, h, d, mat, x, y, z, par = g) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); par.add(m); return m; };
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  { const x = cv.getContext('2d'); x.fillStyle = '#b8bdc6'; x.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 256; i += 16) { x.fillStyle = i % 32 ? '#a7acb6' : '#cfd3da'; x.fillRect(i, 0, 8, 256); } }
  const wallTex = new THREE.CanvasTexture(cv); wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping; wallTex.repeat.set(4, 1); wallTex.colorSpace = THREE.SRGBColorSpace;
  const room = new THREE.Mesh(new THREE.BoxGeometry(HALF * 2, H, HALF * 2), M(0xffffff, { map: wallTex, side: THREE.BackSide }));
  room.position.y = H / 2; g.add(room);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, HALF * 2).rotateX(-Math.PI / 2), M(0x7b7e86, { roughness: 0.55 }));
  floor.position.y = 0.01; g.add(floor);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.08, 40), M(0x3a3d4a, { roughness: 0.5 }));
  disc.position.y = 0.05; g.add(disc);
  const ring = new THREE.Mesh(new THREE.RingGeometry(4.2, 4.5, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffd23f }));
  ring.position.y = 0.1; g.add(ring);
  const wood = M(0xb27a44);
  box(15, 7, 0.4, wood, 0, 5.2, -HALF + 0.3);
  box(15, 0.35, 3, wood, 0, 1.9, -HALF + 1.8);
  const lampLight = new THREE.PointLight(0xfff0d8, 90, 55, 1.6); lampLight.position.set(0, H - 3, 0); g.add(lampLight);
  scene.add(g);
}

/* ================= MATERIALS ================= */
const PIV = 0.4;
const dark = M(0x15171c);
const darkDS = M(0x15171c, { side: THREE.DoubleSide });
const glass = M(0x0e1a2e, { roughness: 0.06, metalness: 0.6, side: THREE.DoubleSide, transparent: true, opacity: 0.62 });
const glassLight = M(0x8ab0d0, { roughness: 0.04, metalness: 0.4, transparent: true, opacity: 0.5 });
const silver = M(0xd6dbe4, { metalness: 0.75, roughness: 0.28 });
const chrome = M(0xeef2f8, { metalness: 0.98, roughness: 0.08 });
const blackTrim = M(0x0c0d12, { roughness: 0.75, metalness: 0.15 });
const redCal = M(0xe3262e, { roughness: 0.5 });
const spokeMat = M(0x4a4e58, { metalness: 0.6, roughness: 0.35 });
const tyreMat = M(0x0f1015, { roughness: 0.95 });
const lampMat = M(0xffffff, { emissive: 0xfff2c0, emissiveIntensity: 1.7 });
const lampHot = M(0xfff8e8, { emissive: 0xffffff, emissiveIntensity: 2.8 });
const tailMat = M(0xff2233, { emissive: 0xff1122, emissiveIntensity: 1.5 });
const reverseMat = M(0xfff4d0, { emissive: 0xfff0c0, emissiveIntensity: 1.0 });
const amberMat = M(0xffa030, { emissive: 0xff7700, emissiveIntensity: 1.5 });
const interiorMat = M(0x0e1015, { roughness: 0.9 });
const seatMat = M(0x1a1d24, { roughness: 0.9 });
const seatTrim = M(0xc0182b, { roughness: 0.75 });
const suitMat = M(0x16181f, { roughness: 0.7 });
const suitAccent = M(0xc0182b, { roughness: 0.65 });
const skinMat = M(0xecd0b0, { roughness: 0.75 });
const helmMat = M(0xd93b3b, { roughness: 0.5 });
const visorMat = M(0x0a0d14, { roughness: 0.15, metalness: 0.6 });
const harnessMat = M(0x1c1e24, { roughness: 0.85 });
const cageMat = M(0x1c1e24, { metalness: 0.3, roughness: 0.6 });
const carbonMat = M(0x24272e, { roughness: 0.55, metalness: 0.3 });
const gaugeMat = M(0x0a0d14, { roughness: 0.4, metalness: 0.4 });
const carGroup = new THREE.Group(); scene.add(carGroup);
let model = null;

/* ================= HELPERS ================= */
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
function mkBar(a, b, r, mat, seg = 6) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const len = A.distanceTo(B);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, seg), mat);
  m.position.copy(A).add(B).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  return m;
}

/* ================= LIVERY ================= */
function liveryTex(def, hex, b) {
  const W = 512, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const base = new THREE.Color(hex);
  const lum = base.r * 0.3 + base.g * 0.59 + base.b * 0.11;
  const isLight = lum > 0.6;
  const X = z => clamp((z - b.zmin) / (b.zmax - b.zmin), 0, 1) * W;
  const Y = y => (1 - clamp((y - b.ymin) / (b.ymax - b.ymin), 0, 1)) * H;
  g.fillStyle = '#' + base.getHexString();
  g.fillRect(0, 0, W, H);
  const grad = g.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(255,255,255,0.16)');
  grad.addColorStop(0.55, 'rgba(0,0,0,0)');
  grad.addColorStop(1, 'rgba(0,0,0,0.34)');
  g.fillStyle = grad; g.fillRect(0, 0, W, H);
  // rocker band
  g.fillStyle = isLight ? '#101528' : '#08080e';
  g.fillRect(0, Y(0.28), W, H - Y(0.28));
  // accent stripe
  const accent = isLight ? '#c81f2e' : '#ffd23f';
  const sy1 = Y(0.60), sy2 = Y(0.52);
  g.fillStyle = accent;
  g.fillRect(X(-2.6), sy1, X(2.6) - X(-2.6), sy2 - sy1);
  g.fillStyle = 'rgba(255,255,255,0.4)';
  g.fillRect(X(-2.6), sy1 - 2, X(2.6) - X(-2.6), 2);
  // door shutline
  g.fillStyle = 'rgba(0,0,0,0.55)';
  g.fillRect(X(0.62), Y(0.82), 2, Y(0.28) - Y(0.82));
  g.fillRect(X(-1.05), Y(0.82), 2, Y(0.28) - Y(0.82));
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
const liveryMat = (def, hex, b) => new THREE.MeshStandardMaterial({ map: liveryTex(def, hex, b), flatShading: true, roughness: 0.42, metalness: 0.22, side: THREE.DoubleSide });
function repaint(m, hex) {
  if (!m) return;
  m.solid.color.setHex(hex);
  m.paint.map.dispose();
  m.paint.map = liveryTex(m.def, hex, m.bb);
  m.paint.needsUpdate = true;
}

/* ================= DETAILED CAR MODEL ================= */
function buildCockpitInterior(def, scl, floorY, zMid, zf, zr, intW, body) {
  const grp = new THREE.Group();
  // dash slab with a slight angle
  const dash = new THREE.Mesh(new THREE.BoxGeometry(intW * 1.9, 0.15, 0.22), interiorMat);
  dash.position.set(0, floorY + 0.10, zf - 0.10);
  dash.rotation.x = -0.12;
  grp.add(dash);
  // dash top
  const dashTop = new THREE.Mesh(new THREE.BoxGeometry(intW * 1.9, 0.02, 0.24), M(0x1a1c22, { roughness: 0.8 }));
  dashTop.position.set(0, floorY + 0.185, zf - 0.10);
  dashTop.rotation.x = -0.12;
  grp.add(dashTop);
  // instrument binnacle in front of driver
  const binnacle = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.10, 0.06), blackTrim);
  binnacle.position.set(-0.30, floorY + 0.20, zf - 0.18);
  binnacle.rotation.x = -0.12;
  grp.add(binnacle);
  // two round gauges
  const gaugeGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.015, 14).rotateX(Math.PI / 2);
  for (const dx of [-0.07, 0.07]) {
    const gface = new THREE.Mesh(gaugeGeo, gaugeMat);
    gface.position.set(-0.30 + dx, floorY + 0.20, zf - 0.155);
    gface.rotation.x = -0.12;
    grp.add(gface);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.006, 6, 16), chrome);
    ring.position.set(-0.30 + dx, floorY + 0.20, zf - 0.155);
    ring.rotation.x = -0.12;
    grp.add(ring);
  }
  // centre screen
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.09), M(0x1d4a8e, { emissive: 0x2a5aae, emissiveIntensity: 0.5 }));
  screen.position.set(0.05, floorY + 0.19, zf - 0.14);
  screen.rotation.x = -0.12;
  grp.add(screen);
  // centre console between seats
  const conL = zf - zr - 0.5;
  const con = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, conL), interiorMat);
  con.position.set(0.02, floorY + 0.045, zMid);
  grp.add(con);
  // shifter
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.11, 6), blackTrim);
  rod.position.set(0.02, floorY + 0.14, zMid + 0.1);
  rod.rotation.x = -0.2;
  grp.add(rod);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), redCal);
  knob.position.set(0.02, floorY + 0.20, zMid + 0.12);
  grp.add(knob);
  // handbrake
  const hbL = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 6), chrome);
  hbL.position.set(0.02, floorY + 0.12, zMid - 0.05);
  hbL.rotation.x = 1.3;
  grp.add(hbL);
  // two racing seats
  for (const sx of [-1, 1]) {
    const seat = new THREE.Group();
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.34 * scl, 0.06 * scl, 0.36 * scl), seatMat);
    base.position.y = 0.03 * scl; seat.add(base);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.34 * scl, 0.32 * scl, 0.08 * scl), seatMat);
    back.position.set(0, 0.19 * scl, -0.14 * scl);
    back.rotation.x = -0.16; seat.add(back);
    const hr = new THREE.Mesh(new THREE.BoxGeometry(0.18 * scl, 0.08 * scl, 0.06 * scl), seatMat);
    hr.position.set(0, 0.38 * scl, -0.18 * scl);
    hr.rotation.x = -0.16; seat.add(hr);
    // red side bolsters
    for (const sy of [1, -1]) {
      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.03 * scl, 0.30 * scl, 0.09 * scl), seatTrim);
      bl.position.set(sy * 0.17 * scl, 0.19 * scl, -0.13 * scl);
      bl.rotation.x = -0.16; seat.add(bl);
    }
    // harness straps
    for (const sy of [1, -1]) {
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.02 * scl, 0.28 * scl, 0.008), seatTrim);
      strap.position.set(sy * 0.08 * scl, 0.19 * scl, -0.095 * scl);
      strap.rotation.x = -0.16; seat.add(strap);
    }
    seat.position.set(sx * 0.30, floorY + 0.02, zMid + 0.08);
    grp.add(seat);
  }
  // roll cage
  {
    const cageZf = zf - 0.06, cageZr = zr + 0.06;
    const cageYBot = floorY + 0.05;
    const cageYTop = floorY + 0.55;
    const w = intW * 0.95;
    for (const sx of [1, -1]) {
      grp.add(mkBar([sx * w, cageYBot, cageZf], [sx * w * 0.85, cageYTop, cageZf], 0.02, cageMat, 6));
      grp.add(mkBar([sx * w * 0.85, cageYTop, cageZf], [sx * w * 0.85, cageYTop, cageZr], 0.02, cageMat, 6));
      grp.add(mkBar([sx * w * 0.85, cageYBot, cageZr], [sx * w * 0.85, cageYTop, cageZr], 0.02, cageMat, 6));
    }
    grp.add(mkBar([-w * 0.85, cageYTop, cageZr], [w * 0.85, cageYTop, cageZr], 0.02, cageMat, 6));
  }
  return grp;
}

function buildDriverRig(scl) {
  const rig = new THREE.Group();
  // torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.26 * scl, 0.32 * scl, 0.18 * scl), suitMat);
  torso.position.y = 0.20 * scl;
  rig.add(torso);
  // harness stripes
  for (const sx of [1, -1]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.022 * scl, 0.26 * scl, 0.004), suitAccent);
    s.position.set(sx * 0.07 * scl, 0.20 * scl, 0.093 * scl);
    rig.add(s);
  }
  // shoulders
  const sh = new THREE.Mesh(new THREE.BoxGeometry(0.32 * scl, 0.05 * scl, 0.17 * scl), suitMat);
  sh.position.y = 0.36 * scl;
  rig.add(sh);
  // neck + head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.075 * scl, 12, 10), skinMat);
  head.position.y = 0.46 * scl;
  rig.add(head);
  // helmet
  const helm = new THREE.Mesh(new THREE.SphereGeometry(0.09 * scl, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.72), helmMat);
  helm.position.y = 0.46 * scl;
  rig.add(helm);
  // visor
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.14 * scl, 0.05 * scl, 0.02), visorMat);
  visor.position.set(0, 0.46 * scl, 0.075 * scl);
  rig.add(visor);
  // helmet stripe
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.09 * scl, 0.006, 0.19 * scl), suitAccent);
  stripe.position.set(0, 0.46 * scl + 0.068 * scl, 0.01 * scl);
  rig.add(stripe);
  // steering wheel (tilted)
  const swTilt = new THREE.Group();
  swTilt.position.set(0, 0.20 * scl, 0.25 * scl);
  swTilt.rotation.x = 1.15;
  rig.add(swTilt);
  const swSpin = new THREE.Group();
  swTilt.add(swSpin);
  const wr = 0.11 * scl;
  swSpin.add(new THREE.Mesh(new THREE.TorusGeometry(wr, 0.014 * scl, 8, 22), blackTrim));
  swSpin.add(new THREE.Mesh(new THREE.BoxGeometry(wr * 2, 0.015 * scl, 0.015 * scl), blackTrim));
  const sb = new THREE.Mesh(new THREE.BoxGeometry(0.015 * scl, wr * 1.1, 0.015 * scl), blackTrim);
  sb.position.set(0, -wr * 0.55, 0); swSpin.add(sb);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.024 * scl, 0.024 * scl, 0.018 * scl, 10), blackTrim);
  hub.rotation.x = Math.PI / 2; swSpin.add(hub);
  const hubDot = new THREE.Mesh(new THREE.CylinderGeometry(0.008 * scl, 0.008 * scl, 0.024 * scl, 8), redCal);
  hubDot.rotation.x = Math.PI / 2; swSpin.add(hubDot);
  // arms (segmented)
  const shL = [-0.16 * scl, 0.36 * scl, 0], shR = [0.16 * scl, 0.36 * scl, 0];
  const elL = [-0.19 * scl, 0.14 * scl, 0.14 * scl], elR = [0.19 * scl, 0.14 * scl, 0.14 * scl];
  const hdL = [-0.09 * scl, 0.19 * scl, 0.26 * scl], hdR = [0.09 * scl, 0.19 * scl, 0.26 * scl];
  rig.add(mkBar(shL, elL, 0.038 * scl, suitMat, 6));
  rig.add(mkBar(elL, hdL, 0.033 * scl, suitMat, 6));
  rig.add(mkBar(shR, elR, 0.038 * scl, suitMat, 6));
  rig.add(mkBar(elR, hdR, 0.033 * scl, suitMat, 6));
  const handGeo = new THREE.SphereGeometry(0.038 * scl, 8, 6);
  const hL = new THREE.Mesh(handGeo, skinMat); hL.position.set(...hdL); rig.add(hL);
  const hR = new THREE.Mesh(handGeo, skinMat); hR.position.set(...hdR); rig.add(hR);
  return { rig, swSpin };
}

function buildAlloyWheel(L, front) {
  const grp = new THREE.Group();
  const roll = new THREE.Group();
  grp.add(roll);
  const rimR = L.R * 0.68, rimW = L.w * 0.9;
  // tire
  const tyre = new THREE.Mesh(new THREE.CylinderGeometry(L.R, L.R, L.w, 20).rotateZ(Math.PI / 2), tyreMat);
  roll.add(tyre);
  // sidewall rings
  for (const off of [-L.w / 2 + 0.01, L.w / 2 - 0.01]) {
    const sw = new THREE.Mesh(new THREE.TorusGeometry(L.R * 0.82, 0.014, 4, 20).rotateY(Math.PI / 2), tyreMat);
    sw.position.x = off;
    roll.add(sw);
  }
  // rim barrel
  roll.add(new THREE.Mesh(new THREE.CylinderGeometry(rimR, rimR, rimW, 18).rotateZ(Math.PI / 2), spokeMat));
  // rim outer lip (chrome)
  const lip = new THREE.Mesh(new THREE.TorusGeometry(rimR - 0.008, 0.016, 6, 24).rotateY(Math.PI / 2), chrome);
  roll.add(lip);
  // centre hub
  roll.add(new THREE.Mesh(new THREE.CylinderGeometry(rimR * 0.22, rimR * 0.22, rimW * 1.04, 12).rotateZ(Math.PI / 2), chrome));
  // centre cap
  roll.add(new THREE.Mesh(new THREE.CylinderGeometry(rimR * 0.11, rimR * 0.11, rimW * 1.08, 10).rotateZ(Math.PI / 2), redCal));
  // 7 thin alloy spokes
  for (let k = 0; k < 7; k++) {
    const pivot = new THREE.Group();
    pivot.rotation.x = k * Math.PI * 2 / 7;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(rimW * 0.55, rimR * 0.9, 0.02), silver);
    arm.position.y = rimR * 0.45;
    pivot.add(arm);
    // small side channel to make it look like a split spoke
    const side = new THREE.Mesh(new THREE.BoxGeometry(rimW * 0.55, rimR * 0.9, 0.006), M(0x8a9098, { metalness: 0.7, roughness: 0.3 }));
    side.position.set(0, rimR * 0.45, 0.012);
    pivot.add(side);
    roll.add(pivot);
  }
  // 5 lug nuts
  const lugGeo = new THREE.CylinderGeometry(0.008, 0.008, rimW * 1.05, 6).rotateZ(Math.PI / 2);
  for (let k = 0; k < 5; k++) {
    const a = k * Math.PI * 2 / 5 + 0.3;
    const lug = new THREE.Mesh(lugGeo, silver);
    lug.position.y = Math.cos(a) * rimR * 0.3;
    lug.position.z = Math.sin(a) * rimR * 0.3;
    roll.add(lug);
  }
  // brake disc with cross-drilled holes (not rolling)
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(L.R * 0.52, L.R * 0.52, 0.022, 18).rotateZ(Math.PI / 2), M(0x50545c, { metalness: 0.5, roughness: 0.5 }));
  disc.position.x = -L.w * 0.22;
  grp.add(disc);
  // drilled holes (tiny cylinders)
  for (let k = 0; k < 12; k++) {
    const a = k * Math.PI * 2 / 12;
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.026, 6).rotateZ(Math.PI / 2), blackTrim);
    hole.position.set(-L.w * 0.22, Math.cos(a) * L.R * 0.38, Math.sin(a) * L.R * 0.38);
    grp.add(hole);
  }
  // brake caliper
  const cal = new THREE.Mesh(new THREE.BoxGeometry(L.w * 0.32, L.R * 0.4, L.R * 0.24), redCal);
  cal.position.set(-L.w * 0.22, L.R * 0.42, L.R * 0.1);
  grp.add(cal);
  // caliper bolt heads
  for (const d of [-0.06, 0.06]) {
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, L.w * 0.34, 6).rotateZ(Math.PI / 2), blackTrim);
    bolt.position.set(-L.w * 0.22, L.R * 0.42 + d, L.R * 0.1);
    grp.add(bolt);
  }
  return { grp, roll };
}

function buildModel(def, paintHex) {
  const bodyLoftData = bodyLoft(def);
  const cabinLoftData = cabinLoft(def);
  const bb = loftBounds(bodyLoftData);
  const paint = liveryMat(def, paintHex, bb);
  const solid = M(paintHex, { roughness: 0.5, metalness: 0.18, side: THREE.DoubleSide });
  const solidNoDS = M(paintHex, { roughness: 0.5, metalness: 0.18 });
  const root = new THREE.Group(), pivot = new THREE.Group(), body = new THREE.Group();
  pivot.position.y = PIV; body.position.y = -PIV; root.add(pivot); pivot.add(body);
  const put = (geo, mat, x, y, z, parent = body) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    parent.add(mesh); return mesh;
  };
  const box = (w, h, d, mat, x, y, z, parent) => put(new THREE.BoxGeometry(w, h, d), mat, x, y, z, parent);
  const rows = def.rows, nose = rows[0], tl = rows[rows.length - 1];
  const nr = nose.slice(1), tr = tl.slice(1);
  const nz = nose[0], tz = tl[0];
  put(toGeo(bodyLoftData, bb), [paint, darkDS], 0, 0, 0);
  put(toGeo(cabinLoftData, bb), [glass, paint], 0, 0, 0);
  const zf = def.cab[1][0], zr = def.cab[2][0], zMid = (zf + zr) / 2;
  const cf = sampleCab(def, zf), cr = sampleCab(def, zr), cm = sampleCab(def, zMid);
  const floorY = cm.yb;
  const roofY = Math.min(cf.yr, cr.yr, cm.yr);
  const cabH = roofY - floorY;
  const scl = clamp(cabH / 0.52, 0.62, 1.05);

  /* ---------- FRONT END ---------- */
  const noseYBot = nr[0], noseYTop = nr[4];
  const headY = noseYBot + (noseYTop - noseYBot) * 0.58;
  const headHW = halfWidthAt(nr, headY);
  const headH = Math.min(0.15, (noseYTop - noseYBot) * 0.32);
  if (!def.popup) {
    for (const sx of [1, -1]) {
      // chrome bezel
      box(headHW * 0.82, headH * 1.35, 0.05, chrome, sx * headHW * 0.55, headY, nz + 0.005);
      // dark recess
      box(headHW * 0.72, headH * 1.15, 0.04, blackTrim, sx * headHW * 0.55, headY, nz + 0.032);
      // main lens
      box(headHW * 0.6, headH * 0.95, 0.02, lampMat, sx * headHW * 0.55, headY, nz + 0.048);
      // hot inner lens
      box(headHW * 0.22, headH * 0.5, 0.015, lampHot, sx * headHW * 0.55 + sx * 0.02, headY - 0.01, nz + 0.058);
      // vertical DRL strip at the outboard edge
      box(0.02, headH * 1.05, 0.02, lampHot, sx * (headHW * 0.55 + headHW * 0.28), headY, nz + 0.05);
    }
  } else {
    // flush popup light strip
    for (const sx of [1, -1]) {
      const podY = sampleBody(rows, nz - 0.35)[4];
      box(0.34, 0.014, 0.22, lampMat, sx * 0.5, podY + 0.008, nz - 0.35);
      box(0.37, 0.008, 0.25, blackTrim, sx * 0.5, podY + 0.003, nz - 0.35);
    }
  }
  // grille recessed
  const grilleY = noseYBot + (noseYTop - noseYBot) * 0.22;
  const grilleHW = halfWidthAt(nr, grilleY);
  box(grilleHW * 1.6, 0.11, 0.03, blackTrim, 0, grilleY, nz + 0.012);
  // chrome slats
  for (const yOff of [-0.03, -0.01, 0.01, 0.03]) box(grilleHW * 1.5, 0.008, 0.035, chrome, 0, grilleY + yOff, nz + 0.026);
  // badge
  box(0.05, 0.05, 0.015, chrome, 0, grilleY, nz + 0.04);
  box(0.026, 0.026, 0.018, redCal, 0, grilleY, nz + 0.048);
  // bumper lip
  box(halfWidthAt(nr, noseYBot + 0.06) * 1.92, 0.075, 0.09, blackTrim, 0, noseYBot + 0.05, nz + 0.01);
  // front canards at the bumper corners
  for (const sx of [1, -1]) {
    const hw = halfWidthAt(nr, noseYBot + 0.22);
    const can = box(hw * 0.5, 0.02, 0.16, carbonMat, sx * hw * 0.7, noseYBot + 0.24, nz + 0.03);
    can.rotation.x = -0.14;
  }
  // splitter
  const splitterW = halfWidthAt(nr, noseYBot) * 2 + 0.06;
  const splitter = put(new THREE.BoxGeometry(splitterW, 0.03, 1), carbonMat, 0, noseYBot - 0.02, nz);
  // splitter side fins
  for (const sx of [1, -1]) box(0.025, 0.11, 0.12, carbonMat, sx * (splitterW / 2 - 0.05), noseYBot + 0.07, nz + 0.02);
  // tow hook (red)
  box(0.045, 0.035, 0.045, redCal, -halfWidthAt(nr, noseYBot + 0.14) * 0.6, noseYBot + 0.15, nz + 0.03);
  // front plate
  {
    const py = noseYBot + 0.18;
    box(halfWidthAt(nr, py) * 0.55, 0.09, 0.015, M(0xf3f3f3), 0, py, nz + 0.05);
    box(halfWidthAt(nr, py) * 0.5, 0.015, 0.018, blackTrim, 0, py + 0.02, nz + 0.052);
  }

  /* ---------- REAR END ---------- */
  const tailYBot = tr[0], tailYTop = tr[4];
  const tailY = tailYBot + (tailYTop - tailYBot) * 0.55;
  const tailHW = halfWidthAt(tr, tailY);
  const tailH = Math.min(0.15, (tailYTop - tailYBot) * 0.34);
  for (const sx of [1, -1]) {
    // chrome bezel
    box(tailHW * 0.85, tailH * 1.35, 0.05, chrome, sx * tailHW * 0.55, tailY, tz - 0.005);
    // dark recess
    box(tailHW * 0.78, tailH * 1.2, 0.04, blackTrim, sx * tailHW * 0.55, tailY, tz - 0.032);
    // main red lens
    box(tailHW * 0.7, tailH, 0.02, tailMat, sx * tailHW * 0.55, tailY, tz - 0.048);
    // inner amber indicator
    box(tailHW * 0.15, tailH * 0.55, 0.022, amberMat, sx * tailHW * 0.24, tailY - tailH * 0.08, tz - 0.058);
    // reverse lens
    box(tailHW * 0.13, tailH * 0.45, 0.022, reverseMat, sx * tailHW * 0.42, tailY - tailH * 0.1, tz - 0.058);
    // vertical reflector
    box(0.02, tailH * 1.05, 0.02, tailMat, sx * (tailHW * 0.55 + tailHW * 0.32), tailY, tz - 0.05);
  }
  // centre light bar
  box(tailHW * 1.15, 0.024, 0.02, tailMat, 0, tailY, tz - 0.048);
  // rear bumper lip
  box(halfWidthAt(tr, tailYBot + 0.06) * 1.92, 0.075, 0.09, blackTrim, 0, tailYBot + 0.05, tz - 0.01);
  // diffuser with fins
  const diffW = halfWidthAt(tr, tailYBot) * 1.92;
  box(diffW, 0.11, 0.26, carbonMat, 0, tailYBot + 0.10, tz - 0.09);
  for (let k = -2; k <= 2; k++) box(0.016, 0.09, 0.24, carbonMat, k * diffW / 5.5, tailYBot + 0.10, tz - 0.115);
  // chrome exhaust tips
  {
    const exY = tailYBot + 0.09;
    const exX = halfWidthAt(tr, exY) * 0.6;
    const exGeo = new THREE.CylinderGeometry(0.052, 0.052, 0.14, 12).rotateX(Math.PI / 2);
    for (const sx of [1, -1]) {
      put(exGeo, chrome, sx * exX, exY, tz - 0.02);
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.14, 10).rotateX(Math.PI / 2), blackTrim);
      inner.position.set(sx * exX, exY, tz - 0.022); body.add(inner);
    }
  }
  // rear plate
  {
    const py = tailYBot + 0.24;
    box(halfWidthAt(tr, py) * 0.55, 0.09, 0.015, M(0xf3f3f3), 0, py, tz - 0.07);
    box(halfWidthAt(tr, py) * 0.5, 0.015, 0.018, blackTrim, 0, py - 0.02, tz - 0.072);
  }
  // rear badge
  box(0.045, 0.045, 0.02, chrome, 0, tailYBot + 0.38, tz - 0.075);

  /* ---------- SIDES: mirrors, handles, skirts, vent ---------- */
  {
    const mz = def.cab[0][0] - 0.15, ms = sampleCab(def, mz);
    const mhw = ms.wb + 0.02, mhy = ms.yb + 0.14;
    for (const sx of [1, -1]) {
      // mirror arm
      box(0.06, 0.02, 0.02, blackTrim, sx * (mhw + 0.04), mhy, mz);
      // mirror housing
      box(0.09, 0.07, 0.13, solid, sx * (mhw + 0.12), mhy, mz);
      // mirror glass
      box(0.008, 0.05, 0.11, glass, sx * (mhw + 0.168), mhy, mz);
    }
  }
  // door handles (chrome)
  for (const sx of [1, -1]) {
    const hw = halfWidthAt(sampleBody(rows, 0.35), 0.55);
    box(0.02, 0.04, 0.14, chrome, sx * (hw + 0.006), 0.6, 0.35);
  }
  // side skirt
  for (const sx of [1, -1]) {
    const midRow = sampleBody(rows, 0);
    const skirt = box(0.06, 0.11, def.wb * 0.95, solidNoDS, sx * (midRow[1] * 0.95), midRow[0] + 0.07, 0);
    skirt.rotation.z = sx * 0.08;
  }
  // B pillar
  const bp = sampleCab(def, def.bpillar), bpH = bp.yr - bp.yb;
  if (bpH > 0.08) for (const sx of [1, -1]) box(0.04, bpH, 0.06, solid, sx * (bp.wb * 0.97), bp.yb + bpH / 2, def.bpillar);
  // vents
  if (def.vents) {
    const v = def.vents, hw = halfWidthAt(sampleBody(rows, v.z), v.y);
    for (const sx of [1, -1]) {
      box(0.02, v.h * 0.9, v.l, blackTrim, sx * (hw + 0.005), v.y, v.z);
      box(0.026, 0.018, v.l * 0.9, chrome, sx * (hw + 0.008), v.y, v.z);
      box(0.026, 0.018, v.l * 0.9, chrome, sx * (hw + 0.008), v.y + v.h * 0.5, v.z);
    }
  }
  // hood scoop
  if (def.scoop) {
    const s = def.scoop, sy = sampleBody(rows, s.z)[4];
    box(s.w, s.h, s.l, solid, 0, sy + s.h / 2, s.z);
    // scoop mouth
    box(s.w * 0.85, s.h * 0.7, 0.02, blackTrim, 0, sy + s.h * 0.55, s.z + s.l * 0.5);
    // mesh slats
    for (let k = 0; k < 3; k++) {
      box(s.w * 0.8, 0.005, 0.015, carbonMat, 0, sy + s.h * 0.55, s.z + s.l * 0.5 + 0.012 + k * 0.008);
    }
  }
  // hood vents for non-scoop cars
  if (!def.scoop) {
    const hx = 0.35;
    const hy = sampleBody(rows, 1.1)[4];
    for (const sx of [1, -1]) {
      box(0.2, 0.022, 0.24, blackTrim, sx * hx, hy + 0.005, 1.1);
      for (let k = 0; k < 3; k++) box(0.17, 0.014, 0.02, carbonMat, sx * hx, hy + 0.018, 1.02 + k * 0.08);
    }
  }
  // antenna
  put(new THREE.CylinderGeometry(0.006, 0.006, 0.32, 6), blackTrim, -0.14, cr.yr + 0.16, cr.z + 0.25);
  // wipers
  for (const sx of [1, -1]) {
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, 0.36), blackTrim);
    w.position.set(sx * 0.2, cf.yb - 0.01, zf + 0.06);
    w.rotation.y = sx * 0.28;
    body.add(w);
  }
  // fuel cap (chrome)
  {
    const fz = -1.8;
    const hw = halfWidthAt(sampleBody(rows, fz), 0.55);
    for (const sx of [1, -1]) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.014, 14).rotateZ(Math.PI / 2), chrome);
      cap.position.set(sx * (hw + 0.006), 0.6, fz);
      body.add(cap);
    }
  }

  /* ---------- WING ---------- */
  const ws = def.wingSpec;
  const wingY = sampleBody(rows, ws.z)[4] - 0.005;
  const wing = new THREE.Group();
  wing.position.set(0, wingY, ws.z);
  body.add(wing);
  // uprights
  for (const sx of [1, -1]) box(0.05, ws.h, 0.08, carbonMat, sx * ws.hw * 0.62, ws.h / 2, 0, wing);
  const plane = new THREE.Group();
  plane.position.y = ws.h;
  wing.add(plane);
  box(ws.hw * 2, 0.032, ws.chord, carbonMat, 0, 0, 0, plane);
  // endplates
  for (const sx of [1, -1]) {
    box(0.02, 0.18, ws.chord + 0.08, carbonMat, sx * (ws.hw + 0.012), 0.0, 0, plane);
    // endplate accent stripe
    box(0.024, 0.006, ws.chord * 0.7, suitAccent, sx * (ws.hw + 0.02), 0.045, 0, plane);
  }
  // gurney flap
  box(ws.hw * 2, 0.02, 0.032, suitAccent, 0, 0.026, -ws.chord * 0.44, plane);

  /* ---------- INTERIOR ---------- */
  const intW = Math.min(cm.wb, cm.wr) * 0.94;
  box(intW * 2, 0.012, zf - zr - 0.06, interiorMat, 0, floorY + 0.006, zMid);
  body.add(buildCockpitInterior(def, scl, floorY, zMid, zf, zr, intW, body));
  const driver = buildDriverRig(scl);
  driver.rig.position.set(-0.30, floorY + 0.02, zMid - 0.02);
  body.add(driver.rig);

  /* ---------- WHEELS ---------- */
  const lay = wheelLayout(def), wheels = [];
  for (const axle of ['front', 'rear']) {
    const L = lay[axle], front = axle === 'front';
    const flareGeo = new THREE.TorusGeometry(L.R + 0.06, 0.055, 6, 16, Math.PI).rotateY(Math.PI / 2);
    for (const sx of [1, -1]) {
      const wp = new THREE.Group(), cg = new THREE.Group(), roll = new THREE.Group();
      wp.position.set(sx * L.x, L.R, L.z);
      wp.add(cg); cg.add(roll); root.add(wp);
      const alloy = buildAlloyWheel(L, front);
      // alloy.grp contains a rolling group + brake disc/caliper that don't spin
      // Split them: rolling goes into roll group, static goes into cg
      const rollingMeshes = Array.from(alloy.grp.children[0].children);
      for (const m of rollingMeshes) roll.add(m);
      for (let k = 1; k < alloy.grp.children.length; k++) cg.add(alloy.grp.children[k]);
      // fender flare
      const flare = put(flareGeo, solid, sx * (L.x + 0.02), L.R, L.z);
      wheels.push({ pivot: wp, camberG: cg, roll, flare, sx, axle, front, R: L.R, baseX: L.x });
    }
  }

  return {
    def, root, pivot, body, paint, solid, wheels, wing, plane, splitter, lay, nz,
    nose: nr, tune: null, toe: { front: 0, rear: 0 }, rearX: lay.rear.x, bb,
    driverRig: driver.rig, swSpin: driver.swSpin,
  };
}
function applyModel(t, m = model) {
  if (!m) return;
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
function setModel(def, hex, t) {
  if (model) {
    carGroup.remove(model.root);
    model.root.traverse(o => o.geometry && o.geometry.dispose());
    model.paint.map.dispose(); model.paint.dispose(); model.solid.dispose();
  }
  model = buildModel(def, hex);
  carGroup.add(model.root);
  applyModel(t);
}

/* ================= SAVE / STATE ================= */
const SAVE_KEY = 'driftrun-save-v6';
const save = { cash: 3000, owned: ['hachi'], car: 'hachi', tier: 0, paint: {}, tune: {}, map: 'sunset' };
try { Object.assign(save, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')); } catch {}
if (!Array.isArray(save.owned)) save.owned = ['hachi'];
if (!save.owned.includes('hachi')) save.owned.push('hachi');
if (!CAR_DEFS[save.car] || !save.owned.includes(save.car)) save.car = 'hachi';
if (!TIERS[save.tier]) save.tier = 0;
if (!MAPS.find(m => m.id === save.map)) save.map = 'sunset';
save.set = { ctrl: 'tilt', sens: 1, flip: false, vib: true, mute: false, shadows: false, ...(save.set || {}) };
save.tips = save.tips || 0;
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch {} };
const paintOf = id => save.paint[id] ?? CAR_DEFS[id].paint;
const tuneOf = id => ({ ...defaultTune(CAR_DEFS[id]), ...(save.tune[id] || {}) });
const PAINTS = [0xf2f2f2, 0xff4d6d, 0xffb703, 0x2f7dff, 0x6df0c2, 0x9b5de5, 0xff7b00, 0xd62828, 0x00bbf9, 0x23252b];

let carDef = CAR_DEFS[save.car], tune = tuneOf(save.car), tier = save.tier, stats = derive(TIERS[tier], carDef, tune);
const S = { x: 0, z: -95, h: Math.PI / 2, vx: 0, vz: 0, steer: 0, loose: 0, rpm: 0.25, sp: 0, slip: 0, thr: 0, vf: 0, hb: false, onRoad: true };
const SUS = { pitch: 0, pv: 0, roll: 0, rv: 0, heave: 0, hv: 0 };
let camH = S.h, shake = 0, crashCd = 0, slowT = 0, ran = false;
let pending = 0, total = 0, driftT = 0, gap = 0, mult = 1;
let boost = 1, wet = false, camMode = 0, photo = false, orbit = 0, zonesCleared = 0;
let menu = 'home', orbitPitch = 0.22, orbitDist = 7.6, viewOff = 0, drag = null;
let mode = 'free', timeLeft = 90, runScore = 0, ghostRec = [], ghostBest = [], ghostScore = 0, ghostT = 0, ghostRecT = 0;
let got = {}; try { got = JSON.parse(localStorage.getItem('driftrun-ach') || '{}'); } catch {}
const ACHS = { long: 'Drift 10s in one combo', k5: 'Bank 5,000 at once', zone3: 'Clear 3 zones', wall: 'First wall ride', combo: 'Reach x6', racer: 'Finish a race' };
let best = 0; try { best = +localStorage.getItem('driftrun-best') || 0; } catch {}
let raceBests = {}; try { raceBests = JSON.parse(localStorage.getItem('driftrun-race-bests') || '{}'); } catch {}
if (!raceBests || typeof raceBests !== 'object') raceBests = {};
function raceBestOf(id) {
  const key = id || save.map;
  if (!key || typeof key !== 'string') return 0;
  return safeNum(raceBests[key], 0);
}
const saveRaceBest = (id, t) => {
  if (!id || typeof id !== 'string') return;
  const n = safeNum(t, 0);
  if (n > 0) { raceBests[id] = n; try { localStorage.setItem('driftrun-race-bests', JSON.stringify(raceBests)); } catch {} }
};

function hudCar() {
  document.querySelectorAll('#classes .cls').forEach((b, i) => {
    b.classList.toggle('on', i === tier); b.setAttribute('aria-pressed', String(i === tier));
    b.title = 'Speed class ' + (i + 1) + ': ' + TIERS[i].name;
    const sm = b.querySelector('small');
    if (sm) sm.textContent = Math.round(derive(TIERS[i], carDef, tune).top * 3.6);
  });
}
function recalc() { stats = derive(TIERS[tier], carDef, tune); hudCar(); }
function equip(id) { save.car = id; carDef = CAR_DEFS[id]; tune = tuneOf(id); setModel(carDef, paintOf(id), tune); recalc(); persist(); }
function showEquipped() { if (!model || model.def !== carDef) setModel(carDef, paintOf(carDef.id), tune); }
function setTier(i) { tier = i; save.tier = i; recalc(); persist(); toast('SPEED CLASS ' + (i + 1) + '  ' + Math.round(stats.top * 3.6) + ' km/h'); }
function setMap(id) {
  save.map = id; persist();
  currentMap = MAPS.find(m => m.id === id) || MAPS[0];
  buildWorld(currentMap);
  buildRaceGates(currentMap);
  reset();
}
function reset() {
  const t = currentMap.track;
  const [x0, z0] = t[0], [x1, z1] = t[1 % t.length];
  const h0 = Math.atan2(x1 - x0, z1 - z0);
  Object.assign(S, { x: x0, z: z0, h: h0, vx: 0, vz: 0, steer: 0, loose: 0 });
  camH = S.h; pending = 0; driftT = 0; gap = 0; boost = 1; ghostT = 0; ghostRecT = 0;
  if (mode === 'timed') { timeLeft = 90; runScore = 0; ghostRec = []; }
  if (mode === 'race') { raceState.cp = 0; raceState.time = 0; raceState.active = false; raceState.done = false; updateGateColors(); }
}
function syncHud() {
  const hh = $('hud'); if (hh) hh.style.display = (photo || menu) ? 'none' : '';
  const c = document.body.classList; c.toggle('inmenu', !!menu); c.toggle('playing', !menu); c.toggle('photo', !!photo && !menu);
}

/* ================= ON-ROAD CHECK ================= */
function isOnRoad(x, z) {
  if (!trackSamples.length) return true;
  const rr = (ROAD_HALF + 2) * (ROAD_HALF + 2);
  for (let i = 0; i < trackSamples.length; i++) {
    const s = trackSamples[i];
    const dx = x - s.x, dz = z - s.z;
    if (dx * dx + dz * dz < rr) return true;
  }
  return false;
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
  const n = Math.max(1, Math.ceil(dt / 0.01)), h = dt / n, w = b.w, z = b.z, wr = w * 1.15, wh = w * 1.1;
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
    else if (k === 'html') el.innerHTML = v;
    else if (v !== false && v != null) el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c != null && c !== false) el.append(c.nodeType ? c : document.createTextNode(c));
  return el;
};
const hex6 = c => '#' + c.toString(16).padStart(6, '0');
function keepScroll(fn) { const old = mLeft.querySelector('.mscroll'); const st = old ? old.scrollTop : mLeft.scrollTop; fn(); mLeft.scrollTop = st; }
const gbtn = (icon, label, sub, fn, cls = '') => h('button', { class: 'gbtn ' + cls, type: 'button', onclick: fn }, h('span', { class: 'ic' }, icon), h('span', { class: 'tx' }, h('span', {}, label), sub ? h('small', {}, sub) : null));
const sbtn = (label, fn, cls = '') => h('button', { class: 'gbtn sm ' + cls, type: 'button', onclick: fn }, h('span', { class: 'tx' }, h('span', {}, label)));
const mHead = (title, sub) => h('header', {}, h('h1', { class: 'm-title' }, title), sub ? h('p', { class: 'm-sub' }, sub) : null);
const mSec = (title, ...kids) => h('section', { class: 'm-sec' }, title ? h('h3', {}, title) : null, ...kids);
const footSet = (...kids) => mFoot.replaceChildren(...kids.filter(Boolean));
const clearFoot = () => mFoot.replaceChildren();
const mStatus = (text) => h('div', { class: 'm-status', role: 'status' }, text);

function trackPreviewSvg(map, size = 96) {
  const pts = map.track;
  const pad = 10;
  const maxR = Math.max(1, ...pts.map(p => Math.hypot(p[0], p[1])));
  const scale = (size - pad * 2) / (maxR * 2);
  const cx = size / 2, cy = size / 2;
  let d = '';
  for (let i = 0; i < pts.length; i++) {
    const x = cx + pts[i][0] * scale;
    const y = cy + pts[i][1] * scale;
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
  }
  d += 'Z';
  const stroke = map.night ? '#4ec8ff' : '#ffd23f';
  return '<svg viewBox="0 0 ' + size + ' ' + size + '" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">' +
    '<path d="' + d + '" fill="none" stroke="' + stroke + '" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>' +
    '<path d="' + d + '" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>' +
    '</svg>';
}

function sfx(kind) {
  if (!audio || save.set.mute) return;
  const c = audio.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
  const f = { click: 520, pop: 700, back: 380, pickup: 980, hit: 150, score: 780, grow: 1150 }[kind] || 520;
  o.type = kind === 'hit' ? 'square' : 'triangle'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.6, t + 0.08);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
  o.connect(g); g.connect(audio.master); o.start(t); o.stop(t + 0.17);
}
addEventListener('click', e => { const b = e.target.closest && e.target.closest('button'); if (b) sfx(b.classList.contains('cls') ? 'pop' : 'click'); });

function updateMenuTopBar() {
  const c = $('mCash'), b = $('mBest');
  if (c) c.textContent = '$' + save.cash.toLocaleString();
  if (b) b.textContent = best.toLocaleString();
}
function openMenu(screen) {
  menu = screen; for (const k in keys) keys[k] = false; releaseTouch();
  menuEl.classList.remove('off'); syncHud(); updateMenuTopBar();
  if (screen === 'shop') { shopSel = save.car; shopMsg = ''; setModel(CAR_DEFS[shopSel], paintOf(shopSel), tuneOf(shopSel)); }
  else showEquipped();
  renderMenu();
}
function closeMenu() {
  showEquipped(); menu = null;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  menuEl.classList.add('off'); syncHud(); initAudio();
  if (touchUI) {
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
  try {
    if (menu === 'home') renderHome();
    else if (menu === 'shop') renderShop();
    else if (menu === 'edit') renderEdit();
    else if (menu === 'settings') renderSettings();
    else if (menu === 'maps') renderMaps();
    else if (menu === 'modes') renderModes();
    else if (menu === 'mpsetup') renderMpSetup();
    else if (menu === 'pause') renderPause();
    else if (menu === 'mpend') renderMpEnd();
  } catch (err) {
    console.error('menu error:', err);
    mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('MENU ERROR'), h('p', { class: 'm-sub' }, String(err && err.message || err))));
  }
}

function renderHome() {
  wheelEl = null;
  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead(h('span', {}, 'DRIFT '), h('span', {}, 'RUN')),
      h('p', { class: 'm-sub' }, 'Slide it, hold it, chain it. Race the clock or just go sideways.'),
      h('div', { class: 'm-actions' },
        gbtn('>', 'Play', currentMap.name + ' - pick mode', () => openMenu('maps'), 'primary'),
        gbtn('*', 'Shop', 'Buy new cars with banked cash', () => openMenu('shop')),
        gbtn('#', 'Garage', 'Tune, paint, and set stance', () => openMenu('edit')),
        gbtn('o', 'Multiplayer', 'Split-screen, 2 to 4 players', () => openMenu('mpsetup'), 'blue'),
        gbtn('^', 'Settings', 'Input, camera, audio', () => openMenu('settings'), 'blue')
      )
    )
  );
  footSet(
    mStatus(carDef.name + ' - class ' + (tier + 1) + ' (' + TIERS[tier].name + ') - ' + currentMap.name),
    ran ? sbtn('Resume', closeMenu, 'blue') : null
  );
}
const tog = (label, hint, get, set) => {
  const b = h('button', { class: 'tog' + (get() ? ' on' : ''), type: 'button', role: 'switch', 'aria-checked': String(!!get()), 'aria-label': label, onclick: () => { set(!get()); b.classList.toggle('on', !!get()); b.setAttribute('aria-checked', String(!!get())); } }, h('i'));
  return h('div', { class: 'trow' }, h('div', { class: 'tl' }, h('b', {}, label), hint ? h('div', { class: 'hint' }, hint) : null), b);
};
const segRow = (label, hint, opts, get, set) => {
  const wrap = h('div', { class: 'seg' });
  opts.forEach((o, i) => wrap.append(h('button', { class: 'segb' + (get() === i ? ' sel' : ''), type: 'button', onclick: () => { set(i); wrap.querySelectorAll('.segb').forEach((x, j) => x.classList.toggle('sel', j === i)); } }, o)));
  return h('div', { class: 'ctl' }, h('div', { class: 'clab' }, h('span', {}, label)), wrap, hint ? h('div', { class: 'hint' }, hint) : null);
};
function setWet(v) { wet = v; scene.fog.color.setHex(wet ? 0x8a93a8 : HORIZON); sun.intensity = wet ? 1.1 : 2.4; }
function setMute(v) { save.set.mute = v; persist(); if (audio) audio.master.gain.value = v ? 0 : 1; }
function setPhoto(v) { photo = v; syncHud(); if (v && touchUI) showTip('Tap left or right to bounce the suspension'); }
function setShadows(v) {
  save.set.shadows = v; persist();
  renderer.shadowMap.enabled = v;
  sun.castShadow = v;
  scene.traverse(o => { if (o.material) { const mm = Array.isArray(o.material) ? o.material : [o.material]; mm.forEach(x => x.needsUpdate = true); } });
}
function resetSaveData() {
  if (!confirm('Reset all saved data? This wipes cash, cars, tunes, and best times.')) return;
  try { localStorage.removeItem(SAVE_KEY); localStorage.removeItem('driftrun-race-bests'); localStorage.removeItem('driftrun-best'); localStorage.removeItem('driftrun-ach'); } catch {}
  location.reload();
}
function renderSettings() {
  const secs = [];
  if (touchUI) {
    wheelEl = h('div', { class: 'wheel', 'aria-hidden': 'true' });
    const status = h('div', { class: 'hint' }, '');
    const upd = () => { status.textContent = save.set.ctrl !== 'tilt' ? 'Steering with on-screen buttons.' : (tiltOn && tiltSeen) ? 'Tilt sensor working.' : 'Tap Tilt phone to switch the sensor on.'; };
    upd();
    secs.push(mSec('Phone steering',
      segRow('Steering', 'Tilt: left half brakes, right half drives.', ['Tilt phone', 'Buttons'], () => (save.set.ctrl === 'tilt' ? 0 : 1), i => {
        save.set.ctrl = i === 0 ? 'tilt' : 'btn'; persist(); applyCtrl();
        if (i === 0) enableTilt().then(() => { recenter(); upd(); }); else upd();
      }),
      segRow('Tilt sensitivity', 'Soft means turn further for full lock.', ['Soft', 'Normal', 'Sharp'], () => save.set.sens, i => { save.set.sens = i; persist(); }),
      tog('Flip tilt direction', 'Turn this on if the car steers the wrong way.', () => save.set.flip, v => { save.set.flip = v; persist(); }),
      h('div', { style: 'display:flex;align-items:center;gap:16px;margin-top:12px' },
        wheelEl,
        h('div', { style: 'flex:1' },
          h('div', { style: 'display:flex;gap:8px' }, sbtn('Recenter', () => { recenter(); upd(); }, 'blue')),
          status))
    ));
  } else {
    secs.push(mSec('Keyboard', h('div', { class: 'ctl' }, h('div', { class: 'hint', style: 'line-height:2' }, 'W / S  gas and brake   -   A / D  steer', h('br'), 'Space  handbrake   -   Shift  boost', h('br'), '1 / 2 / 3  speed class   -   Esc  menu'))));
  }
  const game = [
    segRow('Camera', null, ['Chase', 'Hood', 'Far'], () => camMode, i => { camMode = i; }),
    tog('Shadows', 'Nicer look, heavier. Turn off if slow.', () => save.set.shadows, setShadows),
    tog('Rain', 'Wet roads: less grip.', () => wet, setWet),
    tog('Sound', null, () => !save.set.mute, v => setMute(!v)),
  ];
  if (touchUI) game.push(tog('Vibration', 'Buzz on crashes.', () => save.set.vib, v => { save.set.vib = v; persist(); if (v && navigator.vibrate) navigator.vibrate(30); }));
  secs.push(mSec('Gameplay', ...game));
  const acts = [sbtn('Reset car', () => { reset(); closeMenu(); }, 'blue')];
  if (document.fullscreenEnabled) acts.push(sbtn('Fullscreen', () => { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {}); }, 'blue'));
  acts.push(sbtn('Reset save', resetSaveData, 'red'));
  secs.push(mSec('Actions', h('div', { class: 'chips' }, ...acts)));
  mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('SETTINGS', 'Dial in the feel. Changes save automatically.'), ...secs));
  footSet(mStatus(touchUI ? 'Touch input detected' : 'Keyboard and mouse'), sbtn('Back', () => openMenu('home')));
}
function renderMaps() {
  const cards = MAPS.map((mapDef, i) => {
    const sel = mapDef.id === save.map;
    return h('button', { class: 'map-card' + (sel ? ' sel' : ''), type: 'button', onclick: () => { setMap(mapDef.id); renderMaps(); } },
      h('span', { class: 'm-thumb t' + (i + 1) }, h('span', { class: 'm-thumb-svg', html: trackPreviewSvg(mapDef) })),
      h('span', { class: 'm-info' }, h('b', {}, mapDef.name), h('span', {}, mapDef.desc)),
      h('span', { class: 'm-go' }, sel ? 'SELECTED' : 'SELECT'));
  });
  mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('PICK A MAP'), h('p', { class: 'm-sub' }, 'Tap a map to select it, then hit Continue to choose a mode.'), h('div', { class: 'm-list' }, ...cards)));
  footSet(
    mStatus('Current: ' + currentMap.name),
    sbtn('Back', () => openMenu('home')),
    sbtn('Continue', () => openMenu('modes'), 'primary')
  );
}
function renderModes() {
  const rb = raceBestOf();
  const raceSub = 'Circuit - best here is ' + (rb > 0 ? rb.toFixed(2) + 's' : 'no time yet');
  mLeft.replaceChildren(
    h('div', { class: 'm-screen' },
      mHead(h('span', {}, currentMap.name)),
      h('p', { class: 'm-sub' }, 'How do you want to drive?'),
      h('div', { class: 'm-actions' },
        gbtn('>', 'Solo drift', 'Freeform. Score pads, combos.', () => { mode = 'free'; reset(); closeMenu(); }, 'primary'),
        gbtn('T', 'Timed drift', '90 seconds, race your ghost.', () => { mode = 'timed'; reset(); closeMenu(); }, 'green'),
        gbtn('R', 'Race', raceSub, () => { mode = 'race'; reset(); buildRaceGates(currentMap); closeMenu(); }, 'blue'),
        gbtn('o', 'Multiplayer', 'Split-screen, 2 to 4 players', () => openMenu('mpsetup'), 'blue')
      )
    )
  );
  footSet(mStatus('Class ' + (tier + 1) + ' - ' + TIERS[tier].name + ' - ' + Math.round(stats.top * 3.6) + ' km/h'), sbtn('Back', () => openMenu('maps')));
}
let shopSel = null, shopMsg = '';
function renderShop() {
  const sel = CAR_DEFS[shopSel], owned = save.owned.includes(sel.id);
  const cards = CAR_ORDER.map(id => {
    const d = CAR_DEFS[id], own = save.owned.includes(id);
    const equipped = id === save.car;
    const status = equipped ? 'Equipped' : own ? 'Owned' : '$' + d.price.toLocaleString();
    return h('button', { class: 'card' + (id === shopSel ? ' sel' : ''), type: 'button', onclick: () => { shopSel = id; shopMsg = ''; setModel(d, paintOf(id), tuneOf(id)); keepScroll(renderShop); } },
      h('span', { class: 'cname' }, d.name), h('span', { class: 'ctag' }, status), h('span', { class: 'cdesc' }, d.tag));
  });
  mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('SHOP'), h('p', { class: 'm-sub' }, 'Nine cars to choose from. Earn cash by banking drift points.'), h('div', { class: 'm-list' }, ...cards)));
  renderStats(sel, tuneOf(sel.id));
  updateMenuTopBar();
  const act = owned ? (sel.id === save.car ? sbtn('Equipped', () => {}, 'dis') : sbtn('Equip', () => { equip(sel.id); shopMsg = ''; keepScroll(renderShop); }, 'primary')) : sbtn('Buy - $' + sel.price.toLocaleString(), () => buy(sel.id), 'primary');
  const sell = owned && sel.price > 0 ? sbtn('Sell - $' + Math.floor(sel.price * 0.5).toLocaleString(), () => sellCar(sel.id), 'red') : null;
  footSet(mStatus(shopMsg || (owned ? (sel.id === save.car ? 'Currently equipped.' : 'Owned - equip or sell.') : 'Price $' + sel.price.toLocaleString())), sell, act, sbtn('Back', () => openMenu('home')));
}
function buy(id) {
  const d = CAR_DEFS[id];
  if (save.cash < d.price) shopMsg = 'Need $' + (d.price - save.cash).toLocaleString() + ' more.';
  else { save.cash -= d.price; save.owned.push(id); equip(id); shopMsg = d.name + ' is yours!'; }
  keepScroll(renderShop); updateMenuTopBar();
}
function sellCar(id) {
  const d = CAR_DEFS[id]; if (!save.owned.includes(id) || d.price <= 0) return;
  const price = Math.floor(d.price * 0.5);
  save.cash += price; save.owned = save.owned.filter(x => x !== id); delete save.tune[id];
  if (save.car === id) equip('hachi');
  shopSel = 'hachi'; setModel(CAR_DEFS.hachi, paintOf('hachi'), tuneOf('hachi'));
  shopMsg = d.name + ' sold for $' + price.toLocaleString() + '.';
  persist(); keepScroll(renderShop); updateMenuTopBar();
}
function renderStats(def, t) {
  const s = derive(TIERS[tier], def, t), st = derive(TIERS[tier], def, defaultTune(def));
  const rows = Object.entries(s.ratings).map(([k, v]) => {
    const d = Math.round((v - st.ratings[k]) * 100);
    return h('div', { class: 'stat' },
      h('div', { class: 'slab' }, h('span', {}, k), h('span', { class: 'delta ' + (d > 0 ? 'up' : d < 0 ? 'dn' : '') }, d === 0 ? '' : (d > 0 ? '+' : '-') + Math.abs(d))),
      h('div', { class: 'bar' }, h('i', { style: 'width:' + Math.round(v * 100) + '%' })));
  });
  mRight.replaceChildren(h('h3', {}, def.name), h('div', { class: 'dim' }, 'Class ' + (tier + 1) + ' - ' + TIERS[tier].name), ...rows, h('div', { class: 'bal' }, 'Balance: ', h('b', {}, s.balance)), h('div', { class: 'dim', style: 'margin-top:6px' }, Math.round(s.top * 3.6) + ' km/h top speed'));
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
    const b = h('button', { class: 'sw' + (paintOf(carDef.id) === c ? ' sel' : ''), type: 'button', 'aria-label': 'Paint ' + hex6(c), style: 'background:' + hex6(c), onclick: () => { save.paint[carDef.id] = c; repaint(model, c); persist(); swatches.querySelectorAll('.sw').forEach(x => x.classList.toggle('sel', x === b)); } });
    swatches.append(b);
  });
  const presets = h('div', { class: 'chips' }, ...Object.keys(PRESETS).map(name => h('button', { class: 'chip', type: 'button', onclick: () => { tune = { ...defaultTune(carDef), ...PRESETS[name]() }; save.tune[carDef.id] = { ...tune }; persist(); applyModel(tune); recalc(); SUS.hv -= 0.2; keepScroll(renderEdit); } }, name)));
  const carChips = h('div', { class: 'chips' }, ...save.owned.map(id => h('button', { class: 'chip' + (id === save.car ? ' sel' : ''), type: 'button', onclick: () => { equip(id); renderEdit(); } }, CAR_DEFS[id].name)));
  const secs = [
    mSec('Car', carChips),
    mSec('Paint', swatches),
    mSec('Quick presets', presets),
    ...TUNE_GROUPS.map(g => mSec(g.title, ...g.items.map(control))),
  ];
  mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('GARAGE'), h('p', { class: 'm-sub' }, 'Tune the setup and paint the livery.'), ...secs));
  renderStats(carDef, tune);
  footSet(mStatus(carDef.name + ' - ' + save.owned.length + ' car' + (save.owned.length === 1 ? '' : 's') + ' owned'), sbtn('Stock', () => { tune = defaultTune(carDef); save.tune[carDef.id] = { ...tune }; persist(); applyModel(tune); recalc(); keepScroll(renderEdit); }, 'blue'), sbtn('Back', () => openMenu('home')));
}
const mpCfg = { mode: 'duel', n: 2, first: 3, cls: 1, cars: [save.car, 'corsa', 'muscle', 'rallye'], ...(save.mp || {}) };
mpCfg.cars = mpCfg.cars.map(id => (CAR_DEFS[id] ? id : 'hachi'));
const saveMp = () => { save.mp = { ...mpCfg }; persist(); };
const padList = () => (navigator.getGamepads ? [...navigator.getGamepads()].filter(Boolean) : []);
function renderMpSetup() {
  const cfg = mpCfg, again = () => keepScroll(renderMpSetup);
  const modes = [
    ['duel', 'Side-Hit Duel', 'Ram the side of a rival car to score. Head-ons and nudges do not count.'],
    ['snake', 'Orb Snake', 'Grab orbs to grow a tail of car copies. Hit someone else tail and you are out.']
  ].map(([id, name, desc]) => h('button', { class: 'card' + (cfg.mode === id ? ' sel' : ''), type: 'button', onclick: () => { cfg.mode = id; cfg.first = id === 'duel' ? 3 : 2; saveMp(); again(); } },
    h('span', { class: 'cname' }, name), h('span', { class: 'ctag' }, cfg.mode === id ? 'Selected' : 'Choose'), h('span', { class: 'cdesc' }, desc)));
  const carBtn = (i, d) => h('button', { class: 'gbtn sm', type: 'button', style: 'padding:6px 10px;min-width:36px;justify-content:center', 'aria-label': PNAMES[i] + (d < 0 ? ' previous' : ' next') + ' car', onclick: () => { const k = CAR_ORDER.indexOf(cfg.cars[i]); cfg.cars[i] = CAR_ORDER[(k + d + CAR_ORDER.length) % CAR_ORDER.length]; saveMp(); again(); } }, h('span', { class: 'tx' }, h('span', {}, d < 0 ? '<' : '>')));
  const pads = padList().length;
  const players = Array.from({ length: cfg.n }, (_, i) => h('div', { class: 'prow' },
    h('i', { class: 'pdot', style: 'background:' + hex6(PCOLORS[i]) }),
    h('b', {}, PNAMES[i]), carBtn(i, -1), h('span', { class: 'pcar' }, CAR_DEFS[cfg.cars[i]].name), carBtn(i, 1),
    h('span', { class: 'pkeys' }, KEYMAPS[i].name + (pads > i ? '  -  gamepad connected' : ''))));
  const secs = [
    mSec('Game mode', ...modes),
    mSec('Match',
      segRow('Players', 'Split-screen on one device.', ['2', '3', '4'], () => cfg.n - 2, i => { cfg.n = i + 2; saveMp(); again(); }),
      segRow('First to', 'Rounds needed to win.', ['1', '2', '3'], () => cfg.first - 1, i => { cfg.first = i + 1; saveMp(); }),
      segRow('Speed class', 'Same stats for everybody.', TIERS.map((t, i) => (i + 1) + ' - ' + t.name), () => cfg.cls, i => { cfg.cls = i; saveMp(); })),
    mSec('Players', ...players, h('div', { class: 'hint', style: 'margin-top:10px;font-size:12px;opacity:.65;line-height:1.45' }, touchUI ? 'On a phone, P1 uses tilt or the on-screen zones.' : 'Share the keyboard, or plug in gamepads.'))
  ];
  mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('MULTIPLAYER'), h('p', { class: 'm-sub' }, 'Split-screen for two to four players on one device.'), ...secs));
  footSet(mStatus(cfg.n + ' players - first to ' + cfg.first + ' - class ' + (cfg.cls + 1)), sbtn('Back', () => openMenu('modes')), sbtn('Start', startMP, 'primary'));
}
function renderPause() {
  mLeft.replaceChildren(h('div', { class: 'm-overlay' }, h('div', { class: 'pause-card' },
    h('h1', { class: 'm-title' }, 'PAUSED'),
    h('p', { class: 'm-sub', style: 'text-align:left;max-width:none' }, 'Esc to resume.'),
    h('div', { class: 'm-actions' },
      gbtn('>', 'Resume', null, closeMenu, 'primary'),
      gbtn('R', 'Restart match', null, startMP),
      gbtn('S', save.set.mute ? 'Sound: off' : 'Sound: on', null, () => { setMute(!save.set.mute); renderPause(); }, 'blue'),
      gbtn('X', 'Quit to menu', null, quitMP, 'red')))));
}
function renderMpEnd() {
  const w = mp ? mp.m.winner : 0, sc = mp ? mp.m.scores : [];
  mLeft.replaceChildren(h('div', { class: 'm-overlay' }, h('div', { class: 'pause-card' },
    h('h1', { class: 'm-title', style: 'color:' + hex6(PCOLORS[w]) }, PNAMES[w] + ' WINS'),
    h('p', { class: 'm-sub', style: 'text-align:left;max-width:none' }, sc.map((v, i) => PNAMES[i] + '  ' + v).join('   -   ')),
    h('div', { class: 'm-actions' }, gbtn('R', 'Rematch', null, startMP, 'primary'), gbtn('X', 'Quit to menu', null, quitMP, 'red')))));
}

/* ================= INPUT ================= */
const keys = {};
const K = (...c) => c.some(x => keys[x]);
addEventListener('keydown', e => {
  initAudio();
  if (e.code === 'Escape') { e.preventDefault(); if (!e.repeat) toggleMenu(); return; }
  if (menu) return;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  keys[e.code] = true;
  if (mp) { if (e.code === 'KeyM') setMute(!save.set.mute); return; }
  if (e.code === 'KeyR') reset();
  if (e.code === 'KeyC') camMode = (camMode + 1) % 3;
  if (e.code === 'KeyP') setPhoto(!photo);
  if (e.code === 'KeyG') setWet(!wet);
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
const cog = $('mCog'); if (cog) cog.addEventListener('click', () => { if (menu === 'settings') openMenu('home'); else openMenu('settings'); });

const dial = (() => {
  const svg = $('dial'); if (!svg) return null;
  const NS = 'http://www.w3.org/2000/svg', C = 100, A0 = -135, SW = 270;
  const pt = (r, deg) => [C + r * Math.sin(deg * D2R_), C - r * Math.cos(deg * D2R_)];
  const mk = (tag, at, par = svg) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); par.append(e); return e; };
  const pts = Array.from({ length: 12 }, (_, i) => pt(96, i * 30 + 15).join(',')).join(' ');
  mk('polygon', { points: pts, fill: '#fff', stroke: '#0b0820', 'stroke-width': 7, 'stroke-linejoin': 'round' });
  mk('path', { d: 'M' + pt(91, A0 + SW * 0.7) + ' A91 91 0 0 1 ' + pt(91, A0 + SW) + ' L' + pt(82, A0 + SW) + ' A82 82 0 0 0 ' + pt(82, A0 + SW * 0.7) + ' Z', fill: '#e3262e' });
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
  const el = $('tip'); if (!el) return;
  el.textContent = text || (save.set.ctrl === 'tilt' ? 'Tilt to steer - Left half is BRAKE - Right half is GAS' : 'Steer - GAS - BRAKE');
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
}
const holders = [];
function hold(el, apply, onDown) {
  if (!el) return;
  const ids = new Set(), set = () => apply(ids.size > 0);
  el.addEventListener('pointerdown', e => { e.preventDefault(); ids.add(e.pointerId); try { el.setPointerCapture(e.pointerId); } catch {} set(); if (onDown) onDown(); });
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
const reCal = () => { calibrateNext = true; };
addEventListener('orientationchange', reCal);
if (screen.orientation && screen.orientation.addEventListener) screen.orientation.addEventListener('change', reCal);
const btnSettings = $('btnSettings'); if (btnSettings) btnSettings.addEventListener('click', toggleMenu);
const photoX = $('photoX'); if (photoX) photoX.addEventListener('click', () => setPhoto(false));
document.querySelectorAll('#classes .cls').forEach(b => b.addEventListener('click', () => setTier(+b.dataset.i)));
function touchHud() {
  if (touchUI) {
    const g = $('pGas'), br = $('pBrake'), hb = $('bHB'), bo = $('bBoost');
    if (g) g.classList.toggle('down', !!touch.gas);
    if (br) br.classList.toggle('down', !!touch.brake);
    if (hb) hb.classList.toggle('down', !!touch.hb);
    if (bo) bo.classList.toggle('down', !!touch.boost);
  }
  if (wheelEl) wheelEl.style.transform = 'rotate(' + ((save.set.flip ? -1 : 1) * tiltAxis * 90) + 'deg)';
}

let audio = null;
function initAudio() {
  if (audio) { if (audio.ctx && audio.ctx.resume) audio.ctx.resume(); return; }
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
  audio = { ctx, master, eng, lp, engG, bp, sg };
  master.gain.value = save.set.mute ? 0 : 1;
}

/* ================= SKID RIBBON =================
   Continuous smooth strips that trail behind the rear wheels.
   A ring buffer of sample points along the wheel's path becomes
   a single triangle strip. No per-frame matrix uploads. */
const SKID_MAT = new THREE.MeshBasicMaterial({
  map: SKID_TEX,
  transparent: true,
  opacity: 0.65,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -3,
  polygonOffsetUnits: -3,
  side: THREE.DoubleSide,
  color: 0x0a0a0c,
});
const RIBBON_PTS = 240; // samples per ribbon (each sample = 2 verts)
function makeRibbon() {
  const pos = new Float32Array(RIBBON_PTS * 2 * 3);
  const uv = new Float32Array(RIBBON_PTS * 2 * 2);
  const idx = new Uint16Array((RIBBON_PTS - 1) * 6);
  for (let i = 0; i < RIBBON_PTS - 1; i++) {
    const o = i * 6, a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
    idx[o + 0] = a; idx[o + 1] = c; idx[o + 2] = b;
    idx[o + 3] = b; idx[o + 4] = c; idx[o + 5] = d;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.setDrawRange(0, 0);
  const mesh = new THREE.Mesh(geo, SKID_MAT);
  mesh.frustumCulled = false;
  mesh.renderOrder = 3;
  scene.add(mesh);
  return { geo, pos, uv, head: 0, lastX: 0, lastZ: 0, active: false, mesh };
}
const RIBBON_COUNT = 24;
const ribbons = [];
for (let i = 0; i < RIBBON_COUNT; i++) ribbons.push(makeRibbon());
let ribbonPtr = 0;
let activeRibbons = []; // ribbons currently being written to (2 per wheel while skidding)
function ribbonBegin() {
  const L = ribbons[ribbonPtr]; ribbonPtr = (ribbonPtr + 1) % RIBBON_COUNT;
  const R = ribbons[ribbonPtr]; ribbonPtr = (ribbonPtr + 1) % RIBBON_COUNT;
  L.head = 0; L.active = true;
  R.head = 0; R.active = true;
  return [L, R];
}
function ribbonPush(rib, x, z, h, w) {
  if (!rib.active) return;
  const i = rib.head;
  if (i >= RIBBON_PTS) { rib.active = false; return; }
  const rx = Math.cos(h), rz = -Math.sin(h);
  const p0 = i * 2, p1 = i * 2 + 1;
  rib.pos[p0 * 3 + 0] = x + rx * w; rib.pos[p0 * 3 + 1] = 0.09; rib.pos[p0 * 3 + 2] = z + rz * w;
  rib.pos[p1 * 3 + 0] = x - rx * w; rib.pos[p1 * 3 + 1] = 0.09; rib.pos[p1 * 3 + 2] = z - rz * w;
  const v = i * 0.4;
  rib.uv[p0 * 2 + 0] = 0; rib.uv[p0 * 2 + 1] = v;
  rib.uv[p1 * 2 + 0] = 1; rib.uv[p1 * 2 + 1] = v;
  rib.head++;
  rib.lastX = x; rib.lastZ = z;
  rib.geo.attributes.position.needsUpdate = true;
  rib.geo.attributes.uv.needsUpdate = true;
  rib.geo.setDrawRange(0, Math.max(0, (rib.head - 1)) * 6);
}

/* ================= SMOKE ================= */
const SMOKE_N = 24;
const smokeTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,0.85)');
  gr.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
const smoke = [];
for (let i = 0; i < SMOKE_N; i++) {
  const mat = new THREE.SpriteMaterial({ map: smokeTex, transparent: true, opacity: 0, depthWrite: false, color: 0xdddde6 });
  const spr = new THREE.Sprite(mat);
  spr.visible = false; scene.add(spr);
  smoke.push({ s: spr, mat, life: 0, max: 1, vx: 0, vy: 0, vz: 0 });
}
let smokeIdx = 0;
function spawnSmoke(x, z, svx, svz) {
  const p = smoke[smokeIdx];
  smokeIdx = (smokeIdx + 1) % SMOKE_N;
  p.life = p.max = 0.65 + Math.random() * 0.4;
  p.vx = svx * 0.14 + (Math.random() - 0.5) * 1.6;
  p.vy = 0.7 + Math.random() * 0.6;
  p.vz = svz * 0.14 + (Math.random() - 0.5) * 1.6;
  p.s.position.set(x, 0.4, z);
  p.s.visible = true;
  p.mat.opacity = 0.55;
  p.mat.color.setHex(pending > 0 && mult >= 5 ? 0xff5d8f : pending > 0 && mult >= 3 ? 0xffb703 : 0xdddde6);
}
function updateSmoke(dt) {
  for (let i = 0; i < smoke.length; i++) {
    const p = smoke[i];
    if (p.life <= 0) continue;
    p.life -= dt;
    if (p.life <= 0) { p.s.visible = false; continue; }
    const t = 1 - p.life / p.max;
    p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
    const sc = 1.4 + t * 3.5;
    p.s.scale.set(sc, sc, 1);
    p.mat.opacity = 0.5 * (1 - t) * (1 - t);
  }
}
let smokeAcc = 0;
const ghost = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.0, 4.3), new THREE.MeshBasicMaterial({ color: 0x66ffee, transparent: true, opacity: 0.25, depthWrite: false }));
ghost.visible = false; scene.add(ghost);

/* ================= PHYSICS ================= */
function step(dt) {
  const s = stats;
  const thr = inGas(), brk = inBrake(), hb = !!inHB();
  const onRoad = isOnRoad(S.x, S.z);
  const surfMul = onRoad ? 1 : (currentMap.grip || 0.65);
  const mapMul = currentMap.slippery ? 0.72 : (currentMap.night ? 0.9 : 1);
  const fx = Math.sin(S.h), fz = Math.cos(S.h), rx = -Math.cos(S.h), rz = Math.sin(S.h);
  let vf = S.vx * fx + S.vz * fz, vl = S.vx * rx + S.vz * rz;
  const sp = Math.hypot(vf, vl), slip = Math.atan2(vl, Math.abs(vf) + 0.001);
  const inp = inSteer() * (brk && vf > 5 ? 1 - s.brakeUnder : 1);
  const assist = -0.42 * clamp(vl / 10, -1, 1) * S.loose;
  S.steer += (clamp(inp + assist, -1, 1) - S.steer) * Math.min(1, dt * (inp ? 10 : 14));
  const bst = thr && inBoost() && boost > 0.02 ? 1 : 0;
  if (bst) boost = Math.max(0, boost - dt * 0.25); else if (sp > 9 && Math.abs(slip) > 0.28) boost = Math.min(1, boost + dt * 0.12);
  if (thr) vf += s.power * (bst ? 1.9 : 1) * (1 - clamp(vf / (s.top * (bst ? 1.25 : 1)), 0, 1.2)) * dt * (vf < 0 ? 2 : 1);
  if (brk) vf = vf > 0.5 ? vf - 38 * dt : Math.max(-12, vf - 14 * dt);
  vf *= Math.exp(-((thr ? 0.09 : 0.25) + s.dragK + (onRoad ? 0 : 0.35)) * dt);
  if (!thr && !brk && Math.abs(vf) < 3) vf *= Math.exp(-2.5 * dt);
  if (hb) vf *= Math.exp(-0.42 * dt);
  let want = hb ? 1 : (thr && vf > 8 && (Math.abs(S.steer) > 0.20 * s.entry || Math.abs(slip) > 0.14 * s.entry)) ? 1 : 0;
  if (brk && sp > 9 && s.brakeLoose > 0 && Math.abs(S.steer) > 0.15) want = Math.max(want, s.brakeLoose * 0.9);
  S.loose += (want - S.loose) * Math.min(1, dt * (want ? 14 : 4));
  const gripF = s.grip * 0.68 * mapMul * surfMul;
  const driftF = s.drift * 1.22 * mapMul * surfMul;
  vl *= Math.exp(-lerp(gripF, driftF * (hb ? 0.5 : 1), S.loose) * (1 + s.aeroK * sp * sp) * (wet ? s.wetMul : 1) * dt);
  const dir = vf >= -1 ? 1 : -1, sf = Math.min(1, sp / 6) / (1 + sp / (s.top * 1.5));
  const yaw = S.steer * s.steer * sf * dir * (1 + 0.45 * S.loose) * (hb ? 1.35 : 1);
  S.vx = fx * vf + rx * vl; S.vz = fz * vf + rz * vl;
  S.h += yaw * dt; S.x += S.vx * dt; S.z += S.vz * dt;
  Object.assign(S, { sp, slip, thr, vf, hb, yaw, bst, onRoad });
  collide();
}
function collide() {
  const d = Math.hypot(S.x, S.z) || 1;
  if (d > WALL - CR) hit(-S.x / d, -S.z / d, d - (WALL - CR));
  if (ISL > 0 && d < ISL + CR) hit(S.x / d, S.z / d, ISL + CR - d);
  for (let i = 0; i < OBST.length; i++) {
    const o = OBST[i];
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

/* ================= SCORING ================= */
const toastEl = $('toast');
function toast(t, bad) {
  if (!toastEl) return;
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
function finishRace() {
  raceState.done = true;
  const t = safeNum(raceState.time, 0);
  const prev = raceBestOf(save.map);
  if (prev <= 0 || t < prev) { saveRaceBest(save.map, t); toast('NEW BEST  ' + t.toFixed(2) + 's'); }
  else toast('FINISHED  ' + t.toFixed(2) + 's');
  unlock('racer');
  const cash = Math.max(50, Math.floor(2000 / Math.max(1, t))); save.cash += cash; persist();
  setTimeout(() => reset(), 900);
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
  const drifting = S.sp > 8 && Math.abs(S.slip) > 0.22;
  nearCd -= dt; wallCd -= dt;
  if (drifting) {
    gap = 0; driftT += dt; mult = 1 + Math.min(driftT, 12) * 0.5;
    let rate = S.sp * Math.abs(S.slip) * 6.5 * mult * (1 + 0.5 * (S.bst || 0));
    const z = ZONES.length ? ZONES[zoneI % ZONES.length] : null;
    if (z && Math.hypot(S.x - z.x, S.z - z.z) < z.r && Math.abs(S.slip) > 0.30 && S.sp > 10) {
      rate *= 3; zoneT += dt;
      if (zoneT > 1.5) { pending += 400 * mult; toast('ZONE CLEARED'); zoneI = (zoneI + 1) % ZONES.length; zoneT = 0; if (++zonesCleared >= 3) unlock('zone3'); }
    }
    pending += rate * dt; if (driftT > 10) unlock('long'); if (mult >= 6) unlock('combo');
    const grades = [[3, 'SICK'], [6, 'INSANE'], [10, 'GODLIKE']];
    for (let gi = 0; gi < grades.length; gi++) {
      if (driftT > grades[gi][0] && called < grades[gi][0]) { called = grades[gi][0]; toast(grades[gi][1] + '  x' + mult.toFixed(1)); }
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
function scoringRace(dt) {
  if (raceState.done) return;
  const cp = raceState.cp;
  const g = raceState.gates[cp];
  if (!g) return;
  const d = Math.hypot(S.x - g.x, S.z - g.z);
  if (d < g.r) {
    if (cp === 0 && !raceState.active) { raceState.active = true; raceState.time = 0; toast('GO'); }
    raceState.cp++;
    updateGateColors();
    if (raceState.cp >= raceState.gates.length) finishRace();
    else toast('CHECKPOINT ' + raceState.cp + '/' + raceState.gates.length);
  }
  if (raceState.active) raceState.time += dt;
}
const ARROWS = ['UP', 'UL', 'L', 'DL', 'D', 'DR', 'R', 'UR'];
const arrow = (x, z) => ARROWS[(Math.round(wrap(Math.atan2(x - S.x, z - S.z) - S.h) / (Math.PI / 4)) + 8) % 8];
function hud() {
  try {
    if (mode === 'race') {
      const cp = raceState.cp, gates = raceState.gates;
      const next = gates[Math.min(cp, gates.length - 1)];
      const obj = $('obj');
      if (obj) {
        if (next) {
          const t = safeNum(raceState.time, 0);
          const rb = raceBestOf();
          obj.textContent = 'RACE  CP ' + Math.min(cp, gates.length) + '/' + gates.length + '  ' + arrow(next.x, next.z) + ' ' + Math.round(Math.hypot(next.x - S.x, next.z - S.z)) + 'm' +
            (raceState.active ? '  ' + t.toFixed(2) + 's' : '  cross gate 1 to start') +
            (rb > 0 ? '  best ' + rb.toFixed(2) + 's' : '');
        } else obj.textContent = 'RACE  FINISHED';
      }
      const score = $('score'); if (score) score.textContent = raceState.active ? safeNum(raceState.time, 0).toFixed(2) : '0';
      const mult = $('mult'); if (mult) mult.textContent = '';
    } else {
      const hz = ZONES.length ? ZONES[zoneI % ZONES.length] : null;
      const obj = $('obj');
      if (obj) obj.textContent = (mode === 'timed' ? Math.max(0, Math.ceil(timeLeft)) + 's - ' + runScore + ' pts - ' : '') +
        (hz ? 'Gold zone ' + arrow(hz.x, hz.z) + ' ' + Math.round(Math.hypot(hz.x - S.x, hz.z - S.z)) + 'm - Bank pad ' + arrow(PAD.x, PAD.z) + ' ' + Math.round(Math.hypot(PAD.x - S.x, PAD.z - S.z)) + 'm' : '');
      const score = $('score'); if (score) score.textContent = Math.floor(pending);
      const mult = $('mult'); if (mult) mult.textContent = pending > 0 ? 'x' + mult.toFixed(1) + (gap > 0 ? '  bank in ' + Math.max(0, 4 - gap).toFixed(1) + 's' : '') : '';
    }
    const angle = $('angle'); if (angle) angle.textContent = Math.round(Math.abs(S.slip) * 57.3);
    const cash = $('cash'); if (cash) cash.textContent = save.cash;
    const totalEl = $('total'); if (totalEl) totalEl.textContent = total;
    const bestEl = $('best'); if (bestEl) bestEl.textContent = best;
    const speed = $('speed');
    if (speed && speed.firstChild) speed.firstChild.nodeValue = Math.round(S.sp * 3.6);
    if (dial) dial.style.transform = 'rotate(' + (-135 + clamp((S.rpm - 0.2) / 0.8, 0, 1) * 270) + 'deg)';
    const drift = $('drift'); if (drift) drift.style.setProperty('--bank', Math.min(100, pending / 40) + '%');
    const v = Math.abs(S.vf), g = [0.16, 0.31, 0.49, 0.70, 1.01].map(f => f * stats.top);
    let gi = 0; while (gi < 4 && v > g[gi]) gi++;
    const gearN = $('gearN'); if (gearN) gearN.textContent = S.vf < -0.5 ? 'R' : v < 0.5 ? 'N' : gi + 1;
    const bf = $('boostfill'); if (bf) bf.style.height = Math.round(boost * 100) + '%';
    const lo = gi ? g[gi - 1] : 0;
    let rpm = 0.3 + 0.7 * clamp((v - lo) / (g[gi] - lo), 0, 1);
    if (S.hb || (S.thr && S.sp < 6)) rpm = Math.max(rpm, 0.7);
    S.rpm += (rpm - S.rpm) * Math.min(1, 0.15);
  } catch (err) {
    console.error('hud error:', err);
  }
}

/* ================= MULTIPLAYER ================= */
let mp = null;
const mpEl = $('mp'), bannerEl = $('mpBanner');
const mpCams = Array.from({ length: 4 }, () => new THREE.PerspectiveCamera(62, 1, 0.1, 3000));
const orbMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.75, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), MAX_ORBS);
orbMesh.frustumCulled = false; orbMesh.visible = false; scene.add(orbMesh);
const mpRing = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 7, 48, 1, true), new THREE.MeshBasicMaterial({ color: 0xff4d6d, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
mpRing.position.y = 3.5; mpRing.visible = false; scene.add(mpRing);
const orbCol = new THREE.Color();
let mpSmokeAcc = 0, mpSfxCd = 0;
function makeKit(def, hex) {
  const bd = bodyLoft(def), bb = loftBounds(bd);
  const paint = liveryMat(def, hex, bb);
  const bg = toGeo(bd, bb), cg = toGeo(cabinLoft(def), bb), lay = wheelLayout(def), tg = {};
  for (const a of ['front', 'rear']) tg[a] = new THREE.CylinderGeometry(lay[a].R, lay[a].R, lay[a].w, 12).rotateZ(Math.PI / 2);
  const make = () => {
    const g = new THREE.Group();
    const b = new THREE.Mesh(bg, [paint, darkDS]), c = new THREE.Mesh(cg, [glass, paint]); g.add(b, c);
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
  if (mpEl) mpEl.querySelectorAll('.pv,.divl').forEach(e => e.remove());
  mp = null;
}
function startMP() {
  stopMPModels();
  const cfg = { ...mpCfg, cars: [...mpCfg.cars] };
  const statArr = Array.from({ length: cfg.n }, (_, i) => { const d = CAR_DEFS[cfg.cars[i]]; return derive(TIERS[cfg.cls], d, defaultTune(d)); });
  const m = createMatch(cfg, statArr, OBST);
  const heads = [], kits = [], pools = [];
  for (let i = 0; i < cfg.n; i++) {
    const d = CAR_DEFS[cfg.cars[i]], hd = buildModel(d, PCOLORS[i]); applyModel(defaultTune(d), hd); scene.add(hd.root); heads.push(hd);
    if (cfg.mode === 'snake') { const k = makeKit(d, PCOLORS[i]); kits.push(k); pools.push(Array.from({ length: MAX_SEG }, () => k.make())); }
  }
  mp = { m, cfg, heads, kits, pools, hud: [], started: performance.now(), key: '', board: null };
  buildMpHud();
  carGroup.visible = false; ghost.visible = false;
  if (raceGateGroup) raceGateGroup.visible = false;
  orbMesh.visible = cfg.mode === 'snake'; mpRing.visible = true;
  pending = 0; mult = 1; releaseTouch();
  document.body.classList.add('mp'); if (mpEl) mpEl.classList.remove('off');
  camera.clearViewOffset();
  closeMenu();
  showBanner('ROUND 1', 1.2);
}
function quitMP() {
  stopMPModels();
  document.body.classList.remove('mp'); if (mpEl) mpEl.classList.add('off');
  carGroup.visible = true;
  if (raceGateGroup) raceGateGroup.visible = true;
  orbMesh.visible = false; mpRing.visible = false;
  renderer.setScissorTest(false); renderer.setViewport(0, 0, innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  openMenu('home');
}
function showBanner(text, secs, color) {
  if (!bannerEl) return;
  bannerEl.textContent = text; bannerEl.style.color = color || ''; bannerEl.style.animationDuration = (secs || 1) + 's';
  bannerEl.classList.remove('show'); void bannerEl.offsetWidth; bannerEl.classList.add('show');
}
function buildMpHud() {
  mp.hud = [];
  for (let i = 0; i < mp.cfg.n; i++) {
    const el = h('div', { class: 'pv', 'data-i': String(i) },
      h('div', { class: 'pchip', style: 'background:' + hex6(PCOLORS[i]) }, PNAMES[i]),
      h('div', { class: 'pips' }), h('div', { class: 'psub' }),
      h('div', { class: 'phint' }, KEYMAPS[i].name + (i === 0 && touchUI ? '  -  or tilt / zones' : '')),
      h('div', { class: 'pout' }, 'OUT'));
    mpEl.append(el);
    mp.hud.push({ el, pips: el.querySelector('.pips'), sub: el.querySelector('.psub'), hint: el.querySelector('.phint'), pk: '', sk: '', dead: false });
  }
  if (mp.cfg.n === 3) { mp.board = h('div', { class: 'pv board' }); mpEl.append(mp.board); }
  mp.layKey = '';
}
function mpHudUpdate() {
  const m = mp.m, W = innerWidth, H = innerHeight, n = mp.cfg.n, vps = vpLayout(n, W, H), key = n + '|' + W + '|' + H;
  if (mp.layKey !== key) {
    mp.layKey = key;
    mpEl.querySelectorAll('.divl').forEach(e => e.remove());
    vps.forEach((vp, i) => { const el = (mp.hud[i] ? mp.hud[i].el : mp.board); if (el) el.style.cssText = 'left:' + vp.x + 'px;top:' + vp.y + 'px;width:' + vp.w + 'px;height:' + vp.h + 'px'; });
    if (n === 3 && mp.board) { const vp = vps[3]; mp.board.style.cssText = 'left:' + vp.x + 'px;top:' + vp.y + 'px;width:' + vp.w + 'px;height:' + vp.h + 'px'; }
    const line = (css) => mpEl.append(h('div', { class: 'divl', style: css }));
    if (n === 2) { if (vps[1].x > 0) line('left:' + (W / 2 - 3) + 'px;top:0;width:6px;height:100%'); else line('left:0;top:' + (H / 2 - 3) + 'px;width:100%;height:6px'); }
    else { line('left:' + (W / 2 - 3) + 'px;top:0;width:6px;height:100%'); line('left:0;top:' + (H / 2 - 3) + 'px;width:100%;height:6px'); }
  }
  m.cars.forEach((c, i) => {
    const hd = mp.hud[i];
    const pk = '\u25CF'.repeat(m.scores[i]) + '\u25CB'.repeat(Math.max(0, m.first - m.scores[i]));
    if (hd.pk !== pk) { hd.pk = pk; hd.pips.textContent = pk; }
    const sk = m.mode === 'snake' ? 'Cars ' + (c.segs + 1) + ' - Orbs ' + c.orbs : '';
    if (hd.sk !== sk) { hd.sk = sk; hd.sub.textContent = sk; }
    if (hd.dead === c.alive) { hd.dead = !c.alive; hd.el.classList.toggle('dead', hd.dead); }
  });
  if (mp.board) {
    const bk = m.scores.join(',') + '|' + m.cars.map(c => (c.alive ? 1 : 0)).join('');
    if (mp.bk !== bk) { mp.bk = bk;
      mp.board.replaceChildren(h('div', { class: 'bt' }, 'SCORE'), ...m.cars.map((c, i) => h('div', { class: 'brow' }, h('i', { class: 'pdot', style: 'background:' + hex6(PCOLORS[i]) }), PNAMES[i] + '  ' + '\u25CF'.repeat(m.scores[i]) + '\u25CB'.repeat(Math.max(0, m.first - m.scores[i])), c.alive ? '' : '  OUT'))); }
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
  for (let i = 0; i < m.cars.length; i++) {
    const c = m.cars[i], hd = mp.heads[i];
    hd.root.visible = c.alive;
    hd.root.position.set(c.x, 0, c.z); hd.root.rotation.y = c.h;
    susStep(c.sus, c.st.bounce, c.thr, c.brk, clamp(c.yaw * c.sp * 0.004, -0.12, 0.12), dt);
    hd.pivot.position.y = PIV + c.sus.heave; hd.pivot.rotation.set(c.sus.pitch, 0, c.sus.roll);
    for (const w of hd.wheels) {
      w.pivot.rotation.y = (w.front ? c.steer * 0.5 : 0) - w.sx * hd.toe[w.axle];
      w.roll.rotation.x += (c.vf / w.R) * dt;
    }
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
  }
  if (m.mode === 'snake') {
    const t = performance.now() / 1000;
    m.orbs.forEach((o, i) => {
      dummy.position.set(o.x, 0.9 + Math.sin(t * 3 + i) * 0.15, o.z);
      const s = o.on ? 1 + Math.sin(t * 5 + i) * 0.15 : 0; dummy.scale.set(s, s, s); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
      orbMesh.setMatrixAt(i, dummy.matrix);
      if (o.on) orbMesh.setColorAt(i, orbCol.setHSL(o.hue, 0.95, 0.6));
    });
    orbMesh.instanceMatrix.needsUpdate = true;
    if (orbMesh.instanceColor) orbMesh.instanceColor.needsUpdate = true;
    dummy.scale.set(0, 0, 0);
  }
  updateSmoke(dt);
}
function mpSkid(c, hd, dt) {
  const lx = Math.cos(c.h), lz = -Math.sin(c.h), fx = Math.sin(c.h), fz = Math.cos(c.h), rz = hd.lay.rear.z, rw = hd.rearX;
  // Individual MP skid strips
  for (const sx of [1, -1]) {
    const wx = c.x + fx * rz + lx * sx * rw, wz = c.z + fz * rz + lz * sx * rw;
    const ang = Math.atan2(c.vx, c.vz);
    // simple single-quad skid per frame for MP (kept cheap)
    const m = skidPool[skidI];
    skidI = (skidI + 1) % skidPool.length;
    m.position.set(wx, 0.09, wz);
    m.rotation.set(0, ang, 0);
    m.scale.set(1, 1, Math.max(0.4, c.sp * dt * 1.4));
    m.visible = true;
  }
  mpSmokeAcc += dt * 12 * clamp(Math.abs(c.slip) * 2, 0, 1) * clamp(c.sp / 20, 0.3, 1);
  while (mpSmokeAcc >= 1) { mpSmokeAcc--; const sx = Math.random() < 0.5 ? 1 : -1; spawnSmoke(c.x + fx * rz + lx * sx * rw, c.z + fz * rz + lz * sx * rw, c.vx, c.vz); }
}
function mpRender() {
  const W = innerWidth, H = innerHeight, vps = vpLayout(mp.cfg.n, W, H);
  renderer.setScissorTest(true);
  vps.slice(0, mp.cfg.n).forEach((vp, i) => {
    const cam = mpCams[i], c = mp.m.cars[i], gy = H - vp.y - vp.h;
    cam.aspect = vp.w / vp.h; cam.fov = cam.aspect < 1 ? 74 : 62; cam.updateProjectionMatrix();
    renderer.setViewport(vp.x, gy, vp.w, vp.h); renderer.setScissor(vp.x, gy, vp.w, vp.h);
    sun.position.set(c.x - 60, 80, c.z - 40); sun.target.position.set(c.x, 0, c.z);
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

/* ================= MP SKID POOL (simple) ================= */
const skidPool = [];
for (let i = 0; i < 60; i++) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 1).rotateX(-Math.PI / 2), SKID_MAT);
  m.visible = false;
  scene.add(m);
  skidPool.push(m);
}
let skidI = 0;

/* ================= FRAME ================= */
function visuals(dt) {
  try {
    const inMenu = !!menu, m = model;
    if (!m) return;
    const pulse = 0.14 + 0.1 * Math.sin(performance.now() / 200);
    ZONES.forEach((z, i) => { z.mat.color.setHex(i === (zoneI % ZONES.length) ? 0xffd23f : 0x66ccff); z.mat.opacity = i === (zoneI % ZONES.length) ? 0.2 + pulse : 0.07; });
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
    // skid ribbons
    const skidding = !inMenu && !photo && ((Math.abs(S.slip) > 0.18 && S.sp > 6) || (S.hb && S.sp > 5));
    const lx = Math.cos(S.h), lz = -Math.sin(S.h), fx = Math.sin(S.h), fz = Math.cos(S.h);
    const rz = m.lay.rear.z, rw = m.rearX;
    if (skidding) {
      if (!activeRibbons.length) activeRibbons = ribbonBegin();
      for (const sx of [1, -1]) {
        const wx = S.x + fx * rz + lx * sx * rw, wz = S.z + fz * rz + lz * sx * rw;
        const rib = activeRibbons[sx > 0 ? 0 : 1];
        const lastDist = Math.hypot(wx - rib.lastX, wz - rib.lastZ);
        if (rib.head === 0 || lastDist > 0.22) ribbonPush(rib, wx, wz, S.h, 0.19);
      }
      smokeAcc += dt * 16 * clamp(Math.abs(S.slip) * 2, 0, 1) * clamp(S.sp / 20, 0.3, 1);
      while (smokeAcc >= 1) {
        smokeAcc--; const sx = Math.random() < 0.5 ? 1 : -1;
        spawnSmoke(S.x + fx * rz + lx * sx * rw, S.z + fz * rz + lz * sx * rw, S.vx, S.vz);
      }
    } else if (activeRibbons.length) {
      // end current trail
      activeRibbons[0].active = false; activeRibbons[1].active = false;
      activeRibbons = [];
    }
    updateSmoke(dt);
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
      audio.eng.frequency.setTargetAtTime(38 + S.rpm * 95, t, 0.05);
      audio.lp.frequency.setTargetAtTime(400 + S.rpm * 1400, t, 0.05);
      audio.engG.gain.setTargetAtTime(live ? 0.06 + S.thr * 0.07 : 0, t, 0.08);
      audio.sg.gain.setTargetAtTime(squeal * 0.1, t, 0.05);
      audio.bp.frequency.setTargetAtTime(1500 + S.sp * 25, t, 0.1);
    }
  } catch (err) {
    console.error('visuals error:', err);
  }
}

let last = performance.now();
renderer.setAnimationLoop(now => {
  const rdt = Math.min(0.05, (now - last) / 1000); last = now;
  try {
    if (mp) { updateTilt(rdt); mpFrame(rdt); touchHud(); return; }
    const dt = slowT > 0 ? rdt * 0.25 : rdt; slowT -= rdt;
    crashCd -= rdt;
    if (!menu && dt > 0 && !photo) {
      const n = Math.ceil(dt / 0.0167);
      for (let i = 0; i < n; i++) step(dt / n);
      if (mode === 'race') scoringRace(dt);
      else {
        scoring(dt);
        if (mode === 'timed') {
          timeLeft -= dt; ghostT += dt; ghostRecT += dt;
          if (ghostRecT >= 0.1) { ghostRecT -= 0.1; ghostRec.push([S.x, S.z, S.h]); }
          if (timeLeft <= 0) finishRun();
        }
      }
    }
    updateTilt(rdt); visuals(dt); hud(); touchHud();
    renderer.render(scene, camera);
  } catch (err) {
    console.error('frame error:', err);
  }
});

/* ================= BOOT ================= */
try {
  applyCtrl();
  currentMap = MAPS.find(m => m.id === save.map) || MAPS[0];
  buildWorld(currentMap);
  buildRaceGates(currentMap);
  reset();
  setModel(carDef, paintOf(save.car), tune);
  recalc();
  openMenu('home');
} catch (err) {
  console.error('boot error:', err);
  if (menuEl) menuEl.classList.remove('off');
  if (mLeft) mLeft.replaceChildren(h('div', { class: 'm-screen' }, mHead('BOOT ERROR'), h('p', { class: 'm-sub' }, String(err && err.message || err))));
}