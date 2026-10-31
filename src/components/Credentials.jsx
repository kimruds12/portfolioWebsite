import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const credentials = [
  {
    title: 'ITLympics 2025 - Web Design Champion',
    date: 'April 2025',
    description: 'Awarded first place in web design for creating an innovative, highly responsive, and accessible interface under strict time constraints.',
    tags: ['Web Design', 'Wireframing'],
    href: '#',
    image: '/Assets/latestwebdesigncert.png',
    imageAlt: 'Certificate showcase visual',
  },
  {
    title: 'UMAK 14th IT Skills Olympics 2025',
    date: 'November 2025',
    description: 'Demonstrated advanced technical proficiency and problem-solving skills against top peers in a rigorous competitive environment.',
    tags: ['Web Design'],
    href: '#',
    image: '/Assets/itlympicsid.png',
    imageAlt: 'UMAK IT Skills Olympics',
  },
  {
    title: 'Network Addressing and Basic Troubleshooting',
    date: 'May 2025',
    description: 'Certified expertise in configuring network addresses and resolving foundational connectivity issues efficiently.',
    tags: ['Networking', 'Troubleshooting', 'Cisco'],
    href: '#',
    image: '/Assets/Image_Network Addressing.png',
    imageAlt: 'Networking Certificate',
  },
  {
    title: 'Networking Basics',
    date: 'May 2025',
    description: 'Comprehensive understanding of network topologies, protocols, and the fundamental architecture of modern communications.',
    tags: ['Fundamentals', 'Protocols', 'Architecture'],
    href: '#',
    image: '/Assets/Image_Network Basics.png',
    imageAlt: 'Networking Basics',
  },
  {
    title: 'Networking Devices and Initial Configuration',
    date: 'May 2025',
    description: 'Proven ability to set up, configure, and manage core networking hardware, ensuring stable and secure operations.',
    tags: ['Hardware', 'Configuration', 'Routing'],
    href: '#',
    image: '/Assets/Image_Network Devices.png',
    imageAlt: 'Networking Devices',
  },
  {
    title: 'Network Support and Security',
    date: 'May 2025',
    description: 'Specialized in maintaining network health and implementing robust security measures to protect against vulnerabilities.',
    tags: ['Security', 'Maintenance', 'Firewalls'],
    href: '#',
    image: '/Assets/Image_Network Support and Security.png',
    imageAlt: 'Network Security',
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const Credentials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  // Timer refs
  const autoSlideTimer = useRef(null);
  const inactivityTimer = useRef(null);

  // Interaction tracking refs
  const isPointerDown = useRef(false);
  const hasDragStarted = useRef(false);

  const INACTIVITY_DELAY = 2500;

  const clearTimers = useCallback(() => {
    if (autoSlideTimer.current) clearTimeout(autoSlideTimer.current);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
  }, []);

  const startAutoSlide = useCallback(() => {
    if (isPointerDown.current || isHovered) return;

    clearTimers();
    autoSlideTimer.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % credentials.length);
    }, AUTO_SLIDE_INTERVAL);
  }, [clearTimers, isHovered]);

  const handleInteractionStart = useCallback(() => {
    clearTimers();
  }, [clearTimers]);

  const handleInteractionEnd = useCallback(() => {
    if (isPointerDown.current || isHovered) return;
    clearTimers();
    inactivityTimer.current = setTimeout(() => {
      startAutoSlide();
    }, INACTIVITY_DELAY);
  }, [clearTimers, startAutoSlide, isHovered]);

  useEffect(() => {
    if (isHovered) {
      handleInteractionStart();
    } else {
      handleInteractionEnd();
    }
    return () => clearTimers();
  }, [activeIndex, isHovered, handleInteractionStart, handleInteractionEnd, clearTimers]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % credentials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + credentials.length) % credentials.length);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index, isCenter) => {
    if (!isCenter) {
      setActiveIndex(index);
    }
  };

  const handlePointerDown = () => {
    isPointerDown.current = true;
    hasDragStarted.current = false;
    handleInteractionStart();
  };

  const handleDragStart = () => {
    hasDragStarted.current = true;
  };

  const handlePointerUp = () => {
    if (hasDragStarted.current) return;
    isPointerDown.current = false;
    handleInteractionEnd();
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    isPointerDown.current = false;
    hasDragStarted.current = false;

    if (swipe < -10000 || offset.x < -100) {
      handleNext();
    } else if (swipe > 10000 || offset.x > 100) {
      handlePrev();
    } else {
      handleInteractionEnd();
    }
  };

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + credentials.length) % credentials.length;
    const isRight = diff === 1;
    const isLeft = diff === credentials.length - 1;

    if (diff === 0) {
      return {
        x: '0%',
        scale: 1,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        pointerEvents: 'auto',
      };
    }

    if (isRight) {
      return {
        x: '62%',
        scale: 0.85,
        rotateY: -45,
        zIndex: 20,
        opacity: 0.7,
        filter: 'brightness(0.65)',
        pointerEvents: 'auto',
      };
    }

    if (isLeft) {
      return {
        x: '-62%',
        scale: 0.85,
        rotateY: 45,
        zIndex: 20,
        opacity: 0.7,
        filter: 'brightness(0.65)',
        pointerEvents: 'auto',
      };
    }

    return {
      x: '0%',
      scale: 0.5,
      rotateY: 0,
      zIndex: -10,
      opacity: 0,
      filter: 'brightness(0)',
      pointerEvents: 'none',
    };
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 relative min-h-[90vh] flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-7xl relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-8 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Experience & Achievements
          </span>
          <h2 className="mt-3 font-['Sora',_sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-main)]">
            Credentials & Honors
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-[var(--text-muted)]">
            A verified record of certifications, competitive web design achievements, and technical milestones demonstrating commitment to excellence.
          </p>
        </motion.div>

        {/* 3D Coverflow Container */}
        <div className="relative h-[65vw] sm:h-[400px] md:h-[450px] lg:h-[520px] w-full flex items-center justify-center perspective-[1500px] mt-8">

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous credential"
            className="glass-neu-pill absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 h-11 w-11 md:h-14 md:w-14 rounded-full text-[var(--text-main)] flex items-center justify-center active:scale-95"
          >
            <i className="fa-solid fa-chevron-left text-sm md:text-lg" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next credential"
            className="glass-neu-pill absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 h-11 w-11 md:h-14 md:w-14 rounded-full text-[var(--text-main)] flex items-center justify-center active:scale-95"
          >
            <i className="fa-solid fa-chevron-right text-sm md:text-lg" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full max-w-[820px] h-full flex items-center justify-center transform-style-3d">
            <AnimatePresence initial={false}>
              {credentials.map((item, index) => {
                const isCenter = index === activeIndex;
                const style = getCardStyle(index);

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={style}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    onClick={() => handleCardClick(index, isCenter)}
                    onMouseEnter={() => isCenter && setIsHovered(true)}
                    onMouseLeave={() => isCenter && setIsHovered(false)}
                    onPointerDown={isCenter ? handlePointerDown : undefined}
                    onPointerUp={isCenter ? handlePointerUp : undefined}
                    onPointerCancel={isCenter ? handlePointerUp : undefined}
                    drag={isCenter ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={handleDragStart}
                    onDragEnd={(e, info) => {
                      if (!isCenter) return;
                      handleDragEnd(e, info);
                    }}
                    className={`glass-neu-card absolute w-[72vw] sm:w-[460px] md:w-[540px] lg:w-[620px] aspect-[1.414] cursor-pointer rounded-3xl overflow-hidden`}
                  >
                    {/* Glowing Accent Border for Center Card */}
                    {isCenter && (
                      <div className="absolute inset-0 z-20 pointer-events-none rounded-3xl border-2 border-[var(--text-main)] opacity-30" />
                    )}

                    {/* Image */}
                    <div className="absolute inset-0 z-0 bg-[var(--surface-soft)]">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-[var(--bg-page)]/70 to-transparent transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-20' : 'opacity-85'
                          }`}
                      />
                    </div>

                    {/* Text Overlay */}
                    <div
                      className={`absolute bottom-5 left-0 w-full px-6 sm:px-8 z-10 pointer-events-none transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                      <h4 className="font-['Sora',_sans-serif] text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-[var(--text-main)] drop-shadow-sm">
                        {item.title}
                      </h4>

                      {isCenter && (
                        <div className="flex flex-wrap gap-2 mt-3 hidden sm:flex">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-mono text-[var(--text-main)] uppercase tracking-wider backdrop-blur-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Date Badge */}
                    <div
                      className={`absolute right-4 top-4 z-20 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-mono font-medium text-[var(--text-main)] backdrop-blur-md transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                      {item.date}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {credentials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'w-10 bg-[var(--text-main)]'
                : 'w-3 bg-[var(--border-color)] hover:bg-[var(--text-muted)]'
                }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Credentials;
