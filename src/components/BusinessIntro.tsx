import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BusinessIntroProps {
  onOpenConsultation: () => void;
}

export const BusinessIntro: React.FC<BusinessIntroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase block mb-3">
                SINGLE-WINDOW BUSINESS INFRASTRUCTURE
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-medium leading-[0.95] text-[#ffedd7] uppercase mb-6">
                ELIMINATING <br />
                OPERATIONAL <br />
                FRICTION.
              </h2>
            </div>

            <div className="p-6 rounded-[12px] border border-[#40372e] bg-[#382416]/20 mt-4">
              <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-2">
                THE TRISECURE ADVANTAGE
              </div>
              <p className="text-[15px] font-normal leading-relaxed text-[#ffedd7]/90">
                Instead of coordinating fragmented vendors for labor law filings, municipal licenses, bank credits, and marketing agencies — enterprises work with a unified partner with proven execution speed.
              </p>
            </div>
          </div>

          {/* Right Column: Conversational Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-[20px] sm:text-[25px] font-normal leading-[1.35] text-[#ffedd7]">
                Running a growing commercial enterprise in India requires navigating rigorous statutory compliance, managing a distributed workforce, securing growth capital, and building digital market share.
              </p>
              
              <p className="text-[16px] sm:text-[18px] font-normal leading-relaxed text-[#ffedd7]/80">
                TriSecure Solutions operates as an extension of your leadership team. We handle the complex bureaucracy of regulatory clearances, streamline statutory payroll without error, structure competitive credit lines from leading banking syndicates, and build demand through measurable digital marketing.
              </p>
            </div>

            <div className="o-dashline my-8" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-[28px] font-medium text-[#ffedd7] mb-1">4 IN 1</div>
                <div className="text-[11px] font-medium tracking-[0.08em] text-[#6c5f51] uppercase">
                  Integrated Service Verticals
                </div>
              </div>

              <div>
                <div className="text-[28px] font-medium text-[#ffedd7] mb-1">PAN-INDIA</div>
                <div className="text-[11px] font-medium tracking-[0.08em] text-[#6c5f51] uppercase">
                  Municipal & Banking Coverage
                </div>
              </div>

              <div>
                <div className="text-[28px] font-medium text-[#dc5000] mb-1">0% DELAY</div>
                <div className="text-[11px] font-medium tracking-[0.08em] text-[#6c5f51] uppercase">
                  Proactive Statutory Advisory
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
