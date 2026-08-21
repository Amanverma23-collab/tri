import React from 'react';
import { processSteps } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';

interface HowWeHelpProps {
  onOpenConsultation: () => void;
}

export const HowWeHelp: React.FC<HowWeHelpProps> = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-28 bg-[#fafaf7] border-b border-[#e5e4de] relative">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-3">
            05 // ENGAGEMENT METHODOLOGY
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
            How We Engage & <br />
            Execute on Schedule.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed">
            A disciplined four-phase delivery framework designed to guarantee zero-error compliance filings, transparent bank terms, and accountable milestone turnarounds.
          </p>
        </div>

        {/* 4-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              className="p-7 rounded-2xl border border-[#e5e4de] bg-white flex flex-col justify-between hover:border-[#047857] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#f1f0ea]">
                  <span className="text-[32px] font-mono font-bold text-[#047857]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#64748b] uppercase bg-[#fafaf7] px-2 py-1 rounded border border-[#e5e4de]">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-[#0a1118] tracking-tight mb-1 leading-snug">
                  {item.name}
                </h3>
                <div className="text-[12px] font-mono font-semibold text-[#64748b] mb-4">
                  {item.title}
                </div>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f1f0ea] flex items-center justify-between text-[11px] font-mono text-[#64748b] uppercase">
                <span>Accountable SLA</span>
                <span className="text-[#047857] font-bold">Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl border border-[#e5e4de] bg-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[20px] font-bold text-[#0a1118] mb-1">
              Ready to streamline your operational and regulatory backend?
            </h4>
            <p className="text-[14px] text-[#64748b]">
              Consult directly with our domain specialists to receive a customized statutory and financing roadmap.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="btn-island-primary px-6 py-3 text-[13px] shrink-0"
          >
            <span>DISCUSS YOUR ROADMAP</span>
            <div className="btn-island-icon">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
