---
sidebar_position: 2
---

# Backend Setup

## Install dependencies
```bash
cd monocarton-backend
pip3 install -r requirements.txt
```

## Run locally
```bash
uvicorn main:app --reload
```

`--reload` enables hot reload — the server restarts automatically when you save a file.

## Run tests
```bash
pytest test_main.py -v
```

All 32 tests should pass. If any fail, do not push to GitHub.

## Environment variables

Create a `.env` file in the backend root for local overrides:
```bash
APP_NAME=Mono Backend
APP_VERSION=2.0
DEBUG=true
```

These are loaded automatically by `pydantic-settings` via `config.py`.
