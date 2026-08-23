import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, SpringOptions } from 'framer-motion';

export interface SpotlightProps {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
}

export function Spotlight({
  className = '',
  size = 220,
  springOptions = { damping: 25, stiffness: 200, mass: 0.2 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);

  const mouseX = useSpring(rawX, springOptions);
  const mouseY = useSpring(rawY, springOptions);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const parent = containerRef.current?.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      rawX.set(event.clientX - rect.left);
      rawY.set(event.clientY - rect.top);
    },
    [rawX, rawY]
  );

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    let rafId: number | null = null;
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const onMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };

    parent.addEventListener('mouseenter', onMouseEnter, { passive: true });
    parent.addEventListener('mouseleave', onMouseLeave, { passive: true });
    parent.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      parent.removeEventListener('mouseenter', onMouseEnter);
      parent.removeEventListener('mouseleave', onMouseLeave);
      parent.removeEventListener('mousemove', onMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 top-0 rounded-full transition-opacity duration-300 will-change-transform ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        width: size,
        height: size,
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  );
}
