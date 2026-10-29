import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * DownloadCVButton - Interactive progress bar button
 *
 * Requirements fulfilled:
 * 1. Fills left-to-right as its own progress bar.
 * 2. Displays "Downloading N%" label with tabular numbers.
 * 3. Two-layer dual-color clipping so the label flips color precisely at the fill edge.
 * 4. Ends on a checkmark when complete.
 * 5. Automatically initiates file download when percentage reaches 100%.
 * 6. Follows the active color theme in both Dark and Light modes.
 */
const DownloadCVButton = ({
  className = '',
  label = 'DOWNLOAD CV',
  downloadUrl = '/Assets/2026_Resume_Guston.pdf',
  fileName = '2026_Resume_Guston.pdf',
}) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'downloading' | 'completed'
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const animFrameRef = useRef(null);
  const resetTimerRef = useRef(null);

  // Measure button width for pixel-perfect two-layer alignment
  const updateWidth = useCallback(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    let observer;
    if (typeof ResizeObserver !== 'undefined' && buttonRef.current) {
      observer = new ResizeObserver(() => updateWidth());
      observer.observe(buttonRef.current);
    }
    window.addEventListener('resize', updateWidth);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', updateWidth);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [updateWidth]);

  // Actual file download trigger
  const triggerDownload = useCallback(() => {
    try {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      link.target = '_blank';
      link.rel = 'noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download trigger failed:', err);
    }
  }, [downloadUrl, fileName]);

  const handleStartDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (status === 'downloading') return;

    // Capture latest width before progress starts
    updateWidth();

    setStatus('downloading');
    setProgress(0);

    const duration = 1800; // 1.8s smooth realistic progress
    const start = performance.now();

    const animateProgress = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        animFrameRef.current = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        setStatus('completed');

        // Immediately trigger file download at 100%
        triggerDownload();

        // Hold completed check for 2.6 seconds, then reset to idle
        resetTimerRef.current = setTimeout(() => {
          setStatus('idle');
          setProgress(0);
        }, 2600);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateProgress);
  };

  // Label and Icon Renderer (Shared between base layer & fill layer for exact coordinate match)
  const renderLabel = () => {
    if (status === 'completed') {
      return (
        <>
          <i className="fa-solid fa-check text-xs font-black text-emerald-400" />
          <span>Done</span>
        </>
      );
    }

    if (status === 'downloading') {
      return (
        <>
          <i className="fa-solid fa-arrow-down text-xs" />
          <span className="tabular-nums">Downloading {progress}%</span>
        </>
      );
    }

    return (
      <>
        <i className="fa-solid fa-file-arrow-down text-[11px] opacity-80 transition-transform duration-200 group-hover:translate-y-0.5" />
        <span>{label}</span>
      </>
    );
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleStartDownload}
      disabled={status === 'downloading'}
      aria-label={
        status === 'downloading'
          ? `Downloading resume, ${progress} percent`
          : status === 'completed'
          ? 'Resume downloaded'
          : 'Download CV'
      }
      className={`group relative inline-flex min-h-[38px] min-w-[172px] items-center justify-center overflow-hidden rounded-full font-['Sora',_sans-serif] text-xs font-bold uppercase tracking-wider backdrop-blur-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${
        status === 'idle'
          ? 'navbar-resume-btn cursor-pointer hover:brightness-110 active:scale-95'
          : 'cursor-default'
      } ${className}`}
      style={{
        backgroundColor: 'var(--resume-btn-bg)',
        color: 'var(--resume-btn-text)',
        borderColor: 'var(--resume-btn-border)',
        borderWidth: '1px',
        boxShadow: 'var(--resume-btn-shadow)',
      }}
    >
      {/* ── Base Layer (Unfilled region) ── */}
      <div className="relative z-0 flex h-full w-full items-center justify-center gap-2 px-5 py-2 whitespace-nowrap">
        {renderLabel()}
      </div>

      {/* ── Fill Layer (Progress track filling left to right) ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
        style={{
          width: `${progress}%`,
          backgroundColor: 'var(--btn-strong-bg)',
          transition: status === 'downloading' ? 'width 60ms linear' : 'none',
        }}
      >
        {/* ── Pinned Inverted Text (Clips at the exact fill edge to flip color) ── */}
        <div
          className="flex h-full items-center justify-center gap-2 px-5 py-2 whitespace-nowrap"
          style={{
            width: buttonWidth ? `${buttonWidth}px` : '100%',
            color: 'var(--btn-strong-text)',
          }}
        >
          {renderLabel()}
        </div>
      </div>
    </button>
  );
};

export default DownloadCVButton;
