import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    step: '01',
    title: 'Core Languages',
    description: 'Foundational Programming & Systems',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178C6' },
      { name: 'Java', icon: 'fa-brands fa-java', color: '#EA2D2E' },
      { name: 'C#', icon: 'fa-solid fa-c', color: '#9B4993' },
      { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
      { name: 'PHP', icon: 'fa-brands fa-php', color: '#777BB4' },
    ],
  },
  {
    step: '02',
    title: 'Frontend & Libraries',
    description: 'Modern Frameworks & Ecosystems',
    icon: 'fa-solid fa-layer-group',
    skills: [
      { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'fa-solid fa-n', color: 'var(--text-main)' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38BDF8' },
      { name: 'Framer Motion', icon: 'fa-solid fa-wand-magic-sparkles', color: '#FF0055' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#5FA04E' },
      { name: 'FastAPI', icon: 'fa-solid fa-bolt', color: '#059669' },
      { name: 'Laravel', icon: 'fa-brands fa-laravel', color: '#FF2D20' },
    ],
  },
  {
    step: '03',
    title: 'Databases & Storage',
    description: 'Data Persistence & Relational Schemas',
    icon: 'fa-solid fa-database',
    skills: [
      { name: 'PostgreSQL', icon: 'fa-solid fa-database', color: '#336791' },
      { name: 'MySQL', icon: 'fa-solid fa-server', color: '#00758F' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#47A248' },
      { name: 'Supabase', icon: 'fa-solid fa-bolt', color: '#3ECF8E' },
      { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFA000' },
    ],
  },
  {
    step: '04',
    title: 'Workspace & Utilities',
    description: 'Developer Tooling & Workflow Optimization',
    icon: 'fa-solid fa-wrench',
    skills: [
      { name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', color: '#F05032' },
      { name: 'VS Code', icon: 'fa-solid fa-code', color: '#007ACC' },
      { name: 'Figma', icon: 'fa-brands fa-figma', color: '#F24E1E' },
      { name: 'Ubuntu / Linux', icon: 'fa-brands fa-ubuntu', color: '#E95420' },
      { name: 'Vite', icon: 'fa-solid fa-bolt', color: '#646CFF' },
      { name: 'NPM / PNPM', icon: 'fa-brands fa-npm', color: '#CB3837' },
      { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
    ],
  },
  {
    step: '05',
    title: 'Cloud & Infrastructure',
    description: 'Deployment, Networking & Hosting',
    icon: 'fa-solid fa-cloud',
    skills: [
      { name: 'Vercel', icon: 'fa-solid fa-caret-up', color: 'var(--text-main)' },
      { name: 'Cloudflare', icon: 'fa-brands fa-cloudflare', color: '#F38020' },
      { name: 'Render', icon: 'fa-solid fa-server', color: '#46E3B7' },
      { name: 'Cisco Packet Tracer', icon: 'fa-solid fa-network-wired', color: '#1BA0D7' },
      { name: 'OpenCV', icon: 'fa-solid fa-camera', color: '#5C3EE8' },
    ],
  },
];

const HOLD_DURATION = 2.2;
const SLIDE_DURATION = 1.5;
// Extended timeline structure with ample hold duration so Stacks 02 and 04 are clearly visible and stable:
// Card 0: hold 0..2.2           → snap at 0
// Card 1: slide 2.2..3.7, hold 3.7..5.9  → snap at 4.8 / 17.0 = 0.282
// Card 2: slide 5.9..7.4, hold 7.4..9.6  → snap at 8.5 / 17.0 = 0.500
// Card 3: slide 9.6..11.1, hold 11.1..13.3 → snap at 12.2 / 17.0 = 0.718
// Card 4: slide 13.3..14.8, hold 14.8..17.0 → snap at 1.0
const TOTAL_DURATION = 17.0;
const snapPoints = [0, 4.8 / TOTAL_DURATION, 8.5 / TOTAL_DURATION, 12.2 / TOTAL_DURATION, 1];

const checkIsDirectExperience = (search = '', hash = '') => {
  if (typeof window === 'undefined') return false;
  const currentHash = hash || window.location.hash || '';
  const currentSearch = search || window.location.search || '';
  return (
    currentHash === '#credentials' ||
    currentHash === '#experience' ||
    currentHash === '#education' ||
    window.location.href.includes('#credentials') ||
    window.location.href.includes('#experience') ||
    window.location.href.includes('#education') ||
    currentSearch.includes('record=') ||
    currentSearch.includes('tab=')
  );
};

const Skills = () => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const tlRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(() =>
    checkIsDirectExperience(location.search, location.hash) ? skillCategories.length - 1 : 0
  );
  const [shuffledCategories, setShuffledCategories] = useState(skillCategories);

  // Horizontal glide / shuffle of skill badges every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setShuffledCategories((prev) =>
        prev.map((cat) => {
          if (!cat.skills || cat.skills.length <= 1) return cat;
          return { ...cat, skills: [...cat.skills.slice(1), cat.skills[0]] };
        })
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!section || !pinWrapper || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const totalCards = cards.length;
      const slidingCards = totalCards - 1; // 4 sliding steps

      const isDirectCredentials = checkIsDirectExperience(location.search, location.hash);

      // Always initialize cards in clean, consistent starting geometry:
      // Card 0 at yPercent 0 (visible base), Cards 1..N at yPercent 100 (below view)
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { yPercent: 0, opacity: 1, scale: 1 });
        } else {
          // opacity: 0 ensures waiting cards below do not cast any bottom shadow bleed
          gsap.set(card, { yPercent: 100, opacity: 0, scale: 1 });
        }
      });

      // Pinned timeline with extended scroll distance, hold intervals, and smooth snapping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${slidingCards * 220}vh`,
          pin: pinWrapper,
          scrub: 0.8,
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.25, max: 0.55 },
            delay: 0.05,
            ease: 'power2.out',
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            // Midpoints between snap points [0, 0.282, 0.500, 0.718, 1.0]:
            // 0.141, 0.391, 0.609, 0.859
            let current = 0;
            if (p >= 0.859) current = 4;
            else if (p >= 0.609) current = 3;
            else if (p >= 0.391) current = 2;
            else if (p >= 0.141) current = 1;
            setActiveSkill(current);
          },
        },
      });

      tlRef.current = tl;

      // Construct timeline using explicit fromTo: guarantees flawless bi-directional scrubbing
      // When scrolling forward, cards slide up from yPercent: 100 -> 0 and previous fades
      // When scrolling backward (e.g. from Education up into Skills), cards slide cleanly back down
      cards.forEach((card, i) => {
        if (i === 0) return;

        // Start time incorporates previous card's hold and transition
        const startTime = HOLD_DURATION + (i - 1) * (SLIDE_DURATION + HOLD_DURATION);

        // Slide the new card smoothly up, fading in cleanly so no shadow bleeds from below
        tl.fromTo(
          card,
          {
            yPercent: 100,
            opacity: 0,
            scale: 1,
          },
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: SLIDE_DURATION,
            ease: 'power2.out',
          },
          startTime
        );

        // Fade and scale the previous card behind it
        tl.fromTo(
          cards[i - 1],
          {
            scale: 1,
            opacity: 1,
          },
          {
            scale: 0.96,
            opacity: 0,
            duration: SLIDE_DURATION * 0.65,
            ease: 'power2.inOut',
          },
          startTime + SLIDE_DURATION * 0.35
        );
      });

      // Scenario 2: Direct navigation to Experience, Education & Credentials from shortcut or deep link
      // Seek timeline cleanly to 100% so Cloud & Infrastructure is active, with full reverse scrub capability
      if (isDirectCredentials) {
        tl.progress(1);
        setActiveSkill(slidingCards);
      }
    }, section);

    // Refresh after DOM layout settles to guarantee accurate pin coordinates
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (checkIsDirectExperience(location.search, location.hash)) {
        const triggers = ScrollTrigger.getAll();
        const skillTrigger = triggers.find(
          (t) => t.vars?.trigger === sectionRef.current
        );
        if (skillTrigger && skillTrigger.end > 0) {
          tlRef.current?.progress(1);
          setActiveSkill(skillCategories.length - 1);
          const targetScroll = skillTrigger.end + 20;
          if (window.lenis) {
            window.lenis.scrollTo(targetScroll, { immediate: true });
          } else {
            window.scrollTo(0, targetScroll);
          }
        }
      }
    }, 280);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [location.hash, location.search]);

  // Handle in-page hash navigation to #credentials, #experience, or #education
  useEffect(() => {
    const hash = location.hash;
    if (hash === '#credentials' || hash === '#experience' || hash === '#education') {
      const runScroll = () => {
        const triggers = ScrollTrigger.getAll();
        const skillTrigger = triggers.find(
          (t) => t.vars?.trigger === sectionRef.current
        );
        if (skillTrigger && skillTrigger.end > 0) {
          tlRef.current?.progress(1);
          setActiveSkill(skillCategories.length - 1);
          const targetScroll = skillTrigger.end + 20;
          if (window.lenis) {
            window.lenis.scrollTo(targetScroll, { duration: 0.8 });
          } else {
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
          }
        }
      };

      const timer = setTimeout(runScroll, 80);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const handleJumpToSkill = (idx) => {
    setActiveSkill(idx);
    const triggers = ScrollTrigger.getAll();
    const skillTrigger = triggers.find(
      (t) => t.vars?.trigger === sectionRef.current
    );
    if (!skillTrigger) return;

    const targetProgress = snapPoints[idx] ?? idx / (skillCategories.length - 1);
    const scrollStart = skillTrigger.start;
    const scrollEnd = skillTrigger.end;
    const targetScroll = scrollStart + (scrollEnd - scrollStart) * targetProgress;

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, { duration: 0.9 });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-mt-28 min-h-screen relative"
    >
      <div
        ref={pinWrapperRef}
        className="px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* ── Left Side: About Context & Background ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                TECH STACK
              </span>

              <h2 className="glint-headline mt-4 font-['Sora',_sans-serif] text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight select-none break-words">
                <span className="glint-headline-base">SKILLS & TECHNOLOGIES</span>
                <span className="glint-headline-band" aria-hidden="true">SKILLS & TECHNOLOGIES</span>
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] max-w-xl">
                A collection of technologies and tools that support my development work. Scroll through the skill categories to explore my technical proficiencies and experience.
              </p>

              {/* Quick Indicators for Scroll list */}
              <div className="mt-8 flex justify-center gap-2 lg:justify-start">
                {skillCategories.map((category, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleJumpToSkill(idx)}
                    aria-label={`Jump to ${category.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSkill
                      ? 'w-8 skill-theme-accent-bg shadow-sm'
                      : 'w-2 bg-[var(--border-color)] hover:bg-[var(--text-muted)]'
                      }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* ── Right Side: Skills Clean Slide-Over Container (Solid Opaque Cards) ── */}
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              {/* Guide Bar Aligned with Container */}
              <div className="flex items-center justify-between mb-3.5 px-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full skill-theme-accent-bg" />
                  <span>Stack {skillCategories[activeSkill]?.step} of 05</span>
                </span>

                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[var(--surface-soft)] border border-[var(--border-color)] text-[var(--text-muted)] shadow-xs transition-colors duration-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full skill-theme-accent-bg opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 skill-theme-accent-bg"></span>
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
                    {activeSkill < skillCategories.length - 1 ? 'Scroll to Reveal' : 'Scroll to Continue'}
                  </span>
                  <motion.i
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    className="fa-solid fa-arrow-down text-[10px] skill-theme-accent-text"
                  />
                </div>
              </div>

              {/* Card Container: fixed height, overflow hidden so cards slide cleanly inside viewport */}
              <div className="relative h-[360px] sm:h-[385px] md:h-[400px] overflow-hidden rounded-3xl">
                {skillCategories.map((category, index) => (
                  <div
                    key={category.title}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 will-change-transform"
                    style={{
                      zIndex: (index + 1) * 10,
                      pointerEvents: index === activeSkill ? 'auto' : 'none',
                    }}
                  >
                    {/* 100% Solid Opaque Background Card — ZERO bleed-through */}
                    <div
                      className="rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between h-full select-none"
                      style={{
                        backgroundColor: 'var(--surface-card-solid, #0d121c)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-neu-card)',
                      }}
                    >
                      {/* Top: Step number & Header */}
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <span className="font-mono text-xs sm:text-sm font-extrabold tracking-wider skill-theme-accent-text">
                            {category.step}
                          </span>
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--text-main)] border border-[var(--border-color)] shadow-2xs">
                            <i className={`${category.icon} text-sm sm:text-base`} />
                          </div>
                        </div>

                        <h3 className="font-['Sora',_sans-serif] text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                          {category.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)] font-mono">
                          {category.description}
                        </p>

                        {/* Skills Pills with 5s horizontal glide layout animation */}
                        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                          {(shuffledCategories[index]?.skills || category.skills).map((skill) => (
                            <motion.div
                              layout
                              key={skill.name}
                              transition={{
                                layout: { type: 'spring', stiffness: 320, damping: 28 },
                              }}
                              className="glass-neu-pill flex items-center gap-2 rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold text-[var(--text-main)] transition-all hover:scale-102 cursor-default"
                            >
                              <span
                                className="flex h-4 w-4 items-center justify-center shrink-0"
                                style={{ color: skill.color }}
                              >
                                <i className={`${skill.icon} text-xs sm:text-sm`} />
                              </span>
                              <span>{skill.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
