import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Skills from './Skills';
import ExperienceTabs from './ExperienceTabs';
import ProjectDeliveryFramework from './ProjectDeliveryFramework';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      {/* ── 1. ABOUT ME HERO & INTRODUCTION ── */}
      <section
        id="about-me"
        className="px-4 py-16 sm:px-6 lg:px-8 relative"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Bio Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>

              <h1 className="mt-5 font-['Sora',_sans-serif] text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
                Architecting Modern Web & Systems.
              </h1>

              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[var(--text-muted)] max-w-2xl">
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

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/#connect')}
                  className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[var(--btn-strong-bg)] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--btn-strong-text)] shadow-sm hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
                >
                  <i className="fa-regular fa-paper-plane text-xs" />
                  <span>Let’s Connect</span>
                </button>

                <a
                  href="/Assets/2026_GUSTON_CV.pdf"
                  download="2026_GUSTON_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-main)] shadow-sm hover:bg-[var(--surface-hover)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
                >
                  <i className="fa-solid fa-file-arrow-down text-xs" />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Portrait / Identity Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-4 rounded-3xl bg-[var(--glow-portrait)] opacity-40 blur-2xl" />

                <div className="glass-neu-card relative rounded-3xl p-4 sm:p-5 border border-[var(--border-color)] overflow-hidden shadow-2xl">
                  {/* Portrait image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
                    <img
                      src="/Assets/homeKimImage.jpg"
                      alt="Kim Ruds Guston portrait"
                      className="h-full w-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = '/Assets/1by1.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Bottom overlay badge */}
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
                      <div>
                        <p className="font-['Sora',_sans-serif] text-base font-bold text-white">
                          Kim Ruds Guston
                        </p>
                        <p className="font-mono text-xs text-zinc-300">
                          Valenzuela City, Philippines
                        </p>
                      </div>
                      <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-medium uppercase tracking-wider text-white border border-white/20">
                        BSCPE
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-[var(--surface-soft)] p-3 border border-[var(--border-subtle)]">
                      <p className="font-['Sora',_sans-serif] text-base sm:text-lg font-bold text-[var(--text-main)]">
                        5+
                      </p>
                      <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                        Shipped Apps
                      </p>
                    </div>
                    <div className="rounded-xl bg-[var(--surface-soft)] p-3 border border-[var(--border-subtle)]">
                      <p className="font-['Sora',_sans-serif] text-base sm:text-lg font-bold text-[var(--text-main)]">
                        1st
                      </p>
                      <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                        ITLympics
                      </p>
                    </div>
                    <div className="rounded-xl bg-[var(--surface-soft)] p-3 border border-[var(--border-subtle)]">
                      <p className="font-['Sora',_sans-serif] text-base sm:text-lg font-bold text-[var(--text-main)]">
                        4+
                      </p>
                      <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                        Cisco Certs
                      </p>
                    </div>
                  </div>
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
