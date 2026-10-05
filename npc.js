// NPC pedestrians and vehicles for freeroam maps.
// Each NPC has a simple state machine and a low-poly body.
// They have a collision radius the player can bump into.

import * as THREE from 'three';

const PCOLORS = [0xff4d6d, 0x2f7dff, 0xffc21a, 0x2fe3a0, 0x9b5de5, 0xff9a3c, 0x6df0c2, 0xf4f4f4];

/* ---------- Pedestrian ---------- */
function buildPerson(seed = Math.random()) {
  const g = new THREE.Group();
  const palette = PCOLORS[Math.floor(seed * PCOLORS.length) % PCOLORS.length];
  const skin = new THREE.MeshStandardMaterial({ color: [0xecd0b0, 0xc68863, 0x8a5a3a, 0xe4bc90][Math.floor(seed * 4) % 4], roughness: 0.8, flatShading: true });
  const shirt = new THREE.MeshStandardMaterial({ color: palette, roughness: 0.9, flatShading: true });
  const pants = new THREE.MeshStandardMaterial({ color: [0x1b1f2a, 0x2a2f3a, 0x3a2f26][Math.floor(seed * 3) % 3], roughness: 0.9, flatShading: true });
  const shoe = new THREE.MeshStandardMaterial({ color: 0x0a0d14, roughness: 0.9, flatShading: true });

  const hipY = 0.85;
  // legs — pivot from hips
  const legL = new THREE.Group(), legR = new THREE.Group();
  legL.position.set(-0.11, hipY, 0); legR.position.set(0.11, hipY, 0);
  for (const leg of [legL, legR]) {
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.42, 6), pants);
    thigh.position.y = -0.21; leg.add(thigh);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.42, 6), pants);
    shin.position.y = -0.63; leg.add(shin);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.24), shoe);
    foot.position.set(0, -0.86, 0.05); leg.add(foot);
  }
  g.add(legL, legR);
  // torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.52, 0.22), shirt);
  torso.position.y = 1.18; g.add(torso);
  // shoulders
  const shoulder = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.09, 0.22), shirt);
  shoulder.position.y = 1.42; g.add(shoulder);
  // arms — pivot from shoulders
  const armL = new THREE.Group(), armR = new THREE.Group();
  armL.position.set(-0.22, 1.4, 0); armR.position.set(0.22, 1.4, 0);
  for (const arm of [armL, armR]) {
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.045, 0.36, 6), shirt);
    upper.position.y = -0.18; arm.add(upper);
    const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.34, 6), skin);
    fore.position.y = -0.53; arm.add(fore);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), skin);
    hand.position.y = -0.73; arm.add(hand);
  }
  g.add(armL, armR);
  // neck + head
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.08, 6), skin);
  neck.position.y = 1.51; g.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10), skin);
  head.position.y = 1.63; g.add(head);
  // hair
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.122, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.65), new THREE.MeshStandardMaterial({ color: [0x1a1010, 0x4a2a14, 0x6a4a2a, 0x101010][Math.floor(seed * 4) % 4], roughness: 0.9, flatShading: true }));
  hair.position.y = 1.63; g.add(hair);
  return { group: g, legL, legR, armL, armR, head, walkPhase: seed * 6.28 };
}

/* ---------- Vehicle ---------- */
function buildVehicle(seed = Math.random()) {
  const g = new THREE.Group();
  const palette = PCOLORS[Math.floor(seed * PCOLORS.length) % PCOLORS.length];
  const bodyMat = new THREE.MeshStandardMaterial({ color: palette, roughness: 0.5, metalness: 0.3, flatShading: true });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x2a3a52, roughness: 0.2, metalness: 0.4, flatShading: true });
  const tyreMat = new THREE.MeshStandardMaterial({ color: 0x0f1015, roughness: 0.95, flatShading: true });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xc8ced8, roughness: 0.4, metalness: 0.7, flatShading: true });
  const lightMat = new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xfff2c0, emissiveIntensity: 1.2 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xff2233, emissive: 0xff2233, emissiveIntensity: 1.0 });

  // body
  const lower = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.55, 4.0), bodyMat);
  lower.position.y = 0.55; g.add(lower);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.55, 2.0), bodyMat);
  cabin.position.set(0, 1.1, -0.2); g.add(cabin);
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.45, 0.06), glassMat);
  windshield.position.set(0, 1.1, 0.82); g.add(windshield);
  const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.42, 0.06), glassMat);
  rearGlass.position.set(0, 1.1, -1.22); g.add(rearGlass);
  // lights
  for (const sx of [1, -1]) {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.14, 0.05), lightMat);
    h.position.set(sx * 0.65, 0.55, 2.02); g.add(h);
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.14, 0.05), tailMat);
    t.position.set(sx * 0.65, 0.55, -2.02); g.add(t);
  }
  // wheels
  const wheels = [];
  for (const sx of [1, -1]) for (const sz of [1.3, -1.3]) {
    const w = new THREE.Group();
    const tyre = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.22, 12).rotateZ(Math.PI / 2), tyreMat);
    w.add(tyre);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.23, 8).rotateZ(Math.PI / 2), rimMat);
    w.add(rim);
    w.position.set(sx * 0.9, 0.34, sz);
    g.add(w);
    wheels.push(w);
  }
  return { group: g, wheels };
}

/* ---------- Traffic field ---------- */
/* Pedestrians walk along predefined paths or wander around.
   Vehicles drive in long straight lines or circles around the map. */
export function createNPCField(worldGroup, kind, count, wallR) {
  const npcs = [];
  const layout = kind;

  if (layout === 'city') {
    // pedestrians wander the sidewalks in the "city" grid
    for (let i = 0; i < count; i++) {
      const p = buildPerson(Math.random());
      const a = Math.random() * Math.PI * 2, r = 20 + Math.random() * (wallR - 40);
      const x = Math.sin(a) * r, z = Math.cos(a) * r;
      p.group.position.set(x, 0, z);
      p.group.rotation.y = Math.random() * Math.PI * 2;
      p.speed = 1.2 + Math.random() * 0.8;
      p.dirT = 0;
      p.dirX = Math.cos(p.group.rotation.y);
      p.dirZ = Math.sin(p.group.rotation.y);
      worldGroup.add(p.group);
      npcs.push({ kind: 'person', model: p, radius: 0.35, speed: p.speed });
    }
    // a few slow-moving vehicles on the outer ring
    for (let i = 0; i < Math.min(8, count / 3); i++) {
      const v = buildVehicle(Math.random());
      const a = Math.random() * Math.PI * 2, r = wallR * 0.6;
      v.group.position.set(Math.sin(a) * r, 0, Math.cos(a) * r);
      v.group.rotation.y = a + Math.PI / 2;
      v.orbitAngle = a;
      v.orbitRadius = r;
      v.speed = 4 + Math.random() * 3;
      worldGroup.add(v.group);
      npcs.push({ kind: 'vehicle', model: v, radius: 1.6, speed: v.speed });
    }
  } else if (layout === 'cargo') {
    // dock workers walk between containers
    for (let i = 0; i < count; i++) {
      const p = buildPerson(Math.random());
      const a = Math.random() * Math.PI * 2, r = 30 + Math.random() * (wallR - 50);
      p.group.position.set(Math.sin(a) * r, 0, Math.cos(a) * r);
      p.group.rotation.y = Math.random() * Math.PI * 2;
      p.speed = 1.0 + Math.random() * 0.6;
      worldGroup.add(p.group);
      npcs.push({ kind: 'person', model: p, radius: 0.35, speed: p.speed });
    }
    // forklift-style slow movers
    for (let i = 0; i < Math.min(5, count / 4); i++) {
      const v = buildVehicle(0.3);
      v.group.scale.setScalar(0.75);
      const a = Math.random() * Math.PI * 2, r = wallR * 0.4;
      v.group.position.set(Math.sin(a) * r, 0, Math.cos(a) * r);
      v.orbitAngle = a;
      v.orbitRadius = r;
      v.speed = 2.5 + Math.random() * 1.5;
      worldGroup.add(v.group);
      npcs.push({ kind: 'vehicle', model: v, radius: 1.3, speed: v.speed });
    }
  } else if (layout === 'park') {
    // joggers and dog walkers
    for (let i = 0; i < count; i++) {
      const p = buildPerson(Math.random());
      const a = Math.random() * Math.PI * 2, r = 25 + Math.random() * (wallR - 40);
      p.group.position.set(Math.sin(a) * r, 0, Math.cos(a) * r);
      p.group.rotation.y = Math.random() * Math.PI * 2;
      p.speed = 1.6 + Math.random() * 1.0;
      worldGroup.add(p.group);
      npcs.push({ kind: 'person', model: p, radius: 0.35, speed: p.speed });
    }
  }

  return npcs;
}

/* Update all NPCs. Called every frame. Returns the array of collision events. */
export function updateNPCs(npcs, dt, playerX, playerZ, playerVX, playerVZ, wallR, onHit) {
  const out = [];
  for (let i = 0; i < npcs.length; i++) {
    const n = npcs[i];
    const m = n.model;
    if (n.kind === 'person') {
      // simple wander: pick a direction, walk, then turn occasionally
      m.dirT -= dt;
      if (m.dirT <= 0) {
        m.dirT = 1.5 + Math.random() * 3;
        // bias direction away from walls
        const dist = Math.hypot(m.group.position.x, m.group.position.z);
        let bias = 0;
        if (dist > wallR - 8) bias = Math.atan2(m.group.position.x, m.group.position.z);
        else bias = Math.random() * Math.PI * 2;
        const newDir = bias;
        m.dirX = Math.sin(newDir);
        m.dirZ = Math.cos(newDir);
      }
      const dx = m.dirX * n.speed * dt, dz = m.dirZ * n.speed * dt;
      m.group.position.x += dx;
      m.group.position.z += dz;
      m.group.rotation.y = Math.atan2(m.dirX, m.dirZ);
      // walk cycle
      m.walkPhase += dt * 8;
      const swing = Math.sin(m.walkPhase) * 0.55;
      m.legL.rotation.x = swing;
      m.legR.rotation.x = -swing;
      m.armL.rotation.x = -swing * 0.7;
      m.armR.rotation.x = swing * 0.7;
      // collision with player
      const pdx = playerX - m.group.position.x, pdz = playerZ - m.group.position.z;
      const pd = Math.hypot(pdx, pdz);
      if (pd < n.radius + 1.4 && (playerVX * playerVX + playerVZ * playerVZ) > 4) {
        onHit(m.group.position.x, m.group.position.z);
        // knock them back
        m.group.position.x -= pdx * 0.4;
        m.group.position.z -= pdz * 0.4;
        out.push({ type: 'person', x: m.group.position.x, z: m.group.position.z });
      }
    } else {
      // vehicle: slow orbit
      m.orbitAngle += dt * n.speed / m.orbitRadius * 0.35;
      m.group.position.x = Math.sin(m.orbitAngle) * m.orbitRadius;
      m.group.position.z = Math.cos(m.orbitAngle) * m.orbitRadius;
      m.group.rotation.y = m.orbitAngle + Math.PI / 2;
      // spin wheels
      for (const w of m.wheels) w.rotation.x += dt * n.speed * 2;
      // collision with player
      const pdx = playerX - m.group.position.x, pdz = playerZ - m.group.position.z;
      const pd = Math.hypot(pdx, pdz);
      if (pd < n.radius + 1.6) {
        onHit(m.group.position.x, m.group.position.z);
        out.push({ type: 'vehicle', x: m.group.position.x, z: m.group.position.z });
      }
    }
  }
  return out;
}