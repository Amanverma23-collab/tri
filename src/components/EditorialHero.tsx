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

      // Desktop: 1 full viewport scroll scrub
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

      // Mobile: shorter pin distance (+=60%)
      mm.add('(max-width: 767px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=60%',
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          layerARef.current,
          {
            yPercent: -100,
            ease: 'power2.inOut',
          },
          0
        );

        tl.fromTo(
          layerBRef.current,
          { scale: 1.03 },
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
      className="relative w-full h-screen min-h-[660px] lg:min-h-[720px] overflow-hidden select-none"
    >
      {/* =========================================================================
          LAYER B (Behind / Revealed Underneath): EXACT ORIGINAL 2-COLUMN HERO
          ========================================================================= */}
      <div
        ref={layerBRef}
        className="absolute inset-0 z-10 w-full h-full bg-[#F5F0E6] bg-cream-textured flex flex-col justify-center pt-20 sm:pt-28 pb-8 sm:pb-12 overflow-hidden origin-center border-b border-[#1A1A16]/10"
      >
        <div className="editorial-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Original Minimal Editorial Typography, Narrative & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 1. Minimal Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[10px] sm:text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-pulse" />
                <span>CORPORATE ADVISORY // PAN-INDIA</span>
              </div>

              {/* 2. Headline & Pure Narrative */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A16] tracking-tight leading-[1.08]">
                  Business Solutions,{' '}
                  <span className="italic font-normal text-[#7C8B6F] block sm:inline">
                    Simplified.
                  </span>
                </h2>

                <p className="font-sans text-sm sm:text-base lg:text-lg text-[#7A7A70] max-w-xl font-light leading-relaxed">
                  Single-window institutional advisory across human capital, corporate insurance, debt capital financing, statutory food clearances, and digital brand scaling.
                </p>
              </div>

              {/* 3. Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  onClick={onOpenConsultation}
                  className="btn-editorial-primary text-xs w-full sm:w-auto justify-center py-3 sm:py-3.5 px-6"
                  data-cursor="Book"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="btn-editorial-secondary text-xs w-full sm:w-auto justify-center py-3 sm:py-3.5 px-6"
                  data-cursor="Services"
                >
                  <span>Explore Practice Verticals</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4. Refined Metric Proof Strip */}
              <div className="pt-4 sm:pt-5 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#1A1A16]/10 max-w-xl">
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#1A1A16] block leading-none">
                    12+
                  </span>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-1 font-semibold leading-tight">
                    Years Enterprise Exp
                  </p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#0072EF] block leading-none">
                    100%
                  </span>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-1 font-semibold leading-tight">
                    Audit Readiness
                  </p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#1A1A16] block leading-none">
                    Pan-India
                  </span>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-1 font-semibold leading-tight">
                    Central & State
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Original Framed Editorial Photography (5 cols) */}
            <div className="lg:col-span-5 pt-2 lg:pt-0">
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
          LAYER A (Front / Initial View): FULL-SCREEN DARK CHARCOAL INTRO (No Images)
          ========================================================================= */}
      <div
        ref={layerARef}
        className="absolute inset-0 z-20 w-full h-full bg-[#1A1A16] bg-charcoal-textured flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 border-b border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Glowing Ambient Mesh Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#C9AF6B]/12 rounded-full blur-[150px] pointer-events-none" />

        {/* Centerpiece Full-Screen Monumental Content */}
        <div className="editorial-container w-full my-auto relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-5 sm:space-y-7">
            
            {/* Eyebrow Tag with Golden Pulse */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#F5F0E6] font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-white/15 backdrop-blur-sm shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
              <span>CORPORATE ADVISORY // PAN-INDIA</span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[7rem] font-bold text-[#F5F0E6] tracking-tight leading-[0.98]">
                Confused about <br />
                <span className="italic font-normal text-[#C9AF6B] block sm:inline">
                  compliance?
                </span>
              </h1>

              <p className="font-sans text-base sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                You're not alone. Navigating 50+ regulatory mandates, licensing bottlenecks, and corporate operational risks doesn't have to be overwhelming.
              </p>
            </div>
          </div>
        </div>

        {/* Expansive Full-Width 4-Pillar Grid (Fills the lower screen space) */}
        <div className="editorial-container w-full relative z-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B]/40 transition-all backdrop-blur-xs group">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-[#C9AF6B] uppercase tracking-wider font-semibold">
                  01 // Regulatory
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9AF6B]" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#C9AF6B] transition-colors">
                FSSAI & DPCC Clearances
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5 line-clamp-1">
                State, Central & Environmental Consent
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C8B6F]/40 transition-all backdrop-blur-xs group">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-[#7C8B6F] uppercase tracking-wider font-semibold">
                  02 // Human Capital
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B6F]" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#7C8B6F] transition-colors">
                HR & Payroll Governance
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5 line-clamp-1">
                PF, ESIC, Gratuity & Factory Acts
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B]/40 transition-all backdrop-blur-xs group">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-[#C9AF6B] uppercase tracking-wider font-semibold">
                  03 // Underwriting
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9AF6B]" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#C9AF6B] transition-colors">
                Corporate Risk Protection
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5 line-clamp-1">
                Asset, Liability & Commercial Financing
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C8B6F]/40 transition-all backdrop-blur-xs group">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-[#7C8B6F] uppercase tracking-wider font-semibold">
                  04 // Execution
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B6F]" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#7C8B6F] transition-colors">
                Single-Window Desk
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5 line-clamp-1">
                Zero Bureaucracy, 100% Audit Readiness
              </p>
            </div>
          </div>

          {/* Bottom Scroll Indicator Curtain Cue */}
          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white/60 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7C8B6F] animate-ping" />
              <span>Scroll to unlock simplified solutions</span>
            </div>

            <div className="flex items-center gap-1.5 text-white/60 font-mono text-xs animate-bounce">
              <span className="text-[10px] tracking-wider uppercase hidden sm:inline">Scroll Down</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
