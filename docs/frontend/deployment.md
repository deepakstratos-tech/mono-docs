---
sidebar_position: 8
---

# Frontend Deployment

The frontend is hosted on GitHub Pages and deploys via the `gh-pages` npm package.

## Deploy
```bash
npm run deploy
```

This runs `npm run build` then pushes the build folder to the `gh-pages` branch.

## How it works

1. `npm run build` creates an optimised production build in the `build/` folder
2. `gh-pages -d build` pushes the build folder to the `gh-pages` branch on GitHub
3. GitHub Pages serves the `gh-pages` branch at `https://deepakstratos-tech.github.io/monocarton-editor`

## Configuration in package.json
```json
{
  "homepage": "https://deepakstratos-tech.github.io/monocarton-editor",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## GitHub token

If deployment asks for a password, embed your token in the remote URL:
```bash
git remote set-url origin https://deepakstratos-tech:YOUR_TOKEN@github.com/deepakstratos-tech/monocarton-editor.git
```

## Node version

Always ensure Node 18 is active before deploying:
```bash
source $HOME/.nvm/nvm.sh && nvm use 18
npm run deploy
```
