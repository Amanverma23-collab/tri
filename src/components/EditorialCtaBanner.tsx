import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

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
    <section className="py-20 sm:py-24 bg-[#1A1A16] text-[#F5F0E6] overflow-hidden border-t border-b border-white/10 select-none">
      <div className="editorial-container">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#262621]/90 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7C8B6F]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C9AF6B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Pitch & Action Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C9AF6B] font-mono text-xs uppercase tracking-widest border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{tagline}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                {title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed font-light max-w-xl">
                {description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation(serviceCategory)}
                  className="btn-editorial-light text-xs"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {secondaryBtnLink && (
                  <Link
                    to={secondaryBtnLink}
                    className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 text-xs"
                  >
                    <span>{secondaryBtnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Credibility Guarantee Bento Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9AF6B]/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center shrink-0 border border-[#C9AF6B]/25">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Rapid 2-Hour Response
                  </h4>
                  <p className="font-sans text-xs text-white/60 mt-0.5 font-light">
                    Direct callback from senior partners for urgent licensing, audit or payroll needs.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C8B6F]/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7C8B6F]/15 text-[#7C8B6F] flex items-center justify-center shrink-0 border border-[#7C8B6F]/25">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    100% Institutional Discretion
                  </h4>
                  <p className="font-sans text-xs text-white/60 mt-0.5 font-light">
                    Protected under non-disclosure agreements with complete data governance.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0072EF]/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0072EF]/15 text-[#0072EF] flex items-center justify-center shrink-0 border border-[#0072EF]/25">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Full Compliance Warranty
                  </h4>
                  <p className="font-sans text-xs text-white/60 mt-0.5 font-light">
                    Zero-error statutory filings backed by verified regulatory audit documentation.
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
