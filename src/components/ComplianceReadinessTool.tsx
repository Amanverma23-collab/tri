import React, { useState } from 'react';
import { businessProfiles, BusinessProfile } from '../data/complianceChecklist';
import { ShieldCheck, Landmark, Users, ArrowUpRight, AlertCircle, Sparkles } from 'lucide-react';

interface ReadinessToolProps {
  onOpenConsultation: (prefillService?: string) => void;
}

export const ComplianceReadinessTool: React.FC<ReadinessToolProps> = ({ onOpenConsultation }) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(businessProfiles[0].id);

  const activeProfile: BusinessProfile = 
    businessProfiles.find((p) => p.id === selectedProfileId) || businessProfiles[0];

  return (
    <section id="readiness" className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase mb-2">
            INTERACTIVE BUSINESS READINESS EVALUATOR
          </div>
          <h2 className="text-[32px] sm:text-[46px] font-medium leading-[0.95] text-[#ffedd7] uppercase mb-4">
            CHECK STATUTORY & <br />
            CAPITAL REQUIREMENTS.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#ffedd7]/80 leading-relaxed">
            Select your industry profile to instantly inspect mandatory legal registrations, working capital loan limits, and statutory workforce mandates.
          </p>
        </div>

        {/* Profile Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {businessProfiles.map((profile) => {
            const isSelected = profile.id === selectedProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`p-5 rounded-[12px] text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#ffedd7] bg-[#382416] text-[#ffedd7] shadow-xl'
                    : 'border-[#40372e] bg-[#100904] text-[#ffedd7]/70 hover:border-[#6c5f51] hover:text-[#ffedd7]'
                }`}
              >
                <div>
                  <span className="text-[9px] font-medium tracking-[0.16em] uppercase px-2 py-0.5 rounded border border-[#40372e] bg-[#100904] inline-block mb-3">
                    {profile.badge}
                  </span>
                  <div className="text-[15px] font-medium uppercase tracking-[0.04em] leading-snug">
                    {profile.categoryName}
                  </div>
                </div>
                <div className="text-[11px] text-[#6c5f51] mt-4 uppercase tracking-wider flex items-center gap-1">
                  <span>Inspect Checklist</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Checklist Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Mandatory Licenses */}
          <div className="lg:col-span-7 rounded-[12px] border border-[#40372e] bg-[#382416]/10 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#40372e]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#dc5000]" />
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#ffedd7]">
                  MANDATORY STATUTORY LICENSES & REGISTRATIONS
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#6c5f51]">
                {activeProfile.mandatoryLicenses.length} Items
              </span>
            </div>

            <div className="space-y-4">
              {activeProfile.mandatoryLicenses.map((lic, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[8px] border border-[#40372e] bg-[#100904] flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[14px] font-medium text-[#ffedd7] uppercase">
                      {lic.name}
                    </span>
                    <span className={`text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded border ${
                      lic.criticality === 'Mandatory' 
                        ? 'border-[#dc5000]/60 bg-[#dc5000]/10 text-[#dc5000]'
                        : 'border-[#40372e] text-[#6c5f51]'
                    }`}>
                      {lic.criticality}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6c5f51] uppercase tracking-wide">
                    Authority: {lic.authority}
                  </div>
                  <p className="text-[12px] text-[#ffedd7]/80 mt-1">
                    {lic.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Capital Facilities & Workforce Compliance */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Financial Lending Options */}
            <div className="rounded-[12px] border border-[#40372e] bg-[#100904] p-6">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#40372e]">
                <Landmark className="w-4 h-4 text-[#ffedd7]" />
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#ffedd7]">
                  RECOMMENDED CAPITAL & LOAN FACILITIES
                </span>
              </div>

              <div className="space-y-4">
                {activeProfile.recommendedFinancials.map((fin, idx) => (
                  <div key={idx} className="border-b border-[#40372e]/60 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-[13px] font-medium text-[#ffedd7] uppercase">
                      <span>{fin.facility}</span>
                      <span className="text-[#dc5000] font-mono text-[12px]">{fin.typicalTicket}</span>
                    </div>
                    <div className="text-[11px] text-[#6c5f51] mt-1">
                      {fin.idealFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workforce & HR Advisory */}
            <div className="rounded-[12px] border border-[#40372e] bg-[#100904] p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#40372e]">
                  <Users className="w-4 h-4 text-[#ffedd7]" />
                  <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#ffedd7]">
                    STATUTORY WORKFORCE & PAYROLL OBLIGATIONS
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {activeProfile.hrRequirements.map((hr, idx) => (
                    <div key={idx} className="text-[12px]">
                      <div className="font-medium text-[#ffedd7] uppercase">{hr.role}</div>
                      <div className="text-[#6c5f51] mt-0.5">{hr.statutoryMandate}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(`Business Readiness Assessment — ${activeProfile.categoryName}`)}
                className="btn-pill w-full justify-center text-[12px]"
              >
                <span>GET DETAILED COMPLIANCE BLUEPRINT</span>
                <ArrowUpRight className="w-4 h-4 text-[#ffedd7]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
