---
sidebar_position: 4
---

# Configuration

All configuration is managed via `config.py` using `pydantic-settings`.

## config.py
```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Mono Backend"
    app_version: str = "2.0"
    debug: bool = False
    allowed_origins: list = ["*"]

    model_config = {"env_file": ".env"}

settings = Settings()
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| APP_NAME | Mono Backend | Application name |
| APP_VERSION | 2.0 | Current version |
| DEBUG | false | Enable debug mode |
| ALLOWED_ORIGINS | ["*"] | CORS allowed origins |

## Local development

Create a `.env` file in the backend root:
```
APP_NAME=Mono Backend
APP_VERSION=2.0
DEBUG=true
```

## Production

Set environment variables in the Railway dashboard under Variables.

## Adding a new config value

1. Add it to the `Settings` class in `config.py`
2. Use it in your feature via `from config import settings`
3. Set it in Railway dashboard for production
