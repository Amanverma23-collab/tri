import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#1A1A16] text-[#F5F0E6] pt-24 pb-12 border-t border-white/10 relative overflow-hidden bg-charcoal-textured">
      {/* Background oversized decorative watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-serif text-[18vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none">
        TRISECURE
      </div>

      <div className="editorial-container relative z-10">
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Col 1: Brand Wordmark & Mission */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#7C8B6F] flex items-center justify-center p-2">
                  <ShieldCheck className="w-6 h-6 text-[#1A1A16]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                    TRISECURE
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-[#C9AF6B] uppercase font-semibold">
                    SOLUTIONS
                  </p>
                </div>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#F5F0E6]/80 leading-snug max-w-md italic">
                Business Solutions, Simplified. Specialized advisory for enterprise compliance, 
                human capital, insurance, and digital growth.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="btn-editorial-light"
                data-cursor="Consult"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Practice Verticals */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-6">
              // Practice Verticals
            </span>
            <ul className="space-y-3.5">
              <li>
                <Link
                  to="/services/hr"
                  className="group flex items-center justify-between text-sm text-[#F5F0E6]/75 hover:text-[#C9AF6B] transition-colors"
                >
                  <span>HR & Workforce Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/insurance-loans"
                  className="group flex items-center justify-between text-sm text-[#F5F0E6]/75 hover:text-[#C9AF6B] transition-colors"
                >
                  <span>Insurance & Loan Advisory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/food-compliance"
                  className="group flex items-center justify-between text-sm text-[#F5F0E6]/75 hover:text-[#C9AF6B] transition-colors"
                >
                  <span>Food Compliance & Licensing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="group flex items-center justify-between text-sm text-[#F5F0E6]/75 hover:text-[#C9AF6B] transition-colors"
                >
                  <span>Digital Marketing & Branding</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/licenses"
                  className="group flex items-center justify-between text-sm text-[#F5F0E6]/75 hover:text-[#C9AF6B] transition-colors"
                >
                  <span>Government & Trade Licenses</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="group flex items-center justify-between text-sm text-[#F5F0E6]/75 hover:text-[#C9AF6B] transition-colors"
                >
                  <span>Consultation Fee Schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Contact */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-6">
              // Direct Advisory Desk
            </span>
            <div className="space-y-4">
              <a
                href="tel:+918585999922"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B] hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-white/50 uppercase">Direct Helpline</p>
                  <p className="font-serif text-lg font-semibold text-white group-hover:text-[#C9AF6B] transition-colors">
                    +91 8585999922
                  </p>
                </div>
              </a>

              <a
                href="mailto:anuragsharma0120@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#7C8B6F] hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-white/50 uppercase">Official Email</p>
                  <p className="font-sans text-sm font-medium text-white group-hover:text-[#7C8B6F] transition-colors truncate">
                    anuragsharma0120@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <MapPin className="w-4 h-4 text-[#C9AF6B] shrink-0" />
                <p className="font-mono text-xs text-white/60">
                  Delhi NCR & Pan-India Corporate Operations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Typographic Masthead Banner */}
        <div className="py-12 border-b border-white/10 text-center">
          <h2 className="font-serif text-display-giant text-white/90 font-normal tracking-tighter">
            TRISECURE
          </h2>
        </div>

        {/* Bottom Legal & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <p>© 2026 Trisecure Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/licenses" className="hover:text-white transition-colors">Licenses</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
