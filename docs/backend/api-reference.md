---
sidebar_position: 5
---

# API Reference

Base URL: `https://web-production-e59f.up.railway.app`

All endpoints accept and return JSON. All dimensions are in millimetres.

## Health Check
```
GET /
```

Response:
```json
{ "message": "Mono Backend is running", "version": "2.0" }
```

---

## Carton Endpoints

### GET /carton/styles

Returns all supported box styles.
```json
{
  "bottom_side_lock": { "name": "Bottom Side Lock", "description": "..." },
  "straight_tuck_end": { "name": "Straight Tuck End", "description": "..." },
  "reverse_tuck_end": { "name": "Reverse Tuck End", "description": "..." },
  "lock_bottom": { "name": "Lock Bottom", "description": "..." }
}
```

### POST /carton/flat-size

Calculate flat dieline size from 3D box dimensions.

Request:
```json
{
  "style": "bottom_side_lock",
  "length": 45,
  "width": 45,
  "height": 83,
  "custom_top_tuck": null,
  "custom_bottom_tuck": null,
  "custom_glue_flap": null
}
```

Response:
```json
{
  "style": "bottom_side_lock",
  "style_name": "Bottom Side Lock",
  "length": 45, "width": 45, "height": 83,
  "flat_w": 190.0,
  "flat_h": 157.7,
  "top_tuck_depth": 33.2,
  "bottom_tuck_depth": 41.5,
  "glue_flap": 10.0,
  "nesting_saving_mm": 33.2,
  "nesting_saving_pct": 21.05
}
```

---

## Layout Endpoints

All layout endpoints accept the same request body:
```json
{
  "style": "bottom_side_lock",
  "length": 45,
  "width": 45,
  "height": 83,
  "sheet_w": 700,
  "sheet_h": 1000,
  "margin": 10,
  "nesting_pct_override": null
}
```

All return the same response structure:
```json
{
  "layout_type": "straight",
  "cartons": [
    { "x": 10, "y": 10, "w": 190, "h": 157.7, "flipped": false, "row": 0, "col": 0 }
  ],
  "total_cartons": 18,
  "cartons_per_row": 3,
  "num_rows": 6,
  "utilization": 80.93,
  "usable_w": 680,
  "usable_h": 980,
  "sheet_w": 700,
  "sheet_h": 1000,
  "margin": 10,
  "flat_w": 190.0,
  "flat_h": 157.7,
  "nesting_saving_mm": 33.2,
  "nesting_saving_pct": 21.05,
  "pair_height": 0,
  "algorithm_notes": "Simple row by row placement."
}
```

| Endpoint | Algorithm |
|----------|-----------|
| POST /layout/straight | Straight row-by-row layout |
| POST /layout/tumble | Tumble layout with nesting |
| POST /layout/first-fit | First Fit |
| POST /layout/first-fit-decreasing | First Fit Decreasing |
| POST /layout/nfdh | Next Fit Decreasing Height |
| POST /layout/best-fit | Best Fit |
| POST /layout/compare | Run all 6 and return ranked comparison |

---

## Extract Endpoints

### POST /extract/pdf

Upload a PDF artwork file and extract carton dimensions.

Request: `multipart/form-data` with a `file` field containing the PDF.

Response:
```json
{
  "success": true,
  "product_name": "Musli Power",
  "box_style": "bottom_side_lock",
  "length": 45,
  "width": 45,
  "height": 83,
  "unit": "mm",
  "confidence": "High — L x W x H format",
  "notes": "Extracted from PDF."
}
```
