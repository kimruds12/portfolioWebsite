import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import CredentialsCarousel from './CredentialsCarousel';
import ProjectCard from './ProjectCard';
import ProjectDetailsDialog from './ProjectDetailsDialog';
import { projects } from './ProjectsPage';

// The 3 recent projects shown on home
const RECENT_PROJECTS = [
  'PLV-QLib',
  'PLV-QLib Mobile App',
  '11FTCTicketManagementSystem',
];

const recentProjects = projects.filter((p) => RECENT_PROJECTS.includes(p.title));

const contactLinks = [
  {
    label: 'GitHub',
    value: '@kimruds12',
    href: 'https://github.com/kimruds12',
    icon: 'fa-brands fa-github',
    color: 'var(--text-main)',
  },
  {
    label: 'LinkedIn',
    value: 'Kim Ruds Guston',
    href: 'https://www.linkedin.com/in/kim-ruds-guston-4a1822374/',
    icon: 'fa-brands fa-linkedin-in',
    color: '#0A66C2',
  },
  {
    label: 'Facebook',
    value: 'Kim Ruds Guston',
    href: 'https://www.facebook.com/mikdurs.tugons/',
    icon: 'fa-brands fa-facebook-f',
    color: '#1877F2',
  },
  {
    label: 'Email',
    value: 'kimrudsguston@gmail.com',
    href: 'mailto:kimrudsguston@gmail.com',
    icon: 'fa-solid fa-envelope',
    color: '#EA4335',
  },
];

// ── ContactRow with lighted box and rightward shift (matching Image 2) ──
const ContactRow = ({ item, isLast }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragShift, setDragShift] = useState(0);

  const startPos = useRef({ x: 0, y: 0 });
  const isPointerDown = useRef(false);
  const hasDragged = useRef(false);

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    startPos.current = { x: e.clientX, y: e.clientY };
    isPointerDown.current = true;
    hasDragged.current = false;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) { }
  };

  const handlePointerMove = (e) => {
    if (!isPointerDown.current) return;

    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;

    // Yield to vertical page scrolling on touch devices
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6 && !hasDragged.current) {
      isPointerDown.current = false;
      setIsDragging(false);
      setDragShift(0);
      return;
    }

    if (dx > 0) {
      if (dx >= 8) {
        hasDragged.current = true;
      }
      setIsDragging(true);
      setDragShift(Math.min(32, dx * 0.45));
    } else {
      setDragShift(0);
    }
  };

  const handlePointerEnd = () => {
    if (isPointerDown.current) {
      isPointerDown.current = false;
      setIsDragging(false);
      setDragShift(0);

      if (hasDragged.current) {
        setTimeout(() => {
          hasDragged.current = false;
        }, 150);
      }
    }
  };

  const handleClick = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  };

  const isActive = isHovered || isDragging;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const totalShift = isActive ? (isMobile ? 8 + Math.min(dragShift, 10) : 20 + dragShift) : 0;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handlePointerEnd();
      }}
      onClick={handleClick}
      className={`contact-drag-row group relative flex min-h-[58px] sm:min-h-[64px] items-center justify-between px-3 sm:px-5 py-3 border-b border-[var(--border-color)] bg-transparent select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${isLast ? 'border-b-0' : ''
        }`}
      style={{
        touchAction: 'pan-y',
      }}
    >
      {/* Lighted Opacity Box (Matching Image 2) */}
      <div
        className="contact-row-box pointer-events-none absolute inset-x-1 inset-y-1 rounded-xl transition-all duration-300"
        style={{
          opacity: isActive ? 1 : 0,
        }}
      />

      {/* Row Content */}
      <div className="relative z-10 flex w-full items-center justify-between gap-4">
        {/* Moving Group: Logo + Text slide right together when hovered/dragged */}
        <div
          className="flex flex-1 items-center gap-3 sm:gap-4 min-w-0"
          style={{
            transform: `translateX(${totalShift}px)`,
            transition: isDragging
              ? 'none'
              : 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Contact icon / logo */}
          <div className="flex w-9 sm:w-11 shrink-0 items-center justify-start">
            <div className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[var(--surface-soft)] border border-[var(--border-color)] shadow-2xs transition-colors duration-300 ${isActive ? 'border-[var(--text-muted)]' : ''}`}>
              <i className={`${item.icon} text-sm sm:text-base`} style={{ color: item.color }} />
            </div>
          </div>

          {/* Contact name and handle text */}
          <div className="flex flex-1 flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 min-w-0 pr-2">
            <span className="font-['Sora',_sans-serif] text-sm sm:text-base font-bold text-[var(--text-main)] truncate">
              {item.label}
            </span>
            <span className={`font-mono text-xs sm:text-sm transition-colors duration-200 truncate ${isActive ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'}`}>
              {item.value}
            </span>
          </div>
        </div>

        {/* Arrow-up-right icon on the right (turns blue just like in Image 2) */}
        <div className="flex w-8 shrink-0 items-center justify-end">
          <i
            className={`fa-solid fa-arrow-up-right-from-square text-xs sm:text-sm transition-all duration-300 ${isActive
              ? 'text-sky-400 translate-x-0.5 -translate-y-0.5'
              : 'text-[var(--text-muted)]'
              }`}
          />
        </div>
      </div>
    </a>
  );
};

const Home = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [selectedProject, setSelectedProject] = useState(null);
  const activeTriggerRef = useRef(null);

  const handleOpenDetails = (project, triggerRef) => {
    activeTriggerRef.current = triggerRef?.current || triggerRef;
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const { scrollY } = useScroll();

  // Robust, screen-height independent scroll transforms
  // As the visitor scrolls down toward Projects:
  // - wallScale smoothly scales from 1 to 0.88
  // - wallOpacity fades smoothly from 1 down to 0.05
  // - wallY glides backward/down by 110px
  // - scrollIndicatorOpacity quickly fades out within 90px
  // - ambientY gives the background spotlight subtle counter-depth
  const wallScale = useTransform(scrollY, [0, 450], [1, 0.88], { clamp: true });
  const wallOpacity = useTransform(scrollY, [0, 380], [1, 0.05], { clamp: true });
  const wallY = useTransform(scrollY, [0, 500], [0, 110], { clamp: true });
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 90], [1, 0], { clamp: true });
  const ambientY = useTransform(scrollY, [0, 500], [0, -40], { clamp: true });

  return (
    <>
      {/* ── HERO WALL SECTION ── */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col justify-between items-center px-4 pt-28 pb-10 sm:px-6 lg:px-8 overflow-hidden select-none"
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <div className="ambient-grid absolute inset-0" />
          <motion.div
            style={{ y: ambientY }}
            className="ambient-spotlight absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
        </div>

        <div className="w-full h-2" aria-hidden="true" />

        {/* Main Hero Wall Content */}
        <motion.div
          style={{ scale: wallScale, opacity: wallOpacity, y: wallY }}
          className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto my-auto text-center px-2 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.38em] text-[var(--text-muted)] select-none text-center"
          >
            Kim Ruds C. Guston
          </motion.div>

          {/* Portrait with Antenna System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-6 sm:my-8 flex items-center justify-center"
          >
            <div className="relative flex h-[13rem] w-[13rem] min-[360px]:h-[15rem] min-[360px]:w-[15rem] min-[420px]:h-[17rem] min-[420px]:w-[17rem] sm:h-[20rem] sm:w-[20rem] lg:h-[22rem] lg:w-[22rem] max-w-[85vw] max-h-[85vw] items-center justify-center">
              {/* ── OUTER ORBIT (Moves Circularly Counter-Clockwise) ── */}
              <div className="hero-orbit-outer pointer-events-none absolute inset-0 rounded-full border border-[var(--antenna-line)]" aria-hidden="true">
                {/* Curved Arc Highlight Segments */}
                <svg className="pointer-events-none absolute inset-[-3px] sm:inset-[-4px] h-[calc(100%+6px)] w-[calc(100%+6px)] sm:h-[calc(100%+8px)] sm:w-[calc(100%+8px)]" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="50" r="49" fill="none" stroke="var(--antenna-arc)" strokeWidth="2.5" strokeDasharray="42 160" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="49" fill="none" stroke="var(--antenna-arc)" strokeWidth="2.5" strokeDasharray="26 174" strokeDashoffset="95" strokeLinecap="round" />
                </svg>

                {/* Outer Satellite Dots / Nodes */}
                <span aria-hidden="true" className="hero-signal absolute -left-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[var(--antenna-node)] shadow-xs" />
                <span aria-hidden="true" className="hero-signal absolute bottom-[14%] left-[12%] h-2 w-2 rounded-full bg-[var(--antenna-node)] shadow-xs" />
                <span aria-hidden="true" className="hero-signal absolute top-[8%] right-[18%] h-2 w-2 rounded-full bg-[var(--antenna-node)] shadow-xs" />
              </div>

              {/* ── INNER ORBIT (Moves Circularly Clockwise) ── */}
              <div className="hero-orbit-inner pointer-events-none absolute inset-[1.25rem] sm:inset-[1.6rem] rounded-full border border-dashed border-[var(--antenna-dashed)]" aria-hidden="true">
                {/* Inner Satellite Dots / Nodes */}
                <span aria-hidden="true" className="hero-signal absolute right-[8%] top-[16%] h-2.5 w-2.5 rounded-full bg-[var(--antenna-node)] shadow-xs" />
                <span aria-hidden="true" className="hero-signal absolute bottom-[12%] right-[18%] h-2 w-2 rounded-full bg-[var(--antenna-node)] shadow-xs" />
                <span aria-hidden="true" className="hero-signal absolute top-[28%] left-[6%] h-2 w-2 rounded-full bg-[var(--antenna-node)] shadow-xs" />
                <span aria-hidden="true" className="hero-signal absolute bottom-[24%] left-[10%] h-1.5 w-1.5 rounded-full bg-[var(--antenna-node)] shadow-xs" />
              </div>

              {/* Ambient Glow behind portrait */}
              <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow-portrait)] blur-xl pointer-events-none" aria-hidden="true" />

              {/* Central Circular Portrait - Clean, Stationary & Sharp (Not Altered) */}
              <div className="relative z-10 flex h-[68%] w-[68%] items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border-color)] bg-[var(--surface-soft)] shadow-xl">
                <img
                  src="/Assets/homeKimImage.jpg"
                  alt="Kim Ruds C. Guston portrait"
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = '/Assets/1by1.jpg'; }}
                  className="profile-float h-full w-full object-cover object-center scale-[1.05]"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="poster-wall-title text-[clamp(1.75rem,8.2vw,8.5rem)] font-black tracking-[-0.04em] uppercase text-[var(--text-main)] select-none leading-[0.9] text-center w-full break-words"
          >
            CREATE WITHOUT LIMITS
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="relative z-10 flex flex-col items-center gap-2.5 mt-8 select-none"
        >
          <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[var(--text-muted)]">
            Scroll to explore
          </span>
          <div className="h-9 w-px bg-gradient-to-b from-[var(--text-muted)] via-[var(--text-muted)]/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ── RECENT PROJECTS SECTION ── */}
      <section
        id="projects"
        className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-14"
          >
            <h2 className="mt-3 font-['Sora',_sans-serif] text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight text-[var(--text-main)]">
              Recent Projects
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-[var(--text-muted)]">
              A collection of my recent web and mobile application development projects.
            </p>
          </motion.div>

          {/* 3 Cards with 3D tilt & interaction */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>

          {/* View All Projects button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-[var(--text-muted)] backdrop-blur-xl shadow-md transition-all duration-300 hover:border-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-hover)] hover:-translate-y-0.5"
              style={{ boxShadow: 'var(--shadow-neu-pill)' }}
            >
              <span>View all Projects</span>
              <i className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── CREDENTIALS SECTION ── */}
      <CredentialsCarousel />

      {/* ── CONTACT / LET'S CONNECT SECTION ── */}
      <section
        id="connect"
        className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 min-h-[85vh] flex flex-col justify-center relative"
      >
        <div id="contact" className="absolute top-0 pointer-events-none" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Get in Touch
            </span>

            <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(1.85rem,5vw,3.6rem)] font-bold tracking-tight text-[var(--text-main)] break-words">
              Let's Connect
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
              I am always open to collaborating on new projects, sharing technical insights, or discussing modern cybersecurity and developer-centric oeprations. Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="/Assets/2026_GUSTON_CV.pdf"
                download="2026_GUSTON_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-xl border px-6 sm:px-7 py-3.5 font-['Sora',_sans-serif] text-xs sm:text-sm font-bold tracking-tight btn-discovery-cta transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
              >
                <i className="fa-solid fa-file-arrow-down text-xs transition-transform duration-200 group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </a>

              <button
                type="button"
                onClick={() => navigate('/about')}
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-6 sm:px-7 py-3.5 font-['Sora',_sans-serif] text-xs sm:text-sm font-bold tracking-tight text-[var(--text-main)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] cursor-pointer"
                style={{ boxShadow: 'var(--shadow-neu-pill)' }}
              >
                <i className="fa-solid fa-user-astronaut text-xs text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors" />
                <span>Meet the Developer</span>
                <i className="fa-solid fa-arrow-right text-[11px] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Side: Four full-width Contact Rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: '-50px' }}
            className="w-full flex flex-col border-t border-[var(--border-color)]"
          >
            {contactLinks.map((item, idx) => (
              <ContactRow
                key={item.label}
                item={item}
                isLast={idx === contactLinks.length - 1}
              />
            ))}
          </motion.div>

        </div>
      </section>

      {/* Project Details Modal Dialog */}
      <ProjectDetailsDialog
        project={selectedProject}
        onClose={handleCloseDetails}
        triggerRef={activeTriggerRef}
      />
    </>
  );
};

export default Home;
