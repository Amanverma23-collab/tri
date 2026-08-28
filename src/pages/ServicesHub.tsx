import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Landmark, Utensils, Megaphone, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';
import { ScrollStack } from '../components/ScrollStack';

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
      borderClass: 'border-[#1A1A16]/15',
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
      borderClass: 'border-white/15',
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
      borderClass: 'border-[#1A1A16]/15',
      icon: Utensils,
    },
    {
      num: '04',
      title: 'Digital Marketing Services',
      subtitle: 'Performance Acquisition, SEO Dominance & Cinema-Grade Visual Studio',
      description:
        'High-converting responsive websites, scalable e-commerce portals, ROI-driven performance ad campaigns, and authoritative brand identities.',
      link: '/services/digital-marketing',
      imageUrl: '/images/marketing_hero.jpg',
      theme: 'charcoal',
      bgClass: 'bg-[#1A1A16] text-[#F5F0E6]',
      gradientOverlay: 'bg-gradient-to-r from-[#1A1A16] via-[#1A1A16]/92 to-[#1A1A16]/75',
      borderClass: 'border-white/15',
      icon: Megaphone,
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Corporate Advisory Practices | Trisecure Solutions</title>
        <meta
          name="description"
          content="Explore Trisecure's integrated service verticals: HR & Payroll, Insurance & Loans, Food & Environmental Clearances, and Digital Brand Scaling."
        />
        <meta property="og:title" content="Corporate Advisory Practices | Trisecure Solutions" />
        <meta
          property="og:description"
          content="Explore Trisecure's integrated service verticals: HR & Payroll, Insurance & Loans, Food & Environmental Clearances, and Digital Brand Scaling."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 1. EDITORIAL HEADER SECTION */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#F5F0E6] bg-cream-textured border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-xs uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0072EF]" />
              <span>PRACTICE VERTICALS // 04 PILLARS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A16] leading-[1.08]">
              Comprehensive Enterprise <br />
              <span className="italic font-normal text-[#7C8B6F]">Solutions.</span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-[#7A7A70] leading-relaxed max-w-2xl font-light">
              We operate across four specialized business divisions, providing seamless end-to-end statutory execution, risk underwriting, and commercial scaling under a unified single-window desk.
            </p>

            {/* Quick Practice Pill Index */}
            <div className="pt-4 flex flex-wrap gap-2.5 sm:gap-3 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-full bg-[#1A1A16]/5 border border-[#1A1A16]/10 text-[#1A1A16] font-semibold">
                01. HR & Workforce
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#1A1A16]/5 border border-[#1A1A16]/10 text-[#1A1A16] font-semibold">
                02. Insurance & Loans
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#1A1A16]/5 border border-[#1A1A16]/10 text-[#1A1A16] font-semibold">
                03. Food & DPCC Licensing
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#1A1A16]/5 border border-[#1A1A16]/10 text-[#1A1A16] font-semibold">
                04. Digital Marketing & Media
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCROLL STACK SERVICE PANELS */}
      <section className="py-16 sm:py-28 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#0072EF] uppercase tracking-widest mb-3">
                <span className="w-8 h-px bg-[#0072EF]" />
                <span>Executive Practice Matrix</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Our 04 Core Verticals
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md">
              Scroll down to inspect detailed practice capabilities, certifications, and operational workflows.
            </p>
          </div>

          {/* ScrollStack Component (Cards pin and stack over each other dynamically as you scroll) */}
          <ScrollStack topOffset={110} itemOffset={24}>
            {servicePanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <Link
                  key={panel.num}
                  to={panel.link}
                  className={`block relative rounded-3xl overflow-hidden border ${panel.borderClass} shadow-2xl hover:shadow-3xl transition-all duration-500 group`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] sm:min-h-[400px]">
                    {/* Left Column: Narrative Content */}
                    <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between z-10 ${panel.bgClass}`}>
                      <div>
                        <div className="flex items-center justify-between mb-6 sm:mb-8">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${
                              panel.theme === 'cream' ? 'bg-[#1A1A16] text-white' : 'bg-[#0072EF] text-white'
                            }`}>
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <span className="font-mono text-xs tracking-widest font-semibold uppercase text-[#7C8B6F]">
                              // PRACTICE {panel.num}
                            </span>
                          </div>
                          <span className="font-mono text-xs opacity-50 uppercase tracking-wider hidden xs:inline">
                            EXPLORE VERTICAL
                          </span>
                        </div>

                        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                          {panel.title}
                        </h2>

                        <p className="font-serif text-base sm:text-xl font-normal opacity-90 mb-4 sm:mb-6 leading-snug">
                          {panel.subtitle}
                        </p>

                        <p className="font-sans text-xs sm:text-base opacity-75 leading-relaxed font-light max-w-xl">
                          {panel.description}
                        </p>
                      </div>

                      <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-current/10 flex items-center justify-between">
                        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
                          Inspect Detailed Scope & Case Studies
                        </span>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-current/10 group-hover:bg-current group-hover:text-white transition-colors">
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Imagery with Editorial Framing */}
                    <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden">
                      <img
                        src={panel.imageUrl}
                        alt={panel.title}
                        className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 ${panel.gradientOverlay} hidden lg:block`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </ScrollStack>

        </div>
      </section>

      {/* 3. CTA STRIP: High-Converting Executive Bento Box */}
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
