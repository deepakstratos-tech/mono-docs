---
sidebar_position: 6
---

# Algorithms

All algorithms live in `features/layout/algorithms.py`. Each algorithm is a pure function that takes a `LayoutRequest` and returns a `LayoutResponse`.

## Adding a New Algorithm

1. Add the function to `features/layout/algorithms.py`:
```python
def calc_my_algorithm(req: LayoutRequest) -> LayoutResponse:
    flat_w, flat_h, nesting_pct, nesting_mm = get_carton_dims(req)
    usable_w = req.sheet_w - req.margin * 2
    usable_h = req.sheet_h - req.margin * 2

    cartons = []
    # ... your placement logic here ...

    return LayoutResponse(
        layout_type="my_algorithm",
        cartons=cartons,
        # ... other fields ...
        algorithm_notes="My algorithm: description of what it does."
    )
```

2. Add it to the `compare_all` function in the same file:
```python
def compare_all(req: LayoutRequest) -> dict:
    results = {
        ...
        "my_algorithm": calc_my_algorithm(req),
    }
```

3. Add a route in `features/layout/router.py`:
```python
@router.post("/my-algorithm", response_model=LayoutResponse)
def my_algorithm_layout(req: LayoutRequest):
    return calc_my_algorithm(req)
```

4. Add it to the frontend `ALGORITHMS` list in `src/config/api.js`

5. Write a test in `tests/test_main.py`

## Algorithm Complexity

| Algorithm | Time Complexity | Best For |
|-----------|----------------|----------|
| Straight | O(n) | Baseline |
| Tumble | O(n) | Nesting yield |
| First Fit | O(n) | Quick check |
| FFD | O(n log n) | Rotation check |
| NFDH | O(n log n) | Mixed sizes |
| Best Fit | O(n²) | Minimise waste |
