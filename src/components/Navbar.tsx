import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'CHECKLIST', href: '#readiness' },
    { label: 'PROCESS', href: '#process' },
    { label: 'WHY TRISECURE', href: '#why-us' }
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto rounded-full bg-white/90 backdrop-blur-xl border border-[#e5e4de] shadow-[0_8px_30px_rgba(10,17,24,0.04)] px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all">
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#0a1118] flex items-center justify-center text-white font-mono font-bold text-xs group-hover:bg-[#047857] transition-colors">
            TS
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold tracking-tight text-[#0a1118] uppercase">
              TRISECURE
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-semibold tracking-wider text-[#475569] hover:text-[#047857] transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button-in-Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation()}
            className="btn-island-primary text-[12px] py-1.5 pl-4 pr-1.5 uppercase font-medium"
          >
            <span>FREE CONSULTATION</span>
            <div className="btn-island-icon w-6 h-6">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0a1118] hover:bg-[#f4f3ee] rounded-full"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#e5e4de] shadow-2xl p-5 pointer-events-auto animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[13px] font-semibold tracking-wider text-[#0a1118] uppercase py-2 border-b border-[#f1f0ea] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#64748b]">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-island-primary w-full justify-between mt-2 py-2 px-4"
            >
              <span className="text-xs uppercase">Get Free Consultation</span>
              <div className="btn-island-icon w-6 h-6">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
