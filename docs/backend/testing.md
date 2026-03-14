---
sidebar_position: 7
---

# Testing

## Run all tests
```bash
pytest test_main.py -v
```

Expected: **32 passed, 0 failed**

## Test structure

Tests are grouped into 8 sections:

| Section | Tests | What it verifies |
|---------|-------|-----------------|
| Health check | 1 | Backend is running |
| Box styles | 1 | All 4 styles returned |
| Flat size | 7 | Calculations for all styles and edge cases |
| Straight layout | 6 | Carton count, positions, no flipped cartons |
| Tumble layout | 6 | Nesting saving, flipped cartons, pair height |
| All algorithms | 4 | Each algorithm returns valid response |
| Compare | 4 | Sorted correctly, best algorithm identified |
| Real world | 4 | Mayank's actual job dimensions validated |

## Real world validation tests

These tests use actual job specs from Mayank's plant:
```python
def test_musli_power_flat_size():
    # L45 x W45 x H83 Bottom Side Lock
    # Expected: flat_w=190, flat_h=157.7

def test_trujoint_plus_flat_size():
    # L110 x W88 x H140 Bottom Side Lock
    # Expected: flat_w=406

def test_vaav_syrup_flat_size():
    # L57 x W57 x H157 Lock Bottom
    # Expected: flat_w=238

def test_meplex_tablet_flat_size():
    # L150 x W55 x H142 Bottom Side Lock
    # Expected: flat_w=420
```

## Rule

**Never push to GitHub if any test fails.**
