import React, { useState, useEffect } from 'react';
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

  // State to track hover highlight for dynamic text contrast
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
          {/* Brand Logo Wordmark: Trisecure F&B Solutions */}
          <Link
            to="/"
            className="group flex items-center gap-3 select-none"
            data-cursor="Home"
          >
            {/* Transparent Trisecure Brand Logo */}
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure F&B Solutions Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight font-bold text-[#1A1A16] leading-none group-hover:text-[#0072EF] transition-colors">
                TRISECURE
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#7A7A70] uppercase font-semibold mt-0.5">
                F&B SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dynamic Contrast Aware AnimatedBackground */}
          <nav
            onMouseLeave={() => setHighlightedTab(currentActiveTab)}
            className="hidden lg:flex items-center rounded-full p-1.5 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#1A1A16]/10 shadow-xs"
          >
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
                // Exactly whichever item is currently covered by the black pill gets white text; all others get clear visible dark text
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

          {/* Direct CTA Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="btn-editorial-primary text-xs py-2.5 px-5"
              data-cursor="Book"
            >
              <span>Consult Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-[#1A1A16]/15 flex items-center justify-center text-[#1A1A16]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1A16] text-[#F5F0E6] flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure F&B Solutions Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight font-bold text-white leading-none">
                  TRISECURE
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#C9AF6B] uppercase font-semibold mt-0.5">
                  F&B SOLUTIONS
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
                    className={`font-serif text-3xl transition-colors ${
                      isActive ? 'text-[#C9AF6B] italic pl-2 border-l-2 border-[#C9AF6B]' : 'text-white/80'
                    }`}
                  >
                    <span className="font-mono text-xs text-white/40 mr-3">0{idx + 1}</span>
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs">
            <p className="text-white/60">Corporate Headquarters: Delhi NCR, India</p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full btn-editorial-primary text-center justify-center"
            >
              <span>Schedule Executive Consultation</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
