import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

// Navigation & Global UI Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { ConsultationModal } from './components/ConsultationModal';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';

// Lazy-loaded routes for optimal performance
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const ServicesHub = lazy(() => import('./pages/ServicesHub').then((m) => ({ default: m.ServicesHub })));
const HRServices = lazy(() => import('./pages/services/HRServices').then((m) => ({ default: m.HRServices })));
const InsuranceLoansServices = lazy(() =>
  import('./pages/services/InsuranceLoansServices').then((m) => ({ default: m.InsuranceLoansServices }))
);
const FoodComplianceServices = lazy(() =>
  import('./pages/services/FoodComplianceServices').then((m) => ({ default: m.FoodComplianceServices }))
);
const DigitalMarketingServices = lazy(() =>
  import('./pages/services/DigitalMarketingServices').then((m) => ({ default: m.DigitalMarketingServices }))
);
const Licenses = lazy(() => import('./pages/Licenses').then((m) => ({ default: m.Licenses })));
const Pricing = lazy(() => import('./pages/Pricing').then((m) => ({ default: m.Pricing })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));

gsap.registerPlugin(ScrollTrigger);

// Minimal Branded Route Loading Fallback
const PageLoadingFallback = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-[#1A1A16]">
    <div className="w-12 h-12 rounded-xl bg-[#7C8B6F] flex items-center justify-center mb-4 animate-pulse">
      <ShieldCheck className="w-6 h-6 text-[#1A1A16]" />
    </div>
    <span className="font-mono text-xs uppercase tracking-widest text-[#7C8B6F]">
      TRISECURE // Loading Page
    </span>
  </div>
);

function AnimatedRoutes({
  onOpenConsultation,
}: {
  onOpenConsultation: (service?: string) => void;
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoadingFallback />}>
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
          <Route path="*" element={<Home onOpenConsultation={onOpenConsultation} />} />
        </Routes>
      </Suspense>
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
