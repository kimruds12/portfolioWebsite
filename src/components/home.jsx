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

const projectCards = [
  {
    title: "Drake's Sugary Treats",
    type: 'Full-Stack Platform',
    description:
      'A modern ordering and menu management experience built for a food business, focused on accessibility, speed, and a smoother customer journey.',
    image: '/Assets/Project1.jpg',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Survey Management Analytics',
    type: 'Data-Driven Web App',
    description:
      'An enterprise-style survey platform with response handling, administrative workflows, and reporting-ready data organization.',
    image: '/Assets/Project2.png',
    stack: ['React', 'ASP.NET', 'SQL Server'],
  },
  {
    title: 'Cyber-Futuristic Portfolio',
    type: 'Design + Development',
    description:
      'A premium portfolio interface that blends technical storytelling, responsive interaction design, and AI-forward branding.',
    image: '/Assets/Project4.png',
    stack: ['Vite', 'React', 'Tailwind'],
  },
];

const credentials = [
  {
    icon: 'sparkles',
    title: 'BS Information Technology',
    description: 'Recent graduate with a foundation in software engineering, systems thinking, and applied problem-solving.',
    actionLabel: 'Core Focus',
    actionHref: '#skills',
  },
  {
    icon: 'shield',
    title: 'Curriculum Vitae',
    description: 'Detailed background, project experience, and technical capability overview in downloadable format.',
    actionLabel: 'Open CV',
    actionHref: '/Assets/Guston_CV.pdf',
    external: true,
  },
  {
    icon: 'terminal',
    title: 'Continuous Growth',
    description: 'Actively refining skills across UI systems, secure development practices, and AI-enabled product work.',
    actionLabel: 'View Projects',
    actionHref: '#projects',
  },
];

const contactLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mikdurs.tugons',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kemiilng/',
    icon: 'fa-brands fa-instagram',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@KimRudsGuston',
    icon: 'fa-brands fa-youtube',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@just_ruds',
    icon: 'fa-brands fa-tiktok',
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
              AI-Enabled Developer | UI/UX Designer | Cybersecurity &amp; Networking
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
                Get In Touch
                <i className="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B14]"
              >
                View Projects
                <i className="fa-solid fa-grid-2 text-xs" />
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(5,11,20,0.94))] shadow-[0_0_50px_rgba(56,189,248,0.08)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-cyan-300/12 bg-white/[0.03] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF6258]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBE2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#2ED573]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/60">terminal - build</span>
              </div>
              <div className="space-y-4 px-5 py-6 font-mono text-sm leading-7">
                <div className="flex flex-wrap gap-2 text-cyan-200">
                  <span className="text-white/55">user@portfolio:~$</span>
                  <span>npm run build</span>
                </div>
                <div className="space-y-2 text-[#D8D8D8]">
                  <p>
                    <span className="mr-2 text-cyan-300">+</span>
                    Deploying AI-powered experiences...
                  </p>
                  <p>
                    <span className="mr-2 text-cyan-300">+</span>
                    Initializing secure systems...
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2 text-cyan-300">+</span>
                    Rendering modern UI/UX...
                    <span className="terminal-cursor ml-2 inline-block h-5 w-2 rounded-sm bg-cyan-300" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 shadow-[0_0_90px_rgba(56,189,248,0.12)]" />
            <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(7,20,39,0.88))] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center rounded-[1.25rem] border border-cyan-300/10 bg-black/20 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-cyan-100/55">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6258]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBE2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2ED573]" />
                </div>
              </div>

              <div className="relative mt-3 overflow-hidden rounded-[1.5rem] border border-cyan-300/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_35%),#071427] p-4">
                <div className="pointer-events-none absolute inset-4 rounded-[1.2rem] border border-cyan-300/15" />
                <div className="pointer-events-none absolute right-6 top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.95)]" />
                <div className="absolute inset-x-8 top-6 h-10 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_70%)] blur-2xl" />

                <img
                  src="/Assets/NewHomeProfile.png"
                  alt="Kim Guston profile"
                  className="profile-float relative z-10 mx-auto h-[25rem] w-full max-w-sm rounded-[1.2rem] object-cover object-center shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'AI-Enabled Builds', value: 'Modern workflows' },
                { label: 'Secure Systems', value: 'Reliable foundations' },
                { label: 'Premium UI', value: 'Cleaner interfaces' },
                { label: 'Responsive UX', value: 'Balanced on every screen' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-cyan-300/10 bg-white/[0.03] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_30px_rgba(56,189,248,0.12)]"
                >
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-[#B0B0B0]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="identity" className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-5 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-xl xl:grid-cols-[auto_1fr_auto] xl:items-center md:p-6">
            <div className="flex flex-wrap items-center gap-4 rounded-[1.25rem] border border-cyan-300/12 bg-[#071427]/80 px-4 py-3">
              <img
                src="/Assets/NewAboutMe.png"
                alt="Kim Guston identity"
                className="h-16 w-16 rounded-full border border-white/10 object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-white">Kim Ruds C. Guston</p>
                <p className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                  <i className="fa-solid fa-location-dot text-cyan-300" />
                  Metro Manila, Philippines
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-8 text-[#D3D3D3]">
                I combine development, design, and systems thinking to create polished digital products that feel premium, perform smoothly,
                and stay maintainable as they grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 xl:flex-col xl:items-start xl:justify-center">
              {['AI-assisted workflows', 'Futuristic UI systems', 'Secure product mindset', 'Clean responsive builds'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-cyan-300/12 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70"
                >
                  {tag}
                </span>
              ))}
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

      <section id="projects" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Projects</span>
              <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.3rem,5vw,3rem)] font-bold tracking-[-0.03em] text-white">
                Selected work with strong technical and visual direction.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#B0B0B0]">
              Each card emphasizes structure, clarity, and interaction polish while keeping the futuristic atmosphere subtle and professional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {projectCards.map((project, index) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,20,39,0.95))] shadow-[0_18px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-[0_24px_90px_rgba(56,189,248,0.12)] ${
                  index === 0 ? 'xl:col-span-2' : ''
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,8,22,0.7))] opacity-70" />
                  <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-5 p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">
                      {project.type}
                    </span>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/40">0{index + 1}</span>
                  </div>
                  <h3 className="text-[1.45rem] font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-[#B0B0B0]">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                    >
                      Discuss Project
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                    </a>
                    <a
                      href="#credentials"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
                    >
                      View Credentials
                      <i className="fa-solid fa-arrow-right text-xs" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Credentials</span>
            <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.3rem,5vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Professional foundation backed by learning, delivery, and growth.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#B0B0B0]">
              This section replaces the previous achievements layout with cleaner credential cards that support the new premium portfolio direction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {credentials.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-cyan-300/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-[0_0_36px_rgba(56,189,248,0.12)]"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/10 text-cyan-200">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#B0B0B0]">{item.description}</p>
                <a
                  href={item.actionHref}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-black/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-cyan-300/35 hover:text-white"
                >
                  {item.actionLabel}
                  <i className={`fa-solid ${item.external ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} text-[10px]`} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,16,32,0.92))] p-8 backdrop-blur-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</span>
            <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Let&apos;s build something clean, modern, and effective.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#B0B0B0]">
              Open to collaboration, freelance opportunities, and future-facing product work that values strong engineering and refined user experience.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#D4D4D4]">
              <div className="flex items-center gap-3 rounded-[1.25rem] border border-cyan-300/10 bg-black/20 px-4 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-[#B0B0B0]">Metro Manila, Philippines</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[1.25rem] border border-cyan-300/10 bg-black/20 px-4 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                  <i className="fa-solid fa-file-lines" />
                </span>
                <div>
                  <p className="font-medium text-white">Availability</p>
                  <p className="text-[#B0B0B0]">Available for projects, collaboration, and growth opportunities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-8 shadow-[0_0_42px_rgba(56,189,248,0.08)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-300/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Secure Channels</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Reach Out Through My Socials</h3>
              </div>
              <a
                href="/Assets/Guston_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 transition hover:border-cyan-300/40 hover:text-white"
              >
                Open CV
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.4rem] border border-cyan-300/10 bg-black/20 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/10 bg-cyan-300/10 text-cyan-200 transition group-hover:text-white">
                      <i className={item.icon} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/40">Open profile</p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-xs text-white/45 transition group-hover:translate-x-1 group-hover:text-white" />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.02))] p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Preferred Approach</p>
              <p className="mt-3 text-sm leading-7 text-[#C8C8C8]">
                Share your project goals, desired outcome, and preferred timeline. I&apos;ll respond with a clearer direction for design, development, or product support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
