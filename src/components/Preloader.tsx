import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Only show once per browser session
    return !sessionStorage.getItem('trisecure_preloaded');
  });

  const overlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    // Lock scroll during preloading
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>('.preloader-letter');
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          sessionStorage.setItem('trisecure_preloaded', 'true');
          setIsVisible(false);
          ScrollTrigger.refresh();
        },
      });

      // 1. Initial State: Staggered Letter Entrance
      tl.fromTo(
        letters,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power2.out',
        }
      );

      // 2. Synchronous Progress Bar Fill & Real-time Percentage Tracker
      tl.to(
        progressBarRef.current,
        {
          width: '100%',
          duration: 1.8,
          ease: 'power1.inOut',
          onUpdate: function () {
            const percent = Math.round(this.progress() * 100);
            if (percentTextRef.current) {
              percentTextRef.current.textContent = `${percent}%`;
            }
          },
        },
        '<'
      );

      // 3. Smooth Exit Curtain Slide Up
      tl.to(overlayRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power3.inOut',
        delay: 0.25,
      });
    }, overlayRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] bg-[#1A1A16] bg-charcoal-textured flex flex-col items-center justify-center select-none overflow-hidden text-[#F5F0E6]"
    >
      {/* Ambient Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9AF6B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Continuous Rotating 360 Logo Crest */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 p-2 rounded-2xl bg-white/[0.04] border border-white/10 shadow-2xl flex items-center justify-center">
          <img
            src="/images/trisecure_logo.png"
            alt="Trisecure Solutions"
            className="w-full h-full object-contain animate-logo-spin"
          />
        </div>

        {/* Brand Typographic Wordmark Letter Stagger */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#F5F0E6] flex justify-center overflow-hidden">
          {'TRISECURE'.split('').map((letter, i) => (
            <span
              key={i}
              className="preloader-letter inline-block opacity-0 translate-y-6"
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Corporate Subline */}
        <p className="font-mono text-[10px] sm:text-xs text-[#7C8B6F] uppercase tracking-[0.25em] mt-3 font-semibold">
          Business Solutions, Simplified // Pan-India
        </p>

        {/* Progress Track & Bar */}
        <div className="w-56 sm:w-80 md:w-96 h-[2px] bg-white/15 mt-8 sm:mt-10 relative overflow-hidden rounded-full">
          <div
            ref={progressBarRef}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C9AF6B] via-[#F5F0E6] to-[#7C8B6F] w-0 rounded-full"
          />
        </div>

        {/* Live Percentage Readout */}
        <div className="flex items-center justify-between w-56 sm:w-80 md:w-96 mt-3 font-mono text-[11px] sm:text-xs text-[#F5F0E6]/60 tracking-widest">
          <span className="uppercase text-[9px] sm:text-[10px] text-white/40">
            Initializing Desk
          </span>
          <span ref={percentTextRef} className="font-bold text-[#C9AF6B]">
            0%
          </span>
        </div>
      </div>
    </div>
  );
};
