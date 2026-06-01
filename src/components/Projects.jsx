import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Dev' },
  { key: 'mobile', label: 'Mobile App' },
  { key: 'game', label: 'Game Dev' },
  { key: 'java', label: 'Java Projects' },
  { key: 'networking', label: 'Networking' },
  { key: 'prototype', label: 'UI Prototype' },
];

const projects = [
  // ── WEB DEV ──
  {
    title: 'PLV-QLib',
    meta: 'Patron Management System | Capstone Project',
    year: '2026',
    description:
      'Designed and developed a multi-platform patron management system for the Pamantasan ng Lungsod ng Valenzuela (PLV) Library using React Native, React.js, and Supabase, delivering a seamless library patron experience with integrated database management and backend services.',
    href: 'https://github.com/ToneeCru/Val-Track.git',
    image: '/Assets/plv-qlib.png',
    tags: ['React Native', 'React.js', 'Supabase'],
    category: 'web',
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
    category: 'web',
  },
  {
    title: 'EduManage',
    meta: 'Student Performance Tracking System | Academic Project',
    year: '2025',
    description:
      'Engineered a comprehensive web-based platform for managing and tracking Senior High School student academic performance, providing educators with intuitive tools to monitor grades, attendance, and progress analytics to support data-driven instructional strategies.',
    href: 'https://github.com/kimruds12/EduManage',
    image: '/Assets/edumanage_image.png',
    tags: ['Education', 'Tracking', 'Web System'],
    category: 'web',
  },
  {
    title: 'Amaro Resort Website',
    meta: 'Content Management System | Academic Project',
    year: '2025',
    description:
      'Designed and developed a fully responsive informational website with an integrated content management system for Amaro Resort, empowering non-technical administrators to seamlessly manage bookings, update resort amenities, and publish promotional content without any developer assistance.',
    href: 'https://github.com/kimruds12/AmaroResortWebsite',
    image: '/Assets/amaro_resort.png',
    tags: ['CMS', 'Website', 'Content Management'],
    category: 'web',
  },

  // ── MOBILE APP ──
  {
    title: 'PLV-QLib Mobile App',
    meta: 'Mobile App Development',
    year: '2026',
    description:
      'A comprehensive digital library companion for Pamantasan ng Lungsod ng Valenzuela (PLV), built with React Native and Expo. The application streamlines access to resource catalogs, enables book reservations, supports offline-first data synchronization, and delivers push notifications for library events and due-date reminders.',
    href: '',
    image: '/Assets/Mobile App.png',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    category: 'mobile',
  },

  // ── GAME DEV ──
  {
    title: 'Accord',
    meta: 'Game Development',
    year: '2025',
    description:
      'An immersive narrative-driven gameplay experience developed inside Unity, featuring node-based dialog trees, custom dialogue state controllers, and dynamic branching storylines that respond to player choices in real time.',
    href: 'https://toneecru.itch.io/accord',
    image: '/Assets/Accord .png',
    tags: ['Unity', 'C#', 'XNode'],
    category: 'game',
  },
  {
    title: 'Barikada Nations Unite',
    meta: 'Game Development',
    year: '2025',
    description:
      'A cooperative multi-unit tactics game built inside Unity, featuring strategic unit management, turn-based combat mechanics, and team-based objectives utilizing Plastic SCM for collaborative version control across the development team.',
    href: 'https://toneecru.itch.io/barikada-nations-unite',
    image: '/Assets/Barikada.png',
    tags: ['Unity', 'C#'],
    category: 'game',
  },

  // ── JAVA PROJECTS ──
  {
    title: 'School Rescue',
    meta: 'Java Application | Academic Project',
    year: '2025',
    description:
      'Developed a Java-based emergency response management application designed for school environments, featuring real-time incident reporting, evacuation protocol management, and automated notification systems to ensure student and staff safety during critical situations.',
    href: 'https://github.com/kimruds12/School-Rescue',
    image: '/Assets/SchoolRescue.png',
    tags: ['Java', 'Swing'],
    category: 'java',
  },
  {
    title: 'Library Management System',
    meta: 'Academic Project',
    year: '2025',
    description:
      'Built a standalone Library Management System using Java and Swing, with features including book addition, editing, deletion, search, borrowing, and inventory tracking, allowing librarians to easily manage library records and improve the overall efficiency of daily library operations.',
    href: 'https://github.com/kimruds12/Library-Management-System',
    image: '/Assets/LibraryManagementSystem_Image.png',
    tags: ['Java', 'Swing', 'Inventory'],
    category: 'java',
  },

  // ── NETWORKING ──
  {
    title: 'PLV CABA Building Network Structure',
    meta: 'Cisco Networking | Academic Project',
    year: '2025',
    description:
      'Designed and configured a comprehensive network infrastructure for the PLV CABA Building using Cisco Packet Tracer, implementing VLAN segmentation, inter-VLAN routing, DHCP services, and network security policies to establish a scalable and secure campus network architecture.',
    href: '',
    image: '/Assets/CabaTopology.png',
    tags: ['Cisco', 'Networking', 'VLAN'],
    category: 'networking',
    download: '/Assets/Guston_CABA.pkt',
  },

  // ── UI PROTOTYPE ──
  {
    title: 'QASTRACK',
    meta: 'Web-Based Quality Assurance UI Prototype',
    year: '',
    description:
      'Conceptualized and designed a high-fidelity frontend UI prototype for a web-based quality assurance tracking system tailored for Pamantasan ng Lungsod ng Valenzuela. The prototype demonstrates a proposed user interface for systematic monitoring and documentation of quality assurance workflows, featuring an intuitive dashboard layout, structured data visualization components, and a clean information architecture — serving as a design foundation for future full-stack development.',
    href: 'https://github.com/kimruds12/project-qastrack.git',
    image: '/Assets/Qastrack UI Prototype.png',
    tags: ['UI/UX', 'Prototype', 'Web Design'],
    category: 'prototype',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const projectRefs = useRef([]);
  const containerRef = useRef(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getCategoryCount = (key) => {
    if (key === 'all') return projects.length;
    return projects.filter((p) => p.category === key).length;
  };

  // Scroll-to-focus: determine which project is most centered in viewport
  const updateFocusedProject = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let closestIndex = -1;
    let closestDistance = Infinity;

    projectRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      // Only consider cards that are at least partially visible
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      }
    });

    setFocusedIndex(closestIndex);
  }, []);

  useEffect(() => {
    // Reset refs when filtered projects change
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);
    updateFocusedProject();
  }, [filteredProjects.length, updateFocusedProject]);

  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateFocusedProject);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateFocusedProject]);

  return (
    <section id="projects" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Featured Work</span>
          <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.3rem,5vw,3rem)] font-bold tracking-[-0.03em] text-white">
            Recent Projects
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#B0B0B0]">
            A compilation of my most recent work, which includes network setups, games, mobile apps, and front-end developments.
          </p>
        </motion.div>

        {/* ── Category Filter Bar ── */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${isActive
                  ? 'bg-cyan-300 text-[#050B14] shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'border border-white/10 bg-white/[0.03] text-white/60 hover:border-cyan-300/30 hover:bg-white/[0.06] hover:text-white/90'
                  }`}
              >
                {cat.label}
                <span
                  className={`inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-bold transition-colors duration-300 ${isActive
                    ? 'bg-[#050B14]/20 text-[#050B14]'
                    : 'bg-white/10 text-white/50 group-hover:bg-white/15 group-hover:text-white/70'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Project Cards ── */}
        <div ref={containerRef} className="mt-12 space-y-8">
          {filteredProjects.map((project, index) => {
            // Alternate layout: even index = image left, odd index = image right
            const isReversed = index % 2 !== 0;
            const isFocused = focusedIndex === index;

            return (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                key={`${project.title}-${project.year || 'proto'}`}
                ref={(el) => (projectRefs.current[index] = el)}
                className="group overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,20,39,0.95))] shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-700 ease-out hover:border-cyan-300/30 hover:shadow-[0_24px_90px_rgba(56,189,248,0.12)]"
                style={{
                  transform: isFocused ? 'scale(1)' : 'scale(0.96)',
                  filter: isFocused ? 'blur(0px)' : 'blur(1.5px)',
                  transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.7s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <div
                  className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  {/* Image Side */}
                  <div className="relative min-h-[16rem] w-full lg:w-[45%] shrink-0 overflow-hidden bg-[linear-gradient(180deg,rgba(10,18,35,0.96),rgba(5,11,20,0.98))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,11,20,0.12),rgba(5,11,20,0.5))]" />
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center p-8">
                          <i className={`${project.category === 'game' ? 'fa-solid fa-gamepad' :
                            project.category === 'networking' ? 'fa-solid fa-network-wired' :
                              project.category === 'java' ? 'fa-brands fa-java' :
                                project.category === 'prototype' ? 'fa-solid fa-palette' :
                                  'fa-solid fa-code'
                            } text-5xl text-cyan-300/30 mb-4`} />
                          <p className="text-sm text-cyan-200/40 font-mono uppercase tracking-[0.2em]">
                            {project.category === 'game' ? 'Game Development' :
                              project.category === 'networking' ? 'Network Design' :
                                project.category === 'java' ? 'Java Application' :
                                  project.category === 'prototype' ? 'UI Prototype' :
                                    'Project'}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="absolute left-4 top-4 rounded-full border border-cyan-300/18 bg-[rgba(5,11,20,0.7)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">

                    <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-2xl">
                        <h3 className="text-[1.55rem] font-semibold leading-tight text-white sm:text-[1.8rem]">{project.title}</h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/75">
                          {project.meta}{project.year ? ` (${project.year})` : ''}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-8 text-[#B0B0B0] sm:text-[0.98rem]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-2 rounded-lg border border-cyan-300/10 bg-black/40 px-4 py-2 font-mono text-[13px] text-cyan-200/90 shadow-inner transition-all duration-300 cursor-default select-none group-hover:border-cyan-300/25 hover:!border-cyan-300/50 hover:!bg-cyan-300/15 hover:!text-white hover:shadow-[0_0_14px_rgba(34,211,238,0.18)] hover:scale-[1.05] active:scale-[0.97] active:!bg-cyan-300/25 active:!border-cyan-300/60 active:!text-white active:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70 transition-all duration-300"></span>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-6">
                      {/* Game projects: Play on Itch.io */}
                      {project.category === 'game' && project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400/15 to-cyan-300/10 border border-cyan-300/25 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:from-cyan-400/25 hover:to-cyan-300/20 hover:border-cyan-300/40 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        >
                          <i className="fa-solid fa-gamepad text-base" />
                          Play on Itch.io
                          <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                      ) : project.download ? (
                        /* Networking projects: Download Cisco PKT */
                        <a
                          href={project.download}
                          download
                          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400/15 to-cyan-300/10 border border-cyan-300/25 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:from-cyan-400/25 hover:to-cyan-300/20 hover:border-cyan-300/40 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        >
                          <i className="fa-solid fa-download text-base" />
                          Download Cisco PKT
                          <i className="fa-solid fa-arrow-down text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                      ) : project.href ? (
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

                      {/* Secondary action: Source / Private */}
                      {project.category === 'game' && !project.href ? (
                        <span className="inline-flex items-center gap-2 text-sm text-white/40">
                          <i className="fa-solid fa-lock text-sm" />
                          Private Project
                        </span>
                      ) : project.category !== 'game' && project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                        >
                          <i className="fa-brands fa-github text-base" />
                          Source
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center py-20 text-center">
            <i className="fa-solid fa-folder-open text-4xl text-cyan-300/20 mb-4" />
            <p className="text-white/50 text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
