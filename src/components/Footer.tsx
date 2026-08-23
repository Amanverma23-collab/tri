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

      {/* 1. Top Callout Strip */}
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

      {/* 2. Main 4-Column Directory Grid */}
      <div className="editorial-container pt-16 sm:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Wordmark & Mission with 360 Rotating Logo (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img
                  src="/images/trisecure_logo.png"
                  alt="Trisecure F&B Solutions Logo"
                  className="w-full h-full object-contain animate-logo-spin"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight font-bold text-white group-hover:text-[#0072EF] transition-colors leading-none">
                  TRISECURE
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#C9AF6B] uppercase font-semibold mt-1">
                  F&B SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-sm">
              Business Solutions, Simplified. End-to-end statutory licensing, workforce architecture, liability protection, and digital growth acceleration under a single partner desk.
            </p>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[#7C8B6F]">
              <ShieldCheck className="w-4 h-4 text-[#C9AF6B]" />
              <span>Pan-India Compliance Governance</span>
            </div>
          </div>

          {/* Col 2: Practice Verticals (3 cols) */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block font-semibold">
              // Practice Verticals
            </span>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              <li>
                <Link
                  to="/services/hr"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#7C8B6F]" />
                  <span>HR & Workforce Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/insurance-loans"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#7C8B6F]" />
                  <span>Insurance & Debt Advisory</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/food-compliance"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#7C8B6F]" />
                  <span>Food Compliance & FSSAI</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#7C8B6F]" />
                  <span>Digital Marketing & Branding</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/licenses"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9AF6B]" />
                  <span>Statutory License Matrix</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Licensing (2 cols) */}
          <div className="md:col-span-6 lg:col-span-2 space-y-4">
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block font-semibold">
              // Regulatory Matrix
            </span>
            <ul className="space-y-2 font-mono text-xs text-white/60">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenConsultation('FSSAI Central & State License')}>
                • FSSAI State & Central
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenConsultation('Shop & Commercial Establishment')}>
                • Shop & Establishment
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenConsultation('DPCC Environmental Consent')}>
                • DPCC Clearances (CTE/CTO)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenConsultation('MCD Health & Trade License')}>
                • MCD Health Trade Permit
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenConsultation('Fire Safety & NOC')}>
                • Fire Safety Sanctions
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenConsultation('Statutory Labor Compliance (PF/ESIC)')}>
                • PF / ESIC Registrations
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Leadership Contacts (3 cols) */}
          <div className="md:col-span-12 lg:col-span-3 space-y-4">
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block font-semibold">
              // Direct Engagement Desk
            </span>

            <a
              href="tel:+918585999922"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B] hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C9AF6B]/20 text-[#C9AF6B] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/50 uppercase">Direct Helpline</p>
                <p className="font-mono text-sm sm:text-base font-bold text-white tracking-wider group-hover:text-[#C9AF6B] transition-colors">
                  +91 8585999922
                </p>
              </div>
            </a>

            <a
              href="mailto:anuragsharma0120@gmail.com"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C8B6F] hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="font-mono text-[10px] text-white/50 uppercase">Executive Email</p>
                <p className="font-sans text-xs font-medium text-white group-hover:text-[#7C8B6F] transition-colors truncate">
                  anuragsharma0120@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#C9AF6B] shrink-0" />
              <p className="font-mono text-[11px] text-white/60">
                Delhi NCR & Pan-India Corporate Operations
              </p>
            </div>
          </div>
        </div>

        {/* Large Typographic Masthead Banner with Exact Logo Blue Color & Clean No-Rays Hover State */}
        <div className="py-12 sm:py-16 border-b border-white/10 text-center select-none overflow-hidden group">
          <Link
            to="/"
            className="inline-block"
            data-cursor="Home"
          >
            <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-bold text-white/90 group-hover:text-[#0072EF] tracking-tight leading-none transition-colors duration-300 ease-out cursor-pointer">
              TRISECURE
            </h2>
          </Link>
        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <p>© 2026 Trisecure F&B Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/licenses" className="hover:text-white transition-colors">Licenses</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
