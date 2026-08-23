import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="relative bg-[#131713] text-[#F5F0E6] overflow-hidden select-none border-t border-[#7C8B6F]/20">
      {/* Top Accent Gradient Border Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9AF6B]/60 to-transparent" />

      {/* 1. Top Callout Strip (Desktop Only) */}
      <div className="hidden md:block border-b border-white/10 bg-[#161B16]/80 py-10 sm:py-12">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block font-semibold">
              // Direct Corporate Advisory
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to streamline your business compliance & growth?
            </h3>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="btn-editorial-light text-xs shrink-0"
            data-cursor="Consult"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Main Directory Grid */}
      <div className="editorial-container pt-12 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Wordmark & Mission (4 cols) */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img
                  src="/images/trisecure_logo.png"
                  alt="Trisecure Solutions Logo"
                  className="w-full h-full object-contain animate-logo-spin"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-tight font-bold text-white group-hover:text-[#0072EF] transition-colors leading-none">
                  TRISECURE
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#C9AF6B] uppercase font-semibold mt-1">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-sm">
              Business Solutions, Simplified. End-to-end statutory licensing, workforce architecture, liability protection, and digital growth acceleration under a single partner desk.
            </p>

            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#7C8B6F]">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9AF6B]" />
              <span>Pan-India Compliance Governance</span>
            </div>
          </div>

          {/* Combined 1-Row Grid on Mobile: Practice Verticals & Regulatory Matrix Side-by-Side (5 cols) */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-8">
            {/* Left: Practice Verticals */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] sm:text-xs text-[#C9AF6B] tracking-widest uppercase block font-semibold">
                // Practice Verticals
              </span>
              <ul className="space-y-2 font-sans text-xs sm:text-sm">
                <li>
                  <Link
                    to="/services/hr"
                    className="text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-all text-xs leading-tight"
                  >
                    <ArrowRight className="w-3 h-3 text-[#7C8B6F] shrink-0" />
                    <span>HR & Payroll</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/insurance-loans"
                    className="text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-all text-xs leading-tight"
                  >
                    <ArrowRight className="w-3 h-3 text-[#7C8B6F] shrink-0" />
                    <span>Insurance & Loans</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/food-compliance"
                    className="text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-all text-xs leading-tight"
                  >
                    <ArrowRight className="w-3 h-3 text-[#7C8B6F] shrink-0" />
                    <span>Food (FSSAI)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/digital-marketing"
                    className="text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-all text-xs leading-tight"
                  >
                    <ArrowRight className="w-3 h-3 text-[#7C8B6F] shrink-0" />
                    <span>Digital Scale</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/licenses"
                    className="text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-all text-xs leading-tight"
                  >
                    <ArrowRight className="w-3 h-3 text-[#C9AF6B] shrink-0" />
                    <span>License Matrix</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right: Regulatory Matrix */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] sm:text-xs text-[#C9AF6B] tracking-widest uppercase block font-semibold">
                // Regulatory Matrix
              </span>
              <ul className="space-y-2 font-mono text-[11px] sm:text-xs text-white/60">
                <li
                  className="hover:text-white transition-colors cursor-pointer leading-tight"
                  onClick={() => onOpenConsultation('FSSAI Central & State License')}
                >
                  • FSSAI State/Central
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer leading-tight"
                  onClick={() => onOpenConsultation('Shop & Commercial Establishment Act')}
                >
                  • Shop & Establishment
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer leading-tight"
                  onClick={() => onOpenConsultation('DPCC Pollution CTE & CTO')}
                >
                  • DPCC Clearances
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer leading-tight"
                  onClick={() => onOpenConsultation('MCD Municipal Health Trade')}
                >
                  • MCD Health Trade
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer leading-tight"
                  onClick={() => onOpenConsultation('Fire Safety NOC Sanctions')}
                >
                  • Fire Safety NOC
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer leading-tight"
                  onClick={() => onOpenConsultation('PF & ESIC Establishment Registration')}
                >
                  • PF / ESIC Registrations
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Engagement Desk (3 cols) */}
          <div className="col-span-12 lg:col-span-3 space-y-3">
            <span className="font-mono text-[11px] sm:text-xs text-[#C9AF6B] tracking-widest uppercase block font-semibold">
              // Direct Engagement Desk
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <a
                href="tel:+918585999922"
                className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#7C8B6F] transition-colors block group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/50 block">Direct Helpline</span>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#C9AF6B] transition-colors">
                      +91 8585999922
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="mailto:anuragsharma0120@gmail.com"
                className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#7C8B6F] transition-colors block group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9AF6B]/20 text-[#C9AF6B] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/50 block">Executive Email</span>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#C9AF6B] transition-colors truncate block max-w-[170px]">
                      anuragsharma0120@gmail.com
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-2 flex items-start gap-2 text-white/50 font-mono text-[10px] sm:text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#7C8B6F] shrink-0 mt-0.5" />
              <span>Headquarters: Delhi NCR • Pan-India Practice Operations</span>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} Trisecure Solution. All rights reserved. Single-Window Corporate Advisory.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/pricing" className="hover:text-white transition-colors">
              Fee Matrix
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
