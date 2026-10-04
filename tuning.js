// Speed classes, real-world tuning options and the maths that turns them into handling.
// Everything is measured relative to the car's STOCK tune, so stock == the speed class exactly.

// Speed classes (keys 1 / 2 / 3). These are the speed + handling numbers of the original three cars.
// power: accel m/s^2 | top: m/s | grip: lateral grip | drift: grip while sliding | steer: max yaw rad/s
export const TIERS = [
  { name: 'Hachi',   power: 22, top: 46, grip: 7.5, drift: 2.8, steer: 1.9 },
  { name: 'Corsa-S', power: 30, top: 54, grip: 7.0, drift: 2.4, steer: 2.0 },
  { name: 'Muscle',  power: 40, top: 62, grip: 6.5, drift: 2.1, steer: 1.8 },
];

export const COMPOUNDS = [
  { name: 'Comfort',    grip: 0.93, slide: 1.05, wet: 1.1 },
  { name: 'Sport',      grip: 1.0,  slide: 1.0,  wet: 1.0 },
  { name: 'Semi-slick', grip: 1.08, slide: 1.0,  wet: 0.8 },
  { name: 'Drift',      grip: 0.97, slide: 0.85, wet: 0.95 },
];

export const TUNE_GROUPS = [
  { title: 'Suspension', items: [
    { key: 'rideH', label: 'Ride height', min: -70, max: 30, step: 5, unit: ' mm', hint: 'Lower = lower centre of gravity, sharper turn-in. Below about -55 mm the car bottoms out and loses rear grip.' },
    { key: 'springF', label: 'Spring rate front', min: 3, max: 14, step: 0.5, unit: ' kg/mm', hint: 'Stiffer = less body roll and dive. A stiffer front adds understeer.' },
    { key: 'springR', label: 'Spring rate rear', min: 3, max: 14, step: 0.5, unit: ' kg/mm', hint: 'A stiffer rear loads the rear tyres harder: more oversteer.' },
    { key: 'damperF', label: 'Damper front', min: 1, max: 10, step: 1, unit: '', hint: 'Controls how fast the body settles after a bump. Watch it in photo mode (P, then W / S).' },
    { key: 'damperR', label: 'Damper rear', min: 1, max: 10, step: 1, unit: '', hint: 'Soft = floaty and bouncy, stiff = settles quickly.' },
    { key: 'arbF', label: 'Anti-roll bar front', min: 1, max: 10, step: 1, unit: '', hint: 'Resists body roll. Stiffer front bar = more understeer.' },
    { key: 'arbR', label: 'Anti-roll bar rear', min: 1, max: 10, step: 1, unit: '', hint: 'Stiffer rear bar = tail steps out sooner. The classic drift tweak.' },
  ] },
  { title: 'Alignment', items: [
    { key: 'camberF', label: 'Camber front', min: -8, max: 2, step: 0.1, unit: '°', hint: 'Top of the wheel tilts in (negative) to keep the tyre flat when cornering. Best grip near -3°, too much hurts braking.' },
    { key: 'camberR', label: 'Camber rear', min: -8, max: 2, step: 0.1, unit: '°', hint: 'Rear camber helps the tail hold. Drifters run less.' },
    { key: 'toeF', label: 'Toe front', min: -1, max: 1, step: 0.05, unit: '°', hint: 'Toe-out (negative) = quicker turn-in but a twitchy straight line.' },
    { key: 'toeR', label: 'Toe rear', min: -1, max: 1, step: 0.05, unit: '°', hint: 'Toe-in (positive) = stable rear. Toe-out = loose.' },
    { key: 'caster', label: 'Caster', min: 3, max: 9, step: 0.1, unit: '°', hint: 'More caster = better straight-line stability and extra grip when steering, heavier steering.' },
  ] },
  { title: 'Tyres & wheels', items: [
    { key: 'compound', label: 'Compound', type: 'choice', hint: 'Semi-slicks grip hard but hate rain. Drift tyres are harder and let go on purpose.' },
    { key: 'pressF', label: 'Pressure front', min: 24, max: 44, step: 1, unit: ' psi', hint: 'Best grip around 31 psi. Too low is squirmy, too high shrinks the contact patch.' },
    { key: 'pressR', label: 'Pressure rear', min: 24, max: 44, step: 1, unit: ' psi', hint: 'Drifters run 40+ psi in the rear to make the tail slide.' },
    { key: 'offset', label: 'Wheel offset (stance)', min: -20, max: 40, step: 2, unit: ' mm', hint: 'Pushes the wheels out of the arches. Looks great, no handling change.' },
  ] },
  { title: 'Drivetrain', items: [
    { key: 'finalDrive', label: 'Final drive', min: 3, max: 5, step: 0.05, unit: ':1', hint: 'Higher = punchier acceleration, lower top speed.' },
    { key: 'diff', label: 'Differential lock', min: 0, max: 100, step: 5, unit: ' %', hint: 'A locked rear diff makes the car easy to kick into a slide and hold it, but it turns in less.' },
    { key: 'boost', label: 'Turbo boost', min: 0, max: 20, step: 1, unit: ' psi', hint: 'More power and a touch more top speed.' },
    { key: 'weight', label: 'Weight reduction', min: 0, max: 150, step: 5, unit: ' kg', hint: 'Lighter car: quicker and grippier.' },
  ] },
  { title: 'Brakes', items: [
    { key: 'bias', label: 'Brake bias (front)', min: 50, max: 80, step: 1, unit: ' %', hint: 'Too much rear bias locks the rear under braking and the tail swings round.' },
  ] },
  { title: 'Aero', items: [
    { key: 'wing', label: 'Rear wing', min: 0, max: 10, step: 1, unit: '', hint: 'More downforce at speed, more drag. The wing angle changes on the car.' },
    { key: 'splitter', label: 'Front splitter', min: 0, max: 10, step: 1, unit: '', hint: 'Front downforce. Sticks out further the higher you set it.' },
  ] },
];

export function defaultTune(def) {
  return {
    rideH: 0, springF: 7, springR: 6, damperF: 5, damperR: 5, arbF: 5, arbR: 4,
    camberF: -1.5, camberR: -1, toeF: 0, toeR: 0.1, caster: 5.5,
    compound: 1, pressF: 32, pressR: 32, offset: 0,
    finalDrive: def.fd, diff: 40, boost: 0, weight: 0, bias: 65,
    wing: def.wing, splitter: 0,
  };
}

export const PRESETS = {
  Stock: () => ({}),
  Grip: () => ({ rideH: -30, springF: 9.5, springR: 8.5, damperF: 6, damperR: 6, arbF: 6, arbR: 5, camberF: -3.2, camberR: -2, toeF: -0.1, toeR: 0.2, caster: 6.5, compound: 2, pressF: 31, pressR: 31, diff: 25, weight: 60, wing: 6, splitter: 5 }),
  Drift: () => ({ rideH: -20, springF: 8, springR: 7, arbF: 3, arbR: 7, camberF: -4.5, camberR: -0.5, toeF: -0.4, toeR: -0.1, caster: 7.5, compound: 3, pressF: 30, pressR: 40, diff: 100, boost: 8, bias: 60, wing: 2, splitter: 0, offset: 12 }),
  Street: () => ({ rideH: 10, springF: 5, springR: 4.5, damperF: 4, damperR: 4, arbF: 4, arbR: 3, camberF: -0.5, camberR: -0.5, compound: 0, diff: 20 }),
};

const sq = x => x * x, clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const camPeak = c => 0.06 * (1 - sq((c + 3) / 4));            // best bite near -3 deg
const pressBite = p => 0.025 * (1 - sq((p - 31) / 8));
const lowCoG = h => clamp(-h, -30, 70) / 70 * 0.04;

export function derive(tier, def, t) {
  const r = defaultTune(def), m = def.mods;
  const cp = COMPOUNDS[t.compound], cr = COMPOUNDS[r.compound];
  const compG = cp.grip / cr.grip;

  const RF = t.springF + 0.8 * t.arbF, RR = t.springR + 0.8 * t.arbR;
  const rF = r.springF + 0.8 * r.arbF, rR = r.springR + 0.8 * r.arbR;
  const bias = (RR - RF) / (RR + RF) - (rR - rF) / (rR + rF); // + = stiffer rear = oversteer
  const low = lowCoG(t.rideH) - lowCoG(r.rideH);
  const bottom = t.rideH < -55 && r.rideH >= -55 ? 0.97 : 1;
  const aero = (t.wing - r.wing) + 0.6 * (t.splitter - r.splitter);
  const dW = t.weight - r.weight, dB = t.boost - r.boost;
  const lock = (t.diff - r.diff) / 100;
  const fd = t.finalDrive / r.finalDrive;

  const frontBite = compG * (1 + camPeak(t.camberF) - camPeak(r.camberF) + 0.008 * (t.caster - r.caster) + pressBite(t.pressF) - pressBite(r.pressF) + low + 0.1 * bias);
  const rearBite = compG * (1 + camPeak(t.camberR) - camPeak(r.camberR) + pressBite(t.pressR) - pressBite(r.pressR) + low - 0.2 * bias + 0.04 * (t.toeR - r.toeR)) * bottom * (1 + 0.0003 * dW);
  const stiff = (t.springF + t.springR + 0.8 * (t.arbF + t.arbR)) - (r.springF + r.springR + 0.8 * (r.arbF + r.arbR));

  const power = tier.power * m.power * Math.pow(fd, 0.8) * (1 + 0.014 * dB) * (1 + 0.0007 * dW);
  const top = tier.top * m.top * Math.pow(fd, -0.55) * (1 + 0.004 * dB) * (1 - 0.0025 * aero) * (1 + 0.0002 * dW);
  const grip = Math.max(3, tier.grip * m.grip * rearBite);
  const drift = Math.max(1, tier.drift * m.drift * rearBite * (cp.slide / cr.slide) * (1 - 0.3 * lock)
    * (1 - 0.011 * (Math.max(0, t.pressR - 32) - Math.max(0, r.pressR - 32))));
  const steer = Math.max(1, tier.steer * m.steer * (1 + 1.2 * (frontBite - 1)) * (1 - 0.06 * (t.toeF - r.toeF))
    * (1 - 0.012 * (t.caster - r.caster)) * (1 - 0.1 * lock) * (1 + 0.003 * stiff));

  const kAvg = (t.springF + t.springR) / 2, dAvg = (t.damperF + t.damperR) / 2, aAvg = (t.arbF + t.arbR) / 2;
  const out = {
    power, top, grip, drift, steer,
    wetMul: 0.7 * cp.wet / cr.wet,
    entry: clamp(1 - 0.5 * lock, 0.6, 1.3),
    aeroK: 3e-6 * aero,
    dragK: 0.12 * Math.max(0, Math.abs(t.toeF) + Math.abs(t.toeR) - Math.abs(r.toeF) - Math.abs(r.toeR)),
    brakeLoose: clamp((0.6 - t.bias / 100) / 0.08, 0, 1),
    brakeUnder: clamp((t.bias / 100 - 0.72) * 5, 0, 0.5),
    bounce: { w: 2 * Math.PI * (0.9 + 0.11 * kAvg), z: 0.1 + 0.05 * dAvg, pitchAmp: clamp(8.5 / kAvg, 0.5, 2), rollAmp: clamp(14 / (kAvg + 1.5 * aAvg), 0.4, 2.2) },
  };
  const diff = rearBite - frontBite;
  out.balance = diff > 0.03 ? 'Understeer' : diff < -0.03 ? 'Oversteer' : 'Neutral';
  out.ratings = {
    'Acceleration': clamp(power / 50, 0, 1), 'Top speed': clamp(top / 75, 0, 1), 'Grip': clamp(grip / 10, 0, 1),
    'Slideability': clamp((3.4 - drift) / 2.2, 0, 1), 'Turn-in': clamp(steer / 2.8, 0, 1),
    'Downforce': clamp((t.wing + 0.6 * t.splitter) / 16, 0, 1),
  };
  return out;
}