import { motion } from 'framer-motion';
import Skills from './Skills';
import ExperienceTabs from './ExperienceTabs';
import ProjectDeliveryFramework from './ProjectDeliveryFramework';
import { PageBlock } from './PageTransition';

const AboutPage = () => {

  return (
    <div className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* ── 1. ABOUT ME HERO & INTRODUCTION ── */}
      <PageBlock
        as="section"
        id="about-me"
        className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8 relative"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

            {/* About Portrait: On mobile (grid-cols-1) appears first above title; on lg (desktop) sits in col-span-5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5 flex justify-center order-first lg:order-last"
            >
              <div className="w-full max-w-sm sm:max-w-md">
                <div className="photo-card-skew group relative w-full overflow-hidden rounded-3xl">
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

            {/* Bio Content: Below portrait on mobile, left column on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-last lg:order-first"
            >
              <h1 className="glint-headline mt-4 sm:mt-5 font-['Sora',_sans-serif] text-[clamp(1.85rem,5.5vw,4.2rem)] font-extrabold tracking-tight leading-tight select-none break-words uppercase">
                <span className="glint-headline-base">KIM RUDS GUSTON</span>
                <span className="glint-headline-band" aria-hidden="true">KIM RUDS GUSTON</span>
              </h1>

              <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--text-muted)] max-w-2xl">
                <p>
                  Hello, I’m <strong className="text-[var(--text-main)] font-semibold">Kim Ruds</strong> — a fourth-year Bachelor of Science in Information Technology student at Pamantasan ng Lungsod ng Valenzuela (PLV). I'm a front-end developer, networking enthusiast, and aspiring system architect who enjoys building practical digital solutions and exploring how software and networks work together.
                </p>
                <p>
                  My experience spans web application development, user interface design, full-stack systems, and enterprise network simulation. As the project manager and front-end developer of PLV-QLib, I helped build a library management system using QR technology. I have also worked on the 11FTC Ticketing Management System as a full-stack developer and explored 2D game development with Unity.
                </p>
                <p>
                  Beyond these projects, I build web applications using Node.js, Java, and Python while simulating enterprise networks to strengthen my knowledge of network design, configuration, and infrastructure. I aim to create reliable, well-structured, and user-friendly systems while continuing to grow across different areas of information technology.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </PageBlock>

      {/* ── 2. SKILLS & TOOLS (GSAP ScrollTrigger Pinned Deck Stack) ── */}
      <Skills />

      {/* ── 3, 4, 5. EXPERIENCE, EDUCATION & CREDENTIALS (Tabbed) ── */}
      <PageBlock className="page-block-experience">
        <ExperienceTabs />
      </PageBlock>

      {/* ── 6. PROJECT DELIVERY FRAMEWORK (4-Sprint Lifecycle + CTA) ── */}
      <PageBlock className="page-block-framework">
        <ProjectDeliveryFramework />
      </PageBlock>
    </div>
  );
};

export default AboutPage;
