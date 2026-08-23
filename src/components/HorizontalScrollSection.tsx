import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface HorizontalCardItem {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  tag?: string;
  theme?: 'charcoal' | 'olive' | 'cream' | 'mustard';
}

interface HorizontalScrollSectionProps {
  id?: string;
  marker?: string;
  heading: string;
  subheading?: string;
  cards: HorizontalCardItem[];
}

export const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({
  id,
  marker = '02',
  heading,
  subheading,
  cards,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    let tween: gsap.core.Tween | null = null;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Enable pinned horizontal scroll on viewports 768px and wider
      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        const getScrollDistance = () => {
          const trackWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          return Math.max(0, trackWidth - viewportWidth + (viewportWidth > 1200 ? 180 : 100));
        };

        tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${Math.max(2400, getScrollDistance() * 2.8)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;

              if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${Math.max(0.08, progress)})`;
              }

              const cardIdx = Math.min(
                cards.length - 1,
                Math.floor(progress * cards.length)
              );

              if (counterRef.current) {
                counterRef.current.textContent = `CARD 0${cardIdx + 1} / 0${cards.length}`;
              }

              if (percentRef.current) {
                percentRef.current.textContent = `${Math.round(progress * 100)}% COMPLETED`;
              }
            },
          },
        });
      });

      return () => {
        mm.revert();
      };
    }, containerRef);

    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(timer1);
      ctx.revert();
    };
  }, [cards]);

  const getCardStyle = (theme?: string) => {
    switch (theme) {
      case 'charcoal':
        return 'bg-[#1A1A16] text-[#F5F0E6] border-white/10 shadow-2xl';
      case 'olive':
        return 'bg-[#7C8B6F] text-[#F5F0E6] border-[#637157] shadow-xl';
      case 'mustard':
        return 'bg-[#C9AF6B] text-[#1A1A16] border-[#B89F5B] shadow-xl';
      default:
        return 'bg-[#FAF6EE] text-[#1A1A16] border-[#1A1A16]/15 shadow-xl';
    }
  };

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full min-h-screen md:h-screen md:min-h-[640px] md:max-h-[960px] py-12 md:py-6 flex flex-col justify-between overflow-hidden bg-[#F5F0E6] border-y border-[#1A1A16]/10 select-none"
    >
      {/* 1. Header Information Bar */}
      <div className="editorial-container pt-2 md:pt-4 pb-2 md:pb-3 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#1A1A16]/10 pb-3 md:pb-4">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#7C8B6F] uppercase tracking-widest mb-1">
              <span className="w-6 h-px bg-[#7C8B6F]" />
              <span>Section {marker} // Service Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight leading-tight">
              {heading}
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-1.5">
            {subheading && (
              <p className="font-sans text-xs sm:text-sm text-[#7A7A70] max-w-md md:text-right font-light line-clamp-2">
                {subheading}
              </p>
            )}
            <div className="hidden md:flex items-center gap-3 font-mono text-xs text-[#1A1A16]">
              <span
                ref={counterRef}
                className="px-2.5 py-0.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold text-[11px]"
              >
                CARD 01 / 0{cards.length}
              </span>
              <span className="text-[#7A7A70] tracking-wider uppercase text-[10px] flex items-center gap-1">
                <span>SCROLL DOWN TO TRAVERSE</span>
                <ArrowRight className="w-3 h-3 text-[#7C8B6F] animate-pulse" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Horizontal Scroll Track */}
      <div className="w-full flex-1 flex items-center overflow-x-auto md:overflow-visible py-2 md:py-3 no-scrollbar">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row items-stretch gap-5 md:gap-6 px-6 sm:px-12 md:pl-16 md:pr-32 w-full md:w-max will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`w-full md:w-[420px] lg:w-[460px] max-h-[460px] rounded-3xl p-6 sm:p-8 md:p-9 border flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 shrink-0 ${getCardStyle(
                card.theme
              )}`}
              data-cursor="Explore"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-current/15">
                  <span className="font-serif text-3xl sm:text-4xl font-light">
                    {card.number}
                  </span>
                  {card.tag && (
                    <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-current/10 font-semibold tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{card.tag}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 leading-snug">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <p className="font-serif text-sm sm:text-base italic opacity-85 mb-3">
                    {card.subtitle}
                  </p>
                )}

                <p className="font-sans text-xs sm:text-sm opacity-80 leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                  {card.description}
                </p>
              </div>

              {/* Card Bottom Action Link */}
              {card.link && (
                <div className="pt-4 mt-3 border-t border-current/15">
                  <Link
                    to={card.link}
                    className="inline-flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-wider font-semibold group"
                  >
                    <span className="group-hover:underline underline-offset-4">Explore Vertical</span>
                    <div className="w-8 h-8 rounded-full bg-current/10 flex items-center justify-center transition-all duration-300 group-hover:bg-current group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Progress Bar & Track Indicators */}
      <div className="editorial-container pb-2 md:pb-4 hidden md:block w-full">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#7A7A70]">
            <span className="w-2 h-2 rounded-full bg-[#7C8B6F]" />
            <span>HORIZONTAL TRAVERSAL</span>
          </div>

          {/* Progress track line (GPU Scaled) */}
          <div className="flex-1 max-w-xs h-1 bg-[#1A1A16]/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-[#7C8B6F] rounded-full will-change-transform"
              style={{
                transform: 'scaleX(0.08)',
                transformOrigin: 'left center',
                transition: 'none',
              }}
            />
          </div>

          <div
            ref={percentRef}
            className="font-mono text-[11px] text-[#1A1A16] font-semibold"
          >
            0% COMPLETED
          </div>
        </div>
      </div>
    </section>
  );
};
