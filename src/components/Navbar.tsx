import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { AnimatedBackground } from './core/animated-background';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Licenses', path: '/licenses' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine current active route tab
  const currentActiveTab =
    navLinks.find((link) =>
      link.path === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(link.path)
    )?.name || 'Home';

  const [highlightedTab, setHighlightedTab] = useState<string | null>(currentActiveTab);

  // Sync highlighted tab when route changes
  useEffect(() => {
    setHighlightedTab(currentActiveTab);
  }, [currentActiveTab]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#F5F0E6]/90 backdrop-blur-md border-b border-[#1A1A16]/10 shadow-xs'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Brand Logo Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 select-none"
            data-cursor="Home"
          >
            {/* Transparent Trisecure Brand Logo */}
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure Solutions Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight font-bold text-[#1A1A16] leading-none group-hover:text-[#7C8B6F] transition-colors">
                TRISECURE
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#7A7A70] uppercase font-semibold mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dynamic Contrast Aware AnimatedBackground */}
          <nav className="hidden lg:flex items-center rounded-full p-1.5 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#1A1A16]/10 shadow-xs">
            <AnimatedBackground
              value={currentActiveTab}
              onValueChange={(val) => setHighlightedTab(val ?? currentActiveTab)}
              className="rounded-full bg-[#1A1A16] shadow-sm"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.35,
              }}
              enableHover
            >
              {navLinks.map((link) => {
                const isUnderPill = (highlightedTab || currentActiveTab) === link.name;
                const isRouteActive = currentActiveTab === link.name;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    data-id={link.name}
                    data-cursor="View"
                    className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors duration-200 inline-block select-none ${
                      isUnderPill
                        ? 'text-[#F5F0E6]'
                        : isRouteActive
                        ? 'text-[#1A1A16] font-bold'
                        : 'text-[#1A1A16]/70 hover:text-[#1A1A16]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </AnimatedBackground>
          </nav>

          {/* Desktop Consultation Pill CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              data-cursor="Consult"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1A16] text-[#F5F0E6] text-xs font-semibold uppercase tracking-wider hover:bg-[#7C8B6F] transition-all duration-300 shadow-sm group"
            >
              <span>Consult</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3 h-3 text-[#F5F0E6]" />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden w-10 h-10 rounded-full border border-[#1A1A16]/15 flex items-center justify-center text-[#1A1A16] hover:bg-[#1A1A16]/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1A16] text-[#F5F0E6] flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure Solutions Logo"
                className="w-10 h-10 object-contain filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight font-bold text-white leading-none">
                  TRISECURE
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#C9AF6B] uppercase font-semibold mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between py-2 border-b border-white/10 group"
                  >
                    <span className="font-mono text-xs text-[#7C8B6F] mr-3">0{idx + 1}</span>
                    <span
                      className={`font-serif text-3xl sm:text-4xl tracking-tight transition-colors ${
                        isActive ? 'text-[#C9AF6B] italic' : 'text-white group-hover:text-[#7C8B6F]'
                      }`}
                    >
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-white/50">Direct Advisory Line</p>
              <a
                href="tel:+918585999922"
                className="font-serif text-lg text-[#F5F0E6] hover:text-[#C9AF6B] transition-colors"
              >
                +91 8585999922
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#7C8B6F] text-[#F5F0E6] font-semibold text-xs uppercase tracking-wider hover:bg-[#C9AF6B] hover:text-[#1A1A16] transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
