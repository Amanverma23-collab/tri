import { Helmet } from 'react-helmet-async';
﻿import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Briefcase, FileSpreadsheet, Scale, ShieldCheck, CheckCircle2, Calculator, Users, FileText, PieChart, Landmark, HeartHandshake, ChevronDown, ChevronUp } from 'lucide-react';
import { SplitRevealSection, SplitSubItem } from '../../components/SplitRevealSection';
import { PageTransition } from '../../components/PageTransition';
import { EditorialCtaBanner } from '../../components/EditorialCtaBanner';

interface HRServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const HRServices: React.FC<HRServicesProps> = ({ onOpenConsultation }) => {
  const [activeScopeTab, setActiveScopeTab] = useState<number>(0);

  const hrSubItems: SplitSubItem[] = [
    {
      title: 'Payroll Processing',
      description: 'End-to-end salary calculations, CTC structuring, statutory deductions, bank transfer sheets, and payslips.',
      tag: 'Zero-Error Payroll',
    },
    {
      title: 'PF & ESIC Compliance',
      description: 'UAN enrolment, ECR filings, monthly challan generation, Joint Declarations, and notice resolution.',
      tag: 'Statutory EPFO/ESIC',
    },
    {
      title: 'PT & LWF Management',
      description: 'State-wise Professional Tax and Labour Welfare Fund computations, filings, and statutory registers.',
      tag: 'State Labor Acts',
    },
    {
      title: 'TDS & Tax Compliance',
      description: 'Salary TDS calculations, Section 80C/D investment proof verification, and Form 16/24Q filing support.',
      tag: 'Payroll Taxation',
    },
    {
      title: 'HR Administration',
      description: 'Labor Code compliant appointment letters, onboarding/exit workflows, personnel files, and HR policies.',
      tag: 'HR Governance',
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
      title: 'Zero-Error Payroll Engine',
      description: 'Automated wage computation, multi-component allowances, statutory withholdings, and confidential direct bank transfers.',
    },
    {
      icon: Scale,
      title: 'Statutory Labor Audits',
      description: 'Proactive mitigation of non-compliance risks under Factory Act, Minimum Wages, Gratuity, POSH, and State Shop Acts.',
    },
  ];

  const scopeOfServices = [
    {
      id: 'payroll',
      num: '01',
      title: 'Payroll Processing',
      badge: 'Salary & Wage Architecture',
      icon: Calculator,
      summary: 'Comprehensive monthly salary disbursement, automated tax computations, and full & final settlements.',
      deliverables: [
        'Monthly payroll processing and automated salary calculation',
        'Attendance, leave and LOP (Loss of Pay) reconciliation',
        'CTC Master and salary structure management & optimization',
        'PF, ESIC, PT, LWF and TDS deductions as per statutory rules',
        'Salary Register and Bank Transfer Sheet preparation',
        'Payslip generation and encrypted payroll records maintenance',
        'Payroll variance and monthly reconciliation reports',
        'Full & Final Settlement (F&F) calculation & clearance tracking',
        'Gratuity and leave encashment calculations, wherever applicable',
      ],
    },
    {
      id: 'epfo',
      num: '02',
      title: 'PF / EPFO Compliance',
      badge: 'Provident Fund Operations',
      icon: ShieldCheck,
      summary: 'Complete management of Employee Provident Fund operations, UAN onboarding, and monthly ECR filings.',
      deliverables: [
        'New employee PF/UAN enrolment and employee master updates',
        'KYC documentation support and UAN-related corrections',
        'Monthly ECR preparation, verification, and portal submission',
        'PF challan generation and online payment coordination',
        'PF transfer, withdrawal, Joint Declaration and related documentation support',
        'Handling official PF notices, department queries, and compliance audits',
      ],
    },
    {
      id: 'esic',
      num: '03',
      title: 'ESIC Compliance',
      badge: 'State Insurance Governance',
      icon: HeartHandshake,
      summary: 'Healthcare & social security statutory governance for eligible wage brackets under the ESI Act.',
      deliverables: [
        'New employee ESIC registration and employee details updates',
        'E-Pehchan Card generation, validation, and employee support',
        'Monthly ESIC contribution calculation and challan generation',
        'ESIC statutory compliance records and muster register maintenance',
        'ESIC department notices, query replies, and audit coordination',
      ],
    },
    {
      id: 'pt-lwf',
      num: '04',
      title: 'PT & LWF Compliance',
      badge: 'State Statutory Dues',
      icon: Landmark,
      summary: 'State-specific Professional Tax and Labour Welfare Fund registrations, deductions, and return filings.',
      deliverables: [
        'Professional Tax (PT) registration / enrolment across respective states',
        'PT calculation, monthly/half-yearly challan and applicable return filing',
        'Labour Welfare Fund (LWF) contribution calculation, challan and returns',
        'Maintenance of statutory state records, inspection registers, and backup files',
      ],
    },
    {
      id: 'tds',
      num: '05',
      title: 'TDS & Payroll Tax Compliance',
      badge: 'Direct Tax & Withholdings',
      icon: FileText,
      summary: 'Precision payroll taxation ensuring zero tax-withholding discrepancies under Income Tax provisions.',
      deliverables: [
        'Monthly salary TDS calculation and deduction as per Old/New Tax Regimes',
        'Employee investment declaration collection and proof verification',
        'TDS challan generation, advance tax checks, and payment support',
      ],
    },
    {
      id: 'mis',
      num: '06',
      title: 'Payroll & Compliance MIS / Reporting',
      badge: 'Executive Dashboards',
      icon: PieChart,
      summary: 'Actionable executive insights, cost allocations, reconciliation matrices, and statutory trackers.',
      deliverables: [
        'Monthly payroll registers and comprehensive compliance status reports',
        'CTC cost analysis, monthly variance, and headcount reconciliation reports',
        'Statutory payment records, challan repository, and compliance tracker',
        'Custom executive MIS reports structured as required by leadership',
      ],
    },
    {
      id: 'hr-admin',
      num: '07',
      title: 'HR Administration',
      badge: 'People Operations & Legal',
      icon: Users,
      summary: 'End-to-end personnel lifecycle governance, employment agreements, and labor code compliant policies.',
      deliverables: [
        'Employee onboarding documentation, KYC checks, and joining formalities',
        'Appointment Letter drafting aligned with applicable Central/State Labour Codes',
        'Employment terms covering designation, compensation, working hours, leave, statutory benefits, confidentiality, conduct, and notice period',
        'Employee master data governance and physical/digital personnel file maintenance',
        'Offboarding workflows, exit interviews, and no-dues clearance documentation',
        'HR letters & templates: Confirmation, Experience, Relieving, and Salary Revisions',
        'Basic HR policy & SOP formulation related to payroll and statutory governance',
      ],
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>HR Services for Businesses | Trisecure Solutions</title>
        <meta name="description" content="End-to-end HR solutions including recruitment, payroll, compliance, training & development, and employee relations for your team." />
        <meta property="og:title" content="HR Services for Businesses | Trisecure Solutions" />
        <meta property="og:description" content="End-to-end HR solutions including recruitment, payroll, compliance, training & development, and employee relations for your team." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* 1. EDITORIAL SPLIT REVEAL HERO: HR Focus */}
      <SplitRevealSection
        id="hr-hero"
        badge="VERTICAL 01 // HUMAN CAPITAL"
        title="HR & WORKFORCE SOLUTIONS"
        subtitle="Payroll Processing, Labor Law Compliance & People Administration"
        subtext="Our human resources consultancy delivers comprehensive people operations support designed to empower growing enterprises. From targeted talent acquisition and frictionless payroll disbursement to proactive statutory compliance and cultural arbitration, we build resilient organizational foundations."
        imageUrl="/images/hr_hero.jpg"
        theme="cream"
        subItems={hrSubItems}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. THREE PILLARS OF EXCELLENCE */}
      <section className="py-20 sm:py-24 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
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
                  className="bg-[#F5F0E6] p-8 sm:p-10 rounded-3xl border border-[#1A1A16]/10 hover:border-[#7C8B6F] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#C9AF6B]" />
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

      {/* 3. NEW DETAILED SECTION: PAYROLL, COMPLIANCE & HR ADMINISTRATION SCOPE */}
      <section className="py-24 sm:py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-3 font-semibold">
                <span className="w-8 h-px bg-[#7C8B6F]" />
                <span>Statutory Practice // Scope of Services</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Payroll, Compliance & HR Administration
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md font-light">
              A comprehensive 7-module operational framework designed to ensure 100% statutory adherence, error-free salary disbursement, and legal risk insulation.
            </p>
          </div>

          {/* Interactive 7-Module Bento Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Module Navigation Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {scopeOfServices.map((module, idx) => {
                const isActive = activeScopeTab === idx;
                const ModuleIcon = module.icon;
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveScopeTab(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#1A1A16] text-[#F5F0E6] border-[#1A1A16] shadow-xl translate-x-2'
                        : 'bg-[#FAF6EE] text-[#1A1A16] border-[#1A1A16]/10 hover:bg-[#EFE9DC]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-[#0072EF] text-white' : 'bg-[#1A1A16]/5 text-[#7C8B6F]'
                        }`}
                      >
                        <ModuleIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider block font-semibold ${
                            isActive ? 'text-[#C9AF6B]' : 'text-[#7C8B6F]'
                          }`}
                        >
                          {module.num} // {module.badge}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight mt-0.5">
                          {module.title}
                        </h4>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-2 transition-colors ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#1A1A16]/5 text-[#1A1A16]'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Scope Deliverables Panel */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/15 shadow-2xl space-y-8 relative overflow-hidden transition-all duration-500">
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1A1A16]/10 gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#0072EF] font-semibold uppercase tracking-wider block mb-1">
                      MODULE {scopeOfServices[activeScopeTab].num} // {scopeOfServices[activeScopeTab].badge}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16]">
                      {scopeOfServices[activeScopeTab].title}
                    </h3>
                  </div>

                  <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold tracking-wider self-start sm:self-auto shadow-xs">
                    STATUTORY GUARANTEE
                  </span>
                </div>

                {/* Narrative Summary */}
                <p className="font-sans text-base text-[#7A7A70] leading-relaxed font-light">
                  {scopeOfServices[activeScopeTab].summary}
                </p>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#1A1A16] font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0072EF]" />
                    <span>Included Scope Deliverables:</span>
                  </h4>
                  <ul className="space-y-3">
                    {scopeOfServices[activeScopeTab].deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#1A1A16]">
                        <CheckCircle2 className="w-4 h-4 text-[#0072EF] shrink-0 mt-1" />
                        <span className="font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-[#1A1A16]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7C8B6F]">
                    <ShieldCheck className="w-4 h-4 text-[#0072EF]" />
                    <span>100% Audit Readiness Record</span>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(scopeOfServices[activeScopeTab].title)}
                    className="w-full sm:w-auto btn-editorial-primary text-xs"
                  >
                    <span>Request {scopeOfServices[activeScopeTab].title} Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REDESIGNED CTA STRIP: High-Converting Executive Bento Box */}
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
