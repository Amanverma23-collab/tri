import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
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
      {/* Floating Fluid Island Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Step 1: Swiss Editorial Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Step 2: Asymmetrical Bento Service Ecosystem */}
        <ServiceEcosystem onOpenConsultation={handleOpenConsultation} />

        {/* Step 3: Interactive Business Readiness Evaluator */}
        <ComplianceReadinessTool onOpenConsultation={handleOpenConsultation} />

        {/* Step 3: 4-Stage Operational Process */}
        <HowWeHelp onOpenConsultation={() => handleOpenConsultation()} />

        {/* Step 3: Why TriSecure Credibility Pillars */}
        <WhyTriSecure onOpenConsultation={() => handleOpenConsultation()} />

        {/* Step 4: High-Value FAQ Accordion Section */}
        <FAQSection onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Step 4: Floating Quick Contact & Call Action */}
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
