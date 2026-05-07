import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Footer from './components/Footer';

const particles = [
  { top: '8%', left: '12%', size: 'h-2 w-2', delay: '0s' },
  { top: '16%', left: '78%', size: 'h-3 w-3', delay: '2s' },
  { top: '24%', left: '56%', size: 'h-1.5 w-1.5', delay: '1.2s' },
  { top: '38%', left: '87%', size: 'h-2.5 w-2.5', delay: '3.4s' },
  { top: '51%', left: '8%', size: 'h-2 w-2', delay: '0.6s' },
  { top: '66%', left: '72%', size: 'h-1.5 w-1.5', delay: '2.6s' },
  { top: '74%', left: '31%', size: 'h-3 w-3', delay: '1.8s' },
  { top: '84%', left: '90%', size: 'h-2 w-2', delay: '3.8s' },
];

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 640);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B14] text-[#F5F5F5]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_18%_18%,rgba(14,116,144,0.28),transparent_24%),radial-gradient(circle_at_84%_24%,rgba(103,232,249,0.08),transparent_22%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.06),transparent_30%)]" />
        <div className="ambient-grid absolute inset-0 opacity-70" />
        <div className="ambient-spotlight absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full" />
        <div className="ambient-blur ambient-blur-one absolute -left-20 top-32 h-72 w-72 rounded-full" />
        <div className="ambient-blur ambient-blur-two absolute right-0 top-[28rem] h-80 w-80 rounded-full" />
        {particles.map((particle, index) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className={`floating-particle absolute ${particle.size} rounded-full bg-cyan-300/60`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: `${7 + index}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="pb-16">
          <Home />
        </main>

        <Footer />

        {showScrollTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/12 bg-[rgba(10,10,20,0.75)] text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B14]"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
