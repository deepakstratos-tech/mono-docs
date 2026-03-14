---
sidebar_position: 2
---

# Flat Size Calculation

The flat size is the dimensions of the carton when completely unfolded. This is what occupies space on the print sheet.

## Formula
```
Flat Width  = 2 × (L + W) + Glue Flap
Flat Height = H + Top Tuck Depth + Bottom Flap Depth
```

## Example — Musli Power Capsule
```
Box:          L=45mm, W=45mm, H=83mm (Bottom Side Lock)

Flat Width  = 2 × (45 + 45) + 10 = 190mm
Top Tuck    = 83 × 0.40 = 33.2mm
Bottom Lock = 83 × 0.50 = 41.5mm
Flat Height = 83 + 33.2 + 41.5 = 157.7mm

Nesting Saving = 33.2mm = 21.05%
```

## Nesting Saving

The nesting saving equals the top tuck flap depth. In tumble layout, the top tuck of one row nests into the space beside the bottom of the adjacent flipped row.
```
Nesting Saving % = Top Tuck Depth ÷ Flat Height × 100
                 = 33.2 ÷ 157.7 × 100
                 = 21.05%
```
