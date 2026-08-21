import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FrameScrollIntro } from './components/FrameScrollIntro';
import { Hero } from './components/Hero';
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
      {/* Floating Fluid Island Navbar (Appears when Hero/Website content begins) */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Flow */}
      <main className="flex-1 w-full m-0 p-0">
        {/* 1. Full-Screen 100vw x 100vh Pinned Scroll Intro (HR -> Insurance -> Food -> Digital Marketing) */}
        <FrameScrollIntro />

        {/* 2. Hero Section (Appears cleanly in normal flow after animation reaches Frame 300) */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 3. 4 Core Practice Bento Service Directory */}
        <ServiceEcosystem onOpenConsultation={handleOpenConsultation} />

        {/* 4. Interactive Business Readiness Evaluator */}
        <ComplianceReadinessTool onOpenConsultation={handleOpenConsultation} />

        {/* 5. 4-Stage Engagement Process */}
        <HowWeHelp onOpenConsultation={() => handleOpenConsultation()} />

        {/* 6. Why TriSecure Credibility Pillars */}
        <WhyTriSecure onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. High-Value FAQ Accordion Section */}
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
