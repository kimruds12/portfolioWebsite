import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
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
  const skillsViewportRef = useRef(null);
  const skillCardRefs = useRef([]);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const viewport = skillsViewportRef.current;
    if (!viewport) return;

    let frameId = null;

    const updateActiveSkill = () => {
      frameId = null;
      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.top + viewportRect.height / 2;

      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      skillCardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveSkill((current) => (current === nextIndex ? current : nextIndex));
    };

    const handleSkillScroll = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSkill);
    };

    handleSkillScroll();
    viewport.addEventListener('scroll', handleSkillScroll, { passive: true });
    window.addEventListener('resize', handleSkillScroll);

    return () => {
      viewport.removeEventListener('scroll', handleSkillScroll);
      window.removeEventListener('resize', handleSkillScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      id="skills"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 min-h-[90vh] flex flex-col justify-center"
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
              About & Skills
            </span>

            <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--text-main)] break-words">
              Engineering Clean <br className="hidden sm:inline" />Digital Systems
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] max-w-xl">
              I am a Front End Developer and Computer Engineering student at Pamantasan ng Lungsod ng Valenzuela. I specialize in building responsive, accessible web interfaces, component architectures, and reliable network setups.
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] max-w-xl">
              By blending modern frontend tools with structured problem-solving and AI-assisted workflows, I create software experiences that feel seamless, fast, and engineered with precision.
            </p>

            {/* Quick Indicators for Scroll list */}
            <div className="mt-8 flex justify-center gap-2 lg:justify-start">
              {skillCategories.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    skillCardRefs.current[idx]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                  }}
                  aria-label={`Jump to ${skillCategories[idx].title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSkill
                      ? 'w-8 bg-[var(--text-main)]'
                      : 'w-2 bg-[var(--border-color)] hover:bg-[var(--text-muted)]'
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right Side: Skills Showcase Container ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <div className="glass-neu-card relative mx-auto w-full rounded-3xl p-2.5 sm:p-5">
              <div
                ref={skillsViewportRef}
                className="relative flex h-[440px] sm:h-[520px] flex-col gap-6 overflow-y-auto px-2 py-[180px] sm:py-[220px] scroll-smooth sm:px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-y snap-mandatory"
              >
                {skillCategories.map((category, index) => {
                  const isActive = index === activeSkill;
                  return (
                    <div
                      key={category.title}
                      ref={(el) => (skillCardRefs.current[index] = el)}
                      className={`snap-center transition-all duration-500 ease-out ${isActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-35 scale-[0.93] blur-[1px]'
                        }`}
                    >
                      <div className="glass-neu-card rounded-2xl p-4 sm:p-7">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--text-main)] border border-[var(--border-color)] shadow-xs shrink-0">
                            <i className={`${category.icon} text-lg sm:text-xl`} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-['Sora',_sans-serif] text-base sm:text-lg font-bold text-[var(--text-main)] tracking-tight truncate">
                              {category.title}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-mono mt-0.5 truncate">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                          {category.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="glass-neu-pill flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-semibold text-[var(--text-main)] transition-all hover:scale-102"
                            >
                              <span
                                className="flex h-5 w-5 items-center justify-center shrink-0"
                                style={{ color: skill.color }}
                              >
                                <i className={`${skill.icon} text-sm`} />
                              </span>
                              <span>{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
