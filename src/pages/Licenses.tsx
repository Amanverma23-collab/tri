import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

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
      {/* 1. MASTHEAD: Oversized "Licenses We Handle" */}
      <section className="relative pt-36 pb-20 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#7C8B6F]" />
            <span>Statutory Licensing Portal // Directory</span>
          </div>

          <h1 className="font-serif text-display-giant text-[#1A1A16] font-bold tracking-tight">
            Licenses We Handle
          </h1>

          {/* Intro Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[#7A7A70] uppercase tracking-widest block mb-3">
                // Compliance Mandate
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-[#1A1A16] leading-snug">
                Frictionless approval pathways from initial filing to ongoing renewal support.
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light">
                TriSecure Solutions is your trusted partner for comprehensive licensing services, specializing in obtaining various essential business licenses. We expertly handle FSSAI licenses for food safety compliance, Shop & Establishment licenses for commercial establishments, MCD Trade licenses for businesses operating in Delhi, and DPCC licenses for environmental regulations. Our dedicated team ensures a seamless process from application to approval, providing ongoing compliance support and timely renewals to keep your business running smoothly and legally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE OVERLAPPING VENN / CLUSTER VISUALIZER */}
      <section className="py-24 sm:py-32 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-3">
                // Interactive Cluster
              </span>
              <h2 className="font-serif text-display-sub font-bold text-[#1A1A16] tracking-tight">
                Statutory License Matrix
              </h2>
            </div>
            <p className="font-sans text-sm text-[#7A7A70] max-w-sm">
              Click or select any license node in the cluster below to inspect technical requirements, jurisdiction, and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Overlapping Interactive Cluster Nodes */}
            <div className="lg:col-span-6 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center p-4">
              {/* Central Core Emblem */}
              <div className="absolute w-28 h-28 rounded-full bg-[#1A1A16] text-[#F5F0E6] flex flex-col items-center justify-center text-center p-2 z-20 shadow-2xl border-2 border-[#C9AF6B]/40 select-none">
                <ShieldCheck className="w-6 h-6 text-[#C9AF6B] mb-0.5" />
                <span className="font-mono text-[9px] uppercase tracking-widest font-bold">
                  TRISECURE
                </span>
                <span className="font-serif text-[10px] text-white/75 italic">
                  Clearance Core
                </span>
              </div>

              {/* Node 1: FSSAI (Top Left) */}
              <button
                onClick={() => setActiveLicense(0)}
                data-cursor="Select"
                className={`absolute top-4 left-4 sm:left-8 w-44 sm:w-56 h-44 sm:h-56 rounded-full transition-all duration-500 p-6 flex flex-col justify-center items-center text-center border shadow-xl ${
                  activeLicense === 0
                    ? 'bg-[#7C8B6F] text-[#F5F0E6] scale-105 z-30 ring-8 ring-[#7C8B6F]/20 border-white'
                    : 'bg-[#EFE9DC] text-[#1A1A16] hover:scale-100 opacity-90 border-[#1A1A16]/10'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider mb-1">01 // FOOD</span>
                <span className="font-serif text-lg sm:text-2xl font-bold leading-tight">
                  FSSAI License
                </span>
                <span className="text-[11px] opacity-75 mt-1 hidden sm:block">
                  Basic, State & Central
                </span>
              </button>

              {/* Node 2: Shop & Establishment (Top Right) */}
              <button
                onClick={() => setActiveLicense(1)}
                data-cursor="Select"
                className={`absolute top-4 right-4 sm:right-8 w-44 sm:w-56 h-44 sm:h-56 rounded-full transition-all duration-500 p-6 flex flex-col justify-center items-center text-center border shadow-xl ${
                  activeLicense === 1
                    ? 'bg-[#C9AF6B] text-[#1A1A16] scale-105 z-30 ring-8 ring-[#C9AF6B]/20 border-white font-bold'
                    : 'bg-[#FAF6EE] text-[#1A1A16] hover:scale-100 opacity-90 border-[#1A1A16]/10'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider mb-1">02 // LABOR</span>
                <span className="font-serif text-lg sm:text-2xl font-bold leading-tight">
                  Shop & Act
                </span>
                <span className="text-[11px] opacity-75 mt-1 hidden sm:block">
                  Commercial Premises
                </span>
              </button>

              {/* Node 3: DPCC License (Bottom Left) */}
              <button
                onClick={() => setActiveLicense(2)}
                data-cursor="Select"
                className={`absolute bottom-4 left-4 sm:left-8 w-44 sm:w-56 h-44 sm:h-56 rounded-full transition-all duration-500 p-6 flex flex-col justify-center items-center text-center border shadow-xl ${
                  activeLicense === 2
                    ? 'bg-[#1A1A16] text-[#F5F0E6] scale-105 z-30 ring-8 ring-[#1A1A16]/20 border-[#C9AF6B]'
                    : 'bg-[#FAF6EE] text-[#1A1A16] hover:scale-100 opacity-90 border-[#1A1A16]/10'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider mb-1">03 // ENVIRONMENT</span>
                <span className="font-serif text-lg sm:text-2xl font-bold leading-tight">
                  DPCC License
                </span>
                <span className="text-[11px] opacity-75 mt-1 hidden sm:block">
                  Pollution Clearances
                </span>
              </button>

              {/* Node 4: Health & Trade (Bottom Right) */}
              <button
                onClick={() => setActiveLicense(3)}
                data-cursor="Select"
                className={`absolute bottom-4 right-4 sm:right-8 w-44 sm:w-56 h-44 sm:h-56 rounded-full transition-all duration-500 p-6 flex flex-col justify-center items-center text-center border shadow-xl ${
                  activeLicense === 3
                    ? 'bg-[#262621] text-[#F5F0E6] scale-105 z-30 ring-8 ring-[#262621]/20 border-white'
                    : 'bg-[#EFE9DC] text-[#1A1A16] hover:scale-100 opacity-90 border-[#1A1A16]/10'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider mb-1">04 // MUNICIPAL</span>
                <span className="font-serif text-lg sm:text-2xl font-bold leading-tight">
                  Health & Trade
                </span>
                <span className="text-[11px] opacity-75 mt-1 hidden sm:block">
                  MCD Sanitary Permit
                </span>
              </button>
            </div>

            {/* Right Col: Expanded Active License Details */}
            <div className="lg:col-span-6">
              {(() => {
                const current = licenseData[activeLicense];
                return (
                  <div className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/15 shadow-xl transition-all duration-500 animate-in fade-in">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A1A16]/10">
                      <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest font-semibold">
                        // {current.category}
                      </span>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#1A1A16] text-[#F5F0E6]">
                        {current.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16] mb-2">
                      {current.title}
                    </h3>
                    <p className="font-serif text-base italic text-[#7C8B6F] mb-6">
                      {current.subtitle}
                    </p>

                    <p className="font-sans text-base text-[#7A7A70] leading-relaxed mb-6 font-light">
                      {current.summary}
                    </p>

                    {/* Metadata Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-[#EFE9DC]">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[#7A7A70] block">Jurisdiction</span>
                        <span className="font-sans text-sm font-semibold text-[#1A1A16]">{current.jurisdiction}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[#7A7A70] block">Standard Validity</span>
                        <span className="font-sans text-sm font-semibold text-[#1A1A16]">{current.validity}</span>
                      </div>
                    </div>

                    {/* Key Technical Requirements */}
                    <div className="space-y-3 mb-8">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#1A1A16] font-bold block">
                        Compliance Checklist:
                      </span>
                      {current.keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#7A7A70]">
                          <CheckCircle2 className="w-4 h-4 text-[#7C8B6F] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#1A1A16]/10">
                      <Link to="/pricing" className="btn-editorial-primary" data-cursor="Pricing">
                        <span>View Consultation Charges</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => onOpenConsultation(current.title)}
                        className="btn-editorial-secondary"
                        data-cursor="Consult"
                      >
                        <span>Apply For License</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CROSS-LINK TO PRICING */}
      <section className="py-20 bg-[#1A1A16] text-[#F5F0E6] border-t border-white/10">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block mb-2">
              Fee Schedules //
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Consultation Charges & State Fees
            </h3>
            <p className="font-sans text-sm text-white/70 mt-1">
              Transparent, upfront advisory fees for FSSAI Basic/State/Central, MCD Health Trade, and City Shop Acts.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/pricing" className="btn-editorial-light" data-cursor="Pricing">
              <span>View Consultation Charges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
