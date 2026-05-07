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
  const [scrollProgress, setScrollProgress] = useState(0);

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

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = Math.min(1, Math.max(0, totalScroll / windowHeight));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set correct progress

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex flex-col transition-all duration-300 ${scrollProgress > 0 ? 'bg-[rgba(5,11,20,0.85)] border-b border-cyan-300/10 backdrop-blur-xl shadow-lg' : 'bg-transparent border-transparent'}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-6 sm:px-6 relative">
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative py-2 text-sm font-semibold uppercase tracking-[0.1em] transition duration-300 ${isActive
                  ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                  : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                  }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="absolute right-4 inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-300/20 bg-cyan-300/5 text-white/80 transition hover:border-cyan-300/50 hover:text-cyan-200 md:hidden sm:right-6"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
        </button>

        {isMenuOpen && (
          <nav className="absolute right-4 top-[calc(100%+0.5rem)] flex w-56 flex-col gap-2 rounded-2xl border border-cyan-300/20 bg-[rgba(10,10,20,0.95)] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden sm:right-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider transition ${isActive
                    ? 'bg-cyan-300/10 text-cyan-300'
                    : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Scroll Progress Line */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-full bg-transparent transition-opacity duration-300 ${scrollProgress > 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div
          className="h-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </header>
  );
};

export default Navbar;
