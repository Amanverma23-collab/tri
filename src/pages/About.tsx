import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, HeartHandshake, Mail, Phone, Sparkles, Award, CheckCircle2, ArrowUpRight, Users, Landmark, Utensils, Megaphone, Rocket, Scale, UserCheck, Calculator, Store, Handshake } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

interface AboutProps {
  onOpenConsultation: (service?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const whyChooseItems = [
    {
      num: '01',
      title: 'Expertise',
      desc: 'Decades of combined experience in HR, Insurance, Food compliance and Digital marketing services. Our seasoned multidisciplinary team navigates complex statutory frameworks with precision.',
    },
    {
      num: '02',
      title: 'Comprehensive Services',
      desc: 'A one-stop solution for all your business needs. We eliminate multi-vendor friction by consolidating compliance, risk, human resources, and brand growth under unified management.',
    },
    {
      num: '03',
      title: 'Client-Centric Approach',
      desc: 'Personalized service tailored to your unique requirements. We invest time to understand your operational landscape and craft bespoke strategies that accelerate long-term success.',
    },
    {
      num: '04',
      title: 'Reliability',
      desc: 'Trusted by businesses across various industries for our integrity and excellence. We hold ourselves to uncompromising standards of transparency, confidentiality, and execution speed.',
    },
  ];

  const founderExperience = [
    {
      role: 'Head - Human Resources',
      company: 'Niyara Foods Pvt. Ltd. (Eggspert)',
      period: 'Dec 2024 - Present',
      highlight: 'Leading pan-NCR corporate HR strategy, multi-outlet people operations, and rapid retail brand expansion.',
    },
    {
      role: 'HR Business Partner (HRBP)',
      company: 'Maverix Platforms (Acquired by Curefoods / EatFit)',
      period: 'Jul 2020 - Oct 2023',
      highlight: 'Oversaw end-to-end talent scaling, full-cycle HR operations, and statutory licensing across cloud kitchens & central facilities.',
    },
    {
      role: 'HR Manager',
      company: 'Oh Delhi Foods (Frozen Foods, B2B Horeca)',
      period: 'Nov 2023 - Nov 2024',
      highlight: 'Directed workforce operations, labor compliance, statutory insurance benefits (PF/ESIC), and executive staffing.',
    },
    {
      role: 'HR Administration Lead',
      company: 'Nazeer Foods Private Limited',
      period: 'May 2017 - Mar 2020',
      highlight: 'Managed regional recruitment, police verifications, statutory registers, and administrative operations.',
    },
  ];

  const founderSkills = [
    {
      title: 'Greenfield Startup Scaling',
      desc: '0 to 1 team building & operational foundations',
      icon: Rocket,
    },
    {
      title: 'FSSAI & Labor Compliance',
      desc: 'Statutory audits, permits & state labor laws',
      icon: Scale,
    },
    {
      title: 'Talent Acquisition & Headhunting',
      desc: 'Leadership hiring & mass staffing pipelines',
      icon: UserCheck,
    },
    {
      title: 'Payroll & Statutory Governance',
      desc: 'PF, ESIC, Gratuity, Bonus & Tax filings',
      icon: Calculator,
    },
    {
      title: 'QSR & Cloud Kitchen Expansion',
      desc: 'Rapid multi-unit retail rollouts across NCR',
      icon: Store,
    },
    {
      title: 'Dispute Resolution & Culture',
      desc: 'Union arbitration & high-retention frameworks',
      icon: Handshake,
    },
  ];

  return (
    <PageTransition>
      {/* =========================================================================
          1. REDESIGNED MASTHEAD: Editorial 2-Column Hero Layout with Corporate Bento
          ========================================================================= */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-[#F5F0E6] overflow-hidden border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>WHO WE ARE // ABOUT TRISECURE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A16] leading-[1.08]">
                Empowering modern businesses with clarity, compliance & strategic scale.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light max-w-xl">
                At <strong className="font-semibold text-[#1A1A16]">Trisecure Solution</strong>, we eliminate corporate operational friction by delivering institutional HR strategy, comprehensive insurance & loan advisory, statutory food compliance, and digital growth acceleration under a unified partner desk.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="btn-editorial-primary text-xs"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="btn-editorial-secondary text-xs"
                >
                  <span>Explore Practice Verticals</span>
                </Link>
              </div>

              {/* Bottom Quick Metrics Strip */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1A1A16]/10 max-w-lg">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    12+
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Years Leadership
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C8B6F] block">
                    100%
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Audit Readiness
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    Pan-India
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
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
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold">
                    SINGLE-WINDOW
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#1A1A16] leading-snug font-normal">
                  "One unified partner to navigate licensing, risk protection, human capital, and digital scale with zero compromise."
                </p>

                {/* 4 Practice Area Badges */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">HR & Workforce Solutions</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Recruitment, payroll, statutory registers & dispute handling</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#7C8B6F] text-white flex items-center justify-center shrink-0">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Insurance & Loan Advisory</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">Asset protection, corporate group cover & capital lending</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#C9AF6B] text-[#1A1A16] flex items-center justify-center shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Food & Environmental Compliance</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">FSSAI Central/State, Health Trade & DPCC clearances</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Digital Growth & Branding</h4>
                      <p className="font-sans text-[11px] text-[#7A7A70]">High-conversion web platforms, targeted ads & authority SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FOUNDER & LEADERSHIP SPOTLIGHT: ANURAG SHARMA
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#1A1A16] text-[#F5F0E6] relative overflow-hidden bg-charcoal-textured border-b border-white/10">
        <div className="editorial-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9AF6B]/15 text-[#C9AF6B] font-mono text-xs uppercase tracking-widest mb-3 border border-[#C9AF6B]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Meet the Founder
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/70 max-w-md font-light">
              12+ years of battle-tested enterprise leadership across QSR, FMCG, Cloud Kitchens, and high-growth startup ecosystems.
            </p>
          </div>

          {/* Founder Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Founder Portrait & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group bg-[#22221D]">
                <img
                  src="/images/anurag_sharma.jpg"
                  alt="Anurag Sharma - Founder & Managing Director"
                  className="w-full aspect-[4/5] object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A16] via-[#1A1A16]/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block mb-1">
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

              {/* Founder Contact & Direct Line Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                <div className="text-white/60 uppercase tracking-widest text-[11px] font-semibold border-b border-white/10 pb-2">
                  Direct Executive Desk
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7C8B6F]" />
                    <span>Mobile (Direct)</span>
                  </span>
                  <a href="tel:+918585999922" className="text-[#C9AF6B] hover:underline">
                    +91 8585999922
                  </a>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7C8B6F]" />
                    <span>Alternate Line</span>
                  </span>
                  <a href="tel:+919716965062" className="text-[#C9AF6B] hover:underline">
                    +91 9716965062
                  </a>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7C8B6F]" />
                    <span>Email</span>
                  </span>
                  <a href="mailto:anuragsharma0120@gmail.com" className="text-[#C9AF6B] hover:underline truncate max-w-[180px]">
                    anuragsharma0120@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Career Milestones & Redesigned Core Competencies */}
            <div className="lg:col-span-7 space-y-8">
              {/* Executive Bio */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  A Decade of Building Teams & Securing Enterprises
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  Anurag Sharma is a seasoned HR Leader and Business Operations Strategist with over 12 years of hands-on expertise orchestrating human resource ecosystems, statutory governance, labor compliance, and multi-state workforce deployments across high-stakes corporate sectors.
                </p>
                <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed font-light">
                  Having anchored critical people operations at pan-India brands including <strong>Niyara Foods (Eggspert)</strong>, <strong>Maverix Platforms (acquired by Curefoods / EatFit)</strong>, <strong>Oh Delhi Foods</strong>, and <strong>Nazeer Foods</strong>, Anurag founded Trisecure Solution to bridge the execution gap between statutory compliance, human capital scaling, and corporate financial security.
                </p>
              </div>

              {/* Career Timeline / Milestones */}
              <div className="space-y-4 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9AF6B] font-semibold">
                  // Career Leadership Milestones
                </h4>
                <div className="space-y-3">
                  {founderExperience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C8B6F]/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="font-serif text-base sm:text-lg font-bold text-white">
                          {exp.role}
                        </span>
                        <span className="font-mono text-[11px] text-[#C9AF6B]">
                          {exp.period}
                        </span>
                      </div>
                      <div className="font-sans text-xs text-[#7C8B6F] font-semibold mb-1">
                        {exp.company}
                      </div>
                      <p className="font-sans text-xs text-white/70 font-light">
                        {exp.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redesigned Core Advisory Competencies Grid */}
              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9AF6B] font-semibold mb-3">
                  // Core Advisory Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {founderSkills.map((skill, idx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C9AF6B]/40 transition-all duration-300 flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center shrink-0 border border-[#C9AF6B]/25 group-hover:scale-105 transition-transform">
                          <SkillIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-serif text-sm font-bold text-white leading-tight">
                            {skill.title}
                          </h5>
                          <p className="font-sans text-[11px] text-white/60 mt-0.5 font-light">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE US: 4 Pillar Columns
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Principles</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A16] tracking-tight">
                Why Partner With Us
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] max-w-md">
              Combining institutional rigor with personalized, agile execution to solve your operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F0E6] p-6 sm:p-7 rounded-3xl border border-[#1A1A16]/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs text-[#7C8B6F] font-bold block mb-4">
                    {item.num} // PILLAR
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A16] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#7A7A70] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MISSION & VISION: 2 Split Cards
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-4">
                  01 // OUR MISSION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] mb-4">
                  Democratizing institutional advisory for every growing Indian enterprise.
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#7A7A70] leading-relaxed font-light">
                  To provide seamless, reliable, and end-to-end statutory and strategic business solutions that free founders and executives from compliance friction, allowing them to focus entirely on core growth.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#1A1A16]/10 flex items-center gap-2 text-xs font-mono text-[#7C8B6F]">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Precision & Assurance</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1A1A16] text-[#F5F0E6] border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block mb-4">
                  02 // OUR VISION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  To be India's most trusted single-window corporate advisory partner.
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#F5F0E6]/80 leading-relaxed font-light">
                  Setting the gold standard for integrated business consulting across HR infrastructure, liability insurance, statutory licensing, and digital branding with unyielding transparency and speed.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#C9AF6B]">
                <HeartHandshake className="w-4 h-4" />
                <span>Long-Term Enterprise Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CTA STRIP
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#1A1A16] text-[#F5F0E6]">
        <div className="editorial-container text-center max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block">
            // Start Today
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to partner with an experienced advisory team?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#F5F0E6]/80 font-light">
            Book a complimentary discovery call to evaluate your compliance status, workforce needs, or insurance portfolio.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-editorial-light"
            >
              <span>Schedule Advisory Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services"
              className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
