# Contacts and project interactions

## Scope

Revise only these parts of the portfolio.

1. The Let’s Connect contact list
2. The 3D drag interaction on project cards
3. The project details dialog
4. The project action buttons

Keep the current font families, light and dark themes, data structure, and existing contact links.

Do not change unrelated sections.

## Let’s Connect contact list

### Layout

Replace the current contact cards on the right side with four simple full-width contact rows.

Keep the same four contacts, their current icons, their current visible text, and their existing destination links.

Each row must contain the following.

```text
Contact icon on the left
Contact name and existing text in the center
Arrow-up-right icon on the right
```

Use a thin divider line between rows. Do not use large rounded cards, heavy backgrounds, or large shadows.

### Visual style

| Part | Rule |
| --- | --- |
| Row height | At least 64px on desktop and 56px on mobile |
| Divider | One subtle horizontal line using the current border token |
| Icon | Fixed width so all labels align |
| Text | Keep the current font, color, and contact content |
| Arrow | Use `fa-arrow-up-right-from-square` or `fa-arrow-up-right-from-square` equivalent |
| Background | Transparent by default |

### Drag and highlight interaction

The interaction is visual only. It must not open a contact link during a real drag.

1. A normal click or keyboard activation opens the existing contact link.
2. When a visitor drags a row horizontally, the row text shifts slightly right.
3. During the drag, a plain highlight background grows from left to right beneath the text.
4. The icon and arrow stay aligned with the row.
5. When the visitor releases the row, the text and highlight return smoothly to their default state.
6. Use a drag threshold of at least 8px before treating the action as a drag.
7. Do not animate or move the row vertically.
8. On touch devices, use the same small horizontal shift and highlight without blocking page scroll for a vertical gesture.
9. Respect reduced motion by showing only a short color change without movement.

Use `transform` and `opacity` for the interaction. Do not use layout-changing animation.

## Project card drag interaction

### Expected behavior

Every project card has a pointer-driven 3D tilt effect.

| Pointer position or drag direction | Card response |
| --- | --- |
| Upper right | Tilts upward and right |
| Upper left | Tilts upward and left |
| Lower right | Tilts downward and right |
| Lower left | Tilts downward and left |
| Release or pointer leave | Smoothly returns to the flat position |

This is a visual tilt only. The card must not be reordered, dragged to a different page position, or moved outside its container.

### Implementation rules

1. Add `perspective` to the card wrapper.
2. Read the pointer position from the card bounding rectangle.
3. Convert the pointer position into `rotateX` and `rotateY` values.
4. Keep both rotations subtle. Use no more than 6 degrees on desktop.
5. Add a small `translateY` lift of no more than 6px while active.
6. Use a smooth 300ms to 450ms return transition on release.
7. Do not tilt while a button, link, tag, or Details action is being clicked.
8. Do not interfere with normal vertical page scrolling on touch devices.
9. Disable the 3D tilt when reduced motion is enabled.
10. Use transform only. Do not change card width, height, grid placement, or document flow.

## Project Details dialog

### Trigger

The existing `Details` action on every project card opens a dialog instead of navigating away.

### Dialog content

Show a larger project view with these parts.

```text
Project category and year
Project title
Project subtitle or role
Large project image
Full project description
Technology tags
Allowed action buttons
X close button
```

### Dialog style

Use the third reference as direction.

1. Place a large centered panel above a low-opacity dark backdrop.
2. Keep the page visible behind the backdrop but visually subdued.
3. Use a readable maximum width such as `max-w-5xl`.
4. Let the dialog body scroll when its content is taller than the viewport.
5. Support touch scrolling inside the dialog.
6. Use the current light and dark theme tokens for the panel.
7. Keep the close X button fixed at the top-right of the dialog panel.

### Dialog behavior

1. Open from Details with a short fade and scale animation.
2. Close from the X button, Escape key, or clicking the backdrop.
3. Move focus to the close button when opened.
4. Return focus to the Details trigger when closed.
5. Lock page scrolling only while the dialog is open.
6. Always restore page scrolling when the dialog closes or unmounts.
7. Use `role="dialog"`, `aria-modal="true"`, and an accessible project-title label.
8. Do not open the dialog after a project-card drag gesture.

## Project action buttons

### PLV-QLib and ARTA-CSS

These two website projects must show only one primary action.

```text
View Website
```

Do not show `Live` for these projects.

### All other projects

Remove the `Live` button.

If a project has a source URL, show only one wide rectangular action.

```text
View Source
```

If a project has no source URL, do not render an empty action button.

### Button rules

1. Use the full available action width inside the project details dialog.
2. Use a clear external-link or GitHub icon when appropriate.
3. Keep the button label exactly `View Website` or `View Source`.
4. Keep the Details action separate from these project destination buttons.
5. Do not show both Live and View Website.
6. Do not show both Source and View Source.

## Suggested files

| File | Change |
| --- | --- |
| `src/components/home.jsx` | Replace the right-side contact cards with lined contact rows and drag highlight behavior |
| `src/components/Projects.jsx` | Add 3D tilt, Details trigger handling, action visibility rules, and dialog state |
| `src/components/ProjectDetailsDialog.jsx` | New reusable project dialog component |
| `src/index.css` | Shared row highlight, dialog, and reduced-motion styles only |

## Quality rules

1. Keep the current contact URLs unchanged.
2. Keep the four current contacts unchanged.
3. Keep all project card text readable while tilted.
4. Do not cause horizontal page overflow.
5. Keep touch targets at least 44px where possible.
6. Keep keyboard focus visible in both themes.
7. Keep motion smooth but subtle.
8. Do not add unnecessary packages.
