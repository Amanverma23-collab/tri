import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface EditorialHeroProps {
  onOpenConsultation: (service?: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#F5F0E6] text-[#1A1A16] flex items-center overflow-hidden border-b border-[#1A1A16]/10">
      <div className="editorial-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT COLUMN: Editorial Copy, Executive Card & Metrics
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* 1. Top Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>TRISECURE SOLUTIONS // 2026</span>
              </div>
            </div>

            {/* 2. Headline & Subheadline */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A16] tracking-tight leading-[0.96]">
                Business <br />
                Solutions, <br />
                <span className="italic font-normal text-[#7C8B6F]">Simplified.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] max-w-xl font-light leading-relaxed">
                Comprehensive HR, Insurance, Loans, Food Compliance & Digital Marketing services for growing businesses across India.
              </p>
            </div>

            {/* 3. Executive Desk Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/10 shadow-md max-w-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-wider font-semibold">
                  // EXECUTIVE DESK
                </span>
                <ShieldCheck className="w-4 h-4 text-[#7C8B6F]" />
              </div>

              <p className="font-serif text-base sm:text-lg text-[#1A1A16] leading-snug">
                One unified partner to navigate licensing, risk protection, human capital, and digital scale.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-5 font-mono text-xs">
                <button
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center gap-1.5 text-[#1A1A16] font-bold uppercase hover:text-[#7C8B6F] transition-colors group"
                >
                  <span className="underline underline-offset-4">Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  to="/services"
                  className="text-[#7A7A70] uppercase hover:text-[#1A1A16] transition-colors"
                >
                  Explore 4 Verticals
                </Link>
              </div>
            </div>

            {/* 4. Bottom Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-6 max-w-xl border-t border-[#1A1A16]/10">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                  04
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider leading-tight">
                  PRACTICE VERTICALS
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C8B6F] block">
                  100%
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider leading-tight">
                  COMPLIANCE GUARANTEE
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                  Pan-India
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider leading-tight">
                  STATE & CENTRAL LICENSING
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Tall Rounded Hero Image Container
              ========================================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none h-[480px] sm:h-[560px] lg:h-[620px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#1A1A16]/10 bg-[#FAF6EE] group">
              <img
                src="/images/hero_team.jpg"
                alt="Trisecure Solutions Corporate Analytics & Team"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A16]/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
