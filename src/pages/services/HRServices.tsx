import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, FileSpreadsheet, GraduationCap, Scale, Heart } from 'lucide-react';
import { SplitRevealSection, SplitSubItem } from '../../components/SplitRevealSection';
import { PageTransition } from '../../components/PageTransition';
import { EditorialCtaBanner } from '../../components/EditorialCtaBanner';

interface HRServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const HRServices: React.FC<HRServicesProps> = ({ onOpenConsultation }) => {
  const hrSubItems: SplitSubItem[] = [
    {
      title: 'Recruitment & Staffing',
      description: 'Finding the right talent to meet your business needs across executive, managerial, and frontline roles.',
      tag: 'Talent Acquisition',
    },
    {
      title: 'Payroll Management',
      description: 'Ensuring timely and accurate payroll processing with comprehensive tax, PF, and ESIC withholdings.',
      tag: 'Payroll & Benefits',
    },
    {
      title: 'Employee Training & Development',
      description: 'Empowering your workforce with the skills they need through tailored leadership and technical programs.',
      tag: 'Capability Building',
    },
    {
      title: 'Compliance & Regulatory Affairs',
      description: 'Keeping your business compliant with labor laws, statutory filings, POSH regulations, and factory acts.',
      tag: 'Statutory Governance',
    },
    {
      title: 'Employee Relations',
      description: 'Enhancing workplace harmony, conflict resolution frameworks, and retention-focused cultural productivity.',
      tag: 'Retention & Culture',
    },
  ];

  const hrPillars = [
    {
      icon: Briefcase,
      title: 'Strategic Talent Sourcing',
      description: 'Leveraging data-driven candidate evaluation pipelines for high-retention executive and operational placements.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Zero-Error Payroll',
      description: 'Automated wage calculation, PF/ESIC reconciliation, TDS computation, and confidential direct transfers.',
    },
    {
      icon: Scale,
      title: 'Statutory Labor Audits',
      description: 'Proactive mitigation of non-compliance risks under Factory Act, Minimum Wages, Gratuity, and State Shop Acts.',
    },
  ];

  return (
    <PageTransition>
      {/* 1. EDITORIAL SPLIT REVEAL HERO: HR Focus */}
      <SplitRevealSection
        id="hr-hero"
        badge="VERTICAL 01 // HUMAN CAPITAL"
        title="HR & WORKFORCE SOLUTIONS"
        subtitle="Workforce Acquisition, Payroll Infrastructure & Labor Law Governance"
        subtext="Our human resources consultancy delivers comprehensive people operations support designed to empower growing enterprises. From targeted talent acquisition and frictionless payroll disbursement to proactive statutory compliance and cultural arbitration, we build resilient organizational foundations."
        imageUrl="/images/hr_hero.jpg"
        theme="cream"
        subItems={hrSubItems}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. THREE PILLARS OF EXCELLENCE */}
      <section className="py-24 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-3 font-semibold">
              // Core Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
              Engineered for People & Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hrPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F5F0E6] p-8 sm:p-10 rounded-3xl border border-[#1A1A16]/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A16] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-[#7A7A70] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. REDESIGNED CTA STRIP: High-Converting Executive Bento Box */}
      <EditorialCtaBanner
        tagline="// HUMAN CAPITAL & STATUTORY PRACTICE"
        title="Ready to optimize your workforce operations & statutory compliance?"
        description="Schedule a private briefing with our senior HR directors to evaluate your staffing models, payroll compliance, POSH framework, and state labor registers."
        primaryBtnText="Consult HR Specialist"
        secondaryBtnText="Next: Insurance & Loans"
        secondaryBtnLink="/services/insurance-loans"
        serviceCategory="HR Services"
        onOpenConsultation={onOpenConsultation}
      />
    </PageTransition>
  );
};
