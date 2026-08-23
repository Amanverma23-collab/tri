import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface EditorialHeroProps {
  onOpenConsultation: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 bg-[#F5F0E6] overflow-hidden border-b border-[#1A1A16]/10">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Minimal Editorial Typography, Narrative & Actions (7 cols)
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            {/* 1. Minimal Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[10px] sm:text-[11px] uppercase tracking-widest shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF] animate-pulse" />
              <span>CORPORATE ADVISORY // PAN-INDIA</span>
            </div>

            {/* 2. Headline & Pure Narrative */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A16] tracking-tight leading-[1.08]">
                Business Solutions,{' '}
                <span className="italic font-normal text-[#7C8B6F] block sm:inline">
                  Simplified.
                </span>
              </h1>

              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#7A7A70] max-w-xl font-light leading-relaxed">
                Single-window institutional advisory across human capital, corporate insurance, debt capital financing, statutory food clearances, and digital brand scaling.
              </p>
            </div>

            {/* 3. Action Buttons (Responsive on Mobile & Desktop) */}
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
            <div className="pt-5 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#1A1A16]/10 max-w-xl">
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

          {/* =========================================================================
              RIGHT COLUMN: Framed Editorial Photography (5 cols)
              ========================================================================= */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1A1A16]/15 group aspect-[4/3] sm:aspect-[4/5] bg-[#1A1A16]">
              {/* Premium Light-Filled Editorial Team Photography */}
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
    </section>
  );
};
