import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SplitCurtainSectionProps {
  id: string;
  badge: string;
  title: string;
  subtext: string;
  buttonText: string;
  serviceName: string;
  targetDetailsId: string;
  onOpenConsultation?: (service?: string) => void;
}

export const SplitCurtainSection: React.FC<SplitCurtainSectionProps> = ({
  id,
  badge,
  title,
  subtext,
  buttonText,
  serviceName,
  targetDetailsId,
  onOpenConsultation
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const actionButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Use gsap.matchMedia() for distinct Desktop vs Mobile ScrollTrigger configs
    const mm = gsap.matchMedia();

    // 💻 DESKTOP CONFIG (min-width: 769px)
    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline();

      tl.to(
        topCurtainRef.current,
        {
          yPercent: -100,
          ease: 'power2.inOut'
        },
        0
      )
        .to(
          bottomCurtainRef.current,
          {
            yPercent: 100,
            ease: 'power2.inOut'
          },
          0
        )
        .fromTo(
          headingRef.current,
          {
            scale: 0.9,
            opacity: 0.85
          },
          {
            scale: 1.04,
            opacity: 1,
            ease: 'power2.out'
          },
          0
        )
        .fromTo(
          subtextRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          },
          0.15
        )
        .fromTo(
          actionButtonRef.current,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          },
          0.25
        );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=150%', // 150% pin distance for desktop
        pin: true,
        pinSpacing: true, // Guarantees proper freeze and unpin spacing
        scrub: 1,
        anticipatePin: 1,
        animation: tl
      });
    });

    // 📱 MOBILE CONFIG (max-width: 768px)
    mm.add('(max-width: 768px)', () => {
      const tl = gsap.timeline();

      // Compressed Phase 1: Fast curtain split finishes early (by 25% progress)
      tl.to(
        topCurtainRef.current,
        {
          yPercent: -100,
          duration: 0.25,
          ease: 'power2.inOut'
        },
        0
      )
        .to(
          bottomCurtainRef.current,
          {
            yPercent: 100,
            duration: 0.25,
            ease: 'power2.inOut'
          },
          0
        )
        .fromTo(
          headingRef.current,
          {
            scale: 0.95,
            opacity: 0.9
          },
          {
            scale: 1.02,
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out'
          },
          0
        )
        .fromTo(
          subtextRef.current,
          {
            opacity: 0,
            y: 15
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: 'power2.out'
          },
          0.1
        )
        .fromTo(
          actionButtonRef.current,
          {
            opacity: 0,
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: 'power2.out'
          },
          0.15
        );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=60%', // 60% pin distance on mobile
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        animation: tl
      });
    });

    // Ensure ScrollTrigger recalculates layout after mounting
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  const handleScrollToDetails = () => {
    const el = document.getElementById(targetDetailsId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative w-full h-[70vh] min-h-[70vh] md:h-screen md:min-h-[100dvh] overflow-hidden bg-[#0a1118] text-[#fafaf7] flex items-center justify-center select-none"
    >
      {/* 1. Revealed Background Text Layer (Underneath the Curtains) */}
      <div className="relative z-10 w-full px-4 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#a7f3d0] text-[9px] sm:text-[11px] font-mono font-bold tracking-widest uppercase mb-2 sm:mb-4 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Scaled Responsive Heading (3-4rem on Mobile, 8-12rem on Desktop) */}
        <h2
          ref={headingRef}
          className="text-[34px] sm:text-[44px] md:text-[7vw] lg:text-[8vw] font-black uppercase tracking-tight leading-[0.92] text-[#fafaf7] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] font-sans max-w-6xl mx-auto"
        >
          {title}
        </h2>

        {/* Subtext Below Heading (Stacked and formatted cleanly) */}
        <p
          ref={subtextRef}
          className="mt-3 sm:mt-5 text-[11px] sm:text-[14px] md:text-[16px] font-mono tracking-wider sm:tracking-widest text-[#a7f3d0] uppercase max-w-3xl text-center font-medium px-2"
        >
          {subtext}
        </p>

        {/* Direct Action Buttons */}
        <div ref={actionButtonRef} className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2">
          <button
            onClick={() => onOpenConsultation?.(serviceName)}
            className="btn-island-primary bg-[#fafaf7] text-[#0a1118] hover:bg-white hover:text-black py-2 sm:py-2.5 pl-4 sm:pl-5 pr-1.5 sm:pr-2 font-mono text-[11px] sm:text-[12px] uppercase font-bold shadow-2xl cursor-pointer"
          >
            <span>{buttonText}</span>
            <div className="btn-island-icon bg-[#0a1118] text-white w-6 h-6 sm:w-7 sm:h-7">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          <button
            onClick={handleScrollToDetails}
            className="btn-island-secondary bg-transparent text-white border-white/20 hover:bg-white/10 text-[11px] sm:text-[12px] font-mono uppercase font-semibold py-2 sm:py-2.5 px-3.5 sm:px-4"
          >
            <span>SPECIFICATIONS ↓</span>
          </button>
        </div>
      </div>

      {/* 2. Top Half Curtain */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 w-full h-[35.5vh] md:h-[50.5vh] overflow-hidden z-20 pointer-events-none border-b border-white/10 shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-[70vh] md:h-[100dvh] bg-[#111827] bg-alabaster-grid flex items-start justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#182234] via-[#0f172a] to-[#0b0f19] opacity-95" />
          <div className="relative z-10 pt-6 sm:pt-12 flex flex-col items-center opacity-60">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.3em] text-[#94a3b8] uppercase">
              TRISECURE SOLUTIONS // EXECUTIVE REVEAL
            </span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Half Curtain */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 w-full h-[35.5vh] md:h-[50.5vh] overflow-hidden z-20 pointer-events-none border-t border-white/10 shadow-2xl"
      >
        <div className="absolute bottom-0 left-0 w-full h-[70vh] md:h-[100dvh] bg-[#111827] bg-alabaster-grid flex items-end justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#182234] via-[#0f172a] to-[#0b0f19] opacity-95" />
          <div className="relative z-10 pb-6 sm:pb-12 flex flex-col items-center opacity-60">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.3em] text-[#94a3b8] uppercase">
              SCROLL DOWN TO SPLIT & REVEAL ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
