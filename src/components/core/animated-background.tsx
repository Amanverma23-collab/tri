import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';

export interface AnimatedBackgroundProps {
  children: React.ReactNode;
  defaultValue?: string | null;
  value?: string | null;
  onValueChange?: (newVal: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  defaultValue = null,
  value,
  onValueChange,
  className = 'rounded-full bg-[#1A1A16]',
  transition = {
    type: 'spring',
    bounce: 0.2,
    duration: 0.35,
  },
  enableHover = true,
}) => {
  const [activeId, setActiveId] = useState<string | null>(value ?? defaultValue ?? null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setActiveId(value);
    }
  }, [value]);

  const currentId = hoveredId !== null ? hoveredId : activeId;

  return (
    <div
      className="relative flex items-center"
      onMouseLeave={() => {
        if (enableHover) {
          setHoveredId(null);
          onValueChange?.(activeId);
        }
      }}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<{ 'data-id'?: string; className?: string }>(child)) return child;

        const id = child.props['data-id'] || String(index);
        const isSelected = currentId === id;

        return (
          <div
            key={id}
            className="relative"
            onMouseEnter={() => {
              if (enableHover) {
                setHoveredId(id);
                onValueChange?.(id);
              }
            }}
            onClick={() => {
              setActiveId(id);
              onValueChange?.(id);
            }}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  layoutId="animated-background-pill"
                  className={`absolute inset-0 ${className}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={transition}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10">{child}</div>
          </div>
        );
      })}
    </div>
  );
};
