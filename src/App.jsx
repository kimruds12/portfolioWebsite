import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/home';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import OJTExperiencePage from './components/OJTExperiencePage';
import OJTMonthPage from './components/OJTMonthPage';
import OJTWeekPage from './components/OJTWeekPage';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BootLoader from './components/BootLoader';
import useBootSequence from './hooks/useBootSequence';

const particles = [
  { top: '8%', left: '12%', size: 'h-1.5 w-1.5', delay: '0s' },
  { top: '16%', left: '80%', size: 'h-2 w-2', delay: '2s' },
  { top: '28%', left: '54%', size: 'h-1 w-1', delay: '1.2s' },
  { top: '42%', left: '88%', size: 'h-2 w-2', delay: '3.4s' },
  { top: '56%', left: '10%', size: 'h-1.5 w-1.5', delay: '0.6s' },
  { top: '70%', left: '76%', size: 'h-1 w-1', delay: '2.6s' },
  { top: '82%', left: '32%', size: 'h-2 w-2', delay: '1.8s' },
  { top: '90%', left: '92%', size: 'h-1.5 w-1.5', delay: '3.8s' },
];

// ── Animated page transitions wrapper ──
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ── Scroll to top or to anchor hash on route change ──
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => {
          const navbarOffset = 90;
          const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navbarOffset);
          window.scrollTo({ top, behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

function AppInner() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { phase, progress, isReady, completeExit } = useBootSequence();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] custom-cursor-active transition-colors duration-250">
      {/* Boot Loading Screen */}
      <BootLoader
        show={phase === 'loading' || phase === 'ready'}
        progress={progress}
        isReady={isReady}
        onExitComplete={completeExit}
      />

      <CustomCursor />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-grid absolute inset-0 opacity-40" />
        <div className="ambient-spotlight absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full" />
        {particles.map((particle, index) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className={`floating-particle absolute ${particle.size} rounded-full bg-[var(--text-muted)] opacity-20`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: `${7 + index}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: phase === 'complete' ? 1 : 0,
          y: phase === 'complete' ? 0 : 8,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <ScrollToTop />
        <Navbar />

        <main className="pb-0">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/ojt-experience" element={<OJTExperiencePage />} />
              <Route path="/ojt-experience/:monthSlug" element={<OJTMonthPage />} />
              <Route path="/ojt-experience/:monthSlug/:weekSlug" element={<OJTWeekPage />} />
            </Routes>
          </PageTransition>
        </main>

        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-lg backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-[var(--text-muted)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)] min-w-[44px] min-h-[44px]"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up text-sm" />
          </button>
        )}
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
