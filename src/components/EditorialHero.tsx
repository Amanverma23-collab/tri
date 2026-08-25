import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EditorialHeroProps {
  onOpenConsultation: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerARef = useRef<HTMLDivElement>(null);
  const layerBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop ONLY: 1 full viewport scroll scrub
      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Layer A slides up and off screen
        tl.to(
          layerARef.current,
          {
            yPercent: -100,
            ease: 'power2.inOut',
          },
          0
        );

        // Layer B subtly zooms out from 1.04 -> 1 for premium depth
        tl.fromTo(
          layerBRef.current,
          { scale: 1.04 },
          { scale: 1, ease: 'power2.inOut' },
          0
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full md:h-screen md:min-h-[720px] overflow-hidden select-none bg-[#F5F0E6]"
    >
      {/* =========================================================================
          LAYER B: ORIGINAL 2-COLUMN HERO (Direct on Mobile with Image, Revealed on Desktop)
          ========================================================================= */}
      <div
        ref={layerBRef}
        className="relative md:absolute inset-0 z-10 w-full min-h-[100dvh] md:min-h-full bg-[#F5F0E6] bg-cream-textured flex flex-col justify-center pt-24 sm:pt-28 pb-12 overflow-hidden origin-center border-b border-[#1A1A16]/10"
      >
        <div className="editorial-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Minimal Editorial Typography, Narrative, Actions & Metrics */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 1. Minimal Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[9px] sm:text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-pulse" />
                <span>CORPORATE ADVISORY // PAN-INDIA</span>
              </div>

              {/* 2. Headline & Pure Narrative */}
              <div className="space-y-2.5 sm:space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A16] tracking-tight leading-[1.08]">
                  Business Solutions,{' '}
                  <span className="italic font-normal text-[#7C8B6F] block sm:inline">
                    Simplified.
                  </span>
                </h1>

                <p className="font-sans text-xs sm:text-base lg:text-lg text-[#7A7A70] max-w-xl font-light leading-relaxed">
                  Single-window institutional advisory across human capital, corporate insurance, debt capital financing, statutory food clearances, and digital brand scaling.
                </p>
              </div>

              {/* 3. Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0072EF] transition-all flex items-center justify-center gap-2 shadow-sm"
                  data-cursor="Book"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-transparent border border-[#1A1A16]/20 text-[#1A1A16] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#1A1A16]/5 transition-all flex items-center justify-center gap-2"
                  data-cursor="Services"
                >
                  <span>Explore Practice Verticals</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4. Mobile Visible Framed Image (Shows between buttons & metrics on mobile screens) */}
              <div className="block lg:hidden pt-2 pb-2">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#1A1A16]/15 aspect-[16/10] sm:aspect-[4/3] max-h-[320px] bg-[#1A1A16]">
                  <img
                    src="/images/home_hero.jpg"
                    alt="Trisecure Solutions Corporate Advisory"
                    className="w-full h-full object-cover object-center filter contrast-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* 5. Metric Proof Strip */}
              <div className="pt-4 sm:pt-5 grid grid-cols-3 gap-2 sm:gap-6 border-t border-[#1A1A16]/10 max-w-xl">
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#1A1A16] block leading-none">
                    12+
                  </span>
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-1 font-semibold leading-tight">
                    Years Enterprise Exp
                  </p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#0072EF] block leading-none">
                    100%
                  </span>
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-1 font-semibold leading-tight">
                    Audit Readiness
                  </p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#1A1A16] block leading-none">
                    Pan-India
                  </span>
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-1 font-semibold leading-tight">
                    Central & State
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop Photography (5 cols) */}
            <div className="lg:col-span-5 hidden lg:block pt-2 lg:pt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1A1A16]/15 group aspect-[4/3] sm:aspect-[4/5] max-h-[460px] bg-[#1A1A16]">
                <img
                  src="/images/home_hero.jpg"
                  alt="Trisecure Solutions Corporate Advisory"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          LAYER A (Front / Initial View): DESKTOP ONLY EDITORIAL INTRO
          ========================================================================= */}
      <div
        ref={layerARef}
        className="hidden md:flex absolute inset-0 z-20 w-full h-full bg-[#F7F5F0] flex-col justify-between pt-28 pb-8 border-b border-[#1A1A16]/10 overflow-hidden shadow-xl"
      >
        {/* Centerpiece Typographic Section */}
        <div className="editorial-container w-full my-auto relative z-10 text-center px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Minimalist Outlined Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#1A1A16]/12 bg-white/50 backdrop-blur-xs font-mono text-[11px] text-[#1A1A16] uppercase tracking-[0.22em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-pulse" />
              <span>CORPORATE ADVISORY // PAN-INDIA</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-[5.2rem] xl:text-[6rem] font-medium text-[#1A1A16] tracking-tight leading-[1.04]">
                One partner for every <br />
                <span className="italic font-normal text-[#0072EF] block sm:inline">
                  business need.
                </span>
              </h2>

              {/* Subtext */}
              <p className="font-sans text-base lg:text-lg text-[#5A5A50] max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                HR, insurance, licensing, and growth — handled under one roof, so you can focus on running your business.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Service Verticals: 4 Columns on Desktop */}
        <div className="editorial-container w-full relative z-10 px-6">
          <div className="grid grid-cols-4 gap-0 pt-4 pb-2 text-left">
            
            {/* Column 01: HR */}
            <div className="px-6 first:pl-0 border-r border-[#1A1A16]/10 space-y-1">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#0072EF] block leading-none mb-1.5">
                01
              </span>
              <p className="font-mono text-[10px] text-[#7A7A70] uppercase tracking-[0.22em] font-semibold">
                HR
              </p>
              <h3 className="font-serif text-base lg:text-lg font-bold text-[#1A1A16] leading-snug">
                HR & Payroll
              </h3>
              <p className="font-sans text-xs text-[#5A5A50] font-light leading-relaxed line-clamp-1">
                Recruitment, compliance & workforce management
              </p>
            </div>

            {/* Column 02: INSURANCE */}
            <div className="px-6 border-r border-[#1A1A16]/10 space-y-1">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#0072EF] block leading-none mb-1.5">
                02
              </span>
              <p className="font-mono text-[10px] text-[#7A7A70] uppercase tracking-[0.22em] font-semibold">
                INSURANCE
              </p>
              <h3 className="font-serif text-base lg:text-lg font-bold text-[#1A1A16] leading-snug">
                Insurance & Loans
              </h3>
              <p className="font-sans text-xs text-[#5A5A50] font-light leading-relaxed line-clamp-1">
                Life, health, business & personal financing
              </p>
            </div>

            {/* Column 03: COMPLIANCE */}
            <div className="px-6 border-r border-[#1A1A16]/10 space-y-1">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#0072EF] block leading-none mb-1.5">
                03
              </span>
              <p className="font-mono text-[10px] text-[#7A7A70] uppercase tracking-[0.22em] font-semibold">
                COMPLIANCE
              </p>
              <h3 className="font-serif text-base lg:text-lg font-bold text-[#1A1A16] leading-snug">
                Food Compliance
              </h3>
              <p className="font-sans text-xs text-[#5A5A50] font-light leading-relaxed line-clamp-1">
                FSSAI, audits & regulatory licensing
              </p>
            </div>

            {/* Column 04: MARKETING */}
            <div className="px-6 last:pr-0 space-y-1">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#0072EF] block leading-none mb-1.5">
                04
              </span>
              <p className="font-mono text-[10px] text-[#7A7A70] uppercase tracking-[0.22em] font-semibold">
                MARKETING
              </p>
              <h3 className="font-serif text-base lg:text-lg font-bold text-[#1A1A16] leading-snug">
                Digital Marketing
              </h3>
              <p className="font-sans text-xs text-[#5A5A50] font-light leading-relaxed line-clamp-1">
                Websites, SEO, branding & growth
              </p>
            </div>

          </div>

          {/* Minimalist Bottom Scroll Cue */}
          <div className="flex items-center justify-between border-t border-[#1A1A16]/10 pt-4 mt-2 font-mono text-xs text-[#7A7A70] tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-ping" />
              <span>Scroll to explore solutions</span>
            </div>

            <div className="flex items-center gap-1 text-[#1A1A16] animate-bounce font-medium">
              <span className="text-[10px] hidden sm:inline">Scroll Down</span>
              <ChevronDown className="w-4 h-4 text-[#0072EF]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
