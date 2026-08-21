import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (prefillService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-[#40372e]/60 bg-[#100904]">
      {/* Edge Branding — Vertical Text Running Down Right Margin (As required by DESIGN.md) */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right items-center gap-3 pointer-events-none z-30 opacity-40">
        <span className="text-[10px] font-medium tracking-[0.25em] text-[#ffedd7] uppercase">
          TRISECURE · SOLUTIONS 1-MODEL
        </span>
        <div className="w-12 h-[1px] bg-[#40372e]" />
      </div>

      <div className="o-container w-full flex-1 flex flex-col justify-center">
        {/* Top Tagline & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#40372e] bg-[#382416]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dc5000] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.14em] text-[#ffedd7] uppercase">
              ENTERPRISE BUSINESS, COMPLIANCE & FINANCIAL ADVISORY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-medium tracking-[0.1em] text-[#6c5f51] uppercase">
            <span>PAN-INDIA REACH</span>
            <span className="text-[#40372e]">/</span>
            <span>GOVERNMENT LIAISON</span>
            <span className="text-[#40372e]">/</span>
            <span>MULTI-BANK DESK</span>
          </div>
        </div>

        {/* Display Typography Lockup (51px+ 500-weight uppercase, tight leading) */}
        <div className="max-w-5xl">
          <h1 className="text-[38px] sm:text-[56px] lg:text-[72px] font-medium tracking-[-0.02em] leading-[0.92] text-[#ffedd7] uppercase mb-8">
            INTEGRATED <br className="hidden sm:block" />
            BUSINESS SOLUTIONS <br />
            <span className="text-[#6c5f51] hover:text-[#ffedd7] transition-colors">
              FOR MODERN ENTERPRISE.
            </span>
          </h1>

          {/* Mixed-case Body Copy (The only conversational voice at weight 400 as per DESIGN.md) */}
          <p className="text-[18px] sm:text-[24px] lg:text-[27px] font-normal leading-[1.3] text-[#ffedd7]/90 max-w-4xl mb-10">
            From statutory food compliance and enterprise workforce management to financial lending and digital marketing — TriSecure provides the institutional infrastructure for serious businesses to operate and grow without friction.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-pill px-8 py-3.5 text-[13px]"
            >
              <span>GET EXPERT CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-[#ffedd7]" />
            </button>

            <a
              href="#services"
              className="btn-ghost px-6 py-3 text-[12px]"
            >
              <span>EXPLORE 4 CORE VERTICALS</span>
            </a>

            <div className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center gap-2 text-[11px] font-medium text-[#6c5f51] tracking-[0.08em] uppercase sm:ml-4">
              <ShieldCheck className="w-4 h-4 text-[#dc5000]" />
              <span>Direct Statutory & Banking Representation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Dashboard Strip */}
      <div className="o-container w-full mt-14">
        <div className="o-dashline my-4" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[#6c5f51] tracking-[0.1em] uppercase mb-1">
              01 · FOOD COMPLIANCE
            </span>
            <span className="text-[14px] font-medium text-[#ffedd7] uppercase">
              FSSAI / MCD / DPCC / TRADE
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[#6c5f51] tracking-[0.1em] uppercase mb-1">
              02 · WORKFORCE INFRASTRUCTURE
            </span>
            <span className="text-[14px] font-medium text-[#ffedd7] uppercase">
              PAYROLL / STAFFING / LABOUR LAW
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[#6c5f51] tracking-[0.1em] uppercase mb-1">
              03 · FINANCIAL ADVISORY
            </span>
            <span className="text-[14px] font-medium text-[#ffedd7] uppercase">
              BUSINESS LOANS / ASSET COVER
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[#6c5f51] tracking-[0.1em] uppercase mb-1">
              04 · DIGITAL GROWTH
            </span>
            <span className="text-[14px] font-medium text-[#ffedd7] uppercase">
              SEO / PERFORMANCE / BRAND
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
