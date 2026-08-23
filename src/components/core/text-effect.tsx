import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface TextEffectProps {
  children: string;
  per?: 'char' | 'word' | 'line';
  as?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: 'blur' | 'fade' | 'slide' | 'scale';
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 60,
    y: 6,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.22,
      ease: 'easeOut',
    },
  },
};

const fadeItemVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
};

export const TextEffect: React.FC<TextEffectProps> = ({
  children,
  per = 'char',
  as = 'div',
  variants,
  className = '',
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: per === 'char' ? 0.02 : 0.06,
        delayChildren: delay,
      },
    },
    ...variants?.container,
  };

  const itemVariants = variants?.item || (preset === 'fade' || preset === 'blur' ? fadeItemVariants : defaultItemVariants);

  let segments: string[] = [];
  if (per === 'char') {
    segments = Array.from(children);
  } else if (per === 'word') {
    segments = children.split(' ');
  } else {
    segments = [children];
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      animate={trigger ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`inline-block ${className}`}
      onAnimationComplete={onAnimationComplete}
      style={{ transform: 'translateZ(0)' }}
    >
      {segments.map((segment, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          className="inline-block whitespace-pre will-change-transform"
        >
          {segment === ' ' ? '\u00A0' : segment}
          {per === 'word' && idx < segments.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.div>
  );
};
