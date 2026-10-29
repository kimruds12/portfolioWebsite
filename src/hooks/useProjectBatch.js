import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useProjectBatch - GSAP ScrollTrigger.batch animation hook.
 * Strictly implements the user's prompt:
 * "With GSAP ScrollTrigger.batch, make my product grid cards rise in from 34px below
 * in groups of up to four as they enter the viewport, staggered 0.1s."
 *
 * @param {React.RefObject} gridRef - Ref to the grid container holding .gsap-project-card elements
 * @param {Array} deps - Dependency array to re-initialize on filter/content change
 */
export const useProjectBatch = (gridRef, deps = []) => {
  useEffect(() => {
    if (!gridRef?.current) return;

    let batchTriggers = [];
    let rafId = null;

    // Use requestAnimationFrame so DOM layout is resolved before batch setup
    rafId = requestAnimationFrame(() => {
      const cards = gridRef.current?.querySelectorAll('.gsap-project-card');
      if (!cards || cards.length === 0) return;

      // Ensure initial position: 34px below, opacity 0
      gsap.set(cards, { opacity: 0, y: 34 });

      // Create ScrollTrigger batch for cards entering viewport
      batchTriggers = ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            overwrite: true,
          });
        },
        start: 'top 90%',
        once: true,
        batchMax: 4,
      });

      // Refresh to immediately evaluate any cards already in viewport
      ScrollTrigger.refresh();
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (batchTriggers && batchTriggers.length > 0) {
        batchTriggers.forEach((t) => {
          if (t && typeof t.kill === 'function') t.kill();
        });
      }
    };
  }, deps);
};

export default useProjectBatch;
