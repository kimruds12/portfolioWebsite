import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contacts' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const getSections = () =>
      navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }

      handleScroll();
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = Math.min(1, Math.max(0, totalScroll / windowHeight));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      const marker = window.scrollY + 140;
      const sections = getSections();

      if (sections.length === 0) {
        return;
      }

      let currentSection = sections[0].id;

      sections.forEach((section) => {
        if (marker >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      // If at the absolute bottom of the page, force the last section to be active
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const navbarOffset = 96;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navbarOffset);

    setActiveSection(id);
    setIsMenuOpen(false);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 flex flex-col transition-all duration-300 ${scrollProgress > 0 ? 'bg-[rgba(5,11,20,0.85)] border-b border-cyan-300/10 backdrop-blur-xl shadow-lg' : 'bg-transparent border-transparent'}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

          {/* Logo - Always visible, upper left */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 relative z-[60]">
            <img
              src="/Assets/cleaned_logo.png"
              alt="Kim Ruds Guston Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
            />
          </a>

          {/* Center Nav Links - Desktop only */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={`group relative py-2 text-sm font-semibold uppercase tracking-[0.1em] transition duration-300 ${isActive
                    ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                    : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right side: Download CV (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* Download CV - Desktop only */}
            <a
              href="/Assets/2026_GUSTON_CV.pdf"
              download="2026_GUSTON_CV.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download CV"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#38bdf8,#0ea5e9)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <i className="fa-solid fa-download text-[10px]" />
              Download CV
            </a>

            {/* Mobile Hamburger - right side */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="relative z-[60] inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-300/20 bg-cyan-300/5 text-white/80 transition hover:border-cyan-300/50 hover:text-cyan-200 md:hidden"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>

        {/* Scroll Progress Line */}
        <div className={`absolute bottom-0 left-0 h-[2px] w-full bg-transparent transition-opacity duration-300 ${scrollProgress > 0 ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className="h-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* ── Mobile Full-Screen Navigation Overlay ── */}
      {/* Background overlay with low opacity content effect */}
      <div
        className={`fixed inset-0 z-[51] bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Navigation Panel - slides in from right */}
      <div
        className={`fixed top-0 right-0 z-[55] h-full w-[280px] max-w-[80vw] bg-[rgba(8,12,24,0.97)] border-l border-cyan-300/10 shadow-[-20px_0_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close button at top right of panel */}
        <div className="flex items-center justify-end px-6 pt-5 pb-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-300/20 bg-white/5 text-white/80 transition hover:border-cyan-300/50 hover:text-cyan-200"
            aria-label="Close navigation menu"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 px-4 mt-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`relative rounded-2xl px-6 py-4 text-lg font-medium tracking-wider transition-all duration-200 ${isActive
                  ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(56,189,248,0.1)]'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                )}
              </a>
            );
          })}

          {/* Divider */}
          <div className="mx-4 my-3 h-px bg-white/10" />

          {/* Download CV in mobile menu */}
          <a
            href="/Assets/2026_GUSTON_CV.pdf"
            download="2026_GUSTON_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl px-6 py-4 text-lg font-medium tracking-wider text-cyan-300 transition-all duration-200 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <i className="fa-solid fa-download text-sm" />
            Download CV
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
