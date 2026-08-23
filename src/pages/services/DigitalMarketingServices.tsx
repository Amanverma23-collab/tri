import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SplitRevealSection, SplitSubItem } from '../../components/SplitRevealSection';
import { PageTransition } from '../../components/PageTransition';

interface DigitalMarketingServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const DigitalMarketingServices: React.FC<DigitalMarketingServicesProps> = ({
  onOpenConsultation,
}) => {
  const marketingSubItems: SplitSubItem[] = [
    {
      title: 'High-Intent Web Development',
      description: 'Custom informative and e-commerce websites engineered for lightning load times, brand prestige, and seamless conversions.',
      tag: 'Web & UI/UX',
    },
    {
      title: 'Full-Funnel Performance Ads',
      description: 'Data-backed Google Ads, Meta Ads, and social campaigns optimized for customer acquisition and verified ROAS.',
      tag: 'Paid Growth',
    },
    {
      title: 'Corporate Brand Identity',
      description: 'Logo systems, stationery, visiting cards, and brand guidelines that project authority across all touchpoints.',
      tag: 'Identity & Design',
    },
    {
      title: 'Search Authority & Local SEO',
      description: 'Google Business Listing supremacy, keyword ranking, and reputation review management to dominate local queries.',
      tag: 'Organic Search',
    },
    {
      title: 'Commercial Visual Production',
      description: 'Corporate film shoots, high-resolution product photography, and dynamic video editing for digital campaigns.',
      tag: 'Visual Studio',
    },
  ];

  const columnA = [
    { title: 'Informative Business Website', desc: 'Bespoke responsive corporate websites tailored to establish industry credibility and capture qualified inbound leads.' },
    { title: 'E-Commerce Website', desc: 'Scalable digital storefronts with secure payment gateways, inventory management, and frictionless checkout flows.' },
    { title: 'Logo Design', desc: 'Distinctive, memorable emblem and typography logo marks designed to embody your company’s core values.' },
    { title: 'Visiting Card & Letter Head Design', desc: 'Premium executive corporate stationery, business cards, and official digital documentation kits.' },
    { title: 'Google Business Listing & Review', desc: 'Local search optimization, map ranking dominance, and structured review management to boost customer trust.' },
    { title: 'Digital & Social Media Handling', desc: 'Consistent, curated feed content and active community management across Instagram, LinkedIn, and Facebook.' },
    { title: 'Instagram Ads & Facebook Ads', desc: 'Precision demographic and behavioral micro-targeting to drive lower cost-per-lead and direct sales.' },
  ];

  const columnB = [
    { title: 'Brand Strategy', desc: 'Comprehensive market positioning, competitor analysis, tone of voice, and value proposition blueprints.' },
    { title: 'Social Media Management', desc: 'Strategic calendar curation, engagement tracking, community interactions, and organic audience cultivation.' },
    { title: 'Search Engine Optimization (SEO)', desc: 'On-page technical hygiene, backlink authority architecture, and content optimization to capture top Google ranks.' },
    { title: 'Ad Management', desc: 'End-to-end paid media lifecycle: A/B creative testing, bidding algorithm tuning, retargeting funnels, and ROI reporting.' },
    { title: 'Corporate Film Production', desc: 'High-concept brand narrative films, founder interviews, factory walkthroughs, and promotional videos.' },
    { title: 'Photoshoot + Video Shoot', desc: 'On-location studio-grade photography and 4K videography covering products, team portraits, and corporate facilities.' },
    { title: 'Image & Video Editing', desc: 'Professional post-production color grading, sound design, motion graphics, and short-form video reels.' },
  ];

  return (
    <PageTransition>
      {/* 1. HERO: Split Curtain Reveal for DIGITAL MARKETING with Editorial Hero Image */}
      <SplitRevealSection
        id="marketing-hero"
        badge="VERTICAL 04 // DIGITAL GROWTH & MEDIA"
        title="DIGITAL MARKETING"
        subtitle="Web Engineering, Paid Performance & Studio Production"
        subtext="Transforming corporate visibility into sustained revenue growth through high-conversion digital ecosystems, search dominance, and cinema-grade brand narratives."
        imageUrl="/images/marketing_hero.jpg"
        subItems={marketingSubItems}
        theme="charcoal"
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. TWO-COLUMN EDITORIAL SERVICE BREAKDOWN */}
      <section className="py-28 bg-[#F5F0E6] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-3">
                <span className="w-8 h-px bg-[#7C8B6F]" />
                <span>Scope of Capabilities // 04.A</span>
              </div>
              <h2 className="font-serif text-display-sub font-bold text-[#1A1A16] tracking-tight">
                Digital & Creative Directory
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md">
              A comprehensive suite covering full digital infrastructure, targeted acquisition, and brand production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Column A */}
            <div className="space-y-6">
              <div className="p-4 bg-[#1A1A16] text-[#F5F0E6] rounded-2xl flex items-center justify-between">
                <span className="font-serif text-xl font-bold">Category A: Digital Presence & Acquisition</span>
                <span className="font-mono text-xs text-[#C9AF6B]">07 Services</span>
              </div>

              <div className="space-y-4">
                {columnA.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#1A1A16]/10 hover:border-[#7C8B6F] transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="font-mono text-xs text-[#7C8B6F] font-bold">A.0{idx + 1}</span>
                          <h3 className="font-serif text-xl font-bold text-[#1A1A16] group-hover:text-[#7C8B6F] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-sans text-sm text-[#7A7A70] leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B */}
            <div className="space-y-6">
              <div className="p-4 bg-[#7C8B6F] text-[#F5F0E6] rounded-2xl flex items-center justify-between">
                <span className="font-serif text-xl font-bold">Category B: Strategy, SEO & Visual Studio</span>
                <span className="font-mono text-xs text-white">07 Services</span>
              </div>

              <div className="space-y-4">
                {columnB.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#1A1A16]/10 hover:border-[#C9AF6B] transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="font-mono text-xs text-[#C9AF6B] font-bold">B.0{idx + 1}</span>
                          <h3 className="font-serif text-xl font-bold text-[#1A1A16] group-hover:text-[#C9AF6B] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-sans text-sm text-[#7A7A70] leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEQUENTIAL PAGE NAVIGATION */}
      <section className="py-20 bg-[#1A1A16] text-[#F5F0E6] border-t border-white/10">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase block mb-2">
              Navigation Index //
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Explore More Practices
            </h3>
            <p className="font-sans text-sm text-white/70 mt-1">
              Return to our central Services Directory or consult our growth marketing team.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/services"
              className="btn-editorial-secondary text-white border-white/30 hover:bg-white/10 flex items-center gap-2"
              data-cursor="Hub"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
            <button
              onClick={() => onOpenConsultation('Digital Marketing')}
              className="btn-editorial-light"
            >
              <span>Consult Growth Team</span>
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
