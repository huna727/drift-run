import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BODY_OFFS, BODY_R } from './collision.js';

const PAL = [0xd9dadd, 0x1d2027, 0xa31c1c, 0x2d5190, 0xe2b422, 0x3b7c4c, 0x8c919a, 0xf0f0f0, 0x7c3c1e, 0x2aa2b2, 0xc9622b];
const LANES = [3.8, 7.4, 11.0];            // lane centres measured from the highway median

function tint(geo, hex) {
  const n = geo.attributes.position.count, c = new THREE.Color(hex), a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3)); return geo;
}
function carGeo() {
  const parts = [
    tint(new THREE.BoxGeometry(1.9, 0.62, 4.4).translate(0, 0.62, 0), 0xffffff),
    tint(new THREE.BoxGeometry(1.7, 0.2, 1.3).translate(0, 0.98, 1.2), 0xffffff),
    tint(new THREE.BoxGeometry(1.64, 0.56, 2.25).translate(0, 1.24, -0.25), 0x18212b),
    tint(new THREE.BoxGeometry(1.5, 0.08, 1.9).translate(0, 1.55, -0.25), 0xffffff),
  ];
  for (const sx of [-1, 1]) for (const sz of [-1.4, 1.4]) parts.push(tint(new THREE.CylinderGeometry(0.34, 0.34, 0.26, 10).rotateZ(Math.PI / 2).translate(sx * 0.97, 0.34, sz), 0x0e0f12));
  return mergeGeometries(parts);
}
function lightGeo() {
  const parts = [];
  for (const sx of [-0.7, 0.7]) {
    parts.push(tint(new THREE.BoxGeometry(0.42, 0.14, 0.08).translate(sx, 0.72, -2.2), 0xff2418));
    parts.push(tint(new THREE.BoxGeometry(0.42, 0.14, 0.08).translate(sx, 0.72, 2.2), 0xfff0c8));
  }
  return mergeGeometries(parts);
}

export class Traffic {
  // roads = { lineOK(axis,c,s), P, RING_R }
  constructor(group, roads, max = 48) {
    this.roads = roads; this.max = max; this.n = 0; this._d = new THREE.Object3D(); this._c = new THREE.Color();
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.38, metalness: 0.4, envMapIntensity: 1.1 });
    this.mesh = new THREE.InstancedMesh(carGeo(), mat, max);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
    this.lights = new THREE.InstancedMesh(lightGeo(), new THREE.MeshBasicMaterial({ vertexColors: true }), max);
    for (const m of [this.mesh, this.lights]) { m.frustumCulled = false; m.count = 0; }
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.cars = Array.from({ length: max }, () => ({ on: false, kind: '', axis: 'z', c: 0, s: 0, phi: 0, dir: 1, lane: 0, v: 0, vMax: 10, x: 0, z: 0, h: 0, vx: 0, vz: 0, tint: 0xffffff }));
    group.add(this.mesh, this.lights);
  }
  setCount(n) { this.n = Math.min(n, this.max); for (let i = this.n; i < this.max; i++) this.cars[i].on = false; }

  place(c) {
    const R = this.roads;
    if (c.kind === 'grid') {
      c.h = c.axis === 'z' ? (c.dir > 0 ? 0 : Math.PI) : (c.dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      const bx = c.axis === 'z' ? c.c : c.s, bz = c.axis === 'z' ? c.s : c.c;
      c.x = bx - Math.cos(c.h) * 4.5; c.z = bz + Math.sin(c.h) * 4.5;       // right-hand lane
    } else if (c.kind === 'ring') {
      const r = R.RING_R + c.dir * c.lane;
      c.x = Math.sin(c.phi) * r; c.z = Math.cos(c.phi) * r; c.h = c.phi + c.dir * Math.PI / 2;
    } else {
      c.x = c.s; c.z = c.dir * c.lane; c.h = c.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    }
    c.vx = Math.sin(c.h) * c.v; c.vz = Math.cos(c.h) * c.v;
  }

  spawn(c, px, pz, view) {
    const R = this.roads, rnd = Math.random;
    for (let t = 0; t < 10; t++) {
      const a = rnd() * 6.2832, d = view * (0.4 + 0.5 * rnd()), x = px + Math.sin(a) * d, z = pz + Math.cos(a) * d, roll = rnd();
      c.dir = rnd() < 0.5 ? 1 : -1;
      if (roll < 0.2) {
        c.kind = 'ring'; c.phi = Math.atan2(x, z); c.lane = LANES[(rnd() * 3) | 0]; c.vMax = 25 + rnd() * 10;
      } else if (roll < 0.3) {
        c.kind = 'ew'; c.s = x; c.lane = LANES[(rnd() * 3) | 0]; c.vMax = 25 + rnd() * 10;
        if (Math.abs(c.s) > 1060) continue;
      } else {
        c.kind = 'grid'; c.axis = rnd() < 0.5 ? 'z' : 'x'; c.vMax = 9 + rnd() * 7;
        c.c = Math.round((c.axis === 'z' ? x : z) / R.P) * R.P; c.s = c.axis === 'z' ? z : x;
        if (!R.lineOK(c.axis, c.c, c.s)) continue;
      }
      c.v = c.vMax * 0.85; this.place(c);
      const dx = c.x - px, dz = c.z - pz, dd = Math.hypot(dx, dz);
      if (dd < 24 || dd > view) continue;
      c.tint = PAL[(rnd() * PAL.length) | 0]; c.on = true; return true;
    }
    return false;
  }

  update(px, pz, dt, view) {
    const R = this.roads, d = this._d; let k = 0, spawned = 0;
    for (let i = 0; i < this.n; i++) {
      const c = this.cars[i];
      if (c.on) {
        c.v += (c.vMax - c.v) * Math.min(1, dt * 0.7);
        if (c.kind === 'grid') { c.s += c.dir * c.v * dt; if (!R.lineOK(c.axis, c.c, c.s)) c.on = false; }
        else if (c.kind === 'ring') c.phi += c.dir * c.v / (R.RING_R + c.dir * c.lane) * dt;
        else { c.s += c.dir * c.v * dt; if (Math.abs(c.s) > 1080) c.on = false; }
        if (c.on) {
          this.place(c);
          const dx = c.x - px, dz = c.z - pz;
          if (dx * dx + dz * dz > view * view * 1.2) c.on = false;
        }
      }
      if (!c.on && spawned < 4) { spawned++; this.spawn(c, px, pz, view); }
      if (!c.on) continue;
      d.position.set(c.x, 0, c.z); d.rotation.set(0, c.h, 0); d.updateMatrix();
      this.mesh.setMatrixAt(k, d.matrix); this.lights.setMatrixAt(k, d.matrix); this.mesh.setColorAt(k, this._c.setHex(c.tint)); k++;
    }
    this.mesh.count = this.lights.count = k;
    this.mesh.instanceMatrix.needsUpdate = this.lights.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  // player S {x,z,h,vx,vz}; hit(nx,nz,pen) is the game's wall-style response
  collide(S, hit) {
    const sfx = Math.sin(S.h), sfz = Math.cos(S.h);
    for (let i = 0; i < this.n; i++) {
      const c = this.cars[i]; if (!c.on) continue;
      const dx = S.x - c.x, dz = S.z - c.z; if (dx * dx + dz * dz > 40) continue;
      const cfx = Math.sin(c.h), cfz = Math.cos(c.h); let best = null;
      for (const po of BODY_OFFS) for (const qo of BODY_OFFS) {
        const ax = S.x + sfx * po, az = S.z + sfz * po, bx = c.x + cfx * qo, bz = c.z + cfz * qo;
        const ex = ax - bx, ez = az - bz, dd = Math.hypot(ex, ez), pen = 2 * BODY_R - dd;
        if (pen > 0 && (!best || pen > best.pen)) best = { pen, nx: ex / (dd || 1e-6), nz: ez / (dd || 1e-6) };
      }
      if (best) { S.vx -= c.vx; S.vz -= c.vz; hit(best.nx, best.nz, best.pen); S.vx += c.vx; S.vz += c.vz; c.v *= 0.5; }
    }
  }
}
