import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

interface FloatingContactWidgetProps {
  onOpenConsultation: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenConsultation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElem = document.getElementById('hero-section');
      if (heroElem) {
        const rect = heroElem.getBoundingClientRect();
        // Show contact widget only once Hero section enters the viewport
        if (rect.top <= window.innerHeight * 0.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* WhatsApp / Phone Direct Link */}
      <a
        href="tel:+911149008800"
        className="w-11 h-11 rounded-full bg-white border border-[#e5e4de] text-[#0a1118] hover:text-[#047857] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Direct Phone Call"
        title="Direct Advisory Desk"
      >
        <Phone className="w-4 h-4 text-[#047857]" />
      </a>

      {/* Quick Consultation Pill */}
      <button
        onClick={onOpenConsultation}
        className="btn-island-primary py-2 pl-4 pr-1.5 shadow-xl text-[12px] font-bold"
      >
        <span className="hidden sm:inline">BOOK FREE CALL</span>
        <span className="sm:hidden">CONSULT</span>
        <div className="btn-island-icon w-7 h-7">
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </div>
      </button>
    </div>
  );
};
