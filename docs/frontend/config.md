---
sidebar_position: 4
---

# Frontend Config

All shared configuration lives in `src/config/api.js`.

## API Base URL
```js
export const API_BASE = "https://web-production-e59f.up.railway.app";
```

Change this to `http://127.0.0.1:8000` for local development.

## Algorithms
```js
export const ALGORITHMS = [
  { id: "straight", label: "Straight", icon: "▲▲▲", endpoint: "/layout/straight", color: "#1565c0" },
  { id: "tumble", label: "Tumble", icon: "▲▼▲", endpoint: "/layout/tumble", color: "#6a1b9a" },
  // ...
];
```

To add a new algorithm: add an entry here and create the backend endpoint.

## Box Styles
```js
export const BOX_STYLES = [
  { id: "bottom_side_lock", label: "Bottom Side Lock", desc: "Most common in pharma" },
  // ...
];
```

## Visual Constants
```js
export const SCALE = 0.5;        // 1mm = 0.5px on canvas
export const BRAND = "#1a4a7a";  // Primary brand colour
export const STRAIGHT_COLOR = "#4F86C6";  // Normal carton colour
export const TUMBLE_FLIPPED = "#e67e22";  // Flipped carton colour
```
