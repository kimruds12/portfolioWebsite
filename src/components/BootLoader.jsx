import { motion, AnimatePresence } from 'framer-motion';

const bootParticles = [
  { top: '14%', left: '18%', size: 'h-1.5 w-1.5', delay: '0s', duration: '8s' },
  { top: '22%', left: '82%', size: 'h-2 w-2', delay: '1.5s', duration: '10s' },
  { top: '68%', left: '12%', size: 'h-1.5 w-1.5', delay: '0.8s', duration: '9s' },
  { top: '78%', left: '86%', size: 'h-2 w-2', delay: '2.2s', duration: '11s' },
  { top: '35%', left: '92%', size: 'h-1 w-1', delay: '3s', duration: '7s' },
  { top: '82%', left: '38%', size: 'h-1.5 w-1.5', delay: '1.1s', duration: '8.5s' },
];

/**
 * BootLoader Component
 * System boot opening screen for KimDev portfolio.
 * Renders the KD logo in a circular badge, KimDev. branding,
 * role line, progress bar with SYSTEM_READY status.
 *
 * When `show` is false the component unmounts with a Framer Motion
 * exit animation, then calls `onExitComplete` to finalise cleanup.
 */
export function BootLoader({ show, progress, isReady, onExitComplete }) {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {show && (
        <motion.div
          key="kimdev-boot-screen"
          role="status"
          aria-live="polite"
          aria-label={`Loading KimDev portfolio. ${progress} percent complete.`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050B14] select-none"
        >
          {/* ── Background Layers ── */}
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
            {/* Off-center radial glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.16),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(14,116,144,0.22),transparent_45%)]" />
            {/* Grid lines */}
            <div className="ambient-grid absolute inset-0 opacity-60" />
            {/* Scanlines */}
            <div className="boot-scanlines absolute inset-0 opacity-30 pointer-events-none" />

            {/* Drifting particles */}
            {bootParticles.map((p, idx) => (
              <span
                key={idx}
                className={`floating-particle absolute ${p.size} rounded-full bg-cyan-300/50`}
                style={{
                  top: p.top,
                  left: p.left,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }}
              />
            ))}
          </div>

          {/* ── Content Container ── */}
          <div className="@container relative z-10 w-[calc(100%-2rem)] max-w-[28rem] px-4 py-8 flex flex-col items-center text-center">
            {/* Circular KD Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 sm:mb-8"
            >
              {/* Soft cyan glow behind badge */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-3 rounded-full bg-cyan-400/20 blur-xl"
              />
              {/* Badge */}
              <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-3 shadow-[0_0_35px_rgba(56,189,248,0.28),0_0_70px_rgba(255,255,255,0.15)] ring-2 ring-white/70 sm:h-[112px] sm:w-[112px] sm:p-4">
                <img
                  src="/Assets/KDLogo.jpg"
                  alt="KimDev Monogram Logo"
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
            </motion.div>

            {/* Brand Title: KimDev. */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2"
            >
              <h1 className="font-['Sora',_sans-serif] text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl @md:text-5xl">
                KimDev<span className="text-cyan-400">.</span>
              </h1>
            </motion.div>

            {/* Role line */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 sm:mb-10"
            >
              <p className="font-['Space_Grotesk',_sans-serif] text-[11px] font-semibold tracking-[0.25em] text-[#8EA8C4] uppercase sm:text-xs sm:tracking-[0.3em]">
                FRONT-END DEVELOPER
              </p>
            </motion.div>

            {/* Progress Bar & Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="w-full"
            >
              {/* Progress track */}
              <div
                className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10 sm:h-[3px]"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-white shadow-[0_0_12px_rgba(56,189,248,0.9)] transition-[width] duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status and Percentage Row */}
              <div className="mt-3.5 flex items-center justify-between font-mono text-[11px] sm:text-xs text-[#8EA8C4]">
                <div className="flex items-center gap-1.5 font-semibold tracking-wider">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span className={isReady ? 'text-cyan-300' : 'text-[#A0B8D0]'}>
                    SYSTEM_READY
                  </span>
                </div>

                <div className="font-mono font-semibold tracking-wider text-white">
                  {progress}%
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BootLoader;
