import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const canUseFinePointer = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;

  return window.matchMedia(
    '(any-hover: hover) and (any-pointer: fine)'
  ).matches;
};

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(canUseFinePointer);
  const [tapRipples, setTapRipples] = useState([]);

  // High performance coordinate refs to avoid React re-renders during 60/120fps motion
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const ringVelocity = useRef({ x: 0, y: 0 });
  const isMouseDown = useRef(false);
  const rafId = useRef(null);
  const isVisibleRef = useRef(false);

  const rippleTimersRef = useRef(new Set());
  const rippleIdRef = useRef(0);

  // 1. Capability detection: update hasFinePointer when pointer/hover capability changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const query = window.matchMedia(
      '(any-hover: hover) and (any-pointer: fine)'
    );

    const updateCapability = () => setHasFinePointer(query.matches);

    updateCapability();
    query.addEventListener('change', updateCapability);

    return () => query.removeEventListener('change', updateCapability);
  }, []);

  // 2. Touch & Pen Input: Pointer Events tap feedback (Reliable on all touchscreens, hybrid laptops, pens)
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

  // 3. Desktop Mouse Tracking Cursor (Only active when fine pointer and hover are available)
  useEffect(() => {
    if (!hasFinePointer) return undefined;

    let hasPositioned = false;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!hasPositioned) {
        ringPos.current = { x: e.clientX, y: e.clientY };
        hasPositioned = true;
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // The 8px dot sticks directly to the pointer with zero lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const handleMouseLeave = (e) => {
      // Only hide if the mouse genuinely left the browser viewport
      if (!e || (!e.relatedTarget && !e.toElement)) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    // Spring physics animation loop for the 38px ring:
    // Trails the pointer with a springy lag and cleanly settles when stopped
    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      const stiffness = 0.18; // Spring pulling force towards the pointer
      const damping = 0.72;   // Spring damping to prevent jitter and allow clean settling

      const dx = targetX - ringPos.current.x;
      const dy = targetY - ringPos.current.y;

      ringVelocity.current.x = (ringVelocity.current.x + dx * stiffness) * damping;
      ringVelocity.current.y = (ringVelocity.current.y + dy * stiffness) * damping;

      ringPos.current.x += ringVelocity.current.x;
      ringPos.current.y += ringVelocity.current.y;

      if (ringRef.current) {
        const scale = isMouseDown.current ? ' scale(0.85)' : ' scale(1)';
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 19}px, ${ringPos.current.y - 19}px, 0)${scale}`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    // Use capture phase on window so modals, backdrops and stopPropagation can never detach mouse tracking
    window.addEventListener('mousemove', handleMouseMove, { capture: true, passive: true });
    window.addEventListener('mousedown', handleMouseDown, { capture: true, passive: true });
    window.addEventListener('mouseup', handleMouseUp, { capture: true, passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove, { capture: true });
      window.removeEventListener('mousedown', handleMouseDown, { capture: true });
      window.removeEventListener('mouseup', handleMouseUp, { capture: true });
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [hasFinePointer]);

  if (typeof document === 'undefined') return null;

  // Portaled directly to document.body at max z-index (2147483647) to stay permanently above all modals, overlays and dialogs
  return createPortal(
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden select-none"
      style={{
        zIndex: 2147483647,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {/* Desktop Cursor Elements - Only rendered when fine pointer and hover are available */}
      {hasFinePointer && (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.2s ease-out',
            pointerEvents: 'none',
          }}
        >
          {/* 38px Ring - trails pointer with springy lag and settles when stopped */}
          <div
            ref={ringRef}
            className="will-change-transform pointer-events-none"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1.5px solid var(--cursor-ring, rgba(56, 189, 248, 0.45))',
              backgroundColor: 'var(--cursor-ring-bg, rgba(56, 189, 248, 0.05))',
              boxShadow: '0 0 14px var(--cursor-ring, rgba(56, 189, 248, 0.25))',
              pointerEvents: 'none',
              zIndex: 2147483647,
            }}
          />

          {/* 8px Accent Dot - sticks directly to the pointer */}
          <div
            ref={dotRef}
            className="will-change-transform pointer-events-none"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--cursor-accent, #38bdf8)',
              boxShadow: '0 0 10px var(--cursor-accent, #38bdf8)',
              pointerEvents: 'none',
              zIndex: 2147483647,
            }}
          />
        </div>
      )}

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
