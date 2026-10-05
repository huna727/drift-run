import { boxObs, circleObs, ellipseObs, pushOut, surfaceDist, resolveBody } from './collision.js';
const out = {};
let fails = 0; const ok = (c, m) => { if (!c) { fails++; console.log('FAIL', m); } };
// axis aligned box 10x4 (hw5 hd2) at origin
let b = boxObs(0, 0, 5, 2, 0);
ok(!pushOut(b, 0, 3.5, 1, out), 'above box, gap 1.5 > rad 1');
ok(pushOut(b, 0, 2.5, 1, out) && Math.abs(out.nz - 1) < 1e-9 && Math.abs(out.pen - 0.5) < 1e-9, 'face push');
ok(pushOut(b, 5.5, 2.5, 1, out) && out.nx > 0 && out.nz > 0 && Math.abs(out.pen - (1 - Math.hypot(.5, .5))) < 1e-9, 'corner push');
ok(pushOut(b, 1, 0.5, 1, out) && out.nz > 0.99 && Math.abs(out.pen - 2.5) < 1e-9, 'inside -> nearest face (z)');
// rotated 90deg (three.js rotation.y = PI/2): local X axis points to world -Z, so hw runs along world Z
b = boxObs(0, 0, 5, 2, Math.PI / 2);
ok(pushOut(b, 0, 4.5, 1, out) && out.nz > 0.99 && Math.abs(out.pen - 1.5) < 1e-9, 'rot90 long axis along Z: point at z=4.5 pen 1.5');
ok(!pushOut(b, 3.5, 0, 1, out), 'rot90: x=3.5 clear (hd=2 -> gap 1.5)');
ok(pushOut(b, 2.5, 0, 1, out) && out.nx > 0.99, 'rot90: x=2.5 hits');
// 30deg rotation: compare against brute-force distance using mesh-style transform
const a = 0.5; b = boxObs(3, -2, 4, 1.5, a);
for (let i = 0; i < 2000; i++) {
  const px = (Math.random() - .5) * 20, pz = (Math.random() - .5) * 20;
  // mesh rotation.y=a maps local (lx,lz) to world: x = lx cos a + lz sin a ; z = -lx sin a + lz cos a
  // brute force: sample the box boundary densely and take min distance
  let best = 1e9;
  for (let t = 0; t <= 1; t += 0.01) for (const [lx, lz] of [[-4 + 8 * t, -1.5], [-4 + 8 * t, 1.5], [-4, -1.5 + 3 * t], [4, -1.5 + 3 * t]]) {
    const wx = 3 + lx * Math.cos(a) + lz * Math.sin(a), wz = -2 - lx * Math.sin(a) + lz * Math.cos(a);
    best = Math.min(best, Math.hypot(px - wx, pz - wz));
  }
  const sd = surfaceDist(b, px, pz);
  if (sd > 0 && Math.abs(sd - best) > 0.06) { fails++; console.log('surfaceDist mismatch', sd, best); break; }
  const hit = pushOut(b, px, pz, 1, out);
  if (sd > 0 && hit !== (sd < 1)) { fails++; console.log('hit flag mismatch', sd, hit); break; }
}
// push direction really separates
const car = { x: 1.2, z: 2.2, h: 0 };
let n = 0; resolveBody(car, [boxObs(0, 0, 5, 2, 0)], (nx, nz, pen) => { car.x += nx * pen; car.z += nz * pen; n++; });
ok(n > 0 && car.z > 2.9, 'resolveBody moves car off box, z=' + car.z);
// ellipse
const e = ellipseObs(0, 0, 20, 10, 0);
ok(pushOut(e, 20.5, 0, 1, out) && out.nx > .99 && Math.abs(out.pen - 0.5) < 0.05, 'ellipse end');
ok(pushOut(e, 0, 10.5, 1, out) && out.nz > .99 && Math.abs(out.pen - 0.5) < 0.05, "ellipse side");
ok(!pushOut(e, 0, 12, 1, out), 'ellipse clear');
// circle legacy shape {x,z,r}
ok(pushOut({ x: 0, z: 0, r: 2 }, 2.5, 0, 1, out) && Math.abs(out.pen - .5) < 1e-9, 'legacy circle');
console.log(fails ? 'FAILED ' + fails : 'collision tests passed');
