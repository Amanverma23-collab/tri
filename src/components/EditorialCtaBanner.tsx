import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface EditorialCtaBannerProps {
  tagline?: string;
  title: string;
  description: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  serviceCategory?: string;
  onOpenConsultation: (service?: string) => void;
}

export const EditorialCtaBanner: React.FC<EditorialCtaBannerProps> = ({
  tagline = '// STRATEGIC PARTNERSHIP',
  title,
  description,
  primaryBtnText = 'Schedule Consultation',
  secondaryBtnText = 'Explore Practice Verticals',
  secondaryBtnLink = '/services',
  serviceCategory = 'General Advisory',
  onOpenConsultation,
}) => {
  return (
    <section className="py-12 sm:py-24 bg-[#1A1A16] text-[#F5F0E6] overflow-hidden border-t border-b border-white/10 select-none">
      <div className="editorial-container">
        <div className="p-6 sm:p-10 lg:p-16 rounded-3xl bg-[#22221D] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7C8B6F]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C9AF6B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Pitch & Action Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C9AF6B] font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{tagline}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-snug sm:leading-[1.08]">
                {title}
              </h2>

              <p className="font-sans text-xs sm:text-base text-white/75 leading-relaxed font-light max-w-xl">
                {description}
              </p>

              {/* Action Buttons (Responsive & High-Contrast) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
                <button
                  onClick={() => onOpenConsultation(serviceCategory)}
                  className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#FAF6EE] text-[#1A1A16] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#C9AF6B] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {secondaryBtnLink && (
                  <Link
                    to={secondaryBtnLink}
                    className="w-full sm:w-auto py-3 px-6 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{secondaryBtnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9AF6B]" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Credibility Guarantee Bento Cards (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 pt-2 lg:pt-0">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9AF6B]/40 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center shrink-0 border border-[#C9AF6B]/25">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white leading-snug">
                    Rapid 2-Hour Response
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5 font-light leading-relaxed">
                    Direct callback from senior partners for urgent licensing, audit or payroll needs.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C8B6F]/40 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#7C8B6F]/15 text-[#7C8B6F] flex items-center justify-center shrink-0 border border-[#7C8B6F]/25">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white leading-snug">
                    100% Institutional Discretion
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5 font-light leading-relaxed">
                    Protected under non-disclosure agreements with complete data governance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
