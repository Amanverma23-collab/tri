import React, { useState } from 'react';
import { businessProfiles, BusinessProfile } from '../data/complianceChecklist';
import { ArrowUpRight, Check, ShieldCheck, Landmark, Users } from 'lucide-react';

interface ReadinessToolProps {
  onOpenConsultation: (service?: string) => void;
}

export const ComplianceReadinessTool: React.FC<ReadinessToolProps> = ({ onOpenConsultation }) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(businessProfiles[0].id);

  const activeProfile: BusinessProfile = 
    businessProfiles.find((p) => p.id === selectedProfileId) || businessProfiles[0];

  return (
    <section id="readiness" className="py-28 bg-[#fafaf7] border-b border-[#e5e4de] relative">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-3">
            03 // INTERACTIVE READINESS EVALUATOR
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
            Inspect Mandatory Filings & <br />
            Capital Requirements.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed">
            Select your industry sector to review mandatory statutory licenses, working capital credit facilities, and statutory workforce mandates.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {businessProfiles.map((profile, idx) => {
            const isSelected = profile.id === selectedProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`p-6 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#0a1118] bg-[#0a1118] text-white shadow-xl'
                    : 'border-[#e5e4de] bg-white text-[#0a1118] hover:border-[#d1cfc7] hover:bg-[#f4f3ee]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded ${
                      isSelected ? 'bg-white/10 text-slate-200' : 'bg-[#fafaf7] border border-[#e5e4de] text-[#64748b]'
                    }`}>
                      {profile.badge}
                    </span>
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#a7f3d0]' : 'text-[#64748b]'}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[16px] font-bold uppercase tracking-tight leading-snug">
                    {profile.categoryName}
                  </div>
                </div>

                <div className={`text-[12px] font-mono mt-6 flex items-center justify-between pt-4 border-t ${
                  isSelected ? 'border-white/10 text-[#a7f3d0]' : 'border-[#e5e4de] text-[#64748b]'
                }`}>
                  <span>Inspect Docket</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Checklist Results (Double-Bezel Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Mandatory Licenses */}
          <div className="lg:col-span-7">
            <div className="bezel-shell">
              <div className="bezel-core p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f1f0ea]">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#047857]" />
                    <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#0a1118]">
                      MANDATORY STATUTORY REGISTRATIONS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#64748b] bg-[#fafaf7] px-2.5 py-1 rounded border border-[#e5e4de]">
                    {activeProfile.mandatoryLicenses.length} Requirements
                  </span>
                </div>

                <div className="space-y-3.5">
                  {activeProfile.mandatoryLicenses.map((lic, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#e5e4de] bg-[#fafaf7] flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] font-bold text-[#0a1118]">
                          {lic.name}
                        </span>
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${
                          lic.criticality === 'Mandatory' 
                            ? 'border-[#a7f3d0] bg-[#ecfdf5] text-[#047857]'
                            : 'border-[#e5e4de] bg-white text-[#64748b]'
                        }`}>
                          {lic.criticality}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-[#64748b]">
                        Authority: {lic.authority}
                      </div>
                      <p className="text-[12px] text-[#475569] mt-1 leading-relaxed">
                        {lic.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Capital Facilities & Workforce Compliance */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Financial Lending Options */}
            <div className="p-6 rounded-2xl border border-[#e5e4de] bg-white shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#f1f0ea]">
                <Landmark className="w-4 h-4 text-[#047857]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#0a1118]">
                  RECOMMENDED CREDIT & CAPITAL LIMITS
                </span>
              </div>

              <div className="space-y-4">
                {activeProfile.recommendedFinancials.map((fin, idx) => (
                  <div key={idx} className="border-b border-[#f1f0ea] pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-[13px] font-bold text-[#0a1118]">
                      <span>{fin.facility}</span>
                      <span className="text-[#047857] font-mono text-[12px]">{fin.typicalTicket}</span>
                    </div>
                    <div className="text-[12px] text-[#64748b] mt-0.5">
                      {fin.idealFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workforce & HR Advisory */}
            <div className="p-6 rounded-2xl border border-[#e5e4de] bg-white shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#f1f0ea]">
                  <Users className="w-4 h-4 text-[#047857]" />
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#0a1118]">
                    STATUTORY WORKFORCE OBLIGATIONS
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {activeProfile.hrRequirements.map((hr, idx) => (
                    <div key={idx} className="text-[12px]">
                      <div className="font-bold text-[#0a1118]">{hr.role}</div>
                      <div className="text-[#64748b] mt-0.5">{hr.statutoryMandate}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(`Compliance Blueprint — ${activeProfile.categoryName}`)}
                className="btn-island-primary w-full justify-between py-2.5 px-5 text-[12px]"
              >
                <span>GET DETAILED COMPLIANCE BLUEPRINT</span>
                <div className="btn-island-icon w-6 h-6">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
