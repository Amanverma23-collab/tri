import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { IntroSplitSection } from './components/IntroSplitSection';
import { SplitCurtainSection } from './components/SplitCurtainSection';
import { HRServicesSection } from './components/HRServicesSection';
import { InsuranceServicesSection } from './components/InsuranceServicesSection';
import { FoodComplianceSection } from './components/FoodComplianceSection';
import { DigitalMarketingSection } from './components/DigitalMarketingSection';
import { ComplianceReadinessTool } from './components/ComplianceReadinessTool';
import { HowWeHelp } from './components/HowWeHelp';
import { WhyTriSecure } from './components/WhyTriSecure';
import { FAQSection } from './components/FAQSection';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    } else {
      setPrefilledService('');
    }
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setPrefilledService('');
  };

  // Recalculate all ScrollTrigger pin boundaries cleanly
  useEffect(() => {
    const refreshTriggers = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshTriggers);
    const timer1 = setTimeout(refreshTriggers, 200);
    const timer2 = setTimeout(refreshTriggers, 800);

    return () => {
      window.removeEventListener('load', refreshTriggers);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#0a1118] flex flex-col font-sans selection:bg-[#0a1118] selection:text-white relative">
      {/* Floating Fluid Island Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Flow */}
      <main className="flex-1 w-full m-0 p-0">
        {/* 1. INTRO SPLASH SECTION: Pinned Cream Teaser Screen that Splits Open to Reveal Hero Section */}
        <IntroSplitSection onOpenConsultation={handleOpenConsultation} />

        {/* 2. HR Services Split Curtain Reveal */}
        <SplitCurtainSection
          id="split-reveal-hr"
          badge="PRACTICE VERTICAL 01 // TRISECURE"
          title="HR SERVICES"
          subtext="Recruitment • Payroll • Training • Compliance • Employee Relations"
          buttonText="EXPLORE HR SERVICES"
          serviceName="HR & Workforce Solutions"
          targetDetailsId="hr-details"
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 3. HR Services Detailed Information Section */}
        <HRServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Insurance & Loans Split Curtain Reveal */}
        <SplitCurtainSection
          id="split-reveal-insurance"
          badge="PRACTICE VERTICAL 02 // TRISECURE"
          title="INSURANCE & LOANS"
          subtext="Working Capital Limits • MSME Term Loans • Home Finance • Corporate Group Insurance"
          buttonText="EXPLORE LOAN & INSURANCE DESK"
          serviceName="Insurance & Loan Advisory"
          targetDetailsId="insurance-details"
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. Insurance & Loans Detailed Information Section */}
        <InsuranceServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Food Compliance Split Curtain Reveal */}
        <SplitCurtainSection
          id="split-reveal-food"
          badge="PRACTICE VERTICAL 03 // TRISECURE"
          title="FOOD COMPLIANCE"
          subtext="FSSAI Basic, State & Central • Health Trade License • DPCC Clearances • Shop Act Registration"
          buttonText="EXPLORE FOOD COMPLIANCE"
          serviceName="Food Compliance & Licensing"
          targetDetailsId="food-details"
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 7. Food Compliance Detailed Information Section */}
        <FoodComplianceSection onOpenConsultation={handleOpenConsultation} />

        {/* 8. Digital Marketing Split Curtain Reveal */}
        <SplitCurtainSection
          id="split-reveal-marketing"
          badge="PRACTICE VERTICAL 04 // TRISECURE"
          title="DIGITAL MARKETING"
          subtext="High-Intent Google Ads • Technical SEO Authority • Corporate Branding • CRO Funnels"
          buttonText="EXPLORE DIGITAL MARKETING"
          serviceName="Digital Marketing & Growth"
          targetDetailsId="marketing-details"
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 9. Digital Marketing Detailed Information Section */}
        <DigitalMarketingSection onOpenConsultation={handleOpenConsultation} />

        {/* 10. Interactive Business Readiness Evaluator */}
        <ComplianceReadinessTool onOpenConsultation={handleOpenConsultation} />

        {/* 11. 4-Stage Engagement Process */}
        <HowWeHelp onOpenConsultation={() => handleOpenConsultation()} />

        {/* 12. Why TriSecure Credibility Pillars */}
        <WhyTriSecure onOpenConsultation={() => handleOpenConsultation()} />

        {/* 13. High-Value FAQ Accordion Section */}
        <FAQSection onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Floating Quick Contact Widget */}
      <FloatingContactWidget onOpenConsultation={() => handleOpenConsultation()} />

      {/* Clean Light-Theme Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Lead Generation & Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        initialService={prefilledService}
      />
    </div>
  );
}

export default App;
