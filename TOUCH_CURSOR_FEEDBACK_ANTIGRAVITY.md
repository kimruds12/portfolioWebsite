# Touch Cursor Feedback Fix

## Purpose

Update the portfolio touch feedback so it works reliably on phones, tablets, touchscreen laptops, touchscreen desktop PCs, and pen enabled devices.

A touch device cannot show a normal mouse cursor that follows a finger. The correct touch version is a short ripple at the exact place the user touches. Keep the existing custom mouse cursor for a real mouse or trackpad.

## Files to update

```txt
src/components/CustomCursor.jsx
src/index.css
```

Do not create a second cursor component. Do not add a dependency. Keep `CustomCursor` mounted once in `src/App.jsx`.

## Current issue

The current component listens to `touchstart` and decides whether to show the mouse cursor partly from the viewport width. This can miss or wrongly classify hybrid devices.

Examples include a touch laptop with a mouse connected, an iPad with a trackpad, or a desktop PC with a touchscreen.

## Required behavior

### Touch and pen input

Show one small dot and one expanding ring at the touch point when the primary pointer is a touch or pen.

- Work on iOS Safari, Android browsers, iPadOS, Windows touchscreens, touchscreen laptops, and pen devices
- Keep the effect above cards, dialogs, and page overlays
- Never block taps, scrolling, links, buttons, sliders, drag gestures, or modal controls
- Show the ripple immediately on pointer down
- Keep at most three active ripples at a time
- Remove each ripple after 420 to 450 milliseconds
- Do not use a fake cursor that follows the finger
- Do not create a ripple for mouse clicks

### Mouse and trackpad input

Keep the existing dot and trailing ring for devices that support a fine pointer and hover.

On a hybrid device, both behaviors must work.

- A finger or pen tap shows a ripple
- A mouse or trackpad move shows the desktop custom cursor
- Switching between input types must not require a reload

## Required implementation

### 1. Replace viewport based input detection

Remove the `window.innerWidth < 768` rule from `checkIsMobileOnly`.

Do not use screen width to decide pointer capability. A narrow browser can still have a mouse. A wide display can still be touch only.

Use this capability check instead.

```jsx
const canUseFinePointer = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;

  return window.matchMedia(
    '(any-hover: hover) and (any-pointer: fine)'
  ).matches;
};
```

Store this in state as `hasFinePointer`.

Listen to the media query `change` event. This keeps the cursor correct when a user connects or removes a mouse or trackpad.

```jsx
useEffect(() => {
  const query = window.matchMedia(
    '(any-hover: hover) and (any-pointer: fine)'
  );

  const updateCapability = () => setHasFinePointer(query.matches);

  updateCapability();
  query.addEventListener('change', updateCapability);

  return () => query.removeEventListener('change', updateCapability);
}, []);
```

Use `hasFinePointer` for the desktop cursor effect and desktop cursor markup.

### 2. Use Pointer Events for touch feedback

Replace the global `touchstart` listener with one global `pointerdown` listener.

Do not register both `touchstart` and `pointerdown`. On many devices that creates duplicate ripples.

Add these refs near the existing ripple state.

```jsx
const rippleTimersRef = useRef(new Set());
const rippleIdRef = useRef(0);
```

Use this effect for touch and pen feedback.

```jsx
useEffect(() => {
  if (typeof window === 'undefined' || !window.PointerEvent) return undefined;

  const handlePointerDown = (event) => {
    const isTouchInput = event.pointerType === 'touch';
    const isPenInput = event.pointerType === 'pen';

    if (!event.isPrimary || (!isTouchInput && !isPenInput)) return;

    const id = `tap-${++rippleIdRef.current}`;
    const ripple = {
      id,
      x: event.clientX,
      y: event.clientY,
    };

    setTapRipples((current) => [...current.slice(-2), ripple]);

    const timer = window.setTimeout(() => {
      setTapRipples((current) => current.filter((item) => item.id !== id));
      rippleTimersRef.current.delete(timer);
    }, 450);

    rippleTimersRef.current.add(timer);
  };

  window.addEventListener('pointerdown', handlePointerDown, {
    capture: true,
    passive: true,
  });

  return () => {
    window.removeEventListener('pointerdown', handlePointerDown, {
      capture: true,
    });

    rippleTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    rippleTimersRef.current.clear();
  };
}, []);
```

Why this is required.

- `pointerdown` covers touch and pen through one browser API
- `pointerType` prevents ripples from appearing on mouse clicks
- `isPrimary` prevents multiple ripples during multi touch gestures
- Passive input keeps scrolling and touch gestures responsive
- The timer cleanup prevents an update after the component unmounts

### 3. Keep the ripple portal safe

Keep the ripple portal under `document.body`.

The wrapper and both ripple elements must always have these properties.

```txt
pointer-events none
aria-hidden true
position fixed
z-index 2147483647
```

The touch effect is visual only. It must never catch the user’s touch.

### 4. Keep CSS motion short and theme aware

Keep the existing `mobile-tap-ring` and `mobile-tap-dot` classes. Use the existing cursor color tokens.

```txt
Dark mode ring and dot use the cyan cursor tokens
Light mode ring and dot use the dark cursor tokens
Ring duration is 420ms
Dot duration is 400ms
```

Do not add `touch-action: none` to `html`, `body`, or the app root. That would break normal scrolling and browser gestures.

For reduced motion, keep a brief non moving feedback state instead of a large expanding animation.

```css
@media (prefers-reduced-motion: reduce) {
  .mobile-tap-ring,
  .mobile-tap-dot {
    animation-duration: 120ms;
    animation-timing-function: linear;
  }
}
```

## Interaction rules

- Keep native browser focus styles and keyboard navigation
- Keep all controls at least 44 by 44 CSS pixels where possible
- Do not use `preventDefault` in the global pointer handler
- Do not add touch feedback by attaching handlers to every button or card
- Do not use CSS hover states as the only interaction feedback on touch devices
- Do not change existing card drag logic or carousel swipe logic
- Do not prevent a touch ripple when the user taps inside a modal
- Do not cause a ripple to remain visible after page navigation

## Acceptance checklist

- A finger tap shows one dot and one ring at the tap position
- A pen tap shows one dot and one ring at the pen position
- A mouse click does not show a touch ripple
- A mouse move on a hybrid touchscreen laptop still shows the desktop custom cursor
- Touching a link still opens it once
- Touching a button still runs its action once
- Page scrolling, carousels, and drag controls still work normally
- The ripple is visible above dialogs and overlays
- Dark mode uses cyan feedback
- Light mode uses dark feedback
- No duplicate ripple appears from a single tap
- No console warning is caused by timers after navigation or unmounting

## Do not change

- Current font setup
- Current light and dark theme tokens
- Existing desktop cursor styling
- Existing project card, carousel, modal, or OJT interactions
- Application routes
- Any third party package list
