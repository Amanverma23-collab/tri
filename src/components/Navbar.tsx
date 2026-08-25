import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatedBackground } from './core/animated-background';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Licenses', path: '/licenses' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
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
    <header
      ref={mobileMenuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#1A1A16]/10 shadow-xs'
          : 'py-5 bg-[#FAF6EE]/80 backdrop-blur-sm'
      }`}
    >
      <div className="editorial-container flex items-center justify-between relative">
        {/* Brand Logo Wordmark with 360 Rotating Logo */}
        <Link
          to="/"
          id="navbar-brand-logo"
          className="group flex items-center gap-3 select-none"
          data-cursor="Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
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
              F&B SOLUTIONS
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-full bg-white border border-[#1A1A16]/15 flex items-center justify-center text-[#1A1A16] hover:bg-[#1A1A16]/5 transition-colors shadow-xs"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* =========================================================================
            COMPACT PROFESSIONAL MOBILE DROPDOWN POPOVER CARD
            ========================================================================= */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-4 sm:right-6 mt-3 w-56 sm:w-60 rounded-2xl bg-[#FAF6EE] border border-[#1A1A16]/15 shadow-2xl p-3 space-y-1.5 animate-in fade-in slide-in-from-top-3 duration-200 lg:hidden text-center">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <div key={link.name} className="flex justify-center">
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium ${
                      isActive
                        ? 'py-1.5 px-4 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold shadow-xs'
                        : 'py-1.5 px-4 rounded-full text-[#1A1A16] hover:bg-[#1A1A16]/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0072EF]" />
                    )}
                  </Link>
                </div>
              );
            })}

            {/* Compact CTA Button inside dropdown */}
            <div className="pt-2.5 border-t border-[#1A1A16]/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#1A1A16] text-[#F5F0E6] text-xs font-semibold hover:bg-[#0072EF] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Consult Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
