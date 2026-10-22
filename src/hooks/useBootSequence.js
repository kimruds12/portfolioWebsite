import { useEffect, useState, useRef, useCallback } from 'react';

// Stable asset list — defined outside the component so the reference never changes.
const CRITICAL_ASSETS = ['/Assets/KDLogo.jpg', '/Assets/homeKimImage.jpg'];

const MIN_DISPLAY_MS = 1200;
const MAX_FALLBACK_MS = 5000;
const READY_HOLD_MS = 400;

/**
 * useBootSequence
 * Controls the KimDev boot screen lifecycle:
 *   loading → ready → leaving → complete
 *
 * Preloads critical images, drives a smooth rAF progress bar,
 * enforces minimum display time, and includes a hard fallback timeout.
 */
export function useBootSequence() {
  const [phase, setPhase] = useState('loading');
  const [progress, setProgress] = useState(0);

  const isMountedRef = useRef(true);
  const completedRef = useRef(false);
  const rafIdRef = useRef(null);
  const timersRef = useRef([]);

  // Safe timer helper — stores IDs for cleanup
  const addTimer = useCallback((fn, delay) => {
    const id = setTimeout(() => {
      if (isMountedRef.current) fn();
    }, delay);
    timersRef.current.push(id);
    return id;
  }, []);

  // Cleanup everything
  const cleanup = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (rafIdRef.current != null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, []);

  // Called when the Framer Motion exit animation finishes
  const completeExit = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    unlockScroll();
    setPhase('complete');
  }, [unlockScroll]);

  useEffect(() => {
    isMountedRef.current = true;
    completedRef.current = false;

    // Lock scrolling while boot screen is visible
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let assetsReady = false;
    let minTimeReady = false;
    const t0 = performance.now();
    let cur = 0; // local progress tracker (not in React state)

    /* ── Preload critical images ── */
    let pending = CRITICAL_ASSETS.length;
    const markAssetDone = () => {
      pending -= 1;
      if (pending <= 0) assetsReady = true;
    };
    CRITICAL_ASSETS.forEach((src) => {
      const img = new Image();
      img.onload = markAssetDone;
      img.onerror = markAssetDone;
      img.src = src;
    });

    // Also wait for fonts (non-blocking — just sets the flag)
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => { }).catch(() => { });
    }

    /* ── Minimum display timer ── */
    addTimer(() => { minTimeReady = true; }, MIN_DISPLAY_MS);

    /* ── Hard fallback — guarantee we never block the visitor ── */
    addTimer(() => {
      assetsReady = true;
      minTimeReady = true;
    }, MAX_FALLBACK_MS);

    /* ── rAF progress loop ── */
    const tick = () => {
      if (!isMountedRef.current || completedRef.current) return;

      const elapsed = performance.now() - t0;
      const bothReady = assetsReady && minTimeReady;

      // Target: crawl to 92 % while loading, jump to 100 when ready
      const target = bothReady ? 100 : Math.min(92, (elapsed / MIN_DISPLAY_MS) * 88);

      if (cur < target) {
        const step = Math.max(0.4, (target - cur) * 0.12);
        cur = Math.min(100, cur + step);
        setProgress(Math.round(cur));
      }

      // Reached 100 %
      if (cur >= 99.5 && bothReady) {
        cur = 100;
        setProgress(100);
        setPhase('ready');

        addTimer(() => {
          if (!isMountedRef.current) return;
          setPhase('leaving');
          if (prefersReducedMotion) {
            completedRef.current = true;
            unlockScroll();
            setPhase('complete');
          }
        }, prefersReducedMotion ? 80 : READY_HOLD_MS);
        return; // stop the loop
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      isMountedRef.current = false;
      cleanup();
      // Always make sure scroll is unlocked on unmount
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [addTimer, cleanup, unlockScroll]);
  // ↑ All deps are stable useCallbacks — the effect runs exactly once.

  return { phase, progress, isReady: phase === 'ready' || phase === 'leaving' || phase === 'complete', completeExit };
}

export default useBootSequence;
