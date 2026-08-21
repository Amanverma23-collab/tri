import React, { useEffect, useRef, useCallback } from 'react';
import { Hero } from './Hero';

const TOTAL_FRAMES = 300;

interface FrameScrollIntroProps {
  onOpenConsultation: (service?: string) => void;
  onIntroComplete?: () => void;
}

export const FrameScrollIntro: React.FC<FrameScrollIntroProps> = ({
  onOpenConsultation,
  onIntroComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Split curtain refs for Phase 2
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const heroRevealRef = useRef<HTMLDivElement>(null);

  // Cached frame images & sampled background colors
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameColorsRef = useRef<string[]>(new Array(TOTAL_FRAMES));
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const splitProgressRef = useRef(0);
  const targetSplitProgressRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Helper to get frame path
  const getFrameUrl = useCallback((index: number) => {
    const num = String(index + 1).padStart(3, '0');
    return `/frames/ezgif-frame-${num}.jpg`;
  }, []);

  // Helper to sample edge/corner color of an image
  const sampleFrameColor = useCallback((img: HTMLImageElement): string => {
    try {
      const sampleCanvas = document.createElement('canvas');
      sampleCanvas.width = 1;
      sampleCanvas.height = 1;
      const sCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });
      if (sCtx) {
        sCtx.drawImage(img, 4, 4, 1, 1, 0, 0, 1, 1);
        const pixel = sCtx.getImageData(0, 0, 1, 1).data;
        return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      }
    } catch {
      // fallback
    }
    return '#0a1118';
  }, []);

  // Draw current frame to canvas
  const drawFrame = useCallback(
    (img: HTMLImageElement | undefined, index: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !img) return;

      const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2.5); // Retina DPR
      const rect = canvas.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);

      const physicalWidth = Math.round(width * dpr);
      const physicalHeight = Math.round(height * dpr);

      // Synchronize canvas physical dimensions
      if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
        canvas.width = physicalWidth;
        canvas.height = physicalHeight;
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Get or compute dynamic background color of this exact frame
      let bgColor = frameColorsRef.current[index];
      if (!bgColor) {
        bgColor = sampleFrameColor(img);
        frameColorsRef.current[index] = bgColor;
      }

      // Update background of container & viewport to seamlessly match the frame's color
      if (viewportRef.current) {
        viewportRef.current.style.backgroundColor = bgColor;
      }

      // Fill canvas background with the exact same color of the page
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, physicalWidth, physicalHeight);

      // Source image dimensions (1280x720)
      const imgWidth = img.naturalWidth || 1280;
      const imgHeight = img.naturalHeight || 720;
      const imgAspect = imgWidth / imgHeight; // 1.777 (16:9)
      const canvasAspect = physicalWidth / physicalHeight;

      let drawWidth = physicalWidth;
      let drawHeight = physicalHeight;
      let offsetX = 0;
      let offsetY = 0;

      const isPortrait = canvasAspect < 1.25 || width < 768;

      if (isPortrait) {
        // MOBILE / PORTRAIT: Fit 100% width so zero text is cropped
        drawWidth = physicalWidth;
        drawHeight = Math.round(physicalWidth / imgAspect);
        offsetX = 0;
        offsetY = Math.round((physicalHeight - drawHeight) / 2);
      } else {
        // DESKTOP: High precision cover geometry
        if (canvasAspect > imgAspect) {
          drawWidth = physicalWidth;
          drawHeight = Math.round(physicalWidth / imgAspect);
          offsetX = 0;
          offsetY = Math.round((physicalHeight - drawHeight) / 2);
        } else {
          drawHeight = physicalHeight;
          drawWidth = Math.round(physicalHeight * imgAspect);
          offsetX = Math.round((physicalWidth - drawWidth) / 2);
          offsetY = 0;
        }
      }

      // Draw active frame centered on canvas
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [sampleFrameColor]
  );

  // Preload frames in background
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      images[0] = firstImg;
      frameColorsRef.current[0] = sampleFrameColor(firstImg);
      drawFrame(firstImg, 0);
    };

    // Load remaining frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i === 0) continue;
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (!isMounted) return;
        images[i] = img;
        frameColorsRef.current[i] = sampleFrameColor(img);
      };
    }

    imagesRef.current = images;

    return () => {
      isMounted = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [getFrameUrl, drawFrame, sampleFrameColor]);

  // Window resize & orientation change handler
  useEffect(() => {
    const handleResize = () => {
      const idx = Math.round(currentFrameRef.current);
      const img = imagesRef.current[idx] || imagesRef.current[0];
      if (img) {
        drawFrame(img, idx);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [drawFrame]);

  // Scroll listener & 60FPS Lerp loop chaining Phase 1 (Video Scrub) -> Phase 2 (Curtain Split to Hero)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Overall Progress: 0 to 1 across the full pinned height
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));

      // PHASE 1: 0% to 75% scroll -> Scrub through frames 0 to 299
      // PHASE 2: 75% to 100% scroll -> Final frame (299) splits open as a curtain revealing Hero underneath
      const PHASE1_CUTOFF = 0.72;

      if (progress <= PHASE1_CUTOFF) {
        const p1Ratio = progress / PHASE1_CUTOFF;
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(p1Ratio * (TOTAL_FRAMES - 1)))
        );
        targetFrameRef.current = targetFrame;
        targetSplitProgressRef.current = 0; // Curtains closed
      } else {
        // Pinned on final frame (Frame 300)
        targetFrameRef.current = TOTAL_FRAMES - 1;
        // Phase 2 Curtain Split progress: 0 to 1
        const p2Ratio = (progress - PHASE1_CUTOFF) / (1 - PHASE1_CUTOFF);
        // Apply power2.inOut curve for premium motion
        const eased = p2Ratio < 0.5 ? 2 * p2Ratio * p2Ratio : -1 + (4 - 2 * p2Ratio) * p2Ratio;
        targetSplitProgressRef.current = Math.min(1, Math.max(0, eased));
      }

      if (progress >= 0.99 && onIntroComplete) {
        onIntroComplete();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60FPS Lerp loop
    const renderLoop = () => {
      // 1. Frame Lerp
      const diffFrame = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diffFrame) > 0.04) {
        currentFrameRef.current += diffFrame * 0.12;
        const index = Math.round(currentFrameRef.current);
        const img = imagesRef.current[index] || imagesRef.current[0];
        if (img) {
          drawFrame(img, index);
        }
      }

      // 2. Split Curtain & Hero Zoom Lerp
      const diffSplit = targetSplitProgressRef.current - splitProgressRef.current;
      if (Math.abs(diffSplit) > 0.001) {
        splitProgressRef.current += diffSplit * 0.15;
        const splitVal = splitProgressRef.current;

        // Animate Top and Bottom Curtains
        if (topCurtainRef.current) {
          topCurtainRef.current.style.transform = `translate3d(0, -${splitVal * 100}%, 0)`;
        }
        if (bottomCurtainRef.current) {
          bottomCurtainRef.current.style.transform = `translate3d(0, ${splitVal * 100}%, 0)`;
        }

        // Animate Hero content zoom-out reveal (1.05 -> 1.0) and opacity
        if (heroRevealRef.current) {
          const heroScale = 1.05 - splitVal * 0.05;
          heroRevealRef.current.style.transform = `scale3d(${heroScale}, ${heroScale}, 1)`;
          heroRevealRef.current.style.opacity = `${0.7 + splitVal * 0.3}`;
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

  return (
    <div
      ref={containerRef}
      id="scroll-intro-container"
      className="relative w-full h-[700vh] sm:h-[800vh] m-0 p-0 transition-colors duration-150"
    >
      {/* Pinned Sticky 100vh Viewport */}
      <div
        ref={viewportRef}
        className="sticky top-0 left-0 w-screen h-screen h-[100dvh] overflow-hidden m-0 p-0 flex items-center justify-center transition-colors duration-150 select-none"
      >
        {/* Layer 1 (Underneath): Hero Section (Revealed when final frame splits open) */}
        <div
          ref={heroRevealRef}
          className="absolute inset-0 z-10 w-full h-full overflow-y-auto overflow-x-hidden flex items-center bg-[#fafaf7] will-change-transform"
          style={{ transform: 'scale3d(1.05, 1.05, 1)', opacity: 0.7 }}
        >
          <Hero onOpenConsultation={onOpenConsultation} />
        </div>

        {/* Layer 2 (Middle): Active Video Scrub Canvas (Phase 1) */}
        <div className="absolute inset-0 z-20 w-full h-full pointer-events-none flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full block object-contain m-0 p-0"
            style={{
              filter: 'contrast(1.05) saturate(1.04) brightness(1.01)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitFontSmoothing: 'antialiased'
            }}
          />
        </div>

        {/* Layer 3 (Phase 2): Top Curtain Half (Clipped Top 50% of the Canvas / Final Frame) */}
        <div
          ref={topCurtainRef}
          className="absolute top-0 left-0 w-full h-[50.5vh] overflow-hidden z-30 pointer-events-none will-change-transform border-b border-[#0a1118]/10"
          style={{ transform: 'translate3d(0, 0%, 0)' }}
        >
          {/* Top 50% view of the final frame */}
          <div className="absolute top-0 left-0 w-full h-[100dvh] flex items-center justify-center">
            <img
              src="/frames/ezgif-frame-300.jpg"
              alt="Final Frame Top"
              className="w-full h-full object-contain"
              style={{
                filter: 'contrast(1.05) saturate(1.04) brightness(1.01)'
              }}
            />
          </div>
        </div>

        {/* Layer 4 (Phase 2): Bottom Curtain Half (Clipped Bottom 50% of the Canvas / Final Frame) */}
        <div
          ref={bottomCurtainRef}
          className="absolute bottom-0 left-0 w-full h-[50.5vh] overflow-hidden z-30 pointer-events-none will-change-transform border-t border-[#0a1118]/10"
          style={{ transform: 'translate3d(0, 0%, 0)' }}
        >
          {/* Bottom 50% view of the final frame */}
          <div className="absolute bottom-0 left-0 w-full h-[100dvh] flex items-center justify-center -translate-y-[0vh]">
            <img
              src="/frames/ezgif-frame-300.jpg"
              alt="Final Frame Bottom"
              className="w-full h-full object-contain"
              style={{
                filter: 'contrast(1.05) saturate(1.04) brightness(1.01)'
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
