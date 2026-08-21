import React, { useState } from 'react';
import { serviceVerticals, ServiceVertical, ServiceItem } from '../data/servicesData';
import { ArrowUpRight, Check, Clock, Building2, FileCheck2, ArrowRight } from 'lucide-react';

interface ServiceEcosystemProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServiceEcosystem: React.FC<ServiceEcosystemProps> = ({ onOpenConsultation }) => {
  const [activeVerticalId, setActiveVerticalId] = useState<string>(serviceVerticals[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(serviceVerticals[0].services[0].id);

  const activeVertical: ServiceVertical =
    serviceVerticals.find((v) => v.id === activeVerticalId) || serviceVerticals[0];

  const selectedService: ServiceItem =
    activeVertical.services.find((s) => s.id === selectedServiceId) || activeVertical.services[0];

  return (
    <section id="services" className="py-28 bg-white border-b border-[#e5e4de] relative">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-3">
            02 // SERVICE DIRECTORY & SCOPES
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
            Four Core Practice Areas. <br />
            Institutional Execution.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed">
            Select a practice vertical to inspect official government filing authorities, procedural scope, turnaround timelines, and key certifications.
          </p>
        </div>

        {/* 4 Practice Selector Bar (Asymmetrical Bento Navigation) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {serviceVerticals.map((vertical, idx) => {
            const isActive = vertical.id === activeVerticalId;
            return (
              <button
                key={vertical.id}
                onClick={() => {
                  setActiveVerticalId(vertical.id);
                  setSelectedServiceId(vertical.services[0].id);
                }}
                className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'border-[#0a1118] bg-[#0a1118] text-white shadow-xl'
                    : 'border-[#e5e4de] bg-[#fafaf7] text-[#0a1118] hover:border-[#d1cfc7] hover:bg-[#f4f3ee]'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[12px] font-mono font-bold ${isActive ? 'text-[#a7f3d0]' : 'text-[#64748b]'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded ${
                    isActive ? 'bg-white/10 text-slate-200' : 'bg-[#e5e4de]/60 text-[#475569]'
                  }`}>
                    {vertical.services.length} Offerings
                  </span>
                </div>

                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold tracking-tight uppercase leading-snug mb-1">
                    {vertical.title.split(' ')[0]} {vertical.title.split(' ')[1]}
                  </h3>
                  <p className={`text-[12px] leading-relaxed line-clamp-1 ${isActive ? 'text-slate-300' : 'text-[#64748b]'}`}>
                    {vertical.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Bento Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sub-Services Navigation List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <div className="p-4 rounded-xl bg-[#fafaf7] border border-[#e5e4de] mb-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#64748b] uppercase block mb-1">
                PRACTICE OVERVIEW
              </span>
              <p className="text-[14px] text-[#334155] leading-relaxed">
                {activeVertical.overview}
              </p>
              <div className="mt-3 pt-3 border-t border-[#e5e4de] flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#047857] uppercase">
                  {activeVertical.highlightMetric.value}
                </span>
                <span className="text-[11px] text-[#64748b]">
                  {activeVertical.highlightMetric.label}
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono font-bold tracking-widest text-[#64748b] uppercase px-1 py-1">
              SPECIFICATION INDEX
            </div>

            {activeVertical.services.map((service, idx) => {
              const isSelected = service.id === selectedService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'border-[#047857] bg-[#ecfdf5]/40 text-[#0a1118] shadow-xs ring-1 ring-[#047857]/30'
                      : 'border-[#e5e4de] bg-white text-[#334155] hover:border-[#d1cfc7] hover:bg-[#fafaf7]'
                  }`}
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono text-[#64748b]">0{idx + 1}</span>
                      <div className="text-[14px] font-bold text-[#0a1118] leading-snug">
                        {service.name}
                      </div>
                    </div>
                    <div className="text-[12px] text-[#64748b] line-clamp-1">
                      {service.shortDesc}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#047857] translate-x-1' : 'text-[#94a3b8] group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Double-Bezel Detailed Specification Dossier */}
          <div className="lg:col-span-7">
            <div className="bezel-shell">
              <div className="bezel-core p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#f1f0ea]">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#047857] uppercase block mb-1">
                      ACTIVE SPECIFICATION DOSSIER
                    </span>
                    <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0a1118] leading-tight">
                      {selectedService.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fafaf7] border border-[#e5e4de] text-[11px] font-mono font-bold text-[#334155]">
                    <Clock className="w-3.5 h-3.5 text-[#047857]" />
                    <span>{selectedService.timeline}</span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed mb-6">
                  {selectedService.shortDesc}
                </p>

                {/* Statutory Authority Callout */}
                {selectedService.statutoryAuthority && (
                  <div className="mb-6 p-4 rounded-xl bg-[#fafaf7] border border-[#e5e4de] flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-[#0a1118] shrink-0 mt-0.5" />
                    <div className="text-[13px] text-[#334155]">
                      <span className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-widest block mb-0.5">
                        Statutory Regulatory Authority / Jurisdiction:
                      </span>
                      <span className="font-semibold text-[#0a1118]">{selectedService.statutoryAuthority}</span>
                    </div>
                  </div>
                )}

                {/* Detailed Scope Checklist */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono font-bold tracking-widest text-[#64748b] uppercase mb-3">
                    PROCEDURAL SCOPE & EXECUTION DELIVERABLES
                  </div>
                  <div className="space-y-2.5">
                    {selectedService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[13px] text-[#334155]">
                        <div className="w-4 h-4 rounded-full bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables Pills */}
                <div className="mb-8 pt-5 border-t border-[#f1f0ea]">
                  <div className="text-[11px] font-mono font-bold tracking-widest text-[#64748b] uppercase mb-3 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#047857]" />
                    <span>DELIVERABLES & OFFICIAL CERTIFICATES</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.keyDeliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md bg-[#fafaf7] border border-[#e5e4de] text-[12px] font-semibold text-[#0a1118]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Bar (Button-in-Button) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#f1f0ea]">
                  <div className="text-[12px] text-[#64748b]">
                    Direct liaison with dedicated <span className="font-semibold text-[#0a1118]">{activeVertical.title}</span> team.
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`${activeVertical.title} — ${selectedService.name}`)}
                    className="btn-island-primary group"
                  >
                    <span>INITIATE THIS SERVICE</span>
                    <div className="btn-island-icon">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
