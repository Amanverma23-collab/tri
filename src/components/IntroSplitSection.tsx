import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './Hero';

gsap.registerPlugin(ScrollTrigger);

interface IntroSplitSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export const IntroSplitSection: React.FC<IntroSplitSectionProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const heroRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    // 💻 DESKTOP CONFIG (min-width: 769px)
    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline();

      // Top curtain slides UP, Bottom curtain slides DOWN
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
        // Hero Content scale-down (1.05 -> 1.0) and crisp opacity for depth reveal
        .fromTo(
          heroRevealRef.current,
          {
            scale: 1.05,
            opacity: 0.9
          },
          {
            scale: 1.0,
            opacity: 1,
            ease: 'power2.out'
          },
          0
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        animation: tl
      });
    });

    // 📱 MOBILE CONFIG (max-width: 768px)
    mm.add('(max-width: 768px)', () => {
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
          heroRevealRef.current,
          {
            scale: 1.03,
            opacity: 0.95
          },
          {
            scale: 1.0,
            opacity: 1,
            ease: 'power2.out'
          },
          0
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=60%',
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        animation: tl
      });
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="intro-hero-container"
      className="relative w-full h-screen h-[100dvh] min-h-[100dvh] overflow-hidden select-none bg-[#fafaf7]"
    >
      {/* 1. Underlying Revealed Hero Section */}
      <div
        ref={heroRevealRef}
        className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden flex items-center"
      >
        <Hero onOpenConsultation={onOpenConsultation} />
      </div>

      {/* 2. Top Half Curtain (Cream #F5F0E6 Background with Top Content) */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 w-full h-[50.5vh] overflow-hidden z-30 pointer-events-none border-b border-[#0a1118]/10 shadow-2xl"
      >
        {/* Full 100vh Board Container positioned at top */}
        <div className="absolute top-0 left-0 w-full h-[100dvh] bg-[#f5f0e6] bg-alabaster-grid flex flex-col justify-between p-6 sm:p-12 lg:p-16">
          {/* Top-Left Corner Brand Label */}
          <div className="flex flex-col">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-tight text-[#0a1118] uppercase">
              TRISECURE SOLUTIONS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#047857] uppercase font-semibold">
              F&B, HR, CAPITAL & MARKETING
            </span>
          </div>

          {/* Center: Eyebrow + Top Half of Heading */}
          <div className="text-center flex flex-col items-center justify-center my-auto">
            <span className="text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.3em] text-[#047857] uppercase mb-2">
              OUR SERVICE
            </span>
            <h1
              className="text-[11vw] sm:text-[8vw] lg:text-[5.5rem] font-bold text-[#0a1118] tracking-tight leading-[0.9] font-serif"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Business Solutions
            </h1>
          </div>

          {/* Spacer to balance bottom */}
          <div className="opacity-0">placeholder</div>
        </div>
      </div>

      {/* 3. Bottom Half Curtain (Cream #F5F0E6 Background with Bottom Content) */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 w-full h-[50.5vh] overflow-hidden z-30 pointer-events-none border-t border-[#0a1118]/10 shadow-2xl"
      >
        {/* Full 100vh Board Container positioned at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[100dvh] bg-[#f5f0e6] bg-alabaster-grid flex flex-col justify-between p-6 sm:p-12 lg:p-16">
          {/* Spacer */}
          <div className="opacity-0">placeholder</div>

          {/* Center: Bottom Half of Heading + Divider Line */}
          <div className="text-center flex flex-col items-center justify-center my-auto">
            <h1
              className="text-[11vw] sm:text-[8vw] lg:text-[5.5rem] font-bold text-[#0a1118] tracking-tight leading-[0.9] font-serif opacity-0"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Business Solutions
            </h1>

            {/* Centered Thin Divider Line with Diamond Accent */}
            <div className="flex items-center justify-center gap-3 mt-4 w-full max-w-xs mx-auto">
              <div className="h-[1px] flex-1 bg-[#0a1118]/25" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
              <div className="h-[1px] flex-1 bg-[#0a1118]/25" />
            </div>
          </div>

          {/* Bottom-Right Description Paragraph */}
          <div className="flex justify-end w-full">
            <p className="text-[12px] sm:text-[13.5px] text-[#475569] leading-relaxed max-w-md text-right font-sans">
              Grow your business with comprehensive HR, insurance, food compliance, and digital marketing solutions — all under one roof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
