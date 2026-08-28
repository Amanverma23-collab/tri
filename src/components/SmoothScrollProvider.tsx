import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean; duration?: number }) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Premium studio-site gliding scroll configuration (like storeyarchitecture.co.uk)
    const lenis = new Lenis({
      duration: 1.4,                                         // weighted, gliding feel
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),  // custom exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,                                  // controlled, less jumpy wheel input
      touchMultiplier: 1.8,                                  // responsive touch on mobile
      infinite: false,
      syncTouch: true,                                       // smooth mobile momentum
      syncTouchLerp: 0.075,                                  // buttery touch interpolation
    });

    lenisRef.current = lenis;

    // CRITICAL: Sync Lenis scroll with GSAP ScrollTrigger on every frame
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis with GSAP's ticker for frame-perfect sync
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On route change: immediately reset scroll to top without delay, then refresh ScrollTrigger
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const timer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const timer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: { offset?: number; immediate?: boolean; duration?: number }
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: options?.immediate ? 'auto' : 'smooth' });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
