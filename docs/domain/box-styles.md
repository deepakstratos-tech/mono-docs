---
sidebar_position: 1
---

# Box Styles

Mono supports four pharmaceutical carton styles. The box style determines flap dimensions which affect the flat dieline size and nesting saving.

## Bottom Side Lock

Most common in pharmaceutical packaging. Top has a tuck flap. Bottom has interlocking side panels.

| Parameter | Value |
|-----------|-------|
| Top tuck ratio | 40% of H |
| Bottom lock ratio | 50% of H |
| Glue flap | 10mm |

**Flat size formula:**
```
Flat W = 2(L+W) + 10
Flat H = H + H×0.4 + H×0.5 = H × 1.9
```

## Straight Tuck End

Both tuck flaps face the same direction.

| Parameter | Value |
|-----------|-------|
| Top tuck ratio | 35% of H |
| Bottom tuck ratio | 35% of H |
| Glue flap | 10mm |

## Reverse Tuck End

Tuck flaps face opposite directions. Best nesting in tumble layout.

| Parameter | Value |
|-----------|-------|
| Top tuck ratio | 35% of H |
| Bottom tuck ratio | 35% of H |
| Glue flap | 10mm |

## Lock Bottom

Pre-glued auto locking bottom. Best for heavy products.

| Parameter | Value |
|-----------|-------|
| Top tuck ratio | 40% of H |
| Bottom lock ratio | 60% of H |
| Glue flap | 10mm |
