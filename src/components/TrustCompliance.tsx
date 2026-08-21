import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Lock, Headphones } from 'lucide-react';

export const TrustCompliance: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6">
            <div className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase mb-2">
              COMPLIANCE & GOVERNANCE ASSURANCE
            </div>
            <h2 className="text-[32px] sm:text-[46px] font-medium leading-[0.95] text-[#ffedd7] uppercase mb-6">
              OPERATING WITH <br />
              ABSOLUTE STATUTORY <br />
              PRECISION.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#ffedd7]/80 leading-relaxed mb-8">
              Regulatory compliance is not just paperwork — it is the shield protecting your enterprise from sudden shutdowns, penal proceedings, and compounding interest liabilities.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full border border-[#40372e] bg-[#382416] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-[#dc5000]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#ffedd7] uppercase">Direct Authority Portal Filings</div>
                  <div className="text-[12px] text-[#6c5f51]">All filings processed via official government portals (FoSCoS, Shram Suvidha, SPCB, EPFO) with authentic verifiable acknowledgement receipts.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full border border-[#40372e] bg-[#382416] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-[#dc5000]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#ffedd7] uppercase">Multi-Tier Banking Syndication</div>
                  <div className="text-[12px] text-[#6c5f51]">Transparent loan processing with nationalized and private banking desks without undocumented broker margins.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full border border-[#40372e] bg-[#382416] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-[#dc5000]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#ffedd7] uppercase">Confidential Corporate Data Handling</div>
                  <div className="text-[12px] text-[#6c5f51]">Non-disclosure protection for payroll records, employee personal identifiable information (PII), and financial balance sheets.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Verification Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-[12px] border border-[#40372e] bg-[#382416]/20 flex flex-col justify-between">
              <ShieldCheck className="w-8 h-8 text-[#ffedd7] mb-6" />
              <div>
                <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-1">
                  PROCEDURAL SCRUTINY
                </div>
                <div className="text-[16px] font-medium text-[#ffedd7] uppercase mb-2">
                  Zero Rejection Pre-Audit
                </div>
                <p className="text-[12px] text-[#ffedd7]/80 leading-relaxed">
                  Every application undergoes internal document vetting before formal portal submission.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[12px] border border-[#40372e] bg-[#100904] flex flex-col justify-between">
              <Headphones className="w-8 h-8 text-[#dc5000] mb-6" />
              <div>
                <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-1">
                  DEDICATED SUPPORT
                </div>
                <div className="text-[16px] font-medium text-[#ffedd7] uppercase mb-2">
                  Named Relationship Manager
                </div>
                <p className="text-[12px] text-[#ffedd7]/80 leading-relaxed">
                  Single point of contact for status tracking, renewals, and expedited department query response.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[12px] border border-[#40372e] bg-[#100904] flex flex-col justify-between">
              <FileText className="w-8 h-8 text-[#ffedd7] mb-6" />
              <div>
                <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-1">
                  CALENDAR TRACKING
                </div>
                <div className="text-[16px] font-medium text-[#ffedd7] uppercase mb-2">
                  Automated Renewal Alerts
                </div>
                <p className="text-[12px] text-[#ffedd7]/80 leading-relaxed">
                  60-day advance notification for license expiries, annual returns, and policy renewals.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[12px] border border-[#40372e] bg-[#382416]/20 flex flex-col justify-between">
              <Lock className="w-8 h-8 text-[#dc5000] mb-6" />
              <div>
                <div className="text-[11px] font-medium tracking-[0.14em] text-[#6c5f51] uppercase mb-1">
                  SECURITY & PRIVACY
                </div>
                <div className="text-[16px] font-medium text-[#ffedd7] uppercase mb-2">
                  Enterprise Confidentiality
                </div>
                <p className="text-[12px] text-[#ffedd7]/80 leading-relaxed">
                  Strict non-disclosure agreements protecting your company books and proprietary structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
