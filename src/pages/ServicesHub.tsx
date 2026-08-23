import { Helmet } from 'react-helmet-async';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Users, Landmark, Utensils, Megaphone, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';

interface ServicesHubProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServicesHub: React.FC<ServicesHubProps> = ({ onOpenConsultation }) => {
  const servicePanels = [
    {
      num: '01',
      title: 'HR Services',
      subtitle: 'Workforce Acquisition, Payroll Infrastructure & Labor Law Compliance',
      description:
        'Recruitment & staffing, timely payroll disbursement, structured employee development, statutory compliance, and healthy workplace relations.',
      link: '/services/hr',
      imageUrl: '/images/hr_hero.jpg',
      theme: 'cream',
      bgClass: 'bg-[#FAF6EE] text-[#1A1A16]',
      gradientOverlay: 'bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/92 to-[#FAF6EE]/75',
      borderClass: 'border-[#1A1A16]/10',
      icon: Users,
    },
    {
      num: '02',
      title: 'Insurance & Loans Services',
      subtitle: 'Asset Protection, Liability Underwriting & Capital Lending Desk',
      description:
        'Comprehensive risk assessment, customized policy procurement, claims arbitration, and fast approvals on business, personal, and mortgage financing.',
      link: '/services/insurance-loans',
      imageUrl: '/images/insurance_hero.jpg',
      theme: 'charcoal',
      bgClass: 'bg-[#1A1A16] text-[#F5F0E6]',
      gradientOverlay: 'bg-gradient-to-r from-[#1A1A16] via-[#1A1A16]/92 to-[#1A1A16]/75',
      borderClass: 'border-white/10',
      icon: Landmark,
    },
    {
      num: '03',
      title: 'Food Compliance Services',
      subtitle: 'FSSAI Licensing, Hygiene Audits & Regulatory Governance',
      description:
        'FSSAI registration & state/central licensing, laboratory analysis protocols, statutory hygiene inspections, and ongoing regulatory compliance.',
      link: '/services/food-compliance',
      imageUrl: '/images/food_hero.jpg',
      theme: 'cream',
      bgClass: 'bg-[#FAF6EE] text-[#1A1A16]',
      gradientOverlay: 'bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/92 to-[#FAF6EE]/75',
      borderClass: 'border-[#1A1A16]/10',
      icon: Utensils,
    },
    {
      num: '04',
      title: 'Digital Marketing Services',
      subtitle: 'Brand Positioning, SEO & Performance Digital Infrastructure',
      description:
        'Targeted performance advertising, enterprise SEO, conversion-focused digital platforms, and strategic brand positioning.',
      link: '/services/digital-marketing',
      imageUrl: '/images/marketing_hero.jpg',
      theme: 'charcoal',
      bgClass: 'bg-[#1A1A16] text-[#F5F0E6]',
      gradientOverlay: 'bg-gradient-to-r from-[#1A1A16] via-[#1A1A16]/92 to-[#1A1A16]/75',
      borderClass: 'border-white/10',
      icon: Megaphone,
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Our Services | HR, Insurance & Licensing Advisory</title>
        <meta name="description" content="Explore Trisecure Solutions' full range of services: HR, insurance & loans, food compliance, and digital marketing under one roof." />
        <meta property="og:title" content="Our Services | HR, Insurance & Licensing Advisory" />
        <meta property="og:description" content="Explore Trisecure Solutions' full range of services: HR, insurance & loans, food compliance, and digital marketing under one roof." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* 1. MASTHEAD: Editorial Hero Section */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>PRACTICE VERTICALS // CORE ADVISORY</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A16] leading-[1.08]">
                Enterprise Practice Verticals
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light max-w-xl">
                Institutional-grade advisory spanning human capital, asset insurance, loan financing, food regulatory compliance, and performance digital growth under a unified partner desk.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="btn-editorial-primary text-xs"
                >
                  <span>Schedule Discovery Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/licenses"
                  className="btn-editorial-secondary text-xs"
                >
                  <span>Statutory License Matrix</span>
                </Link>
              </div>

              {/* Bottom Quick Metrics Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1A1A16]/10 max-w-lg">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    04
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Core Practices
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C8B6F] block">
                    100%
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Integrated Desk
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    Pan-India
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Operational Scope
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Executive Practice Overview Bento Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/15 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A16]/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Single-Window Advantage</span>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold">
                    ZERO VENDOR FRICTION
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#1A1A16] leading-snug font-normal">
                  "Consolidate four critical business departments under senior corporate leadership to accelerate operational efficiency."
                </p>

                {/* 4 Practice Area Micro-Tiles */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">HR & Workforce Architecture</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Hiring, payroll, statutory registers & dispute handling</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#7C8B6F] text-white flex items-center justify-center shrink-0">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Insurance & Capital Lending</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Asset protection, corporate group cover & credit facilities</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#C9AF6B] text-[#1A1A16] flex items-center justify-center shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Food & Environmental Compliance</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">FSSAI Central/State, Health Trade & DPCC clearances</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Digital Marketing & Brand Authority</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">High-converting web platforms, targeted ads & organic SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR VERTICAL PANELS: Asymmetric Editorial Cards */}
      <section className="py-24 sm:py-32 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container space-y-12">
          {servicePanels.map((panel) => {
            const Icon = panel.icon;
            return (
              <Link
                key={panel.num}
                to={panel.link}
                className={`block relative rounded-3xl overflow-hidden border ${panel.borderClass} shadow-xl hover:shadow-2xl transition-all duration-500 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                  {/* Left Column: Narrative Content */}
                  <div className={`lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10 ${panel.bgClass}`}>
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            panel.theme === 'cream' ? 'bg-[#1A1A16] text-white' : 'bg-[#C9AF6B] text-[#1A1A16]'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs tracking-widest font-semibold uppercase text-[#7C8B6F]">
                            // Practice 0{panel.num}
                          </span>
                        </div>
                        <span className="font-mono text-xs opacity-50">EXPLORE VERTICAL</span>
                      </div>

                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                        {panel.title}
                      </h2>

                      <p className="font-serif text-lg sm:text-xl font-normal opacity-90 mb-6 leading-snug">
                        {panel.subtitle}
                      </p>

                      <p className="font-sans text-sm sm:text-base opacity-75 leading-relaxed font-light max-w-xl">
                        {panel.description}
                      </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-current/10 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                        Inspect Detailed Scope & Case Studies
                      </span>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-current/10 group-hover:bg-current group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Imagery with Editorial Framing */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                    <img
                      src={panel.imageUrl}
                      alt={panel.title}
                      className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. REDESIGNED CTA STRIP: High-Converting Executive Bento Box */}
      <EditorialCtaBanner
        tagline="// COMPLETE PRACTICE ADVISORY"
        title="Ready to consolidate your business advisory under one desk?"
        description="Connect with our practice directors to streamline your statutory compliance, talent operations, insurance coverage, and digital customer acquisition."
        primaryBtnText="Schedule Advisory Call"
        secondaryBtnText="Inspect License Matrix"
        secondaryBtnLink="/licenses"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
