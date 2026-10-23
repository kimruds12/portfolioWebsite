import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { getAllOjtMonths, internshipOverviewSections } from '../data/ojtDtr';

const OJTExperiencePage = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const months = getAllOjtMonths();
  const [openReflections, setOpenReflections] = useState({});
  const [openOverviewSections, setOpenOverviewSections] = useState({});

  const toggleOverviewSection = (id) => {
    setOpenOverviewSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleReflection = (id) => {
    setOpenReflections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/about?record=11ftc#credentials');
    }
  };

  const ordinalTitles = [
    '1st Month OJT Experience',
    '2nd Month OJT Experience',
    '3rd Month OJT Experience',
    '4th Month OJT Experience',
  ];

  return (
    <section className="min-h-screen px-4 pt-24 sm:pt-32 pb-16 sm:pb-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto w-full max-w-5xl">
        {/* Top Back Navigation Bar */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[var(--text-main)] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[var(--text-muted)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
          >
            <i className="fa-solid fa-arrow-left text-xs" />
            <span>Back to Work Experience</span>
          </button>

          <span className="font-mono text-[11px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider break-words">
            11FTC ENTERPRISES, INC. // OJT DTR FOLDER FLOW
          </span>
        </div>

        {/* Hero Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] px-3.5 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-main)] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--text-main)]">
              Host Training Establishment
            </span>
          </div>

          <h1 className="font-['Sora',_sans-serif] text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] break-words">
            11FTC Enterprises, Inc.
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            11 FTC is the leading Retail Marketing Solutions company in the Philippines with 30 years of industry experience, providing unique value to its clients by offering a comprehensive scope of services across all touchpoints in the consumer journey.
          </p>
        </motion.div>

        {/* ── 3 Overview Accordion Rows: Top & Bottom Borders Only (Roles, Technologies, Skills) ── */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 max-w-4xl mx-auto border-y border-[var(--border-color)] divide-y divide-[var(--border-subtle)]"
        >
          {internshipOverviewSections.map((section) => {
            const isOpen = Boolean(openOverviewSections[section.id]);

            return (
              <div
                key={section.id}
                className="transition-colors hover:bg-[var(--surface-soft)]/40"
              >
                {/* Row Header Button */}
                <button
                  type="button"
                  onClick={() => toggleOverviewSection(section.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 px-3 sm:px-6 flex items-center justify-between text-left gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
                >
                  {/* Left Side: Tag + Title + Subtitle */}
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0 pr-2">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[var(--text-muted)] shrink-0">
                      {section.tag}
                    </span>

                    <div className="flex flex-col">
                      <span className="font-['Sora',_sans-serif] text-base sm:text-lg font-bold text-[var(--text-main)] leading-snug">
                        {section.title}
                      </span>
                      {section.subtitle && (
                        <span className="font-mono text-[10px] sm:text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5 hidden sm:block">
                          {section.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Circular Dropdown Arrow */}
                  <span
                    className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-sm transition-all duration-300 hover:border-[var(--text-main)]"
                    aria-hidden="true"
                  >
                    <i
                      className={`fa-solid fa-chevron-down text-xs sm:text-sm text-[var(--text-main)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </span>
                </button>

                {/* Expanded Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-6 pb-6 pt-1">
                        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-soft)]/50 p-4 sm:p-6 backdrop-blur-md space-y-4">
                          {/* ── Section 02: 4 Tool Groups in 2 Rows x 2 Columns with Check Circles (Image 2 Style) ── */}
                          {section.toolGroups && section.toolGroups.length > 0 && (
                            <div className="pt-3 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                              {section.toolGroups.map((group, gIdx) => (
                                <div
                                  key={gIdx}
                                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)]/80 p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-colors hover:border-[var(--text-muted)]"
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--border-subtle)]">
                                      <h4 className="font-['Sora',_sans-serif] text-xs sm:text-sm font-bold text-[var(--text-main)] uppercase tracking-wider">
                                        {group.category}
                                      </h4>
                                      <span className="font-mono text-[10px] text-[var(--text-muted)] font-bold">
                                        0{gIdx + 1}
                                      </span>
                                    </div>

                                    <ul className="space-y-2.5 list-none">
                                      {group.items.map((item, iIdx) => (
                                        <li key={iIdx} className="flex items-center gap-2.5 group/item">
                                          <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] text-[var(--text-main)] shrink-0 transition-colors group-hover/item:border-[var(--text-main)] shadow-2xs">
                                            <svg
                                              className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-current"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              strokeWidth="2.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                          </span>
                                          <span className="text-xs sm:text-sm text-[var(--text-main)] font-medium leading-tight">
                                            {item}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* ── Section 03: Skills & Competencies with Underlines & Hoverable Running Lines (Image 3 Style) ── */}
                          {section.skills && section.skills.length > 0 && (
                            <div className="pt-3 border-t border-[var(--border-subtle)] space-y-5">
                              {/* Inline Tags Row (Exact Image 3 Layout with Running Underline Effect) */}
                              <div>
                                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
                                  {section.skills.map((skill, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="group/tag relative pb-1.5 cursor-pointer select-none inline-flex items-center"
                                    >
                                      <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-muted)] transition-colors duration-200 group-hover/tag:text-[var(--text-main)]">
                                        {skill.title}
                                      </span>
                                      {/* Static base divider track */}
                                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--border-color)]" />
                                      {/* Running highlight line like Credentials section */}
                                      <div
                                        className="credential-running-line absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/tag:scale-x-100 pointer-events-none"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Fallback Standard Points (e.g. Section 01: Roles & Responsibilities) */}
                          {!section.toolGroups && !section.skills && section.points && section.points.length > 0 && (
                            <ul className="space-y-2 pt-2 border-t border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)]/90 leading-relaxed list-none">
                              {section.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5">
                                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0 select-none mt-0.5">
                                    •
                                  </span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Four Large Alternating Folder Bands */}
        <div className="space-y-12 sm:space-y-16">
          {months.map((month, index) => {
            const isRightTab = month.tabPosition === 'right';
            const weeksCount = month.weeks?.length || 0;
            const entriesCount = (month.weeks || []).reduce(
              (acc, w) => acc + (w.days?.length || 0),
              0
            );
            const totalMonthHours = (month.weeks || []).reduce((accW, w) => {
              return (
                accW +
                (w.days || []).reduce((accD, d) => {
                  const val = parseInt(d.hours, 10);
                  return accD + (isNaN(val) ? 0 : val);
                }, 0)
              );
            }, 0);

            const displayTitle =
              month.experienceTitle || ordinalTitles[index] || `${index + 1}th Month OJT Experience`;

            const isReflectionOpen = Boolean(openReflections[month.id]);

            return (
              <motion.div
                key={month.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigate(`/ojt-experience/${month.id}`)}
                className="group relative cursor-pointer select-none transition-transform duration-300 hover:-translate-y-1"
              >
                {/* ── Curved Tab Edge (Alternating Left/Right) ── */}
                <div
                  className={`flex w-full ${isRightTab ? 'justify-end pr-4 sm:pr-12' : 'justify-start pl-4 sm:pl-12'
                    }`}
                >
                  <div className="relative z-10 -mb-[1px] px-4 sm:px-8 py-2 sm:py-3 rounded-t-2xl sm:rounded-t-3xl border-t border-x border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-colors group-hover:border-[var(--text-muted)] flex items-center gap-2 backdrop-blur-xl max-w-[85vw] truncate">
                    <i className="fa-solid fa-folder text-xs text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors" />
                    <span className="truncate">{month.name}</span>
                    {/* Seamless junction masking strip covering the card border beneath the tab */}
                    <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-[var(--surface)] pointer-events-none" />
                  </div>
                </div>

                {/* ── Main Full-Width Folder Band ── */}
                <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] p-4 sm:p-8 md:p-10 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:border-[var(--text-muted)] group-hover:shadow-2xl">
                  {/* Subtle Monochrome Ambient Inset */}
                  <div
                    className={`absolute top-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${isRightTab ? 'left-0 bg-[var(--text-muted)]' : 'right-0 bg-[var(--text-muted)]'
                      }`}
                  />

                  <div className="relative z-10 flex flex-col">
                    {/* Top Content: Left-aligned for left folder, Right-aligned for right folder */}
                    <div
                      className={`flex flex-col w-full ${isRightTab ? 'items-end text-right' : 'items-start text-left'
                        }`}
                    >
                      {/* Hours Logged Badge */}
                      <div
                        className={`flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 ${isRightTab ? 'justify-end' : 'justify-start'
                          }`}
                      >
                        {month.badge && (
                          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                            // {month.badge}
                          </span>
                        )}

                        <span className="rounded-full bg-[var(--surface-soft)] border border-[var(--border-color)] px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-semibold text-[var(--text-main)]">
                          {totalMonthHours} HOURS LOGGED
                        </span>
                      </div>

                      {/* Ordinal Title: 1st/2nd/3rd/4th Month OJT Experience */}
                      <h2 className="font-['Sora',_sans-serif] text-xl min-[400px]:text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)] break-words">
                        {displayTitle}
                      </h2>

                      {/* Dropdown for Overall Monthly Reflection */}
                      <div
                        className={`mt-3.5 flex flex-col w-full ${isRightTab ? 'items-end' : 'items-start'
                          }`}
                      >
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReflection(month.id);
                          }}
                          aria-expanded={isReflectionOpen}
                          className="inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 border border-[var(--border-color)] bg-[var(--surface-soft)] text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-main)] transition-all hover:bg-[var(--surface-hover)] hover:border-[var(--text-main)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-main)]"
                        >
                          <span>Overall Reflection</span>
                          <i
                            className={`fa-solid fa-chevron-down text-[10px] text-[var(--text-muted)] transition-transform duration-300 ${isReflectionOpen ? 'rotate-180' : ''
                              }`}
                            aria-hidden="true"
                          />
                        </button>

                        <AnimatePresence>
                          {isReflectionOpen && (
                            <motion.div
                              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden w-full mt-2.5"
                            >
                              <div
                                className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-soft)]/70 p-4 sm:p-6 backdrop-blur-md w-full ${isRightTab ? 'text-right' : 'text-left'
                                  }`}
                              >
                                <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed font-sans">
                                  {month.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Weeks Quick Pill Previews with Hover Effect */}
                      <div
                        className={`mt-5 flex flex-wrap items-center gap-2 ${isRightTab ? 'justify-end' : 'justify-start'
                          }`}
                      >
                        {month.weeks.map((w) => (
                          <span
                            key={w.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ojt-experience/${month.id}/${w.id}`);
                            }}
                            className="group/week inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-3 py-1.5 text-[10px] sm:text-xs font-mono font-medium text-[var(--text-main)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-hover)] hover:border-[var(--text-main)] hover:shadow-sm cursor-pointer"
                            title={`Open ${w.name} (${w.dateRange})`}
                          >
                            <i className="fa-regular fa-folder text-[10px] text-[var(--text-muted)] group-hover/week:text-[var(--text-main)] transition-colors" />
                            <span>{w.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── Bottom Action Row: Lower-Left when Right-Indented, Lower-Right when Left-Indented ── */}
                    <div className="mt-8 pt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                      {isRightTab ? (
                        <>
                          {/* Lower Left Button for right-aligned folder */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ojt-experience/${month.id}`);
                            }}
                            className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-[var(--border-color)] bg-[var(--text-main)] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--surface)] shadow-md transition-all duration-200 group-hover:scale-105 hover:bg-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] order-2 sm:order-1"
                          >
                            <i className="fa-solid fa-arrow-left text-xs" />
                            <span>VIEW FOLDER</span>
                          </button>

                          {/* Lower Right 5 Weeks details for right-aligned folder */}
                          <span className="font-mono text-xs text-[var(--text-muted)] text-center sm:text-right order-1 sm:order-2">
                            {weeksCount} Weeks • {entriesCount} Daily Entries
                          </span>
                        </>
                      ) : (
                        <>
                          {/* Lower Left 5 Weeks details for left-aligned folder */}
                          <span className="font-mono text-xs text-[var(--text-muted)] text-center sm:text-left order-1 sm:order-1">
                            {weeksCount} Weeks • {entriesCount} Daily Entries
                          </span>

                          {/* Lower Right Button for left-aligned folder */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ojt-experience/${month.id}`);
                            }}
                            className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-[var(--border-color)] bg-[var(--text-main)] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--surface)] shadow-md transition-all duration-200 group-hover:scale-105 hover:bg-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] order-2 sm:order-2"
                          >
                            <span>VIEW FOLDER</span>
                            <i className="fa-solid fa-arrow-right text-xs" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OJTExperiencePage;
