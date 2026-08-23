import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface SplitSubItem {
  title: string;
  description: string;
  tag?: string;
}

interface SplitRevealSectionProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  subtext?: string;
  imageUrl?: string;
  subItems?: SplitSubItem[];
  theme?: 'charcoal' | 'olive' | 'cream';
  onOpenConsultation?: (serviceName?: string) => void;
}

export const SplitRevealSection: React.FC<SplitRevealSectionProps> = ({
  id,
  badge = 'TRISECURE PRACTICE VERTICAL',
  title,
  subtitle,
  subtext,
  imageUrl,
  subItems = [],
  theme = 'cream',
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let tl: gsap.core.Timeline | null = null;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean; isMobile: boolean };
          const pinDistance = isDesktop ? '+=120%' : '+=70%';

          tl = gsap.timeline({
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

          // 1. Symmetric split from the exact 50% middle line (No center button)
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
            { scale: 1.15, opacity: 0.2, y: 30 },
            { scale: 1, opacity: 1, y: 0, ease: 'power2.out', duration: 0.8 },
            0.25
          );

          // 3. Stagger in practice sub-items
          if (contentRef.current) {
            tl.fromTo(
              contentRef.current,
              { y: 50, opacity: 0 },
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
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden flex flex-col justify-center bg-[#F5F0E6] text-[#1A1A16] select-none border-b border-[#1A1A16]/10"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          </div>
        )}

        {/* Top Curtain Overlay Content */}
        <div className="editorial-container relative z-10 h-full flex flex-col justify-between pt-24 sm:pt-28 pb-4">
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16]/80 text-[#F5F0E6] backdrop-blur-md border border-white/20 font-mono text-xs uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9AF6B]" />
              <span>{badge}</span>
            </div>
          </div>

          <div className="w-full">
            <h3 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A16] drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        )}

        {/* Bottom Curtain Overlay Content */}
        <div className="editorial-container relative z-10 h-full flex flex-col justify-between pt-4 pb-8 sm:pb-12">
          <div>
            {subtitle && (
              <p className="font-serif text-xl sm:text-3xl text-[#1A1A16] font-medium italic drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          REVEALED CONTENT INNER LAYER (Revealed cleanly in the center)
          ========================================================================= */}
      <div className="relative z-10 w-full editorial-container flex flex-col justify-center py-6">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C8B6F]/15 text-[#7C8B6F] font-mono text-xs uppercase tracking-widest mb-4 border border-[#7C8B6F]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2
            ref={titleRef}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-none mb-3 text-[#1A1A16]"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="font-serif text-xl sm:text-2xl text-[#7C8B6F] font-medium italic mb-3">
              {subtitle}
            </p>
          )}

          {subtext && (
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-3xl leading-relaxed mb-6 font-light">
              {subtext}
            </p>
          )}

          {/* Staggered Sub-Items Grid */}
          {subItems.length > 0 && (
            <div
              ref={contentRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[#1A1A16]/10"
            >
              {subItems.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all duration-300 shadow-sm group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#C9AF6B] font-bold">0{idx + 1}</span>
                    {item.tag && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#1A1A16]/5 uppercase text-[#7A7A70]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1.5 text-[#1A1A16] group-hover:text-[#7C8B6F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#7A7A70] leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {onOpenConsultation && (
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => onOpenConsultation(title)}
                className="btn-editorial-primary text-xs"
                data-cursor="Consult"
              >
                <span>Consult On {title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
