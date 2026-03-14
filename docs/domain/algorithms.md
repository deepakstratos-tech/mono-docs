---
sidebar_position: 3
---

# Layout Algorithms

Mono implements 6 layout algorithms based on the research paper:
> "On the 2D Demand Bin Packing Problem" — Albers, Gálvez, Özdemir (arXiv:2508.13347v1)

## Algorithm Comparison

| Algorithm | Complexity | Best For |
|-----------|-----------|---------|
| Straight | O(n) | Baseline, no rotation |
| Tumble | O(n) | Maximum nesting yield |
| First Fit | O(n) | Quick check |
| FFD | O(n log n) | Rotation optimisation |
| NFDH | O(n log n) | Mixed carton sizes |
| Best Fit | O(n²) | Minimise shelf waste |

## Important Note

**Tumble does not always beat straight.** Whether tumble gives more cartons depends on whether the nesting saving is large enough to squeeze an extra row onto the sheet. Always use Compare All Algorithms to find the true best option for each specific job.
