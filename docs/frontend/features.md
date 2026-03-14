---
sidebar_position: 7
---

# Feature Modules

Features live in `src/features/`. Each feature is self-contained.

## Layout Feature

The main layout planning feature. Lives in `src/features/layout/`.

**LayoutPage.js** — Top-level page component. Manages all state and coordinates between CartonSpec, AlgorithmSelector, LayoutCanvas, and ComparisonTable.

**AlgorithmSelector.js** — Renders the algorithm selection buttons. Takes `algorithm` and `setAlgorithm` as props.

**LayoutCanvas.js** — Wraps Fabric.js canvas. Takes `data` (LayoutResponse from backend) and renders carton positions. Handles canvas lifecycle (init on mount, dispose on unmount).

**ComparisonTable.js** — Renders the algorithm comparison table. Takes `comparison` data and `onClose` callback.

## Cartons Feature

Carton specification form and diagrams. Lives in `src/features/cartons/`.

**CartonSpec.js** — Box style dropdown, L/W/H inputs, calculated flat size display, nesting override input.

**FlatDieline.js** — Pure SVG component. Takes flat size dimensions and renders the unfolded carton with coloured panels and dimension annotations.

**IsometricBox.js** — Pure SVG component. Takes L, W, H and renders a 3D isometric box preview using proper isometric projection math.

## Extract Feature

PDF upload for dimension extraction. Lives in `src/features/extract/`.

**PDFExtract.js** — File upload UI. Calls `POST /extract/pdf` and auto-populates the carton spec form on success.

## Adding a New Feature

1. Create `src/features/myfeature/` folder
2. Create the page component `MyFeaturePage.js`
3. Add a route in `App.js`:
```jsx
<Route path="/myfeature" element={<MyFeaturePage />} />
```
4. Add a nav link in `Header.js` if needed
