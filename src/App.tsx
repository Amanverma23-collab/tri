import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessIntro } from './components/BusinessIntro';
import { ServiceEcosystem } from './components/ServiceEcosystem';
import { ComplianceReadinessTool } from './components/ComplianceReadinessTool';
import { LocationSearch } from './components/LocationSearch';
import { HowWeHelp } from './components/HowWeHelp';
import { WhyTriSecure } from './components/WhyTriSecure';
import { TrustCompliance } from './components/TrustCompliance';
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
    <div className="min-h-screen bg-[#100904] text-[#ffedd7] selection:bg-[#382416] selection:text-[#ffedd7] flex flex-col font-sans">
      {/* Top Fixed Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <BusinessIntro onOpenConsultation={() => handleOpenConsultation()} />
        <ServiceEcosystem onOpenConsultation={handleOpenConsultation} />
        <ComplianceReadinessTool onOpenConsultation={handleOpenConsultation} />
        <LocationSearch onOpenConsultation={handleOpenConsultation} />
        <HowWeHelp onOpenConsultation={() => handleOpenConsultation()} />
        <WhyTriSecure onOpenConsultation={() => handleOpenConsultation()} />
        <TrustCompliance />
      </main>

      {/* Footer */}
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
