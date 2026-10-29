import { useState, useEffect, useRef } from 'react';

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'dark';
  if (document.documentElement.classList.contains('theme-light')) return 'light';
  if (document.documentElement.classList.contains('theme-dark')) return 'dark';
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // LocalStorage unavailable
  }
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
};

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const buttonRef = useRef(null);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const handleThemeChange = (e) => {
      if (e.detail?.theme) {
        setTheme(e.detail.theme);
      }
    };

    window.addEventListener('themechange', handleThemeChange);
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const applyThemeToDOM = (nextTheme) => {
    if (nextTheme === 'dark') {
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('theme-dark', 'dark');
    } else {
      document.documentElement.classList.remove('theme-dark', 'dark');
      document.documentElement.classList.add('theme-light');
    }
    setTheme(nextTheme);

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // LocalStorage access might be blocked
    }

    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: nextTheme } }));
  };

  const toggleTheme = (e) => {
    if (isTransitioningRef.current) return;

    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // Get click / button center coordinates for the ripple origin
    const rect = buttonRef.current?.getBoundingClientRect() || e.currentTarget?.getBoundingClientRect();
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    const maxRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY)
    );

    const isReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Native View Transitions API with CSS-driven hardware acceleration ──
    if (typeof document.startViewTransition === 'function' && !isReducedMotion) {
      isTransitioningRef.current = true;
      const transitionClass =
        nextTheme === 'dark' ? 'theme-transition-to-dark' : 'theme-transition-to-light';

      // Set ripple origin & radius custom properties on root
      document.documentElement.style.setProperty('--ripple-x', `${originX}px`);
      document.documentElement.style.setProperty('--ripple-y', `${originY}px`);
      document.documentElement.style.setProperty('--ripple-r', `${maxRadius}px`);
      document.documentElement.classList.add(transitionClass);

      const transition = document.startViewTransition(() => {
        applyThemeToDOM(nextTheme);
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove(
          'theme-transition-to-dark',
          'theme-transition-to-light'
        );
        document.documentElement.style.removeProperty('--ripple-x');
        document.documentElement.style.removeProperty('--ripple-y');
        document.documentElement.style.removeProperty('--ripple-r');
        isTransitioningRef.current = false;
      });
      return;
    }

    // ── Fallback for browsers without View Transitions API ──
    if (!isReducedMotion && typeof document !== 'undefined') {
      isTransitioningRef.current = true;
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.inset = '0';
      overlay.style.zIndex = '999999';
      overlay.style.pointerEvents = 'none';
      overlay.style.backgroundColor = '#0a0d14';

      if (nextTheme === 'dark') {
        overlay.style.clipPath = `circle(0px at ${originX}px ${originY}px)`;
        document.body.appendChild(overlay);

        const anim = overlay.animate(
          {
            clipPath: [
              `circle(0px at ${originX}px ${originY}px)`,
              `circle(${maxRadius}px at ${originX}px ${originY}px)`,
            ],
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards',
          }
        );

        anim.onfinish = () => {
          applyThemeToDOM(nextTheme);
          overlay.remove();
          isTransitioningRef.current = false;
        };
      } else {
        applyThemeToDOM(nextTheme);
        overlay.style.clipPath = `circle(${maxRadius}px at ${originX}px ${originY}px)`;
        document.body.appendChild(overlay);

        const anim = overlay.animate(
          {
            clipPath: [
              `circle(${maxRadius}px at ${originX}px ${originY}px)`,
              `circle(0px at ${originX}px ${originY}px)`,
            ],
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards',
          }
        );

        anim.onfinish = () => {
          overlay.remove();
          isTransitioningRef.current = false;
        };
      }
      return;
    }

    // Instant switch if reduced motion
    applyThemeToDOM(nextTheme);
  };

  const isDark = theme === 'dark';

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative inline-flex h-[36px] w-[68px] items-center rounded-full border-2 p-[2px] select-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] cursor-pointer hover:scale-[1.02] active:scale-95 ${
        isDark ? 'border-slate-600/70 bg-[#0a0d14]' : 'border-slate-300 bg-white'
      } ${className}`}
    >
      {/* Inner Track adhering strictly to current theme colors */}
      <div
        className={`relative flex h-full w-full items-center rounded-full transition-colors duration-300 px-[2px] ${
          isDark ? 'bg-[#1a2332]' : 'bg-[#dce5f2]'
        }`}
      >
        {/* Sliding White Circular Knob */}
        <span
          aria-hidden="true"
          className={`pointer-events-none flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
            isDark ? 'translate-x-[32px]' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            /* Crescent Moon Icon in Dark Slate on White Knob (Image 2 figure in theme color) */
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-slate-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            /* Sun Icon with 8 Radial Rays in Dark Slate on White Knob (Image 1 figure in theme color) */
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-slate-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4.2" />
              <line x1="12" y1="2" x2="12" y2="4.5" />
              <line x1="12" y1="19.5" x2="12" y2="22" />
              <line x1="2" y1="12" x2="4.5" y2="12" />
              <line x1="19.5" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="6.7" y2="6.7" />
              <line x1="17.3" y1="17.3" x2="19.07" y2="19.07" />
              <line x1="4.93" y1="19.07" x2="6.7" y2="17.3" />
              <line x1="17.3" y1="6.7" x2="19.07" y2="4.93" />
            </svg>
          )}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
