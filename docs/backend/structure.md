---
sidebar_position: 3
---

# Backend Structure
```
monocarton-backend/
│
├── main.py                  ← App entry point. Registers routers only.
├── config.py                ← App settings via pydantic-settings
├── requirements.txt         ← Python dependencies
├── Procfile                 ← Railway start command
├── railway.json             ← Railway build config
│
├── core/
│   ├── __init__.py
│   └── exceptions.py        ← Custom HTTP exceptions
│
├── features/
│   ├── cartons/             ← Box style definitions, flat size calculation
│   │   ├── models.py        ← CartonSpecRequest, CartonSpecResponse
│   │   ├── service.py       ← BOX_STYLES, calculate_flat_size()
│   │   └── router.py        ← GET /carton/styles, POST /carton/flat-size
│   │
│   ├── layout/              ← All layout algorithms
│   │   ├── models.py        ← LayoutRequest, LayoutResponse, CartonPosition
│   │   ├── algorithms.py    ← calc_straight, calc_tumble, calc_nfdh etc.
│   │   └── router.py        ← POST /layout/* endpoints
│   │
│   ├── extract/             ← PDF dimension extraction
│   │   ├── service.py       ← extract_from_pdf(), regex patterns
│   │   └── router.py        ← POST /extract/pdf
│   │
│   ├── auth/                ← Future: JWT authentication
│   ├── billing/             ← Future: Stripe subscriptions
│   └── jobs/                ← Future: Job planning workflow
│
└── tests/
    └── test_main.py         ← 32 unit tests
```

## Key files explained

**`main.py`** — Only imports routers and registers them. No business logic here.

**`config.py`** — All environment variables go here. Never hardcode values in feature files.

**`features/*/models.py`** — Pydantic models for request and response validation.

**`features/*/service.py`** — Business logic. Pure Python functions, no HTTP concerns.

**`features/*/router.py`** — FastAPI route handlers. Thin layer that calls service functions.
