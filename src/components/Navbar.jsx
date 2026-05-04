import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Update scroll progress bar
            const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            setScrollProgress(scroll);

            // Update active section
            const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
            const scrollPosition = window.scrollY + 150; // offset for navbar height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Set initial state on load
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return activeSection === path ? "text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] border-b border-cyber-cyan pb-1" : "text-cyber-textMuted hover:text-cyber-cyan transition-colors";
    };

    return (
        <header className="flex justify-center items-center py-4 px-4 md:px-12 bg-cyber-terminalDark/80 backdrop-blur-md border-b border-cyber-border sticky top-0 z-50">
            
            {/* Mobile Hamburger Menu */}
            <i
                className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} nav-mobile-btn text-cyber-cyan text-2xl cursor-pointer w-6 text-center`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            ></i>

            {/* Desktop Nav */}
            <nav className="nav-desktop gap-3 md:gap-6 font-mono text-[10px] sm:text-xs md:text-sm items-center">
                <a href="#home" className={isActive('home')}>Home</a>
                <a href="#about" className={isActive('about')}>About</a>
                <a href="#projects" className={isActive('projects')}>Projects</a>
                <a href="#skills" className={isActive('skills')}>Skills</a>
                <a href="#achievements" className={isActive('achievements')}>Achievements</a>
                <a href="#contact" className={isActive('contact')}>Contact</a>
            </nav>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="absolute top-full left-0 right-0 bg-cyber-terminalDark/95 backdrop-blur-md border-b border-cyber-border flex flex-col p-6 gap-6 font-mono text-base md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    <a href="#home" onClick={() => setIsMenuOpen(false)} className={isActive('home')}>Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className={isActive('about')}>About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)} className={isActive('projects')}>Projects</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)} className={isActive('skills')}>Skills</a>
                    <a href="#achievements" onClick={() => setIsMenuOpen(false)} className={isActive('achievements')}>Achievements</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className={isActive('contact')}>Contact</a>
                </nav>
            )}

            {/* Scroll Progress Bar */}
            <div 
                className="absolute bottom-0 left-0 h-[2px] bg-cyber-cyan shadow-[0_0_10px_rgba(0,229,255,1)] transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </header>
    );
};

export default Navbar;
