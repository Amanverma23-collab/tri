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
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headerMetaRef = useRef<HTMLDivElement>(null);
  const footerMetaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    // Lock body scroll during initial preloading
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>('.preloader-letter');
      const totalLetters = letters.length;

      // 1. Initial State: start completely hidden
      gsap.set(letters, {
        opacity: 0,
        y: 35,
        rotateX: -45,
        transformOrigin: '50% 100%',
      });
      gsap.set(taglineRef.current, { opacity: 0, y: 15 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.7 });

      const masterTimeline = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          sessionStorage.setItem('trisecure_preloaded', 'true');
          setIsVisible(false);
          ScrollTrigger.refresh();
        },
      });

      // 2. Emblem Entrance
      masterTimeline.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: 'power3.out',
      });

      // 3. Progress Bar Sweep & Synchronous Sequential Letter Reveal
      masterTimeline.to(
        lineRef.current,
        {
          width: '100%',
          duration: 1.8,
          ease: 'power1.inOut',
          onUpdate: function () {
            const prog = this.progress(); // 0 to 1
            const val = Math.round(prog * 100);

            // Update numerical counter
            if (counterRef.current) {
              counterRef.current.textContent = val < 10 ? `0${val}` : `${val}`;
            }

            // Reveal each letter in real-time sync as progress passes each letter's milestone
            letters.forEach((letter, idx) => {
              const letterMilestone = (idx + 0.1) / totalLetters;
              if (prog >= letterMilestone && !letter.classList.contains('revealed')) {
                letter.classList.add('revealed');
                gsap.to(letter, {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  duration: 0.45,
                  ease: 'power3.out',
                });
              }
            });

            // Reveal tagline halfway (>= 50%)
            if (prog >= 0.5 && taglineRef.current && !taglineRef.current.classList.contains('revealed')) {
              taglineRef.current.classList.add('revealed');
              gsap.to(taglineRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: 'power2.out',
              });
            }
          },
        },
        '+=0.1'
      );

      // 4. Brief cinematic pause at 100%
      masterTimeline.to({}, { duration: 0.2 });

      // 5. SIMULTANEOUS EXIT SEQUENCE:
      // A) Shrink & Fly Brand Wordmark to Navbar Logo Position
      // B) Curtain Wipe-Up of Dark Overlay exposing actual site content underneath
      masterTimeline.add(() => {
        const exitTl = gsap.timeline();

        const navLogoEl = document.getElementById('navbar-brand-logo');
        if (navLogoEl && brandCenterRef.current) {
          const navRect = navLogoEl.getBoundingClientRect();
          const brandRect = brandCenterRef.current.getBoundingClientRect();

          // Calculate offset to land precisely on top of the navbar logo
          const targetX = navRect.left + navRect.width / 2 - (brandRect.left + brandRect.width / 2);
          const targetY = navRect.top + navRect.height / 2 - (brandRect.top + brandRect.height / 2);
          
          // Size ratio between navbar logo and preloader brand block
          const scaleRatio = Math.min(navRect.height / brandRect.height, 0.28);

          // Fly and shrink brand element into navbar
          exitTl.to(
            brandCenterRef.current,
            {
              x: targetX,
              y: targetY,
              scale: scaleRatio,
              duration: 0.95,
              ease: 'power3.inOut',
            },
            0
          );
        }

        // Fade out tagline and auxiliary telemetry rapidly
        exitTl.to(
          [taglineRef.current, headerMetaRef.current, footerMetaRef.current],
          {
            opacity: 0,
            duration: 0.35,
            ease: 'power2.out',
          },
          0
        );

        // SIMULTANEOUS Curtain Wipe-Up of the dark background overlay from bottom to top
        exitTl.to(
          overlayRef.current,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 0.95,
            ease: 'power3.inOut',
          },
          0
        );
      });

      // Allow exit timeline duration to settle
      masterTimeline.to({}, { duration: 1.05 });
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
      className="fixed inset-0 z-[99999] bg-[#06080D] flex flex-col justify-between p-6 sm:p-12 md:p-14 select-none overflow-hidden text-white [perspective:1200px] [clip-path:inset(0%_0%_0%_0%)]"
    >
      {/* Deep Anamorphic Royal Blue Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#0052CC]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* Top Header Row: Status Telemetry & Brand Metadata */}
      <div
        ref={headerMetaRef}
        className="relative z-10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-white/45 tracking-widest uppercase"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-pulse" />
          <span className="text-white/80 font-medium">TRISECURE ADVISORY DESK</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>PAN-INDIA NETWORK</span>
          <span>//</span>
          <span>STATUTORY & CORPORATE</span>
        </div>
      </div>

      {/* Centerpiece: Brand Center Container (Animated into Navbar Logo) */}
      <div
        ref={brandCenterRef}
        className="relative z-20 my-auto flex flex-col items-center text-center px-2 will-change-transform transform-gpu origin-center"
      >
        {/* Sleek Rotating Crest */}
        <div
          ref={logoRef}
          className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 flex items-center justify-center relative opacity-0"
        >
          <div className="absolute inset-0 rounded-2xl bg-[#0072EF]/20 blur-md animate-pulse" />
          <div className="relative w-full h-full p-2 rounded-2xl bg-[#0D121F] border border-[#0072EF]/30 flex items-center justify-center shadow-lg">
            <img
              src="/images/trisecure_logo.png"
              alt="Trisecure"
              className="w-full h-full object-contain animate-logo-spin"
            />
          </div>
        </div>

        {/* 3D Staggered Letter Container */}
        <div className="py-1 [perspective:1000px]">
          <h1
            ref={wordmarkRef}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.14em] sm:tracking-[0.18em] text-white flex justify-center leading-none"
          >
            {'TRISECURE'.split('').map((char, index) => (
              <span
                key={index}
                className="preloader-letter inline-block opacity-0 translate-y-8 will-change-transform text-white [transform-style:preserve-3d]"
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
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.24em] sm:tracking-[0.28em] uppercase font-medium text-white/90">
            Smart Solutions
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF]" />
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold text-[#0072EF]">
            Stronger Business.
          </span>
        </div>
      </div>

      {/* Bottom Row: Minimalist Hairline Progress & Dual-Digit Rolling Counter */}
      <div
        ref={footerMetaRef}
        className="relative z-10 w-full max-w-xl mx-auto space-y-3"
      >
        {/* Ultra-Fine Hairline Laser Track */}
        <div className="w-full h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
          <div
            ref={lineRef}
            className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#0052CC] via-[#0072EF] to-[#60A5FA] shadow-[0_0_10px_#0072EF]"
          />
        </div>

        {/* Footer Meta Details */}
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/40 tracking-widest">
          <span className="uppercase">SYSTEM READY // 256-BIT ENCRYPTION</span>
          <div className="flex items-baseline gap-1 text-white font-mono">
            <span ref={counterRef} className="text-sm sm:text-base font-bold text-[#0072EF]">
              00
            </span>
            <span className="text-[10px] text-white/40">/ 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
