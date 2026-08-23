import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

interface FloatingContactWidgetProps {
  onOpenConsultation: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <button
        onClick={onOpenConsultation}
        data-cursor="Consult"
        className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] shadow-2xl border border-[#C9AF6B]/40 hover:bg-[#7C8B6F] hover:border-[#7C8B6F] transition-all duration-300 transform hover:-translate-y-1"
        aria-label="Open Advisory & Consultation Desk"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#C9AF6B] animate-pulse" />
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#C9AF6B] group-hover:text-[#F5F0E6] transition-colors" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Consult
          </span>
        </div>
        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowUpRight className="w-3 h-3 text-[#F5F0E6]" />
        </div>
      </button>
    </div>
  );
};
