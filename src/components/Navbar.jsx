import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-start justify-center md:justify-between">
        <a
          href="#home"
          className="hidden items-center gap-3 rounded-full border border-cyan-300/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-white md:inline-flex"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          Kim Guston
        </a>

        <div className="relative">
          <nav className="hidden items-center gap-1 rounded-full border border-cyan-300/12 bg-[rgba(10,10,20,0.45)] px-2 py-2 shadow-[0_0_40px_rgba(56,189,248,0.12)] backdrop-blur-xl md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                    isActive ? 'text-cyan-300' : 'text-white/65 hover:-translate-y-0.5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute inset-x-4 -bottom-[2px] h-px rounded-full bg-cyan-300 transition-opacity duration-300 ${
                      isActive ? 'opacity-100 shadow-[0_0_14px_rgba(34,211,238,0.95)]' : 'opacity-0 group-hover:opacity-80'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-[rgba(10,10,20,0.45)] px-4 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.12)] backdrop-blur-xl transition hover:border-cyan-300/50 hover:text-cyan-200 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
            <span className="text-cyan-300">
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} />
            </span>
          </button>

          {isMenuOpen && (
            <nav className="absolute right-0 top-[calc(100%+0.75rem)] flex w-64 flex-col gap-1 rounded-[1.5rem] border border-cyan-300/10 bg-[rgba(10,10,20,0.88)] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      isActive ? 'bg-cyan-300/10 text-cyan-200' : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
