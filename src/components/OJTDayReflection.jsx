import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Helper to sanitize activities into clean array of strings
const formatActivitiesList = (raw) => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (typeof raw === 'string') {
    return raw
      .split('\n')
      .map((line) => line.trim().replace(/^[•\-\*]\s*/, ''))
      .filter(Boolean);
  }
  return [];
};

const OJTDayReflection = ({ entry, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Storage key for persisting user changes per day
  const slug = entry.date.replace(/\s+/g, '-').toLowerCase();
  const activitiesStorageKey = `ojt_activities_${slug}`;

  // Baseline from ojtDtr.js data
  const initialActivities = entry.activities ? formatActivitiesList(entry.activities) : [];

  // State: Activities text & editing
  const [activities, setActivities] = useState(() => {
    try {
      const saved = localStorage.getItem(activitiesStorageKey);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return initialActivities;
  });

  const [isEditingActivities, setIsEditingActivities] = useState(false);
  const [activityDraft, setActivityDraft] = useState('');
  const [saveToast, setSaveToast] = useState('');

  // Synchronize if entry props change and no localStorage override exists
  useEffect(() => {
    if (!localStorage.getItem(activitiesStorageKey) && entry.activities) {
      setActivities(formatActivitiesList(entry.activities));
    }
  }, [entry, activitiesStorageKey]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Handle Edit Activities
  const handleStartEdit = () => {
    setActivityDraft(activities.join('\n'));
    setIsEditingActivities(true);
  };

  const handleSaveActivities = () => {
    const parsed = formatActivitiesList(activityDraft);
    setActivities(parsed);
    try {
      localStorage.setItem(activitiesStorageKey, JSON.stringify(parsed));
    } catch {
      // Ignore storage errors
    }
    setIsEditingActivities(false);
    triggerToast('Activities saved');
  };

  const handleResetActivities = () => {
    try {
      localStorage.removeItem(activitiesStorageKey);
    } catch {
      // Ignore
    }
    setActivities(initialActivities);
    setActivityDraft(initialActivities.join('\n'));
    setIsEditingActivities(false);
    triggerToast('Reset to default');
  };

  const triggerToast = (msg) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(''), 2500);
  };

  const isZeroHours = entry.hours === '0 Hours' || entry.status === 'No OJT entry recorded';

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
                
                {/* Notification toast */}
                {saveToast && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[var(--text-main)] px-3 py-1.5 font-mono text-[11px] font-semibold text-[var(--surface)] shadow-md">
                    <i className="fa-solid fa-check text-[10px]" />
                    <span>{saveToast}</span>
                  </div>
                )}

                {/* ── Daily Activities & Tasks (Full Width) ── */}
                <div className="w-full flex flex-col justify-start">
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[var(--border-subtle)]">
                    <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                      <i className="fa-solid fa-list-check text-[10px]" />
                      <span>// DAILY ACTIVITIES & TASKS</span>
                    </span>

                    {/* Edit Button */}
                    {!isEditingActivities ? (
                      <button
                        type="button"
                        onClick={handleStartEdit}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-2.5 py-1 text-[10px] font-mono font-medium text-[var(--text-main)] transition-colors hover:bg-[var(--surface-hover)] hover:border-[var(--text-main)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-main)]"
                        title="Click to edit activities text for this day"
                      >
                        <i className="fa-solid fa-pen-to-square text-[9px]" />
                        <span>Edit Text</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleResetActivities}
                          className="text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] underline transition-colors"
                        >
                          Reset
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditingActivities(false)}
                          className="text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content: Edit Mode or View Mode */}
                  {isEditingActivities ? (
                    <div className="space-y-3">
                      <div className="relative">
                        <textarea
                          value={activityDraft}
                          onChange={(e) => setActivityDraft(e.target.value)}
                          placeholder="Enter daily activities (one task per line)..."
                          rows={8}
                          className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-3.5 font-sans text-xs sm:text-sm text-[var(--text-main)] leading-relaxed placeholder:text-[var(--text-muted)]/50 focus:border-[var(--text-main)] focus:outline-none focus:ring-1 focus:ring-[var(--text-main)] transition-all"
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          Tip: Put each activity on a new line. You can also configure directly in <span className="text-[var(--text-main)] font-semibold">ojtDtr.js</span>.
                        </span>

                        <button
                          type="button"
                          onClick={handleSaveActivities}
                          className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-main)] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--surface)] shadow-md transition-all hover:bg-[var(--text-muted)]"
                        >
                          <i className="fa-solid fa-check text-[10px]" />
                          <span>Save Activities</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
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
                              : 'No activities configured yet. Click "Edit Text" or update ojtDtr.js.'}
                          </p>
                        </div>
                      )}
                    </>
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
