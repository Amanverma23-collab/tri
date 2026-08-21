import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';

const TOTAL_FRAMES = 300;

export const FrameScrollIntro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cached images array
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Preload frames
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const getFrameUrl = (idx: number) => {
      const num = String(idx + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${num}.jpg`;
    };

    // Preload all 300 frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (!isMounted) return;
        images[i] = img;
        loadedCount++;
        const prog = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        setLoadProgress(prog);

        // Draw first frame immediately
        if (i === 0 && canvasRef.current) {
          renderFrame(img);
        }

        if (loadedCount >= 20) {
          setIsLoaded(true);
        }
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
  }, []);

  // Draw image to canvas with perfect aspect scaling
  const renderFrame = (img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Calculate aspect ratio containment (object-contain with zero stretch)
    const imgAspect = img.naturalWidth / img.naturalHeight || 16 / 9;
    const canvasAspect = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = rect.height;
      drawWidth = drawHeight * imgAspect;
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = rect.width;
      drawHeight = drawWidth / imgAspect;
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Scroll listener with 60FPS LERP
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Progress from 0 to 1
      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      const frame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))));
      targetFrameRef.current = frame;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth LERP animation loop
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.18; // Smooth physics
        const index = Math.round(currentFrameRef.current);
        setCurrentFrameIndex(index);

        const img = imagesRef.current[index] || imagesRef.current[0];
        if (img) {
          renderFrame(img);
        }
      }
      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const handleSkipToHero = () => {
    const heroElem = document.getElementById('hero-section');
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] bg-[#fafaf7] text-[#0a1118]"
    >
      {/* Pinned Fullscreen Sticky Container */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 border-b border-[#e5e4de]">
        
        {/* Subtle Hairline Paper Grid */}
        <div className="absolute inset-0 bg-alabaster-grid pointer-events-none opacity-40" />

        {/* Top Minimalist HUD Header */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between pt-2">
          {/* Brand Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e5e4de] bg-white/90 backdrop-blur-md text-[#0a1118] text-[11px] font-mono font-bold uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-pulse" />
            <span>TRISECURE SOLUTIONS // INTRO SEQUENCE</span>
          </div>

          {/* Frame Counter & Skip Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#e5e4de] bg-white/80 backdrop-blur-md text-[11px] font-mono text-[#64748b]">
              <span>FRAME {String(currentFrameIndex + 1).padStart(3, '0')} / {TOTAL_FRAMES}</span>
              <div className="w-16 h-1 bg-[#e5e4de] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#047857] transition-all duration-75"
                  style={{ width: `${((currentFrameIndex + 1) / TOTAL_FRAMES) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={handleSkipToHero}
              className="text-[11px] font-mono font-semibold uppercase px-3.5 py-1.5 rounded-full border border-[#e5e4de] bg-white text-[#0a1118] hover:bg-[#0a1118] hover:text-white transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Skip Intro</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Full-Screen Pure Canvas Animation (No Clashing Overlapping Text) */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-12 pointer-events-none z-10">
          <div className="w-full max-w-5xl h-[78vh] sm:h-[82vh] flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom Minimalist Scroll Prompt */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between pb-2 border-t border-[#e5e4de]/60 pt-4">
          <div className="text-[11px] font-mono text-[#64748b] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#047857]" />
            <span>Scroll down to play animation & enter website</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#047857] uppercase tracking-wider animate-bounce">
            <span>SCROLL TO ENTER</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};
