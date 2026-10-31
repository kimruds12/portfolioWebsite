import { useParams, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { getOjtMonthBySlug } from '../data/OjtExperience';
import { PageBlock } from './PageTransition';

const OJTMonthPage = () => {
  const { monthSlug } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const month = getOjtMonthBySlug(monthSlug);

  const handleBack = () => {
    navigate('/ojt-experience');
  };

  if (!month) {
    return (
      <section className="min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center py-20">
          <h2 className="font-['Sora',_sans-serif] text-2xl font-bold text-[var(--text-main)]">
            Month Folder Not Found
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            The requested month folder could not be found.
          </p>
          <button
            type="button"
            onClick={() => navigate('/ojt-experience')}
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-6 py-2.5 text-sm font-semibold text-[var(--text-main)] transition hover:bg-[var(--surface-hover)]"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            Back to OJT Experience
          </button>
        </div>
      </section>
    );
  }

  const weeks = month.weeks || [];
  const totalWeeks = weeks.length;
  const totalDays = weeks.reduce((acc, w) => acc + (w.days?.length || 0), 0);

  return (
    <section className="min-h-screen px-4 pt-24 sm:pt-32 pb-16 sm:pb-24 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top Navigation & Back Button (Block 1) */}
        <PageBlock className="ojt-month-nav mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[var(--text-main)] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[var(--text-muted)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            <span>Back to OJT Experience</span>
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--text-muted)]">
            <span
              onClick={() => navigate('/ojt-experience')}
              className="cursor-pointer hover:text-[var(--text-main)] transition-colors uppercase"
            >
              OJT
            </span>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold uppercase">
              {month.id}
            </span>
          </div>
        </PageBlock>

        {/* Month Header Banner (Block 2) */}
        <PageBlock className="ojt-month-banner mb-8 sm:mb-10 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-4 sm:p-8 md:p-10 shadow-sm backdrop-blur-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[var(--text-muted)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2">
              <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                // {month.badge ? `${month.badge} • ` : ''}11FTC ENTERPRISES, INC.
              </span>

              <span className="rounded-full bg-[var(--surface-soft)] border border-[var(--border-color)] px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[9px] sm:text-xs font-bold text-[var(--text-main)]">
                {totalWeeks} WEEKS • {totalDays} ENTRIES
              </span>
            </div>

            <h1 className="font-['Sora',_sans-serif] text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] break-words">
              {month.name}
            </h1>

            <p className="mt-3 w-full max-w-none text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
              {month.description}
            </p>
          </div>
        </PageBlock>

        {/* Week Folders Grid (Block 3) */}
        <PageBlock className="ojt-month-weeks-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeks.map((week, index) => {
            const daysCount = week.days?.length || 0;
            const weekHours = (week.days || []).reduce((acc, d) => {
              const val = parseInt(d.hours, 10);
              return acc + (isNaN(val) ? 0 : val);
            }, 0);

            return (
              <motion.div
                key={week.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => navigate(`/ojt-experience/${month.id}/${week.id}`)}
                className="group relative cursor-pointer pt-3 flex flex-col rounded-2xl"
              >
                {/* Top Folder Tab - Black/White Theme Consistent */}
                <div className="absolute top-0 left-4 z-10">
                  <div className="h-2.5 w-16 rounded-t-lg bg-[var(--text-main)] opacity-85 transition-transform duration-200 group-hover:-translate-y-0.5" />
                </div>

                {/* Main Folder Body Card */}
                <div className="photo-card-skew relative w-full rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--text-muted)] group-hover:shadow-xl backdrop-blur-xl flex flex-col justify-between min-h-[200px]">
                  {/* Top row: Folder icon + Week name */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--text-main)] border border-[var(--border-color)] shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <i className="fa-solid fa-folder text-base" />
                      </div>

                      <span className="font-['Sora',_sans-serif] text-sm sm:text-base font-bold tracking-tight text-[var(--text-main)] uppercase">
                        {week.name}
                      </span>
                    </div>

                    <p className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-main)]">
                      {week.dateRange}
                    </p>

                    <p className="mt-1 font-mono text-[11px] text-[var(--text-muted)]">
                      {daysCount} {daysCount === 1 ? 'Entry' : 'Entries'} • {weekHours} Hours
                    </p>
                  </div>

                  {/* Bottom row: Action */}
                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-2">
                      <span>OPEN</span>
                      <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
                    </span>

                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {month.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </PageBlock>
      </div>
    </section>
  );
};

export default OJTMonthPage;
