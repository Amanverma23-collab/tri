import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (prefillService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100904] border-t border-[#40372e] pt-20 pb-12">
      <div className="o-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Identity Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-[#40372e] flex items-center justify-center bg-[#382416] text-[#ffedd7] font-semibold text-xs tracking-wider">
                TS
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold tracking-[0.16em] text-[#ffedd7] uppercase">
                  TRISECURE
                </span>
                <span className="text-[9px] font-medium tracking-[0.24em] text-[#6c5f51] uppercase">
                  SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[#ffedd7]/80 leading-relaxed max-w-sm mb-6">
              Institutional business infrastructure delivering statutory food compliance, enterprise workforce payroll, financial lending advisory, and data-driven digital growth across India.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] text-[#dc5000] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#dc5000]" />
              <span>REGULATORY COMPLIANCE & FINANCIAL PARTNER</span>
            </div>
          </div>

          {/* Core Verticals Directory */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-medium tracking-[0.16em] text-[#6c5f51] uppercase mb-4">
              PRACTICE AREAS
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#ffedd7]">
              <li>
                <button
                  onClick={() => onOpenConsultation('Food Compliance & Licensing')}
                  className="hover:text-[#dc5000] transition-colors text-left uppercase"
                >
                  Food Compliance (FSSAI/DPCC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('HR Services & Payroll')}
                  className="hover:text-[#dc5000] transition-colors text-left uppercase"
                >
                  Workforce Staffing & Payroll
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Labour Law Compliance')}
                  className="hover:text-[#dc5000] transition-colors text-left uppercase"
                >
                  Labour Law & Statutory Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Business & Working Capital Loans')}
                  className="hover:text-[#dc5000] transition-colors text-left uppercase"
                >
                  Commercial & MSME Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Corporate Insurance')}
                  className="hover:text-[#dc5000] transition-colors text-left uppercase"
                >
                  Corporate Group Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Digital Marketing & SEO')}
                  className="hover:text-[#dc5000] transition-colors text-left uppercase"
                >
                  Digital Marketing & SEO
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <div className="text-[11px] font-medium tracking-[0.16em] text-[#6c5f51] uppercase mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#ffedd7] uppercase">
              <li>
                <a href="#services" className="hover:text-[#dc5000] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#readiness" className="hover:text-[#dc5000] transition-colors">
                  Checklist
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#dc5000] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#dc5000] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#dc5000] transition-colors">
                  Why Us
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Advisory Desk */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-medium tracking-[0.16em] text-[#6c5f51] uppercase mb-4">
              ADVISORY & LIAISON DESK
            </div>
            <div className="space-y-3 text-[13px] text-[#ffedd7]/90 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dc5000] shrink-0 mt-0.5" />
                <span>Pan-India Statutory Operations & Regional Municipal Desks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#dc5000] shrink-0" />
                <span>advisory@trisecuresolutions.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#dc5000] shrink-0" />
                <span>+91 (0) 11 4900 8800 / Direct Desk</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation()}
              className="btn-ghost w-full justify-center text-[11px]"
            >
              <span>CONNECT WITH A CONSULTANT</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="o-dashline my-8" />

        {/* Bottom Bar & Legal compliance micro-text */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#6c5f51]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} TRISECURE SOLUTIONS. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline text-[#40372e]">|</span>
            <span className="text-legal">
              * STATUTORY FILINGS, COMPLIANCE REGISTRATIONS AND LOAN DISBURSEMENTS ARE SUBJECT TO GOVERNMENT BODY APPOINTMENT & BANKING SANCTION NORMS.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] text-[#ffedd7] hover:text-[#dc5000] uppercase font-medium transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
