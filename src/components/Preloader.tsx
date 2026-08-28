import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Only show once per browser session
    return !sessionStorage.getItem('trisecure_preloaded');
  });

  const overlayRef = useRef<HTMLDivElement>(null);
  const brandCenterRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const footerMetaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    // Lock body scroll during initial preloading
    document.body.style.overflow = 'hidden';

    // Failsafe auto-dismiss after 1.6s to guarantee the user is NEVER blocked
    const fallbackTimer = setTimeout(() => {
      document.body.style.overflow = '';
      sessionStorage.setItem('trisecure_preloaded', 'true');
      setIsVisible(false);
      ScrollTrigger.refresh();
    }, 1600);

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>('.preloader-letter');
      const totalLetters = letters.length;

      // 1. Initial State
      gsap.set(letters, {
        opacity: 0,
        y: 20,
        rotateX: -30,
        transformOrigin: '50% 100%',
      });
      gsap.set(taglineRef.current, { opacity: 0, y: 10 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });

      const masterTimeline = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          document.body.style.overflow = '';
          sessionStorage.setItem('trisecure_preloaded', 'true');
          setIsVisible(false);
          ScrollTrigger.refresh();
        },
      });

      // 2. Emblem Entrance (Fast & Crisp)
      masterTimeline.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',
      });

      // 3. Progress Bar Sweep & Synchronous Letter Reveal
      masterTimeline.to(
        lineRef.current,
        {
          width: '100%',
          duration: 0.65,
          ease: 'power2.inOut',
          onUpdate: function () {
            const prog = this.progress(); // 0 to 1

            letters.forEach((letter, idx) => {
              const letterMilestone = (idx + 0.1) / totalLetters;
              if (prog >= letterMilestone && !letter.classList.contains('revealed')) {
                letter.classList.add('revealed');
                gsap.to(letter, {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  duration: 0.25,
                  ease: 'power3.out',
                });
              }
            });

            if (prog >= 0.4 && taglineRef.current && !taglineRef.current.classList.contains('revealed')) {
              taglineRef.current.classList.add('revealed');
              gsap.to(taglineRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: 'power2.out',
              });
            }
          },
        },
        '-=0.1'
      );

      // 4. Brief hold
      masterTimeline.to({}, { duration: 0.1 });

      // 5. Exit sequence: Curtain Wipe-Up
      masterTimeline.add(() => {
        window.dispatchEvent(new CustomEvent('trisecure_preloader_done'));
        const exitTl = gsap.timeline();

        exitTl.to(
          [taglineRef.current, footerMetaRef.current, brandCenterRef.current],
          {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.out',
          },
          0
        );

        exitTl.to(
          overlayRef.current,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 0.45,
            ease: 'power3.inOut',
          },
          0.1
        );
      });

      masterTimeline.to({}, { duration: 0.45 });
    }, overlayRef);

    return () => {
      clearTimeout(fallbackTimer);
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] bg-[#F5F0E6] flex flex-col justify-between p-6 sm:p-12 md:p-14 select-none overflow-hidden text-[#1A1A16] [perspective:1200px] [clip-path:inset(0%_0%_0%_0%)]"
    >
      {/* Subtle Warm Blue Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#0072EF]/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Empty Top Spacer for Perfect Vertical Balance */}
      <div className="h-6" />

      {/* Centerpiece: Brand Center Container (Animated into Navbar Logo) */}
      <div
        ref={brandCenterRef}
        className="relative z-20 my-auto flex flex-col items-center text-center px-2 will-change-transform transform-gpu origin-center"
      >
        {/* Sleek Direct Crest with 3D Drop-Shadow Depth Effect */}
        <div
          ref={logoRef}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 flex items-center justify-center relative opacity-0"
        >
          {/* Subtle Ambient Depth Lighting */}
          <div className="absolute inset-0 rounded-full bg-[#0072EF]/18 blur-xl scale-110 pointer-events-none" />
          <div className="absolute -bottom-2 w-2/3 h-3 bg-[#1A1A16]/12 rounded-full blur-md pointer-events-none" />

          {/* Direct Logo with 3D Drop Shadow */}
          <img
            src="/images/trisecure_logo.png"
            alt="Trisecure"
            className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(0,114,239,0.28)] drop-shadow-[0_4px_6px_rgba(26,26,22,0.2)]"
          />
        </div>

        {/* 3D Staggered Letter Container */}
        <div className="py-1 [perspective:1000px]">
          <h1
            ref={wordmarkRef}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#1A1A16] flex justify-center leading-none"
          >
            {'TRISECURE'.split('').map((char, index) => (
              <span
                key={index}
                className="preloader-letter inline-block opacity-0 translate-y-8 will-change-transform text-[#1A1A16] [transform-style:preserve-3d]"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Exact Tagline: Smart Solutions. Stronger Business. */}
        <div
          ref={taglineRef}
          className="mt-4 sm:mt-5 flex items-center gap-2 sm:gap-3 opacity-0"
        >
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.24em] sm:tracking-[0.28em] uppercase font-medium text-[#1A1A16]/80">
            Smart Solutions
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF]" />
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold text-[#0072EF]">
            Stronger Business.
          </span>
        </div>
      </div>

      {/* Bottom Row: Minimalist Hairline Progress */}
      <div
        ref={footerMetaRef}
        className="relative z-10 w-full max-w-md mx-auto pb-4 sm:pb-8"
      >
        {/* Ultra-Fine Hairline Track */}
        <div className="w-full h-[2px] bg-[#1A1A16]/10 relative overflow-hidden rounded-full">
          <div
            ref={lineRef}
            className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#0052CC] to-[#0072EF] rounded-full shadow-[0_0_8px_rgba(0,114,239,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};
