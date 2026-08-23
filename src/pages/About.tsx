import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, HeartHandshake, Mail, Phone, Sparkles } from 'lucide-react';
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
      period: 'Dec 2024 — Present',
      highlight: 'Leading pan-NCR corporate HR strategy, multi-outlet people operations, and rapid retail brand expansion.',
    },
    {
      role: 'HR Business Partner (HRBP)',
      company: 'Maverix Platforms (Acquired by Curefoods / EatFit)',
      period: 'Jul 2020 — Oct 2023',
      highlight: 'Oversaw end-to-end talent scaling, full-cycle HR operations, and statutory licensing across cloud kitchens & central facilities.',
    },
    {
      role: 'HR Manager',
      company: 'Oh Delhi Foods (Frozen Foods, B2B Horeca)',
      period: 'Nov 2023 — Nov 2024',
      highlight: 'Directed workforce operations, labor compliance, statutory insurance benefits (PF/ESIC), and executive staffing.',
    },
    {
      role: 'HR Administration Lead',
      company: 'Nazeer Foods Private Limited',
      period: 'May 2017 — Mar 2020',
      highlight: 'Managed regional recruitment, police verifications, statutory registers, and administrative operations.',
    },
  ];

  const founderSkills = [
    'Greenfield Startup Scaling',
    'FSSAI & Labor Compliance',
    'Talent Acquisition & Headhunting',
    'Payroll & Statutory Governance',
    'QSR & Cloud Kitchen Expansion',
    'Dispute Resolution & Culture',
  ];

  return (
    <PageTransition>
      {/* 1. MASTHEAD: Oversized "About" Heading bleeding off edge */}
      <section className="relative pt-36 pb-20 sm:pb-28 bg-[#F5F0E6] overflow-hidden border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="mb-6">
            <span className="font-serif italic text-lg sm:text-xl text-[#7C8B6F] font-light tracking-wide">
              WHO WE ARE //
            </span>
          </div>

          <div className="relative">
            <h1 className="font-serif text-display-giant text-[#1A1A16] font-bold tracking-tight select-none">
              About
            </h1>
          </div>

          {/* Subheader & Core Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[#7A7A70] uppercase tracking-widest block mb-4">
                // Company Overview
              </span>
              <p className="font-serif text-3xl sm:text-4xl text-[#1A1A16] font-normal leading-snug">
                Empowering modern businesses with clarity, compliance, and strategic capital.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="font-serif text-xl sm:text-2xl text-[#1A1A16]/90 leading-relaxed font-light">
                At <strong className="font-semibold text-[#7C8B6F]">Trisecure Solution</strong>, we specialize in providing comprehensive insurance, digital marketing solutions, and loan solutions tailored to meet the unique needs of individuals and businesses.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light">
                Our expertise ensures that our clients receive the best advice and support, helping them make informed decisions for their financial well-being. Whether you are launching a new enterprise requiring MCD and FSSAI clearances, structuring corporate group insurance, or expanding your workforce, Trisecure delivers end-to-end peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER & LEADERSHIP SPOTLIGHT: ANURAG SHARMA */}
      <section className="py-24 sm:py-32 bg-[#1A1A16] text-[#F5F0E6] relative overflow-hidden bg-charcoal-textured border-b border-white/10">
        <div className="editorial-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9AF6B]/15 text-[#C9AF6B] font-mono text-xs uppercase tracking-widest mb-3 border border-[#C9AF6B]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-serif text-display-sub font-bold text-white tracking-tight">
                Meet the Founder
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-md font-light">
              12+ years of battle-tested enterprise leadership across QSR, FMCG, Cloud Kitchens, and high-growth startup ecosystems.
            </p>
          </div>

          {/* Founder Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Founder Portrait & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#FAF6EE] group">
                <img
                  src="/images/anurag_sharma.jpg"
                  alt="Anurag Sharma - Founder & Managing Director"
                  className="w-full aspect-[4/5] object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A16] via-[#1A1A16]/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block mb-1 font-semibold">
                    FOUNDER & MANAGING DIRECTOR
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Anurag Sharma
                  </h3>
                  <p className="font-sans text-xs text-white/80 mt-1">
                    B.B.A (Commerce) • 12+ Years Enterprise Leadership
                  </p>
                </div>
              </div>

              {/* Direct Founder Connect Links */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3.5">
                <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-2">
                  // Direct Executive Connect
                </span>
                
                <a
                  href="tel:+918585999922"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-[#C9AF6B] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C9AF6B] group-hover:text-[#1A1A16] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono">+91 8585999922 / +91 9716965062</span>
                </a>

                <a
                  href="mailto:anuragsharma0120@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-[#7C8B6F] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7C8B6F] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-sans truncate">anuragsharma0120@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/anurag-sharma-556a04243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-[#C9AF6B] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0a66c2] group-hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.97 0 1.76.78 1.76 1.75s-.79 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs">linkedin.com/in/anurag-sharma</span>
                </a>
              </div>
            </div>

            {/* Right: Founder Narrative, Career Milestones & Competencies */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
                  “We built Trisecure to give entrepreneurs the institutional-grade support they need without multi-vendor friction.”
                </h3>
                <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  With over a decade leading people operations, statutory audits, and organizational expansion across major brands including <strong className="text-white font-medium">Niyara Foods (Eggspert)</strong>, <strong className="text-white font-medium">Curefoods (EatFit / Maverix Platforms)</strong>, <strong className="text-white font-medium">Oh Delhi Foods</strong>, and <strong className="text-white font-medium">Nazeer Foods</strong>, Anurag Sharma founded Trisecure Solutions to bridge the gap between statutory compliance and business growth.
                </p>
              </div>

              {/* Core Competencies Badges */}
              <div>
                <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest block mb-3">
                  // Leadership Competencies
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {founderSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proven Career Milestones */}
              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-4">
                  // Executive Career Background
                </span>
                <div className="space-y-4">
                  {founderExperience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C9AF6B]/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <h4 className="font-serif text-lg font-bold text-white">
                          {exp.role}
                        </h4>
                        <span className="font-mono text-xs text-[#C9AF6B]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#7C8B6F] font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                        {exp.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMITMENT SECTION: Contrast Color Block (Olive Green) */}
      <section className="py-24 sm:py-32 bg-[#7C8B6F] text-[#F5F0E6] relative overflow-hidden">
        <div className="editorial-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-widest mb-4">
                <HeartHandshake className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="font-serif text-display-sub font-bold text-white tracking-tight leading-none">
                Commitment
              </h2>
            </div>

            <div className="lg:col-span-8 bg-white/[0.08] backdrop-blur-xs rounded-3xl p-8 sm:p-12 border border-white/20">
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal leading-relaxed mb-6">
                “At TriSecure Solutions, we pride ourselves on our client-centric approach. We understand that every business is unique, and we tailor our services to meet your specific needs.”
              </p>
              <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed font-light">
                Our team of experienced professionals is dedicated to providing you with the highest level of service, ensuring that you can focus on what you do best — <span className="underline decoration-[#C9AF6B] decoration-2 underline-offset-4 font-medium">running your business</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US: Editorial Numbered List */}
      <section className="py-28 sm:py-36 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="mb-16">
            <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-3">
              // Why TriSecure Stands Apart
            </span>
            <h2 className="font-serif text-display-sub font-bold text-[#1A1A16] tracking-tight">
              Why Choose Us
            </h2>
          </div>

          {/* Editorial Numbered Rows */}
          <div className="divide-y divide-[#1A1A16]/15 border-y border-[#1A1A16]/15">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group hover:bg-[#FAF6EE] transition-colors px-4 -mx-4 rounded-xl"
              >
                <div className="lg:col-span-2">
                  <span className="editorial-numeral-giant text-[#7C8B6F] font-light group-hover:text-[#1A1A16] transition-colors">
                    {item.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16] tracking-tight group-hover:text-[#7C8B6F] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Next Step Links */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[#1A1A16]/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#7C8B6F]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#7A7A70]">
                Institutional Governance // Pan-India Advisory
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/services" className="btn-editorial-primary" data-cursor="Services">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenConsultation()}
                className="btn-editorial-secondary"
                data-cursor="Consult"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
