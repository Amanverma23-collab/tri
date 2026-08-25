import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SplitSubItem {
  title: string;
  description: string;
  tag: string;
}

export interface SplitRevealSectionProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  subtext?: string;
  imageUrl?: string;
  subItems?: SplitSubItem[];
  theme?: 'charcoal' | 'cream' | 'olive' | 'mustard';
  onOpenConsultation?: (serviceName?: string) => void;
}

export const SplitRevealSection: React.FC<SplitRevealSectionProps> = ({
  id = 'split-reveal',
  badge = 'PRACTICE VERTICAL',
  title,
  subtitle,
  subtext,
  imageUrl,
  subItems = [],
  theme = 'charcoal',
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const pinDistance = isMobile ? '+=500' : '+=1000';

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 769px)',
          isMobile: '(max-width: 768px)',
        },
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: pinDistance,
              pin: true,
              pinSpacing: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // 1. Symmetric split from the exact 50% middle line
          // Top half moves straight UP (-100%)
          tl.to(
            curtainTopRef.current,
            {
              yPercent: -100,
              ease: 'power2.inOut',
              duration: 1,
            },
            0
          );

          // Bottom half moves straight DOWN (+100%)
          tl.to(
            curtainBottomRef.current,
            {
              yPercent: 100,
              ease: 'power2.inOut',
              duration: 1,
            },
            0
          );

          // 2. Revealed heading scales into crisp focus behind the split
          tl.fromTo(
            titleRef.current,
            { scale: 1.08, opacity: 0.2, y: 15 },
            { scale: 1, opacity: 1, y: 0, ease: 'power2.out', duration: 0.8 },
            0.25
          );

          // 3. Stagger in practice sub-items
          if (contentRef.current) {
            tl.fromTo(
              contentRef.current,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, ease: 'power2.out', duration: 0.8 },
              0.45
            );
          }
        }
      );

      return () => {
        mm.revert();
      };
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full h-screen min-h-[580px] sm:min-h-[640px] max-h-[1080px] overflow-hidden flex flex-col justify-center bg-[#F5F0E6] text-[#1A1A16] select-none border-b border-[#1A1A16]/10"
    >
      {/* =========================================================================
          BACKGROUND LAYER (Revealed when curtains open)
          ========================================================================= */}
      {imageUrl && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-20 filter contrast-110 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E6]/95 via-[#F5F0E6]/85 to-[#F5F0E6]/95" />
        </div>
      )}

      {/* =========================================================================
          CURTAIN TOP HALF (0% to 50% height - 100% Crisp Image, No Whitish Overlay)
          ========================================================================= */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 right-0 w-full h-1/2 z-30 overflow-hidden bg-[#1A1A16] will-change-transform"
      >
        {imageUrl && (
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={imageUrl}
              alt=""
              className="absolute top-0 left-0 w-full h-[200%] object-cover object-top filter contrast-105"
            />
            {/* Subtle natural gradient for text readability without white film */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
          </div>
        )}

        {/* Top Curtain Overlay Content */}
        <div className="editorial-container relative z-10 h-full flex flex-col justify-between pt-16 sm:pt-24 pb-2 sm:pb-3">
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#1A1A16]/85 text-[#F5F0E6] backdrop-blur-md border border-white/20 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9AF6B]" />
              <span>{badge}</span>
            </div>
          </div>

          <div className="w-full">
            <h3 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CURTAIN BOTTOM HALF (50% to 100% height - 100% Crisp Image, No Whitish Overlay)
          ========================================================================= */}
      <div
        ref={curtainBottomRef}
        className="absolute top-1/2 left-0 right-0 w-full h-1/2 z-30 overflow-hidden bg-[#1A1A16] will-change-transform"
      >
        {imageUrl && (
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={imageUrl}
              alt=""
              className="absolute -top-full left-0 w-full h-[200%] object-cover object-top filter contrast-105"
            />
            {/* Subtle bottom gradient for subtitle */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        )}

        {/* Bottom Curtain Overlay Content */}
        <div className="editorial-container relative z-10 h-full flex flex-col justify-between pt-2 sm:pt-3 pb-6 sm:pb-12">
          <div>
            {subtitle && (
              <p className="font-serif text-sm sm:text-2xl lg:text-3xl text-white/95 font-medium italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] leading-snug">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          REVEALED CONTENT INNER LAYER (Revealed cleanly in the center)
          ========================================================================= */}
      <div className="relative z-10 w-full editorial-container flex flex-col justify-center py-4 sm:py-6">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#7C8B6F]/15 text-[#7C8B6F] font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-4 border border-[#7C8B6F]/30">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{badge}</span>
          </div>

          <h2
            ref={titleRef}
            className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-tight sm:leading-[1.08] mb-1.5 sm:mb-3 text-[#1A1A16]"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="font-serif text-xs sm:text-2xl text-[#7C8B6F] font-medium italic mb-1.5 sm:mb-3 leading-snug">
              {subtitle}
            </p>
          )}

          {subtext && (
            <p className="font-sans text-[11px] sm:text-base text-[#7A7A70] max-w-3xl leading-snug sm:leading-relaxed mb-3 sm:mb-6 font-light line-clamp-3 sm:line-clamp-none">
              {subtext}
            </p>
          )}

          {/* Staggered Sub-Items Grid */}
          {subItems.length > 0 && (
            <div
              ref={contentRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 pt-2.5 sm:pt-4 border-t border-[#1A1A16]/10"
            >
              {subItems.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FAF6EE] border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all duration-300 shadow-xs sm:shadow-sm group"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#7C8B6F] uppercase tracking-wider block mb-0.5 sm:mb-1.5 font-semibold">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-xs sm:text-base font-bold text-[#1A1A16] mb-0.5 sm:mb-1.5 group-hover:text-[#7C8B6F] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[10px] sm:text-xs text-[#7A7A70] leading-snug sm:leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Direct CTA Link */}
          {onOpenConsultation && (
            <div className="pt-3 sm:pt-6 flex items-center gap-4">
              <button
                onClick={() => onOpenConsultation(title)}
                className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#7C8B6F] transition-colors shadow-md cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
