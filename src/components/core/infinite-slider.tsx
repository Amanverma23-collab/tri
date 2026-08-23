import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  gap = 20,
  speed = 30, // seconds to complete a loop
  speedOnHover = 0, // 0 = pause on hover/touch
  direction = 'horizontal',
  reverse = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const scrollWidth = containerRef.current.scrollWidth / 2;
    setContentWidth(scrollWidth);
  }, [children]);

  useEffect(() => {
    if (!contentWidth) return;

    const currentSpeed = isHovered && speedOnHover !== undefined ? speedOnHover : speed;

    if (currentSpeed === 0) {
      return;
    }

    const from = reverse ? -contentWidth : 0;
    const to = reverse ? 0 : -contentWidth;

    const controls = animate(xTranslation, [from, to], {
      ease: 'linear',
      duration: currentSpeed,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [contentWidth, speed, speedOnHover, isHovered, reverse, xTranslation]);

  return (
    <div
      className={`overflow-hidden select-none w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex shrink-0 will-change-transform"
        style={{
          x: xTranslation,
          gap: `${gap}px`,
        }}
      >
        {/* Render twice for seamless continuous infinite loop */}
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" aria-hidden="true" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
