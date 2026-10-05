import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rng, PM, canvasTex, mkCanvas, scaleUV, boxUV, place, instanced, mesh, paveTex, gravelTex, speckleTex, makeWater, scatterTrees, wallRing, hillRing, addClouds, concreteTex, ribbon } from './wtex.js';
import { boxObs, circleObs, ellipseObs, surfaceDist } from './collision.js';

const poly = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 };
function flowerTex(seed, palette) {
  const c = mkCanvas(256, 256), g = c.getContext('2d'), R = rng(seed);
  g.fillStyle = '#2f5a2c'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${40 + R() * 40 | 0},${90 + R() * 60 | 0},${40 + R() * 30 | 0},0.7)`; g.beginPath(); g.arc(R() * 256, R() * 256, 3 + R() * 4, 0, 7); g.fill(); }
  for (let i = 0; i < 700; i++) { g.fillStyle = palette[(R() * palette.length) | 0]; g.beginPath(); g.arc(R() * 256, R() * 256, 1.8 + R() * 2.6, 0, 7); g.fill(); }
  return canvasTex(c);
}

export function buildPark(map, ctx) {
  const { group, obst, updaters } = ctx;
  const R = rng(4242), WALL = map.wall;
  const ringR = a => 92 + 7 * Math.sin(3 * a + 0.7) + 4 * Math.cos(5 * a);

  /* ---- ground ---- */
  group.add(mesh(scaleUV(new THREE.CircleGeometry(WALL + 900, 48).rotateX(-Math.PI / 2), 120, 120), PM(0x4f7d3c, { map: speckleTex(31, { streaks: 600 }), roughness: 1 }), 0, -0.06, 0, { cast: false }));
  group.add(mesh(scaleUV(new THREE.CircleGeometry(WALL + 0.5, 96).rotateX(-Math.PI / 2), WALL / 6, WALL / 6),
    PM(0x86b45e, { map: speckleTex(31, { streaks: 900, contrast: 0.2, blobs: 60 }), roughness: 1 }), 0, -0.02, 0, { cast: false }));

  /* ---- paths: one closed loop, four avenues, a round plaza ---- */
  const ctrl = []; for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2, r = ringR(a); ctrl.push(new THREE.Vector3(Math.sin(a) * r, 0, Math.cos(a) * r)); }
  const loop = new THREE.CatmullRomCurve3(ctrl, true, 'centripetal').getSpacedPoints(240).slice(0, -1).map(p => ({ x: p.x, z: p.z }));
  const paths = [{ pts: loop, w: 7, closed: true }];
  for (let k = 0; k < 4; k++) {
    const a = k * Math.PI / 2, pts = [];
    for (let r = 14; r < ringR(a) + 2; r += 5) pts.push({ x: Math.sin(a) * r, z: Math.cos(a) * r });
    pts.push({ x: Math.sin(a) * (ringR(a) + 2), z: Math.cos(a) * (ringR(a) + 2) });
    paths.push({ pts, w: 6, closed: false });
  }
  const gravel = PM(0xffffff, { map: gravelTex(), roughness: 1, ...poly }), edgeMat = PM(0x7a6a4a, { map: gravelTex(12), roughness: 1, ...poly });
  for (const p of paths) {
    group.add(mesh(ribbon(p.pts, p.w + 1.1, 0.03, { closed: p.closed, tile: 5 }), edgeMat, 0, 0, 0, { cast: false }));
    group.add(mesh(ribbon(p.pts, p.w, 0.045, { closed: p.closed, tile: 4 }), gravel, 0, 0, 0, { cast: false }));
  }
  const pathPts = paths.flatMap(p => p.pts);
  const nearPath = (x, z, m) => { for (let i = 0; i < pathPts.length; i++) { const dx = x - pathPts[i].x, dz = z - pathPts[i].z; if (dx * dx + dz * dz < m * m) return true; } return false; };
  group.add(mesh(new THREE.CircleGeometry(23.5, 64).rotateX(-Math.PI / 2), PM(0x7a6a4a, { map: gravelTex(12), ...poly }), 0, 0.03, 0, { cast: false }));
  group.add(mesh(scaleUV(new THREE.CircleGeometry(22, 64).rotateX(-Math.PI / 2), 11, 11), PM(0xe9dcc2, { map: paveTex(12, 214, 168, 64), roughness: 0.9, ...poly }), 0, 0.05, 0, { cast: false }));

  /* ---- plaza monument in a flower ring ---- */
  {
    const stone = PM(0xd8d2c4, { map: concreteTex(), roughness: 0.75 });
    const rimG = new THREE.LatheGeometry([[6.8, 0], [6.8, 0.55], [7.4, 0.6], [7.4, 0.55], [10, 0.55], [10.5, 0.6], [10.5, 0]].map(([x, y]) => new THREE.Vector2(x, y)), 64);
    group.add(mesh(rimG, new THREE.MeshStandardMaterial({ color: 0xd8d2c4, map: concreteTex(), roughness: 0.75, side: THREE.DoubleSide })));
    group.add(mesh(new THREE.RingGeometry(7.4, 10, 64).rotateX(-Math.PI / 2), PM(0xffffff, { map: flowerTex(5, ['#ff6a9a', '#ffd23f', '#ffffff', '#b388ff']), roughness: 1 }), 0, 0.56, 0, { cast: false }));
    group.add(mesh(new THREE.CylinderGeometry(5, 5.3, 0.5, 40), stone, 0, 0.25, 0));
    group.add(mesh(new THREE.CylinderGeometry(3.5, 3.9, 0.9, 36), stone, 0, 0.95, 0));
    group.add(mesh(new THREE.CylinderGeometry(0.8, 1.1, 5.5, 20), stone, 0, 4.1, 0));
    group.add(mesh(new THREE.SphereGeometry(1.0, 24, 16), PM(0xd9b24a, { metalness: 0.9, roughness: 0.25, envMapIntensity: 1.5 }), 0, 7.5, 0));
    obst.push(circleObs(0, 0, 10.6));
  }

  /* ---- pond: ellipse collider = ellipse mesh ---- */
  const pond = { x: -42, z: -32, rx: 26, rz: 16, a: 0.6 };
  {
    const water = makeWater(0x2c7fa0, { repeat: 7, opacity: 0.94 }); updaters.push(water.update);
    const w = mesh(new THREE.CircleGeometry(1, 64).rotateX(-Math.PI / 2), water.mat, pond.x, 0.12, pond.z, { ry: pond.a, cast: false });
    w.scale.set(pond.rx - 0.3, 1, pond.rz - 0.3); group.add(w);
    const pts = []; for (let i = 0; i < 96; i++) {
      const t = i / 96 * Math.PI * 2, lx = Math.cos(t) * pond.rx, lz = Math.sin(t) * pond.rz;
      pts.push(new THREE.Vector3(pond.x + lx * Math.cos(pond.a) + lz * Math.sin(pond.a), 0.25, pond.z - lx * Math.sin(pond.a) + lz * Math.cos(pond.a)));
    }
    const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 160, 0.75, 10, true); tube.scale(1, 0.75, 1);
    group.add(mesh(tube, PM(0x9c9686, { map: concreteTex(), roughness: 0.9 })));
    obst.push(ellipseObs(pond.x, pond.z, pond.rx + 0.5, pond.rz + 0.5, pond.a));
    const lily = [], reed = [];
    for (let i = 0; i < 46; i++) { const t = R() * 6.283, rr = Math.sqrt(R()) * 0.85, lx = Math.cos(t) * pond.rx * rr, lz = Math.sin(t) * pond.rz * rr;
      lily.push(place(pond.x + lx * Math.cos(pond.a) + lz * Math.sin(pond.a), 0.14, pond.z - lx * Math.sin(pond.a) + lz * Math.cos(pond.a), R() * 6, 0.6 + R() * 0.5)); }
    for (let i = 0; i < 110; i++) { const t = R() * 6.283, rr = 0.9 + R() * 0.07, lx = Math.cos(t) * pond.rx * rr, lz = Math.sin(t) * pond.rz * rr;
      reed.push(place(pond.x + lx * Math.cos(pond.a) + lz * Math.sin(pond.a), 0, pond.z - lx * Math.sin(pond.a) + lz * Math.cos(pond.a), R() * 6, 0.7 + R() * 0.7)); }
    group.add(instanced(new THREE.CircleGeometry(0.7, 12).rotateX(-Math.PI / 2), PM(0x3f8a3a, { side: THREE.DoubleSide }), lily, { cast: false }));
    group.add(instanced(new THREE.ConeGeometry(0.09, 2.2, 4).translate(0, 1.1, 0), PM(0x7a9a3a), reed, { cast: false }));
  }

  /* ---- formal garden (axis-aligned hedges, exact colliders) ---- */
  const garden = { x: 40, z: 40, hw: 15, hd: 12 };
  {
    const hedge = PM(0x356f34, { map: speckleTex(41, { contrast: 0.35, blobs: 60, base: 225 }), roughness: 1 });
    const T = 1.3, H = 1.6;
    for (const [dx, dz, w, d] of [[0, -garden.hd, garden.hw * 2 + T, T], [0, garden.hd, garden.hw * 2 + T, T], [-garden.hw, 0, T, garden.hd * 2], [garden.hw, 0, T, garden.hd * 2]]) {
      group.add(mesh(boxUV(w, H, d, 3, 3, 3), hedge, garden.x + dx, H / 2, garden.z + dz));
      obst.push(boxObs(garden.x + dx, garden.z + dz, w / 2, d / 2, 0));
    }
    const pals = [['#ff6a9a', '#ffd6e4'], ['#ffd23f', '#ffffff'], ['#b388ff', '#ffffff'], ['#ff7b00', '#ffd23f']];
    [[-7, -5.5], [7, -5.5], [-7, 5.5], [7, 5.5]].forEach(([bx, bz], i) => {
      const f = scaleUV(new THREE.PlaneGeometry(10, 7).rotateX(-Math.PI / 2), 2, 1.4);
      group.add(mesh(f, PM(0xffffff, { map: flowerTex(20 + i, pals[i]), roughness: 1, ...poly }), garden.x + bx, 0.07, garden.z + bz, { cast: false }));
    });
    group.add(mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.5, 24), PM(0xd8d2c4, { map: concreteTex() }), garden.x, 0.25, garden.z));
    group.add(mesh(new THREE.CylinderGeometry(0.35, 0.5, 2.6, 12), PM(0xd8d2c4, { map: concreteTex() }), garden.x, 1.8, garden.z));
  }

  /* ---- gazebo + pavilion ---- */
  const gaz = { x: -44, z: 44 }, pav = { x: 46, z: -44 };
  {
    const white = PM(0xf0ece2, { roughness: 0.6 });
    group.add(mesh(new THREE.CylinderGeometry(5.4, 5.6, 0.4, 8), PM(0xcfc9ba, { map: concreteTex() }), gaz.x, 0.2, gaz.z));
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + Math.PI / 8; group.add(mesh(new THREE.CylinderGeometry(0.16, 0.2, 3.4, 10), white, gaz.x + Math.sin(a) * 4.6, 2.1, gaz.z + Math.cos(a) * 4.6)); }
    group.add(mesh(new THREE.ConeGeometry(6.4, 2.6, 8), PM(0x2f6b4f, { roughness: 0.55 }), gaz.x, 4.9, gaz.z));
    group.add(mesh(new THREE.CylinderGeometry(5.2, 5.2, 0.35, 8), white, gaz.x, 3.8, gaz.z));
    group.add(mesh(new THREE.SphereGeometry(0.3, 12, 8), PM(0xd9b24a, { metalness: 0.8, roughness: 0.3 }), gaz.x, 6.35, gaz.z));
    obst.push(circleObs(gaz.x, gaz.z, 5.6));
    const wood = PM(0x8a5f3a, { roughness: 0.8 });
    group.add(mesh(new THREE.BoxGeometry(9, 3.2, 5), PM(0xe0d8c6, { roughness: 0.8 }), pav.x, 1.6, pav.z));
    group.add(mesh(new THREE.BoxGeometry(11, 0.35, 7), PM(0x7a3b2a, { roughness: 0.6 }), pav.x, 3.4, pav.z));
    group.add(mesh(new THREE.BoxGeometry(5, 1.2, 0.1), PM(0x1d2a36, { metalness: 0.5, roughness: 0.2 }), pav.x, 1.8, pav.z + 2.55, { cast: false }));
    obst.push(boxObs(pav.x, pav.z, 4.5, 2.5, 0));
    for (const [dx, dz] of [[-6, 6], [1, 8], [8, 6]]) {                          // picnic tables
      const tx = pav.x + dx, tz = pav.z + dz;
      group.add(mesh(new THREE.BoxGeometry(2, 0.1, 0.9), wood, tx, 0.78, tz)); group.add(mesh(new THREE.BoxGeometry(2, 0.08, 0.35), wood, tx, 0.45, tz - 0.85)); group.add(mesh(new THREE.BoxGeometry(2, 0.08, 0.35), wood, tx, 0.45, tz + 0.85));
      obst.push(boxObs(tx, tz, 1.05, 1.15, 0, { nm: true }));
    }
  }

  /* ---- benches + lamps along the paths ---- */
  {
    const benchM = [], lampM = [];
    const wood = PM(0x8a5f3a, { roughness: 0.8 }), iron = PM(0x23302a, { metalness: 0.6, roughness: 0.45 });
    const onPath = (pts, closed, every, off, benches) => {
      let acc = 0;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i], b = pts[(i + 1) % pts.length]; if (!closed && i === pts.length - 1) break;
        const tx = b.x - a.x, tz = b.z - a.z, tl = Math.hypot(tx, tz) || 1; acc += tl;
        if (acc < every) continue; acc = 0;
        const rl = Math.hypot(a.x, a.z) || 1, ox = a.x / rl, oz = a.z / rl;       // outward normal
        const nx = -tz / tl, nz = tx / tl, s = (nx * ox + nz * oz) >= 0 ? 1 : -1;  // side facing away from the centre
        const x = a.x + s * nx * off, z = a.z + s * nz * off;
        if (Math.hypot(x, z) < 26 || Math.hypot(x, z) > WALL - 6 || surfaceDist(ellipseObs(pond.x, pond.z, pond.rx, pond.rz, pond.a), x, z) < 4) continue;
        if (benches) {
          let ang = Math.atan2(-tz, tx); const fx = Math.sin(ang), fz = Math.cos(ang);
          if (fx * -s * nx + fz * -s * nz < 0) ang += Math.PI;
          benchM.push(place(x, 0, z, ang)); obst.push(boxObs(x, z, 0.95, 0.3, ang, { nm: true }));
        } else { lampM.push(place(x, 0, z, 0)); obst.push(circleObs(x, z, 0.3, { nm: true })); }
      }
    };
    onPath(loop, true, 30, 4.4, true); onPath(loop, true, 22, 4.4, false);
    for (const p of paths.slice(1)) onPath(p.pts, false, 24, 4.2, false);
    for (let k = 0; k < 10; k++) { const th = k / 10 * Math.PI * 2 + 0.3; lampM.push(place(Math.sin(th) * 20.5, 0, Math.cos(th) * 20.5, 0)); obst.push(circleObs(Math.sin(th) * 20.5, Math.cos(th) * 20.5, 0.3, { nm: true })); }
    for (let k = 0; k < 8; k++) { const th = k / 8 * Math.PI * 2 + 0.2, bx = Math.sin(th) * 14.5, bz = Math.cos(th) * 14.5; benchM.push(place(bx, 0, bz, th + Math.PI)); obst.push(boxObs(bx, bz, 0.95, 0.3, th + Math.PI, { nm: true })); }
    group.add(instanced(new THREE.BoxGeometry(1.9, 0.1, 0.5).translate(0, 0.5, 0), wood, benchM));
    group.add(instanced(new THREE.BoxGeometry(1.9, 0.45, 0.07).translate(0, 0.85, -0.22), wood, benchM));
    group.add(instanced(mergeGeometries([new THREE.BoxGeometry(0.08, 0.5, 0.45).translate(-0.82, 0.25, 0), new THREE.BoxGeometry(0.08, 0.5, 0.45).translate(0.82, 0.25, 0)]), iron, benchM));
    group.add(instanced(mergeGeometries([new THREE.CylinderGeometry(0.09, 0.14, 4.4, 8).translate(0, 2.2, 0), new THREE.ConeGeometry(0.5, 0.4, 4).translate(0, 5.1, 0)]), iron, lampM));
    group.add(instanced(new THREE.BoxGeometry(0.4, 0.6, 0.4).translate(0, 4.6, 0), PM(0xfff1c8, { emissive: 0xffe2a0, emissiveIntensity: map.night ? 3 : 0.7 }), lampM, { cast: false }));
  }

  /* ---- trees: groves at the edge, a few specimens in the meadows, nothing on paths ---- */
  {
    const pondO = ellipseObs(pond.x, pond.z, pond.rx, pond.rz, pond.a);
    const free = (x, z) => {
      const r = Math.hypot(x, z);
      if (r < 30 || r > WALL - 5) return false;
      if (nearPath(x, z, 7.5)) return false;
      if (surfaceDist(pondO, x, z) < 7) return false;
      if (Math.abs(x - garden.x) < garden.hw + 8 && Math.abs(z - garden.z) < garden.hd + 8) return false;
      if (Math.hypot(x - gaz.x, z - gaz.z) < 13 || (Math.abs(x - pav.x) < 14 && Math.abs(z - pav.z) < 13)) return false;
      return true;
    };
    const taken = [], tryPlace = (x, z, minD) => { if (!free(x, z)) return false; for (const t of taken) if (Math.hypot(t.x - x, t.z - z) < minD) return false; taken.push({ x, z }); return true; };
    const oaks = [], pines = [];
    for (let n = 0; n < 5200 && oaks.length + pines.length < 170; n++) {                   // outer grove
      const a = R() * 6.283, r = 104 + R() * (WALL - 110), x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (!tryPlace(x, z, 6.5)) continue;
      (R() < 0.28 ? pines : oaks).push({ x, z, s: 0.95 + R() * 0.7 });
    }
    for (let n = 0, m = 0; n < 4000 && m < 40; n++) {                                         // meadow specimens
      const a = R() * 6.283, r = 32 + R() * 70, x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (!tryPlace(x, z, 15)) continue; oaks.push({ x, z, s: 1.1 + R() * 0.6 }); m++;
    }
    scatterTrees(group, obst, oaks, { kind: 'oak', color: 0x3f7f3a, seed: 81 });
    scatterTrees(group, obst, pines, { kind: 'pine', color: 0x2c5e3a, seed: 82 });

    const tufts = [], tg = new THREE.ConeGeometry(0.11, 0.7, 4).translate(0, 0.35, 0), col = new THREE.Color();
    for (let n = 0; n < 9000 && tufts.length < 3200; n++) {
      const a = R() * 6.283, r = Math.sqrt(R()) * (WALL - 3), x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (r < 25 || nearPath(x, z, 4.2) || surfaceDist(pondO, x, z) < 1.8) continue;
      if (Math.abs(x - garden.x) < garden.hw + 2 && Math.abs(z - garden.z) < garden.hd + 2) continue;
      tufts.push({ m: place(x, 0, z, R() * 6, 0.8 + R() * 1.4, 0.7 + R() * 1.3, 0.8 + R() * 1.4), c: col.setHSL(0.24 + R() * 0.05, 0.45 + R() * 0.2, 0.28 + R() * 0.16).getHex() });
    }
    group.add(instanced(tg, PM(0xffffff, { roughness: 1 }), tufts, { cast: false }));
    const fl = [], palC = [0xff6a9a, 0xffd23f, 0xffffff, 0xb388ff, 0xff7b00];
    for (let n = 0; n < 6000 && fl.length < 360; n++) {
      const cx = (R() - .5) * 2 * (WALL - 20), cz = (R() - .5) * 2 * (WALL - 20);
      if (Math.hypot(cx, cz) > WALL - 14 || Math.hypot(cx, cz) < 28 || nearPath(cx, cz, 5)) continue;
      const cc = palC[(R() * 5) | 0];
      for (let k = 0; k < 8; k++) { const x = cx + (R() - .5) * 5, z = cz + (R() - .5) * 5; if (free(x, z) || !nearPath(x, z, 4)) fl.push({ m: place(x, 0.22, z, 0, 0.8 + R() * 0.5), c: cc }); }
    }
    group.add(instanced(new THREE.IcosahedronGeometry(0.22, 1), PM(0xffffff, { roughness: 0.7 }), fl, { cast: false }));
  }

  /* ---- boundary: low stone wall exactly at the collision radius, hedge behind it ---- */
  wallRing(group, WALL, { h: 1.15, t: 0.8, color: 0xb7aa92, tex: concreteTex(14) });
  wallRing(group, WALL + 0.8, { h: 2.6, t: 2.2, color: 0x3a7a38, tex: speckleTex(41, { contrast: 0.3, base: 225 }), flat: false, segs: 120 });
  hillRing(group, { count: 14, rMin: 560, rMax: 800, hMin: 60, hMax: 140, colors: map.mountains, seed: 23 });
  addClouds(group, 16, !!map.night);
  return { wall: WALL, isl: 0, roadHalf: 6, spawn: { x: 0, z: -72, h: 0 } };
}
