import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Direct Page Imports (Zero loading screen, instant page paint)
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesHub } from './pages/ServicesHub';
import { HRServices } from './pages/services/HRServices';
import { InsuranceLoansServices } from './pages/services/InsuranceLoansServices';
import { FoodComplianceServices } from './pages/services/FoodComplianceServices';
import { DigitalMarketingServices } from './pages/services/DigitalMarketingServices';
import { Licenses } from './pages/Licenses';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { NotFound } from './pages/NotFound';

// Navigation & Global UI Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { ConsultationModal } from './components/ConsultationModal';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { SEO } from './components/SEO';
import { CookieBanner } from './components/CookieBanner';

gsap.registerPlugin(ScrollTrigger);

function AnimatedRoutes({
  onOpenConsultation,
}: {
  onOpenConsultation: (service?: string) => void;
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home onOpenConsultation={onOpenConsultation} />} />
        <Route path="/about" element={<About onOpenConsultation={onOpenConsultation} />} />
        <Route path="/services" element={<ServicesHub onOpenConsultation={onOpenConsultation} />} />
        <Route path="/services/hr" element={<HRServices onOpenConsultation={onOpenConsultation} />} />
        <Route
          path="/services/insurance-loans"
          element={<InsuranceLoansServices onOpenConsultation={onOpenConsultation} />}
        />
        <Route
          path="/services/food-compliance"
          element={<FoodComplianceServices onOpenConsultation={onOpenConsultation} />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketingServices onOpenConsultation={onOpenConsultation} />}
        />
        <Route path="/licenses" element={<Licenses onOpenConsultation={onOpenConsultation} />} />
        <Route path="/pricing" element={<Pricing onOpenConsultation={onOpenConsultation} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy onOpenConsultation={onOpenConsultation} />} />
        <Route path="/terms" element={<TermsConditions onOpenConsultation={onOpenConsultation} />} />
        <Route path="*" element={<NotFound onOpenConsultation={onOpenConsultation} />} />
      </Routes>
    </AnimatePresence>
  );
}

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
    <Router>
      {/* Dynamic Per-Page SEO Titles, Descriptions & Meta Tags */}
      <SEO />

      <SmoothScrollProvider>
        <div className="min-h-screen bg-[#F5F0E6] text-[#1A1A16] flex flex-col font-sans relative selection:bg-[#1A1A16] selection:text-[#F5F0E6]">
          {/* Interactive Custom Cursor */}
          <CustomCursor />

          {/* Persistent Editorial Sticky Navbar */}
          <Navbar onOpenConsultation={handleOpenConsultation} />

          {/* Main Routed Content Area */}
          <main className="flex-1 w-full flex flex-col">
            <AnimatedRoutes onOpenConsultation={handleOpenConsultation} />
          </main>

          {/* Persistent Floating Consultation Pill */}
          <FloatingContactWidget onOpenConsultation={() => handleOpenConsultation()} />

          {/* Minimal Glassmorphic Cookie Consent Banner */}
          <CookieBanner />

          {/* Persistent Editorial Footer */}
          <Footer onOpenConsultation={handleOpenConsultation} />

          {/* Central Consultation Lead Modal */}
          <ConsultationModal
            isOpen={consultationOpen}
            onClose={handleCloseConsultation}
            initialService={prefilledService}
          />
        </div>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
