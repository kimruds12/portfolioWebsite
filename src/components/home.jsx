import { useEffect, useRef, useState } from 'react';
import Projects from './Projects';

const featureCards = [
  {
    icon: 'code',
    title: 'Software Development',
    description: 'Builds scalable web applications with clean architecture and thoughtful front-end structure.',
  },
  {
    icon: 'server',
    title: 'API Development',
    description: 'Designs reliable service layers, structured data flows, and maintainable integrations.',
  },
  {
    icon: 'pen',
    title: 'UI/UX Design',
    description: 'Transforms product requirements into polished, intuitive, and conversion-friendly interfaces.',
  },
  {
    icon: 'brain',
    title: 'AI & Machine Learning',
    description: 'Explores AI-enabled workflows that improve product capability and user experience.',
  },
  {
    icon: 'database',
    title: 'Database Management',
    description: 'Plans data models and storage strategies that stay organized, efficient, and resilient.',
  },
  {
    icon: 'layers',
    title: 'System Architecture',
    description: 'Balances maintainability, responsiveness, and growth with practical technical decisions.',
  },
];

const credentials = [
  {
    title: 'ITLympics 2025 - Web Design Champion',
    description: 'Awarded first place in web design for creating an innovative, highly responsive, and accessible interface under strict time constraints.',
    tags: ['Web Design', 'UI/UX', 'Competition'],
    href: '#',
    image: '/Assets/Project2.png',
    imageAlt: 'Certificate showcase visual',
  },
  {
    title: 'UMAK 14th IT Skills Olympics 2025',
    description: 'Demonstrated advanced technical proficiency and problem-solving skills against top peers in a rigorous competitive environment.',
    tags: ['Programming', 'Problem Solving', 'IT Skills'],
    href: '#',
  },
  {
    title: 'Network Addressing and Basic Troubleshooting',
    description: 'Certified expertise in configuring network addresses and resolving foundational connectivity issues efficiently.',
    tags: ['Networking', 'Troubleshooting', 'Cisco'],
    href: '#',
  },
  {
    title: 'Networking Basics',
    description: 'Comprehensive understanding of network topologies, protocols, and the fundamental architecture of modern communications.',
    tags: ['Fundamentals', 'Protocols', 'Architecture'],
    href: '#',
  },
  {
    title: 'Networking Devices and Initial Configuration',
    description: 'Proven ability to set up, configure, and manage core networking hardware, ensuring stable and secure operations.',
    tags: ['Hardware', 'Configuration', 'Routing'],
    href: '#',
  },
  {
    title: 'Network Support and Security',
    description: 'Specialized in maintaining network health and implementing robust security measures to protect against vulnerabilities.',
    tags: ['Security', 'Maintenance', 'Firewalls'],
    href: '#',
  },
];

const contactLinks = [
  {
    label: 'Facebook',
    value: 'Kim Ruds Guston',
    href: 'https://www.facebook.com/mikdurs.tugons/',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    label: 'Email',
    value: '@kimrudsguston@gmail.com',
    href: 'https://mail.google.com/mail/u/0/#inbox',
    icon: 'fa-solid fa-envelope',
  },
  {
    label: 'LinkedIn',
    value: 'Kim Ruds Guston',
    href: 'https://www.linkedin.com/in/kim-ruds-guston-4a1822374/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'GitHub',
    value: '@kimruds12',
    href: 'https://github.com/kimruds12',
    icon: 'fa-brands fa-github',
  },
];

function Icon({ name, className = '' }) {
  const sharedProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': true,
  };

  switch (name) {
    case 'code':
      return (
        <svg {...sharedProps}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case 'server':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01" />
          <path d="M7 17h.01" />
          <path d="M17 7h-4" />
          <path d="M17 17h-4" />
        </svg>
      );
    case 'pen':
      return (
        <svg {...sharedProps}>
          <path d="M12 20h9" />
          <path d="m16.5 3.5 4 4L8 20l-5 1 1-5Z" />
        </svg>
      );
    case 'brain':
      return (
        <svg {...sharedProps}>
          <path d="M9.5 6A3.5 3.5 0 0 1 16 7.5a2.5 2.5 0 0 1 2 3.8 3 3 0 0 1-1.5 5.6H15" />
          <path d="M9 18H7.5A3.5 3.5 0 0 1 5 11.5 3 3 0 0 1 7 6a3.5 3.5 0 0 1 2.5 0" />
          <path d="M12 7v10" />
          <path d="M9.5 10.5H12" />
          <path d="M12 14h3" />
        </svg>
      );
    case 'database':
      return (
        <svg {...sharedProps}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...sharedProps}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...sharedProps}>
          <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" />
          <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
          <path d="m19 13 .6 1.6L21 15l-1.4.4L19 17l-.6-1.6L17 15l1.4-.4L19 13Z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...sharedProps}>
          <path d="M12 3 5 6v5c0 5 3.4 8.7 7 10 3.6-1.3 7-5 7-10V6l-7-3Z" />
          <path d="m9.5 12 1.7 1.7L15 10" />
        </svg>
      );
    case 'terminal':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="m7 9 3 3-3 3" />
          <path d="M13 15h4" />
        </svg>
      );
    default:
      return null;
  }
}

const Home = () => {
  const credentialViewportRef = useRef(null);
  const credentialCardRefs = useRef([]);
  const [activeCredential, setActiveCredential] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach((el) => {
      if (!el.classList.contains('scroll-reveal-init')) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out', 'scroll-reveal-init');
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const viewport = credentialViewportRef.current;
    if (!viewport) {
      return undefined;
    }

    let frameId = null;

    const updateActiveCredential = () => {
      frameId = null;

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.top + viewportRect.height / 2;

      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      credentialCardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveCredential((current) => (current === nextIndex ? current : nextIndex));
    };

    const handleCredentialScroll = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateActiveCredential);
    };

    handleCredentialScroll();
    viewport.addEventListener('scroll', handleCredentialScroll, { passive: true });
    window.addEventListener('resize', handleCredentialScroll);

    return () => {
      viewport.removeEventListener('scroll', handleCredentialScroll);
      window.removeEventListener('resize', handleCredentialScroll);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      <section id="home" className="scroll-mt-32 px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-white/[0.03] px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
              Hello, I&apos;m
            </span>

            <h1 className="mt-8 font-['Sora',_sans-serif] text-[clamp(3.5rem,8vw,4.875rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              <span className="block text-[#F5F5F5]">Kim Ruds C.</span>
              <span className="hero-name-glow block bg-[linear-gradient(135deg,#ffffff_10%,#7dd3fc_45%,#38bdf8_85%)] bg-clip-text text-transparent">
                Guston
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-['Space_Grotesk',_sans-serif] text-[clamp(1.05rem,2.4vw,1.5rem)] font-medium leading-relaxed text-white/90">
              UI/UX Designer | Software Developer | Networking
            </p>

            <p className="mt-6 max-w-2xl text-[clamp(1rem,1.8vw,1.1rem)] leading-8 text-[#B0B0B0]">
              I build secure, polished digital experiences that merge thoughtful product design with scalable engineering.
              My work focuses on clean interfaces, reliable systems, and modern web applications that feel premium on every screen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-[linear-gradient(135deg,#38bdf8,#0ea5e9)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_28px_rgba(56,189,248,0.34)] transition duration-300 hover:-translate-y-1 hover:px-7 hover:shadow-[0_0_42px_rgba(56,189,248,0.46)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B14]"
              >
                Let's Connect
                <i className="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B14]"
              >
                Explore Projects
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(5,11,20,0.94))] shadow-[0_0_50px_rgba(56,189,248,0.08)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-cyan-300/12 bg-white/[0.03] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF6258]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBE2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#2ED573]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/60">root@portfolio:~/mission</span>
              </div>
              <div className="space-y-6 px-5 py-6 font-mono text-sm leading-8 text-[#D8D8D8]">
                <div>
                  <p className="flex flex-wrap gap-2 text-cyan-200">
                    <span className="text-cyan-300">-&gt; ~</span>
                    <span>./list_objectives.sh</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-[#B8C5D8]">
                    {[
                      'AI-assisted workflows',
                      'Futuristic UI systems',
                      'Secure product mindset',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex h-[20rem] w-[20rem] items-center justify-center sm:h-[14rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]">
              <div className="hero-orbit absolute inset-0 rounded-full border border-cyan-300/20" />
              <div className="hero-orbit-reverse absolute inset-[1.25rem] rounded-full border border-dashed border-cyan-300/20" />
              <div className="absolute inset-[2.5rem] rounded-full border border-cyan-300/15 shadow-[0_0_45px_rgba(56,189,248,0.18)]" />
              <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_65%)] blur-2xl" />
              <span className="hero-signal absolute right-[8%] top-[16%] h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.95)]" />

              <div className="relative z-10 flex h-[70%] w-[70%] items-center justify-center overflow-hidden rounded-full border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(7,20,39,0.95),rgba(5,11,20,0.98))] shadow-[0_0_60px_rgba(56,189,248,0.16)]">
                <img
                  src="/Assets/homeKimImage.jpg"
                  alt="Kim Guston profile"
                  className="profile-float h-full w-full object-cover object-center scale-[1.06]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="skills" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Skills</span>
            <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.3rem,5vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Building thoughtful, polished, and scalable digital systems.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#B0B0B0]">
              The homepage now carries the about content directly, giving the portfolio a stronger landing experience while keeping the visual language
              clean, futuristic, and consistently premium.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,20,39,0.92))] p-8 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between border-b border-cyan-300/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Integrated About Section</h3>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">
                  Active
                </span>
              </div>

              <p className="text-base leading-8 text-[#C8C8C8]">
                Focused on modern software development with strong attention to flow, reliability, and user experience. I approach projects with a balance
                of technical structure and visual clarity so the final product feels intentional from architecture to interface.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-[#B0B0B0]">
                {[
                  'Breaks complex problems into manageable, implementation-ready systems.',
                  'Prioritizes clear data flow, maintainability, and long-term product stability.',
                  'Designs interfaces that feel modern, intuitive, and aligned with business goals.',
                  'Applies development with a practical, user-first, and performance-aware mindset.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {featureCards.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-[1.6rem] border border-cyan-300/10 bg-white/[0.03] p-6 backdrop-blur-[8px] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.05] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_36px_rgba(56,189,248,0.15)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/10 text-cyan-200 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/15 group-hover:text-white">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#B0B0B0]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="credentials" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 xl:grid-cols-[0.7fr_1.1fr_0.34fr] xl:items-center">
            <div className="space-y-6">
              <div className="font-mono text-sm tracking-wider text-cyan-300/60">
                [ /root/certificates ] <span className="text-cyan-300">#</span>
              </div>

              <h2 className="font-['Sora',_sans-serif] text-[clamp(2.3rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                Featured Certificates
              </h2>

              <div className="h-[2px] w-16 bg-white/20" />

              <p className="max-w-md text-base leading-8 text-[#B0B0B0]">
                Scroll vertically through the certificate list. The centered card stays sharp while the others soften for a cleaner and more focused credentials section.
              </p>

              <div className="flex items-center gap-3">
                {credentials.map((item, index) => (
                  <span
                    key={item.title}
                    className={`h-2 rounded-full transition-all duration-300 ${activeCredential === index ? 'w-8 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]' : 'w-2 bg-white/20'
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[40rem]">
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/12 
                              bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(5,11,20,0.96))] 
                              p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl
                              min-h-[750px]">
                <div className="pointer-events-none absolute inset-x-3 top-3 z-10 h-12 rounded-t-[1.7rem] bg-[linear-gradient(180deg,rgba(5,11,20,0.94),rgba(5,11,20,0.4),transparent)]" />
                <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 h-14 rounded-b-[1.7rem] bg-[linear-gradient(0deg,rgba(5,11,20,0.94),rgba(5,11,20,0.4),transparent)]" />

                <div
                  ref={credentialViewportRef}
                  className="relative h-[34rem] overflow-y-auto rounded-[1.7rem] border border-cyan-300/10 bg-black/10 px-3 [scroll-snap-type:y_mandatory] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-[45rem] md:px-4"
                >
                  <div className="space-y-5 py-24 md:py-32">
                    {credentials.map((item, index) => {
                      const distance = Math.abs(activeCredential - index);
                      const stateClass =
                        distance === 0
                          ? 'scale-100 opacity-100 blur-0 border-cyan-300/28 shadow-[0_0_42px_rgba(56,189,248,0.14)]'
                          : distance === 1
                            ? 'scale-[0.972] opacity-65 blur-[1px] border-white/10'
                            : 'scale-[0.94] opacity-35 blur-[2.5px] border-white/8';

                      return (
                        <article
                          key={item.title}
                          ref={(node) => {
                            credentialCardRefs.current[index] = node;
                          }}
                          className={`snap-center rounded-[1.7rem] border bg-[linear-gradient(180deg,rgba(10,18,35,0.96),rgba(5,11,20,0.98))] p-6 transition-all duration-300 ease-out ${stateClass}`}
                        >
                          {item.image && (
                            <div className="mb-6 overflow-hidden rounded-[1.35rem] bg-white/5">
                              <img
                                src={item.image}
                                alt={item.imageAlt}
                                className="h-80 w-full object-cover object-top sm:h-[23rem]"
                              />
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/12 bg-cyan-300/10 text-cyan-200">
                                <i className="fa-solid fa-award text-xl" />
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/75">Certificate</p>
                                <h3 className="mt-2 text-lg font-semibold leading-tight text-white">{item.title}</h3>
                              </div>
                            </div>
                            <span className="rounded-full border border-cyan-300/16 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                              0{index + 1}
                            </span>
                          </div>

                          <p className="mt-5 text-sm leading-7 text-[#AEB6C8]">{item.description}</p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-mono tracking-wide text-white/60">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
                            View Certificate
                            <i className="fa-solid fa-arrow-right text-xs" />
                          </a>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <aside className="flex items-center justify-center xl:justify-end xl:pr-1">
              <p className="inline-flex items-center justify-center rounded-[999px] border border-cyan-300/12 bg-white/[0.03] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/85 shadow-[0_0_24px_rgba(56,189,248,0.08)] backdrop-blur-xl xl:min-h-[21rem] xl:px-6 xl:py-7 xl:[text-orientation:mixed] xl:[writing-mode:vertical-rl] xl:rotate-180 xl:tracking-[0.34em]">
                &lt;- Scroll the certificates vertically
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          {/* Left Side: "Let's Connect" layout matching reference */}
          <div className="max-w-xl">
            <h2 className="font-['Sora',_sans-serif] text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white">
              Let's Connect
            </h2>
            <p className="mt-6 text-base leading-8 text-[#B0B0B0]">
              I am always open to collaborating on new projects, sharing technical insights, or discussing modern cybersecurity and developer-centric operations. Feel free to reach out.
            </p>
            
            <a
              href="/Assets/Guston_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-[1rem] border border-cyan-300/20 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <i className="fa-solid fa-file-lines text-cyan-300" />
              Get Resume
            </a>
          </div>

          {/* Right Side: 1-column list with Cyan rounded hover style */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[1.4rem] border border-cyan-300/10 bg-black/20 px-6 py-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.03] hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/10 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    <i className={`${item.icon} text-lg`} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{item.label}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-cyan-300/70 group-hover:text-cyan-300"></p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="hidden font-mono text-sm text-[#B0B0B0] sm:block group-hover:text-white transition-colors">{item.value}</span>
                  <i className="fa-solid fa-arrow-right text-sm text-white/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
