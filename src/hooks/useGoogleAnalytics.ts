import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Configurable GA4 Measurement ID (Can be overridden via .env VITE_GA_MEASUREMENT_ID)
const GA_MEASUREMENT_ID =
  (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || 'G-TRISECURE26';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  // 1. Initialize Google Tag Manager / gtag.js Script
  useEffect(() => {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer?.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // Handled dynamically on route changes
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  // 2. Track Route Changes dynamically as Pageviews
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  // 3. Custom Event Tracker Helper
  const trackEvent = (
    action: string,
    params: Record<string, any> = {}
  ) => {
    if (window.gtag) {
      window.gtag('event', action, {
        ...params,
        timestamp: new Date().toISOString(),
      });
    }
  };

  return { trackEvent };
};
