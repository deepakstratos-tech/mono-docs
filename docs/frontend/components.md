---
sidebar_position: 5
---

# Shared Components

All reusable components live in `src/components/`.

## Header
```jsx
import Header from "../components/Header";

<Header
  onOpenGuide={() => setGuideOpen(true)}
  loading={loading}
  error={error}
/>
```

Shows the Mono logo, version badge, User Guide button, and backend status indicator.

## StatCard
```jsx
import StatCard from "../components/StatCard";

<StatCard
  label="Total Cartons"
  value={18}
  color="#1565c0"
  sub="per sheet"
/>
```

Displays a metric with a coloured left border, large value, and optional subtitle.

## Tooltip
```jsx
import Tooltip from "../components/Tooltip";

<label>Width (mm)<Tooltip text="Full width of the print sheet" /></label>
```

Shows an ⓘ icon with a hover tooltip.

## SectionPanel
```jsx
import SectionPanel from "../components/SectionPanel";

<SectionPanel title="📦 Carton Specification">
  {/* panel content */}
</SectionPanel>
```

White card with a branded title bar and consistent shadow styling.
