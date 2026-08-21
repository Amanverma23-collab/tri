import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FrameScrollIntro } from './components/FrameScrollIntro';
import { Hero } from './components/Hero';
import { SplitCurtainSection } from './components/SplitCurtainSection';
import { HRServicesSection } from './components/HRServicesSection';
import { InsuranceServicesSection } from './components/InsuranceServicesSection';
import { ServiceEcosystem } from './components/ServiceEcosystem';
import { ComplianceReadinessTool } from './components/ComplianceReadinessTool';
import { HowWeHelp } from './components/HowWeHelp';
import { WhyTriSecure } from './components/WhyTriSecure';
import { FAQSection } from './components/FAQSection';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

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

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#0a1118] flex flex-col font-sans selection:bg-[#0a1118] selection:text-white relative">
      {/* Floating Fluid Island Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Flow */}
      <main className="flex-1 w-full m-0 p-0">
        {/* 1. Full-Screen 100vw x 100vh Pinned Scroll Intro */}
        <FrameScrollIntro />

        {/* 2. Hero Section (Commanding Masthead & Double-Bezel Directory) */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 3. HR Services Split Curtain Reveal */}
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

        {/* 4. HR Services Comprehensive Detailed Dossier */}
        <HRServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Insurance & Loans Split Curtain Reveal */}
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

        {/* 6. Insurance & Loans Comprehensive Detailed Dossier */}
        <InsuranceServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. 4 Core Practice Bento Service Directory */}
        <ServiceEcosystem onOpenConsultation={handleOpenConsultation} />

        {/* 8. Interactive Business Readiness Evaluator */}
        <ComplianceReadinessTool onOpenConsultation={handleOpenConsultation} />

        {/* 9. 4-Stage Engagement Process */}
        <HowWeHelp onOpenConsultation={() => handleOpenConsultation()} />

        {/* 10. Why TriSecure Credibility Pillars */}
        <WhyTriSecure onOpenConsultation={() => handleOpenConsultation()} />

        {/* 11. High-Value FAQ Accordion Section */}
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
