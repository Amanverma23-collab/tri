import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Building2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

interface DossierItem {
  id: string;
  tabNumber: string;
  tabLabel: string;
  badge: string;
  title: string;
  authority: string;
  turnaround: string;
  scopeItems: string[];
  primaryOutcome: string;
}

const dossiers: DossierItem[] = [
  {
    id: 'food-compliance',
    tabNumber: '01',
    tabLabel: 'FOOD COMPLIANCE',
    badge: 'STATUTORY LICENSING',
    title: 'FSSAI, Health Trade & Environmental DPCC Clearances',
    authority: 'FSSAI (FoSCoS) · Municipal Corp (MCD/BMC) · State PCB',
    turnaround: '7–15 Business Days',
    scopeItems: [
      'FSSAI Basic, State & Central License application filing',
      'Municipal Health & Trade License zoning & health audit',
      'Shop & Commercial Establishment (Gumasta) registration',
      'Pollution Control (DPCC / SPCB) CTE & CTO clearances'
    ],
    primaryOutcome: '100% Audit-Ready Government Certificate & Compliance Calendar'
  },
  {
    id: 'hr-workforce',
    tabNumber: '02',
    tabLabel: 'WORKFORCE & HR',
    badge: 'HUMAN CAPITAL',
    title: 'Recruitment Staffing, Automated Payroll & Labour Law',
    authority: 'Ministry of Labour · EPFO · ESIC Shram Suvidha',
    turnaround: 'Continuous Monthly SLA',
    scopeItems: [
      'Executive search, technical vetting & lateral staffing',
      'Monthly payroll calculation, tax withholding & payslip generation',
      'Statutory EPF, ESIC, Professional Tax & POSH compliance',
      'Labour department registers & dispute mediation policies'
    ],
    primaryOutcome: 'Zero-Error Payroll Disbursement & Full Statutory Protection'
  },
  {
    id: 'loans-capital',
    tabNumber: '03',
    tabLabel: 'LOANS & CAPITAL',
    badge: 'CREDIT SYNDICATION',
    title: 'Business Working Capital, MSME & Asset Financing',
    authority: 'Multi-Bank Lending Syndicate (PSU, Private & NBFCs)',
    turnaround: '3–10 Business Days',
    scopeItems: [
      'Working capital limits (Cash Credit / Overdraft lines)',
      'MSME business expansion loans with minimal collateral',
      'Home loans & balance transfer with lowest market ROI',
      'Corporate group health (GMC) & property fire insurance'
    ],
    primaryOutcome: 'Approved Bank Sanction Letter with Lowest Market Rates'
  },
  {
    id: 'digital-marketing',
    tabNumber: '04',
    tabLabel: 'DIGITAL GROWTH',
    badge: 'DEMAND GENERATION',
    title: 'High-Intent Google Ads, Technical SEO & Brand Authority',
    authority: 'Google Partner · Meta Business · Organic Search Engines',
    turnaround: 'Weekly Sprint Cycles',
    scopeItems: [
      'High-intent B2B search keyword campaigns targeting buyers',
      'Technical SEO architecture & Google Maps local domination',
      'Corporate messaging, identity structuring & sales decks',
      'Conversion-optimized funnels & CRM lead pipeline tracking'
    ],
    primaryOutcome: 'Predictable Inbound Customer Acquisition & Measurable ROI'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeDossierId, setActiveDossierId] = useState<string>(dossiers[0].id);

  const activeDossier = dossiers.find((d) => d.id === activeDossierId) || dossiers[0];

  return (
    <section id="hero-section" className="relative min-h-[92dvh] pt-32 pb-24 bg-[#fafaf7] bg-alabaster-grid border-b border-[#e5e4de] flex items-center scroll-mt-12">
      <div className="o-container w-full">
        {/* Asymmetrical Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Commanding Editorial Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Single Restrained Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e5e4de] bg-white text-[#0a1118] text-[11px] font-semibold tracking-wider uppercase mb-6 w-max shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-pulse" />
              <span>SINGLE-WINDOW BUSINESS SOLUTIONS IN INDIA</span>
            </div>

            {/* Display Headline (Max 2 lines, tight leading 0.96) */}
            <h1 className="text-[38px] sm:text-[54px] lg:text-[60px] font-extrabold tracking-[-0.03em] leading-[0.96] text-[#0a1118] mb-6">
              Statutory Compliance, <br />
              Human Capital & <br />
              <span className="text-[#047857]">Working Credit.</span>
            </h1>

            {/* Subtext (Max 20 words, high clarity) */}
            <p className="text-[17px] sm:text-[19px] font-normal leading-relaxed text-[#475569] max-w-xl mb-8">
              TriSecure Solutions delivers institutional advisory for FSSAI food licensing, workforce payroll, banking loan syndication, and digital market growth.
            </p>

            {/* Action Buttons (Button-in-Button Architecture) */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => onOpenConsultation(activeDossier.title)}
                className="btn-island-primary group"
              >
                <span>INITIATE ENGAGEMENT</span>
                <div className="btn-island-icon">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>

              <a
                href="#services"
                className="btn-island-secondary"
              >
                <span>EXPLORE DIRECTORY</span>
              </a>
            </div>

            {/* Live Operational Status Line */}
            <div className="flex items-center gap-2.5 text-[12px] font-mono text-[#64748b] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#047857]" />
              <span>All-India Statutory Registry & Bank Desk Active</span>
            </div>
          </div>

          {/* Right Column: Double-Bezel Interactive Regulatory Terminal / Dossier */}
          <div className="lg:col-span-6">
            <div className="bezel-shell">
              <div className="bezel-core p-6 sm:p-7">
                {/* Dossier Header & 4 Horizontal Switcher Tabs */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#f1f0ea]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#047857]" />
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#0a1118] uppercase">
                      SERVICE DOSSIER // DIRECTORY
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#64748b] uppercase">
                    TAB {activeDossier.tabNumber} / 04
                  </span>
                </div>

                {/* 4 Tabs Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6 bg-[#f1f0ea] p-1.5 rounded-xl">
                  {dossiers.map((item) => {
                    const isActive = item.id === activeDossierId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveDossierId(item.id)}
                        className={`text-center py-2 px-2 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-white text-[#0a1118] shadow-xs ring-1 ring-black/5'
                            : 'text-[#64748b] hover:text-[#0a1118]'
                        }`}
                      >
                        <span className="block opacity-60 text-[9px] mb-0.5">{item.tabNumber}</span>
                        <span className="truncate block">{item.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Dossier Body Content */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#047857] uppercase bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded">
                        {activeDossier.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748b]">
                        <Clock className="w-3.5 h-3.5 text-[#047857]" />
                        <span>{activeDossier.turnaround}</span>
                      </div>
                    </div>

                    <h3 className="text-[19px] sm:text-[21px] font-bold text-[#0a1118] leading-snug">
                      {activeDossier.title}
                    </h3>
                  </div>

                  {/* Statutory Authority Callout */}
                  <div className="p-3 rounded-lg bg-[#fafaf7] border border-[#e5e4de] flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#0a1118] shrink-0 mt-0.5" />
                    <div className="text-[12px] text-[#334155] leading-tight">
                      <span className="text-[10px] font-mono text-[#64748b] uppercase block">
                        Statutory Authority / Banking Syndicate:
                      </span>
                      <span className="font-medium text-[#0a1118]">{activeDossier.authority}</span>
                    </div>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-wider">
                      SPECIFICATION CHECKLIST
                    </div>
                    {activeDossier.scopeItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#334155]">
                        <div className="w-4 h-4 rounded-full bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Guarantee & Direct Request Action */}
                  <div className="pt-4 border-t border-[#f1f0ea] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-[11px] text-[#64748b] leading-tight">
                      <span className="text-[#94a3b8] font-mono block text-[9px] uppercase">Guaranteed Deliverable:</span>
                      <span className="font-medium text-[#0a1118]">{activeDossier.primaryOutcome}</span>
                    </div>

                    <button
                      onClick={() => onOpenConsultation(`${activeDossier.tabLabel} — ${activeDossier.title}`)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0a1118] text-white text-[12px] font-bold hover:bg-[#047857] transition-colors uppercase tracking-wider shrink-0 cursor-pointer"
                    >
                      <span>INQUIRE NOW</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
