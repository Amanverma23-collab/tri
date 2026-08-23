import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
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
      subtitle: 'Risk Management & Capital Growth',
      description:
        'Customized corporate and personal insurance coverage paired with competitive business, mortgage, and auto loans.',
      link: '/services/insurance-loans',
      tag: 'Finance & Risk',
      theme: 'charcoal' as const,
    },
    {
      number: '03',
      title: 'Food Compliance',
      subtitle: 'Licensing & Quality Assurance',
      description:
        'FSSAI registrations, MCD health trade permits, DPCC environmental clearances, and audit readiness for F&B businesses.',
      link: '/services/food-compliance',
      tag: 'Regulatory Desk',
      theme: 'olive' as const,
    },
    {
      number: '04',
      title: 'Digital Marketing',
      subtitle: 'Branding & Growth Acceleration',
      description:
        'Full-funnel digital dominance: Custom high-conversion websites, SEO authority, targeted advertising, and multimedia production.',
      link: '/services/digital-marketing',
      tag: 'Growth & Creative',
      theme: 'mustard' as const,
    },
  ];

  return (
    <PageTransition>
      {/* 1. HERO: Fast-Loading Instant Editorial Hero */}
      <EditorialHero onOpenConsultation={onOpenConsultation} />

      {/* 2. INTRO STRIP: Section 01 - Asymmetric Editorial Layout */}
      <section className="relative py-28 sm:py-36 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Col: Giant Number Marker & Eyebrow */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-4">
                  <span className="w-6 h-px bg-[#7C8B6F]" />
                  <span>Section 01 // Overview</span>
                </div>
                <h2 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-[#1A1A16]">
                  About Us
                </h2>
              </div>
              <div className="mt-12 hidden lg:block">
                <span className="editorial-numeral-giant text-[#1A1A16]/15 font-light">
                  01
                </span>
              </div>
            </div>

            {/* Right Col: Editorial Narrative & CTA */}
            <div className="lg:col-span-8 space-y-8">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A16] leading-snug font-normal">
                At <strong className="font-semibold text-[#7C8B6F]">Trisecure Solution</strong>, we specialize in providing comprehensive insurance, digital marketing solutions, and loan solutions tailored to meet the unique needs of individuals and businesses.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light max-w-2xl">
                Our expertise ensures that our clients receive the best advice and support, helping them make informed decisions for their financial well-being. From startup licensing to enterprise workforce management, we bridge operational hurdles with clarity and speed.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  to="/about"
                  className="btn-editorial-primary"
                  data-cursor="Read"
                >
                  <span>More about us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenConsultation()}
                  className="btn-editorial-secondary"
                  data-cursor="Consult"
                >
                  <span>Schedule Advisory Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW: Section 02 - Horizontal Pinned Scroll */}
      <HorizontalScrollSection
        id="services-preview"
        marker="02"
        heading="What We Do"
        subheading="Scroll to navigate through our four core corporate verticals designed to safeguard and scale your enterprise."
        cards={serviceCards}
      />

      {/* 4. WHY CHOOSE US: Section 03 - Asymmetric 4-Card Grid with TextEffect */}
      <section className="relative py-28 sm:py-36 bg-[#FAF6EE] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-3">
                <span className="w-8 h-px bg-[#7C8B6F]" />
                <span>Section 03 // Credibility</span>
              </div>
              <h2 className="font-serif text-display-sub font-bold text-[#1A1A16] tracking-tight">
                Why Choose Us?
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md">
              A bespoke partner combining institutional rigor with personalized, hands-on execution.
            </p>
          </div>

          {/* Asymmetric 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Card 1: Large Span (7 cols) - Charcoal Theme */}
            <div className="md:col-span-7 bg-[#1A1A16] text-[#F5F0E6] rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col justify-between min-h-[340px] group transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C9AF6B] tracking-widest font-semibold">
                  01 // DOMAIN MASTERY
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

      {/* 5. CTA STRIP: Full-Bleed Dark Charcoal Contrast Break */}
      <section className="py-28 sm:py-36 bg-[#1A1A16] text-[#F5F0E6] relative overflow-hidden bg-charcoal-textured">
        <div className="editorial-container relative z-10 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase mb-4 block">
            // Ready To Partner?
          </span>
          <h2 className="font-serif text-display-sub font-bold text-white tracking-tight mb-8">
            Ready to simplify your business?
          </h2>
          <p className="font-sans text-base sm:text-xl text-[#F5F0E6]/80 max-w-2xl mx-auto mb-10 font-light">
            Connect with our advisory consultants today to streamline your licenses, finance, HR, and marketing under a single cohesive roof.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-editorial-light"
              data-cursor="Contact"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onOpenConsultation()}
              className="btn-editorial-secondary border-white/30 text-[#F5F0E6] hover:bg-white/10"
              data-cursor="Consult"
            >
              <span>Book Discovery Session</span>
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
