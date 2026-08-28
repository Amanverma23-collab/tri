import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from './SmoothScrollProvider';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface IntroServiceCycleProps {
  onComplete: () => void;
}

const services = [
  'HR & Payroll',
  'Insurance & Loans',
  'Food Compliance',
  'Digital Marketing',
];

export const IntroServiceCycle: React.FC<IntroServiceCycleProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(() => {
    // If preloader was already completed or skipped previously
    return !!sessionStorage.getItem('trisecure_preloaded');
  });

  const { lenis } = useSmoothScroll();

  // 1. Lock scroll during the intro cycle
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    lenis?.stop();

    return () => {
      document.body.style.overflow = originalOverflow;
      lenis?.start();
      ScrollTrigger.refresh();
    };
  }, [lenis]);

  // 2. Synchronize start with preloader exit
  useEffect(() => {
    if (isStarted) return;

    const handlePreloaderDone = () => {
      setIsStarted(true);
    };

    window.addEventListener('trisecure_preloader_done', handlePreloaderDone);

    // Fallback in case event was dispatched before listener attached
    const fallbackTimer = setTimeout(() => {
      setIsStarted(true);
    }, 2800);

    return () => {
      window.removeEventListener('trisecure_preloader_done', handlePreloaderDone);
      clearTimeout(fallbackTimer);
    };
  }, [isStarted]);

  // 3. Word Cycle Timer (0.5s transition + 2.2s display per word)
  useEffect(() => {
    if (!isStarted) return;

    if (index === services.length - 1) {
      // After final word has finished full duration (2.2s), trigger slide-up transition into Hero
      const timeout = setTimeout(() => {
        onComplete();
      }, 2200);
      return () => clearTimeout(timeout);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2200);

    return () => clearTimeout(interval);
  }, [index, isStarted, onComplete]);

  const currentWord = services[index];
  const letters = currentWord.split('');

  return (
    <section className="fixed inset-0 z-[9998] bg-white flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Subtle Ambient Depth Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#0072EF]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Static Context Eyebrow */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A1A16]/10 bg-black/[0.03] font-mono text-[11px] sm:text-xs text-[#7A7A70] uppercase tracking-[0.25em] mb-6 sm:mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-pulse" />
        <span>WHAT WE DO</span>
      </div>

      {/* Centered Rotating Word with Per-Letter Motion Blur Skew Wave Effect */}
      <div className="relative z-10 overflow-hidden text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-[#1A1A16] h-[1.4em] flex items-center justify-center w-full max-w-6xl px-4">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentWord}
            className="leading-none text-center whitespace-nowrap tracking-tight select-none py-1 flex items-center justify-center"
          >
            {letters.map((letter, i) => {
              const staggerDelay = i * (0.35 / letters.length);

              return (
                <motion.span
                  key={`${currentWord}-${i}`}
                  initial={{ y: '110%', skewY: 10, opacity: 0 }}
                  animate={{ y: '0%', skewY: 0, opacity: 1 }}
                  exit={{ y: '-110%', skewY: -10, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.65, 0, 0.35, 1],
                    delay: staggerDelay,
                  }}
                  className="inline-block will-change-transform transform-gpu"
                  style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              );
            })}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Minimal 4-Segment Progress Indicator */}
      <div className="relative z-10 flex items-center gap-2 mt-8 sm:mt-10">
        {services.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index
                ? 'w-8 bg-[#0072EF]'
                : i < index
                ? 'w-2 bg-[#1A1A16]/40'
                : 'w-2 bg-[#1A1A16]/15'
            }`}
          />
        ))}
      </div>

      {/* Discreet Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 font-mono text-[11px] sm:text-xs text-[#7A7A70] hover:text-[#1A1A16] uppercase tracking-widest transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1A1A16]/10 hover:border-[#1A1A16]/30 bg-white/80 backdrop-blur-xs cursor-pointer shadow-xs group"
        aria-label="Skip intro animation"
      >
        <span>Skip Intro</span>
        <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
      </button>
    </section>
  );
};
