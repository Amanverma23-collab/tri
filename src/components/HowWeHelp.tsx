import React from 'react';
import { processSteps } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';

interface HowWeHelpProps {
  onOpenConsultation: () => void;
}

export const HowWeHelp: React.FC<HowWeHelpProps> = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase mb-2">
            OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-[32px] sm:text-[46px] font-medium leading-[0.95] text-[#ffedd7] uppercase mb-4">
            HOW WE ENGAGE & EXECUTE.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#ffedd7]/80 leading-relaxed">
            A disciplined four-phase engagement framework designed to deliver zero-error compliance, transparent financing terms, and measurable business growth.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              className="p-6 sm:p-7 rounded-[12px] border border-[#40372e] bg-[#100904] flex flex-col justify-between hover:border-[#6c5f51] transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#40372e]">
                  <span className="text-[28px] font-mono font-medium text-[#dc5000]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#6c5f51] uppercase">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h3 className="text-[17px] font-medium text-[#ffedd7] uppercase tracking-[0.04em] mb-2 leading-snug">
                  {item.name}
                </h3>
                <div className="text-[12px] font-medium text-[#6c5f51] uppercase mb-4">
                  {item.title}
                </div>

                <p className="text-[14px] text-[#ffedd7]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#40372e]/60 flex items-center justify-between text-[11px] text-[#6c5f51] uppercase">
                <span>Accountable SLA</span>
                <span className="text-[#ffedd7]">Phase 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-[12px] border border-[#40372e] bg-[#382416]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[18px] font-medium text-[#ffedd7] uppercase mb-1">
              Ready to streamline your operational and regulatory requirements?
            </h4>
            <p className="text-[14px] text-[#6c5f51]">
              Consult with our specialists to receive a bespoke statutory and financing roadmap.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="btn-pill px-6 py-3 whitespace-nowrap text-[12px] shrink-0"
          >
            <span>DISCUSS YOUR ROADMAP</span>
            <ArrowUpRight className="w-4 h-4 text-[#ffedd7]" />
          </button>
        </div>
      </div>
    </section>
  );
};
