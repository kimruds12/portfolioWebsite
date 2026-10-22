import { useState } from 'react';
import { motion } from 'framer-motion';
import RecordsSplitCarousel from './RecordsSplitCarousel';

export const workExperienceRecords = [
  {
    id: 'work-11ftc',
    organization: '11FTC Enterprises Inc.',
    badge: 'INTERNSHIP & IT OPS',
    title: 'IT Management System Intern',
    period: '2024 - 2025',
    location: 'Valenzuela City (On-site)',
    description:
      'Architected and implemented a local IT ticket and hardware inventory management system (11FTCTicketManagementSystem). Streamlined request workflows, technician assignment protocols, and service reporting across enterprise hardware and network infrastructure.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'ITIL Workflows'],
  },
  {
    id: 'work-web-apps',
    organization: 'Personal & Open Source Projects',
    badge: 'PRODUCT ENGINEERING',
    title: 'Web Application Creator & Frontend Engineer',
    period: '2023 - Present',
    location: 'Remote',
    description:
      'Engineered and deployed 5+ production-grade web applications including PLV-QLib Library System, CV Studio, and interactive state engines. Implemented modern design systems, fluid micro-interactions, responsive accessibility, and real-time database synchronization.',
    technologies: ['React 19', 'Vite', 'Firebase Firestore', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'work-freelance',
    organization: 'Independent & Academic Engagements',
    badge: 'SYSTEM DESIGN & UI',
    title: 'Frontend Developer & UI Specialist',
    period: '2022 - 2024',
    location: 'Hybrid',
    description:
      'Designed high-fidelity Figma prototypes, wireframes, and scalable component libraries for university software projects and client websites. Spearheaded UI modernization with an emphasis on performance audits and WCAG accessibility standards.',
    technologies: ['Figma', 'JavaScript (ES6+)', 'HTML5 / Semantic CSS', 'Responsive UI'],
  },
];

export const educationRecords = [
  {
    id: 'edu-plv',
    organization: 'Pamantasan ng Lungsod ng Valenzuela (PLV)',
    badge: 'UNDERGRADUATE DEGREE',
    title: 'Bachelor of Science in Computer Engineering',
    period: '2021 - Present',
    location: 'Valenzuela City, Philippines',
    description:
      'Rigorous academic program spanning computer architecture, object-oriented software engineering, network administration, digital logic design, embedded systems, and database management systems. Consistent academic excellence.',
    technologies: ['Computer Architecture', 'Network Security', 'Data Structures', 'C# / Java', 'Linux / Ubuntu'],
  },
  {
    id: 'edu-stem',
    organization: 'Senior High School Academic Track',
    badge: 'ACADEMIC HONORS',
    title: 'Science, Technology, Engineering & Mathematics (STEM)',
    period: '2019 - 2021',
    location: 'Metro Manila, Philippines',
    description:
      'Graduated with honors in the STEM academic strand. Developed foundational analytical rigor, mathematical modeling capabilities, algorithmic thinking, and early programming exposure.',
    technologies: ['Advanced Mathematics', 'Physics', 'Algorithmic Problem Solving'],
  },
];

export const certificatesRecords = [
  {
    id: 'cert-itlympics',
    typeLabel: '// WEB DESIGN COMPETITION',
    organization: 'National IT Skills Championship',
    badge: '1ST PLACE CHAMPION',
    title: 'PLV ITlympics 2025: Web Design Competition',
    date: 'April 2025',
    image: '/Assets/latestwebdesigncert.png',
    imageAlt: 'ITLympics 2025 Web Design Champion Certificate',
    description:
      'Awarded first place in web design for creating an innovative, highly responsive, and accessible interface under strict time constraints. Recognized for clean code architecture, modern aesthetic execution, and performance.',
    tags: ['Web Design', 'UI Wireframing', 'Responsive UI', 'Architecture'],
  },
  {
    id: 'cert-umak',
    typeLabel: '// ACADEMIC COMPETITION',
    organization: 'University of Makati',
    badge: 'PARTICIPANT',
    title: '14th UMAK IT Skills Olympics 2025',
    date: 'November 2025',
    image: '/Assets/itlympicsid.png',
    imageAlt: 'UMAK 14th IT Skills Olympics Certificate',
    description:
      'Demonstrated advanced technical proficiency and problem-solving skills against top peers in a rigorous competitive environment, engineering accessible front-end solutions under time pressure.',
    tags: ['Web Engineering', 'Rapid Prototype', 'Component Arch', 'Figma Design'],
  },
  {
    id: 'cert-cisco',
    typeLabel: '// CISCO CERTIFICATION',
    organization: 'Cisco Networking Academy',
    badge: 'CAREER PATH',
    title: 'Cisco Network Technician Career Path',
    date: 'May 2025',
    image: '/Assets/Image_Network Addressing.png',
    imageAlt: 'Cisco Networking Academy Certified Network Addressing Certificate',
    description:
      'Certified proficiency across IPv4 and IPv6 subnetting architecture, VLSM design, host troubleshooting, and diagnostic protocols across enterprise networks.',
    tags: ['Basics', 'Devices', 'Addressing', 'Security'],
  },
  {
    id: 'cert-cisco-basics',
    typeLabel: '// CISCO CERTIFICATION',
    organization: 'Cisco Networking Academy',
    badge: 'FOUNDATIONS',
    title: 'Cisco Networking Basics & Topologies',
    date: 'May 2025',
    image: '/Assets/Image_Network Basics.png',
    imageAlt: 'Cisco Networking Basics & Topologies Certificate',
    description:
      'Mastered core networking fundamentals including the OSI model, TCP/IP protocol suite, ethernet frame structures, and enterprise network topology design.',
    tags: ['Topologies', 'OSI Model', 'Ethernet Protocols', 'IP Protocols'],
  },
  {
    id: 'cert-cisco-devices',
    typeLabel: '// CISCO CERTIFICATION',
    organization: 'Cisco Networking Academy',
    badge: 'INFRASTRUCTURE',
    title: 'Cisco Networking Devices Configuration',
    date: 'May 2025',
    image: '/Assets/Image_Network Devices.png',
    imageAlt: 'Cisco Networking Devices Configuration Certificate',
    description:
      'Hands-on configuration of Cisco switches and routers, VLAN segmentation, inter-VLAN routing protocols, and secure administrative device hardening.',
    tags: ['Cisco IOS', 'Switch Config', 'Router Config', 'VLAN Design'],
  },
];

const TABS = [
  { id: 'experience', label: 'Work Experience', icon: 'fa-solid fa-briefcase' },
  { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
  { id: 'credentials', label: 'Certificates & Honors', icon: 'fa-regular fa-bookmark' },
];

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getActiveRecords = () => {
    switch (activeTab) {
      case 'education':
        return educationRecords;
      case 'credentials':
        return certificatesRecords;
      case 'experience':
      default:
        return workExperienceRecords;
    }
  };

  const records = getActiveRecords();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSelectedIndex(0);
  };

  return (
    <section
      id="credentials"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Experience, Education and Credentials records"
    >
      <div className="mx-auto w-full max-w-6xl relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-['Sora',_sans-serif] text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold tracking-tight text-[var(--text-main)]">
            Experience, Education &amp; Credentials
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
            A comprehensive record of client engagements, technical internships, computer engineering education, and industry certifications.
          </p>
        </motion.div>

        {/* Three Tab Controls */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div
            role="tablist"
            aria-label="Records categories"
            className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border-color)] shadow-xs"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex min-h-[42px] items-center gap-2.5 rounded-xl px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${
                    isActive
                      ? 'bg-[var(--text-main)] text-[var(--surface)] shadow-md'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface)]/50'
                  }`}
                >
                  <i className={`${tab.icon} text-xs ${isActive ? 'text-[var(--surface)]' : 'opacity-70'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Carousel Content */}
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <RecordsSplitCarousel
            tabType={activeTab}
            records={records}
            selectedIndex={selectedIndex}
            onSelectIndex={setSelectedIndex}
          />
        </div>

      </div>
    </section>
  );
};

export default ExperienceTabs;
