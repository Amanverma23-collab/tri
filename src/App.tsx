import React, { useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Eagerly loaded for Instant Home Page Paint (Zero FCP latency)
import { Home } from './pages/Home';

// Route-Based Code-Split Dynamic Imports (Eliminates main bundle render blocking)
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
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then((m) => ({ default: m.TermsConditions })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

// Navigation & Global UI Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { ConsultationModal } from './components/ConsultationModal';
import { Preloader } from './components/Preloader';

import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { SEO } from './components/SEO';
import { CookieBanner } from './components/CookieBanner';
import { GoogleAnalyticsTracker } from './components/GoogleAnalyticsTracker';

gsap.registerPlugin(ScrollTrigger);

function AnimatedRoutes({
  onOpenConsultation,
}: {
  onOpenConsultation: (service?: string) => void;
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-[50vh]" />}>
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
      </Suspense>
    </AnimatePresence>
  );
}

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleOpenConsultation = (serviceName?: any) => {
    if (typeof serviceName === 'string' && serviceName.trim()) {
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
    <HelmetProvider>
      {/* Luxury Branded Preloader (First Visit per Session) */}
      <Preloader />
    <Router>
      {/* Dynamic Per-Page SEO Titles, Descriptions & Meta Tags */}
      <SEO />

      {/* Real-time Google Analytics & Route Pageview Tracker */}
      <GoogleAnalyticsTracker />

      <SmoothScrollProvider>
        <div className="min-h-screen bg-[#F5F0E6] text-[#1A1A16] flex flex-col font-sans relative selection:bg-[#1A1A16] selection:text-[#F5F0E6]">
          {/* Interactive Custom Cursor */}

          {/* Persistent Editorial Sticky Navbar */}
          <Navbar onOpenConsultation={handleOpenConsultation} />

          {/* Main Routed Content Area */}
          <main className="flex-1 w-full flex flex-col">
            <AnimatedRoutes onOpenConsultation={handleOpenConsultation} />
          </main>

          {/* Persistent Floating Consultation Pill */}

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
    </HelmetProvider>
  );
}

export default App;
