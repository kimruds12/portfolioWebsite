import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isZoom, setIsZoom] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (target && target.closest && target.closest('[data-cursor="zoom"], .cursor-zoom-in, [data-enlarge="true"]')) {
        setIsZoom(true);
      } else if (isZoom) {
        setIsZoom(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const animate = () => {
      const { x: tx, y: ty } = targetRef.current;
      const { x: cx, y: cy } = positionRef.current;

      const dx = tx - cx;
      const dy = ty - cy;

      positionRef.current = {
        x: cx + dx * 0.18,
        y: cy + dy * 0.18,
      };

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, isVisible, isZoom]);

  // Mobile touch cursor
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch && cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${touch.clientX}px, ${touch.clientY}px, 0)`;
        setIsVisible(true);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => setIsVisible(false), 500);
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      if (touch && cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${touch.clientX}px, ${touch.clientY}px, 0)`;
        setIsVisible(true);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  if (!isMobile) {
    return (
      <div
        ref={cursorRef}
        className="custom-cursor-arrow pointer-events-none fixed left-0 top-0 z-[99999]"
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
        }}
      >
        {isZoom ? (
          <div
            className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-9 w-9 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black border border-white/40 dark:border-black/30 shadow-2xl transition-transform duration-150 scale-100"
            style={{ filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45))' }}
          >
            <i className="fa-solid fa-plus text-xs font-bold" />
          </div>
        ) : (
          <svg
            width="26"
            height="32"
            viewBox="0 0 28 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35))',
            }}
          >
            {/* Outer stroke */}
            <path
              d="M2 2L2 28L8.5 21.5L14 32L19 29.5L13.5 19L22 19L2 2Z"
              fill="var(--cursor-fill)"
              stroke="var(--cursor-stroke)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    );
  }

  // Mobile touch dot
  return (
    <div
      ref={cursorRef}
      className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[99999]"
      style={{
        opacity: isVisible ? 1 : 0,
        willChange: 'transform',
        transition: 'opacity 0.25s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-12px',
          left: '-12px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1.5px solid var(--text-main)',
          background: 'var(--surface-soft)',
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default CustomCursor;
