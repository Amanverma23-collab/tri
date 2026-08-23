import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Phone } from 'lucide-react';

interface EditorialHeroProps {
  onOpenConsultation: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 bg-[#F5F0E6] overflow-hidden border-b border-[#1A1A16]/10">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Minimal Editorial Typography, Narrative & Actions (7 cols)
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-7">
            {/* 1. Minimal Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0072EF] animate-pulse" />
              <span>TRISECURE F&B SOLUTIONS // CORPORATE DESK</span>
            </div>

            {/* 2. Headline & Pure Narrative */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A16] tracking-tight leading-[1.02]">
                Business Solutions, <br />
                <span className="italic font-normal text-[#7C8B6F]">Simplified.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] max-w-xl font-light leading-relaxed">
                Single-window institutional advisory across human capital, corporate insurance, debt capital financing, statutory food clearances, and digital brand scaling.
              </p>
            </div>

            {/* 3. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenConsultation}
                className="btn-editorial-primary text-xs"
                data-cursor="Book"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/services"
                className="btn-editorial-secondary text-xs"
                data-cursor="Services"
              >
                <span>Explore Practice Verticals</span>
              </Link>
            </div>

            {/* 4. Minimal Metric Proof Strip */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#1A1A16]/10 max-w-xl">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                  12+
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5 font-medium">
                  Years Enterprise Exp
                </p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0072EF] block">
                  100%
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5 font-medium">
                  Audit Readiness
                </p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                  Pan-India
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5 font-medium">
                  Regulatory Liaison
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Pure Framed Editorial Photography with Minimal Floating Pill (5 cols)
              ========================================================================= */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1A1A16]/15 group aspect-[4/5] bg-[#1A1A16]">
              {/* Premium Light-Filled Editorial Team Photography */}
              <img
                src="/images/home_hero.jpg"
                alt="Trisecure F&B Solutions Corporate Team"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Minimalist Floating Executive Status Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#1A1A16]/85 backdrop-blur-md border border-white/15 text-[#F5F0E6] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0072EF]/20 text-[#0072EF] flex items-center justify-center shrink-0 border border-[#0072EF]/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#C9AF6B] uppercase tracking-wider block font-semibold">
                      Direct Executive Desk
                    </span>
                    <a href="tel:+918585999922" className="font-sans text-xs text-white font-medium hover:text-[#0072EF] transition-colors">
                      +91 8585999922
                    </a>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#0072EF] font-semibold hover:underline"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
