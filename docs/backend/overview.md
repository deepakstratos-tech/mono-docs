---
sidebar_position: 1
---

# Backend Overview

The Mono backend is a Python FastAPI application that handles all layout calculations and PDF extraction. It is completely stateless — every request is independent.

## Responsibilities

- Calculate flat dieline size from 3D box dimensions
- Run layout algorithms (straight, tumble, FFD, NFDH, best fit, first fit)
- Extract carton dimensions from PDF artwork files
- Return carton positions as JSON for the frontend to render

## Technology

- **Python 3.12** — language
- **FastAPI** — web framework with automatic OpenAPI docs
- **Pydantic v2** — data validation and serialisation
- **pydantic-settings** — environment variable configuration
- **pdfplumber** — PDF text extraction
- **uvicorn** — ASGI server
- **pytest** — testing

## Key URLs

| Environment | URL |
|-------------|-----|
| Local | http://127.0.0.1:8000 |
| Production | https://web-production-e59f.up.railway.app |
| API Docs (local) | http://127.0.0.1:8000/docs |
| API Docs (prod) | https://web-production-e59f.up.railway.app/docs |
