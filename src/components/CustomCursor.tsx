import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const currentTextRef = useRef<string>('');
  const currentHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsEnabled(true);
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      const isInteractive = target?.closest('a, button, [role="button"], input, select, textarea');

      const nextText = cursorTarget ? cursorTarget.getAttribute('data-cursor') || '' : '';
      const nextHovered = !!cursorTarget || !!isInteractive;

      if (nextText !== currentTextRef.current) {
        currentTextRef.current = nextText;
        setCursorText(nextText);
      }

      if (nextHovered !== currentHoveredRef.current) {
        currentHoveredRef.current = nextHovered;
        setIsHovered(nextHovered);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center transition-all duration-300 ${
        cursorText
          ? 'w-20 h-20 bg-[#1A1A16] text-[#F5F0E6] shadow-xl scale-100 border border-[#C9AF6B]/40'
          : isHovered
          ? 'w-10 h-10 bg-[#7C8B6F]/40 backdrop-blur-xs scale-100 border border-[#7C8B6F]'
          : 'w-3.5 h-3.5 bg-[#1A1A16] scale-100'
      }`}
      style={{ willChange: 'transform' }}
    >
      {cursorText && (
        <span
          ref={textRef}
          className="text-[10px] font-mono tracking-widest uppercase font-semibold text-center px-1"
        >
          {cursorText}
        </span>
      )}
    </div>
  );
};
