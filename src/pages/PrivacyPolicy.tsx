import { Helmet } from 'react-helmet-async';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

interface PrivacyPolicyProps {
  onOpenConsultation: (service?: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onOpenConsultation }) => {
  const sections = [
    {
      num: '01',
      title: 'Institutional Commitment to Privacy',
      content:
        'Trisecure F&B Solutions ("Trisecure", "we", "us", or "our") operates as a premier single-window corporate advisory firm. We are fully committed to protecting the confidentiality, integrity, and privacy of all enterprise clients, prospective partners, and individuals who engage with our digital platform, consultation desks, and advisory practices.',
    },
    {
      num: '02',
      title: 'Information We Collect',
      content:
        'When you submit an inquiry, book an advisory session, or enter into an engagement retainer, we collect necessary business and operational details:',
      points: [
        'Personal & Executive Identification: Full Name, designation, company name, corporate email address, and direct telephone numbers.',
        'Enterprise & Operational Dossiers: Premise dimensions, workforce headcount, PF/ESIC records, existing statutory licenses, and regulatory compliance status.',
        'Technical & Platform Metadata: IP address, device telemetry, browser type, and anonymous analytics utilized strictly to enhance platform security and response latency.',
      ],
    },
    {
      num: '03',
      title: 'Purpose of Data Processing',
      content:
        'All client information is utilized exclusively for legitimate business advisory and statutory governance purposes:',
      points: [
        'Executing requested scope across HR payroll, FSSAI licensing, DPCC consents, MCD permits, and debt advisory.',
        'Submitting verified applications and dossiers to statutory departments (EPFO, ESIC, FSSAI, DPCC, MCD) strictly under explicit client authorization.',
        'Maintaining mandatory statutory registers, audit trails, and compliance archives as mandated under Indian Central and State laws.',
        'Direct executive communications, advisory briefing confirmations, and service updates.',
      ],
    },
    {
      num: '04',
      title: 'Non-Disclosure & Data Confidentiality',
      content:
        'We adhere to strict institutional confidentiality standards. We do not sell, rent, monetize, or trade client data to third-party brokers or advertisers. Data is disclosed only to designated regulatory authorities (such as FSSAI, EPFO, State Labor Departments) strictly for government filings or under legal subpoenas.',
    },
    {
      num: '05',
      title: 'Data Security & Storage Standards',
      content:
        'All client documentation, payroll ledgers, and KYC dossiers are protected with industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest). Access is restricted solely to authorized practice leads and compliance directors assigned to your account.',
    },
    {
      num: '06',
      title: 'Statutory Rights & Grievance Redressal',
      content:
        'In accordance with the Digital Personal Data Protection Act (DPDPA 2023) and applicable Indian Information Technology regulations, you retain the right to review, update, or request the secure deletion of your contact records. For privacy inquiries, reach our Data Governance Desk at anuragsharma0120@gmail.com.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy & Data Protection | Trisecure Solutions</title>
        <meta name="description" content="Our data protection protocols, Digital Personal Data Protection Act compliance, non-disclosure commitments, and secure enterprise information governance." />
        <meta property="og:title" content="Privacy Policy & Data Protection | Trisecure Solutions" />
        <meta property="og:description" content="Our data protection protocols, Digital Personal Data Protection Act compliance, non-disclosure commitments, and secure enterprise information governance." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-32 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container max-w-4xl">
          
          {/* Header */}
          <div className="space-y-4 pb-12 border-b border-[#1A1A16]/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9AF6B]" />
              <span>LEGAL GOVERNANCE // PRIVACY POLICY</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A16] tracking-tight">
              Privacy Policy & Data Governance
            </h1>

            <p className="font-mono text-xs text-[#7A7A70]">
              Effective Date: August 2026 • Governing Law: Digital Personal Data Protection Act (India)
            </p>
          </div>

          {/* Privacy Sections */}
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

          {/* Direct Grievance Desk Bento */}
          <div className="p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/10 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest font-semibold">
                // Grievance & Compliance Desk
              </span>
              <Lock className="w-4 h-4 text-[#0072EF]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1A1A16]">
              Have questions regarding your corporate data?
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] font-light leading-relaxed">
              Contact our Managing Director directly for data inquiries, non-disclosure agreement executions, or privacy verification.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="mailto:anuragsharma0120@gmail.com"
                className="btn-editorial-primary text-xs"
              >
                <Mail className="w-4 h-4" />
                <span>anuragsharma0120@gmail.com</span>
              </a>

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
