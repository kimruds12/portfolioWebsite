import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const RecordsSplitCarousel = ({
  tabType,
  records,
  selectedIndex,
  onSelectIndex,
}) => {
  const [enlargedCertificate, setEnlargedCertificate] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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

  // Close modal on Escape, left/right keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setEnlargedCertificate(null);
      } else if (e.key === 'ArrowLeft' && !enlargedCertificate) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && !enlargedCertificate) {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [enlargedCertificate, selectedIndex, total]);

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
        setEnlargedCertificate(record);
      }}
      className={`group relative h-full w-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[var(--surface)] border transition-all ${isCenter
          ? 'border-white/30 p-2 sm:p-2.5 shadow-2xl cursor-zoom-in ring-1 ring-white/10'
          : 'border-[var(--border-color)] p-2 shadow-lg cursor-pointer'
        }`}
      title={isCenter ? 'Click to enlarge certificate' : 'Click to select certificate'}
    >
      <div className="relative h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--surface-soft)] flex items-center justify-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">

          {/* ── LEFT COLUMN: 3-Image Layered Carousel Stage (Matching Reference Image 2) ── */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-[340px] sm:min-h-[400px] md:min-h-[440px] relative px-2 sm:px-4">
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] h-[300px] sm:h-[360px] md:h-[400px] flex items-center justify-center select-none">

              {/* 1. PREVIOUS CERTIFICATE IMAGE (-1) - More visible at back matching Image 2 */}
              <motion.div
                key={`left-cert-${records[prevIndex].id}`}
                onClick={handlePrev}
                initial={false}
                animate={{
                  x: '-48%',
                  scale: 0.88,
                  rotate: shouldReduceMotion ? 0 : -7,
                  opacity: 0.88,
                  zIndex: 10,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="absolute w-[240px] sm:w-[300px] md:w-[340px] aspect-[16/11] cursor-pointer hover:opacity-100 transition-all"
              >
                {renderCertificateImageSlide(records[prevIndex], false)}
              </motion.div>

              {/* 2. NEXT CERTIFICATE IMAGE (+1) - More visible at back matching Image 2 */}
              <motion.div
                key={`right-cert-${records[nextIndex].id}`}
                onClick={handleNext}
                initial={false}
                animate={{
                  x: '48%',
                  scale: 0.88,
                  rotate: shouldReduceMotion ? 0 : 7,
                  opacity: 0.88,
                  zIndex: 10,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="absolute w-[240px] sm:w-[300px] md:w-[340px] aspect-[16/11] cursor-pointer hover:opacity-100 transition-all"
              >
                {renderCertificateImageSlide(records[nextIndex], false)}
              </motion.div>

              {/* 3. ACTIVE CENTER CERTIFICATE IMAGE (0) */}
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
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass-neu-card absolute w-[270px] sm:w-[340px] md:w-[390px] aspect-[16/11] shadow-2xl"
              >
                {renderCertificateImageSlide(currentRecord, true)}
              </motion.div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: Selected Record Details ── */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left pl-0 lg:pl-4">
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

              {/* Key Competencies / Technologies */}
              <div className="mt-6">
                <span className="block font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-3">
                  KEY COMPETENCIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {(currentRecord.tags || currentRecord.technologies || []).map((item) => (
                    <span
                      key={item}
                      className="glass-neu-pill rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-main)] shadow-xs transition-colors hover:border-[var(--text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            className="glass-neu-card w-full rounded-[24px] sm:rounded-[28px] border border-[var(--border-color)] bg-[var(--surface)] p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden text-left"
          >
            {/* Top Row: Organization / Category + Badge */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs sm:text-[13px] font-medium text-[var(--text-main)] truncate">
                {currentRecord.organization}
              </span>
              <span className="shrink-0 rounded-lg bg-[var(--surface-soft)] border border-[var(--border-subtle)] px-3 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {currentRecord.badge || (tabType === 'education' ? 'ACADEMIC' : 'EXPERIENCE')}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 font-['Sora',_sans-serif] text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)] leading-snug">
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
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
              {currentRecord.description}
            </p>

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

      {/* ── ENLARGE CERTIFICATE MODAL DIALOG (Reference Image 2) ── */}
      <AnimatePresence>
        {enlargedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setEnlargedCertificate(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarge Certificate"
          >
            {/* Close Button at top-right (Image 2 style) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedCertificate(null);
              }}
              aria-label="Close dialog"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white border border-white/20 backdrop-blur-lg transition-all shadow-xl"
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
              className="relative max-w-5xl max-h-[88vh] w-auto flex flex-col items-center justify-center"
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
      </AnimatePresence>
    </div>
  );
};

export default RecordsSplitCarousel;
