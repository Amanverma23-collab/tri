import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';
import { PageTransition } from '../components/PageTransition';
import { TextEffect } from '../components/core/text-effect';

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
      theme: 'cream' as const,
    },
    {
      number: '04',
      title: 'Digital Marketing',
      subtitle: 'Growth & Brand Authority',
      description:
        'Social media strategy, SEO optimization, high-converting digital platforms, and brand development to drive real revenue.',
      link: '/services/digital-marketing',
      tag: 'Digital Scale',
      theme: 'charcoal' as const,
    },
  ];

  return (
    <PageTransition>
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
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase mb-3 block">
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

      {/* 4. WHY CHOOSE US: Asymmetric Editorial Bento Grid with Scroll Reveal */}
      <section className="py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase mb-3 block">
                // Institutional Advantage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Why Choose TriSecure
              </h2>
            </div>
            <p className="font-sans text-base text-[#7A7A70] max-w-md">
              We combine deep sector knowledge with institutional rigor to provide holistic business advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Card 1: Large Span (7 cols) - Dark Charcoal Theme */}
            <div className="md:col-span-7 bg-[#1A1A16] text-[#F5F0E6] rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C9AF6B] tracking-widest font-semibold">
                  01 // DOMAIN DEPTH
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#C9AF6B]" />
                </div>
              </div>
              <div>
                <TextEffect
                  per="char"
                  delay={0.1}
                  className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.03 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.25 } },
                    },
                  }}
                >
                  Expertise
                </TextEffect>
                <TextEffect
                  per="word"
                  delay={0.25}
                  preset="fade"
                  className="font-sans text-base sm:text-lg text-[#F5F0E6]/85 leading-relaxed font-light block"
                >
                  Decades of combined experience in HR, Insurance, Food Compliance and Digital Marketing services. Our seasoned specialists anticipate regulatory shifts before they impact your operations.
                </TextEffect>
              </div>
            </div>

            {/* Card 2: Small Span (5 cols) - Cream Theme */}
            <div className="md:col-span-5 bg-[#EFE9DC] text-[#1A1A16] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/10 shadow-xl flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#7C8B6F] tracking-widest font-semibold">
                  02 // ALL-IN-ONE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#1A1A16]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#7C8B6F]" />
                </div>
              </div>
              <div>
                <TextEffect
                  per="char"
                  delay={0.15}
                  className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-[#1A1A16]"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.03 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.25 } },
                    },
                  }}
                >
                  Comprehensive Services
                </TextEffect>
                <TextEffect
                  per="word"
                  delay={0.3}
                  preset="fade"
                  className="font-sans text-sm sm:text-base text-[#7A7A70] leading-relaxed font-light block"
                >
                  A one-stop solution for all your business needs. Eliminate fragmented vendor management with an integrated partner.
                </TextEffect>
              </div>
            </div>

            {/* Card 3: Small Span (5 cols) - Olive Green Theme */}
            <div className="md:col-span-5 bg-[#7C8B6F] text-[#F5F0E6] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#637157] flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#F5F0E6]/90 tracking-widest font-semibold">
                  03 // TAILORED STRATEGY
                </span>
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#F5F0E6]" />
                </div>
              </div>
              <div>
                <TextEffect
                  per="char"
                  delay={0.2}
                  className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.03 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.25 } },
                    },
                  }}
                >
                  Client-Centric Approach
                </TextEffect>
                <TextEffect
                  per="word"
                  delay={0.35}
                  preset="fade"
                  className="font-sans text-sm sm:text-base text-[#F5F0E6]/90 leading-relaxed font-light block"
                >
                  Personalized service tailored to your unique requirements. We mold our solutions around your enterprise DNA.
                </TextEffect>
              </div>
            </div>

            {/* Card 4: Large Span (7 cols) - Alabaster Theme */}
            <div className="md:col-span-7 bg-[#FAF6EE] text-[#1A1A16] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/15 shadow-2xl flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#1A1A16]/75 tracking-widest font-semibold">
                  04 // PROVEN TRUST
                </span>
                <div className="w-10 h-10 rounded-full bg-[#7C8B6F]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#7C8B6F]" />
                </div>
              </div>
              <div>
                <TextEffect
                  per="char"
                  delay={0.25}
                  className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-[#1A1A16]"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.03 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.25 } },
                    },
                  }}
                >
                  Reliability
                </TextEffect>
                <TextEffect
                  per="word"
                  delay={0.4}
                  preset="fade"
                  className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light block"
                >
                  Trusted by businesses across various industries for our integrity and excellence. Zero missed renewal deadlines and verified compliance audits.
                </TextEffect>
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
        secondaryBtnText="Direct Line: +91 8585999922"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
