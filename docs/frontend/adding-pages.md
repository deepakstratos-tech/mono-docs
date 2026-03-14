---
sidebar_position: 9
---

# Adding a New Page

This guide walks through adding a new page to Mono. As an example we'll add a Jobs page.

## Step 1: Create the feature folder
```bash
mkdir -p src/features/jobs
```

## Step 2: Create the page component
```jsx
// src/features/jobs/JobsPage.js
import React from "react";
import SectionPanel from "../../components/SectionPanel";

const JobsPage = () => {
  return (
    <div style={{ padding: "24px 32px" }}>
      <SectionPanel title="📋 Job Planning">
        <p>Job planning content goes here.</p>
      </SectionPanel>
    </div>
  );
};

export default JobsPage;
```

## Step 3: Add the route in App.js
```jsx
import JobsPage from "./features/jobs/JobsPage";

<Routes>
  <Route path="/" element={<LayoutPage ... />} />
  <Route path="/jobs" element={<JobsPage />} />
</Routes>
```

## Step 4: Add navigation in Header.js
```jsx
import { Link } from "react-router-dom";

<Link to="/jobs" style={{ color: "white", textDecoration: "none" }}>
  Jobs
</Link>
```

## Step 5: Deploy
```bash
npm run deploy
```
