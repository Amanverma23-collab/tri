import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (prefillService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['services', 'readiness', 'locations', 'process', 'why-us'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'CHECKLIST', href: '#readiness', id: 'readiness' },
    { label: 'LOCATIONS', href: '#locations', id: 'locations' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'WHY TRISECURE', href: '#why-us', id: 'why-us' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#100904]/90 backdrop-blur-md border-b border-[#40372e]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="o-container flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-[#40372e] flex items-center justify-center bg-[#382416]/40 text-[#ffedd7] font-semibold text-xs tracking-wider group-hover:border-[#ffedd7] transition-colors">
            TS
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-[0.18em] text-[#ffedd7] uppercase">
              TRISECURE
            </span>
            <span className="text-[9px] font-medium tracking-[0.24em] text-[#6c5f51] uppercase">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className="relative text-[12px] font-medium text-[#ffedd7] uppercase tracking-[0.08em] hover:text-[#ffedd7] transition-colors py-1 group"
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-[#ffedd7]" />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] border-b border-dashed border-transparent group-hover:border-[#6c5f51] transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenConsultation()}
            className="btn-pill group"
          >
            <span>GET CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ffedd7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#ffedd7] hover:bg-[#382416]/40 rounded-lg border border-[#40372e]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#100904] border-b border-[#40372e] p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-medium text-[#ffedd7] uppercase tracking-[0.1em] py-2 border-b border-[#40372e]/40 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#6c5f51] text-xs">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-pill w-full mt-3 justify-center"
            >
              <span>GET CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 text-[#ffedd7]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
