import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const TOTAL_FRAMES = 300;

interface FrameScrollIntroProps {
  onIntroComplete?: () => void;
}

export const FrameScrollIntro: React.FC<FrameScrollIntroProps> = ({ onIntroComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Cached frame images array
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Helper to get frame path
  const getFrameUrl = useCallback((index: number) => {
    const num = String(index + 1).padStart(3, '0');
    return `/frames/ezgif-frame-${num}.jpg`;
  }, []);

  // Draw current frame to canvas using full-bleed "cover" geometry
  const drawFrame = useCallback((img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Adjust canvas buffer resolution to physical pixels for crystal clarity
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Full-screen cover calculation
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      // Canvas is wider than 16:9
      drawWidth = width;
      drawHeight = width / imgAspect;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      // Canvas is taller than 16:9 (tablets, mobiles, portrait)
      drawHeight = height;
      drawWidth = height * imgAspect;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  // Preload frames in background
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      images[0] = firstImg;
      loadedCount++;
      setIsReady(true);
      drawFrame(firstImg);
    };

    // Load remaining frames progressively
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i === 0) continue;
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (!isMounted) return;
        images[i] = img;
        loadedCount++;
        setLoadPercent(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
      };

      img.onerror = () => {
        loadedCount++;
      };
    }

    imagesRef.current = images;

    return () => {
      isMounted = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [getFrameUrl, drawFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      const img = imagesRef.current[Math.round(currentFrameRef.current)] || imagesRef.current[0];
      if (img) {
        drawFrame(img);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Scroll listener & 60FPS Lerp loop
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Scroll progress from 0 (top of page) to 1 (end of 350vh container)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
      );

      targetFrameRef.current = targetFrame;

      if (progress >= 0.99 && onIntroComplete) {
        onIntroComplete();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth Lerp animation loop
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.2; // Silky smooth 60fps lerp
        const index = Math.round(currentFrameRef.current);
        setCurrentFrameIndex(index);

        const img = imagesRef.current[index] || imagesRef.current[0];
        if (img) {
          drawFrame(img);
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawFrame, onIntroComplete]);

  // Skip button click handler
  const handleSkipIntro = () => {
    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      id="scroll-intro-container"
      className="relative w-full h-[350vh] bg-black m-0 p-0"
    >
      {/* Pinned Sticky 100vh Viewport */}
      <div className="sticky top-0 left-0 w-screen h-screen h-[100dvh] overflow-hidden bg-black m-0 p-0">
        
        {/* Full-Screen Pure Canvas (Zero Margins, Zero Gaps, Full Viewport Bleed) */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover m-0 p-0 pointer-events-none"
        />

        {/* Minimal Unobtrusive Controls (Top-Right Skip Button) */}
        <div className="absolute top-6 right-6 z-30">
          <button
            onClick={handleSkipIntro}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[12px] font-mono font-medium tracking-wide transition-all shadow-lg cursor-pointer"
          >
            <span>Skip Intro</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Minimal Unobtrusive Bottom Progress Indicator */}
        <div className="absolute bottom-6 inset-x-0 z-30 px-6 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            <span>FRAME {String(currentFrameIndex + 1).padStart(3, '0')} / {TOTAL_FRAMES}</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-mono uppercase tracking-wider animate-bounce">
            <span>SCROLL TO PROGRESS</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};
