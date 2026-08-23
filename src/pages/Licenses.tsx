import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, ArrowUpRight, Sparkles, Building2, Store, Factory, Utensils } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';

interface LicensesProps {
  onOpenConsultation: (service?: string) => void;
}

export const Licenses: React.FC<LicensesProps> = ({ onOpenConsultation }) => {
  const [activeLicense, setActiveLicense] = useState<number>(0);

  const licenseData = [
    {
      id: 'fssai',
      title: 'FSSAI License',
      subtitle: 'Food Safety and Standards Authority of India',
      category: 'Food Safety & Hygiene',
      color: '#7C8B6F',
      bgClass: 'bg-[#7C8B6F] text-[#F5F0E6]',
      jurisdiction: 'Pan-India (Basic, State, Central)',
      validity: '1 to 5 Years with Auto-Renewal Alert',
      timeline: '15 to 60 Business Days',
      summary:
        'Mandatory statutory registration & licensing for any entity dealing with manufacturing, processing, storage, distribution, packaging, or sale of food products.',
      keyPoints: [
        'Basic Registration: For turnover up to ₹12 Lakhs/year',
        'State License: For turnover ₹12 Lakhs to ₹20 Crores/year',
        'Central License: For turnover > ₹20 Crores, 100% EOU, or multi-state ops',
        'Mandatory Food Recall Plan & FoSTaC certified supervisor documentation',
      ],
    },
    {
      id: 'shop-act',
      title: 'Shop & Establishment',
      subtitle: 'Municipal Commercial Registration',
      category: 'Labor & Operating Permit',
      color: '#C9AF6B',
      bgClass: 'bg-[#C9AF6B] text-[#1A1A16]',
      jurisdiction: 'Delhi, Gurgaon, Faridabad, Noida, Ghaziabad',
      validity: 'Lifetime / State Dependent',
      timeline: '3 to 7 Business Days',
      summary:
        'Legal authorization required under the respective State Shop and Commercial Establishments Act to operate any office, shop, or commercial premises with employee rights protection.',
      keyPoints: [
        'Mandatory for opening commercial current bank accounts',
        'Regulates working hours, weekly offs, overtime, and leave registers',
        'Registration certificates customized by specific city municipal corporations',
        'Timely amendment processing for address or director additions',
      ],
    },
    {
      id: 'dpcc',
      title: 'DPCC License',
      subtitle: 'Delhi Pollution Control Committee',
      category: 'Environmental & Industrial Clearances',
      color: '#1A1A16',
      bgClass: 'bg-[#1A1A16] text-[#F5F0E6]',
      jurisdiction: 'National Capital Territory of Delhi (NCT)',
      validity: '1 to 5 Years',
      timeline: '20 to 45 Business Days',
      summary:
        'Consent to Establish (CTE) and Consent to Operate (CTO) mandated for industrial, hospitality, healthcare, and manufacturing activities categorized under White, Green, Orange, or Red categories.',
      keyPoints: [
        'Effluent Treatment Plant (ETP) / Oil & Grease Trap audit verification',
        'Air emission compliance for DG sets and commercial exhaust stacks',
        'Hazardous, plastic, and biomedical waste authorization filings',
        'Zero-penalty rectification of historical non-compliance notices',
      ],
    },
    {
      id: 'health-trade',
      title: 'Health & Trade License',
      subtitle: 'MCD Public Health Department',
      category: 'Municipal Health & Safety',
      color: '#262621',
      bgClass: 'bg-[#262621] text-[#F5F0E6]',
      jurisdiction: 'Municipal Corporation of Delhi (MCD)',
      validity: '1 Year (Annual Cycle Renewal)',
      timeline: '15 to 30 Business Days',
      summary:
        'Mandatory permit issued by the Municipal Corporation ensuring that the commercial premises adheres to public health standards, sanitation bylaws, and structural fire safety norms.',
      keyPoints: [
        'Mandatory for restaurants, bakeries, food courts, salons, and gyms',
        'Premises layout clearance and fire extinguisher adequacy verification',
        'Health fitness medical certificates for all on-site personnel',
        'Swift dispute resolution and annual renewal facilitation',
      ],
    },
  ];

  return (
    <PageTransition>
      {/* =========================================================================
          1. REDESIGNED MASTHEAD: Editorial 2-Column Hero with License Directory Card
          ========================================================================= */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>STATUTORY LICENSING PORTAL // DIRECTORY</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A16] leading-[1.08]">
                Licenses We Handle
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light max-w-xl">
                TriSecure Solutions is your trusted single-window partner for statutory business registrations. We handle FSSAI food safety licenses, municipal Shop & Establishment permits, DPCC environmental clearances, and MCD Health Trade sanctions with end-to-end filing and audit support.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Licenses')}
                  className="btn-editorial-primary text-xs"
                >
                  <span>Schedule Licensing Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/pricing"
                  className="btn-editorial-secondary text-xs"
                >
                  <span>View Fee Schedules</span>
                </Link>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1A1A16]/10 max-w-lg">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    04
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Core Permit Desks
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C8B6F] block">
                    100%
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Audit Readiness
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    Pan-NCR
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    State & Central Scope
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Statutory License Directory Bento Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/15 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A16]/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Statutory Clearances</span>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold">
                    GUARANTEED AUDIT COMPLIANCE
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#1A1A16] leading-snug font-normal">
                  "Frictionless approval pathways from initial document verification to official gazette issuance and annual renewals."
                </p>

                {/* 4 License Category Tiles */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7C8B6F] text-white flex items-center justify-center shrink-0">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">FSSAI License</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">Basic, State & Central Food Permits</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#7C8B6F] font-bold">15-60 Days</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C9AF6B] text-[#1A1A16] flex items-center justify-center shrink-0">
                        <Store className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Shop & Establishment</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">Commercial Office & Retail Registration</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#C9AF6B] font-bold">3-7 Days</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">DPCC License</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">CTE / CTO Pollution Clearances</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#1A1A16] font-bold">20-45 Days</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7C8B6F] text-white flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Health & Trade License</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">MCD Public Health & Fire Sanctions</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#7C8B6F] font-bold">15-30 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE OVERLAPPING VENN / CLUSTER VISUALIZER
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-2">
                // Interactive Matrix
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Statutory License Matrix
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] max-w-sm">
              Click or select any license node in the cluster below to inspect technical requirements, jurisdiction, and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: License Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {licenseData.map((lic, idx) => {
                const isActive = activeLicense === idx;
                return (
                  <button
                    key={lic.id}
                    onClick={() => setActiveLicense(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#1A1A16] text-[#F5F0E6] border-[#1A1A16] shadow-xl translate-x-2'
                        : 'bg-[#F5F0E6] text-[#1A1A16] border-[#1A1A16]/10 hover:bg-[#EFE9DC]'
                    }`}
                  >
                    <div>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider block mb-1 font-semibold ${
                          isActive ? 'text-[#C9AF6B]' : 'text-[#7C8B6F]'
                        }`}
                      >
                        {lic.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold">
                        {lic.title}
                      </h3>
                      <p
                        className={`font-sans text-xs mt-0.5 ${
                          isActive ? 'text-white/70' : 'text-[#7A7A70]'
                        }`}
                      >
                        {lic.subtitle}
                      </p>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#1A1A16]/5 text-[#1A1A16]'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Col: Deep-Dive License Inspector Card */}
            <div className="lg:col-span-7">
              {licenseData[activeLicense] && (
                <div
                  className="rounded-3xl p-8 sm:p-10 border shadow-2xl transition-all duration-500 bg-[#FAF6EE] text-[#1A1A16] border-[#1A1A16]/15"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1A1A16]/10 mb-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#7C8B6F] font-semibold block mb-1">
                        {licenseData[activeLicense].category}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                        {licenseData[activeLicense].title}
                      </h3>
                    </div>
                    <button
                      onClick={() => onOpenConsultation(licenseData[activeLicense].title)}
                      className="btn-editorial-primary text-xs"
                    >
                      <span>Apply for Permit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10">
                      <span className="font-mono text-[10px] uppercase text-[#7A7A70] block">
                        Jurisdiction / Territory
                      </span>
                      <p className="font-serif text-sm font-bold text-[#1A1A16] mt-1">
                        {licenseData[activeLicense].jurisdiction}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10">
                      <span className="font-mono text-[10px] uppercase text-[#7A7A70] block">
                        Statutory Validity
                      </span>
                      <p className="font-serif text-sm font-bold text-[#1A1A16] mt-1">
                        {licenseData[activeLicense].validity}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 sm:col-span-2">
                      <span className="font-mono text-[10px] uppercase text-[#7A7A70] block">
                        Standard Approval Timeline
                      </span>
                      <p className="font-serif text-sm font-bold text-[#7C8B6F] mt-1">
                        {licenseData[activeLicense].timeline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#7C8B6F] font-semibold mb-2">
                        // Statutory Overview
                      </h4>
                      <p className="font-sans text-sm text-[#7A7A70] leading-relaxed font-light">
                        {licenseData[activeLicense].summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#7C8B6F] font-semibold mb-3">
                        // Key Mandates & Coverage
                      </h4>
                      <ul className="space-y-2.5">
                        {licenseData[activeLicense].keyPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#1A1A16]">
                            <CheckCircle2 className="w-4 h-4 text-[#7C8B6F] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. REDESIGNED CTA STRIP: High-Converting Executive Bento Box
          ========================================================================= */}
      <EditorialCtaBanner
        tagline="// REGULATORY LICENSING DESK"
        title="Need urgent statutory license clearances for your business?"
        description="Contact our senior regulatory advisory desk for end-to-end document preparation, municipal inspection audits, and government portal filings with zero delays."
        primaryBtnText="Consult Regulatory Desk"
        secondaryBtnText="Inspect Fee Schedules"
        secondaryBtnLink="/pricing"
        serviceCategory="Licenses"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
