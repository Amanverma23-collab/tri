import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, FileSpreadsheet, GraduationCap, Scale, Heart } from 'lucide-react';
import { SplitRevealSection, SplitSubItem } from '../../components/SplitRevealSection';
import { PageTransition } from '../../components/PageTransition';

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
      title: 'Recruitment & Staffing',
      summary: 'Finding the right talent to meet your business needs.',
      details:
        'We deploy targeted executive search and rigorous multi-stage candidate screening to source top-tier talent. Whether filling specialized technical posts, field operatives, or senior leadership, our pipeline ensures swift placements with high retention index.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Payroll Management',
      summary: 'Ensuring timely and accurate payroll processing.',
      details:
        'Zero-error monthly payroll execution with automated statutory computations (Provident Fund, ESI, Professional Tax, TDS). We provide employee self-service pay-slips, leave & attendance integrations, and seamless compliance filings.',
    },
    {
      icon: GraduationCap,
      title: 'Employee Training & Development',
      summary: 'Empowering your workforce with the skills they need.',
      details:
        'Customized corporate training modules designed to bridge skill gaps, enhance operational efficiency, and build management depth. We deliver interactive workshops in customer relations, leadership, safety, and modern tool adoption.',
    },
    {
      icon: Scale,
      title: 'Compliance & Regulatory Affairs',
      summary: 'Keeping your business compliant with labor laws and regulations.',
      details:
        'Navigating complex Indian labor statutes: Minimum Wages Act, Payment of Gratuity, Maternity Benefits, POSH statutory committees, and annual register maintenance. We protect your company against legal liability and regulatory penalties.',
    },
    {
      icon: Heart,
      title: 'Employee Relations',
      summary: 'Enhancing workplace harmony and productivity.',
      details:
        'Fostering a transparent, compliant, and motivated work culture. We design performance appraisal systems, resolve workplace grievances, and develop employee engagement policies that reduce turnover and maximize team output.',
    },
  ];

  return (
    <PageTransition>
      {/* 1. HERO: Split Curtain Reveal for HR SERVICES with Editorial Hero Image */}
      <SplitRevealSection
        id="hr-hero"
        badge="VERTICAL 01 // HUMAN CAPITAL"
        title="HR SERVICES"
        subtitle="Workforce Architecture, Payroll & Labor Compliance"
        subtext="Empowering organizations with full-lifecycle human resource solutions designed to acquire premier talent, ensure bulletproof labor compliance, and foster high-performance teams."
        imageUrl="/images/hr_hero.jpg"
        subItems={hrSubItems}
        theme="charcoal"
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. DETAILED SERVICE PILLARS */}
      <section className="py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="mb-16">
            <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-3">
              // Core HR Practice Areas
            </span>
            <h2 className="font-serif text-display-sub font-bold text-[#1A1A16] tracking-tight">
              Comprehensive Workforce Solutions
            </h2>
          </div>

          <div className="space-y-8">
            {hrPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/10 shadow-sm hover:border-[#7C8B6F] transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1 flex items-center">
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

      {/* 3. SEQUENTIAL PAGE NAVIGATION */}
      <section className="py-20 bg-[#1A1A16] text-[#F5F0E6] border-t border-white/10">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block mb-2">
              Next Practice Vertical //
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Insurance & Loans Services
            </h3>
            <p className="font-sans text-sm text-white/70 mt-1">
              Explore corporate risk management, business financing, and customized personal underwriting.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation('HR Services')}
              className="btn-editorial-light"
            >
              <span>Consult HR Specialist</span>
            </button>
            <Link
              to="/services/insurance-loans"
              className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 flex items-center gap-2"
              data-cursor="Next"
            >
              <span>Next: Insurance & Loans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
