import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const credentialsRecords = [
  {
    id: 'umak',
    typeLabel: '',
    badge: 'UMAK IT SKILLS OLYMPICS',
    organization: 'University of Makati',
    title: '14th UMAK IT Skills Olympics 2025',
    date: 'November 2025',
    image: '/Assets/itlympicsid.png',
    imageAlt: 'UMAK 14th IT Skills Olympics Certificate',
    description:
      'Demonstrated advanced technical proficiency and problem-solving skills against top peers in a rigorous competitive environment, engineering accessible front-end solutions under time pressure.',
    tags: ['Web Engineering', 'Rapid Prototype', 'Component Arch', 'Figma Design'],
  },
  {
    id: 'itlympics',
    typeLabel: '',
    badge: 'WEB DESIGN COMPETITION',
    organization: 'National IT Skills Championship',
    title: 'PLV ITlympics 2025: Web Design Competition',
    date: 'April 2025',
    image: '/Assets/latestwebdesigncert.png',
    imageAlt: 'ITLympics 2025 Web Design Champion Certificate',
    description:
      'Awarded first place in web design for creating an innovative, highly responsive, and accessible interface under strict time constraints. Recognized for clean code architecture, modern aesthetic execution, and performance.',
    tags: ['Web Design', 'UI Wireframing', 'Responsive UI', 'Architecture'],
  },
  {
    id: 'cisco-addressing',
    typeLabel: '',
    badge: 'CISCO CERTIFICATION',
    organization: 'Cisco Networking Academy',
    title: 'Cisco Network Technician Career Path',
    date: 'May 2025',
    image: '/Assets/Image_Network Addressing.png',
    imageAlt: 'Cisco Networking Academy Certified Network Addressing Certificate',
    description:
      'Certified proficiency across IPv4 and IPv6 subnetting architecture, VLSM design, host troubleshooting, and diagnostic protocols across enterprise networks.',
    tags: ['Basics', 'Devices', 'Addressing', 'Security'],
  },
  {
    id: 'cisco-basics',
    typeLabel: '',
    badge: 'CISCO FOUNDATIONS',
    organization: 'Cisco Networking Academy',
    title: 'Cisco Networking Basics & Topologies',
    date: 'May 2025',
    image: '/Assets/Image_Network Basics.png',
    imageAlt: 'Cisco Networking Basics & Topologies Certificate',
    description:
      'Mastered core networking fundamentals including the OSI model, TCP/IP protocol suite, ethernet frame structures, and enterprise network topology design.',
    tags: ['Topologies', 'OSI Model', 'Ethernet', 'IP Protocols'],
  },
  {
    id: 'cisco-devices',
    typeLabel: '',
    badge: 'CISCO INFRASTRUCTURE',
    organization: 'Cisco Networking Academy',
    title: 'Cisco Networking Devices Configuration',
    date: 'May 2025',
    image: '/Assets/Image_Network Devices.png',
    imageAlt: 'Cisco Networking Devices Configuration Certificate',
    description:
      'Hands-on configuration of Cisco switches and routers, VLAN segmentation, inter-VLAN routing protocols, and secure administrative device hardening.',
    tags: ['Cisco IOS', 'Switch Config', 'Router Config', 'VLAN Design'],
  },
];

const CredentialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [enlargedCertificate, setEnlargedCertificate] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const closeDialogRef = useRef(null);
  const returnFocusRef = useRef(null);

  const total = credentialsRecords.length; // 5 cards

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 5 visible indices
  const prev2Index = (activeIndex - 2 + total) % total;
  const prev1Index = (activeIndex - 1 + total) % total;
  const next1Index = (activeIndex + 1) % total;
  const next2Index = (activeIndex + 2) % total;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const openCertificate = (record, trigger) => {
    returnFocusRef.current = trigger || document.activeElement;
    setEnlargedCertificate(record);
  };

  const closeCertificate = () => {
    setEnlargedCertificate(null);
  };

  // Close modal on Escape, arrow navigation
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
  }, [enlargedCertificate, handleNext, handlePrev]);

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
  }, [enlargedCertificate, handleNext, handlePrev]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeRecord = credentialsRecords[activeIndex];
  const prev1Record = credentialsRecords[prev1Index];
  const prev2Record = credentialsRecords[prev2Index];
  const next1Record = credentialsRecords[next1Index];
  const next2Record = credentialsRecords[next2Index];

  // Responsive offsets calibrated to guarantee clean 30-40px clearance from navigation arrows
  const isDesktop = windowWidth >= 1150;
  const isTablet = windowWidth >= 640 && windowWidth < 1150;

  const farOffset = isDesktop ? '112%' : isTablet ? '96%' : '80%';
  const nearOffset = isDesktop ? '58%' : isTablet ? '50%' : '40%';



  // ── Sub-component: Individual credential tag with smooth generating line on hover ──
  const CredentialTagItem = ({
    label,
    isCenterCard,
    shouldReduceMotion,
    className = '',
    itemRecord,
    onOpenCertificate,
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleOpenCertificate = (event) => {
      if (!isCenterCard) return;
      event.stopPropagation();
      onOpenCertificate?.(itemRecord, event.currentTarget);
    };

    return (
      <div
        onMouseEnter={() => isCenterCard && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative min-w-0 pb-2 select-none ${className}`}
      >
        {isCenterCard ? (
          <button
            type="button"
            onClick={handleOpenCertificate}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="credential-tag-button"
            aria-label={`View ${itemRecord?.title || 'certificate'} certificate for ${label}`}
          >
            <span
              className={`truncate font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 credential-tag-text ${
                isHovered ? 'credential-tag-text-hover' : ''
              }`}
            >
              {label}
            </span>

            <i
              className={`fa-solid fa-arrow-right shrink-0 text-[10px] transition-all duration-200 credential-tag-arrow ${
                isHovered ? 'credential-tag-arrow-hover translate-x-0.5' : ''
              }`}
              aria-hidden="true"
            />
          </button>
        ) : (
          <div className="flex items-center justify-between gap-2 w-full">
            <span className="truncate font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider credential-tag-text">
              {label}
            </span>

            <i
              className="fa-solid fa-arrow-right shrink-0 text-[10px] credential-tag-arrow"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Static base divider track */}
        <div className="credential-tag-track absolute bottom-0 left-0 right-0 h-[1px]" />

        {/* Smooth generating line highlight running from left to right */}
        <div
          className="credential-running-line absolute bottom-0 left-0 h-[1.5px] sm:h-[2px] w-full origin-left pointer-events-none"
          style={{
            transformOrigin: 'left',
            transform: shouldReduceMotion ? 'none' : isHovered ? 'scaleX(1)' : 'scaleX(0)',
            opacity: isHovered ? 1 : 0,
            transition: 'transform 340ms cubic-bezier(0.16, 1, 0.3, 1), opacity 240ms ease-out',
          }}
        />
      </div>
    );
  };

  // ── Lower Action Area: 2-Column Lines + Centered VIEW CERTIFICATE ──
  const CredentialCardActionArea = ({ record: itemRecord, isCenter: isCenterCard, onOpenCertificate }) => {
    const shouldReduceMotion = useReducedMotion();
    const tags = itemRecord.tags || [];

    const handleActionClick = (e) => {
      if (!isCenterCard) return;
      e.stopPropagation();
      onOpenCertificate(itemRecord, e.currentTarget);
    };

    return (
      <div className="w-full flex flex-col justify-end select-none mt-auto">
        {/* Two-column credential tags with animated generating line on hover */}
        <div className="my-2.5 sm:my-3 w-full">
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
            {/* Left column */}
            <div className="min-w-0 flex flex-col">
              <CredentialTagItem
                label={tags[0] || 'BASICS'}
                isCenterCard={isCenterCard}
                shouldReduceMotion={shouldReduceMotion}
                itemRecord={itemRecord}
                onOpenCertificate={onOpenCertificate}
              />
              <CredentialTagItem
                label={tags[2] || 'ADDRESSING'}
                isCenterCard={isCenterCard}
                shouldReduceMotion={shouldReduceMotion}
                itemRecord={itemRecord}
                onOpenCertificate={onOpenCertificate}
                className="mt-2.5"
              />
            </div>

            {/* Right column */}
            <div className="min-w-0 flex flex-col">
              <CredentialTagItem
                label={tags[1] || 'DEVICES'}
                isCenterCard={isCenterCard}
                shouldReduceMotion={shouldReduceMotion}
                itemRecord={itemRecord}
                onOpenCertificate={onOpenCertificate}
              />
              <CredentialTagItem
                label={tags[3] || 'SECURITY'}
                isCenterCard={isCenterCard}
                shouldReduceMotion={shouldReduceMotion}
                itemRecord={itemRecord}
                onOpenCertificate={onOpenCertificate}
                className="mt-2.5"
              />
            </div>
          </div>
        </div>

        {/* Clean, static subtle divider line separating tags from VIEW CERTIFICATE */}
        <div className="credential-tag-track w-full h-[1px] my-1 sm:my-1.5" />

        {/* Centered VIEW CERTIFICATE Action */}
        <div className="flex items-center justify-center pt-1 pb-0.5">
          {isCenterCard ? (
            <button
              type="button"
              onClick={handleActionClick}
              className="credential-view-cert-btn w-full py-1.5 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current rounded cursor-pointer"
            >
              <span>VIEW CERTIFICATE</span>
            </button>
          ) : (
            <span className="credential-view-cert-btn w-full py-1.5 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-60 cursor-pointer">
              <span>VIEW CERTIFICATE</span>
            </span>
          )}
        </div>
      </div>
    );
  };

  // Helper to render the structured card matching Reference Image 3
  const renderCardContent = (record, isCenter = false) => (
    <div className="flex flex-col justify-between h-full w-full">
      {/* Top Header: Eyebrow */}
      <div>
        <div className="flex items-center justify-end mb-1 sm:mb-1.5">
          <span className="credential-card-eyebrow font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">
            // {record.badge || 'CERTIFICATION'}
          </span>
        </div>

        {/* Title */}
        <h3 className="credential-card-title font-['Sora',_sans-serif] text-xs sm:text-sm md:text-base font-bold tracking-tight line-clamp-2 leading-snug">
          {record.title}
        </h3>

        {/* Certificate Image Preview - ONLY center card is expandable */}
        <div
          {...(isCenter ? { 'data-cursor': 'zoom' } : {})}
          onClick={(e) => {
            if (!isCenter) return; // Prevent enlarging side cards
            e.stopPropagation();
            openCertificate(record, e.currentTarget);
          }}
          className={`credential-card-preview group relative mt-2 mb-1 aspect-[16/10] w-full rounded-xl overflow-hidden border flex items-center justify-center p-1.5 shadow-inner transition-all ${isCenter ? 'cursor-zoom-in' : 'cursor-pointer'
            }`}
          title={isCenter ? 'Click to enlarge certificate' : 'Click to select credential'}
        >
          <img
            src={record.image}
            alt={record.imageAlt || record.title}
            loading={isCenter ? 'eager' : 'lazy'}
            className={`h-full w-full object-contain transition-transform duration-300 ${isCenter ? 'group-hover:scale-105' : ''
              }`}
          />
          {/* Hover Enlarge Badge ONLY on Center Card */}
          {isCenter && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/25 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] font-mono font-bold text-white border border-white/40 shadow-xl">
                <i className="fa-solid fa-plus text-xs" />
                <span>Enlarge Certificate</span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Lower Action Area: 2x2 Tag Pills + VIEW CERTIFICATE */}
      <CredentialCardActionArea
        record={record}
        isCenter={isCenter}
        onOpenCertificate={openCertificate}
      />
    </div>
  );

  return (
    <section
      id="credentials-preview"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Credentials and Achievements preview"
    >
      <div className="mx-auto w-full max-w-7xl relative z-10">

        {/* Section Heading matching Reference Image 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="glint-headline mt-2 font-['Sora',_sans-serif] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold tracking-tight uppercase select-none">
            <span className="glint-headline-base">Achievements &amp; Credentials</span>
            <span className="glint-headline-band" aria-hidden="true">Achievements &amp; Credentials</span>
          </h2>
          <p className="mt-2 max-w-lg mx-auto text-xs sm:text-sm text-[var(--text-muted)]">
            A collection of certifications, achievements, and technical accomplishments that reflect continuous learning and skill development. Click the side cards, use the arrows, or swipe to explore the collection.
          </p>
        </motion.div>

        {/* 5-Card Layered Panoramic Carousel Stage */}
        <div
          className="relative w-full flex items-center justify-center select-none"
          style={{ isolation: 'isolate' }}
        >
          {/* Arrow Buttons - overflow: visible, z-40 */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Show previous credential"
            className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] active:scale-95 min-w-[44px] min-h-[44px]"
          >
            <i className="fa-solid fa-chevron-left text-xs sm:text-sm" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Show next credential"
            className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] active:scale-95 min-w-[44px] min-h-[44px]"
          >
            <i className="fa-solid fa-chevron-right text-xs sm:text-sm" />
          </button>

          {/* Carousel Stage - clean margin aligned with subtext, overflow: clip, back cards visible and clickable */}
          <div
            className="relative w-full max-w-[calc(100vw-32px)] sm:max-w-[1180px] h-[435px] sm:h-[470px] md:h-[490px] flex items-center justify-center overflow-clip mx-auto rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* The 5 Cards Stack Container */}
            <div className="relative w-full h-full flex items-center justify-center">

              {/* ── 1. FAR-LEFT CARD (-2) ── */}
              <motion.div
                key={`prev2-${prev2Record.id}`}
                onClick={() => setActiveIndex(prev2Index)}
                initial={false}
                animate={{
                  x: `-${farOffset}`,
                  scale: 0.82,
                  rotate: shouldReduceMotion ? 0 : -3.5,
                  opacity: 0.55,
                  zIndex: 12,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="hidden md:flex absolute w-[240px] xs:w-[270px] sm:w-[305px] md:w-[325px] lg:w-[340px] max-w-[calc(100vw-5rem)] h-[385px] sm:h-[415px] md:h-[435px] cursor-pointer rounded-[24px] sm:rounded-[28px] credential-card-side p-4 sm:p-5 shadow-xl overflow-hidden pointer-events-auto hover:opacity-80 transition-opacity flex-col justify-between"
              >
                {renderCardContent(prev2Record, false)}
              </motion.div>

              {/* ── 2. PREVIOUS CARD (-1) ── */}
              <motion.div
                key={`prev1-${prev1Record.id}`}
                onClick={handlePrev}
                initial={false}
                animate={{
                  x: `-${nearOffset}`,
                  scale: isTablet ? 0.88 : 0.91,
                  rotate: shouldReduceMotion ? 0 : isTablet ? -2.2 : -1.8,
                  opacity: isTablet ? 0.75 : 0.80,
                  zIndex: 20,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="hidden md:flex absolute w-[64vw] max-w-[260px] xs:max-w-[280px] sm:w-[305px] md:w-[325px] lg:w-[340px] h-[385px] sm:h-[415px] md:h-[435px] cursor-pointer rounded-[24px] sm:rounded-[28px] credential-card-side p-3 sm:p-5 shadow-xl overflow-hidden pointer-events-auto hover:opacity-95 transition-opacity flex-col justify-between"
              >
                {renderCardContent(prev1Record, false)}
              </motion.div>

              {/* ── 3. ACTIVE CENTER CARD (0) ── */}
              <motion.div
                key={`active-${activeRecord.id}`}
                initial={{ scale: 0.96, opacity: 0.9 }}
                animate={{
                  x: '0%',
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                  zIndex: 35,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[76vw] max-w-[300px] xs:max-w-[320px] sm:w-[305px] md:w-[325px] lg:w-[340px] h-[385px] sm:h-[415px] md:h-[435px] rounded-[24px] sm:rounded-[28px] credential-card-active p-4 sm:p-5 shadow-2xl flex flex-col justify-between ring-1 ring-white/10"
              >
                {renderCardContent(activeRecord, true)}
              </motion.div>

              {/* ── 4. NEXT CARD (+1) ── */}
              <motion.div
                key={`next1-${next1Record.id}`}
                onClick={handleNext}
                initial={false}
                animate={{
                  x: nearOffset,
                  scale: isTablet ? 0.88 : 0.91,
                  rotate: shouldReduceMotion ? 0 : isTablet ? 2.2 : 1.8,
                  opacity: isTablet ? 0.75 : 0.80,
                  zIndex: 20,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="hidden md:flex absolute w-[64vw] max-w-[260px] xs:max-w-[280px] sm:w-[305px] md:w-[325px] lg:w-[340px] h-[385px] sm:h-[415px] md:h-[435px] cursor-pointer rounded-[24px] sm:rounded-[28px] credential-card-side p-3 sm:p-5 shadow-xl overflow-hidden pointer-events-auto hover:opacity-95 transition-opacity flex-col justify-between"
              >
                {renderCardContent(next1Record, false)}
              </motion.div>

              {/* ── 5. FAR-RIGHT CARD (+2) ── */}
              <motion.div
                key={`next2-${next2Record.id}`}
                onClick={() => setActiveIndex(next2Index)}
                initial={false}
                animate={{
                  x: farOffset,
                  scale: 0.82,
                  rotate: shouldReduceMotion ? 0 : 3.5,
                  opacity: 0.55,
                  zIndex: 12,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
                className="hidden md:flex absolute w-[240px] xs:w-[270px] sm:w-[305px] md:w-[325px] lg:w-[340px] max-w-[calc(100vw-5rem)] h-[385px] sm:h-[415px] md:h-[435px] cursor-pointer rounded-[24px] sm:rounded-[28px] credential-card-side p-4 sm:p-5 shadow-xl overflow-hidden pointer-events-auto hover:opacity-80 transition-opacity flex-col justify-between"
              >
                {renderCardContent(next2Record, false)}
              </motion.div>

            </div>
          </div>
        </div>

        {/* View Full Credentials Main Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => navigate('/about#credentials')}
            className="group inline-flex min-h-[46px] items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] backdrop-blur-xl shadow-md transition-all duration-300 hover:border-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-hover)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
            style={{ boxShadow: 'var(--shadow-neu-pill)' }}
          >
            <span>View Full Credentials</span>
            <i className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

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
                {/* Close Button at top-right (Image 2 style) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeCertificate();
                  }}
                  aria-label="Close dialog"
                  ref={closeDialogRef}
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
    </section>
  );
};

export default CredentialsCarousel;
