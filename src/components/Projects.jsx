const projects = [
  {
    title: 'PLV-QLib',
    meta: 'Patron Management System | Capstone Project',
    year: '2026',
    description:
      'Designed and developed a multi-platform patron management system for the Pamantasan ng Lungsod ng Valenzuela (PLV) Library using React Native, React.js, and Supabase, delivering a seamless library patron experience with integrated database management and backend services.',
    href: 'https://github.com/ToneeCru/Val-Track.git',
    image: '/Assets/plv-qlib.png',
    tags: ['React Native', 'React.js', 'Supabase'],
  },
  {
    title: 'QASTRACK',
    meta: 'Web-Based Quality Assurance System | Academic Project',
    year: '2025',
    description:
      'Developed a web-based quality assurance tracking system for Pamantasan ng Lungsod ng Valenzuela, enabling systematic monitoring and documentation of quality assurance processes to support institutional compliance and operational efficiency.',
    href: 'https://github.com/kimruds12/project-qastrack.git',
    image: '/Assets/Project4.png',
    tags: ['Web App', 'Quality Assurance', 'Tracking'],
  },
  {
    title: 'Student Performance Tracking System',
    meta: 'Academic Project',
    year: '2025',
    description:
      'Developed a web-based student performance tracking system for Senior High School students, allowing teachers to easily monitor, record, and evaluate student academic progress to support informed and timely instructional decisions.',
    href: 'https://github.com/kimruds12/project-Student-Performance-Tracking-System',
    image: '/Assets/Project3.jpg',
    tags: ['Education', 'Tracking', 'Web System'],
  },
  {
    title: 'ARTA-CSS Website',
    meta: 'Survey Data Management System with Role-Based Analytics Dashboard | Academic Project',
    year: '2025',
    description:
      'Built a web-based ARTA-compliant citizen satisfaction survey platform for the City Government of Valenzuela, implementing role-based access control and an analytics dashboard to visualize and monitor customer satisfaction survey results in real time.',
    href: 'https://github.com/Aizrc/valenzuela-survey',
    image: '/Assets/ARTA-CSS.png',
    tags: ['Analytics', 'Role-Based Access', 'Survey Platform'],
  },
  {
    title: 'Amaro Resort Website',
    meta: 'Content Management System | Academic Project',
    year: '2025',
    description:
      'Designed and developed an informational website integrated with a content management system for Amaro Resort, enabling non-technical administrators to efficiently manage and update site content without developer intervention.',
    href: '',
    image: '/Assets/amaro_resort.png',
    tags: ['CMS', 'Website', 'Content Management'],
  },
  {
    title: 'Library Management System',
    meta: 'Academic Project',
    year: '2025',
    description:
      'Built a standalone Library Management System using Java and Swing, with features including book addition, editing, deletion, search, borrowing, and inventory tracking, allowing librarians to easily manage library records and improve the overall efficiency of daily library operations.',
    href: 'https://github.com/0Glast0/LibraryManagementSystem?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPMjc1MjU0NjkyNTk4Mjc5AAEehuCS-ZTv9gClmBirV7SrLL1BCH2KDH2PUpN38CV9Zo9vQVK8m3lt26JTyLo_aem_yuOOLboykVBIWIi1lhnxpw',
    image: '/Assets/Project2.png',
    tags: ['Java', 'Swing', 'Inventory'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Featured Work</span>
          <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.3rem,5vw,3rem)] font-bold tracking-[-0.03em] text-white">
            Projects with structured systems and polished execution.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#B0B0B0]">
            A curated selection of academic and capstone projects presented with a consistent layout, clean hierarchy, and the same professional visual language across the portfolio.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${project.year}`}
              className="group overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,20,39,0.95))] shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:shadow-[0_24px_90px_rgba(56,189,248,0.12)]"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(19rem,0.95fr)_1.05fr]">
                <div className="relative min-h-[16rem] overflow-hidden bg-[linear-gradient(180deg,rgba(10,18,35,0.96),rgba(5,11,20,0.98))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_45%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,11,20,0.12),rgba(5,11,20,0.5))]" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-cyan-300/18 bg-[rgba(5,11,20,0.7)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    0{index + 1}
                  </div>
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="text-[1.55rem] font-semibold leading-tight text-white sm:text-[1.8rem]">{project.title}</h3>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/75">
                        {project.meta} ({project.year})
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-8 text-[#B0B0B0] sm:text-[0.98rem]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                      >
                        View Details
                        <i className="fa-solid fa-arrow-right text-xs" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/70">
                        View Details
                        <i className="fa-solid fa-arrow-right text-xs" />
                      </span>
                    )}

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                      >
                        <i className="fa-brands fa-github text-base" />
                        Source
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-white/40">
                        <i className="fa-solid fa-lock text-sm" />
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
