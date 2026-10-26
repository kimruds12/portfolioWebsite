import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

// ── Concentric Signal Rings SVG Logo for floating Let's Connect button ──
const SignalRingsLogo = ({ className = '' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
    <circle cx="20" cy="20" r="13.5" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.55" />
    <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="2" strokeOpacity="0.75" />
    <circle cx="20" cy="20" r="4.5" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.95" />
    <circle cx="20" cy="20" r="1.8" fill="currentColor" />
  </svg>
);

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About Me' },
];

const ROTATION_INTERVAL_MS = 5000;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHomeWall, setIsOnHomeWall] = useState(true);
  const [isInContactSection, setIsInContactSection] = useState(false);
  const [rotationState, setRotationState] = useState('name'); // 'name' | 'logo'

  const rotationTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const isHomePage = location.pathname === '/';

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Window resize to close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Scroll & Wall State Detection ──
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (!isHomePage) {
        setIsOnHomeWall(false);
        setIsInContactSection(false);
        return;
      }

      // Check if visitor is on the Home wall (first 350px or viewport hero)
      const onWall = scrollY < 320;
      setIsOnHomeWall(onWall);

      // Detect if user is in contact section
      const contactEl = document.getElementById('connect') || document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        setIsInContactSection(rect.top <= 200 && rect.bottom >= 120);
      } else {
        setIsInContactSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // ── Home Identity Rotation Timer ──
  const clearRotationTimer = useCallback(() => {
    if (rotationTimerRef.current) {
      clearInterval(rotationTimerRef.current);
      rotationTimerRef.current = null;
    }
  }, []);

  const startRotationLoop = useCallback(() => {
    clearRotationTimer();
    rotationTimerRef.current = setInterval(() => {
      // Pause if tab is hidden
      if (typeof document !== 'undefined' && document.hidden) return;

      setRotationState((prev) => (prev === 'name' ? 'logo' : 'name'));
    }, ROTATION_INTERVAL_MS);
  }, [clearRotationTimer]);

  useEffect(() => {
    // Rotation ONLY runs on Home page when visitor is on the Home wall
    if (isHomePage && isOnHomeWall) {
      setRotationState('name');
      startRotationLoop();
    } else {
      clearRotationTimer();
      setRotationState('logo');
    }

    // Page visibility change handler (pauses rotation when tab is hidden)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearRotationTimer();
      } else if (isHomePage && isOnHomeWall) {
        startRotationLoop();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearRotationTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isHomePage, isOnHomeWall, clearRotationTimer, startRotationLoop]);

  // Handle identity click: return to home & top
  const handleIdentityClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Handle nav link click
  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  // Active navigation link based strictly on route
  const getIsActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Determine what identity to show:
  // If not on home, OR outside home wall -> always KD logo
  // If on home wall -> rotates between 'name' and 'logo'
  const showFullName = isHomePage && isOnHomeWall && rotationState === 'name';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1.5 sm:py-2' : 'py-3 sm:py-4'
          }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 min-[360px]:px-4 sm:px-6">

          {/* ── LEFT: Identity Pill with 5-Second Rotation ── */}
          <div className="flex items-center min-w-0 h-11">
            <AnimatePresence mode="wait">
              {showFullName ? (
                <motion.div
                  key="identity-full-name"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -2 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 2 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-10 sm:h-11 items-center gap-2 rounded-full px-3 sm:px-4 backdrop-blur-xl transition-all duration-300 select-none border border-[var(--border-color)] bg-[var(--surface)] shadow-md min-w-0"
                  style={{
                    backgroundColor: 'var(--identity-bg)',
                    borderColor: 'var(--identity-border)',
                    boxShadow: 'var(--identity-shadow)',
                  }}
                >
                  <span className="truncate max-w-[120px] min-[360px]:max-w-none font-['Sora',_sans-serif] text-xs sm:text-sm font-bold text-[var(--text-main)] tracking-tight">
                    Kim Ruds Guston
                  </span>
                  <span className="hidden sm:inline-block h-3.5 w-px bg-[var(--border-color)] opacity-70" />
                  <span className="hidden sm:inline-block font-sans text-xs text-[var(--text-muted)] font-medium">
                    Front-End Developer
                  </span>
                </motion.div>
              ) : (
                <motion.a
                  key="identity-kd-logo"
                  href="/"
                  onClick={handleIdentityClick}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -2 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 2 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-10 sm:h-11 items-center gap-2.5 rounded-full pl-1.5 pr-4 backdrop-blur-xl transition-all duration-300 min-w-[44px] border border-[var(--border-color)] bg-[var(--surface)] shadow-md hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
                  style={{
                    backgroundColor: 'var(--identity-bg)',
                    borderColor: 'var(--identity-border)',
                    boxShadow: 'var(--identity-shadow)',
                  }}
                  title="KimDev - Return to Home"
                  aria-label="KimDev logo - Return to Home"
                >
                  {/* Fixed image container preventing any header jump */}
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full overflow-hidden bg-[var(--surface-soft)] shrink-0 border border-[var(--border-color)]">
                    <img
                      src="/Assets/KDLogo.jpg"
                      alt="KimDev logo"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/Assets/cleaned_logo.png';
                      }}
                    />
                  </div>
                  <span className="font-['Sora',_sans-serif] text-xs sm:text-sm font-bold text-[var(--text-main)] tracking-tight">
                    KimDev
                  </span>
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {/* ── CENTER: Navigation Pill (Home, Projects, About Me) ── */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 rounded-full p-1.5 backdrop-blur-xl transition-all duration-300 border border-[var(--border-color)] shadow-md"
            style={{
              backgroundColor: 'var(--nav-bg)',
              borderColor: 'var(--nav-border)',
              boxShadow: 'var(--nav-shadow)',
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = getIsActive(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`relative flex min-h-[38px] items-center justify-center rounded-full px-4 sm:px-5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${isActive
                    ? 'text-[var(--nav-item-active-text)] font-bold'
                    : 'text-[var(--nav-item-text)] hover:text-[var(--text-main)]'
                    }`}
                  style={
                    isActive
                      ? {
                        backgroundColor: 'var(--nav-item-active-bg)',
                        boxShadow: 'var(--nav-item-active-shadow)',
                      }
                      : {}
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ── RIGHT: Theme Toggle & Resume Button ── */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle */}
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>

            {/* Resume Button */}
            <a
              href="/Assets/2026_GustonCV.pdf"
              download="2026_GustonCV.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download Resume"
              className="navbar-resume-btn group hidden md:inline-flex min-h-[38px] min-w-[44px] items-center justify-center gap-2 rounded-2xl px-5 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] cursor-pointer"
              style={{
                backgroundColor: 'var(--resume-btn-bg)',
                color: 'var(--resume-btn-text)',
                borderColor: 'var(--resume-btn-border)',
                borderWidth: '1px',
                boxShadow: 'var(--resume-btn-shadow)',
              }}
            >
              <i className="fa-solid fa-file-arrow-down text-[11px] opacity-75 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full text-[var(--text-main)] backdrop-blur-xl transition-colors duration-200 md:hidden min-w-[44px] min-h-[44px] border border-[var(--border-color)] bg-[var(--surface)] shadow-md"
              style={{
                backgroundColor: 'var(--identity-bg)',
                borderColor: 'var(--identity-border)',
                boxShadow: 'var(--identity-shadow)',
              }}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base`} />
            </button>
          </div>

        </div>
      </header>

      {/* ── Floating Let's Connect Circle Button ── */}
      {/* Only on Home page, disappears when visitor enters the contact section */}
      <AnimatePresence>
        {isHomePage && !isInContactSection && (
          <motion.div
            key="floating-connect-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-40"
          >
            <a
              href="#connect"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('connect') || document.getElementById('contact');
                if (target) {
                  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 88);
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="lets-connect-btn group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              title="Let's Connect"
              aria-label="Let's Connect"
            >
              <SignalRingsLogo className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />

              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 lets-connect-tooltip">
                Let's Connect
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-[70] flex w-[85vw] max-w-sm flex-col justify-between border-l border-[var(--border-color)] bg-[var(--surface)] p-4 min-[360px]:p-6 shadow-2xl md:hidden"
            >
              <div>
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-[var(--border-color)]">
                      <img src="/Assets/KDLogo.jpg" alt="KimDev logo" className="h-full w-full object-cover" />
                    </div>
                    <span className="font-['Sora',_sans-serif] text-sm font-bold text-[var(--text-main)]">
                      Kim Ruds Guston
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--surface-hover)] transition-colors min-w-[44px] min-h-[44px]"
                    aria-label="Close menu"
                  >
                    <i className="fa-solid fa-xmark text-lg" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="mt-6 flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const isActive = getIsActive(link.path);
                    return (
                      <a
                        key={link.path}
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className={`flex min-h-[48px] items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${isActive
                          ? 'text-[var(--nav-item-active-text)] font-bold'
                          : 'text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-main)]'
                          }`}
                        style={
                          isActive
                            ? {
                              backgroundColor: 'var(--nav-item-active-bg)',
                              boxShadow: 'var(--nav-item-active-shadow)',
                            }
                            : {}
                        }
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="h-2 w-2 rounded-full bg-[var(--text-main)]" />}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Footer with Theme Toggle & Resume */}
              <div className="flex flex-col gap-4 border-t border-[var(--border-color)] pt-6">
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm font-medium text-[var(--text-muted)]">Theme mode</span>
                  <ThemeToggle />
                </div>
                <a
                  href="/Assets/2026_GUSTON_CV.pdf"
                  download="2026_GUSTON_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold uppercase tracking-wider shadow-sm hover:opacity-90 active:scale-98 transition-all"
                  style={{
                    backgroundColor: 'var(--resume-btn-bg)',
                    color: 'var(--resume-btn-text)',
                    borderColor: 'var(--resume-btn-border)',
                    borderWidth: '1px',
                    boxShadow: 'var(--resume-btn-shadow)',
                  }}
                >
                  <i className="fa-solid fa-file-arrow-down text-sm" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
