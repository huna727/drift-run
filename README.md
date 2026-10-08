# Drift Run

```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm test           # collision unit tests
```

## Layout
```
index.html               page + all CSS
src/main.js              game loop, physics, menus, HUD, quality + time-of-day
src/data/                cars.js (car shapes/stats), tuning.js (tuning model)
src/systems/             multi.js (split-screen), weather.js, npc.js (unused stub)
src/world/
  collision.js           circle / rotated-box / ellipse colliders + spatial-hash grid
  wtex.js                procedural textures, instancing helpers, water, trees
  facade.js              window textures + world-space facade shader
  city.js cargo.js park.js   the three small freeroam maps
  openworld.js           the Open World island (roads, districts, highways, landmarks)
  traffic.js             ambient traffic for the Open World
tools/test_collision.mjs
```

## Controls (shown on the buttons in-game)
Home: Enter = Play, O = Open World, S = Shop, G = Garage, T = Settings, Esc = back/resume.
Modes: 1 Solo, 2 Timed, 3 Race, 4 Multiplayer.
Driving: W/Up gas, S/Down brake, A/D or Left/Right steer, Space handbrake, Shift boost,
C camera, R reset, P photo mode, 1/2/3 car class, Esc menu.

## Performance
Settings > Graphics: Quality (Low / Medium / High), Auto performance (adaptive resolution),
Shadows, Time of day, Traffic. Low is the one to use on phones.
The Open World streams trees and lamps by distance, instances all buildings, and uses a
spatial-hash collision grid, so cost stays flat as the island grows.
