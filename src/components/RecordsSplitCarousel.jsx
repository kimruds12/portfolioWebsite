import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RecordsSplitCarousel = ({
  tabType,
  records,
  selectedIndex,
  onSelectIndex,
}) => {
  const [enlargedCertificate, setEnlargedCertificate] = useState(null);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const closeDialogRef = useRef(null);
  const returnFocusRef = useRef(null);

  const total = records.length;
  const currentRecord = records[selectedIndex] || records[0];

  const prevIndex = (selectedIndex - 1 + total) % total;
  const nextIndex = (selectedIndex + 1) % total;

  const handleNext = () => {
    onSelectIndex((selectedIndex + 1) % total);
  };

  const handlePrev = () => {
    onSelectIndex((selectedIndex - 1 + total) % total);
  };

  const openCertificate = (record, trigger) => {
    returnFocusRef.current = trigger || document.activeElement;
    setEnlargedCertificate(record);
  };

  const closeCertificate = () => {
    setEnlargedCertificate(null);
  };

  // Close modal on Escape, left/right keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        closeCertificate();
      } else if (e.key === 'ArrowLeft' && !enlargedCertificate) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && !enlargedCertificate) {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [enlargedCertificate, selectedIndex, total]);

  // Lock background scroll when modal is active, focus close button
  useEffect(() => {
    if (!enlargedCertificate) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => closeDialogRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus?.();
    };
  }, [enlargedCertificate]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const isCredentialsTab = tabType === 'credentials';

  // Pure Certificate Image Slide - focused entirely on showcasing the certificate artwork
  const renderCertificateImageSlide = (record, isCenter = false) => (
    <div
      {...(isCenter ? { 'data-cursor': 'zoom' } : {})}
      onClick={(e) => {
        if (!isCenter) return; // Disallow enlarging non-centered certificate
        e.stopPropagation();
        openCertificate(record, e.currentTarget);
      }}
      className={`group relative h-full w-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[var(--surface)] border transition-all ${isCenter
          ? 'border-white/30 p-2 sm:p-2.5 shadow-2xl cursor-zoom-in ring-1 ring-white/10'
          : 'border-[var(--border-color)] p-2 shadow-lg cursor-pointer hover:border-white/30'
        }`}
      title={isCenter ? 'Click to enlarge certificate' : 'Click to view certificate'}
    >
      <div className="relative h-full w-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[var(--surface-soft)] flex items-center justify-center">
        <img
          src={record.image}
          alt={record.imageAlt || record.title}
          loading={isCenter ? 'eager' : 'lazy'}
          className={`h-full w-full object-contain transition-transform duration-300 ${isCenter ? 'group-hover:scale-105' : ''
            }`}
        />

        {/* Hover Enlarge Overlay Badge ONLY for the center image */}
        {isCenter && (
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/25 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-mono font-bold text-white border border-white/40 shadow-xl">
              <i className="fa-solid fa-plus text-xs" />
              <span>Enlarge Certificate</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="w-full focus-visible:outline-none"
      tabIndex={0}
      aria-label={`${currentRecord.title} details`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isCredentialsTab ? (
        /* ── Split Layout for Certificates & Honors (Pure Image Carousel on Left) ── */
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── LEFT COLUMN: Three-certificate layered stage ── */}
          <div className="min-w-0 flex items-center justify-center min-h-[280px] xs:min-h-[340px] sm:min-h-[450px] md:min-h-[500px] relative px-2 sm:px-4 lg:pr-6 overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[620px] h-[250px] xs:h-[310px] sm:h-[410px] md:h-[450px] flex items-center justify-center select-none">

              {/* 1. PREVIOUS CERTIFICATE IMAGE (-1) */}
              <motion.div
                key={`left-cert-${records[prevIndex].id}`}
                onClick={handlePrev}
                initial={false}
                animate={{
                  x: '-50%',
                  scale: 0.88,
                  rotate: shouldReduceMotion ? 0 : -6,
                  opacity: 0.78,
                  zIndex: 10,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="hidden min-[480px]:block absolute w-[220px] sm:w-[290px] md:w-[330px] aspect-[16/11] rounded-[22px] sm:rounded-[26px] overflow-hidden select-none cursor-pointer hover:opacity-100 transition-all"
              >
                {renderCertificateImageSlide(records[prevIndex], false)}
              </motion.div>

              {/* 2. NEXT CERTIFICATE IMAGE (+1) */}
              <motion.div
                key={`right-cert-${records[nextIndex].id}`}
                onClick={handleNext}
                initial={false}
                animate={{
                  x: '50%',
                  scale: 0.88,
                  rotate: shouldReduceMotion ? 0 : 6,
                  opacity: 0.78,
                  zIndex: 10,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="hidden min-[480px]:block absolute w-[220px] sm:w-[290px] md:w-[330px] aspect-[16/11] rounded-[22px] sm:rounded-[26px] overflow-hidden select-none cursor-pointer hover:opacity-100 transition-all"
              >
                {renderCertificateImageSlide(records[nextIndex], false)}
              </motion.div>

              {/* 3. ACTIVE CENTER CERTIFICATE IMAGE */}
              <motion.div
                key={`active-cert-${currentRecord.id}`}
                initial={{ scale: 0.94, opacity: 0.85 }}
                animate={{
                  x: '0%',
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                  zIndex: 25,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[84vw] max-w-[270px] sm:max-w-[340px] md:max-w-[380px] aspect-[16/11] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-2xl"
              >
                {renderCertificateImageSlide(currentRecord, true)}
              </motion.div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: Selected Record Details ── */}
          <div className="min-w-0 flex flex-col justify-center text-left">
            <motion.div
              key={`details-${currentRecord.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top row: Organization or category + Date */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)] mb-3">
                <span className="font-semibold uppercase tracking-wider text-[var(--text-main)]">
                  {currentRecord.organization}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <i className="fa-regular fa-calendar text-[11px]" />
                  <span>{currentRecord.date || currentRecord.period}</span>
                </div>
              </div>

              {/* Record Title */}
              <h3 className="font-['Sora',_sans-serif] text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[var(--text-main)] leading-snug">
                {currentRecord.title}
              </h3>

              {/* Short Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                {currentRecord.description}
              </p>

              {/* Key Competencies / Tags in clean two-column line layout */}
              <div className="mt-6">
                <span className="block font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2.5">
                  KEY COMPETENCIES
                </span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {(currentRecord.tags || currentRecord.technologies || []).slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] truncate"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="relative w-full h-[1px] mt-4 bg-[var(--border-color)]" />
              </div>
            </motion.div>
          </div>

        </div>
      ) : (
        /* ── Clean Single Card Layout for Work Experience & Education (Reference Image 4) ── */
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            key={`card-${currentRecord.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-neu-card w-full rounded-2xl sm:rounded-[28px] border border-[var(--border-color)] bg-[var(--surface)] p-4 sm:p-8 md:p-10 shadow-xl relative overflow-hidden text-left"
          >
            {/* Top Row: Organization / Category + Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs sm:text-[13px] font-medium text-[var(--text-main)] truncate max-w-[190px] min-[400px]:max-w-none">
                {currentRecord.organization}
              </span>
              <span className="shrink-0 rounded-lg bg-[var(--surface-soft)] border border-[var(--border-subtle)] px-2.5 sm:px-3 py-1 font-mono text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {currentRecord.badge || (tabType === 'education' ? 'ACADEMIC' : 'EXPERIENCE')}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 font-['Sora',_sans-serif] text-xl min-[400px]:text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)] leading-snug break-words">
              {currentRecord.title}
            </h3>

            {/* Meta: Date & Location */}
            <div className="mt-2.5 mb-5 flex flex-wrap items-center gap-4 font-mono text-xs sm:text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <i className="fa-regular fa-calendar text-xs" />
                <span>{currentRecord.period || currentRecord.date}</span>
              </div>
              {currentRecord.location && (
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot text-xs" />
                  <span>{currentRecord.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {currentRecord.description && (
              <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                {currentRecord.description}
              </p>
            )}

            {/* Recognition and Honors */}
            {currentRecord.honors && (
              <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-xs sm:text-sm">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] shrink-0">
                  Recognition and Honors:
                </span>
                <span className="font-semibold text-[var(--text-main)]">
                  {currentRecord.honors}
                </span>
              </div>
            )}

            {currentRecord.id === 'work-11ftc' && (
              <button
                type="button"
                onClick={() => navigate('/ojt-experience')}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--text-main)] px-5 py-2.5 text-sm font-semibold text-[var(--surface)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]"
              >
                See OJT Experience
                <i className="fa-solid fa-arrow-right text-xs" />
              </button>
            )}

            {/* Subtle Divider Line */}
            <div className="my-6 border-t border-[var(--border-subtle)]" />

            {/* Bottom row: CORE TECHNOLOGIES / CORE COMPETENCIES */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-mono">
              <span className="font-bold tracking-wider text-[var(--text-main)] uppercase shrink-0">
                {tabType === 'education' ? 'CORE COMPETENCIES:' : 'CORE TECHNOLOGIES:'}
              </span>
              <span className="text-[var(--text-muted)]">
                {(currentRecord.technologies || currentRecord.tags || []).join(' • ')}
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── BOTTOM CAROUSEL CONTROLS ── */}
      <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Show previous record"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-sm hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] active:scale-95 transition-all min-w-[44px] min-h-[44px]"
        >
          <i className="fa-solid fa-chevron-left text-xs" />
        </button>

        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          {records.map((rec, idx) => {
            const isActive = selectedIndex === idx;
            return (
              <button
                key={rec.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                aria-label={`Show record ${idx + 1} of ${total}`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${isActive
                  ? 'w-7 sm:w-8 bg-[var(--text-main)]'
                  : 'w-2 bg-[var(--border-color)] hover:bg-[var(--text-muted)]'
                  }`}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Show next record"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-sm hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] active:scale-95 transition-all min-w-[44px] min-h-[44px]"
        >
          <i className="fa-solid fa-chevron-right text-xs" />
        </button>
      </div>

      {/* ── ENLARGE CERTIFICATE MODAL DIALOG (Portalled to document.body) ── */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {enlargedCertificate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeCertificate}
                className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md select-none"
                role="dialog"
                aria-modal="true"
                aria-label="Enlarge Certificate"
              >
                {/* Close Button at top-right with high z-index and explicit click handler */}
                <button
                  type="button"
                  ref={closeDialogRef}
                  onClick={(e) => {
                    e.stopPropagation();
                    closeCertificate();
                  }}
                  aria-label="Close dialog"
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[1000000] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white border border-white/20 backdrop-blur-lg transition-all shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>

                {/* Enlarged Certificate Container */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-5xl max-h-[88vh] w-auto flex flex-col items-center justify-center cursor-default"
                >
                  <img
                    src={enlargedCertificate.image}
                    alt={enlargedCertificate.imageAlt || enlargedCertificate.title}
                    className="max-h-[82vh] max-w-full object-contain rounded-2xl border border-white/20 shadow-2xl bg-black/40"
                  />
                  <p className="mt-3 font-mono text-xs sm:text-sm text-zinc-300 text-center tracking-wide">
                    {enlargedCertificate.title}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default RecordsSplitCarousel;
