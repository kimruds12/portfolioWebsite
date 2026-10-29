import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import RecordsSplitCarousel from './RecordsSplitCarousel';

const workExperienceRecords = [
  {
    id: 'work-11ftc',
    organization: '11FTC Enterprises, Inc.',
    badge: 'IT TECHNICAL SUPPORT',
    title: 'IT Technical Support Intern',
    period: 'June 2026 to October 2026',
    location: 'Novaliches, Quezon City',
    description:
      'Delivered end-user IT support by diagnosing and resolving hardware, software, printer, and network issues, maintaining IT assets, and deploying fully tested workstations to improve system reliability, minimize operational downtime, and keep business operations running smoothly.',
    technologies: ['IT Support', 'Lan Cabling', 'Network Configuration', 'PC Assembly'],
  },
  {
    id: 'work-meycauayan',
    organization: 'Meycauayan, Bulacan',
    badge: 'OPERATIONS SUPPORT',
    title: 'Device Asset Custodian',
    period: 'July 2025 to August 2025',
    location: 'Meycauayan, Bulacan',
    description:
      'Managed the issuance, retrieval, and secure storage of scanners, mobile phones, and laptops for warehouse employees each shift, ensuring full device accountability and zero equipment loss. Administered device and employee ID scanning procedures to track assignments accurately, strengthen asset-control compliance, and maintain audit-ready inventory records across the sortation facility.',
    technologies: ['Asset Control', 'Device Tracking', 'ID Verification', 'Inventory Records'],
  },
];

const educationRecords = [
  {
    id: 'edu-plv',
    organization: 'Pamantasan ng Lungsod ng Valenzuela',
    badge: 'IN PROGRESS / COLLEGE',
    title: 'Bachelor of Science in Information Technology',
    period: '2023 to Present',
    location: 'Valenzuela City, Philippines',
    description:
      'Currently pursuing a Bachelor of Science in Information Technology with a focus on practical software development, systems, and technical problem solving.',
    honors: 'Dean’s Lister during the first, second, and third year.',
    technologies: ['Dean’s Lister (1st, 2nd, 3rd Year)', 'Software Development', 'Systems', 'Problem Solving'],
  },
  {
    id: 'edu-punturin',
    organization: 'Punturin Senior High School',
    badge: 'SENIOR HIGH SCHOOL',
    title: 'Science, Technology, Engineering and Mathematics',
    period: '2021 to 2023',
    location: 'Valenzuela City, Philippines',
    description:
      'Completed the Science, Technology, Engineering and Mathematics (STEM) academic strand with High Honors, establishing strong analytical foundations in mathematics and science.',
    honors: 'With High Honors.',
    technologies: ['With High Honors', 'STEM', 'Mathematics', 'Analytical Problem Solving'],
  },
  {
    id: 'edu-bignay',
    organization: 'Bignay National High School',
    badge: 'JUNIOR HIGH SCHOOL',
    title: 'Junior High School',
    period: '2017 to 2021',
    location: 'Valenzuela City, Philippines',
    description:
      'Completed Junior High School with High Honors, developing disciplined academic habits and an enduring curiosity for technology and computing.',
    honors: 'With High Honors.',
    technologies: ['With High Honors', 'Academic Excellence', 'Basic Science', 'Technology Foundations'],
  },
];

const certificatesRecords = [
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
  { id: 'credentials', label: 'Certificates and Honors', icon: 'fa-regular fa-bookmark' },
  { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
];

const ExperienceTabs = () => {
  const location = useLocation();
  const queryRecord = new URLSearchParams(location.search).get('record');
  const is11ftc = queryRecord === '11ftc';
  const ftcIndex = workExperienceRecords.findIndex((r) => r.id === 'work-11ftc');

  const [activeTab, setActiveTab] = useState('experience');
  const [selectedIndex, setSelectedIndex] = useState(is11ftc ? (ftcIndex !== -1 ? ftcIndex : 1) : 0);

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
      id="experience"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Experience, Education and Credentials records"
    >
      <div id="credentials" className="absolute top-0 pointer-events-none" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="glint-headline font-['Sora',_sans-serif] text-[clamp(1.75rem,4.5vw,3.4rem)] font-extrabold tracking-tight select-none break-words">
            <span className="glint-headline-base">Experience, Education &amp; Credentials</span>
            <span className="glint-headline-band" aria-hidden="true">Experience, Education &amp; Credentials</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
            A record of work experience, Information Technology education, and industry certifications, highlighting technical skills, achievements, and academic excellence.
          </p>
        </motion.div>

        {/* Three Tab Controls - Segmented Control with Sliding White Thumb */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div
            role="tablist"
            aria-label="Records categories"
            className="relative flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 p-1.5 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border-color)] shadow-xs w-full sm:w-auto"
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
                  className={`relative flex min-h-[42px] items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] w-full min-[480px]:w-auto select-none cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 font-bold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  {/* Sliding White Thumb */}
                  {isActive && (
                    <motion.div
                      layoutId="segmented-thumb"
                      className="absolute inset-0 rounded-xl bg-white shadow-md border border-white/80 z-0"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <i
                      className={`${tab.icon} text-xs transition-colors duration-200 ${
                        isActive ? 'text-neutral-950' : 'opacity-70'
                      }`}
                    />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Carousel Content with Smooth Section Swapping */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <RecordsSplitCarousel
              tabType={activeTab}
              records={records}
              selectedIndex={selectedIndex}
              onSelectIndex={setSelectedIndex}
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ExperienceTabs;
