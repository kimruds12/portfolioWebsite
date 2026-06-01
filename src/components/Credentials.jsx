import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const Credentials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Timer refs
  const autoSlideTimer = useRef(null);
  const inactivityTimer = useRef(null);

  // Interaction tracking refs
  const isPointerDown = useRef(false);
  const hasDragStarted = useRef(false);

  const INACTIVITY_DELAY = 2500; // Delay before resuming after interaction

  // ── Timer helpers ──

  const clearTimers = useCallback(() => {
    if (autoSlideTimer.current) clearTimeout(autoSlideTimer.current);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
  }, []);

  const startAutoSlide = useCallback(() => {
    // NEVER start the timer while user is holding/touching/dragging/hovering the card
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
    if (isPointerDown.current || isHovered) return; // Still interacting
    clearTimers();
    inactivityTimer.current = setTimeout(() => {
      startAutoSlide();
    }, INACTIVITY_DELAY);
  }, [clearTimers, startAutoSlide, isHovered]);

  // Whenever activeIndex or hover state changes, potentially restart timer
  useEffect(() => {
    if (isHovered) {
      handleInteractionStart();
    } else {
      // Use inactivity delay if not on first mount and not actively interacting
      // For simplicity, just call handleInteractionEnd which does the inactivity check
      handleInteractionEnd();
    }
    return () => clearTimers();
  }, [activeIndex, isHovered, handleInteractionStart, handleInteractionEnd, clearTimers]);

  // ── Navigation handlers ──

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

  // ── Pointer / Drag interaction handlers ──

  // Called the INSTANT the user puts finger/mouse down on the center card
  const handlePointerDown = () => {
    isPointerDown.current = true;
    hasDragStarted.current = false;
    handleInteractionStart();
  };

  // Called when Framer Motion detects actual drag movement
  const handleDragStart = () => {
    hasDragStarted.current = true;
  };

  // Called when the user lifts their finger/mouse
  const handlePointerUp = () => {
    if (hasDragStarted.current) {
      // onDragEnd will handle the cleanup
      return;
    }
    isPointerDown.current = false;
    handleInteractionEnd();
  };

  // Called when drag ends (after a swipe or failed drag)
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

  // ── Card positioning ──

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
        x: '65%',
        scale: 0.85,
        rotateY: -55,
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.6)',
        pointerEvents: 'auto',
      };
    }

    if (isLeft) {
      return {
        x: '-65%',
        scale: 0.85,
        rotateY: 55,
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.6)',
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
    <section ref={sectionRef} id="credentials" className="scroll-mt-12 px-4 pt-0 pb-24 sm:px-6 lg:px-8 relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
      {/* Background Decorative Grids */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 opacity-20 pointer-events-none will-change-transform">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]" />
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>

      <div className="mx-auto w-full max-w-[1400px] relative z-10">
        <motion.div style={{ y: titleY }} className="mb-4 text-center will-change-transform">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Certificates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg font-medium"
          >
            A collection of certifications, achievements, and technical accomplishments that reflect my continuous learning and skill development.
            Click the side cards, use the arrows, or swipe to explore the collection.
          </motion.p>
        </motion.div>

        {/* 3D Coverflow Container */}
        <motion.div
          style={{ y: cardsY }}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative h-[65vw] sm:h-[400px] md:h-[450px] lg:h-[550px] w-full flex items-center justify-center perspective-[1500px] mt-24 sm:mt-10 will-change-transform"
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 h-12 w-12 md:h-16 md:w-16 rounded-full border border-cyan-300/30 bg-black/80 text-cyan-300 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-300 hover:text-black transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <i className="fa-solid fa-chevron-left text-lg md:text-2xl" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 h-12 w-12 md:h-16 md:w-16 rounded-full border border-cyan-300/30 bg-black/80 text-cyan-300 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-300 hover:text-black transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <i className="fa-solid fa-chevron-right text-lg md:text-2xl" />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-[850px] h-full flex items-center justify-center transform-style-3d">
            <AnimatePresence initial={false}>
              {credentials.map((item, index) => {
                const isCenter = index === activeIndex;
                const style = getCardStyle(index);

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={style}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    onClick={() => handleCardClick(index, isCenter)}
                    onMouseEnter={() => isCenter && setIsHovered(true)}
                    onMouseLeave={() => isCenter && setIsHovered(false)}
                    // ── Pointer events: catch the INSTANT user touches/holds the card ──
                    onPointerDown={isCenter ? handlePointerDown : undefined}
                    onPointerUp={isCenter ? handlePointerUp : undefined}
                    onPointerCancel={isCenter ? handlePointerUp : undefined}
                    // ── Drag events: only on the center card ──
                    drag={isCenter ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={handleDragStart}
                    onDragEnd={(e, info) => {
                      if (!isCenter) return;
                      handleDragEnd(e, info);
                    }}
                    className={`absolute w-[70vw] sm:w-[450px] md:w-[550px] lg:w-[650px] aspect-[1.414] cursor-pointer ${isCenter ? 'shadow-[0_0_50px_rgba(34,211,238,0.4)]' : 'shadow-[0_0_30px_rgba(0,0,0,0.8)]'
                      } rounded-[2rem] border border-cyan-300/30 bg-[#0A1223] overflow-hidden`}
                  >
                    {/* Glowing Border for Center Card */}
                    {isCenter && (
                      <div className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] shadow-[inset_0_0_30px_rgba(34,211,238,0.3)] border-2 border-cyan-400" />
                    )}

                    {/* Background Image */}
                    <motion.div
                      className="absolute inset-0 z-0"
                      animate={{ scale: isCenter && isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent transition-opacity duration-500 ${isCenter && isHovered ? 'opacity-0' : 'opacity-90'}`} />
                    </motion.div>

                    {/* Text Overlay */}
                    <div className={`absolute bottom-6 left-0 w-full px-8 z-10 pointer-events-none transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-0' : 'opacity-100'}`}>
                      <h4 className="text-white text-xl md:text-3xl font-bold tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        {item.title}
                      </h4>

                      {isCenter && (
                        <div className="flex flex-wrap gap-2 mt-4 hidden sm:flex">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-cyan-300/30 bg-cyan-300/20 px-3 py-1 text-[10px] md:text-xs font-mono text-cyan-100 uppercase tracking-widest backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Floating ID / Date */}
                    <div className={`absolute right-6 top-6 z-20 rounded-full border border-cyan-300/30 bg-black/60 px-4 py-1.5 text-[10px] md:text-xs font-mono text-cyan-300 backdrop-blur-md transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-0' : 'opacity-100'}`}>
                      {item.date}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dynamic Indicators */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {credentials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${activeIndex === index
                  ? 'w-12 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]'
                  : 'w-4 bg-cyan-300/20 hover:bg-cyan-300/50'
                  }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
