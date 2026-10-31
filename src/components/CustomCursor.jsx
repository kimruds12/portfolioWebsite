import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * CustomCursor:
 * - Desktop, Big screen laptop, small laptop: Standard native OS cursor is used.
 *   Custom cursor ring & dot are removed for clean, familiar, high-contrast usability on all backgrounds.
 * - Touch & Pen Devices: Interactive touch-tap ripple feedback is preserved when the user
 *   touches the screen for controlling, supporting both light and dark mode.
 */
const CustomCursor = () => {
  const [tapRipples, setTapRipples] = useState([]);
  const rippleTimersRef = useRef(new Set());
  const rippleIdRef = useRef(0);

  // Touch & Pen Input: Pointer Events tap feedback (Reliable on all touchscreens, mobile devices, hybrid laptops, pens)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.PointerEvent) return undefined;

    const activeTimers = rippleTimersRef.current;

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
        activeTimers.delete(timer);
      }, 450);

      activeTimers.add(timer);
    };

    window.addEventListener('pointerdown', handlePointerDown, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, {
        capture: true,
      });

      activeTimers.forEach((timer) => window.clearTimeout(timer));
      activeTimers.clear();
    };
  }, []);

  if (typeof document === 'undefined') return null;

  // Portaled directly to document.body at max z-index for touch tap ripples
  return createPortal(
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden select-none"
      style={{
        zIndex: 2147483647,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {/* Mobile Touch & Pen Tap Ripples */}
      {tapRipples.map((tap) => (
        <div key={tap.id} className="pointer-events-none select-none" aria-hidden="true">
          <div
            className="mobile-tap-ring"
            style={{
              left: `${tap.x}px`,
              top: `${tap.y}px`,
            }}
          />
          <div
            className="mobile-tap-dot"
            style={{
              left: `${tap.x}px`,
              top: `${tap.y}px`,
            }}
          />
        </div>
      ))}
    </div>,
    document.body
  );
};

export default CustomCursor;
