---
sidebar_position: 2
---

# Frontend Setup

## Prerequisites

- Node.js 18+ (use NVM)
- npm

## Install
```bash
cd monocarton-editor
nvm use 18
npm install
```

## Run locally
```bash
npm start
```

Opens at `http://localhost:3000`

## Connect to backend

In `src/config/api.js` set `API_BASE`:
```js
// Local development
export const API_BASE = "http://127.0.0.1:8000";

// Production
export const API_BASE = "https://web-production-e59f.up.railway.app";
```

## Build for production
```bash
npm run build
```

## Deploy to GitHub Pages
```bash
npm run deploy
```

This builds the app and pushes to the `gh-pages` branch automatically.

## Node version fix

If you see eslint errors about `node:path`, run:
```bash
source $HOME/.nvm/nvm.sh && nvm use 18
```
