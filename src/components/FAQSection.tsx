import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'FOOD COMPLIANCE',
    question: 'How long does it take to obtain an FSSAI State or Central License?',
    answer: 'Basic FSSAI registrations are typically processed within 3 to 7 business days. State and Central licenses take approximately 7 to 15 business days following premise inspection and FoSCoS document verification by our regulatory team.'
  },
  {
    category: 'WORKFORCE & PAYROLL',
    question: 'Can TriSecure manage multi-state payroll and statutory labour compliance?',
    answer: 'Yes. We manage end-to-end multi-state payroll processing, EPF and ESIC electronic challan generation, Professional Tax (PT) filings across all Indian states, and POSH Internal Committee setups with unified monthly MIS reporting.'
  },
  {
    category: 'LOANS & CAPITAL',
    question: 'What documents are required to initiate an MSME or Business Working Capital loan?',
    answer: 'Initial assessment requires 12 months of bank statements, 2–3 years of ITR / audited financial balance sheets, and business registration proof (GST/Shop Act). Our banking syndication desk evaluates debt-service capability to secure the lowest market interest rates without hidden brokerage.'
  },
  {
    category: 'CONSULTATION & PRICING',
    question: 'Is the initial business consultation and compliance audit free?',
    answer: 'Yes. The initial diagnostic consultation, eligibility evaluation, and statutory roadmap are completely complimentary. Formal commercial fee agreements with milestone deliverables are provided upfront with zero hidden charges.'
  }
];

export const FAQSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-[#fafaf7] border-b border-[#e5e4de] relative">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-3">
            07 // FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
            Clear Answers to <br />
            Statutory & Credit Queries.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed">
            Essential operational insights regarding government filing procedures, turnaround timelines, and banking syndication norms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#e5e4de] bg-white transition-all overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#047857] uppercase block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0a1118] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-[#e5e4de] flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-[#047857] text-white rotate-180' : 'bg-[#fafaf7] text-[#0a1118]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[14px] text-[#475569] leading-relaxed border-t border-[#f1f0ea] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-12 p-6 rounded-2xl border border-[#e5e4de] bg-white max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-[#475569]">
            Have a specific regulatory query or unique multi-state structure?
          </div>
          <button
            onClick={onOpenConsultation}
            className="text-[12px] font-mono font-bold text-[#047857] hover:underline uppercase tracking-wider shrink-0 cursor-pointer"
          >
            Speak to a Senior Specialist →
          </button>
        </div>
      </div>
    </section>
  );
};
