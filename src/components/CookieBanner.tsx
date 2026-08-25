import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('trisecure_cookie_consent');
    if (!consent) {
      // Small timeout for smooth natural entrance
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('trisecure_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('trisecure_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-5 left-5 right-5 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="p-4 sm:p-5 rounded-2xl bg-[#1A1A16]/95 text-[#F5F0E6] backdrop-blur-md border border-white/15 shadow-2xl space-y-3.5 select-none">
        
        {/* Top Header Strip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#C9AF6B] font-semibold">
            <Cookie className="w-3.5 h-3.5 text-[#C9AF6B]" />
            <span>Privacy & Cookie Consent</span>
          </div>

          <button
            onClick={handleDecline}
            className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Narrative Text */}
        <p className="font-sans text-xs text-white/80 leading-relaxed font-light">
          We utilize essential telemetry cookies to ensure frictionless advisory sessions and optimize response latency under our{' '}
          <Link
            to="/privacy"
            className="text-[#0072EF] underline hover:text-[#C9AF6B] transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-3.5 rounded-full bg-[#FAF6EE] text-[#1A1A16] font-mono text-xs font-semibold hover:bg-[#C9AF6B] hover:text-[#1A1A16] transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>

          <button
            onClick={handleDecline}
            className="py-2 px-3.5 rounded-full bg-white/10 text-white/80 font-mono text-xs font-medium hover:bg-white/20 transition-all"
          >
            Essential Only
          </button>
        </div>

      </div>
    </aside>
  );
};
