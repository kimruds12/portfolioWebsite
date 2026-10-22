# KimDev boot screen brief

## Purpose

Create a polished opening screen for the KimDev portfolio. It should feel like a system starting up, then smoothly reveal the website when the system reaches 100 percent.

This document is written so Antigravity can understand and build the feature without changing the rest of the portfolio.

## Instruction for Antigravity

```text
Create a fully working React and Tailwind CSS v4 boot screen for this portfolio website.

Use the existing logo at /Assets/cleaned_logo.png. Keep the KD mark clear inside a circular glass-like frame. Use the brand name KimDev as the main label. Use Sora for the KimDev label and Inter or Space Grotesk for supporting text and system labels. Load the fonts from the current project setup. Do not add a new font dependency.

The boot screen must appear when the website first opens. It should show the KD logo, KimDev, a short role line, a progress line, the words SYSTEM READY, and a changing percentage from 0 percent to 100 percent.

When the website is ready, finish at 100 percent, show SYSTEM READY, then automatically animate into the portfolio. The transition must not need a click.

Keep the visual style close to the current portfolio. Use dark navy, cyan, soft white, subtle glows, fine grid texture, and small moving particles. Do not copy the attached reference exactly. Create a different background with an off-center radial glow, faint diagonal grid lines, and light scan lines instead of the centered grid cross from the reference.

The loader must be accessible, responsive, and safe. It must not leave the page locked or blank when an image, font, or animation fails. It must respect reduced-motion settings. It must never cause horizontal scrolling.

Create a documentation that can understand by antigravity.
```

## Required experience

1. The visitor opens the website.
2. The boot screen covers the page immediately.
3. The logo fades and rises into place.
4. KimDev and the role line appear after the logo.
5. The progress line moves from 0 percent to 100 percent.
6. When the required page assets are ready, the label changes to SYSTEM READY.
7. The loader holds for a short moment at 100 percent.
8. The loader fades and lifts away while the portfolio fades in.
9. Scrolling works again as soon as the transition ends.

## Brand and visual rules

### Assets

Use this project asset for the logo.

```text
/Assets/cleaned_logo.png
```

Do not recreate the KD logo in CSS or replace it with text.

### Type

Use these fonts already imported in `src/index.css`.

| Part | Font | Style |
| --- | --- | --- |
| KimDev label | Sora | Bold and tight letter spacing |
| Role line | Space Grotesk or Inter | Small uppercase text with wider letter spacing |
| System label and percent | Space Grotesk or Inter | Small monospace-like system text |

Use the label `KimDev.` with the dot in cyan. Do not use MitchDev or another name from the reference image.

### Background

Create a fresh background that works with the current website but does not look copied from the reference.

Use a deep navy base such as `#050B14`. Add these layers.

1. A soft cyan glow shifted toward the upper right
2. A dim blue glow near the lower left
3. Thin diagonal or offset grid lines at low opacity
4. A few tiny cyan particles that drift slowly
5. A short scan line effect that is barely visible

Do not use the same centered plus-shaped grid or the exact same layout from the reference.

### Layout

Keep the loading content centered with a readable maximum width.

| Item | Small screens | Larger screens |
| --- | --- | --- |
| Logo frame | 88px | 112px |
| KimDev label | 2rem | 3rem |
| Content width | `calc(100% - 2rem)` | 28rem maximum |
| Progress height | 2px | 3px |
| Page padding | 1rem | 2rem |

The role line should be easy to read and can say `AI ENGINEER AND FRONT END DEVELOPER`.

## Component plan

Create these files.

| File | Job |
| --- | --- |
| `src/components/BootLoader.jsx` | Shows the boot screen and runs the reveal animation |
| `src/hooks/useBootSequence.js` | Controls ready state, progress, timeout protection, and cleanup |
| `src/index.css` | Holds only shared boot screen styles and reduced motion rules |
| `src/App.jsx` | Mounts the loader before the portfolio content and passes the completion callback |

Keep the existing portfolio sections unchanged unless a small wrapper is needed for the reveal animation.

## Loading logic

Use a real state flow. Do not use one long `setTimeout` as the only loading logic.

```text
starting
loading
ready
leaving
complete
```

### Rules

1. Start at 0 percent.
2. Preload only critical assets.

   - The KD logo
   - The hero image
   - Fonts already requested by the page

3. Increase the displayed progress smoothly with `requestAnimationFrame`.
4. Never show 100 percent until the critical assets are ready or the fallback time limit is reached.
5. Use a minimum display time of 1200ms so fast loads do not flash.
6. Use a fallback time limit of 5000ms. If an asset fails or is slow, complete the loader and let the site open.
7. When the page is ready, ease the progress to 100 percent.
8. Keep 100 percent visible for 350ms to 500ms.
9. Run the exit animation.
10. Remove the loader from the DOM when the exit animation ends.

Do not wait for every nonessential image or third-party script. A slow external resource must never trap the visitor on the loading screen.

## Animation rules

Use Framer Motion because it is already installed in the project.

| Part | Enter effect | Exit effect |
| --- | --- | --- |
| Background | Fade from 0 to full opacity | Fade out |
| Logo | Fade in and move up 12px | Fade out and scale down slightly |
| KimDev text | Fade in after the logo | Fade out and move up 8px |
| Progress line | Expand from left to right | Fade out |
| Portfolio | Fade in and move up 8px | No exit needed |

Keep the full exit transition between 450ms and 700ms. Avoid sudden white flashes, hard display changes, or long animation delays.

When `prefers-reduced-motion` is enabled, skip motion. Show a short static loader, then reveal the site after it is ready.

## Responsive rules

Build mobile first. The loader must work at these container widths.

| Container variant | Width |
| --- | --- |
| `@3xs` | 256px |
| `@2xs` | 288px |
| `@xs` | 320px |
| `@sm` | 384px |
| `@md` | 448px |
| `@lg` | 512px |
| `@xl` | 576px |
| `@2xl` | 672px |
| `@3xl` | 768px |
| `@4xl` | 896px |
| `@5xl` | 1024px |
| `@6xl` | 1152px |
| `@7xl` | 1280px |

Add `@container` to the boot screen content wrapper if the logo, title, or progress area changes based on its parent width.

Also check page widths of 320px, 375px, 390px, 414px, 600px, 768px, 992px, 1200px, and 1440px.

At every width, make sure the logo, title, role line, and progress text stay on screen. There must be no clipped content and no horizontal page scroll.

## Accessibility

1. Give the loader `role="status"` and `aria-live="polite"`.
2. Add an accessible label such as `Loading KimDev portfolio. 42 percent complete.`
3. Mark decorative particles and background layers as `aria-hidden="true"`.
4. Do not trap keyboard focus inside the loader.
5. Do not disable the site permanently if JavaScript or an asset fails.
6. Respect `prefers-reduced-motion`.
7. Keep text contrast high enough against the dark background.

## Bug prevention

1. Keep a cleanup function for every animation frame, timer, and event listener.
2. Do not update state after the component unmounts.
3. Unlock `document.body.style.overflow` in every completion and error path.
4. Protect image loading with `onload` and `onerror` handlers.
5. Use one completion function and make it safe to call more than once.
6. Wait for the exit animation before unmounting the loader.
7. Avoid `overflow-x-hidden` as a way to hide a broken layout.
8. Do not create duplicate loaders after React development mode renders a component twice.
9. Do not store the animation frame ID in regular component state.
10. Confirm the app still works after refreshing quickly, resizing during loading, and switching to a different tab while loading.

## Done checklist

The work is complete only when all points below are true.

- The KD logo uses the current project asset
- The label says KimDev
- The progress starts at 0 and ends at 100
- The system ready message appears before the portfolio opens
- The portfolio opens by itself
- The loader has a safe fallback and cannot block the visitor
- The page is scrollable after the loader closes
- The motion is reduced for visitors who request it
- The loader works on small phones, tablets, laptops, and wide screens
- There is no horizontal overflow
- `npm run build` and `npm run lint` pass
