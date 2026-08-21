import React, { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 300;

interface FrameScrollIntroProps {
  onIntroComplete?: () => void;
}

export const FrameScrollIntro: React.FC<FrameScrollIntroProps> = ({ onIntroComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Draw current frame to canvas with Ultra-High-Definition DPR scaling & High-Quality interpolation
  const drawFrame = useCallback((img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2.5); // Sharp Retina DPR scaling
    const rect = canvas.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);

    const physicalWidth = Math.round(width * dpr);
    const physicalHeight = Math.round(height * dpr);

    // Synchronize physical canvas buffer
    if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
      canvas.width = physicalWidth;
      canvas.height = physicalHeight;
    }

    // Reset transformation matrix & configure high quality bicubic smoothing
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Source image dimensions
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = physicalWidth / physicalHeight;

    let drawWidth = physicalWidth;
    let drawHeight = physicalHeight;
    let offsetX = 0;
    let offsetY = 0;

    // Full-screen cover geometry with subpixel precision
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

    // Clear and draw with high quality
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, physicalWidth, physicalHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload and decode frames in background
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      images[0] = firstImg;
      drawFrame(firstImg);
    };

    // Load remaining frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i === 0) continue;
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (!isMounted) return;
        images[i] = img;
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

  // Window resize & orientation change handler
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

  // Scroll listener & smooth 60FPS Lerp loop
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

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

    // 60FPS Render loop with high-fidelity frame switching
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.12;
        const index = Math.round(currentFrameRef.current);

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

  return (
    <div
      ref={containerRef}
      id="scroll-intro-container"
      className="relative w-full h-[650vh] bg-black m-0 p-0"
    >
      {/* Pinned Sticky 100vh Viewport */}
      <div className="sticky top-0 left-0 w-screen h-screen h-[100dvh] overflow-hidden bg-black m-0 p-0 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover m-0 p-0 pointer-events-none"
          style={{
            filter: 'contrast(1.06) saturate(1.05) brightness(1.02)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased'
          }}
        />
      </div>
    </div>
  );
};
