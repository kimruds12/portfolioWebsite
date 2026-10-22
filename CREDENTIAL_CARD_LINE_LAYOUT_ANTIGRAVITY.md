# Credential card line layout

## Scope

Revise only the lower action area inside each active Credentials and Achievements card.

Keep the existing certificate image, title, current font families, card structure, and five-card carousel.

Do not copy the supplied references. Use them only as direction for a clean two-column line layout.

## Required layout

Keep the four credential tags in two columns.

```text
BASICS        DEVICES
ADDRESSING    SECURITY
```

Remove the rounded tag containers, backgrounds, borders around each tag, arrows, and extra vertical space.

Use plain uppercase text with a small technical label style. Keep the existing Space Grotesk or current monospace treatment.

The tag area should use two equal columns with a compact gap. Keep the labels aligned and readable.

## Divider lines

Use a single thin line below the two-column tag area. This line separates the tags from the certificate action.

Keep the line clean and full width. Do not use a card border or a rounded container around it.

### Dark mode

| State | Line color |
| --- | --- |
| Default | Subtle gray using the current border token |
| Drag or active highlight | White |

When the visitor drags across the tag and action area, animate a white highlight along the divider line from left to right. The highlight should feel like a clean running line, similar to the third reference.

### Light mode

| State | Line color |
| --- | --- |
| Default | Pale blue-gray separator similar to the fourth reference |
| Drag or active highlight | Near-black |

In light mode, the running highlight must be black. Keep the idle separator soft and visible without looking dark or heavy.

## View Certificate action

Place this action below the divider line.

```text
VIEW CERTIFICATE
```

Center the action horizontally. Remove its arrow icon.

Use the current small uppercase technical text style. Keep a clear touch target without adding a visible button container.

A normal click or keyboard activation opens the existing Enlarge Certificate dialog.

## Interaction rules

1. Use a small horizontal drag threshold of 8px.
2. A real drag activates the running divider highlight and does not open the dialog.
3. A click without dragging opens the dialog.
4. On release, fade the highlighted line back to its default color.
5. Use `transform` or `scaleX` for the running-line animation.
6. Do not animate layout spacing, width, height, or grid placement.
7. Respect reduced motion by changing the divider color without movement.
8. Keep the two-column layout unchanged on desktop and mobile.
9. Do not add horizontal overflow.

## Suggested implementation

Update the active credential card content in these components.

| File | Change |
| --- | --- |
| `src/components/CredentialsCarousel.jsx` | Replace tag pills with the compact two-column text layout and centered View Certificate action |
| `src/components/RecordsSplitCarousel.jsx` | Use the same line layout for the active certificate when detailed card content is displayed |
| `src/index.css` | Add shared divider and running-highlight styles using current light and dark theme tokens |

## Done when

- Tags remain in two columns
- Tags have no rounded containers or arrow icons
- Extra spacing is removed
- View Certificate is centered below the divider
- Dark mode uses a white running highlight
- Light mode uses a black running highlight and pale blue-gray separators
- The existing certificate dialog still opens on a normal click
- No unrelated component is changed
