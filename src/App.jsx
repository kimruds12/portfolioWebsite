import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home';
import About from './components/about'; // Kept About in case it's still needed in the flow, just not in nav
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/achievements';
import Contact from './components/contact';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-cyber-bg bg-cyber-grid relative font-sans text-cyber-textPrimary">
      {/* Radial Glow */}
      <div className="fixed inset-0 bg-cyber-glow pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-cyber-terminalDark border border-cyber-cyan text-cyber-cyan rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:bg-cyber-cyan hover:text-cyber-terminalDark hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center animate-[bounce_2s_infinite]"
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
