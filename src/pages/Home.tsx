import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Award, FileCheck, Store, Building2, Factory, Sparkles, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { EditorialHero } from '../components/EditorialHero';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';
import { PageTransition } from '../components/PageTransition';

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {licenseHighlights.map((lic, idx) => {
                  const LicIcon = lic.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1A1A16] text-[#F5F0E6] uppercase tracking-wider">
                            {lic.code}
                          </span>
                          <div className="w-8 h-8 rounded-xl bg-[#1A1A16]/5 flex items-center justify-center text-[#7C8B6F] group-hover:bg-[#7C8B6F] group-hover:text-white transition-colors">
                            <LicIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A16] leading-snug mb-1">
                          {lic.title}
                        </h3>

                        <p className="font-mono text-[10px] text-[#7C8B6F] uppercase tracking-wider mb-2 font-semibold">
                          {lic.category}
                        </p>

                        <p className="font-sans text-xs text-[#7A7A70] leading-relaxed font-light">
                          {lic.desc}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#1A1A16]/10 flex items-center justify-between text-xs font-mono text-[#1A1A16] group-hover:text-[#7C8B6F] transition-colors font-semibold">
                        <span>End-to-End Filing</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US: Asymmetric Editorial Bento Grid */}
      <section className="py-16 sm:py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase mb-2 block font-semibold">
                // Institutional Advantage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Why Choose Trisecure
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md font-light">
              We combine deep sector knowledge with institutional rigor to provide holistic business advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Large Span (7 cols) - Dark Charcoal Theme */}
            <div className="md:col-span-7 bg-[#1A1A16] text-[#F5F0E6] rounded-3xl p-7 sm:p-10 shadow-2xl border border-white/10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group transition-transform duration-500 hover:-translate-y-1">
              <div className="h-10 flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs text-[#C9AF6B] tracking-widest font-semibold uppercase">
                  01 // DOMAIN DEPTH
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#C9AF6B]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 sm:mb-3">
                  Expertise & Domain Mastery
                </h3>
                <p className="font-sans text-sm sm:text-base lg:text-lg text-[#F5F0E6]/85 leading-relaxed font-light">
                  Decades of combined experience in HR, Insurance, Food Compliance and Digital Marketing services. Our seasoned specialists anticipate regulatory shifts before they impact your operations.
                </p>
              </div>
            </div>

            {/* Card 2: Small Span (5 cols) - Cream Theme */}
            <div className="md:col-span-5 bg-[#EFE9DC] text-[#1A1A16] rounded-3xl p-7 sm:p-10 border border-[#1A1A16]/10 shadow-xl flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group transition-transform duration-500 hover:-translate-y-1">
              <div className="h-10 flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs text-[#7C8B6F] tracking-widest font-semibold uppercase">
                  02 // ALL-IN-ONE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#1A1A16]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#7C8B6F]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A16] leading-tight mb-2 sm:mb-3">
                  Comprehensive Services
                </h3>
                <p className="font-sans text-xs sm:text-sm sm:text-base text-[#7A7A70] leading-relaxed font-light">
                  A one-stop solution for all your business needs. Eliminate fragmented vendor management with an integrated partner.
                </p>
              </div>
            </div>

            {/* Card 3: Small Span (5 cols) - Olive Green Theme */}
            <div className="md:col-span-5 bg-[#7C8B6F] text-[#F5F0E6] rounded-3xl p-7 sm:p-10 shadow-xl border border-[#637157] flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group transition-transform duration-500 hover:-translate-y-1">
              <div className="h-10 flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs text-[#F5F0E6]/90 tracking-widest font-semibold uppercase">
                  03 // TAILORED STRATEGY
                </span>
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 sm:mb-3">
                  Client-Centric Approach
                </h3>
                <p className="font-sans text-xs sm:text-sm sm:text-base text-[#F5F0E6]/90 leading-relaxed font-light">
                  Personalized service tailored to your unique requirements. We mold our solutions around your enterprise DNA.
                </p>
              </div>
            </div>

            {/* Card 4: Large Span (7 cols) - Alabaster Theme */}
            <div className="md:col-span-7 bg-[#FAF6EE] text-[#1A1A16] rounded-3xl p-7 sm:p-10 border border-[#1A1A16]/15 shadow-2xl flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group transition-transform duration-500 hover:-translate-y-1">
              <div className="h-10 flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs text-[#1A1A16]/75 tracking-widest font-semibold uppercase">
                  04 // PROVEN TRUST
                </span>
                <div className="w-10 h-10 rounded-full bg-[#7C8B6F]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#7C8B6F]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A16] leading-tight mb-2 sm:mb-3">
                  Reliability & Execution
                </h3>
                <p className="font-sans text-sm sm:text-base lg:text-lg text-[#7A7A70] leading-relaxed font-light">
                  Trusted by businesses across various industries for our integrity and excellence. Zero missed renewal deadlines and verified compliance audits.
                </p>
              </div>
            </div>
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
