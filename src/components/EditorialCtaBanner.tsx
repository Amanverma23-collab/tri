import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Sparkles, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface EditorialCtaBannerProps {
  tagline?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  onOpenConsultation: (service?: string) => void;
  serviceCategory?: string;
}

export const EditorialCtaBanner: React.FC<EditorialCtaBannerProps> = ({
  tagline = '// READY TO SCALE & SECURE?',
  title = 'Ready to simplify and scale your enterprise operations?',
  description = 'Connect with our executive advisory desk today to streamline your statutory licenses, workforce compliance, risk protection, and digital growth under a unified corporate roof.',
  primaryBtnText = 'Schedule Consultation',
  secondaryBtnText = 'Direct Line: +91 8585999922',
  secondaryBtnLink,
  onOpenConsultation,
  serviceCategory,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6EE] border-t border-[#1A1A16]/10 relative overflow-hidden">
      <div className="editorial-container">
        {/* Bento Container with Deep Forest Charcoal & Gold Accents */}
        <div className="relative rounded-3xl bg-[#141814] text-[#F5F0E6] p-8 sm:p-12 lg:p-14 border border-[#C9AF6B]/30 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9AF6B]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7C8B6F]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Action Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#C9AF6B]/15 text-[#C9AF6B] font-mono text-[11px] uppercase tracking-widest border border-[#C9AF6B]/30">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>{tagline}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
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

                {secondaryBtnLink ? (
                  <Link
                    to={secondaryBtnLink}
                    className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 text-xs"
                  >
                    <span>{secondaryBtnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <a
                    href="tel:+918585999922"
                    className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 text-xs flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9AF6B]" />
                    <span>{secondaryBtnText}</span>
                  </a>
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
                    Direct assignment to a dedicated senior practice lead with zero call center wait times.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C8B6F]/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center shrink-0 border border-[#7C8B6F]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    100% Audit Readiness
                  </h4>
                  <p className="font-sans text-xs text-white/60 mt-0.5 font-light">
                    Guaranteed statutory accuracy across labor, environmental, municipal and food safety laws.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9AF6B]/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center shrink-0 border border-[#C9AF6B]/25">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-legacy text-base font-bold text-white">
                    Pan-India Execution Desk
                  </h4>
                  <p className="font-sans text-xs text-white/60 mt-0.5 font-light">
                    Direct central authority and state-level liaison across Delhi NCR, Haryana, UP and pan-India.
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
