import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowRight, Phone, ShieldCheck, Check } from 'lucide-react';
import { AnimatedBackground } from './core/animated-background';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', code: '01', desc: 'Headquarters & Vision' },
    { name: 'About', path: '/about', code: '02', desc: 'Leadership & Pedigree' },
    { name: 'Services', path: '/services', code: '03', desc: '4 Practice Verticals' },
    { name: 'Licenses', path: '/licenses', code: '04', desc: 'Statutory Matrix' },
    { name: 'Pricing', path: '/pricing', code: '05', desc: 'Advisory Retainers' },
    { name: 'Contact', path: '/contact', code: '06', desc: 'Direct Partner Desk' },
  ];

  const quickPractices = [
    { label: 'HR & Payroll', path: '/services/hr' },
    { label: 'Insurance & Loans', path: '/services/insurance-loans' },
    { label: 'Food Compliance', path: '/services/food-compliance' },
    { label: 'Digital Growth', path: '/services/digital-marketing' },
  ];

  // Identify currently active tab by route
  const currentActiveTab =
    navLinks.find((link) =>
      link.path === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(link.path)
    )?.name || 'Home';

  const [highlightedTab, setHighlightedTab] = useState<string>(currentActiveTab);

  useEffect(() => {
    setHighlightedTab(currentActiveTab);
  }, [currentActiveTab]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#1A1A16]/10 shadow-xs'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Brand Logo Wordmark with 360 Rotating Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 select-none"
            data-cursor="Home"
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure Solutions Logo"
                className="w-full h-full object-contain animate-logo-spin"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A16] leading-none">
                TRISECURE
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#7C8B6F] uppercase font-semibold mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-[#1A1A16]/5 border border-[#1A1A16]/10 backdrop-blur-sm">
            <AnimatedBackground
              defaultValue={currentActiveTab}
              onValueChange={(val) => {
                if (val) setHighlightedTab(val);
              }}
              className="rounded-full bg-[#1A1A16]"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.35,
              }}
              enableHover
            >
              {navLinks.map((link) => {
                const isUnderPill = (highlightedTab || currentActiveTab) === link.name;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    data-id={link.name}
                    data-cursor={link.name}
                    className={`relative z-10 px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors duration-200 ${
                      isUnderPill
                        ? 'text-[#F5F0E6] font-semibold'
                        : 'text-[#1A1A16] font-medium hover:text-[#0072EF]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </AnimatedBackground>
          </nav>

          {/* Desktop Direct CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-editorial-primary text-xs py-2.5 px-5"
              data-cursor="Book"
            >
              <span>Consult Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full border border-[#1A1A16]/15 flex items-center justify-center text-[#1A1A16] hover:bg-[#1A1A16]/5 transition-colors"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          REDESIGNED LUXURY EDITORIAL MOBILE NAVIGATION DRAWER
          ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A16] text-[#F5F0E6] flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-in fade-in zoom-in-95 duration-200 overflow-y-auto">
          
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure Solutions Logo"
                className="w-9 h-9 object-contain animate-logo-spin"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight font-bold text-white leading-none">
                  TRISECURE
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#C9AF6B] uppercase font-semibold mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Circular Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close Mobile Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Route Cards */}
          <div className="py-6 space-y-2 flex-1">
            <div className="font-mono text-[10px] uppercase text-[#C9AF6B] tracking-widest font-semibold mb-3 px-1">
              // Navigation Directory
            </div>

            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3 rounded-2xl transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-white/15 border border-[#C9AF6B]/50 shadow-md text-white'
                        : 'bg-white/5 border border-white/5 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-[#C9AF6B] text-[#1A1A16]'
                            : 'bg-white/10 text-[#C9AF6B]'
                        }`}
                      >
                        {link.code}
                      </span>
                      <div>
                        <span className="font-serif text-lg sm:text-xl font-bold block leading-snug">
                          {link.name}
                        </span>
                        <span className="font-sans text-[11px] text-white/50 block font-light">
                          {link.desc}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isActive ? 'text-[#C9AF6B]' : 'text-white/40'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Quick Practice Shortcuts */}
            <div className="pt-5">
              <span className="font-mono text-[10px] uppercase text-white/50 tracking-widest block mb-2 px-1">
                // Quick Practice Access
              </span>
              <div className="grid grid-cols-2 gap-2">
                {quickPractices.map((prac, pIdx) => (
                  <Link
                    key={pIdx}
                    to={prac.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9AF6B]/40 text-center font-sans text-xs text-white/80 hover:text-white transition-all block font-medium"
                  >
                    {prac.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Footer: Hotline + CTA Button */}
          <div className="pt-5 border-t border-white/10 space-y-3.5 shrink-0">
            {/* Direct Phone Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-white/80 px-1">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9AF6B]" />
                <span className="text-white/50">Direct Hotline:</span>
              </span>
              <a
                href="tel:+918585999922"
                className="font-mono text-xs font-bold text-[#C9AF6B] tracking-wider hover:underline"
              >
                +91 8585999922
              </a>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#FAF6EE] text-[#1A1A16] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#C9AF6B] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Schedule Advisory Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="text-center font-mono text-[10px] text-white/40">
              Corporate Headquarters • Delhi NCR & Pan-India
            </p>
          </div>

        </div>
      )}
    </>
  );
};
