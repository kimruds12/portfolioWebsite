import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Helper to sanitize activities into clean array of strings
const formatActivitiesList = (raw) => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (typeof raw === 'string') {
    return raw
      .split('\n')
      .map((line) => line.trim().replace(/^[-•*]\s*/, ''))
      .filter(Boolean);
  }
  return [];
};

const OJTDayReflection = ({ entry, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const slug = entry.date.replace(/\s+/g, '-').toLowerCase();
  const activities = entry.activities ? formatActivitiesList(entry.activities) : [];
  const isZeroHours = entry.hours === '0 Hours' || entry.status === 'No OJT entry recorded';

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full border-b border-[var(--border-subtle)] transition-colors hover:bg-[var(--surface-soft)]/40">
      {/* Row Header - Full width with divider lines */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`day-content-${slug}`}
        className="w-full py-3.5 sm:py-5 px-3 sm:px-4 flex items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] focus-visible:ring-inset"
      >
        {/* Left Side: Index & Date & Day */}
        <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-6 gap-y-1 min-w-0 pr-2">
          <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] font-bold tracking-wider shrink-0 uppercase">
            DAY-{String(index + 1).padStart(2, '0')}
          </span>

          <span className="font-['Sora',_sans-serif] text-xs min-[360px]:text-sm sm:text-base font-bold text-[var(--text-main)] shrink-0">
            {entry.date}
          </span>

          <span className="font-mono text-[11px] sm:text-sm text-[var(--text-muted)] uppercase tracking-wider shrink-0">
            {entry.day}
          </span>
        </div>

        {/* Right Side: Hours/Status + Circular Plus Button */}
        <div className="flex items-center gap-2 sm:gap-5 shrink-0 ml-auto">
          <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] text-right">
            <span className="hidden min-[420px]:inline">{isZeroHours ? 'No OJT entry recorded' : entry.hours || '8 Hours'}</span>
            <span className="min-[420px]:hidden">{isZeroHours ? 'No entry' : entry.hours || '8h'}</span>
          </span>

          <span
            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-sm transition-transform duration-200"
            style={{
              transform: isOpen && !shouldReduceMotion ? 'rotate(45deg)' : 'none',
            }}
            aria-hidden="true"
          >
            <i className="fa-solid fa-plus text-[11px] sm:text-xs" />
          </span>
        </div>
      </button>

      {/* Expanded Reflection Area */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`day-content-${slug}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-3 sm:px-6 pb-6 pt-2">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)]/60 p-3.5 sm:p-6 backdrop-blur-md">
                {/* ── Daily Activities & Tasks (Full Width) ── */}
                <div className="w-full flex flex-col justify-start">
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[var(--border-subtle)]">
                    <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                      <i className="fa-solid fa-list-check text-[10px]" />
                      <span>// DAILY ACTIVITIES & TASKS</span>
                    </span>
                  </div>

                  {/* Clean Content Display Directly from Data */}
                  {activities && activities.length > 0 ? (
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-main)] leading-relaxed list-none">
                      {activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 group/item">
                          <span className="font-mono text-xs text-[var(--text-muted)] shrink-0 select-none mt-0.5">
                            •
                          </span>
                          <span className="text-[var(--text-main)]/90">{act}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="rounded-lg border border-dashed border-[var(--border-color)] p-4 text-center">
                      <p className="text-xs text-[var(--text-muted)] italic">
                        {isZeroHours
                          ? 'No OJT entry recorded for this day.'
                          : 'No activities recorded for this day.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OJTDayReflection;
