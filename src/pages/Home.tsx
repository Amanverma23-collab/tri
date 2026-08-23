import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Award, FileCheck, Store, Building2, Factory } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { EditorialHero } from '../components/EditorialHero';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';
import { PageTransition } from '../components/PageTransition';
import { InfiniteSlider } from '../components/core/infinite-slider';

interface HomeProps {
  onOpenConsultation: (service?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const serviceCards = [
    {
      number: '01',
      title: 'HR Services',
      subtitle: 'Workforce & Talent Strategy',
      description:
        'Recruitment, staffing, precision payroll management, employee relations, and labor compliance to empower your team.',
      link: '/services/hr',
      tag: 'Human Capital',
      theme: 'cream' as const,
    },
    {
      number: '02',
      title: 'Insurance & Loans',
      subtitle: 'Capital & Risk Advisory',
      description:
        'Comprehensive business insurance, commercial asset coverage, and tailored financing advisory solutions to secure and scale your enterprise.',
      link: '/services/insurance-loans',
      tag: 'Financial Security',
      theme: 'charcoal' as const,
    },
    {
      number: '03',
      title: 'Food Compliance',
      subtitle: 'Regulatory Assurance',
      description:
        'FSSAI licensing, hygiene audits, compliance filing, and quality certifications to guarantee statutory standards.',
      link: '/services/food-compliance',
      tag: 'Statutory Safety',
      theme: 'olive' as const,
    },
    {
      number: '04',
      title: 'Digital Marketing',
      subtitle: 'Growth & Brand Acceleration',
      description:
        'Website development, targeted marketing campaigns, SEO strategy, branding, and content creation to elevate your reach.',
      link: '/services/digital-marketing',
      tag: 'Brand Scale',
      theme: 'mustard' as const,
    },
  ];

  const licenseHighlights = [
    {
      code: 'FSSAI',
      title: 'FSSAI Food License',
      category: 'Basic, State & Central Permits',
      icon: FileCheck,
      desc: 'Mandatory food safety licensing & annual filings for food businesses.',
    },
    {
      code: 'SHOP ACT',
      title: 'Shop & Establishment',
      category: 'State Labor Department',
      icon: Store,
      desc: 'Commercial establishment registration & labor regulation clearances.',
    },
    {
      code: 'MCD',
      title: 'MCD Health Trade',
      category: 'Municipal Corporation',
      icon: Building2,
      desc: 'Municipal health trade licenses and local civic body permits.',
    },
    {
      code: 'DPCC',
      title: 'DPCC Pollution NOC',
      category: 'Pollution Control Committee',
      icon: Factory,
      desc: 'Consent to Establish (CTE) & Consent to Operate (CTO) clearances.',
    },
  ];

  const advantages = [
    {
      code: '01 // DOMAIN DEPTH',
      title: 'Expertise & Domain Mastery',
      desc: 'Decades of combined experience in HR, Insurance, Food Compliance and Digital Marketing services. Our seasoned specialists anticipate regulatory shifts before they impact your operations.',
      theme: 'charcoal',
      span: 'md:col-span-7',
      icon: Award,
    },
    {
      code: '02 // ALL-IN-ONE',
      title: 'Comprehensive Services',
      desc: 'A one-stop solution for all your business needs. Eliminate fragmented vendor management with an integrated partner.',
      theme: 'cream',
      span: 'md:col-span-5',
      icon: ShieldCheck,
    },
    {
      code: '03 // TAILORED STRATEGY',
      title: 'Client-Centric Approach',
      desc: 'Personalized service tailored to your unique requirements. We mold our solutions around your enterprise DNA.',
      theme: 'olive',
      span: 'md:col-span-5',
      icon: ShieldCheck,
    },
    {
      code: '04 // PROVEN TRUST',
      title: 'Reliability & Execution',
      desc: 'Trusted by businesses across various industries for our integrity and excellence. Zero missed renewal deadlines and verified compliance audits.',
      theme: 'alabaster',
      span: 'md:col-span-7',
      icon: CheckCircle2,
    },
  ];

  const getAdvantageStyle = (theme: string) => {
    switch (theme) {
      case 'charcoal':
        return 'bg-[#1A1A16] text-[#F5F0E6] border-white/10 shadow-2xl';
      case 'olive':
        return 'bg-[#7C8B6F] text-[#F5F0E6] border-[#637157] shadow-xl';
      case 'cream':
        return 'bg-[#EFE9DC] text-[#1A1A16] border-[#1A1A16]/10 shadow-xl';
      default:
        return 'bg-[#FAF6EE] text-[#1A1A16] border-[#1A1A16]/15 shadow-2xl';
    }
  };

  const getBadgeStyle = (theme: string) => {
    switch (theme) {
      case 'charcoal':
        return 'text-[#C9AF6B]';
      case 'olive':
        return 'text-[#F5F0E6]/90';
      case 'cream':
        return 'text-[#7C8B6F]';
      default:
        return 'text-[#1A1A16]/75';
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Trisecure Solutions | HR, Insurance & Licensing Hub</title>
        <meta name="description" content="Single-window advisory for HR & payroll, PF/ESIC compliance, FSSAI licensing, insurance, business loans, and digital marketing." />
        <meta property="og:title" content="Trisecure Solutions | HR, Insurance & Licensing Hub" />
        <meta property="og:description" content="Single-window advisory for HR & payroll, PF/ESIC compliance, FSSAI licensing, insurance, business loans, and digital marketing." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* 1. HERO SECTION: Editorial 2-Column Hero */}
      <EditorialHero onOpenConsultation={() => onOpenConsultation()} />

      {/* 2. WHAT WE DO: Horizontal Slidebar on Mobile & GSAP on Desktop */}
      <HorizontalScrollSection
        id="services-preview"
        marker="02"
        heading="What We Do"
        subheading="Scroll to navigate through our four core corporate verticals designed to safeguard and scale your enterprise."
        cards={serviceCards}
      />

      {/* 3. REDESIGNED LICENSES SHOWCASE STRIP: Modern Bento Grid on Mobile & Desktop */}
      <section className="py-14 sm:py-24 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[10px] sm:text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B6F] animate-pulse" />
                <span>REGULATORY DESK // PAN-INDIA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight leading-tight">
                Government & Trade Licenses Handled
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#7A7A70] leading-relaxed font-light">
                From FSSAI food licensing to MCD trade permits, DPCC pollution control clearances, and Shop & Establishment registrations across Delhi NCR and pan-India.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/licenses"
                  className="btn-editorial-primary text-xs w-full sm:w-auto justify-center"
                  data-cursor="Directory"
                >
                  <span>Explore License Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="btn-editorial-secondary text-xs w-full sm:w-auto justify-center"
                  data-cursor="Pricing"
                >
                  <span>View Fee Schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: 4-License Bento Grid Showcase */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                {licenseHighlights.map((lic, idx) => {
                  const LicIcon = lic.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <span className="font-mono text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#1A1A16] text-[#F5F0E6] uppercase tracking-wider">
                            {lic.code}
                          </span>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#1A1A16]/5 flex items-center justify-center text-[#7C8B6F] group-hover:bg-[#7C8B6F] group-hover:text-white transition-colors">
                            <LicIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                        </div>

                        <h3 className="font-serif text-sm sm:text-lg lg:text-xl font-bold text-[#1A1A16] leading-snug mb-0.5 sm:mb-1">
                          {lic.title}
                        </h3>

                        <p className="font-mono text-[8px] sm:text-[10px] text-[#7C8B6F] uppercase tracking-wider mb-1.5 sm:mb-2 font-semibold line-clamp-1">
                          {lic.category}
                        </p>

                        <p className="font-sans text-[10px] sm:text-xs text-[#7A7A70] leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                          {lic.desc}
                        </p>
                      </div>

                      <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#1A1A16]/10 flex items-center justify-between text-[9px] sm:text-xs font-mono text-[#1A1A16] group-hover:text-[#7C8B6F] transition-colors font-semibold">
                        <span>End-to-End</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US: InfiniteSlider on Mobile & Asymmetric Bento Grid on Desktop */}
      <section className="py-14 sm:py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-3 sm:gap-4">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase mb-1.5 sm:mb-2 block font-semibold">
                // Institutional Advantage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Why Choose Trisecure
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-base text-[#7A7A70] max-w-md font-light">
              We combine deep sector knowledge with institutional rigor to provide holistic business advisory.
            </p>
          </div>

          {/* Mobile Continuous InfiniteSlider */}
          <div className="md:hidden w-full py-2 overflow-hidden">
            <InfiniteSlider gap={16} speed={25} speedOnHover={0}>
              {advantages.map((adv, idx) => {
                const AdvIcon = adv.icon;
                return (
                  <div
                    key={idx}
                    className={`w-[80vw] max-w-[310px] shrink-0 rounded-3xl p-6 border flex flex-col justify-between min-h-[280px] ${getAdvantageStyle(
                      adv.theme
                    )}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-[11px] tracking-widest font-semibold uppercase ${getBadgeStyle(adv.theme)}`}>
                        {adv.code}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        <AdvIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-start">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-2">
                        {adv.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm leading-relaxed font-light opacity-85 line-clamp-4">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </InfiniteSlider>
          </div>

          {/* Desktop Asymmetric Bento Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8 items-stretch">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className={`${adv.span} ${getAdvantageStyle(
                    adv.theme
                  )} rounded-3xl p-8 sm:p-10 border shadow-xl flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-1`}
                >
                  <div className="h-10 flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs tracking-widest font-semibold uppercase ${getBadgeStyle(adv.theme)}`}>
                      {adv.code}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <AdvIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                      {adv.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed font-light opacity-85">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. REDESIGNED CTA STRIP */}
      <EditorialCtaBanner
        tagline="// READY TO PARTNER?"
        title="Ready to simplify and scale your enterprise operations?"
        description="Connect with our senior advisory desk today to streamline your statutory licenses, workforce compliance, risk protection, and digital growth under a single cohesive roof."
        primaryBtnText="Schedule Discovery Call"
        secondaryBtnText="Explore Practice Verticals"
        secondaryBtnLink="/services"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
