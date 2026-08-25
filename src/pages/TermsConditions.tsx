import { Helmet } from 'react-helmet-async';
﻿import React from 'react';

import { ShieldCheck, Scale, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

interface TermsConditionsProps {
  onOpenConsultation: (service?: string) => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onOpenConsultation }) => {
  const sections = [
    {
      num: '01',
      title: 'Engagement & Scope of Advisory',
      content:
        'By accessing the Trisecure F&B Solutions platform or engaging our consulting services, you agree to be bound by these Terms of Engagement. Trisecure operates as an institutional management advisory, regulatory liaison, and workforce solutions partner across India.',
    },
    {
      num: '02',
      title: 'Practice Areas & Deliverables',
      content:
        'Our scope of services spans four primary practices, each governed by specific deliverable timelines and regulatory standards:',
      points: [
        'HR & Payroll Administration: Wage calculation, EPFO/ESIC compliance, PT/LWF filings, TDS deduction, and New Labour Code appointment contracts.',
        'Food Compliance & Statutory Licensing: Preparation, filing, and liaison for FSSAI State/Central Licenses, DPCC CTE/CTO, MCD Health Trade Permits, and Fire Safety NOCs.',
        'Corporate Insurance & Debt Financing: Evaluation and advisory for commercial liability underwriting, group health policies, working capital debt, and loan structuring.',
        'Digital Marketing & Branding: Performance growth campaigns, search engine optimization, brand identity development, and media strategy.',
      ],
    },
    {
      num: '03',
      title: 'Client Responsibilities & Dossier Accuracy',
      content:
        'Clients agree to furnish authentic, verified, and complete documentation (including identity proofs, premise leases, tax filings, and trade certificates) necessary for government filings and statutory submissions. Trisecure is not liable for regulatory rejections caused by misleading, fraudulent, or incomplete client submissions.',
    },
    {
      num: '04',
      title: 'Government Timelines & Statutory Disclaimers',
      content:
        'While Trisecure optimizes filing efficiency and liaison protocols to fast-track sanctions, final approvals, inspection dates, and license issuances remain subject to the sole discretion and processing timelines of competent statutory bodies (e.g., FSSAI, DPCC, MCD, EPFO, ESIC, State Fire Services).',
    },
    {
      num: '05',
      title: 'Fee Structure & Professional Retainers',
      content:
        'Professional advisory fees, government statutory treasury charges, and monthly retainer disbursements are detailed in individual Service Level Agreements (SLAs). Government statutory fees are non-refundable once deposited into official treasury portals.',
    },
    {
      num: '06',
      title: 'Limitation of Liability & Jurisdiction',
      content:
        'To the maximum extent permitted by Indian Law, Trisecure liability in connection with any advisory engagement is limited to the professional fee received for the specific service in dispute. All contractual agreements and disputes are subject to the exclusive jurisdiction of the competent courts in Delhi NCR, India.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Terms & Conditions of Advisory Engagement | Trisecure Solutions</title>
        <meta name="description" content="Terms of service, advisory engagement scope, client responsibilities, statutory filing disclaimers, and legal jurisdiction for Trisecure Solutions." />
        <meta property="og:title" content="Terms & Conditions of Advisory Engagement | Trisecure Solutions" />
        <meta property="og:description" content="Terms of service, advisory engagement scope, client responsibilities, statutory filing disclaimers, and legal jurisdiction for Trisecure Solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-32 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container max-w-4xl">
          
          {/* Header */}
          <div className="space-y-4 pb-12 border-b border-[#1A1A16]/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5 text-[#C9AF6B]" />
              <span>LEGAL GOVERNANCE // TERMS OF ENGAGEMENT</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A16] tracking-tight">
              Terms & Conditions of Advisory
            </h1>

            <p className="font-mono text-xs text-[#7A7A70]">
              Effective Date: August 2026 • Legal Jurisdiction: Delhi NCR, India
            </p>
          </div>

          {/* Terms Sections */}
          <div className="py-12 space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#7C8B6F] font-bold">
                    // {section.num}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16]">
                    {section.title}
                  </h2>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#7A7A70] leading-relaxed font-light">
                  {section.content}
                </p>

                {section.points && (
                  <ul className="space-y-2.5 pt-2">
                    {section.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-[#1A1A16]">
                        <CheckCircle2 className="w-4 h-4 text-[#0072EF] shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Contact Advisory Desk Bento */}
          <div className="p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/10 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest font-semibold">
                // Corporate Governance Desk
              </span>
              <ShieldCheck className="w-4 h-4 text-[#0072EF]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1A1A16]">
              Require a tailored corporate retainer agreement?
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] font-light leading-relaxed">
              Our managing directors are available to structure customized Service Level Agreements (SLAs) for enterprise conglomerates and high-growth hospitality chains.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Custom Retainer SLA')}
                className="btn-editorial-primary text-xs"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918585999922"
                className="btn-editorial-secondary text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#7C8B6F]" />
                <span className="font-mono">+91 8585999922</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
