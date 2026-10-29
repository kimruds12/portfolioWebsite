import { useParams, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { getOjtWeekBySlug } from '../data/OjtExperience';
import OJTDayReflection from './OJTDayReflection';
import { PageBlock } from './PageTransition';

const OJTWeekPage = () => {
  const { monthSlug, weekSlug } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const data = getOjtWeekBySlug(monthSlug, weekSlug);
  const month = data?.month;
  const week = data?.week;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(`/ojt-experience/${monthSlug || 'june'}`);
    }
  };

  if (!month || !week) {
    return (
      <section className="min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center py-20">
          <h2 className="font-['Sora',_sans-serif] text-2xl font-bold text-[var(--text-main)]">
            Week Folder Not Found
          </h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            The requested week folder could not be found.
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

  const days = week.days || [];
  const totalDays = days.length;
  const totalHours = days.reduce((acc, d) => {
    const val = parseInt(d.hours, 10);
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  return (
    <section className="min-h-screen px-4 pt-24 sm:pt-32 pb-16 sm:pb-24 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto w-full max-w-5xl">
        {/* Top Navigation & Back Button (Block 1) */}
        <PageBlock className="ojt-week-nav mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[var(--text-main)] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[var(--text-muted)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            <span>Back to {month.name}</span>
          </button>

          {/* Breadcrumb / Path indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--text-muted)]">
            <span
              onClick={() => navigate('/ojt-experience')}
              className="cursor-pointer hover:text-[var(--text-main)] transition-colors uppercase"
            >
              OJT
            </span>
            <span>/</span>
            <span
              onClick={() => navigate(`/ojt-experience/${month.id}`)}
              className="cursor-pointer hover:text-[var(--text-main)] transition-colors uppercase"
            >
              {month.id}
            </span>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold uppercase">
              {week.id}
            </span>
          </div>
        </PageBlock>

        {/* Week Header Banner (Block 2) */}
        <PageBlock className="ojt-week-banner mb-8 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-4 sm:p-8 shadow-sm backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2">
            <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              // {month.name.toUpperCase()} • {week.name.toUpperCase()}
            </span>

            <span className="rounded-full bg-[var(--surface-soft)] border border-[var(--border-color)] px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[9px] sm:text-xs font-bold text-[var(--text-main)]">
              {totalHours} HOURS LOGGED
            </span>
          </div>

          <h1 className="font-['Sora',_sans-serif] text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-main)] break-words">
            {week.name}: {week.dateRange}
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)]">
            Daily Time Record (DTR) log entries and technical reflections for this week.
          </p>
        </PageBlock>

        {/* Daily DTR Rows Container (Block 3) */}
        <PageBlock className="ojt-week-dtr rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] shadow-lg overflow-hidden backdrop-blur-xl">
          {/* Header Bar */}
          <div className="border-b border-[var(--border-color)] bg-[var(--surface-soft)]/70 px-4 sm:px-6 py-3 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            <span>DTR ENTRIES ({totalDays} DAYS)</span>
          </div>

          {/* Expandable Rows */}
          <div className="divide-y divide-[var(--border-subtle)]">
            {days.map((entry, index) => (
              <OJTDayReflection
                key={`${entry.date}-${index}`}
                entry={entry}
                index={index}
              />
            ))}
          </div>
        </PageBlock>
      </div>
    </section>
  );
};

export default OJTWeekPage;
