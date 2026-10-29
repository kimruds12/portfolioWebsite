import { useRef, useState, useEffect, useLayoutEffect } from 'react';
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

const Skills = () => {
  const sectionRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeSkill, setActiveSkill] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!section || !pinWrapper || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const totalCards = cards.length;
      const slidingCards = totalCards - 1; // 4 sliding steps

      // Check if user arrived targeting #credentials directly
      const isDirectCredentials =
        typeof window !== 'undefined' &&
        (window.location.hash === '#credentials' ||
          window.location.href.includes('#credentials'));

      // Initial placement:
      // Card 0 starts in place (yPercent: 0, opacity: 1)
      // Cards 1..4 start directly below the container at yPercent: 100, ready to slide up
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { yPercent: 0, opacity: 1, scale: 1 });
        } else {
          gsap.set(card, { yPercent: 100, opacity: 1, scale: 1 });
        }
      });

      // Pinned timeline with smooth magnetic snapping to each card step
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${slidingCards * 85}vh`,
          pin: pinWrapper,
          scrub: 0.8,
          snap: {
            snapTo: 1 / slidingCards,
            duration: { min: 0.25, max: 0.55 },
            delay: 0.08,
            ease: 'power2.out',
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const currentIndex = Math.min(
              slidingCards,
              Math.round(self.progress * slidingCards)
            );
            setActiveSkill(currentIndex);
          },
        },
      });

      // Slide cards in one after another
      cards.forEach((card, i) => {
        if (i === 0) return;

        const startTime = (i - 1) * 1;

        // Slide the new card cleanly up over the previous card
        tl.to(
          card,
          {
            yPercent: 0,
            duration: 1,
            ease: 'power1.inOut',
          },
          startTime
        );

        // Once the new card reaches position, fade the previous card behind it
        // to prevent any accidental ghosting or overlapping
        tl.to(
          cards[i - 1],
          {
            scale: 0.96,
            opacity: 0,
            duration: 0.6,
            ease: 'power1.inOut',
          },
          startTime + 0.4
        );
      });

      // Scenario 2: Direct navigation to Experience, Education & Credentials
      // Initialize timeline at 100% (Cloud & Infrastructure fully active)
      if (isDirectCredentials) {
        tl.progress(1);
        setActiveSkill(slidingCards);
      }
    }, section);

    // Refresh after DOM layout settles to guarantee accurate pin coordinates
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  // Handle in-page hashchange navigation to #credentials
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#credentials') {
        const triggers = ScrollTrigger.getAll();
        const skillTrigger = triggers.find(
          (t) => t.vars?.trigger === sectionRef.current
        );
        if (skillTrigger) {
          const targetScroll = skillTrigger.end + 20;
          if (window.lenis) {
            window.lenis.scrollTo(targetScroll, { duration: 0.8 });
          } else {
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleJumpToSkill = (idx) => {
    const triggers = ScrollTrigger.getAll();
    const skillTrigger = triggers.find(
      (t) => t.vars?.trigger === sectionRef.current
    );
    if (!skillTrigger) return;

    const totalCards = skillCategories.length - 1;
    const targetProgress = idx / totalCards;
    const scrollStart = skillTrigger.start;
    const scrollEnd = skillTrigger.end;
    const targetScroll = scrollStart + (scrollEnd - scrollStart) * targetProgress;

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, { duration: 0.8 });
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
        className="px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

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

              <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--text-main)] break-words">
                Skills & Technologies
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
                      ? 'w-8 bg-sky-400 dark:bg-sky-400'
                      : 'w-2 bg-[var(--border-color)] hover:bg-[var(--text-muted)]'
                      }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* ── Right Side: Skills Clean Slide-Over Container (Solid Opaque Cards) ── */}
            <div className="relative w-full max-w-xl mx-auto lg:mx-0">
              {/* Guide Bar Aligned with Container */}
              <div className="flex items-center justify-between mb-3.5 px-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Stack {skillCategories[activeSkill]?.step} of 05</span>
                </span>

                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[var(--surface-soft)] border border-[var(--border-color)] text-[var(--text-muted)] shadow-xs transition-colors duration-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
                    {activeSkill < skillCategories.length - 1 ? 'Scroll to Reveal' : 'Scroll to Continue'}
                  </span>
                  <motion.i
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    className="fa-solid fa-arrow-down text-[10px] text-sky-400"
                  />
                </div>
              </div>

              {/* Card Container: fixed height, overflow hidden so cards slide cleanly inside viewport */}
              <div className="relative h-[360px] sm:h-[400px] overflow-hidden rounded-3xl">
                {skillCategories.map((category, index) => (
                  <div
                    key={category.title}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="absolute inset-0 will-change-transform"
                    style={{
                      zIndex: (index + 1) * 10,
                    }}
                  >
                    {/* 100% Solid Opaque Background Card — ZERO bleed-through */}
                    <div
                      className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full select-none"
                      style={{
                        backgroundColor: 'var(--surface-card-solid, #0d121c)',
                        border: '1px solid var(--border-color)',
                        boxShadow:
                          index > 0
                            ? '0 -16px 36px -4px rgba(0, 0, 0, 0.65), 0 24px 35px -5px rgba(0, 0, 0, 0.5), var(--shadow-neu-card)'
                            : 'var(--shadow-neu-card)',
                      }}
                    >
                      {/* Top: Step number & Header */}
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <span className="font-mono text-xs sm:text-sm font-extrabold tracking-wider text-sky-400">
                            {category.step}
                          </span>
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--text-main)] border border-[var(--border-color)] shadow-2xs">
                            <i className={`${category.icon} text-sm sm:text-base`} />
                          </div>
                        </div>

                        <h3 className="font-['Sora',_sans-serif] text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                          {category.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)] font-mono">
                          {category.description}
                        </p>

                        {/* Skills Pills */}
                        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                          {category.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="glass-neu-pill flex items-center gap-2 rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold text-[var(--text-main)] transition-all hover:scale-102"
                            >
                              <span
                                className="flex h-4 w-4 items-center justify-center shrink-0"
                                style={{ color: skill.color }}
                              >
                                <i className={`${skill.icon} text-xs sm:text-sm`} />
                              </span>
                              <span>{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Segmented Progress Bar (Matching Images 2 & 3) */}
                      <div className="mt-6 pt-4 border-t border-[var(--border-color)]/60 flex items-center gap-2">
                        {skillCategories.map((_, barIdx) => (
                          <div
                            key={barIdx}
                            className={`h-1.5 sm:h-2 flex-1 rounded-full transition-colors duration-300 ${
                              barIdx <= index
                                ? 'bg-sky-400 dark:bg-sky-400 shadow-xs'
                                : 'bg-[var(--surface-soft)] border border-[var(--border-color)]/60'
                            }`}
                          />
                        ))}
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
