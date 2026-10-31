import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/home';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import OJTExperiencePage from './components/OJTExperiencePage';
import OJTMonthPage from './components/OJTMonthPage';
import OJTWeekPage from './components/OJTWeekPage';
import Footer from './components/Footer';
import BootLoader from './components/BootLoader';
import CustomCursor from './components/CustomCursor';
import useBootSequence from './hooks/useBootSequence';
import useLenisScroll from './hooks/useLenisScroll';

import PageTransitionLayout from './components/PageTransition';

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

// ── Animated page transitions: stagger exit 70ms apart, wait, then stagger enter 70ms apart ──
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransitionLayout>
              <Home />
            </PageTransitionLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransitionLayout>
              <ProjectsPage />
            </PageTransitionLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransitionLayout>
              <AboutPage />
            </PageTransitionLayout>
          }
        />
        <Route
          path="/ojt-experience"
          element={
            <PageTransitionLayout>
              <OJTExperiencePage />
            </PageTransitionLayout>
          }
        />
        <Route
          path="/ojt-experience/:monthSlug"
          element={
            <PageTransitionLayout>
              <OJTMonthPage />
            </PageTransitionLayout>
          }
        />
        <Route
          path="/ojt-experience/:monthSlug/:weekSlug"
          element={
            <PageTransitionLayout>
              <OJTWeekPage />
            </PageTransitionLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

// ── Scroll to top or to anchor hash on route change ──
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      // On /about page, anchors below the pinned Skills deck (#experience, #credentials, #education)
      // are coordinated with GSAP ScrollTrigger in Skills.jsx after pin layout calculation to prevent desync.
      if (pathname === '/about' && (id === 'experience' || id === 'credentials' || id === 'education')) {
        return;
      }

      let attempts = 0;
      const maxAttempts = 30;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const navbarOffset = id === 'connect' ? 16 : 90;
          const performScroll = () => {
            if (window.lenis) {
              window.lenis.scrollTo(el, { offset: -navbarOffset, duration: 0.9 });
            } else {
              const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navbarOffset);
              window.scrollTo({ top, behavior: 'smooth' });
            }
          };

          // Initial scroll trigger as soon as target element mounts in DOM
          performScroll();

          // Settle pass after page transition enter animation completes to lock in exact framing
          setTimeout(performScroll, 500);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 60);
        }
      };

      const timer = setTimeout(tryScroll, 60);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

function AppInner() {
  useLenisScroll();
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
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-main)]">
      <CustomCursor />
      {/* Boot Loading Screen */}
      <BootLoader
        show={phase === 'loading' || phase === 'ready'}
        progress={progress}
        isReady={isReady}
        onExitComplete={completeExit}
      />

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
          <AnimatedRoutes />
        </main>

        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={() => {
              if (window.lenis) {
                window.lenis.scrollTo(0, { duration: 1.2 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
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
