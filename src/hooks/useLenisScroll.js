import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useLenisScroll - Global Lenis smooth scrolling with lerp 0.085
 * and scroll-velocity card skewing.
 *
 * Requirements fulfilled:
 * 1. Lenis initialized with lerp: 0.085.
 * 2. Applied across all pages for global smooth scrolling.
 * 3. Photo cards skew proportionally to scroll speed, leaning into fast scrolls.
 * 4. Cards smoothly ease back to flat (0deg) when scrolling stops.
 * 5. Synced with GSAP ScrollTrigger for pinning and batch animations.
 */
export const useLenisScroll = () => {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      lerp: 0.085, // Strictly requested lerp rate
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    });

    window.lenis = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for Lenis RAF so both systems share the same frame loop
    const tickerCallback = (time) => {
      lenis.raf(time * 1000); // GSAP ticker provides time in seconds, Lenis expects ms
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    let stopTimer = null;

    // Track scroll velocity and calculate dynamic skew angle
    lenis.on('scroll', (e) => {
      if (prefersReducedMotion) return;

      const velocity = e.velocity || 0;
      // Clamp between -7.5deg and +7.5deg for organic, distortion-free tilt
      const maxSkew = 7.5;
      const skew = Math.max(-maxSkew, Math.min(maxSkew, velocity * 0.18));

      document.documentElement.style.setProperty('--scroll-skew', `${skew}deg`);

      if (stopTimer) clearTimeout(stopTimer);

      // Settle smoothly back to flat (0deg) when scrolling ceases
      stopTimer = setTimeout(() => {
        document.documentElement.style.setProperty('--scroll-skew', '0deg');
      }, 140);
    });

    return () => {
      gsap.ticker.remove(tickerCallback);
      if (stopTimer) clearTimeout(stopTimer);
      lenis.destroy();
      window.lenis = null;
      document.documentElement.style.removeProperty('--scroll-skew');
    };
  }, []);
};

export default useLenisScroll;

