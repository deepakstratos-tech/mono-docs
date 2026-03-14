---
sidebar_position: 6
---

# Hooks

Custom React hooks live in `src/hooks/`. They encapsulate API logic so components stay clean.

## useFlatSize

Fetches flat dieline size whenever box dimensions change.
```js
import useFlatSize from "../../hooks/useFlatSize";

const { flatSpec, loading, error } = useFlatSize(boxStyle, length, width, height);
```

**Returns:**
- `flatSpec` — `{ flat_w, flat_h, top_tuck_depth, bottom_tuck_depth, nesting_saving_pct, ... }`
- `loading` — boolean
- `error` — error message string or null

Automatically re-fetches when any input changes.

## useLayout

Manages layout API calls and state.
```js
import useLayout from "../../hooks/useLayout";

const { stats, loading, error, comparison, setComparison, fetchLayout, fetchCompare } = useLayout();

// Fetch a layout
await fetchLayout("straight", {
  style: "bottom_side_lock",
  length: 45, width: 45, height: 83,
  sheet_w: 700, sheet_h: 1000, margin: 10
});

// Compare all algorithms
await fetchCompare({ ...params });
```

**Returns:**
- `stats` — full `LayoutResponse` object from backend
- `loading` — boolean
- `error` — error message or null
- `comparison` — comparison table data or null
- `fetchLayout(algorithm, params)` — fetch a specific layout
- `fetchCompare(params)` — run all algorithms and compare
