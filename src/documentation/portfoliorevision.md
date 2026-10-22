# Portfolio revision brief

## Goal

Revise the current Kim Ruds Guston portfolio into a clean black and white portfolio with light and dark modes. Keep the current font families and the personal image already used by the site.

Use the reference images only as design direction. Do not copy their names, text, logo, or exact layout.

This document gives Antigravity clear requirements for the redesign.

## Core decisions

| Area | Final decision |
| --- | --- |
| Name | Kim Ruds Guston |
| Role in the home navigation pill | Front End Developer |
| Portrait | Use `/Assets/homeKimImage.jpg` |
| Logo away from home | Use the existing KD logo asset `/Assets/cleaned_logo.png` |
| Main wall message | CREATE WITHOUT LIMITS |
| Navigation order | Home, Projects, About, Experience |
| Main colors | White, black, and grayscale only |
| Existing font style | Keep the current Sora, Inter, and Space Grotesk setup |

## Design direction

The new visual style should feel precise, modern, and personal. It should use the clean pill navigation shown in the first and second references. It should also use the large poster-like type from the fifth and sixth references for the hero wall.

Do not use the current cyan palette for the main theme. Cyan may be removed completely. The design should work through strong black and white contrast, soft gray borders, shadows, and carefully used motion.

## Theme system

Create two full themes. Keep the same layout, font choices, spacing system, and component shapes in both themes. Only the color tokens and contrast should change.

### Light mode

| Token | Value |
| --- | --- |
| Page background | `#F7F7F5` |
| Main text | `#111111` |
| Muted text | `#5F5F5F` |
| Surface | `#FFFFFF` |
| Soft surface | `#EDEDEA` |
| Border | `#D6D6D1` |
| Strong button | `#111111` with white text |
| Hover surface | `#E7E7E2` |

### Dark mode

| Token | Value |
| --- | --- |
| Page background | `#0B0B0B` |
| Main text | `#F5F5F0` |
| Muted text | `#ABABA5` |
| Surface | `#161616` |
| Soft surface | `#202020` |
| Border | `#363636` |
| Strong button | `#F5F5F0` with black text |
| Hover surface | `#292929` |

### Theme rules

1. Keep text readable in both modes.
2. Use black text on light surfaces and white text on dark surfaces.
3. Do not leave dark text on a dark background or light text on a light background.
4. Use one theme class on the document root such as `theme-light` or `theme-dark`.
5. Save the user choice in local storage.
6. On the first visit, use the device color preference.
7. Apply the saved theme before the page is painted to avoid a flash of the wrong theme.
8. The theme button must update its accessible label.

## Navigation

Replace the current navigation links with this exact order.

```text
Home
Projects
About
Experience
```

Place the navigation in a floating centered pill on desktop screens.

Place these controls on the right.

```text
Light and dark mode toggle
Resume button
```

Use the existing CV file for the Resume button.

```text
/Assets/2026_GUSTON_CV.pdf
```

### Home navigation identity

While Home is active, show a text identity pill in the upper left.

```text
Kim Ruds Guston   Front End Developer
```

The name must use the stronger font weight. The role must use a smaller and softer text color.

Do not show the KD logo at the same time as this home identity pill.

### Other section identity

When the visitor leaves the Home wall and enters Projects, About, or Experience, smoothly replace the text identity pill with the existing KD logo.

Use `/Assets/cleaned_logo.png`.

The switch must happen from the active section state, not only from a scroll position guess.

### Navigation behavior

1. Give the active link a filled inner pill or a soft contrasting background.
2. Animate the active state in 180ms to 240ms.
3. Keep the navigation visible while scrolling.
4. Add a subtle border and soft shadow in both themes.
5. Use a mobile menu below 768px.
6. Keep the theme toggle and Resume button available in the mobile menu.
7. Do not let the navigation cover headings when a link scrolls to its section.
8. Keep touch targets at least 44px high and wide.

## Hero wall redesign

The home section becomes a clear personal wall rather than a normal text and image split layout.

### Content order

Use this content order.

```text
KIM RUDS GUSTON
CREATE WITHOUT LIMITS
Front End Developer
Short portfolio introduction
View Projects button
Get in Touch button
```

The name sits above the wall message in a smaller uppercase style with generous letter spacing.

The wall message is the main visual focus.

```text
CREATE
WITHOUT
LIMITS
```

Use a bold condensed display treatment inspired by the fifth and sixth references. Do not add a new font package. Use the current Sora font with large bold weight, tight tracking, and a responsive `clamp()` size.

The name and wall message must remain readable at every screen size. On narrow phones, the message may use three lines. On wide screens, it may use two or three lines based on the layout.

### Portrait and antenna system

Use `/Assets/homeKimImage.jpg` inside a large circular frame.

Add a visible antenna-style system around the portrait.

1. One solid outer circle
2. One dashed orbit ring
3. One thin signal arc
4. Three to five small signal nodes
5. A gentle slow rotation only on the dashed ring

The antenna system must remain visible in light mode. Use dark charcoal lines on the pale background with enough opacity to be seen.

The antenna system must remain visible in dark mode. Use off-white and gray lines on the black background.

Do not hide the portrait behind an overly bright gradient or a low contrast overlay.

### Wall background

Use a subtle technical pattern behind the hero.

Light mode

- Warm white base
- Very light diagonal or square grid lines
- A quiet radial shadow behind the portrait
- Charcoal antenna lines

Dark mode

- Near black base
- Dark gray grid lines
- A subtle gray glow behind the portrait
- Off-white and gray antenna lines

The light and dark wall must feel like the same design. They should only reverse the value and contrast.

## Page sections

Create or rename sections so the navigation targets are real and unique.

| Navigation item | Section id | Purpose |
| --- | --- | --- |
| Home | `home` | Personal wall and introduction |
| Projects | `projects` | Project collection and filters |
| About | `about` | Skills, tools, and personal profile |
| Experience | `experience` | Credentials, achievements, and timeline |

The current skills area can become part of About. The current credentials area can become part of Experience.

Keep the contact action in the hero buttons and footer. Do not add it to the main navigation unless it is needed later.

## Home to Projects parallax transition

Create a parallax transition between the home wall and Projects, inspired by the final reference.

### Intended feeling

As the visitor scrolls down from Home, the large wall type, portrait, and antenna system should slowly move backward and fade. The Projects section should rise into clear focus above it.

### Rules

1. Keep the Home section pinned or visually stable during the first part of the scroll.
2. Move the wall background and large text more slowly than the page scroll.
3. Scale the portrait down slightly from `1` to about `0.88`.
4. Lower the opacity of the wall type as Projects approaches.
5. Move Projects up from a small offset and fade it from `0` to `1`.
6. Keep Project cards sharp and fully readable when they enter.
7. Do not use a blur strong enough to make text unreadable.
8. Do not block normal page scrolling on mobile devices.
9. Turn off or simplify the parallax when `prefers-reduced-motion` is enabled.
10. Use transform and opacity only for scroll animation whenever possible.

Use the installed Framer Motion library. Use `useScroll` and `useTransform` with section refs. Clean up animation work when components unmount.

## Suggested file plan

| File | Revision |
| --- | --- |
| `src/App.jsx` | Add theme setup and keep the page wrapper theme aware |
| `src/index.css` | Add theme variables, grid patterns, focus styles, and reduced motion rules |
| `src/components/Navbar.jsx` | Rebuild navigation, section-aware identity switch, theme toggle, Resume button, and mobile menu |
| `src/components/home.jsx` | Rebuild the hero wall, portrait antenna system, and parallax handoff to Projects |
| `src/components/Projects.jsx` | Make the project entry animation work with the parallax handoff |
| `src/components/Skills.jsx` | Present this content under the About section |
| `src/components/Credentials.jsx` | Present this content under the Experience section |
| `src/components/ThemeToggle.jsx` | Optional reusable accessible theme control |

## Reliability rules

1. Do not create duplicate section ids.
2. Do not remove the existing CV link.
3. Use `min-w-0` in navigation and text layouts that could overflow.
4. Do not hide layout problems with global `overflow-x-hidden`.
5. Keep image dimensions stable to prevent layout movement while loading.
6. Use `object-cover` and a known aspect ratio for the portrait.
7. Make the theme choice survive a refresh.
8. Avoid reading browser APIs during the first server render if this site later uses server rendering.
9. Use an error-safe image fallback if the portrait fails to load.
10. Keep keyboard focus visible in both themes.

## Responsive checks

Test the revised design at these viewport widths.

```text
320px
375px
390px
414px
600px
768px
992px
1200px
1440px
```

Also check the container widths already used by the project.

```text
256px
288px
320px
384px
448px
512px
576px
672px
768px
896px
1024px
1152px
1280px
```

Confirm all of the following in light and dark mode.

- The name pill and KD logo do not overlap the navigation
- The theme toggle works
- The Resume link works
- The mobile menu works
- The hero message remains visible
- The portrait and antenna are visible
- The transition into Projects stays smooth
- Project cards are easy to read
- No content causes horizontal scrolling
- Text contrast remains readable
- Reduced motion still allows normal navigation

## Completion checklist

The revision is complete when the items below are true.

- Light and dark modes use a black and white visual system
- Current font families remain in use
- Home navigation shows `Kim Ruds Guston` and `Front End Developer`
- Other sections show the KD logo instead
- Navigation order is Home, Projects, About, Experience
- Theme toggle and Resume button are present
- The hero wall says `CREATE WITHOUT LIMITS`
- The existing portrait appears inside visible antenna rings
- The Project section enters through a smooth parallax handoff
- The website works on phones, tablets, and desktop screens
- `npm run build` passes
- `npm run lint` passes
