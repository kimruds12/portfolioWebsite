import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Skills from './Skills';
import ExperienceTabs from './ExperienceTabs';
import ProjectDeliveryFramework from './ProjectDeliveryFramework';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* ── 1. ABOUT ME HERO & INTRODUCTION ── */}
      <section
        id="about-me"
        className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8 relative"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

            {/* Left: Bio Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <h1 className="mt-4 sm:mt-5 font-['Sora',_sans-serif] text-[clamp(1.85rem,5.5vw,4.2rem)] font-extrabold tracking-tight text-[var(--text-main)] leading-tight break-words">
                Kim Ruds C. Guston
              </h1>

              <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--text-muted)] max-w-2xl">
                <p>
                  Hello, I’m <strong className="text-[var(--text-main)] font-semibold">Kim Ruds Guston</strong> — a Front-End Developer and Computer Engineering student at Pamantasan ng Lungsod ng Valenzuela (PLV).
                </p>
                <p>
                  I specialize in engineering high-performance web applications, fluid component architectures, and intuitive digital interfaces. With deep roots in both front-end software development and computer engineering fundamentals, I bridge the gap between clean code, visual polish, and resilient system architecture.
                </p>
                <p>
                  From building real-time library systems and enterprise IT ticketing platforms to competing in national web design championships, I strive for precision, responsive accessibility, and dependable software execution.
                </p>
              </div>
            </motion.div>

            {/* Right: About Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-md">
                <div className="group relative w-full overflow-hidden rounded-3xl">
                  <img
                    src="/Assets/AboutMyImage.jpg"
                    alt="Kim Ruds Guston portrait"
                    className="
                      block aspect-[4/5] w-full object-cover object-center
                      rounded-3xl
                      transition-transform duration-500 ease-out
                      group-hover:scale-[1.04]
                      group-active:scale-[1.06]
                      motion-reduce:transition-none
                    "
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. SKILLS & TOOLS (Restored from Skills component) ── */}
      <Skills />

      {/* ── 3, 4, 5. EXPERIENCE, EDUCATION & CREDENTIALS (Tabbed) ── */}
      <ExperienceTabs />

      {/* ── 6. PROJECT DELIVERY FRAMEWORK (4-Sprint Lifecycle + CTA) ── */}
      <ProjectDeliveryFramework />
    </div>
  );
};

export default AboutPage;
