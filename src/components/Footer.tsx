import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, CheckCircle } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1118] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="o-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#047857] flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
                TS
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold tracking-tight text-white uppercase">
                  TRISECURE <span className="text-[#34d399]">SOLUTIONS</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  BUSINESS & STATUTORY ADVISORY
                </span>
              </div>
            </div>

            <p className="text-[14px] text-slate-300 leading-relaxed max-w-sm mb-6">
              Single-window partner for Indian enterprises delivering Food Regulatory Compliance, HR & Payroll Management, Banking Loan Syndication, and Strategic Digital Marketing.
            </p>

            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#34d399]">
              <CheckCircle className="w-4 h-4 text-[#34d399]" />
              <span>Official Government Portal Liaison & Banking Consortium</span>
            </div>
          </div>

          {/* 4 Core Practices */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
              01 // PRACTICE DIRECTORY
            </h4>
            <ul className="space-y-2.5 text-[13px] text-slate-300">
              <li>
                <button
                  onClick={() => onOpenConsultation('Food Compliance & Licensing')}
                  className="hover:text-[#34d399] transition-colors text-left uppercase cursor-pointer"
                >
                  Food Compliance & FSSAI (Central/State)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('HR Staffing & Payroll')}
                  className="hover:text-[#34d399] transition-colors text-left uppercase cursor-pointer"
                >
                  Workforce Staffing & Payroll Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Labour Law & Statutory Audit')}
                  className="hover:text-[#34d399] transition-colors text-left uppercase cursor-pointer"
                >
                  Labour Law, EPF, ESIC & POSH
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Business & Working Capital Loans')}
                  className="hover:text-[#34d399] transition-colors text-left uppercase cursor-pointer"
                >
                  Commercial, Working Capital & MSME Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Digital Marketing & Google Ads')}
                  className="hover:text-[#34d399] transition-colors text-left uppercase cursor-pointer"
                >
                  Digital Marketing & Enterprise Growth
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
              02 // NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-[13px] text-slate-300 uppercase">
              <li>
                <a href="#services" className="hover:text-[#34d399] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#readiness" className="hover:text-[#34d399] transition-colors">
                  Checklist
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#34d399] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#34d399] transition-colors">
                  Why Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support Desk */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
              03 // ADVISORY DESK
            </h4>
            <div className="space-y-3 text-[13px] text-slate-300 mb-6">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#34d399] shrink-0" />
                <span>+91 11 4900 8800 (Direct Desk)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#34d399] shrink-0" />
                <span>advisory@trisecuresolutions.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                <span>Pan-India Statutory Operations & Municipal Desks</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation()}
              className="btn-island-secondary w-full justify-center text-[12px] bg-slate-800 text-white border-slate-700 hover:bg-slate-700 cursor-pointer"
            >
              <span>CONNECT WITH A CONSULTANT</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} TRISECURE SOLUTIONS. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer uppercase"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
