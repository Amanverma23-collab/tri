import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

interface PricingProps {
  onOpenConsultation: (service?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const fssaiPricing = [
    {
      tier: 'Basic Registration',
      duration: 'Max 30 days',
      price: '1,500',
      suffix: '+ License Fee',
      eligibility: 'Petty food manufacturers, small hawkers, or turnover up to ₹12 Lakhs/year.',
      includes: 'Documentation audit, form filing, acknowledgment generation, and query replies.',
    },
    {
      tier: 'State License',
      duration: 'Max 60 days',
      price: '5,000',
      suffix: '+ License Fee',
      eligibility: 'Mid-sized food manufacturers, restaurants, caterers, or turnover ₹12 Lakhs to ₹20 Crores/year.',
      includes: 'Premises blueprint drafting, FoSTaC liaison, state inspector liaison, and certificate delivery.',
    },
    {
      tier: 'Central License',
      duration: 'Max 60 days',
      price: '10,000',
      suffix: '+ License Fee',
      eligibility: 'Large food corporations, 100% Export Oriented Units, importers, or turnover > ₹20 Crores.',
      includes: 'Central authority liaison, recall plan filing, custom clearance authorization, and multi-state coverage.',
    },
    {
      tier: 'Modification Fee',
      duration: 'Max 30 days',
      price: '2,000',
      suffix: '+ License Fee',
      eligibility: 'Existing license holders modifying business address, adding food categories, or director updates.',
      includes: 'Endorsement filings, supporting affidavit drafting, and renewed digital certificate dispatch.',
    },
  ];

  const shopEstPricing = [
    {
      city: 'Delhi',
      price: '1,500',
      suffix: '+ License Fee',
      timeline: '3 to 5 Days',
      coverage: 'All North, South, East, West & Central Delhi commercial districts.',
    },
    {
      city: 'Gurgaon & Faridabad',
      price: '2,000',
      suffix: '+ License Fee',
      timeline: '4 to 7 Days',
      coverage: 'Haryana Labor Department statutory portal filing & verification.',
    },
    {
      city: 'Ghaziabad & Noida',
      price: '2,000',
      suffix: '+ License Fee',
      timeline: '4 to 7 Days',
      coverage: 'Uttar Pradesh Dookan Aur Vanijya Adhishthan legal registration.',
    },
  ];

  return (
    <PageTransition>
      {/* 1. MASTHEAD: Oversized "Consultation Charges" */}
      <section className="relative pt-36 pb-20 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#7C8B6F]" />
            <span>Statutory Fee Index // 2026</span>
          </div>

          <h1 className="font-serif text-display-giant text-[#1A1A16] font-bold tracking-tight">
            Consultation Charges
          </h1>

          <p className="font-sans text-lg sm:text-2xl text-[#7A7A70] max-w-3xl font-light mt-4">
            Transparent, upfront advisory pricing with zero hidden surcharges. All government license fees are payable directly at official department portals at actuals.
          </p>
        </div>
      </section>

      {/* 2. FSSAI LICENSE FEES: Editorial Table with Oversized Numerals */}
      <section className="py-24 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-2">
                // Category 01
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                FSSAI Food Safety Licensing
              </h2>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#7C8B6F] text-white">
              Pan-India
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fssaiPricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F0E6] rounded-3xl p-8 sm:p-10 border border-[#1A1A16]/10 shadow-sm hover:border-[#7C8B6F] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A16]/10">
                    <span className="font-mono text-xs text-[#7C8B6F] font-bold tracking-wider uppercase">
                      {item.duration}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] mb-3">
                    {item.tier}
                  </h3>

                  {/* Oversized Graphic Price Treatment */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A16]">
                      ₹{item.price}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70] uppercase font-semibold">
                      {item.suffix}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-[#7A7A70] mb-6">
                    <p><strong className="text-[#1A1A16]">Eligibility:</strong> {item.eligibility}</p>
                    <p><strong className="text-[#1A1A16]">Scope:</strong> {item.includes}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1A1A16]/10">
                  <button
                    onClick={() => onOpenConsultation(`FSSAI ${item.tier}`)}
                    className="btn-editorial-primary w-full justify-center text-xs"
                  >
                    <span>Apply for {item.tier}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRADE & FACTORY LICENSES: High-Contrast Charcoal Breakout */}
      <section className="py-24 bg-[#1A1A16] text-[#F5F0E6] border-b border-white/10 bg-charcoal-textured">
        <div className="editorial-container">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block mb-2">
              // Category 02 & 03
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Municipal Trade & Industrial Factory Licenses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: MCD Trade */}
            <div className="rounded-3xl p-8 sm:p-12 bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#C9AF6B] uppercase">MCD Public Health Dept</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10">Delhi Jurisdiction</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">
                  MCD Trade License (Health Trade)
                </h3>
                <p className="font-sans text-sm text-white/70 mb-6">
                  Mandatory annual municipal operating license for eateries, cloud kitchens, salons, fitness centers, and commercial trade outlets in Delhi.
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-5xl font-bold text-white">₹10,000</span>
                  <span className="font-mono text-xs text-[#C9AF6B] uppercase font-semibold">+ License Fee</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenConsultation('MCD Trade License')}
                  className="btn-editorial-light w-full justify-center text-xs"
                >
                  <span>Initiate MCD Filing</span>
                </button>
              </div>
            </div>

            {/* Card 2: Factory License */}
            <div className="rounded-3xl p-8 sm:p-12 bg-white/[0.04] border border-white/10 hover:border-[#7C8B6F] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#7C8B6F] uppercase">Directorate of Industrial Safety</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10">Factories Act 1948</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">
                  Factory License
                </h3>
                <p className="font-sans text-sm text-white/70 mb-6">
                  Statutory factory layout approval, plant machinery horsepower verification, worker safety compliance, and operational permit grant.
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-5xl font-bold text-white">₹10,000</span>
                  <span className="font-mono text-xs text-[#7C8B6F] uppercase font-semibold">+ License Fee</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenConsultation('Factory License')}
                  className="btn-editorial-light w-full justify-center text-xs"
                >
                  <span>Initiate Factory Filing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOP & ESTABLISHMENT (By City Tiers) */}
      <section className="py-24 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-2">
              // Category 04
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
              Shop & Establishment Act (By City)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopEstPricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6EE] rounded-3xl p-8 border border-[#1A1A16]/10 hover:border-[#C9AF6B] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#7C8B6F] font-bold">0{idx + 1}</span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#EFE9DC]">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1A16] mb-2">
                    {item.city}
                  </h3>

                  <p className="font-sans text-xs text-[#7A7A70] mb-6">
                    {item.coverage}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-4xl font-bold text-[#1A1A16]">
                      ₹{item.price}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70] uppercase font-semibold">
                      {item.suffix}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1A1A16]/10">
                  <button
                    onClick={() => onOpenConsultation(`Shop & Act - ${item.city}`)}
                    className="btn-editorial-secondary w-full justify-center text-xs"
                  >
                    <span>Register in {item.city}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA: "Have questions? Talk to us →" */}
      <section className="py-20 bg-[#1A1A16] text-[#F5F0E6]">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              Have questions? Talk to us
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl font-light">
              Speak with our senior regulatory officers to clarify specific municipal requirements or custom corporate retainers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-editorial-light" data-cursor="Talk">
              <span>Have questions? Talk to us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918585999922"
              className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91 8585999922</span>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
