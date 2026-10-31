import { useEffect, forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Page transition orchestration variants:
 * Prompt: "Make the blocks of my old page fade out one after another, 70ms apart,
 * then the new page's blocks arrive in the same sequence."
 *
 * 1. Old page exit: staggerChildren: 0.07 (70ms apart), staggerDirection: 1 (same top-to-bottom sequence).
 * 2. AnimatePresence mode="wait" waits for all old blocks to fade out.
 * 3. New page enter: staggerChildren: 0.07 (70ms apart), blocks arrive in the same sequence.
 */
export const pageContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07, // 70ms apart for entering blocks
      delayChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.07, // 70ms apart for exiting blocks
      staggerDirection: 1,   // In the exact same sequence (top to bottom)
    },
  },
};

export const pageBlockVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(3px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: 'blur(2px)',
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Reduced motion fallback variants
export const pageBlockReducedVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

/**
 * PageBlock component:
 * Represents an individual block on a page that fades out / arrives
 * in staggered 70ms sequence.
 */
export const PageBlock = forwardRef(({ children, as = 'div', className = '', ...props }, ref) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      variants={shouldReduceMotion ? pageBlockReducedVariants : pageBlockVariants}
      className={`page-transition-block ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

PageBlock.displayName = 'PageBlock';

/**
 * PageTransitionLayout:
 * Top-level container for a page that orchestrates child PageBlocks
 * with 70ms enter/exit staggering.
 */
export const PageTransitionLayout = ({ children, className = '' }) => {
  useEffect(() => {
    // When a new page arrives after old page exit completes, reset scroll to top immediately
    // and resize Lenis dimensions so any scroll depth from the previous route does not contaminate the new page
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
      window.lenis.resize();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      variants={pageContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`page-transition-container w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionLayout;
