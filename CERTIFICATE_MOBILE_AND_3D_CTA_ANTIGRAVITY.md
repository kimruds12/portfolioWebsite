# Certificate Cards and Lets Connect Update

## Goal

Update the certificate experience in both locations.

1. Home Achievements and Credentials carousel
2. About Me Certificates and Honors carousel

Also update the Lets Connect button in the About Me delivery framework.

Keep the current fonts, light and dark themes, content, routes, modal, and carousel functions.

## Files to change

```txt
src/components/CredentialsCarousel.jsx
src/components/RecordsSplitCarousel.jsx
src/components/ProjectDeliveryFramework.jsx
src/index.css
```

Do not install a package. Do not make unrelated design changes.

---

## Part 1

## Certificate tag actions on the Home carousel

### Affected component

```txt
src/components/CredentialsCarousel.jsx
CredentialCardActionArea
```

### Required behavior

For the active center certificate card, every item below the certificate preview must open the same enlarged certificate dialog as the View Certificate button.

This includes tags such as.

```txt
BASICS
DEVICES
ADDRESSING
SECURITY
```

The centered View Certificate action must keep its current behavior.

### Exact interaction rules

- Each lower tag is a real `button` on the active center card
- Each tag calls `openCertificate(itemRecord, event.currentTarget)`
- The View Certificate button calls the same function
- Pressing Enter or Space on a focused tag opens the same dialog
- The active certificate preview still opens the dialog
- Clicking a side card still changes the selected certificate
- Do not open the dialog from a side card tag
- Do not use nested buttons
- Do not use a clickable `div` for the tags
- Keep the current two-column line layout
- Keep the centered View Certificate action below the divider

### Implementation pattern

Pass one callback from `CredentialCardActionArea` into each `CredentialTagItem`.

```jsx
const handleOpenCertificate = (event) => {
  if (!isCenterCard) return;
  event.stopPropagation();
  onOpenCertificate(itemRecord, event.currentTarget);
};
```

For the active center card, render a button.

```jsx
<button
  type="button"
  onClick={handleOpenCertificate}
  className="credential-tag-button"
  aria-label={`View ${itemRecord.title} certificate for ${label}`}
>
  <span>{label}</span>
  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
</button>
```

For side cards, keep the labels presentational or let the whole side card remain the only selection control. Never create hidden or overlapping buttons.

### Tag button styling

Add a small reset only for `.credential-tag-button`.

```css
.credential-tag-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.credential-tag-button:focus-visible {
  outline: 2px solid var(--text-main);
  outline-offset: 4px;
}
```

Keep the existing running line, hover color, dark theme cyan accent, and light theme dark accent.

---

## Part 2

## Three certificate mobile layout

### Affected components

```txt
src/components/CredentialsCarousel.jsx
src/components/RecordsSplitCarousel.jsx
```

### Required result

Show three certificates on mobile in the same visual order as desktop.

- Previous certificate on the left
- Active certificate in the center
- Next certificate on the right

The center card remains clear and readable. The two side certificates remain visible as clean background previews. They must not cover the center certificate, text, actions, arrows, or page edges.

Use the mobile reference as the visual direction. It must feel like a three-card stack, not three full cards squeezed into one row.

### Mobile stage rules

Apply these rules from 320px to 639px wide.

- Add `margin-inline: 12px` to the carousel section stage
- Add `padding-inline: 16px` inside the stage
- Use `position: relative` and `isolation: isolate`
- Use `overflow: clip` on the stage only to hide excess card edges
- Keep `overflow: visible` on containers that hold focus rings or arrow buttons
- Give the stage enough fixed minimum height for the full center card
- Keep side cards behind the center card with lower z-index
- Keep all card transforms inside the stage bounds
- Keep a visible gap between the center card edge and each screen edge
- Do not use negative page margins
- Do not let the side cards overlap the center card’s tag area or View Certificate button
- Do not hide the side cards below 480px

### Mobile card sizing

Use a center card width that leaves safe page gutters.

```css
width: min(100%, 360px);
max-width: calc(100vw - 48px);
```

Use smaller side previews.

```css
width: min(46vw, 190px);
opacity: 0.32;
scale: 0.72;
```

The side previews should sit behind the active card and extend only partly from each side. They are visual previews, not large overlapping panels.

Suggested mobile transforms.

```txt
Previous card
translateX(-54%) rotate(-5deg)

Active card
translateX(0) rotate(0deg)

Next card
translateX(54%) rotate(5deg)
```

Adjust only the percentage if needed to keep the outer card edges inside the stage. Do not change the center card width to solve overflow.

### Desktop and tablet behavior

- Keep the existing three-card desktop design
- At 640px and above, progressively increase the side card width and opacity
- At 1024px and above, keep the current desktop carousel proportions
- Do not make card text smaller than the current readable mobile text
- Do not change the card content order

### Home Achievements and Credentials carousel

The Home carousel must keep.

- Center title
- Certificate preview
- Two-column tag area
- Centered View Certificate action
- Left and right navigation
- View Full Credentials action

On mobile, the active card may be taller than its side previews. Reserve enough stage height so its lower tags and View Certificate action are never clipped.

### About Me Certificates and Honors carousel

The About Me certificate stage currently hides side cards under 480px. Remove that mobile hiding behavior.

Do not use this rule.

```txt
hidden min-[480px]:block
```

Replace it with mobile-safe side card classes that always render but have smaller size, lower opacity, and safe transforms.

On mobile.

- Show three certificate images only
- Keep the active image in front
- Keep previous and next images visible at both sides
- Put the navigation arrows outside the active image and inside the safe page gutter
- Keep certificate details below the stage with a clear gap of at least 24px
- Do not allow the certificate stage to overlap the details text
- Keep tap and swipe navigation unchanged

### Mobile spacing requirement

For both carousels.

```txt
Page gutter minimum        16px
Carousel stage gutter      16px
Arrow safe area            48px from the card center edge
Certificate to details gap 24px minimum
```

The arrows must remain easy to tap and must never sit underneath a certificate card.

### Modal behavior

Keep the existing enlarged certificate dialog.

- Active certificate image opens the dialog
- Active lower certificate tags open the same dialog on the Home carousel
- Escape closes the dialog
- The close button remains visible and reachable on mobile
- Background interaction stays blocked while the dialog is open
- Focus returns to the button, tag, or image that opened the dialog

---

## Part 3

## White 3D Lets Connect button

### Affected component

```txt
src/components/ProjectDeliveryFramework.jsx
Button class btn-discovery-cta
```

### Required look

Keep the button white in light and dark mode, like the OJT Experience button reference.

Build it as a chunky 3D push button.

- White top face
- Solid 8px pale blue gray depth edge
- Dark slate text and arrow
- Soft floor shadow under the button
- On press, the top face moves down exactly 8px until it is flush with the depth edge
- The floor shadow becomes narrower on press
- On release, the button springs back smoothly
- Keep the existing Lets Connect click behavior

Do not use gradients. Do not change the label, icon, link target, or current font.

### Required markup change

Keep the existing button element. Add one inner face wrapper so the depth can be styled safely.

```jsx
<button type="button" onClick={handleConnectClick} className="btn-discovery-cta">
  <span className="btn-discovery-cta-face">
    <span>Lets Connect</span>
    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
  </span>
</button>
```

### Required CSS

Replace the current floating hover treatment for `.btn-discovery-cta` with this push button behavior.

```css
.btn-discovery-cta {
  position: relative;
  isolation: isolate;
  min-height: 52px;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: #cbd5e1;
  box-shadow: 0 14px 18px rgba(15, 23, 42, 0.16);
  transition: box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1);
}

.btn-discovery-cta::after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 12%;
  right: 12%;
  bottom: -14px;
  height: 12px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.18);
  filter: blur(7px);
  transform: scaleX(1);
  transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease;
}

.btn-discovery-cta-face {
  display: inline-flex;
  min-height: 52px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  border: 1px solid rgba(15, 23, 42, 0.18);
  border-radius: 14px;
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 8px 0 #cbd5e1;
  transform: translateY(0);
  transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1), background-color 180ms ease;
}

.btn-discovery-cta:hover .btn-discovery-cta-face {
  background: #f8fafc;
}

.btn-discovery-cta:active .btn-discovery-cta-face {
  transform: translateY(8px);
  box-shadow: 0 0 0 #cbd5e1;
}

.btn-discovery-cta:active::after {
  transform: scaleX(0.68);
  opacity: 0.55;
}

.btn-discovery-cta:focus-visible {
  outline: 2px solid #0f172a;
  outline-offset: 5px;
}

@media (prefers-reduced-motion: reduce) {
  .btn-discovery-cta,
  .btn-discovery-cta::after,
  .btn-discovery-cta-face {
    transition-duration: 0ms;
  }
}
```

Ensure the text and icon stay dark slate in both themes.

```css
.btn-discovery-cta-face,
.btn-discovery-cta-face span,
.btn-discovery-cta-face i {
  color: #0f172a !important;
}
```

## Completion checklist

- Every active Home certificate tag opens its matching enlarged certificate
- View Certificate opens the same dialog
- Tags work with touch, mouse, keyboard Enter, and keyboard Space
- Side cards remain selection controls and do not open the modal from their tags
- Both certificate areas show a clean three-card stack on mobile
- Side cards remain visible on mobile without covering the center card
- Both sides keep clean page margins
- Arrows remain visible and easy to tap
- Certificate details do not overlap the image stage
- Lets Connect is white in both themes
- Lets Connect has an 8px depth edge
- Pressing Lets Connect moves its face down 8px and narrows the floor shadow
- Releasing the button springs it back
- Existing Lets Connect navigation still works
- No unrelated styles, content, routes, packages, or components are changed
