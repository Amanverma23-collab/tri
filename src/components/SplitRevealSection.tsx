import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SplitRevealSectionProps {
  onOpenConsultation?: (service?: string) => void;
}

export const SplitRevealSection: React.FC<SplitRevealSectionProps> = ({ onOpenConsultation }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const actionButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1200',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Split Curtain: Top half slides UP, Bottom half slides DOWN
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
        // Background Text Layer: Scales from 0.92 to 1.05 for rich cinematic depth
        .fromTo(
          headingRef.current,
          {
            scale: 0.92,
            opacity: 0.85
          },
          {
            scale: 1.05,
            opacity: 1,
            ease: 'power2.out'
          },
          0
        )
        // Subtext reveal
        .fromTo(
          subtextRef.current,
          {
            opacity: 0,
            y: 35
          },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          },
          0.15
        )
        // Action Button reveal
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
          0.3
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="split-reveal-hr"
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#0a1118] text-[#fafaf7] flex items-center justify-center select-none"
    >
      {/* 1. Revealed Background Text Layer (Underneath the Curtains) */}
      <div
        ref={textContainerRef}
        className="relative z-10 w-full px-4 sm:px-8 text-center flex flex-col items-center justify-center"
      >
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#a7f3d0] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          <span>HUMAN CAPITAL & WORKFORCE ADVISORY</span>
        </div>

        {/* Large Bold Heading (8-12rem scalable clamp) */}
        <h2
          ref={headingRef}
          className="text-[13vw] sm:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tight leading-[0.88] text-[#fafaf7] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] font-sans"
        >
          HR SERVICES
        </h2>

        {/* Subtext Below Heading */}
        <p
          ref={subtextRef}
          className="mt-6 text-[12px] sm:text-[15px] md:text-[17px] font-mono tracking-widest text-[#a7f3d0] uppercase max-w-4xl text-center font-medium"
        >
          Recruitment • Payroll • Training • Compliance • Employee Relations
        </p>

        {/* Direct Action Button */}
        <div ref={actionButtonRef} className="mt-8">
          <button
            onClick={() => onOpenConsultation?.('HR & Workforce Solutions')}
            className="btn-island-primary bg-[#fafaf7] text-[#0a1118] hover:bg-white hover:text-black py-2.5 pl-5 pr-2 font-mono text-[12px] uppercase font-bold shadow-2xl cursor-pointer"
          >
            <span>EXPLORE HR CAPABILITIES</span>
            <div className="btn-island-icon bg-[#0a1118] text-white">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* 2. Top Half Curtain (0% to 50% height) */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 w-full h-[50.5vh] overflow-hidden z-20 pointer-events-none border-b border-white/10 shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-[100dvh] bg-[#111827] bg-alabaster-grid flex items-start justify-center">
          {/* Subtle texture/gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#182234] via-[#0f172a] to-[#0b0f19] opacity-95" />
          
          {/* Top Decorative Watermark / Accent */}
          <div className="relative z-10 pt-12 flex flex-col items-center opacity-60">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#94a3b8] uppercase">
              TRISECURE SOLUTIONS // EXECUTIVE REVEAL
            </span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Half Curtain (50% to 100% height) */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 w-full h-[50.5vh] overflow-hidden z-20 pointer-events-none border-t border-white/10 shadow-2xl"
      >
        <div className="absolute bottom-0 left-0 w-full h-[100dvh] bg-[#111827] bg-alabaster-grid flex items-end justify-center">
          {/* Subtle texture/gradient background matching top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#182234] via-[#0f172a] to-[#0b0f19] opacity-95" />
          
          {/* Bottom Decorative Prompt */}
          <div className="relative z-10 pb-12 flex flex-col items-center opacity-60">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#94a3b8] uppercase">
              SCROLL DOWN TO SPLIT & REVEAL ↓
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};
