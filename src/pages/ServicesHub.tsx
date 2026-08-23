import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Users, Landmark, Utensils, Megaphone, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

interface ServicesHubProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServicesHub: React.FC<ServicesHubProps> = ({ onOpenConsultation }) => {
  const servicePanels = [
    {
      num: '01',
      title: 'HR Services',
      subtitle: 'Workforce Acquisition, Payroll Infrastructure & Labor Law Compliance',
      description:
        'Recruitment & staffing, timely payroll disbursement, structured employee development, statutory compliance, and healthy workplace relations.',
      link: '/services/hr',
      imageUrl: '/images/hr_hero.jpg',
      theme: 'cream',
      bgClass: 'bg-[#FAF6EE] text-[#1A1A16]',
      gradientOverlay: 'bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/92 to-[#FAF6EE]/75',
      borderClass: 'border-[#1A1A16]/10',
      icon: Users,
    },
    {
      num: '02',
      title: 'Insurance & Loans Services',
      subtitle: 'Asset Protection, Liability Underwriting & Capital Lending Desk',
      description:
        'Comprehensive risk assessment, customized policy procurement, claims arbitration, and fast approvals on business, personal, and mortgage financing.',
      link: '/services/insurance-loans',
      imageUrl: '/images/insurance_hero.jpg',
      theme: 'charcoal',
      bgClass: 'bg-[#1A1A16] text-[#F5F0E6]',
      gradientOverlay: 'bg-gradient-to-r from-[#1A1A16] via-[#1A1A16]/92 to-[#1A1A16]/75',
      borderClass: 'border-white/10',
      icon: Landmark,
    },
    {
      num: '03',
      title: 'Food Compliance',
      subtitle: 'FSSAI Licensing, Health Trade Sanctions & Environmental Clearances',
      description:
        'End-to-end statutory food licensing, QA framework deployment, hygiene audit readiness, staff certifications, and transparent compliance logging.',
      link: '/services/food-compliance',
      imageUrl: '/images/food_hero.jpg',
      theme: 'olive',
      bgClass: 'bg-[#7C8B6F] text-[#F5F0E6]',
      gradientOverlay: 'bg-gradient-to-r from-[#7C8B6F] via-[#7C8B6F]/92 to-[#7C8B6F]/80',
      borderClass: 'border-[#637157]',
      icon: Utensils,
    },
    {
      num: '04',
      title: 'Digital Marketing',
      subtitle: 'Digital Brand Building, Multi-Platform Ads & Visual Production',
      description:
        'High-intent web development, Google Business Optimization, full-funnel social advertising, technical SEO, and professional photo/video production.',
      link: '/services/digital-marketing',
      imageUrl: '/images/marketing_hero.jpg',
      theme: 'charcoal-alt',
      bgClass: 'bg-[#22221D] text-[#F5F0E6]',
      gradientOverlay: 'bg-gradient-to-r from-[#22221D] via-[#22221D]/92 to-[#22221D]/75',
      borderClass: 'border-white/10',
      icon: Megaphone,
    },
  ];

  return (
    <PageTransition>
      {/* 1. MASTHEAD: Oversized "Services" with "04" page marker */}
      <section className="relative pt-36 pb-16 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest">
              <span className="w-8 h-px bg-[#7C8B6F]" />
              <span>Practice Portfolio // Overview</span>
            </div>
            <div className="font-mono text-xs px-3.5 py-1 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold">
              04 VERTICALS
            </div>
          </div>

          <h1 className="font-serif text-display-giant text-[#1A1A16] font-bold tracking-tight">
            Services
          </h1>

          <p className="font-sans text-lg sm:text-2xl text-[#7A7A70] max-w-3xl font-light mt-4">
            Integrated multi-disciplinary advisory built to solve regulatory bottlenecks, optimize human capital, protect balance sheets, and drive growth.
          </p>
        </div>
      </section>

      {/* 2. FOUR STACKED CLICKABLE PANELS WITH BACKGROUND IMAGES */}
      <section className="bg-[#F5F0E6] py-14">
        <div className="editorial-container space-y-8">
          {servicePanels.map((panel, idx) => {
            const IconComp = panel.icon;
            return (
              <Link
                key={idx}
                to={panel.link}
                data-cursor="Explore"
                className={`relative block rounded-3xl p-8 sm:p-12 md:p-16 border overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-1.5 group ${panel.bgClass} ${panel.borderClass}`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={panel.imageUrl}
                    alt={panel.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 opacity-25 sm:opacity-30"
                  />
                  <div className={`absolute inset-0 ${panel.gradientOverlay}`} />
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Left Column: Number + Content */}
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm tracking-widest uppercase font-semibold text-[#C9AF6B] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Vertical {panel.num}</span>
                      </span>
                      <div className="w-8 h-8 rounded-full bg-current/10 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight group-hover:underline decoration-current underline-offset-8">
                      {panel.title}
                    </h2>

                    <p className="font-serif text-lg sm:text-xl italic opacity-85">
                      {panel.subtitle}
                    </p>

                    <p className="font-sans text-sm sm:text-base opacity-75 leading-relaxed font-light">
                      {panel.description}
                    </p>
                  </div>

                  {/* Right Column: Interactive Arrow Pill */}
                  <div className="flex items-center justify-end">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-current/20 flex items-center justify-center group-hover:bg-current/15 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. BOTTOM CROSS-LINK STRIP */}
      <section className="py-20 bg-[#1A1A16] text-[#F5F0E6] border-t border-white/10">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Looking for statutory license charges?
            </h3>
            <p className="font-sans text-sm text-white/70">
              Inspect our comprehensive FSSAI, MCD, Factory, and Shop & Establishment fee schedules.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/licenses" className="btn-editorial-light">
              <span>View Licenses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10">
              <span>Pricing Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
