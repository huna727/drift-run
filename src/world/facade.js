import * as THREE from 'three';
import { rng, mkCanvas, canvasTex, PM } from './wtex.js';

// Metres covered by one repeat of each facade texture (bay width x storey block height).
// Buildings are sized to multiples of these so windows never get cut or stretched.
export const FACADE_TILE = { glass: [18, 14.4], punched: [18, 14.4], strip: [18, 14.4], shop: [12, 7.2], house: [9, 7.2], metal: [6, 3.6] };
export const NIGHT = { value: 0 };           // 0 = day, 1 = night: lights the windows

export function facadeCanvas(kind, lit) {
  const DIM = { shop: [768, 460, 4, 1], house: [384, 320, 3, 2], metal: [256, 160, 1, 1] }[kind] || [640, 512, 6, 4];
  const W = DIM[0], H = DIM[1], nb = DIM[2], nf = DIM[3];
  const c = mkCanvas(W, H), g = c.getContext('2d'), R = rng(kind.length * 977 + (lit ? 5 : 1)), bw = W / nb, fh = H / nf;
  if (lit) { g.fillStyle = '#000'; g.fillRect(0, 0, W, H); }
  const warm = () => { const v = 175 + R() * 80 | 0; return `rgb(${v},${v * 0.86 | 0},${v * 0.55 | 0})`; };
  if (kind === 'house') {
    if (!lit) { g.fillStyle = '#efe6d6'; g.fillRect(0, 0, W, H); for (let i = 0; i < 3000; i++) { const v = R() > .5 ? 255 : 0; g.fillStyle = `rgba(${v},${v},${v},${R() * 0.07})`; g.fillRect(R() * W, R() * H, 2, 2); } g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, fh - 3, W, 3); }
    for (let f = 0; f < nf; f++) for (let b = 0; b < nb; b++) {
      const door = f === nf - 1 && b === 1, x = b * bw + bw * 0.22, y = f * fh + fh * 0.2, w = bw * 0.56, h = fh * 0.55;
      if (door) { if (!lit) { g.fillStyle = '#6a4a35'; g.fillRect(x + w * 0.15, f * fh + fh * 0.28, w * 0.7, fh * 0.72); g.fillStyle = '#d8c8a8'; g.fillRect(x + w * 0.75, f * fh + fh * 0.62, 6, 6); } continue; }
      if (lit) { if (R() < 0.45) { g.fillStyle = warm(); g.fillRect(x, y, w, h); } continue; }
      const gr = g.createLinearGradient(0, y, 0, y + h); gr.addColorStop(0, '#6b8aa0'); gr.addColorStop(1, '#2d4458');
      g.fillStyle = gr; g.fillRect(x, y, w, h);
      g.fillStyle = '#f7f2ea'; g.fillRect(x - 5, y - 5, w + 10, 5); g.fillRect(x - 5, y + h, w + 10, 6); g.fillRect(x + w / 2 - 2, y, 4, h);
      g.fillStyle = '#5d7a52'; g.fillRect(x - 12, y, 9, h); g.fillRect(x + w + 3, y, 9, h);
    }
  } else if (kind === 'metal') {
    if (!lit) { g.fillStyle = '#d6dade'; g.fillRect(0, 0, W, H); for (let x = 0; x < W; x += 8) { g.fillStyle = '#eef0f2'; g.fillRect(x, 0, 4, H); g.fillStyle = '#b4bac1'; g.fillRect(x + 4, 0, 4, H); } g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, H - 12, W, 12); g.fillStyle = 'rgba(40,70,110,0.55)'; g.fillRect(0, H * 0.62, W, 10); }
    else if (R() < 0.5) { g.fillStyle = warm(); g.fillRect(40, 36, 60, 22); g.fillRect(150, 36, 60, 22); }
  } else if (kind === 'glass') {
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
    g.save(); g.scale(1, H / 320);
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
    g.restore();
  }
  return c;
}

const _tex = new Map();
export function facadeTexture(kind, lit) {
  const k = kind + lit; if (!_tex.has(k)) _tex.set(k, canvasTex(facadeCanvas(kind, lit)));
  return _tex.get(k);
}
const SURF = { glass: [0.18, 0.55, 1.3], punched: [0.85, 0, 0.5], strip: [0.45, 0.25, 0.8], shop: [0.4, 0.1, 0.6], house: [0.9, 0, 0.4], metal: [0.5, 0.45, 0.8] };

// One material per facade kind. UVs come from WORLD position, so any scaled instance of a unit box
// gets correctly sized windows without per-instance UV data. Roof faces are shaded separately.
export function facadeMaterial(kind) {
  const [tw, th] = FACADE_TILE[kind], sf = SURF[kind];
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, map: facadeTexture(kind, false), emissive: 0xffffff, emissiveMap: facadeTexture(kind, true),
    roughness: sf[0], metalness: sf[1], envMapIntensity: sf[2] });
  m.onBeforeCompile = sh => {
    sh.uniforms.uNight = NIGHT; sh.uniforms.uTile = { value: new THREE.Vector2(tw, th) };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP; varying vec3 vWN;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 fwp = vec4(transformed, 1.0); vec3 fwn = objectNormal;
        #ifdef USE_INSTANCING
          fwp = instanceMatrix * fwp; fwn = mat3(instanceMatrix) * fwn;
        #endif
        vWP = (modelMatrix * fwp).xyz; vWN = normalize(mat3(modelMatrix) * fwn);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uNight; uniform vec2 uTile; varying vec3 vWP; varying vec3 vWN;`)
      .replace('#include <map_fragment>', `
        bool isRoof = abs(vWN.y) > 0.5;
        vec2 fuv = abs(vWN.x) > abs(vWN.z) ? vec2(vWP.z / uTile.x, vWP.y / uTile.y) : vec2(vWP.x / uTile.x, vWP.y / uTile.y);
        #ifdef USE_MAP
          vec4 fc = texture2D(map, fuv);
          if (isRoof) { float hh = fract(sin(dot(floor(vWP.xz * 0.6), vec2(12.9898, 78.233))) * 43758.5453); fc = vec4(vec3(0.36 + 0.09 * hh), 1.0); }
          diffuseColor *= fc;
        #endif`)
      .replace('#include <emissivemap_fragment>', `
        #ifdef USE_EMISSIVEMAP
          vec3 em = texture2D(emissiveMap, fuv).rgb * uNight;
          if (isRoof) em = vec3(0.0);
          totalEmissiveRadiance *= em;
        #endif`);
  };
  m.customProgramCacheKey = () => 'facade-' + kind;
  return m;
}
