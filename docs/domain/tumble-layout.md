---
sidebar_position: 4
---

# Tumble Layout

Tumble layout alternates row orientations to enable nesting between adjacent rows.

## How It Works
```
Row 1: ▲ ▲ ▲  (normal)
Row 2: ▼ ▼ ▼  (flipped 180°)
Row 3: ▲ ▲ ▲  (normal)
Row 4: ▼ ▼ ▼  (flipped 180°)
```

## Pair Height

A ▲▼ pair takes less space than two straight rows:
```
Straight:    2 rows = 2 × flat_h
Tumble pair: 2 × flat_h − nesting_saving_mm
```

## Algorithm
```python
pair_height = flat_h * 2 - nesting_saving
full_pairs  = floor(usable_h / pair_height)
remaining_h = usable_h - full_pairs * pair_height
extra_row   = 1 if remaining_h >= flat_h else 0
total_rows  = full_pairs * 2 + extra_row
```

## When Tumble Doesn't Help

If the nesting saving is not enough to reduce the pair height sufficiently to fit an extra row, tumble gives the same result as straight. This is mathematically expected — not a bug.
