import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Home, Compass, Phone, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

interface NotFoundProps {
  onOpenConsultation: (service?: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onOpenConsultation }) => {
  const quickLinks = [
    { title: 'HR & Workforce', path: '/services/hr', code: '01' },
    { title: 'Insurance & Loans', path: '/services/insurance-loans', code: '02' },
    { title: 'Food Compliance (FSSAI)', path: '/services/food-compliance', code: '03' },
    { title: 'Digital Marketing', path: '/services/digital-marketing', code: '04' },
    { title: 'Statutory Licenses', path: '/licenses', code: '05' },
    { title: 'Advisory Pricing', path: '/pricing', code: '06' },
  ];

  return (
    <PageTransition>
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-32 sm:py-36 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        {/* Ambient Radial Highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C8B6F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9AF6B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="editorial-container relative z-10 max-w-4xl text-center space-y-8">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
            <span>ERROR 404 // DOSSIER NOT FOUND</span>
          </div>

          {/* Large Typographic 404 Display */}
          <div className="space-y-3">
            <h1 className="font-serif text-7xl sm:text-9xl font-bold tracking-tight text-[#1A1A16] leading-none">
              4<span className="italic font-normal text-[#7C8B6F]">0</span>4
            </h1>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A16]">
              The Requested Advisory Page Does Not Exist.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-xl mx-auto font-light leading-relaxed">
              The link you followed may have been updated, archived, or mistyped. Navigate back to our corporate directory or connect directly with our advisory desk.
            </p>
          </div>

          {/* Core Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/"
              className="btn-editorial-primary text-xs"
            >
              <Home className="w-4 h-4" />
              <span>Return to Headquarters (Home)</span>
            </Link>

            <button
              onClick={() => onOpenConsultation('General Advisory')}
              className="btn-editorial-secondary text-xs"
            >
              <Phone className="w-4 h-4 text-[#7C8B6F]" />
              <span>Direct Advisory Desk</span>
            </button>
          </div>

          {/* Quick Navigation Directory Grid */}
          <div className="pt-10 border-t border-[#1A1A16]/10 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0072EF]" />
                <span>Explore Practice Directories:</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#1A1A16]/10 hover:border-[#7C8B6F] hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#7C8B6F] block font-semibold">
                      // {item.code}
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#1A1A16] group-hover:text-[#0072EF] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7A7A70] group-hover:text-[#1A1A16] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
