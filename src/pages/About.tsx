import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  TrendingUp,
  FileCheck,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Lock,
  Briefcase,
  Layers,
  Scale,
} from 'lucide-react';
import { EditorialCtaBanner } from '../components/EditorialCtaBanner';
import { PageTransition } from '../components/PageTransition';

interface AboutProps {
  onOpenConsultation: (service?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const leadershipPillars = [
    {
      title: 'Human Capital & Workforce Strategy',
      desc: 'Expert guidance on full-stack talent infrastructure, zero-error payroll management, and New Labour Code statutory compliance.',
      icon: Users,
    },
    {
      title: 'Regulatory & Statutory Clearances',
      desc: 'Single-window liaison with central and state government authorities including FSSAI, DPCC, MCD, and State Labor Departments.',
      icon: FileCheck,
    },
    {
      title: 'Corporate Risk & Capital Advisory',
      desc: 'Strategic corporate insurance underwriting, commercial risk audits, working capital loan advisory, and brand scaling.',
      icon: ShieldCheck,
    },
  ];

  const values = [
    {
      code: '01',
      title: 'Zero-Tolerance Compliance',
      description:
        'We adhere to rigorous legal frameworks ensuring our clients maintain 100% audit-ready statutory status across all operations.',
    },
    {
      code: '02',
      title: 'Single-Window Integration',
      description:
        'Eliminating fragmented vendor management by unifying HR, insurance, statutory licensing, and digital growth under one accountable advisory.',
    },
    {
      code: '03',
      title: 'Executive Speed & Execution',
      description:
        'Fast-track regulatory clearances, streamlined documentation, and dedicated partner access with transparent progress tracking.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>About Trisecure Solutions | HR & Business Advisory</title>
        <meta
          name="description"
          content="Learn how Trisecure Solutions delivers end-to-end HR, insurance, licensing, and digital marketing support for growing businesses."
        />
        <meta property="og:title" content="About Trisecure Solutions | HR & Business Advisory" />
        <meta
          property="og:description"
          content="Learn how Trisecure Solutions delivers end-to-end HR, insurance, licensing, and digital marketing support for growing businesses."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* =========================================================================
          1. MASTHEAD: Editorial 2-Column Hero Layout
          ========================================================================= */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-20 bg-[#F5F0E6] overflow-hidden border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Action Buttons */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[10px] sm:text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>WHO WE ARE // ABOUT TRISECURE</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#1A1A16] leading-tight sm:leading-[1.08]">
                Empowering modern businesses with clarity, compliance & strategic scale.
              </h1>

              <p className="font-sans text-xs sm:text-base lg:text-lg text-[#7A7A70] leading-relaxed font-light max-w-xl">
                At <strong className="font-semibold text-[#1A1A16]">Trisecure Solutions</strong>, we eliminate corporate operational friction by delivering institutional HR strategy, comprehensive insurance & loan advisory, statutory food compliance, and digital growth acceleration under a unified partner desk.
              </p>

              {/* Action Buttons: Responsive Full-Width on Mobile, Inline on Desktop */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#7C8B6F] transition-colors shadow-md cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-transparent border border-[#1A1A16]/20 text-[#1A1A16] font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1A1A16]/5 transition-colors"
                >
                  <span>Explore Practice Verticals</span>
                </Link>
              </div>

              {/* Bottom Quick Metrics Strip: Compact & Balanced on Mobile */}
              <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-[#1A1A16]/10 max-w-lg">
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#1A1A16] block">
                    12+
                  </span>
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Years Experience
                  </p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#7C8B6F] block">
                    100%
                  </span>
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Audit Readiness
                  </p>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-3xl font-bold text-[#1A1A16] block">
                    Pan-India
                  </span>
                  <p className="font-mono text-[8px] sm:text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Central & State
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Executive Mandate Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/15 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A16]/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Corporate Mandate</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#7A7A70]">PAN-INDIA ADVISORY</span>
                </div>

                <p className="font-serif text-lg text-[#1A1A16] leading-snug">
                  "Our mission is simple: To provide enterprises with unyielding compliance safety, agile talent infrastructure, and financial resilience so they can scale without regulatory roadblocks."
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Workforce Strategy & HR</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">End-to-end payroll, EPFO/ESIC compliance & labor code governance</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#C9AF6B]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Risk Shield & Capital Debt</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Corporate insurance underwriting, liability coverage & credit advisory</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#7C8B6F] text-[#F5F0E6] flex items-center justify-center shrink-0">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Food & Environmental Clearances</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">FSSAI State/Central, MCD Health Trade & DPCC statutory permits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. LEADERSHIP SPOTLIGHT: ANURAG SHARMA (Clean & Essential Details Only)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#1A1A16] text-[#F5F0E6] relative overflow-hidden bg-charcoal-textured border-b border-white/10">
        <div className="editorial-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9AF6B]/15 text-[#C9AF6B] font-mono text-xs uppercase tracking-widest mb-3 border border-[#C9AF6B]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Leadership & Vision
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/70 max-w-md font-light">
              12+ years of specialized corporate expertise across statutory governance, human capital management, and enterprise advisory.
            </p>
          </div>

          {/* Founder Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Portrait & Direct Contact Desk */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group bg-[#22221D]">
                <img
                  src="/images/anurag_sharma.jpg"
                  alt="Anurag Sharma - Founder & Managing Director"
                  className="w-full aspect-[4/5] object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A16] via-[#1A1A16]/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block mb-1 font-semibold">
                    Founder & Managing Director
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Anurag Sharma
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/80 mt-1 font-light">
                    Human Capital Strategist & Corporate Growth Advisor
                  </p>
                </div>
              </div>

              {/* Direct Executive Desk Contact Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                <div className="text-white/60 uppercase tracking-widest text-[11px] font-semibold border-b border-white/10 pb-2">
                  Direct Executive Desk
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7C8B6F]" />
                    <span>Mobile (Direct)</span>
                  </span>
                  <a
                    href="tel:+918585999922"
                    className="text-[#C9AF6B] hover:underline font-mono font-semibold tracking-wider"
                  >
                    +91 8585999922
                  </a>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7C8B6F]" />
                    <span>Alternate Line</span>
                  </span>
                  <a
                    href="tel:+919716965062"
                    className="text-[#C9AF6B] hover:underline font-mono font-semibold tracking-wider"
                  >
                    +91 9716965062
                  </a>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7C8B6F]" />
                    <span>Email</span>
                  </span>
                  <a
                    href="mailto:anuragsharma0120@gmail.com"
                    className="text-[#C9AF6B] hover:underline truncate max-w-[200px]"
                  >
                    anuragsharma0120@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Crisp Executive Narrative & 3 Core Leadership Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  A Vision Rooted in Corporate Governance & Operational Excellence
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  With over a decade of specialized leadership in Human Resource Administration, Statutory Regulatory Clearances, and Enterprise Operations, Anurag Sharma founded Trisecure Solutions to deliver single-window corporate advisory for modern enterprises across India.
                </p>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  Under his direction, Trisecure Solutions bridges the gap between regulatory compliance, workforce scaling, and commercial risk security, enabling businesses to scale seamlessly with 100% audit readiness.
                </p>
              </div>

              {/* 3 Core Leadership Pillars */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9AF6B] font-semibold">
                  // Core Advisory Focus
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {leadershipPillars.map((pillar, idx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C8B6F]/50 transition-colors flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/10 text-[#C9AF6B] flex items-center justify-center shrink-0">
                          <PillarIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-serif text-base font-bold text-white">
                            {pillar.title}
                          </h5>
                          <p className="font-sans text-xs sm:text-sm text-white/70 mt-1 font-light leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct Booking CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation('Executive Advisory')}
                  className="btn-editorial-primary text-xs"
                >
                  <span>Book Executive Consultation with Founder</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE VALUES & OPERATIONAL RIGOR
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest font-semibold block">
              // Institutional Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
              Principles that govern our practice.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] font-light">
              Every client engagement is underpinned by stringent governance, precision execution, and absolute confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all hover:shadow-lg space-y-4"
              >
                <span className="font-mono text-xs text-[#7C8B6F] font-bold block">
                  // {v.code}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A16]">{v.title}</h3>
                <p className="font-sans text-sm text-[#7A7A70] font-light leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persistent Editorial CTA Banner */}
      <EditorialCtaBanner
        title="Ready to Partner with Trisecure Solutions?"
        description="Connect directly with our senior advisory desk for bespoke human capital, statutory licensing, or corporate insurance proposals."
        primaryBtnText="Schedule Executive Consultation"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
