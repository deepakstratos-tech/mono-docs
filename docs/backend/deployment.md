---
sidebar_position: 8
---

# Backend Deployment

The backend is hosted on Railway and deploys automatically on every push to the `main` branch.

## How it works

1. Push to GitHub
2. Railway detects the push via webhook
3. Railway builds using Nixpacks
4. Railway runs `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. New version is live in ~2 minutes

## Railway configuration files

**`Procfile`:**
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

**`railway.json`:**
```json
{
  "build": { "builder": "NIXPACKS" },
  "deploy": { "startCommand": "uvicorn main:app --host 0.0.0.0 --port $PORT" }
}
```

**`requirements.txt`** — all Python dependencies must be listed here. If you install a new package locally, add it to this file before pushing.

## Environment variables on Railway

Set via Railway dashboard → your project → Variables tab:
- `APP_NAME` — Mono Backend
- `APP_VERSION` — 2.0
- `DEBUG` — false

## Checking deployment status

Railway dashboard → your project → Deployments tab → View logs
