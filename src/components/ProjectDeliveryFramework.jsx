import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const phases = [
  {
    number: '01',
    phaseTag: 'PHASE 01: SCOPE',
    title: 'Project Initiation and Scope Definition',
    focus:
      'Aligning with stakeholders on core business objectives, mapping user journeys, defining technical constraints, and identifying system edge cases.',
    deliverable: 'Comprehensive Project Scope Statement and Master Milestone Schedule.',
  },
  {
    number: '02',
    phaseTag: 'PHASE 02: BLUEPRINT',
    title: 'System Architecture and UI/UX Prototyping',
    focus:
      'Establishing the interface hierarchy and design tokens, alongside formalizing the underlying database architecture and API contracts.',
    deliverable: 'Approved UI Wireframes such as Figma files and Technical Schema Documentation.',
  },
  {
    number: '03',
    phaseTag: 'PHASE 03: EXECUTION',
    title: 'Iterative Agile Development',
    focus:
      'Executing clean, modular development through weekly Agile sprints. Continuous integration deploys completed features to staging environments for immediate User Acceptance Testing.',
    deliverable: 'Weekly Live Staging Deployments for continuous stakeholder review.',
  },
  {
    number: '04',
    phaseTag: 'PHASE 04: SHIP',
    title: 'Quality Assurance, Release and Closeout',
    focus:
      'Executing rigorous quality control, including cross-browser compatibility testing and performance audits such as Core Web Vitals, followed by final production deployment.',
    deliverable: 'Successful Production Release and full source code and intellectual property handover.',
  },
];

const ProjectDeliveryFramework = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    if (window.location.pathname === '/') {
      const el = document.getElementById('connect');
      if (el) {
        const navbarOffset = 16;
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -navbarOffset, duration: 0.9 });
        } else {
          const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navbarOffset);
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    } else {
      navigate('/#connect');
    }
  };

  return (
    <section
      id="delivery-framework"
      className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Project Delivery Framework
          </span>
          <h2 className="glint-headline mt-3 font-['Sora',_sans-serif] text-[clamp(1.75rem,4.8vw,3.6rem)] font-bold tracking-tight select-none break-words">
            <span className="glint-headline-base">4-SPRINT LIFECYCLE</span>
            <span className="glint-headline-band" aria-hidden="true">4-SPRINT LIFECYCLE</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
            Our development methodology prioritizes transparent stakeholder communication, predictable milestone tracking, and iterative feedback loops to eliminate black-box development.
          </p>
        </motion.div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
              className="glass-neu-card flex flex-col justify-between rounded-3xl p-5 sm:p-7 border border-[var(--border-color)] bg-[var(--surface)] hover:-translate-y-1 transition-transform duration-300 shadow-lg"
            >
              <div>
                {/* Header: Number + Phase Tag */}
                <div className="flex items-baseline justify-between gap-3 border-b border-[var(--border-color)] pb-4 mb-5">
                  <span className="font-['Sora',_sans-serif] text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
                    {phase.number}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {phase.phaseTag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Sora',_sans-serif] text-base sm:text-lg font-bold text-[var(--text-main)] tracking-tight leading-snug">
                  {phase.title}
                </h3>

                {/* Focus text */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                  {phase.focus}
                </p>
              </div>

              {/* Key Deliverable */}
              <div className="mt-8 pt-4 border-t border-[var(--border-color)]">
                <p className="font-mono text-[11px] sm:text-xs leading-relaxed text-[var(--text-main)] flex items-start gap-1.5">
                  <span className="text-[var(--text-muted)] shrink-0">&gt;_</span>
                  <span>{phase.deliverable}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery Framework Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="font-['Sora',_sans-serif] text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] break-words">
              Ready to kick off development or upgrade your current stack?
            </h3>

            <p className="mt-2 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
              Let’s define the product backlog, formalize technical requirements, and forecast sprint milestones.
            </p>
          </div>

          <button
            type="button"
            onClick={handleConnectClick}
            className="chunky-3d-btn group shrink-0"
            aria-label="Let's Connect"
          >
            <span>Let's Connect</span>
            <i
              className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectDeliveryFramework;
