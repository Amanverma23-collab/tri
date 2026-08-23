import { Helmet } from 'react-helmet-async';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles, Award } from 'lucide-react';
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
      subtitle: 'Growth & Brand Authority',
      description:
        'Social media strategy, SEO optimization, high-converting digital platforms, and brand development to drive real revenue.',
      link: '/services/digital-marketing',
      tag: 'Digital Scale',
      theme: 'mustard' as const,
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
      {/* 1. HERO SECTION: 2-Column High-Impact Split Hero matching User Mockup */}
      <EditorialHero onOpenConsultation={onOpenConsultation} />

      {/* 2. SERVICES SECTION: Horizontal Scroll with Enhanced Scrub Distance & Smooth Transitions */}
      <HorizontalScrollSection
        id="services-preview"
        marker="02"
        heading="What We Do"
        subheading="Scroll to navigate through our four core corporate verticals designed to safeguard and scale your enterprise."
        cards={serviceCards}
      />

      {/* 3. LICENSES SHOWCASE STRIP: Editorial Callout */}
      <section className="py-24 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase mb-3 block font-semibold">
                // Regulatory Desk
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] leading-tight">
                Government & Trade Licenses Handled
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed mb-8 font-light">
                From FSSAI food licensing to MCD trade permits, DPCC pollution control clearances, and Shop & Establishment registrations across Delhi NCR and pan-India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/licenses"
                  className="btn-editorial-primary"
                  data-cursor="Directory"
                >
                  <span>Explore License Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="btn-editorial-secondary"
                  data-cursor="Pricing"
                >
                  <span>View Fee Schedule</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US: Asymmetric Editorial Bento Grid with Perfect Baseline Alignment */}
      <section className="py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase mb-3 block font-semibold">
                // Institutional Advantage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Why Choose TriSecure
              </h2>
            </div>
            <p className="font-sans text-base text-[#7A7A70] max-w-md font-light">
              We combine deep sector knowledge with institutional rigor to provide holistic business advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Card 1: Large Span (7 cols) - Dark Charcoal Theme */}
            <div className="md:col-span-7 bg-[#1A1A16] text-[#F5F0E6] rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="h-10 flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C9AF6B] tracking-widest font-semibold uppercase">
                  01 // DOMAIN DEPTH
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#C9AF6B]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <div className="min-h-[3.6rem] sm:min-h-[4.2rem] flex items-start mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight break-normal">
                    Expertise & Domain Mastery
                  </h3>
                </div>
                <p className="font-sans text-base sm:text-lg text-[#F5F0E6]/85 leading-relaxed font-light">
                  Decades of combined experience in HR, Insurance, Food Compliance and Digital Marketing services. Our seasoned specialists anticipate regulatory shifts before they impact your operations.
                </p>
              </div>
            </div>

            {/* Card 2: Small Span (5 cols) - Cream Theme */}
            <div className="md:col-span-5 bg-[#EFE9DC] text-[#1A1A16] rounded-3xl p-8 sm:p-10 border border-[#1A1A16]/10 shadow-xl flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="h-10 flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#7C8B6F] tracking-widest font-semibold uppercase">
                  02 // ALL-IN-ONE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#1A1A16]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#7C8B6F]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <div className="min-h-[3.6rem] sm:min-h-[4.2rem] flex items-start mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A16] leading-tight break-normal">
                    Comprehensive Services
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#7A7A70] leading-relaxed font-light">
                  A one-stop solution for all your business needs. Eliminate fragmented vendor management with an integrated partner.
                </p>
              </div>
            </div>

            {/* Card 3: Small Span (5 cols) - Olive Green Theme */}
            <div className="md:col-span-5 bg-[#7C8B6F] text-[#F5F0E6] rounded-3xl p-8 sm:p-10 shadow-xl border border-[#637157] flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="h-10 flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#F5F0E6]/90 tracking-widest font-semibold uppercase">
                  03 // TAILORED STRATEGY
                </span>
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#F5F0E6]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <div className="min-h-[3.6rem] sm:min-h-[4.2rem] flex items-start mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight break-normal">
                    Client-Centric Approach
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#F5F0E6]/90 leading-relaxed font-light">
                  Personalized service tailored to your unique requirements. We mold our solutions around your enterprise DNA.
                </p>
              </div>
            </div>

            {/* Card 4: Large Span (7 cols) - Alabaster Theme */}
            <div className="md:col-span-7 bg-[#FAF6EE] text-[#1A1A16] rounded-3xl p-8 sm:p-10 border border-[#1A1A16]/15 shadow-2xl flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="h-10 flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#1A1A16]/75 tracking-widest font-semibold uppercase">
                  04 // PROVEN TRUST
                </span>
                <div className="w-10 h-10 rounded-full bg-[#7C8B6F]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#7C8B6F]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <div className="min-h-[3.6rem] sm:min-h-[4.2rem] flex items-start mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A16] leading-tight break-normal">
                    Reliability & Execution
                  </h3>
                </div>
                <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light">
                  Trusted by businesses across various industries for our integrity and excellence. Zero missed renewal deadlines and verified compliance audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REDESIGNED CTA STRIP: High-Converting Executive Bento Box */}
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
