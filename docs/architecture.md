---
sidebar_position: 2
---

# Architecture

## System Overview
```
┌─────────────────────────────────────────┐
│          User's Browser                  │
│                                          │
│  React Frontend (GitHub Pages)           │
│  ├── LayoutPage                          │
│  ├── CartonSpec                          │
│  ├── AlgorithmSelector                   │
│  ├── LayoutCanvas (Fabric.js)            │
│  └── UserGuide                           │
└──────────────┬──────────────────────────┘
               │ HTTP REST API (JSON)
               ▼
┌─────────────────────────────────────────┐
│       FastAPI Backend (Railway)          │
│                                          │
│  features/cartons   → flat size calc     │
│  features/layout    → 6 algorithms       │
│  features/extract   → PDF parsing        │
└─────────────────────────────────────────┘
```

## Request Flow

1. User enters box dimensions (L, W, H) and sheet size
2. Frontend calls `POST /carton/flat-size` → gets flat dieline dimensions
3. Frontend calls `POST /layout/{algorithm}` → gets carton positions as JSON
4. Frontend passes positions to Fabric.js canvas for rendering
5. User can export the layout as SVG or DXF

## Design Principles

**Feature-based modular structure** — both frontend and backend are organised by feature, not by file type. Adding a new feature (e.g. Login) means creating a new feature folder — nothing else changes.

**Backend is the source of truth** — all calculations happen server-side. The frontend is purely for input collection and visualisation.

**Stateless backend** — the backend holds no user state. Every request is self-contained. This makes scaling and testing simple.