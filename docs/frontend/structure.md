---
sidebar_position: 3
---

# Frontend Structure
```
src/
│
├── App.js                        ← Entry point. Routing and global layout.
├── index.js                      ← React entry point.
│
├── config/
│   └── api.js                    ← API_BASE, ALGORITHMS, BOX_STYLES, constants
│
├── components/                   ← Reusable UI components
│   ├── Header.js                 ← Top navigation bar
│   ├── StatCard.js               ← Metric display card
│   ├── Tooltip.js                ← Info tooltip icon
│   └── SectionPanel.js           ← White card with title
│
├── hooks/                        ← Custom React hooks
│   ├── useLayout.js              ← fetchLayout, fetchCompare
│   └── useFlatSize.js            ← fetchFlatSize
│
├── features/
│   ├── layout/                   ← Layout planning feature
│   │   ├── LayoutPage.js         ← Main page component
│   │   ├── AlgorithmSelector.js  ← Algorithm choice UI
│   │   ├── LayoutCanvas.js       ← Fabric.js canvas
│   │   └── ComparisonTable.js    ← Algorithm comparison table
│   │
│   ├── cartons/                  ← Carton specification feature
│   │   ├── CartonSpec.js         ← Box style + dimensions form
│   │   ├── FlatDieline.js        ← SVG dieline diagram
│   │   └── IsometricBox.js       ← 3D isometric preview
│   │
│   ├── extract/                  ← PDF upload feature (Phase 1)
│   │   └── PDFExtract.js
│   │
│   ├── auth/                     ← Future: Login
│   └── billing/                  ← Future: Subscriptions
│
└── guide/
    └── UserGuide.js              ← In-app user guide sidebar
```

## Key files explained

**`App.js`** — Only handles routing and global state (guide open/close, error, loading). No business logic.

**`config/api.js`** — Single source of truth for API URL, algorithm definitions, and box style definitions. Change `API_BASE` here to switch between local and production.

**`hooks/useLayout.js`** — Encapsulates all layout API calls. Components call `fetchLayout(algorithm, params)` and get back `stats`, `loading`, `error`.

**`hooks/useFlatSize.js`** — Automatically fetches flat size whenever box dimensions change. Returns `flatSpec`.
