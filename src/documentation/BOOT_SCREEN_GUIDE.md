# KimDev Boot Screen Guide

## Overview

This document specifies the architecture, components, animation timeline, and loading mechanics for the **KimDev Boot Screen** opening experience.

---

## 1. Key Components & Architecture

| File | Role |
| --- | --- |
| `src/components/BootLoader.jsx` | Renders the boot screen, circular KD logo badge, KimDev. brand, progress bar, system status, and handles Framer Motion entrance/exit transitions. |
| `src/hooks/useBootSequence.js` | Manages asset preloading, rAF-based smooth progress interpolation, timing bounds (1200ms min, 5000ms fallback), ready states, and body scroll lock/unlock. |
| `src/index.css` | Supplies scanline overlays (`.boot-scanlines`), ambient gradients, and `prefers-reduced-motion` overrides. |
| `src/App.jsx` | Mounts `BootLoader` at `z-[9999]` and smoothly reveals the portfolio content as the boot sequence concludes. |

---

## 2. Visual Rules & Assets

- **Logo**: `/Assets/KDLogo.jpg` inside a white circular glass-like badge with cyan glow halo.
- **Brand Title**: `KimDev.` (rendered in `font-['Sora']` with the dot `.` in `text-cyan-400`).
- **Role Subtitle**: `AI ENGINEER AND FRONT END DEVELOPER` (uppercase with `tracking-[0.25em]` in `font-['Space_Grotesk']`).
- **Status Indicator**: `> SYSTEM_READY` with animated progress percentage `0% → 100%`.
- **Background**: Deep navy (`#050B14`) matching the site's ambient theme, featuring off-center radial glows, fine grid lines, subtle scanlines, and floating particles.

---

## 3. Loading Timeline & Lifecycle Flow

```text
[Mount]
   ↓
[Loading State] (0% → 92% smooth rAF interpolation)
   ├─ Preload critical assets (/Assets/KDLogo.jpg, /Assets/homeKimImage.jpg)
   ├─ Check document.fonts.ready
   └─ Ensure minimum 1200ms display time (guards against fast-load flicker)
   ↓
[Assets Ready & Min Time Elapsed (or 5000ms fallback)]
   ↓
[Ready State] (Smooth ramp to 100%, status shows SYSTEM_READY)
   ↓
[Hold at 100%] (400ms steady state)
   ↓
[Leaving State] (Exit animation: 500ms fade/lift transition)
   ↓
[Complete State] (Unmounted from DOM, body scroll restored, portfolio reveals)
```

---

## 4. Accessibility & Safety Guardrails

- `role="status"` and `aria-live="polite"` applied to the loader container.
- Screen-reader progress announcements via dynamic `aria-label`.
- Hard safety fallback timeout (5000ms) guarantees the visitor is never trapped by slow or failing external assets.
- `prefers-reduced-motion` compliance: automatically suppresses lengthy transitions and reveals the site immediately once loaded.
- Body scroll locking (`overflow = 'hidden'`) automatically cleans up and unlocks on exit or component unmount.
