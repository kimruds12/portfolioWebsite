import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import CredentialsCarousel from './CredentialsCarousel';
import { projects, getTagConfig } from './ProjectsPage';

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

// ── Mini project card for the Recent Projects section ──
const RecentProjectCard = ({ project, index }) => {
  const config = project.tags.map((tag) => ({ ...getTagConfig(tag), tag }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-40px' }}
      className="glass-neu-card group flex flex-col justify-between overflow-hidden rounded-3xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-soft)] border-b border-[var(--border-color)]">
        {/* Inner padding so image has space before border */}
        <div className="absolute inset-[6px] overflow-hidden rounded-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[var(--surface-soft)] rounded-2xl">
              <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
                <i className="fa-solid fa-laptop-code text-4xl opacity-40" />
                <span className="text-xs font-mono opacity-60">Local System</span>
              </div>
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
          <span className="rounded-full border border-[var(--border-color)] bg-[var(--surface)]/90 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-main)] backdrop-blur-md">
            {project.isLocal ? 'LOCAL' : project.category.toUpperCase()}
          </span>
          {project.status && (
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-500 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-['Sora',_sans-serif] text-base font-bold text-[var(--text-main)] tracking-tight">
            {project.title}
          </h3>
          {project.year && (
            <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">{project.year}</span>
          )}
        </div>
        <p className="mt-1 text-xs font-medium text-[var(--text-muted)] line-clamp-1">{project.meta}</p>
        <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {config.map(({ icon, color, tag }) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-2.5 py-1 text-[11px] font-mono text-[var(--text-main)] shadow-2xs"
            >
              <i className={`${icon} text-xs shrink-0`} style={{ color }} />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between border-t border-[var(--border-color)] px-5 py-3.5 bg-[var(--surface-soft)]/50">
        <div className="flex items-center gap-2">
          {project.isLocal ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="glass-neu-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-[var(--text-main)] hover:opacity-90"
            >
              <i className="fa-brands fa-github text-[10px]" />
              <span>GitHub</span>
            </a>
          ) : project.category === 'game' && project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer"
              className="glass-neu-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-[var(--text-main)] hover:opacity-90"
            >
              <span>Play</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          ) : project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer"
              className="glass-neu-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-[var(--text-main)] hover:opacity-90"
            >
              <span>Live</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
            </a>
          ) : null}

          {project.href && project.category !== 'game' && !project.isLocal && (
            <a href={project.href} target="_blank" rel="noreferrer"
              className="glass-neu-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)]"
            >
              <i className="fa-brands fa-github text-xs" />
              <span>Source</span>
            </a>
          )}
        </div>

        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <span>Details</span>
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </a>
        ) : (
          <span className="text-xs font-semibold text-[var(--text-muted)]">Archive</span>
        )}
      </div>
    </motion.article>
  );
};

const Home = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const wallScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.88]);
  const wallOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.12]);
  const wallY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

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
          <div className="ambient-spotlight absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        </div>

        <div className="w-full h-2" aria-hidden="true" />

        {/* Main Hero Wall Content */}
        <motion.div
          style={shouldReduceMotion ? {} : { scale: wallScale, opacity: wallOpacity, y: wallY }}
          className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto my-auto text-center px-2"
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
            <div className="relative flex h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[20rem] lg:h-[22rem] lg:w-[22rem] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[var(--antenna-line)]" aria-hidden="true" />
              <div className="hero-orbit absolute inset-[1.25rem] sm:inset-[1.6rem] rounded-full border border-dashed border-[var(--antenna-dashed)]" aria-hidden="true" />
              <svg className="pointer-events-none absolute inset-[-0.5rem] sm:inset-[-0.75rem] h-[calc(100%+1rem)] w-[calc(100%+1rem)] sm:h-[calc(100%+1.5rem)] sm:w-[calc(100%+1.5rem)] -rotate-45" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--antenna-arc)" strokeWidth="1.2" strokeDasharray="45 160" />
              </svg>
              <span aria-hidden="true" className="hero-signal absolute right-[10%] top-[14%] h-2.5 w-2.5 rounded-full bg-[var(--antenna-node)] shadow-xs" />
              <span aria-hidden="true" className="hero-signal absolute bottom-[18%] left-[8%] h-2 w-2 rounded-full bg-[var(--antenna-node)] shadow-xs" />
              <span aria-hidden="true" className="hero-signal absolute bottom-[10%] right-[22%] h-2 w-2 rounded-full bg-[var(--antenna-node)] shadow-xs" />
              <span aria-hidden="true" className="hero-signal absolute top-[26%] left-[10%] h-1.5 w-1.5 rounded-full bg-[var(--antenna-node)] shadow-xs" />
              <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow-portrait)] blur-xl" aria-hidden="true" />
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
            className="poster-wall-title text-[clamp(2.75rem,8.2vw,8.5rem)] font-black tracking-[-0.04em] uppercase text-[var(--text-main)] select-none leading-[0.9] text-center w-full"
          >
            CREATE WITHOUT LIMITS
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={shouldReduceMotion ? {} : { opacity: scrollIndicatorOpacity }}
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Portfolio
            </span>
            <h2 className="mt-3 font-['Sora',_sans-serif] text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight text-[var(--text-main)]">
              Recent Projects
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-[var(--text-muted)]">
              A selection of my most recent work spanning web, mobile, and local systems.
            </p>
          </motion.div>

          {/* 3 Cards in horizontal row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((project, index) => (
              <RecentProjectCard key={project.title} project={project} index={index} />
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

            <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.4rem,5vw,3.6rem)] font-bold tracking-tight text-[var(--text-main)]">
              Let's Connect
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
              I am always open to collaborating on new web applications, engineering discussions, or discussing modern developer infrastructure. Feel free to reach out directly.
            </p>

            <a
              href="/Assets/2026_GUSTON_CV.pdf"
              download="2026_GUSTON_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-[var(--btn-strong-bg)] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--btn-strong-text)] shadow-sm hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
            >
              <i className="fa-solid fa-file-arrow-down text-xs" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Right Side: Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-3"
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[64px] items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] px-6 py-4 transition-all duration-200 hover:border-[var(--text-muted)] hover:bg-[var(--surface-hover)] shadow-2xs glass-neu-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-soft)] border border-[var(--border-color)]">
                    <i className={`${item.icon} text-base`} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-['Sora',_sans-serif] text-sm font-bold text-[var(--text-main)]">{item.label}</p>
                    <p className="text-xs text-[var(--text-muted)] font-mono sm:hidden">{item.value}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:block font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors">
                    {item.value}
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors" />
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Home;
