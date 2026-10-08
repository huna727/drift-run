import * as THREE from 'three';

/* Weather systems: rain, snow, fog, clear.
   Each returns a group that can be added to the scene and an update(dt, camX, camZ) hook. */

export function createRain(scene) {
  const N = 900;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3);
  const vel = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i * 3 + 0] = (Math.random() - 0.5) * 200;
    pos[i * 3 + 1] = Math.random() * 60;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 200;
    vel[i] = 30 + Math.random() * 20;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xa0c8ff, size: 0.12, transparent: true, opacity: 0.75, depthWrite: false, fog: false });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);
  return {
    group: points,
    update(dt, camX, camZ) {
      for (let i = 0; i < N; i++) {
        pos[i * 3 + 1] -= vel[i] * dt;
        if (pos[i * 3 + 1] < 0) {
          pos[i * 3 + 0] = camX + (Math.random() - 0.5) * 200;
          pos[i * 3 + 1] = 60 + Math.random() * 20;
          pos[i * 3 + 2] = camZ + (Math.random() - 0.5) * 200;
        }
      }
      geo.attributes.position.needsUpdate = true;
    },
    dispose() { scene.remove(points); geo.dispose(); mat.dispose(); },
  };
}

export function createSnow(scene) {
  const N = 600;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3);
  const vel = new Float32Array(N);
  const drift = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i * 3 + 0] = (Math.random() - 0.5) * 220;
    pos[i * 3 + 1] = Math.random() * 80;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 220;
    vel[i] = 1.5 + Math.random() * 2.5;
    drift[i] = (Math.random() - 0.5) * 1.5;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.35, transparent: true, opacity: 0.9, depthWrite: false, fog: false });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);
  return {
    group: points,
    update(dt, camX, camZ) {
      for (let i = 0; i < N; i++) {
        pos[i * 3 + 1] -= vel[i] * dt;
        pos[i * 3 + 0] += drift[i] * dt;
        if (pos[i * 3 + 1] < 0) {
          pos[i * 3 + 0] = camX + (Math.random() - 0.5) * 220;
          pos[i * 3 + 1] = 80 + Math.random() * 20;
          pos[i * 3 + 2] = camZ + (Math.random() - 0.5) * 220;
        }
      }
      geo.attributes.position.needsUpdate = true;
    },
    dispose() { scene.remove(points); geo.dispose(); mat.dispose(); },
  };
}

export function createFog(scene, fogColor) {
  // No particles, we just adjust scene fog and ambient tint.
  // Returned update is a no-op; caller sets fog values directly.
  return {
    group: null,
    update() {},
    dispose() {},
  };
}

export function clearWeather(scene, prev) {
  if (prev) prev.dispose();
}