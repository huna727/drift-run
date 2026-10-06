import * as THREE from 'three';
import { boxObs, circleObs } from './collision.js';
import { rng, PM, canvasTex, mkCanvas, scaleUV, boxUV, place, instanced, mesh, asphaltTex, paveTex, speckleTex, makeWater, scatterTrees, wallRing, hillRing, addClouds, concreteTex } from './wtex.js';

const poly = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 };

function facadeTexture(seed, night) {
  const c = mkCanvas(256, 512), g = c.getContext('2d'), R = rng(seed);
  g.fillStyle = night ? '#202838' : '#8b9aad'; g.fillRect(0, 0, 256, 512);
  for (let y = 12; y < 500; y += 34) for (let x = 10; x < 250; x += 30) {
    const lit = night ? R() > 0.42 : R() > 0.2;
    g.fillStyle = lit ? (night ? (R() > 0.55 ? '#ffd77a' : '#9ed6ff') : '#c9e2f0') : (night ? '#182030' : '#5d6c7e');
    g.fillRect(x, y, 18, 20);
  }
  g.fillStyle = 'rgba(0,0,0,.2)';
  for (let x = 0; x < 256; x += 30) g.fillRect(x, 0, 3, 512);
  return canvasTex(c);
}

function addRoad(group, { x = 0, z = 0, length, width = 18, angle = 0, highway = false, markings = true }) {
  const road = new THREE.PlaneGeometry(length, width).rotateX(-Math.PI / 2);
  scaleUV(road, length / 18, width / 18);
  const surface = mesh(road, PM(0xffffff, { map: asphaltTex(highway ? 42 : 16), roughness: 0.88, ...poly }), x, 0.03, z, { ry: angle, cast: false });
  group.add(surface);
  if (!markings) return;

  const addStripe = (ox, oz, sx, sz, col) => {
    const stripe = mesh(new THREE.PlaneGeometry(sx, sz).rotateX(-Math.PI / 2), PM(col, { roughness: 0.8, ...poly }), x + ox * Math.cos(angle) + oz * Math.sin(angle), 0.052, z - ox * Math.sin(angle) + oz * Math.cos(angle), { ry: angle, cast: false });
    group.add(stripe);
  };
  const laneCount = highway ? 3 : 2;
  for (const side of [-1, 1]) addStripe(0, side * (width / 2 - 0.7), length, 0.22, 0xe8e8df);
  addStripe(0, -0.22, length, 0.16, 0xf2bc35);
  addStripe(0, 0.22, length, 0.16, 0xf2bc35);
  for (let lane = 1; lane < laneCount; lane++) {
    const off = (lane / laneCount) * width / 2;
    for (let p = -length / 2 + 4; p < length / 2; p += 11) {
      addStripe(p, off, 5.3, 0.18, 0xf1f0e8);
      addStripe(p, -off, 5.3, 0.18, 0xf1f0e8);
    }
  }
}

function addHighwayRing(group) {
  const asphalt = PM(0xffffff, { map: asphaltTex(62), roughness: 0.9, ...poly });
  group.add(mesh(new THREE.RingGeometry(276, 306, 144).rotateX(-Math.PI / 2), asphalt, 0, 0.025, 0, { cast: false }));
  const lineMat = PM(0xf5f3e8, { roughness: 0.8, ...poly });
  for (const [a, b] of [[278, 279.1], [291, 292.1], [303, 304.1]]) {
    group.add(mesh(new THREE.RingGeometry(a, b, 144).rotateX(-Math.PI / 2), lineMat, 0, 0.052, 0, { cast: false }));
  }
  // Raised east/west span makes the freeway feel like a real interchange while the lower ring stays driveable.
  addRoad(group, { x: 0, z: -2, length: 390, width: 24, angle: 0, highway: true });
  const supportMat = PM(0x858b91, { map: concreteTex(18), roughness: 0.95 });
  for (let x = -168; x <= 168; x += 56) {
    group.add(mesh(new THREE.BoxGeometry(4, 4.4, 4), supportMat, x, 2.2, -18));
    group.add(mesh(new THREE.BoxGeometry(4, 4.4, 4), supportMat, x, 2.2, 14));
  }
  const deck = mesh(new THREE.BoxGeometry(394, 0.45, 29), PM(0x555961, { roughness: 0.8 }), 0, 4.6, -2, { cast: false });
  group.add(deck);
}

function addStreetFurniture(group, quality) {
  const poles = [], signs = [];
  const stop = quality === 0 ? 72 : 48;
  for (let a = -216; a <= 216; a += stop) {
    for (const z of [-171, -101, -31, 39, 109, 179]) poles.push(place(a, 0, z), place(a + 8, 0, z + 8, Math.PI));
    for (const x of [-211, -141, -71, -1, 69, 139, 209]) poles.push(place(x, 0, a));
  }
  for (let a = -140; a <= 140; a += 70) for (let b = -105; b <= 105; b += 70) signs.push(place(a + 11, 0, b + 11, Math.PI / 2));
  const steel = PM(0x303842, { metalness: 0.65, roughness: 0.38 });
  group.add(instanced(new THREE.CylinderGeometry(0.12, 0.18, 7, 8).translate(0, 3.5, 0), steel, poles, { cast: false }));
  group.add(instanced(new THREE.BoxGeometry(1.4, 0.24, 0.7).translate(0.55, 6.65, 0), PM(0xfff2c9, { emissive: 0xffe8ad, emissiveIntensity: 1.4 }), poles, { cast: false }));
  group.add(instanced(new THREE.BoxGeometry(2.6, 1.35, 0.12).translate(0, 3.8, 0), PM(0x2b74bf, { emissive: 0x123e74, emissiveIntensity: 0.25 }), signs, { cast: false }));
}

export function buildMetro(map, ctx) {
  const { group, obst, updaters, quality = 1 } = ctx;
  const R = rng(9981), WALL = map.wall, night = !!map.night;
  const ground = mesh(scaleUV(new THREE.CircleGeometry(WALL + 360, 96).rotateX(-Math.PI / 2), 160, 160), PM(0x70767a, { map: speckleTex(25, { contrast: 0.16, blobs: 64 }), roughness: 1 }), 0, -0.08, 0, { cast: false });
  group.add(ground);

  // Waterfront and docks: a nod to Cargo Bay, connected directly to the downtown grid.
  const water = makeWater(0x1f6e92, { repeat: 42, opacity: 0.96 }); updaters.push(water.update);
  group.add(mesh(new THREE.PlaneGeometry(760, 110).rotateX(-Math.PI / 2), water.mat, 0, -0.14, 318, { cast: false, receive: false }));
  group.add(mesh(new THREE.BoxGeometry(570, 1.4, 4), PM(0x85898a, { map: concreteTex(20) }), 0, 0.55, 251));
  obst.push(boxObs(0, 254, 285, 2));

  addHighwayRing(group);
  const streets = [-210, -140, -70, 0, 70, 140, 210];
  for (const n of streets) {
    addRoad(group, { x: 0, z: n, length: 474, width: 18 });
    addRoad(group, { x: n, z: 0, length: 474, width: 18, angle: Math.PI / 2 });
  }
  // Curving ramp approaches give the map fast ways into the grid from the outer highway.
  addRoad(group, { x: -223, z: -142, length: 132, width: 18, angle: 0.58, highway: true });
  addRoad(group, { x: 223, z: 142, length: 132, width: 18, angle: 0.58, highway: true });

  const facade = [facadeTexture(4, night), facadeTexture(9, night), facadeTexture(15, night)].map(t => PM(0xffffff, { map: t, roughness: 0.62, metalness: 0.12, envMapIntensity: 1.1 }));
  const roof = PM(0x424952, { map: concreteTex(7), roughness: 0.85 });
  const blockCenters = [-175, -105, -35, 35, 105, 175];
  const parkTrees = [], containers = [];
  for (let ix = 0; ix < blockCenters.length; ix++) for (let iz = 0; iz < blockCenters.length; iz++) {
    const x = blockCenters[ix], z = blockCenters[iz];
    const park = ix < 2 && iz < 2;
    const dock = iz > 3 && ix > 2;
    if (park) {
      group.add(mesh(new THREE.PlaneGeometry(52, 52).rotateX(-Math.PI / 2), PM(0x5c904d, { map: speckleTex(70 + ix * 5 + iz, { blobs: 50, streaks: 320 }), roughness: 1 }), x, 0.055, z, { cast: false }));
      for (let n = 0; n < (quality === 0 ? 6 : 12); n++) {
        const a = R() * Math.PI * 2, d = 7 + R() * 20;
        parkTrees.push({ x: x + Math.cos(a) * d, z: z + Math.sin(a) * d, s: 0.75 + R() * 0.55, ry: R() * 6.28 });
      }
      if (ix === 0 && iz === 0) {
        const pond = mesh(new THREE.CircleGeometry(13, 40).rotateX(-Math.PI / 2), water.mat, x, 0.08, z, { cast: false, receive: false }); pond.scale.set(1.35, 1, 0.75); group.add(pond);
        obst.push(circleObs(x, z, 13));
      }
      continue;
    }
    if (dock) {
      group.add(mesh(new THREE.BoxGeometry(54, 0.2, 54), PM(0x9b9b96, { map: paveTex(27), roughness: 0.95 }), x, 0.1, z));
      const stackCount = quality === 0 ? 3 : 6;
      for (let n = 0; n < stackCount; n++) {
        const cx = x - 18 + (n % 3) * 17, cz = z - 12 + Math.floor(n / 3) * 24, levels = 1 + (n % 3);
        for (let y = 0; y < levels; y++) containers.push({ m: place(cx, 1.5 + y * 3, cz, n % 2 ? Math.PI / 2 : 0), c: [0xc83e38, 0x3c78bd, 0xe1a832, 0x2b9d67, 0xc7c8c6][n % 5] });
        obst.push(boxObs(cx, cz, n % 2 ? 1.3 : 5.4, n % 2 ? 5.4 : 1.3, n % 2 ? Math.PI / 2 : 0));
      }
      continue;
    }
    // Performance mode halves the small, far-side towers but keeps their road/collision layout open.
    if (quality === 0 && (ix + iz) % 2) continue;
    const inset = 4 + R() * 6, w = 48 - inset * 2, d = 48 - inset * 2;
    const h = 20 + R() * 95 * (1 - Math.hypot(x, z) / 360 * 0.35);
    const b = mesh(boxUV(w, h, d, 9, 12, 9), [facade[(ix + iz) % facade.length], facade[(ix + iz) % facade.length], roof, roof, facade[(ix + iz) % facade.length], facade[(ix + iz) % facade.length]], x, h / 2, z, { cast: quality > 0, receive: quality > 0 });
    group.add(b); obst.push(boxObs(x, z, w / 2, d / 2));
    if (h > 66 && quality > 0) {
      const antenna = mesh(new THREE.CylinderGeometry(0.18, 0.18, 12, 6), PM(0x39414a, { metalness: 0.7 }), x, h + 6, z, { cast: false }); group.add(antenna);
    }
  }
  if (containers.length) group.add(instanced(new THREE.BoxGeometry(10.8, 2.9, 2.45), PM(0xffffff, { roughness: 0.6, metalness: 0.2 }), containers));
  scatterTrees(group, obst, parkTrees, { kind: 'oak', color: 0x467e3a, seed: 83, nm: true });

  // A central landmark and a few billboards sell the open-world city feeling without expensive traffic simulation.
  group.add(mesh(new THREE.CylinderGeometry(14, 15, 1.1, 48), PM(0xb6b8b6, { map: concreteTex(30) }), 0, 0.55, 0));
  group.add(mesh(new THREE.CylinderGeometry(10.8, 10.8, 0.12, 48), water.mat, 0, 1.13, 0, { cast: false, receive: false }));
  obst.push(circleObs(0, 0, 14.5));
  const billboardMat = PM(0x8c2bd8, { emissive: 0x40106d, emissiveIntensity: 0.42, roughness: 0.45 });
  for (const [x, z, a] of [[-245, 80, Math.PI / 2], [245, -72, -Math.PI / 2], [92, -244, 0]]) {
    group.add(mesh(new THREE.BoxGeometry(13, 7, 0.45), billboardMat, x, 8, z, { ry: a, cast: false }));
    group.add(mesh(new THREE.CylinderGeometry(0.32, 0.45, 9, 8), PM(0x3a4047, { metalness: 0.7 }), x, 3.5, z, { cast: false }));
  }
  addStreetFurniture(group, quality);
  wallRing(group, WALL, { h: 1.45, color: 0x9ca3a4, segs: 192 });
  hillRing(group, { count: 18, rMin: 720, rMax: 1020, hMin: 70, hMax: 190, colors: map.mountains, seed: 98 });
  addClouds(group, 88, night);
  return { wall: WALL, isl: 0, roadHalf: 14, spawn: { x: 0, z: -88, h: 0 } };
}
