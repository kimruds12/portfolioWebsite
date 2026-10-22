# Credentials and carousel refinement

## Goal

Update the credentials experience in two places.

1. Home Credentials and Achievements uses a compact five-card carousel.
2. About Me Experience, Education, and Credentials uses a larger split layout with a five-card certificate stage on the left and details on the right.

Keep the current fonts, light mode, dark mode, and portfolio style. Do not revise the record content yet.

## Shared five-card carousel

Show five cards at the same time on desktop.

```text
Far previous
Previous
Active
Next
Far next
```

The active card stays centered and fully readable. Two cards appear on each side.

| Card | Scale | Opacity | Layer |
| --- | --- | --- | --- |
| Active | 100 percent | 100 percent | Highest |
| Near left and right | 74 to 82 percent | 58 to 72 percent | Middle |
| Far left and right | 55 to 65 percent | 30 to 45 percent | Back |

Angle the left cards slightly left and the right cards slightly right. Keep every side certificate recognizable and clean. Do not use blur that makes certificate images unreadable.

### Slower movement

Make every slide transition feel deliberate and smooth.

1. Use a 650ms to 800ms transition.
2. Use a smooth spring or cubic-bezier easing.
3. Animate only transform, opacity, and shadow.
4. Keep the carousel manual. Do not auto-advance certificates.
5. Turn off movement animation when reduced motion is enabled.

## Home Credentials and Achievements

### Layout

Keep this section compact. It must not use full screen height.

```text
02 / Achievements
Credentials and Achievements
Short supporting line
Five-card certificate carousel
View Full Credentials
```

Use the focused center-card style from the reference. Give the active card a title, certificate preview, tags, and View Credential action. Use the soft layered depth from the reference for the four side cards.

### Sizing

| Area | Desktop | Mobile |
| --- | --- | --- |
| Main container | `max-w-6xl` | Full width with 1rem side padding |
| Carousel stage height | 400px to 460px | 310px to 360px |
| Active card width | 300px to 350px | 220px to 260px |
| Near side card width | 220px to 270px | 160px to 190px |
| Far side card width | 170px to 210px | 120px to 145px |

Use `object-contain` for all certificate previews. Do not crop or stretch a certificate.

### Arrow space

Place the previous arrow outside the far-left card and the next arrow outside the far-right card.

Keep at least 24px of visible space between an arrow and its nearest card on desktop. On mobile, keep at least 12px. Arrows must never overlap certificates.

### Main action

Keep this action below the carousel.

```text
View Full Credentials
```

It must navigate to `/#` plus `about#credentials` as a normal route link.

Use this exact route instead.

```text
/about#credentials
```

## Enlarge Certificate dialog

Every certificate image on Home and About Me opens a dialog when clicked or tapped.

### Cursor behavior

When a mouse pointer hovers over a certificate image, show a visible plus-sign cursor or circular plus cursor badge.

Do not show the cursor badge on touch devices.

Dragging a certificate moves the carousel. Clicking or tapping without a drag opens the dialog. Use a small drag threshold so a drag never opens the dialog by mistake.

### Dialog content

```text
Enlarge Certificate
Full certificate image
X close button
```

### Dialog rules

1. Open the dialog over a dark translucent backdrop.
2. Center the certificate and show it at the largest size that fits the viewport.
3. Preserve the full image with `object-contain`.
4. Put the X button in the upper-right corner with a 44px minimum click area.
5. Close with the X button, Escape key, or a backdrop click.
6. Move focus into the dialog when it opens.
7. Return focus to the selected certificate when it closes.
8. Lock page scrolling while open and restore scrolling on every close path.
9. Use `role="dialog"`, `aria-modal="true"`, and the accessible name `Enlarge Certificate`.

## About Me records section

### Layout

Keep these tabs.

```text
Work Experience
Education
Certificates and Achievements
```

Below the tabs, use a large split layout on desktop.

| Left side | Right side |
| --- | --- |
| Five-card layered certificate stage | Selected record details |

Use a `max-w-7xl` content container. Make the desktop stage at least 460px high. Use an even two-column grid and a 56px to 80px gap between image stage and text.

The image stage, shadows, and transformed side cards must stay inside the left column. Nothing may overlap the text column.

### Certificate stage

Use the same five visible card format as Home.

```text
Far previous certificate
Previous certificate
Active certificate
Next certificate
Far next certificate
```

The active certificate is sharp and closest to the viewer. Near side cards remain readable. Far side cards stay visible as context. Every certificate image supports the Enlarge Certificate dialog.

### Details column

Keep this content structure ready for later revisions.

```text
Organization or category
Date
Record title
Short description
Key competencies or technologies
```

The details column must align vertically with the carousel stage and have a comfortable line length. It must not be squeezed by the carousel.

For Work Experience and Education, preserve the same details layout. Use an image stage only when there are real images. Do not use fake certificate images for those records.

### Bottom controls

Place controls below the split layout with enough space above them.

```text
Previous arrow
Five progress dots
Next arrow
```

The arrows and dots stay centered. The active dot is wider or more filled.

Controls must support click, keyboard arrow keys, and touch swipes. Loop from the last record to the first and from the first record to the last.

### Mobile behavior

Stack the image stage above the detail column.

At tablet widths, keep the active card, near cards, and partial far cards visible. At narrow phone widths, show the active card and partial near cards. Do not allow horizontal page overflow.

## Safety and quality rules

1. Store carousel records in data arrays.
2. Use fixed aspect-ratio image wrappers to prevent layout shifts.
3. Clean up drag handlers, timers, and event listeners when components unmount.
4. Do not use global `overflow-x-hidden` to hide a broken carousel.
5. Keep local stage clipping separate from visible side-card space.
6. Keep every arrow and close button keyboard accessible.
7. Respect reduced motion.
8. Keep all text and controls readable in light and dark modes.
9. Keep the Home View Full Credentials action linked to `/about#credentials`.

## Component updates

| Component | Required change |
| --- | --- |
| `Credentials.jsx` | Compact five-card Home preview, slow transitions, clear arrow space, and View Full Credentials link |
| `CertificateDialog.jsx` | Reusable enlarged image dialog with X close button |
| `ExperienceTabs.jsx` | Work Experience, Education, and Certificates and Achievements tabs |
| `RecordsSplitCarousel.jsx` | Large five-card left stage, right detail area, and bottom controls |
| `index.css` | Shared layered-card, plus cursor, dialog, and reduced-motion styles |

## Done when

- Home displays five visible certificate cards
- Side certificates are clear, presentable, and do not cover the center card
- Arrow buttons have clear space outside the cards
- Certificate transitions are slower and smooth
- Clicking a certificate opens Enlarge Certificate dialog
- The dialog has an X close button and opens the full certificate without cropping
- About Me has a larger split carousel and details layout
- About Me uses five visible certificate cards with bottom controls
- No carousel or shadow overflows into nearby text or outside the page
- Content remains easy to replace later
