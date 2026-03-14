---
sidebar_position: 1
---

# Frontend Overview

The Mono frontend is a React application that provides the user interface for carton imposition planning. It communicates with the FastAPI backend via REST API and renders layouts using Fabric.js.

## Responsibilities

- Collect carton and sheet dimensions from the user
- Call the backend API for flat size calculation and layout algorithms
- Render the layout on an interactive Fabric.js canvas
- Allow manual adjustment of carton positions
- Export layouts as SVG or DXF

## Technology

- **React 18** — UI framework
- **Fabric.js v5** — interactive canvas for layout rendering
- **React Router v6** — client-side routing
- **Custom hooks** — useLayout, useFlatSize for API logic

## Key URLs

| Environment | URL |
|-------------|-----|
| Local | http://localhost:3000 |
| Production | https://deepakstratos-tech.github.io/monocarton-editor |
