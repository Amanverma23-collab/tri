import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Phone, Mail, Sparkles, Building2, Store } from 'lucide-react';

interface EditorialHeroProps {
  onOpenConsultation: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 bg-[#F5F0E6] overflow-hidden border-b border-[#1A1A16]/10">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* =========================================================================
              LEFT COLUMN: Editorial Narrative, Typography & Lead Actions (7 cols)
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* 1. Top Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>TRISECURE F&B SOLUTIONS // 2026</span>
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

              <p className="font-serif text-lg text-[#1A1A16] leading-snug">
                "Eliminating operational bottlenecks so Indian founders, restaurateurs, and enterprise executives can focus purely on scaling."
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#1A1A16]/10 font-mono text-xs text-[#7A7A70]">
                <span>Senior Advisor Direct Line:</span>
                <a href="tel:+918585999922" className="font-bold text-[#1A1A16] hover:text-[#0072EF] transition-colors">
                  +91 8585999922
                </a>
              </div>
            </div>

            {/* 4. Action Buttons Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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
                <span>Explore 4 Practice Verticals</span>
              </Link>
            </div>

            {/* 5. Proof Strip: Three Editorial Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#1A1A16]/10 max-w-xl">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                  12+
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                  Years Enterprise Exp
                </p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0072EF] block">
                  100%
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                  Audit Readiness
                </p>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                  Pan-India
                </span>
                <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                  Regulatory Liaison
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: High-Fashion Editorial Hero Visual with Floating Bento (5 cols)
              ========================================================================= */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1A1A16]/15 group aspect-[4/5] bg-[#1A1A16]">
              {/* Premium Light-Filled Editorial Team Photography */}
              <img
                src="/images/trisecure_hero.jpg"
                alt="Trisecure F&B Solutions Corporate Analytics & Team"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Gradient Vignette to keep text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A16]/80 via-transparent to-black/10" />

              {/* Bottom Image Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FAF6EE]/95 backdrop-blur-md border border-[#1A1A16]/10 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C8B6F] font-semibold">
                    // INTEGRATED PRACTICE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0072EF] animate-pulse" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A16] leading-snug">
                  Single-Window Corporate Advisory
                </h3>
                <p className="font-sans text-xs text-[#7A7A70] mt-1 font-light">
                  HR Infrastructure • Risk & Debt Advisory • FSSAI Food Compliance • Digital Scale
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
