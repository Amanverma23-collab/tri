import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ClipboardCheck, Award, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { SplitRevealSection, SplitSubItem } from '../../components/SplitRevealSection';
import { PageTransition } from '../../components/PageTransition';

interface FoodComplianceServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const FoodComplianceServices: React.FC<FoodComplianceServicesProps> = ({
  onOpenConsultation,
}) => {
  const foodSubItems: SplitSubItem[] = [
    {
      title: 'Regulatory Compliance',
      description: 'Ensuring your operations meet all food safety standards and regulations across FSSAI, MCD, and State boards.',
      tag: 'Statutory Safety',
    },
    {
      title: 'Quality Assurance',
      description: 'Implementing stringent quality control measures, HACCP principles, and standard operating procedures to maintain product integrity.',
      tag: 'QA & HACCP',
    },
    {
      title: 'Audits & Inspections',
      description: 'Conducting thorough hygiene audits to identify and rectify compliance issues prior to official government scrutiny.',
      tag: 'Pre-Audit Health',
    },
    {
      title: 'Training & Certification',
      description: 'Educating your team on FoSTaC food safety best practices and mandatory food handler regulatory requirements.',
      tag: 'FoSTaC Training',
    },
    {
      title: 'Documentation & Reporting',
      description: 'Maintaining meticulous records, annual return filings, lab test logs, and pest control registers for complete transparency.',
      tag: 'Audit Logs',
    },
  ];

  const compliancePillars = [
    {
      icon: ShieldCheck,
      title: 'Regulatory Compliance',
      summary: 'Ensuring your operations meet all food safety standards and regulations.',
      details:
        'Complete advisory and liaison for FSSAI Basic, State, and Central licensing, MCD Health Trade permits, and DPCC environmental clearances. We streamline application filing, query replies, and on-site inspection readiness.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      summary: 'Implementing stringent quality control measures to maintain product integrity.',
      details:
        'Custom SOP formulation for commercial kitchens, dark kitchens, food processing units, and retail eateries. We institute rigorous incoming raw material testing protocols and cold chain preservation standards.',
    },
    {
      icon: ClipboardCheck,
      title: 'Audits & Inspections',
      summary: 'Conducting thorough audits to identify and rectify compliance issues.',
      details:
        'Comprehensive mock hygiene rating inspections conducted by certified food safety auditors. We generate prioritized gap analysis reports with actionable corrective and preventive action (CAPA) roadmaps.',
    },
    {
      icon: CheckCircle2,
      title: 'Training & Certification',
      summary: 'Educating your team on best practices and regulatory requirements.',
      details:
        'Government-recognized Food Safety Training & Certification (FoSTaC) workshops for food handlers, kitchen supervisors, and quality managers to fulfill statutory workforce compliance mandates.',
    },
    {
      icon: FileText,
      title: 'Documentation & Reporting',
      summary: 'Maintaining meticulous records for transparency and accountability.',
      details:
        'End-to-end digital compliance archival including water testing reports, calibration certificates, supplier food safety warranties, and FSSAI Form D1/D2 annual return submissions.',
    },
  ];

  return (
    <PageTransition>
      {/* 1. HERO: Split Curtain Reveal for FOOD COMPLIANCE with Editorial Hero Image */}
      <SplitRevealSection
        id="food-hero"
        badge="VERTICAL 03 // STATUTORY FOOD DESK"
        title="FOOD COMPLIANCE"
        subtitle="FSSAI Licensing, Hygiene Audits & Regulatory Clearances"
        subtext="Protecting food businesses from operational shutdowns, heavy penalties, and reputational risk through comprehensive statutory licensing and rigorous QA architectures."
        imageUrl="/images/food_hero.jpg"
        subItems={foodSubItems}
        theme="olive"
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. DETAILED SERVICE PILLARS */}
      <section className="py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="mb-16">
            <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-3">
              // Regulatory Practice Disciplines
            </span>
            <h2 className="font-serif text-display-sub font-bold text-[#1A1A16] tracking-tight">
              Food Safety & Governance Framework
            </h2>
          </div>

          <div className="space-y-8">
            {compliancePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/10 shadow-sm hover:border-[#7C8B6F] transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="w-12 h-12 rounded-2xl bg-[#7C8B6F]/15 text-[#7C8B6F] flex items-center justify-center font-mono font-bold">
                        0{idx + 1}
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComp className="w-5 h-5 text-[#7C8B6F]" />
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16]">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="font-serif text-base italic text-[#7C8B6F]">
                        {pillar.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <p className="font-sans text-base text-[#7A7A70] leading-relaxed font-light">
                        {pillar.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CROSS-LINK BANNER: Link to /licenses */}
      <section className="py-20 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="bg-[#1A1A16] text-[#F5F0E6] rounded-3xl p-8 sm:p-14 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C9AF6B] uppercase tracking-widest">
                <AlertCircle className="w-4 h-4" />
                <span>Statutory Licensing Directory</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Looking for specific license categories and legal fees?
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/75 max-w-2xl font-light">
                Inspect our dedicated license portal detailing FSSAI State & Central tiers, MCD Health Trade regulations, DPCC consent, and municipal Shop Act registrations.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link to="/licenses" className="btn-editorial-light" data-cursor="Licenses">
                <span>See License Types</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEQUENTIAL PAGE NAVIGATION */}
      <section className="py-20 bg-[#1A1A16] text-[#F5F0E6] border-t border-white/10">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block mb-2">
              Next Practice Vertical //
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Digital Marketing & Media
            </h3>
            <p className="font-sans text-sm text-white/70 mt-1">
              Custom websites, high-intent Google & Social advertising, technical SEO, and corporate video production.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation('Food Compliance')}
              className="btn-editorial-light"
            >
              <span>Consult Food Officer</span>
            </button>
            <Link
              to="/services/digital-marketing"
              className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 flex items-center gap-2"
              data-cursor="Next"
            >
              <span>Next: Digital Marketing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
