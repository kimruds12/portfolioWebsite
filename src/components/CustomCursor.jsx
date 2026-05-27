import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        // Detect mobile/touch devices
        const checkMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
            setIsMobile(isTouchDevice || isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Smooth animation loop
        const animate = () => {
            const { x: tx, y: ty } = targetRef.current;
            const { x: cx, y: cy } = positionRef.current;

            const dx = tx - cx;
            const dy = ty - cy;

            positionRef.current = {
                x: cx + dx * 0.15,
                y: cy + dy * 0.15,
            };

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isMobile, isVisible]);

    // Mobile touch cursor
    useEffect(() => {
        if (!isMobile) return;

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            if (touch && cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${touch.clientX}px, ${touch.clientY}px, 0)`;
                setIsVisible(true);
            }
        };

        const handleTouchEnd = () => {
            setTimeout(() => setIsVisible(false), 600);
        };

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            if (touch && cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${touch.clientX}px, ${touch.clientY}px, 0)`;
                setIsVisible(true);
            }
        };

        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isMobile]);

    // Desktop arrow cursor - perfectly straight SVG arrow
    if (!isMobile) {
        return (
            <div
                ref={cursorRef}
                className="custom-cursor-arrow"
                style={{
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 99999,
                    willChange: 'transform',
                    transition: 'opacity 0.2s ease',
                }}
            >
                <svg
                    width="28"
                    height="34"
                    viewBox="0 0 28 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.7)) drop-shadow(0 0 20px rgba(56, 189, 248, 0.4))',
                    }}
                >
                    {/* Arrow shape - perfectly straight, pixel-aligned */}
                    <path
                        d="M2 2L2 28L8.5 21.5L14 32L19 29.5L13.5 19L22 19L2 2Z"
                        fill="rgba(34, 211, 238, 0.85)"
                        stroke="rgba(56, 189, 248, 1)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    {/* Inner highlight for depth */}
                    <path
                        d="M4 6L4 25L9 19.5L14.5 29.5L17.5 28L12 18L19 18L4 6Z"
                        fill="rgba(165, 243, 252, 0.25)"
                    />
                </svg>
            </div>
        );
    }

    // Mobile circle dot cursor
    return (
        <div
            ref={cursorRef}
            className="custom-cursor-dot"
            style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 99999,
                willChange: 'transform',
                transition: 'opacity 0.3s ease',
            }}
        >
            {/* Outer glow ring */}
            <div
                style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '-16px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(34, 211, 238, 0.4)',
                    background: 'rgba(34, 211, 238, 0.06)',
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.3), 0 0 30px rgba(56, 189, 248, 0.15)',
                    animation: 'cursorDotPulse 2s ease-in-out infinite',
                }}
            />
            {/* Inner solid dot */}
            <div
                style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #22d3ee, #38bdf8)',
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 25px rgba(56, 189, 248, 0.4)',
                }}
            />
        </div>
    );
};

export default CustomCursor;
