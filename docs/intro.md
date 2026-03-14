---
sidebar_position: 1
slug: /
---

# Introduction

**Mono** is a full-stack web application for monocarton imposition planning. It helps packaging professionals calculate and visualise optimal carton layouts on print sheets — maximising yield and minimising paper waste.

## What Mono Does

When a print shop receives a job to print pharmaceutical cartons, they need to decide how to arrange the cartons on a large print sheet. The goal is to fit as many cartons as possible on each sheet to reduce cost per unit.

Mono automates this calculation by:
- Accepting 3D box dimensions (Length × Width × Height in mm)
- Automatically calculating the flat dieline size based on box style
- Running multiple layout algorithms to find the optimal arrangement
- Visualising the result on an interactive canvas
- Exporting the layout as SVG or DXF for use in design tools

## Live Application

- **Frontend:** https://deepakstratos-tech.github.io/monocarton-editor
- **Backend API:** https://web-production-e59f.up.railway.app
- **API Docs:** https://web-production-e59f.up.railway.app/docs

## Repositories

- **Frontend:** https://github.com/deepakstratos-tech/monocarton-editor
- **Backend:** https://github.com/deepakstratos-tech/monocarton-backend
- **Docs:** https://github.com/deepakstratos-tech/mono-docs

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Fabric.js, React Router |
| Backend | Python, FastAPI, Pydantic |
| Frontend Hosting | GitHub Pages |
| Backend Hosting | Railway |
| Docs | Docusaurus, GitHub Pages |
