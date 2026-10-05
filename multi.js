import { resolveBody } from './collision.js';
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

export const MP_R = { duel: 100, snake: 112 };
export const ISL = 38, CR = 1.6, CRAD = 0.95;
export const MAX_SEG = 14, SEG_GAP = 5.2, MAX_ORBS = 110, BASE_ORBS = 45;
export const PCOLORS = [0xff4d6d, 0x2f7dff, 0xffc21a, 0x2fe3a0];
export const PNAMES = ['P1', 'P2', 'P3', 'P4'];
export const KEYMAPS = [
  { name: 'W A S D  +  Space', gas: ['KeyW'], brake: ['KeyS'], left: ['KeyA'], right: ['KeyD'], hb: ['Space', 'ShiftLeft'] },
  { name: 'Arrows  +  Right Shift', gas: ['ArrowUp'], brake: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'], hb: ['ShiftRight', 'Enter'] },
  { name: 'I J K L  +  U', gas: ['KeyI'], brake: ['KeyK'], left: ['KeyJ'], right: ['KeyL'], hb: ['KeyU', 'KeyO'] },
  { name: 'T F G H  +  R  (or numpad)', gas: ['KeyT', 'Numpad8'], brake: ['KeyG', 'Numpad5'], left: ['KeyF', 'Numpad4'], right: ['KeyH', 'Numpad6'], hb: ['KeyR', 'Numpad0'] },
];

export function layout(n, W, H) {
  if (n <= 1) return [{ x: 0, y: 0, w: W, h: H }];
  if (n === 2) return W >= H * 0.9
    ? [{ x: 0, y: 0, w: W / 2, h: H }, { x: W / 2, y: 0, w: W / 2, h: H }]
    : [{ x: 0, y: 0, w: W, h: H / 2 }, { x: 0, y: H / 2, w: W, h: H / 2 }];
  const w = W / 2, h = H / 2;
  return [{ x: 0, y: 0, w, h }, { x: w, y: 0, w, h }, { x: 0, y: h, w, h }, { x: w, y: h, w, h }].slice(0, 4);
}

export function spawnPose(i, n, R) {
  const a = i / n * Math.PI * 2 + 0.4, r = R * 0.68;
  return { x: Math.sin(a) * r, z: Math.cos(a) * r, h: a + Math.PI / 2, a, r };
}
export const makeSus = () => ({ pitch: 0, pv: 0, roll: 0, rv: 0, heave: 0, hv: 0 });
export function susStep(S, b, thr, brk, rollT, dt) {
  const pitchT = ((brk ? 0.04 : 0) - (thr ? 0.03 : 0)) * b.pitchAmp;
  const n = Math.max(1, Math.ceil(dt / 0.008)), h = dt / n, w = b.w, z = b.z, wr = w * 1.15, wh = w * 1.1;
  for (let i = 0; i < n; i++) {
    S.pv += (w * w * (pitchT - S.pitch) - 2 * z * w * S.pv) * h; S.pitch += S.pv * h;
    S.rv += (wr * wr * (rollT * b.rollAmp - S.roll) - 2 * z * wr * S.rv) * h; S.roll += S.rv * h;
    S.hv += (wh * wh * (0 - S.heave) - 2 * z * wh * S.hv) * h; S.heave += S.hv * h;
  }
  S.pitch = clamp(S.pitch, -0.25, 0.25); S.roll = clamp(S.roll, -0.3, 0.3); S.heave = clamp(S.heave, -0.15, 0.15);
}
export function makeCar(i, n, R, st, mode) {
  const p = spawnPose(i, n, R);
  const c = { i, x: p.x, z: p.z, h: p.h, vx: 0, vz: 0, steer: 0, loose: 0, sp: 0, slip: 0, vf: 0, yaw: 0, thr: 0, brk: 0,
    alive: true, st, segs: 0, orbs: 0, trail: [], camH: p.h, sus: makeSus(), spin: 0, pose: p };
  if (mode === 'snake') for (let d = 100; d >= 0; d -= 0.35) {
    const a = p.a - d / p.r; c.trail.push({ x: Math.sin(a) * p.r, z: Math.cos(a) * p.r, h: a + Math.PI / 2 });
  }
  return c;
}
export function stepCar(c, inp, dt) {
  const s = c.st, thr = inp.gas ? 1 : 0, brk = inp.brake ? 1 : 0, hb = !!inp.hb;
  const fx = Math.sin(c.h), fz = Math.cos(c.h), rx = -Math.cos(c.h), rz = Math.sin(c.h);
  let vf = c.vx * fx + c.vz * fz, vl = c.vx * rx + c.vz * rz;
  const sp = Math.hypot(vf, vl), slip = Math.atan2(vl, Math.abs(vf) + 0.001);
  const si = (inp.steer || 0) * (brk && vf > 5 ? 1 - s.brakeUnder : 1), assist = -0.4 * clamp(vl / 10, -1, 1) * c.loose;
  c.steer += (clamp(si + assist, -1, 1) - c.steer) * Math.min(1, dt * (si ? 10 : 14));
  if (thr) vf += s.power * (1 - clamp(vf / s.top, 0, 1.2)) * dt * (vf < 0 ? 2 : 1);
  if (brk) vf = vf > 0.5 ? vf - 38 * dt : Math.max(-12, vf - 14 * dt);
  vf *= Math.exp(-((thr ? 0.09 : 0.25) + s.dragK) * dt);
  if (!thr && !brk && Math.abs(vf) < 3) vf *= Math.exp(-2.5 * dt);
  if (hb) vf *= Math.exp(-0.42 * dt);
  let want = hb ? 1 : (thr && vf > 8 && (Math.abs(c.steer) > 0.20 * s.entry || Math.abs(slip) > 0.14 * s.entry)) ? 1 : 0;
  if (brk && sp > 9 && s.brakeLoose > 0 && Math.abs(c.steer) > 0.15) want = Math.max(want, s.brakeLoose * 0.9);
  c.loose += (want - c.loose) * Math.min(1, dt * (want ? 14 : 4));
  const gripF = s.grip * 0.68, driftF = s.drift * 1.22;
  vl *= Math.exp(-lerp(gripF, driftF * (hb ? 0.5 : 1), c.loose) * (1 + s.aeroK * sp * sp) * dt);
  const dir = vf >= -1 ? 1 : -1, sf = Math.min(1, sp / 6) / (1 + sp / (s.top * 1.5));
  const yaw = c.steer * s.steer * sf * dir * (1 + 0.45 * c.loose) * (hb ? 1.35 : 1);
  c.vx = fx * vf + rx * vl; c.vz = fz * vf + rz * vl;
  c.h += yaw * dt; c.x += c.vx * dt; c.z += c.vz * dt;
  c.sp = sp; c.slip = slip; c.vf = vf; c.yaw = yaw; c.thr = thr; c.brk = brk; c.hb = hb;
}

function hitWall(c, nx, nz, pen, out) {
  c.x += nx * pen; c.z += nz * pen;
  const vn = c.vx * nx + c.vz * nz;
  if (vn < 0) {
    c.vx -= 1.35 * vn * nx; c.vz -= 1.35 * vn * nz; c.vx *= 0.92; c.vz *= 0.92;
    if (-vn > 4) out.push({ type: 'wall', car: c, impact: -vn });
  }
}
export function worldCollide(c, R, obst, out) {
  const d = Math.hypot(c.x, c.z) || 1;
  if (d > R - CR) hitWall(c, -c.x / d, -c.z / d, d - (R - CR), out);
  if (ISL > 0 && d < ISL + CR) hitWall(c, c.x / d, c.z / d, ISL + CR - d, out);
  resolveBody(c, obst, (nx, nz, pen) => hitWall(c, nx, nz, pen, out));
}
export const circles = c => {
  const fx = Math.sin(c.h), fz = Math.cos(c.h);
  return [1.35, 0, -1.35].map(o => ({ x: c.x + fx * o, z: c.z + fz * o }));
};
export function collideCars(cars, out, duel) {
  for (let i = 0; i < cars.length; i++) for (let j = i + 1; j < cars.length; j++) {
    const A = cars[i], B = cars[j];
    if (!A.alive || !B.alive || Math.hypot(A.x - B.x, A.z - B.z) > 8) continue;
    const ca = circles(A), cb = circles(B), D = 2 * CRAD;
    let best = null, frontA = false, frontB = false;
    for (let p = 0; p < 3; p++) for (let q = 0; q < 3; q++) {
      const dx = cb[q].x - ca[p].x, dz = cb[q].z - ca[p].z, d = Math.hypot(dx, dz) || 1e-6, pen = D - d;
      if (pen <= 0) continue;
      if (p === 0) frontA = true;
      if (q === 0) frontB = true;
      if (!best || pen > best.pen) best = { pen, nx: dx / d, nz: dz / d };
    }
    if (!best) continue;
    const { nx, nz, pen } = best;
    A.x -= nx * pen / 2; A.z -= nz * pen / 2; B.x += nx * pen / 2; B.z += nz * pen / 2;
    const closing = (A.vx - B.vx) * nx + (A.vz - B.vz) * nz;
    if (closing <= 0) continue;
    if (duel) {
      const hA = Math.sin(A.h) * nx + Math.cos(A.h) * nz, hB = Math.sin(B.h) * nx + Math.cos(B.h) * nz;
      if (closing > 5.5 && frontA && hA > 0.55 && Math.abs(hB) < 0.5) out.push({ type: 'side', attacker: A, victim: B, closing });
      else if (closing > 5.5 && frontB && -hB > 0.55 && Math.abs(hA) < 0.5) out.push({ type: 'side', attacker: B, victim: A, closing });
    }
    const j2 = closing * 0.78;
    A.vx -= j2 * nx; A.vz -= j2 * nz; B.vx += j2 * nx; B.vz += j2 * nz;
    if (closing > 3) out.push({ type: 'bump', a: A, b: B, closing });
  }
}

export function trailPush(c) {
  const l = c.trail[c.trail.length - 1];
  if (!l || Math.hypot(c.x - l.x, c.z - l.z) > 0.35) { c.trail.push({ x: c.x, z: c.z, h: c.h }); if (c.trail.length > 520) c.trail.shift(); }
}
export function segmentPoses(c) {
  const out = [], t = c.trail;
  let px = c.x, pz = c.z, acc = 0, target = SEG_GAP;
  for (let i = t.length - 1; i >= 0 && out.length < c.segs; i--) {
    const qx = t[i].x, qz = t[i].z, d = Math.hypot(px - qx, pz - qz);
    if (d < 1e-6) continue;
    while (out.length < c.segs && acc + d >= target) {
      const f = (target - acc) / d;
      out.push({ x: px + (qx - px) * f, z: pz + (qz - pz) * f, h: 0 }); target += SEG_GAP;
    }
    acc += d; px = qx; pz = qz;
  }
  let ax = c.x, az = c.z, ah = c.h;
  for (const s of out) { s.h = Math.atan2(ax - s.x, az - s.z); ax = s.x; az = s.z; }
  return out;
}
const segCircles = s => { const fx = Math.sin(s.h), fz = Math.cos(s.h); return [1.35, 0, -1.35].map(o => ({ x: s.x + fx * o, z: s.z + fz * o })); };

export function addOrb(m, x, z) {
  let o = m.orbs.find(q => !q.on);
  if (!o) o = m.orbs[Math.floor(Math.random() * m.orbs.length)];
  o.on = true; o.x = x; o.z = z; o.hue = Math.random(); o.born = m.time;
}
export function randomOrb(m) {
  const R = arenaR(m) * 0.9, minR = ISL + 6;
  if (R <= minR) { addOrb(m, 0, 0); return; }
  for (let k = 0; k < 20; k++) {
    const a = Math.random() * Math.PI * 2, r = minR + Math.random() * (R - minR);
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    let clear = true;
    if (m.cars) for (const c of m.cars) if (c.alive && Math.hypot(c.x - x, c.z - z) < 4) { clear = false; break; }
    if (clear || k === 19) { addOrb(m, x, z); return; }
  }
}
export const arenaR = m => {
  const R0 = MP_R[m.mode], t0 = m.mode === 'duel' ? 45 : 25, t1 = m.mode === 'duel' ? 75 : 90;
  return R0 * lerp(1, 0.6, clamp((m.time - t0) / t1, 0, 1));
};
export function createMatch(cfg, stats, obst) {
  const m = { mode: cfg.mode, n: cfg.n, first: cfg.first, stats, obst, cars: [], scores: new Array(cfg.n).fill(0),
    orbs: Array.from({ length: MAX_ORBS }, () => ({ on: false, x: 0, z: 0, hue: 0, born: 0 })),
    phase: 'count', t: 3.2, round: 1, time: 0, lastWinner: -1, winner: -1, countShown: 4 };
  startRound(m, []);
  return m;
}
export function startRound(m, out) {
  const R = MP_R[m.mode];
  m.cars = Array.from({ length: m.n }, (_, i) => makeCar(i, m.n, R, m.stats[i], m.mode));
  for (const o of m.orbs) o.on = false;
  if (m.mode === 'snake') for (let k = 0; k < BASE_ORBS; k++) randomOrb(m);
  m.phase = 'count'; m.t = 3.2; m.time = 0; m.lastWinner = -1; m.countShown = 4;
  out.push({ type: 'round', round: m.round });
}
const alive = m => m.cars.filter(c => c.alive);
function endRound(m, winner, out) {
  m.phase = 'roundEnd'; m.t = 2.6; m.lastWinner = winner;
  if (winner >= 0) m.scores[winner]++;
  out.push({ type: 'roundEnd', winner });
}
export function updateMatch(m, inputs, dt) {
  const out = [], none = { gas: 0, brake: 0, hb: 0, steer: 0 };
  if (m.phase === 'count') {
    m.t -= dt;
    const n = Math.ceil(m.t);
    if (n < m.countShown && n >= 1) { m.countShown = n; out.push({ type: 'count', n }); }
    if (m.t <= 0) { m.phase = 'play'; out.push({ type: 'go' }); }
    return out;
  }
  if (m.phase === 'matchEnd') return out;
  const playing = m.phase === 'play';
  m.time += dt;
  const steps = Math.max(1, Math.ceil(dt / 0.0167)), h = dt / steps;
  const R = arenaR(m), obst = m.obst.filter(o => Math.hypot(o.x, o.z) - (o.br ?? o.r ?? 0) < R - 2);
  for (let s = 0; s < steps; s++) {
    for (const c of m.cars) if (c.alive) {
      stepCar(c, playing ? (inputs[c.i] || none) : none, h);
      worldCollide(c, R, obst, out);
      if (m.mode === 'snake') trailPush(c);
    }
    collideCars(m.cars, out, m.mode === 'duel' && playing);
  }
  if (!playing) { m.t -= dt; if (m.t <= 0) {
      const top = m.scores.findIndex(v => v >= m.first);
      if (top >= 0) { m.phase = 'matchEnd'; m.winner = top; out.push({ type: 'matchEnd', winner: top }); }
      else { m.round++; startRound(m, out); }
    }
    return out;
  }
  if (m.mode === 'duel') {
    const ev = out.find(e => e.type === 'side');
    if (ev) { out.push({ type: 'score', attacker: ev.attacker.i, victim: ev.victim.i }); endRound(m, ev.attacker.i, out); }
  } else {
    for (const c of m.cars) if (c.alive) {
      const f = circles(c);
      for (const o of m.orbs) if (o.on) {
        const d = Math.min(Math.hypot(o.x - f[0].x, o.z - f[0].z), Math.hypot(o.x - c.x, o.z - c.z));
        if (d < 2.5) { o.on = false; c.orbs++; const segs = Math.min(MAX_SEG, Math.floor(c.orbs / 2)); if (segs > c.segs) out.push({ type: 'grow', car: c.i, segs }); c.segs = segs; out.push({ type: 'pickup', car: c.i }); }
      }
    }
    let on = m.orbs.filter(o => o.on).length;
    while (on < BASE_ORBS) { randomOrb(m); on++; }
    for (const o of m.orbs) if (o.on && Math.hypot(o.x, o.z) > R - 2) { o.on = false; }
    const poses = m.cars.map(c => (c.alive ? segmentPoses(c) : []));
    for (const c of m.cars) {
      if (!c.alive) continue;
      const hc = circles(c).slice(0, 2);
      outer: for (const o of m.cars) {
        if (o === c || !o.alive) continue;
        for (const sg of poses[o.i]) for (const q of segCircles(sg)) for (const p of hc) {
          if (Math.hypot(p.x - q.x, p.z - q.z) < 2 * CRAD) { c.alive = false; c.killer = o.i; out.push({ type: 'kill', victim: c.i, killer: o.i });
            dropOrbs(m, c, poses[c.i]); break outer; }
        }
      }
    }
    const left = alive(m);
    if (left.length <= 1) endRound(m, left.length ? left[0].i : -1, out);
    else if (m.time > 150) {
      const best = Math.max(...left.map(c => c.segs)), top = left.filter(c => c.segs === best);
      endRound(m, top.length === 1 ? top[0].i : -1, out);
    }
  }
  return out;
}
function dropOrbs(m, c, poses) {
  addOrb(m, c.x, c.z);
  for (const p of poses) { addOrb(m, p.x + (Math.random() - 0.5) * 2, p.z + (Math.random() - 0.5) * 2); addOrb(m, p.x + (Math.random() - 0.5) * 3, p.z + (Math.random() - 0.5) * 3); }
  c.segs = 0;
}