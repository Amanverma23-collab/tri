import React, { useState } from 'react';
import { serviceVerticals, ServiceVertical, ServiceItem } from '../data/servicesData';
import { 
  ShieldCheck, 
  Users, 
  Landmark, 
  TrendingUp, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Building2, 
  FileCheck,
  ChevronRight
} from 'lucide-react';

interface ServiceEcosystemProps {
  onOpenConsultation: (prefillService?: string) => void;
}

export const ServiceEcosystem: React.FC<ServiceEcosystemProps> = ({ onOpenConsultation }) => {
  const [activeVerticalId, setActiveVerticalId] = useState<string>(serviceVerticals[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(serviceVerticals[0].services[0].id);

  const activeVertical: ServiceVertical = 
    serviceVerticals.find((v) => v.id === activeVerticalId) || serviceVerticals[0];

  const selectedService: ServiceItem = 
    activeVertical.services.find((s) => s.id === selectedServiceId) || activeVertical.services[0];

  const getVerticalIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Landmark': return <Landmark className="w-4 h-4" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4" />;
      default: return <Building2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase mb-2">
              SERVICE ECOSYSTEM
            </div>
            <h2 className="text-[32px] sm:text-[46px] font-medium leading-[0.95] text-[#ffedd7] uppercase">
              SPECIALIZED CAPABILITIES, <br />
              UNIFIED EXECUTION.
            </h2>
          </div>
          
          <p className="text-[15px] sm:text-[17px] font-normal leading-relaxed text-[#ffedd7]/80 max-w-md">
            Explore our four core practice areas. Each vertical is backed by domain specialists, established liaison networks, and clear operational SLAs.
          </p>
        </div>

        {/* Vertical Selector Tabs (Editorial Pill Navigation) */}
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
                className={`text-left p-4 sm:p-5 rounded-[12px] border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'border-[#ffedd7] bg-[#382416]/40 shadow-lg'
                    : 'border-[#40372e] bg-[#100904] hover:border-[#6c5f51] hover:bg-[#382416]/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono tracking-wider ${isActive ? 'text-[#ffedd7]' : 'text-[#6c5f51]'}`}>
                    0{idx + 1}
                  </span>
                  <div className={`p-1.5 rounded-full border ${isActive ? 'border-[#ffedd7] text-[#ffedd7]' : 'border-[#40372e] text-[#6c5f51]'}`}>
                    {getVerticalIcon(vertical.iconName)}
                  </div>
                </div>

                <div>
                  <h3 className="text-[14px] sm:text-[15px] font-medium tracking-[0.04em] text-[#ffedd7] uppercase leading-tight mb-1">
                    {vertical.title}
                  </h3>
                  <p className="text-[11px] text-[#6c5f51] uppercase tracking-wider line-clamp-1">
                    {vertical.services.length} Specialized Offerings
                  </p>
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc5000]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Vertical Main Layout (Split View Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sub-Services List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="p-4 rounded-[12px] border border-[#40372e] bg-[#382416]/10 mb-2">
              <span className="text-[10px] font-medium tracking-[0.16em] text-[#6c5f51] uppercase block mb-1">
                VERTICAL OVERVIEW
              </span>
              <p className="text-[14px] text-[#ffedd7]/90 leading-relaxed">
                {activeVertical.overview}
              </p>
              <div className="mt-3 pt-3 border-t border-[#40372e]/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#dc5000] uppercase tracking-wider">
                  {activeVertical.highlightMetric.value}
                </span>
                <span className="text-[11px] text-[#6c5f51] uppercase">
                  {activeVertical.highlightMetric.label}
                </span>
              </div>
            </div>

            <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase px-1 py-2">
              SELECT SERVICE TO INSPECT SPECIFICATIONS
            </div>

            {activeVertical.services.map((service) => {
              const isSelected = service.id === selectedService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left p-4 rounded-[12px] border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'border-[#ffedd7] bg-[#382416] text-[#ffedd7]'
                      : 'border-[#40372e] bg-transparent text-[#ffedd7]/70 hover:border-[#6c5f51] hover:text-[#ffedd7]'
                  }`}
                >
                  <div className="pr-3">
                    <div className="text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.04em]">
                      {service.name}
                    </div>
                    <div className="text-[11px] text-[#6c5f51] group-hover:text-[#ffedd7]/60 line-clamp-1 mt-0.5">
                      {service.shortDesc}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#ffedd7] translate-x-1' : 'text-[#6c5f51] group-hover:translate-x-0.5'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Specification Card */}
          <div className="lg:col-span-7 rounded-[12px] border border-[#40372e] bg-[#100904] p-6 sm:p-8 relative">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#40372e]">
              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#dc5000] uppercase block mb-1">
                  DETAILED SPECIFICATION
                </span>
                <h4 className="text-[20px] sm:text-[26px] font-medium text-[#ffedd7] uppercase leading-tight">
                  {selectedService.name}
                </h4>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#40372e] bg-[#382416]/30 text-[11px] font-medium text-[#ffedd7] tracking-wider uppercase">
                <Clock className="w-3.5 h-3.5 text-[#dc5000]" />
                <span>{selectedService.timeline}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#ffedd7]/90 leading-relaxed mb-6">
              {selectedService.shortDesc}
            </p>

            {/* Statutory Authority / Scope Callout */}
            {selectedService.statutoryAuthority && (
              <div className="mb-6 p-3.5 rounded-[8px] bg-[#382416]/20 border border-[#40372e] flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#ffedd7] shrink-0" />
                <div className="text-[12px] text-[#ffedd7]">
                  <span className="text-[#6c5f51] uppercase tracking-wider block text-[10px]">
                    Statutory Authority / Jurisdiction:
                  </span>
                  {selectedService.statutoryAuthority}
                </div>
              </div>
            )}

            {/* Operational Details Checklist */}
            <div className="mb-6">
              <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-3">
                SCOPE OF ENGAGEMENT & PROCEDURAL COVERAGE
              </div>
              <div className="space-y-2.5">
                {selectedService.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[13px] text-[#ffedd7]/90">
                    <div className="w-4 h-4 rounded-full border border-[#40372e] bg-[#382416] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#ffedd7]" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-8 pt-4 border-t border-[#40372e]/60">
              <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-3 flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-[#ffedd7]" />
                <span>KEY DELIVERABLES & CERTIFICATIONS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedService.keyDeliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-[6px] border border-[#40372e] bg-[#382416]/30 text-[11px] font-medium text-[#ffedd7] uppercase tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#40372e]">
              <div className="text-[11px] text-[#6c5f51] uppercase tracking-wider">
                Speak directly with our dedicated {activeVertical.title} team
              </div>

              <button
                onClick={() => onOpenConsultation(`${activeVertical.title} — ${selectedService.name}`)}
                className="btn-pill px-6 py-2.5 text-[12px]"
              >
                <span>REQUEST THIS SERVICE</span>
                <ArrowUpRight className="w-4 h-4 text-[#ffedd7]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
