---
sidebar_position: 9
---

# Adding a New Feature

This guide walks through adding a new feature module to the backend. As an example we'll add an `auth` feature.

## Step 1: Create the feature folder
```bash
mkdir -p features/auth
touch features/auth/__init__.py
touch features/auth/models.py
touch features/auth/service.py
touch features/auth/router.py
```

## Step 2: Define models
```python
# features/auth/models.py
from pydantic import BaseModel

class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
```

## Step 3: Write the service
```python
# features/auth/service.py
from features.auth.models import LoginRequest, TokenResponse

def login(req: LoginRequest) -> TokenResponse:
    # Your authentication logic here
    return TokenResponse(access_token="...")
```

## Step 4: Create the router
```python
# features/auth/router.py
from fastapi import APIRouter
from features.auth.models import LoginRequest, TokenResponse
from features.auth.service import login

router = APIRouter()

@router.post("/login", response_model=TokenResponse)
def login_endpoint(req: LoginRequest):
    return login(req)
```

## Step 5: Register in main.py
```python
from features.auth.router import router as auth_router
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
```

## Step 6: Write tests

Add tests to `tests/test_main.py` following the same pattern as existing tests.

## Step 7: Run tests
```bash
pytest test_main.py -v
```

All tests must pass before pushing.
