import { Helmet } from 'react-helmet-async';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Receipt, FileText, Sparkles, CreditCard } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';

interface PricingProps {
  onOpenConsultation: (service?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const fssaiPricing = [
    {
      tier: 'Basic Registration',
      duration: 'Max 30 days',
      price: '1,500',
      suffix: '+ Govt License Fee',
      eligibility: 'Petty food manufacturers, small hawkers, or turnover up to ₹12 Lakhs/year.',
      includes: 'Documentation audit, form filing, acknowledgment generation, and query replies.',
    },
    {
      tier: 'State License',
      duration: 'Max 60 days',
      price: '5,000',
      suffix: '+ Govt License Fee',
      eligibility: 'Mid-sized food manufacturers, restaurants, caterers, or turnover ₹12 Lakhs to ₹20 Crores/year.',
      includes: 'Premises blueprint drafting, FoSTaC liaison, state inspector liaison, and certificate delivery.',
    },
    {
      tier: 'Central License',
      duration: 'Max 60 days',
      price: '10,000',
      suffix: '+ Govt License Fee',
      eligibility: 'Large food corporations, 100% Export Oriented Units, importers, or turnover > ₹20 Crores.',
      includes: 'Central authority liaison, recall plan filing, custom clearance authorization, and multi-state coverage.',
    },
    {
      tier: 'Modification Fee',
      duration: 'Max 30 days',
      price: '2,000',
      suffix: '+ Govt License Fee',
      eligibility: 'Existing license holders modifying business address, adding food categories, or director updates.',
      includes: 'Endorsement filings, supporting affidavit drafting, and renewed digital certificate dispatch.',
    },
  ];

  const shopEstPricing = [
    {
      city: 'Delhi',
      price: '1,500',
      suffix: '+ Govt License Fee',
      timeline: '3 to 5 Days',
      coverage: 'All North, South, East, West & Central Delhi commercial districts.',
    },
    {
      city: 'Gurgaon & Faridabad',
      price: '2,000',
      suffix: '+ Govt License Fee',
      timeline: '4 to 7 Days',
      coverage: 'Haryana Labor Department statutory portal filing & verification.',
    },
    {
      city: 'Ghaziabad & Noida',
      price: '2,000',
      suffix: '+ Govt License Fee',
      timeline: '4 to 7 Days',
      coverage: 'Uttar Pradesh Dookan Aur Vanijya Adhishthan legal registration.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>License Consultation Charges | Trisecure Solutions</title>
        <meta name="description" content="View transparent consultation charges for FSSAI, MCD Trade, Factory, and Shop & Establishment licenses across Delhi NCR locations." />
        <meta property="og:title" content="License Consultation Charges | Trisecure Solutions" />
        <meta property="og:description" content="View transparent consultation charges for FSSAI, MCD Trade, Factory, and Shop & Establishment licenses across Delhi NCR locations." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* =========================================================================
          1. REDESIGNED MASTHEAD: Editorial 2-Column Hero with Pricing Assurance Bento
          ========================================================================= */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>STATUTORY FEE INDEX // 2026 TRANSPARENCY</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A16] leading-[1.08]">
                Consultation Charges
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light max-w-xl">
                Transparent, upfront advisory fees with zero hidden markups. All statutory government license fees are payable directly at official department portals at actuals with full government challans.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Pricing')}
                  className="btn-editorial-primary text-xs"
                >
                  <span>Request Fee Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/licenses"
                  className="btn-editorial-secondary text-xs"
                >
                  <span>Inspect Licenses Handled</span>
                </Link>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1A1A16]/10 max-w-lg">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    100%
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Upfront Pricing
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C8B6F] block">
                    0
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Hidden Surcharges
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    Direct
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Govt Portal Receipts
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Assurance Bento Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/15 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A16]/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pricing Integrity</span>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold">
                    NO HIDDEN COSTS
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#1A1A16] leading-snug font-normal">
                  "Direct department filings with complete fiscal transparency, official challan generation, and zero middleman markups."
                </p>

                {/* 3 Transparency Pillar Tiles */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#7C8B6F] text-white flex items-center justify-center shrink-0">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Direct Government Challans</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Statutory fees paid directly into treasury accounts</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#C9AF6B] text-[#1A1A16] flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Fixed Professional Retainers</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Predictable filing, drafting, and audit liaison rates</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Zero Renewal Traps</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Complimentary auto-reminders before expiry cycles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FSSAI LICENSE FEES: Editorial Table
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-1">
                // Category 01
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                FSSAI Food Safety Licensing
              </h2>
            </div>
            <span className="font-mono text-xs px-3.5 py-1 rounded-full bg-[#7C8B6F] text-white font-semibold">
              Pan-India
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {fssaiPricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F0E6] rounded-3xl p-7 sm:p-9 border border-[#1A1A16]/10 shadow-sm hover:border-[#7C8B6F] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#1A1A16]/10">
                    <span className="font-mono text-xs text-[#7C8B6F] font-bold tracking-wider uppercase">
                      {item.duration}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] mb-2">
                    {item.tier}
                  </h3>

                  {/* Graphic Price Treatment */}
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                      ₹{item.price}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70] uppercase font-semibold">
                      {item.suffix}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-[#7A7A70] mb-6">
                    <p><strong className="text-[#1A1A16]">Eligibility:</strong> {item.eligibility}</p>
                    <p><strong className="text-[#1A1A16]">Scope:</strong> {item.includes}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1A1A16]/10">
                  <button
                    onClick={() => onOpenConsultation(`FSSAI - ${item.tier}`)}
                    className="btn-editorial-primary w-full justify-center text-xs"
                  >
                    <span>Apply for {item.tier}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SHOP & ESTABLISHMENT: City-Wise Matrix
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-1">
                // Category 02
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                Shop & Establishment Registration
              </h2>
            </div>
            <span className="font-mono text-xs px-3.5 py-1 rounded-full bg-[#C9AF6B] text-[#1A1A16] font-bold">
              NCR Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {shopEstPricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6EE] rounded-3xl p-7 sm:p-9 border border-[#1A1A16]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#1A1A16]/10">
                    <span className="font-mono text-xs text-[#7C8B6F] font-bold">
                      {item.timeline}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1A16] mb-2">
                    {item.city}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                      ₹{item.price}
                    </span>
                    <span className="font-mono text-xs text-[#7A7A70] uppercase font-semibold">
                      {item.suffix}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#7A7A70] leading-relaxed mb-6 font-light">
                    {item.coverage}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A1A16]/10">
                  <button
                    onClick={() => onOpenConsultation(`Shop Act - ${item.city}`)}
                    className="btn-editorial-primary w-full justify-center text-xs"
                  >
                    <span>Register in {item.city}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. REDESIGNED CTA STRIP: High-Converting Executive Bento Box
          ========================================================================= */}
      <EditorialCtaBanner
        tagline="// BESPOKE ENTERPRISE RETAINERS"
        title="Need customized pricing for DPCC, MCD, HR, or Marketing?"
        description="Due to varying premises dimensions, pollution categories, workforce sizes, and media spend scales, our advisory leads provide itemized custom proposals within 2 business hours."
        primaryBtnText="Request Itemized Proposal"
        secondaryBtnText="Contact Advisory Desk"
        secondaryBtnLink="/contact"
        serviceCategory="Custom Pricing"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
