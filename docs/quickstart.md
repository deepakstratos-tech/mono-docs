---
sidebar_position: 3
---

# Quickstart

Get Mono running locally in 5 minutes.

## Prerequisites

- Python 3.12+
- Node.js 18+
- NVM (recommended)

## Clone the repos
```bash
git clone https://github.com/deepakstratos-tech/monocarton-backend
git clone https://github.com/deepakstratos-tech/monocarton-editor
```

## Start the backend
```bash
cd monocarton-backend
pip3 install fastapi uvicorn pydantic pydantic-settings pdfplumber python-multipart
uvicorn main:app --reload
```

Backend runs at `http://127.0.0.1:8000`
API docs at `http://127.0.0.1:8000/docs`

## Start the frontend
```bash
cd monocarton-editor
nvm use 18
npm install
npm start
```

Frontend runs at `http://localhost:3000`

## One command startup

From your Documents folder:
```bash
./start.sh
```

This opens two terminal windows — one for backend, one for frontend.

## Verify everything is working

1. Open `http://localhost:3000`
2. The header should show a green dot — **Backend connected**
3. Enter L=45, W=45, H=83, select Bottom Side Lock
4. You should see the flat dieline and layout preview render