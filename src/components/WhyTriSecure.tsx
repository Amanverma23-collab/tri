import React from 'react';
import { whyTriSecurePoints } from '../data/servicesData';
import { ShieldCheck, Layers, Users, Lock, ArrowUpRight } from 'lucide-react';

interface WhyTriSecureProps {
  onOpenConsultation: () => void;
}

export const WhyTriSecure: React.FC<WhyTriSecureProps> = ({ onOpenConsultation }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck className="w-5 h-5 text-[#dc5000]" />;
      case 1: return <Layers className="w-5 h-5 text-[#ffedd7]" />;
      case 2: return <Users className="w-5 h-5 text-[#ffedd7]" />;
      case 3: return <Lock className="w-5 h-5 text-[#dc5000]" />;
      default: return null;
    }
  };

  return (
    <section id="why-us" className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase mb-2">
              INSTITUTIONAL TRUST & CREDIBILITY
            </div>
            <h2 className="text-[32px] sm:text-[46px] font-medium leading-[0.95] text-[#ffedd7] uppercase">
              WHY MODERN BUSINESSES <br />
              PARTNER WITH TRISECURE.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[17px] text-[#ffedd7]/80 leading-relaxed">
              We combine deep statutory regulatory insight with agile commercial execution, helping you scale without compliance pitfalls or operational bottlenecks.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyTriSecurePoints.map((point, idx) => (
            <div
              key={point.number}
              className="p-8 rounded-[12px] border border-[#40372e] bg-[#382416]/10 flex flex-col justify-between hover:border-[#6c5f51] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#40372e]">
                  <span className="text-[14px] font-mono font-medium text-[#dc5000]">
                    PILLAR {point.number}
                  </span>
                  <div className="p-2 rounded-full border border-[#40372e] bg-[#100904]">
                    {getIcon(idx)}
                  </div>
                </div>

                <h3 className="text-[20px] font-medium text-[#ffedd7] uppercase tracking-[0.03em] mb-3 leading-snug">
                  {point.title}
                </h3>

                <p className="text-[15px] text-[#ffedd7]/80 leading-relaxed">
                  {point.desc}
                </p>
              </div>

              <div className="o-dashline my-6" />

              <div className="flex items-center justify-between text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider">
                <span>Verified Institutional Process</span>
                <span className="text-[#ffedd7]">Standard Operating Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
