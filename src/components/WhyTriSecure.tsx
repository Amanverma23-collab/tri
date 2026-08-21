import React from 'react';
import { whyTriSecurePoints } from '../data/servicesData';
import { ShieldCheck, Layers, Users, Lock } from 'lucide-react';

interface WhyTriSecureProps {
  onOpenConsultation: () => void;
}

export const WhyTriSecure: React.FC<WhyTriSecureProps> = ({ onOpenConsultation }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck className="w-5 h-5 text-[#047857]" />;
      case 1: return <Layers className="w-5 h-5 text-[#047857]" />;
      case 2: return <Users className="w-5 h-5 text-[#047857]" />;
      case 3: return <Lock className="w-5 h-5 text-[#047857]" />;
      default: return null;
    }
  };

  return (
    <section id="why-us" className="py-28 bg-white border-b border-[#e5e4de] relative">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-3">
            06 // INSTITUTIONAL ASSURANCE
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
            Why Growing Enterprises <br />
            Choose TriSecure.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed">
            We bridge the gap between complex regulatory mandates and commercial execution, eliminating multi-vendor overheads and operational liabilities.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyTriSecurePoints.map((point, idx) => (
            <div
              key={point.number}
              className="p-8 rounded-2xl border border-[#e5e4de] bg-[#fafaf7] flex flex-col justify-between hover:border-[#047857] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e4de]">
                  <span className="text-[13px] font-mono font-bold text-[#047857]">
                    PILLAR {point.number}
                  </span>
                  <div className="p-2.5 rounded-xl border border-[#e5e4de] bg-white text-[#047857]">
                    {getIcon(idx)}
                  </div>
                </div>

                <h3 className="text-[20px] font-bold text-[#0a1118] mb-3 leading-snug">
                  {point.title}
                </h3>

                <p className="text-[15px] text-[#475569] leading-relaxed">
                  {point.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#e5e4de] flex items-center justify-between text-[11px] font-mono font-semibold text-[#64748b] uppercase">
                <span>Standard Operating Protocol</span>
                <span className="text-[#047857]">Verified SLA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
