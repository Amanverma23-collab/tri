import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;

interface FrameScrollHeroProps {
  onOpenConsultation: (service?: string) => void;
}

export const FrameScrollHero: React.FC<FrameScrollHeroProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);

  // Helper to format frame path
  const getFrameUrl = useCallback((index: number) => {
    const num = String(index + 1).padStart(3, '0');
    return `/frames/frame_${num}.png`;
  }, []);

  // DPR-corrected draw frame on canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== Math.round(rect.width * dpr) || canvas.height !== Math.round(rect.height * dpr)) {
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Clear and draw image with object-cover fit
    ctx.clearRect(0, 0, rect.width, rect.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = rect.width;
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      drawHeight = rect.height;
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));

        if (i === 0) {
          drawFrame(0);
        }

        if (loadedCount >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, [getFrameUrl, drawFrame]);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // GSAP ScrollTrigger Scrub setup
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(self.progress * (TOTAL_FRAMES - 1))
          );
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        },
      });

      // Overlay text animations tied to scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 0.5,
        },
      })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, 0.05)
        .to(textRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, 0.2)
        .to([headlineRef.current, textRef.current], { opacity: 0.15, y: -40, duration: 0.3 }, 0.75);

      return () => {
        st.kill();
      };
    }, containerRef);

    // Initial draw
    drawFrame(0);

    return () => ctx.revert();
  }, [isLoaded, drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#1A1A16]">
      {/* Canvas rendering 300 frames */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Subtle Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A16]/80 via-transparent to-[#1A1A16]/50 pointer-events-none z-10" />

      {/* Loading Screen Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-40 bg-[#1A1A16] flex flex-col items-center justify-center p-6 text-[#F5F0E6]">
          <div className="w-16 h-16 rounded-2xl bg-[#7C8B6F] flex items-center justify-center mb-6 shadow-2xl animate-pulse">
            <ShieldCheck className="w-9 h-9 text-[#1A1A16]" />
          </div>
          <h2 className="font-serif text-2xl tracking-wider font-bold mb-2">
            TRISECURE SOLUTIONS
          </h2>
          <p className="font-mono text-xs text-[#C9AF6B] tracking-widest uppercase mb-6">
            Loading Editorial Experience // {loadingProgress}%
          </p>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C9AF6B] transition-all duration-200"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Hero Typography Overlay (Scrub Animated) */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-16 editorial-container">
        {/* Top Spacer */}
        <div className="pt-20 sm:pt-24">
          <div
            ref={headlineRef}
            className="opacity-0 translate-y-6 transition-all duration-700 max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1A1A16]/70 backdrop-blur-md border border-[#C9AF6B]/40 text-[#C9AF6B] font-mono text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7C8B6F]" />
              <span>TRISECURE SOLUTIONS</span>
            </div>
            <h1 className="font-serif text-display-hero text-[#F5F0E6] font-bold tracking-tight text-balance leading-none">
              Business Solutions, Simplified
            </h1>
          </div>
        </div>

        {/* Bottom Subheadline & Scroll Indicator */}
        <div
          ref={textRef}
          className="opacity-0 translate-y-6 pb-6 sm:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <p className="font-sans text-base sm:text-xl text-[#F5F0E6]/85 max-w-xl leading-relaxed font-light">
            Comprehensive HR, Insurance, Loans, Food Compliance & Digital Marketing services for growing businesses.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="btn-editorial-light"
              data-cursor="Consult"
            >
              <span>Consult Advisory</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#F5F0E6]/60 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9AF6B] animate-ping" />
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
