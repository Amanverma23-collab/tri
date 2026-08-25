import { Helmet } from 'react-helmet-async';
﻿import React from 'react';

import { ArrowUpRight, CircleDollarSign, Car, Home as HomeIcon, Briefcase } from 'lucide-react';
import { SplitRevealSection, SplitSubItem } from '../../components/SplitRevealSection';
import { HorizontalScrollSection, HorizontalCardItem } from '../../components/HorizontalScrollSection';
import { PageTransition } from '../../components/PageTransition';
import { EditorialCtaBanner } from '../../components/EditorialCtaBanner';

interface InsuranceLoansServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const InsuranceLoansServices: React.FC<InsuranceLoansServicesProps> = ({
  onOpenConsultation,
}) => {
  const mainSubItems: SplitSubItem[] = [
    {
      title: 'Risk Assessment',
      description: 'Identifying potential financial, liability, and operational risks to your business.',
      tag: 'Risk Analysis',
    },
    {
      title: 'Policy Procurement',
      description: 'Sourcing the best insurance policies to safeguard your corporate assets and personal life.',
      tag: 'Underwriting',
    },
    {
      title: 'Claims Management',
      description: 'Assisting with the claims process to ensure swift, hassle-free settlement resolution.',
      tag: 'Settlement Desk',
    },
    {
      title: 'Advisory Consulting',
      description: 'Providing expert advice on insurance and capital structures to protect your long-term interests.',
      tag: 'Consultancy',
    },
    {
      title: 'Comprehensive Loan Services',
      description: 'Personal, Home, Business, Auto, Education, and Mortgage Loans with preferential bank rates.',
      tag: 'Capital Lending',
    },
  ];

  const insuranceCards: HorizontalCardItem[] = [
    {
      number: '01',
      title: 'Life Insurance',
      subtitle: 'Term & Whole-Life Protection',
      description:
        'Secure your future and your loved ones with our range of life insurance plans offering flexible tenures and maximum cover.',
      tag: 'Family Protection',
      theme: 'cream',
    },
    {
      number: '02',
      title: 'Health Insurance',
      subtitle: 'Comprehensive Medical Coverage',
      description:
        'Protect yourself and your family with comprehensive health coverage, cashless hospitalization, and critical illness benefits.',
      tag: 'Medical Care',
      theme: 'olive',
    },
    {
      number: '03',
      title: 'Auto Insurance',
      subtitle: 'Commercial & Private Vehicles',
      description:
        'Get the best deals on car insurance, ensuring peace of mind on the road with zero-depreciation and roadside assistance riders.',
      tag: 'Vehicle Cover',
      theme: 'charcoal',
    },
    {
      number: '04',
      title: 'Home Insurance',
      subtitle: 'Property & Structure Shield',
      description:
        'Safeguard your home and property against unforeseen events, natural disasters, theft, and structural damage.',
      tag: 'Property Shield',
      theme: 'mustard',
    },
    {
      number: '05',
      title: 'Business Insurance',
      subtitle: 'Commercial Liability & Assets',
      description:
        'Customized solutions to protect your business assets, marine transit, fire perils, and director liabilities.',
      tag: 'Commercial Risk',
      theme: 'charcoal',
    },
  ];

  const loanTypes = [
    {
      icon: Briefcase,
      title: 'Business Loans',
      tag: 'Commercial Expansion',
      desc: 'Tailored financing solutions to support the growth, machinery acquisition, working capital, and expansion of your business.',
    },
    {
      icon: HomeIcon,
      title: 'Home Loans',
      tag: 'Residential Ownership',
      desc: 'Flexible and affordable home loan options to help you own your dream home with low processing fees and easy tenures.',
    },
    {
      icon: CircleDollarSign,
      title: 'Personal Loans',
      tag: 'Unsecured Liquidity',
      desc: 'Fast and hassle-free personal loans to meet your immediate financial needs without collateral requirements.',
    },
    {
      icon: Car,
      title: 'Auto Loans',
      tag: 'Vehicle Financing',
      desc: 'Competitive interest rates and swift approvals for purchasing new and pre-owned personal or commercial vehicles.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Insurance & Loan Services | Trisecure Solutions</title>
        <meta name="description" content="Comprehensive insurance and loan services including life, health, auto, home, business insurance, and personal or business loans." />
        <meta property="og:title" content="Insurance & Loan Services | Trisecure Solutions" />
        <meta property="og:description" content="Comprehensive insurance and loan services including life, health, auto, home, business insurance, and personal or business loans." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* 1. HERO: Split Curtain Reveal with Editorial Hero Image */}
      <SplitRevealSection
        id="insurance-hero"
        badge="VERTICAL 02 // RISK & CAPITAL"
        title="INSURANCE & LOANS"
        subtitle="Asset Protection, Policy Underwriting & Strategic Lending"
        subtext="Protecting enterprises and families against catastrophic volatility while providing competitive liquidity and debt financing to accelerate growth."
        imageUrl="/images/insurance_hero.jpg"
        subItems={mainSubItems}
        theme="charcoal"
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. HORIZONTAL SCROLL: Insurance Types */}
      <HorizontalScrollSection
        id="insurance-types"
        marker="02.A"
        heading="Insurance Portfolio"
        subheading="Scroll horizontally to inspect our customized retail and corporate insurance underwriting covers."
        cards={insuranceCards}
      />

      {/* 3. TERTIARY SECTION: Loan Types Editorial Grid */}
      <section className="py-24 sm:py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-3">
                <span className="w-8 h-px bg-[#7C8B6F]" />
                <span>Practice Desk // 02.B</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Financing & Loan Solutions
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md">
              Fast-tracked underwriting partnerships with leading private & PSU institutional lenders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((loan, idx) => {
              const IconComp = loan.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase">
                        {loan.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#7C8B6F]/10 text-[#7C8B6F] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[#1A1A16] mb-3 group-hover:text-[#7C8B6F] transition-colors">
                      {loan.title}
                    </h3>
                    <p className="font-sans text-base text-[#7A7A70] leading-relaxed font-light">
                      {loan.desc}
                    </p>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#1A1A16]/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#7A7A70]">Quick Assessment Available</span>
                    <button
                      onClick={() => onOpenConsultation(loan.title)}
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-[#1A1A16] group-hover:text-[#7C8B6F] transition-colors"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. REDESIGNED CTA STRIP: High-Converting Executive Bento Box */}
      <EditorialCtaBanner
        tagline="// RISK PROTECTION & CAPITAL LENDING"
        title="Ready to safeguard your enterprise assets & secure capital funding?"
        description="Speak directly with our senior insurance underwriters and loan advisors to optimize policy premiums, structure business credit lines, and protect executive liabilities."
        primaryBtnText="Consult Risk Advisor"
        secondaryBtnText="Next: Food Compliance"
        secondaryBtnLink="/services/food-compliance"
        serviceCategory="Insurance & Loans"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
