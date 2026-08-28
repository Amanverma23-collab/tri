import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

export interface ScrollStackProps {
  children: React.ReactNode[];
  className?: string;
  itemOffset?: number;
  topOffset?: number;
}

interface CardItemProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  topOffset: number;
  itemOffset: number;
  children: React.ReactNode;
}

const CardItem: React.FC<CardItemProps> = ({
  index,
  total,
  progress,
  range,
  targetScale,
  topOffset,
  itemOffset,
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky flex items-center justify-center will-change-transform transform-gpu"
      style={{
        top: `calc(${topOffset}px + ${index * itemOffset}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full origin-top rounded-3xl shadow-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemOffset = 24,
  topOffset = 100,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = React.Children.count(children);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full space-y-16 sm:space-y-24 pb-32 sm:pb-48 ${className}`}
    >
      {React.Children.map(children, (child, i) => {
        const targetScale = 1 - (total - 1 - i) * 0.045;
        const step = 1 / total;
        const start = i * step;
        const range: [number, number] = [start, 1];

        return (
          <CardItem
            key={i}
            index={i}
            total={total}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
            topOffset={topOffset}
            itemOffset={itemOffset}
          >
            {child}
          </CardItem>
        );
      })}
    </div>
  );
};

export default ScrollStack;
