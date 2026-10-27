import { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectDetailsDialog from './ProjectDetailsDialog';

export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Dev' },
  { key: 'mobile', label: 'Mobile App' },
  { key: 'game', label: 'Game Dev' },
  { key: 'java', label: 'Java Projects' },
  { key: 'networking', label: 'Networking' },
  { key: 'prototype', label: 'UI Prototype' },
];

export const projects = [
  // ── WEB DEV ──
  {
    title: 'PLV-QLib',
    meta: 'Web Application',
    year: '2026',
    description: 'Built a multi-platform library patron management system for PLV using React Native, React.js, and Supabase, covering web with integrated database management and backend services.',
    role: "Project Manager & UI/UX Designer — Led the project planning using Agile methodology, created wireframes and UI/UX designs in Figma, contributed to the web application's frontend development, and made sure the system met the goals of the proposed project.",
    href: 'https://plv-qlib.vercel.app/Home',
    live: 'https://plv-qlib.vercel.app/Home',
    source: 'https://github.com/ToneeCru/Val-Track.git',
    image: '/Assets/plv-qlib.png',
    tags: ['Tailwind CSS', 'Next.js', 'Supabase'],
    category: 'web',
    status: '',
  },
  {
    title: 'ARTA-CSS Website',
    meta: 'Survey Data Management System with Role-Based Analytics Dashboard | Academic Project',
    year: '2025',
    description: 'Built a web-based citizen satisfaction survey platform for the City Government of Valenzuela with role-based access and a real-time analytics dashboard to track and visualize survey results.',
    role: "Project Lead & Developer — Led the team's direction, handled the development, and created the wireframes and UI/UX design in Figma — making sure everything aligned with the objectives set by our professor.",
    href: 'https://valenzuela-survey-sand.vercel.app',
    live: 'https://valenzuela-survey-sand.vercel.app',
    source: 'https://github.com/Aizrc/valenzuela-survey',
    image: '/Assets/ARTA-CSS.png',
    tags: ['Tailwind CSS', 'React', 'Firebase'],
    category: 'web',
    status: '',
  },
  {
    title: 'EduManage',
    meta: 'Student Performance Tracking System | Academic Project',
    year: '2025',
    description: 'Built a web platform for tracking Senior High School student performance, giving teachers easy tools to monitor grades, attendance, and progress to support better teaching decisions.',
    role: 'UI/UX Designer, Developer & QA Tester — Designed the wireframes and UI/UX, handled the development, and performed quality assurance testing at the end to make sure all modules and features were working correctly.',
    href: 'https://github.com/kimruds12/EduManage',
    image: '/Assets/edumanage_image.png',
    tags: ['Tailwind CSS', 'React', 'Firebase'],
    category: 'web',
    status: '',
  },
  {
    title: 'Amaro Resort Website',
    meta: 'Content Management System | Academic Project',
    year: '2025',
    description: 'Built a fully responsive website with a content management system for Amaro Resort, allowing non-technical admins to manage bookings, update amenities, and post promotions without developer help.',
    role: 'Project Manager, UI/UX Designer, Front-End Developer & Communication Lead — Planned the project objectives, coordinated with the client to gather needed assets, designed the UI/UX, handled frontend development, and tested the final output to make sure everything was functional and met the project goals.',
    href: 'https://github.com/kimruds12/AmaroResortWebsite',
    image: '/Assets/amaro_resort.png',
    tags: ['Content Management System', 'Informational Website', 'Client-Based'],
    category: 'web',
    status: '',
  },

  // ── MOBILE APP ──
  {
    title: 'PLV-QLib Mobile App',
    meta: 'Mobile App Development',
    year: '2026',
    description: 'A digital library companion for PLV built with React Native and Expo, supporting resource browsing, book reservations, offline sync, and push notifications for events and due dates.',
    role: "UI/UX Designer & Frontend Developer — Designed the app's layout, content structure, and modules, then helped build the frontend to make sure every feature looked great and worked as expected.",
    href: 'https://drive.google.com/file/d/1_-9OIvrjXGTCP9A49LHss84Qzf_mHasK/view?usp=drive_link',
    download: 'https://drive.google.com/file/d/1_-9OIvrjXGTCP9A49LHss84Qzf_mHasK/view?usp=drive_link',
    source: 'https://github.com/ToneeCru/Val-Track.git',
    image: '/Assets/Mobile App.png',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    category: 'mobile',
    status: '',
  },

  // ── INTERNSHIP PROJECT ──
  {
    title: '11FTCTicketManagementSystem',
    meta: 'Internship Project',
    year: '2026',
    description: 'Built a local IT ticket management system for tracking issues, assigning solutions, and monitoring ongoing support requests. It also manages company devices and maintains accurate, audit-ready records for scanners, phones, and laptops.',
    role: 'Developer — Designed and built the full local system covering ticket lifecycle management, device inventory tracking, and audit-ready record keeping for the internship IT department.',
    href: 'https://github.com/kimruds12/11FTCTicketingManagementSystem',
    image: '/Assets/11FTCTicketingManagement.jpg',
    tags: ['JavaScript', 'TypeScript'],
    category: 'web',
    status: '',
    isLocal: true,
  },

  // ── GAME DEV ──
  {
    title: 'Accord',
    meta: 'Game Development | Academic Project',
    year: '2025',
    description: 'A narrative-driven game built in Unity with node-based dialogue trees, custom dialogue state controllers, and branching storylines that respond to player choices in real time.',
    role: 'Generalist — Supported the lead developer by making sure all needed elements were in place — from game functionality to user-friendly design — keeping development on track.',
    href: 'https://toneecru.itch.io/accord',
    image: '/Assets/Accord .png',
    tags: ['Unity', 'C#', 'XNode'],
    category: 'game',
    status: '',
  },
  {
    title: 'Barikada Nations Unite',
    meta: 'Game Development | Academic Project',
    year: '2025',
    description: 'A cooperative tactics game in Unity with strategic unit management, turn-based combat, and team-based objectives, using Plastic SCM for collaborative version control.',
    role: 'Generalist — Supported the lead developer by making sure all needed elements were in place — from game functionality to user-friendly design — keeping development on track.',
    href: 'https://toneecru.itch.io/barikada-nations-unite',
    image: '/Assets/Barikada.png',
    tags: ['Unity', 'C#'],
    category: 'game',
    status: '',
  },

  // ── JAVA PROJECTS ──
  {
    title: 'School Rescue',
    meta: 'Java Application | Academic Project',
    year: '2025',
    description: "Built a Java-based emergency response app for schools with real-time incident reporting, evacuation management, and automated notifications to keep students and staff safe.",
    role: "Developer — Helped build the app's core logic, environment interactions, and the final quiz feature — making sure everything ran smoothly from start to finish.",
    href: 'https://github.com/kimruds12/School-Rescue',
    image: '/Assets/SchoolRescue.png',
    tags: ['Java', 'Swing'],
    category: 'java',
    status: '',
  },
  {
    title: 'Library Management System',
    meta: 'Java Application | Academic Project',
    year: '2025',
    description: 'Built a standalone Library Management System using Java and Swing, with features including book addition, editing, deletion, search, borrowing, and inventory tracking.',
    role: 'Developer — Designed and developed the standalone desktop application, implemented book cataloging, search algorithms, borrowing workflows, and inventory tracking.',
    href: 'https://github.com/kimruds12/Library-Management-System',
    image: '/Assets/LibraryManagementSystem_Image.png',
    tags: ['Java', 'Swing', 'Inventory'],
    category: 'java',
    status: '',
  },

  // ── NETWORKING ──
  {
    title: 'PLV CABA Building Network Structure',
    meta: 'Cisco Networking | Academic Project',
    year: '2025',
    description: 'Designed and configured a comprehensive network infrastructure for the PLV CABA Building using Cisco Packet Tracer, implementing VLAN segmentation, inter-VLAN routing, and DHCP services.',
    role: 'Network Engineer — Designed and simulated the enterprise topology, configured switch VLANs, trunk links, inter-VLAN routing, and subnet allocations.',
    href: '',
    image: '/Assets/CabaTopology.png',
    tags: ['Cisco', 'Networking', 'VLAN'],
    category: 'networking',
    download: '/Assets/Guston_CABA.pkt',
    status: '',
  },

  // ── UI PROTOTYPE ──
  {
    title: 'QASTRACK',
    meta: 'Web-Based Quality Assurance UI Prototype | Academic Project',
    year: '2025',
    description: 'High-fidelity frontend UI prototype for a web-based quality assurance tracking system tailored for Pamantasan ng Lungsod ng Valenzuela, featuring structured data visualization.',
    role: 'UI/UX Designer — Created the interactive prototypes, user flows, accessibility guidelines, and component specifications in Figma.',
    href: 'https://github.com/kimruds12/project-qastrack.git',
    image: '/Assets/Qastrack UI Prototype.png',
    tags: ['UI/UX', 'Prototype', 'Web Design'],
    category: 'prototype',
    status: '',
  },
];

export const getTagConfig = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('react native') || t === 'react') return { icon: 'fa-brands fa-react', color: '#61DAFB' };
  if (t.includes('tailwind')) return { icon: 'fa-solid fa-wind', color: '#38BDF8' };
  if (t.includes('next')) return { icon: 'fa-solid fa-n', color: 'var(--text-main)' };
  if (t.includes('supabase')) return { icon: 'fa-solid fa-bolt', color: '#3ECF8E' };
  if (t.includes('firebase')) return { icon: 'fa-solid fa-fire', color: '#FFA000' };
  if (t.includes('typescript')) return { icon: 'fa-solid fa-code', color: '#3178C6' };
  if (t.includes('javascript') || t === 'js') return { icon: 'fa-brands fa-js', color: '#F7DF1E' };
  if (t.includes('expo')) return { icon: 'fa-solid fa-mobile-screen', color: 'var(--text-main)' };
  if (t.includes('unity')) return { icon: 'fa-brands fa-unity', color: 'var(--text-main)' };
  if (t.includes('c#')) return { icon: 'fa-solid fa-c', color: '#9B4993' };
  if (t.includes('xnode')) return { icon: 'fa-solid fa-diagram-project', color: '#4A90E2' };
  if (t.includes('java')) return { icon: 'fa-brands fa-java', color: '#EA2D2E' };
  if (t.includes('swing')) return { icon: 'fa-solid fa-window-maximize', color: '#F5820D' };
  if (t.includes('cisco')) return { icon: 'fa-solid fa-network-wired', color: '#1BA0D7' };
  if (t.includes('lan') || t.includes('cabling')) return { icon: 'fa-solid fa-network-wired', color: '#38BDF8' };
  if (t.includes('hardware servicing') || t.includes('hardware')) return { icon: 'fa-solid fa-screwdriver-wrench', color: '#10B981' };
  if (t.includes('troubleshooting')) return { icon: 'fa-solid fa-wrench', color: '#F59E0B' };
  if (t.includes('tagging') || t.includes('fa tag')) return { icon: 'fa-solid fa-tag', color: '#EC4899' };
  if (t.includes('accountability')) return { icon: 'fa-solid fa-clipboard-check', color: '#8B5CF6' };
  if (t.includes('networking') || t.includes('vlan')) return { icon: 'fa-solid fa-diagram-project', color: '#6366F1' };
  if (t.includes('content management')) return { icon: 'fa-solid fa-file-pen', color: '#10B981' };
  if (t.includes('inventory')) return { icon: 'fa-solid fa-boxes-stacked', color: '#F59E0B' };
  if (t.includes('prototype') || t.includes('ui/ux') || t.includes('web design')) return { icon: 'fa-brands fa-figma', color: '#F24E1E' };
  return { icon: 'fa-solid fa-code', color: '#38BDF8' };
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const activeTriggerRef = useRef(null);

  const handleOpenDetails = (project, triggerRef) => {
    activeTriggerRef.current = triggerRef?.current || triggerRef;
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const tagMatch = project.tags.some((tag) => tag.toLowerCase().includes(query));

      return titleMatch || descMatch || tagMatch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryCount = (key) => {
    if (key === 'all') return projects.length;
    return projects.filter((p) => p.category === key).length;
  };

  return (
    <section
      id="projects-page"
      className="min-h-screen px-4 pt-24 sm:pt-32 pb-16 sm:pb-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h1 className="mt-3 font-['Sora',_sans-serif] text-[clamp(1.85rem,5vw,3.8rem)] font-bold tracking-tight text-[var(--text-main)] break-words">
              PROJECTS
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-muted)]">
              Here are some of my works, including web and mobile apps, games, and network configurations.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs self-start md:self-end">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="neu-inset w-full rounded-full py-2.5 pl-9 pr-8 text-xs font-medium text-[var(--text-main)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--text-main)] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)]"
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>
        </motion.div>

        {/* ── Category Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {categories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 min-h-[38px] ${isActive
                  ? 'bg-[var(--btn-strong-bg)] text-[var(--btn-strong-text)] shadow-md glass-neu-pill-active'
                  : 'glass-neu-pill text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`inline-flex h-4 min-w-[1.2rem] items-center justify-center rounded-full px-1 text-[10px] font-bold ${isActive
                    ? 'bg-[var(--btn-strong-text)]/15 text-[var(--btn-strong-text)]'
                    : 'bg-[var(--surface-soft)] text-[var(--text-muted)]'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-[var(--border-color)] bg-[var(--surface)]">
            <i className="fa-solid fa-folder-open text-4xl text-[var(--text-muted)] opacity-40 mb-3" />
            <p className="text-sm font-semibold text-[var(--text-main)]">No projects found</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">Try another search keyword or select a different category.</p>
          </div>
        )}

        {/* Project Details Modal Dialog */}
        <ProjectDetailsDialog
          project={selectedProject}
          onClose={handleCloseDetails}
          triggerRef={activeTriggerRef}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
