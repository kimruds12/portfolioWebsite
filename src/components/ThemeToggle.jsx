import { useState, useEffect } from 'react';

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

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // LocalStorage access might be blocked
    }

    if (nextTheme === 'dark') {
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('theme-dark', 'dark');
    } else {
      document.documentElement.classList.remove('theme-dark', 'dark');
      document.documentElement.classList.add('theme-light');
    }

    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: nextTheme } }));
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative inline-flex h-9 w-[4.4rem] items-center rounded-full p-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${
        isDark
          ? 'bg-[#0c111a] border border-white/[0.08] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.8),inset_-1px_-1px_3px_rgba(255,255,255,0.06)]'
          : 'bg-[#dce6f0] border border-slate-300/70 shadow-[inset_2px_2px_4px_rgba(166,180,200,0.45),inset_-1px_-1px_3px_rgba(255,255,255,0.85)]'
      } ${className}`}
    >
      {/* Sun icon on left track */}
      <span
        aria-hidden="true"
        className={`flex h-6 w-6 items-center justify-center text-xs transition-opacity duration-300 pl-0.5 ${
          isDark ? 'text-slate-600 opacity-40' : 'opacity-0'
        }`}
      >
        <i className="fa-solid fa-sun" />
      </span>

      {/* Moon icon on right track */}
      <span
        aria-hidden="true"
        className={`flex h-6 w-6 items-center justify-center text-xs transition-opacity duration-300 ml-auto pr-0.5 ${
          !isDark ? 'text-slate-400 opacity-60' : 'opacity-0'
        }`}
      >
        <i className="fa-solid fa-moon" />
      </span>

      {/* Sliding Neumorphic Knob (Reference Images 1 & 2) */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1 flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ease-out ${
          isDark
            ? 'translate-x-[2.35rem] bg-[#1a2332] text-slate-100 border border-white/10 shadow-[2px_2px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]'
            : 'translate-x-0.5 bg-white text-amber-500 shadow-[2px_2px_6px_rgba(166,180,200,0.4),-1px_-1px_4px_rgba(255,255,255,0.9)]'
        }`}
      >
        <i className={`text-xs ${isDark ? 'fa-solid fa-moon text-slate-100' : 'fa-solid fa-sun text-amber-500'}`} />
      </span>
    </button>
  );
};

export default ThemeToggle;
