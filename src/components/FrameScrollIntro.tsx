import React, { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 300;

interface FrameScrollIntroProps {
  onIntroComplete?: () => void;
}

export const FrameScrollIntro: React.FC<FrameScrollIntroProps> = ({ onIntroComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cached frame images & sampled background colors
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameColorsRef = useRef<string[]>(new Array(TOTAL_FRAMES));
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Helper to get frame path
  const getFrameUrl = useCallback((index: number) => {
    const num = String(index + 1).padStart(3, '0');
    return `/frames/frame_${num}.png`;
  }, []);

  // Fast helper to sample edge/corner color of an image
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

  // Draw current frame to canvas with dynamic edge-color matching and true High-DPI (Retina) scaling
  const drawFrame = useCallback(
    (img: HTMLImageElement | undefined, index: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

      const rect = canvas.getBoundingClientRect();
      const cssWidth = Math.round(rect.width);
      const cssHeight = Math.round(rect.height);

      if (cssWidth <= 0 || cssHeight <= 0) return;

      const dpr = window.devicePixelRatio || 1;
      const physicalWidth = Math.round(cssWidth * dpr);
      const physicalHeight = Math.round(cssHeight * dpr);

      // Synchronize canvas physical buffer dimensions with display size * DPR
      if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
        canvas.width = physicalWidth;
        canvas.height = physicalHeight;
      }

      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      // Scale context by DPR so all draw coordinates use CSS pixels without distortion
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
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

      // Fill canvas background with the exact same color of the frame edge
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cssWidth, cssHeight);

      // Source image dimensions (1824x1024 native PNG resolution)
      const imgWidth = img.naturalWidth || 1824;
      const imgHeight = img.naturalHeight || 1024;
      const imgAspect = imgWidth / imgHeight;
      const canvasAspect = cssWidth / cssHeight;

      let drawWidth = cssWidth;
      let drawHeight = cssHeight;
      let offsetX = 0;
      let offsetY = 0;

      const isPortrait = canvasAspect < 1.25 || cssWidth < 768;

      if (isPortrait) {
        // MOBILE / PORTRAIT: Fit 100% width so zero text is cropped
        drawWidth = cssWidth;
        drawHeight = Math.round(cssWidth / imgAspect);
        offsetX = 0;
        offsetY = Math.round((cssHeight - drawHeight) / 2);
      } else {
        // DESKTOP: High precision cover geometry
        if (canvasAspect > imgAspect) {
          drawWidth = cssWidth;
          drawHeight = Math.round(cssWidth / imgAspect);
          offsetX = 0;
          offsetY = Math.round((cssHeight - drawHeight) / 2);
        } else {
          drawHeight = cssHeight;
          drawWidth = Math.round(cssHeight * imgAspect);
          offsetX = Math.round((cssWidth - drawWidth) / 2);
          offsetY = 0;
        }
      }

      // Draw active frame centered on canvas in CSS pixels
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

    // 60FPS Render loop with dynamic frame and background update
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.12;
        const index = Math.round(currentFrameRef.current);

        const img = imagesRef.current[index] || imagesRef.current[0];
        if (img) {
          drawFrame(img, index);
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
      className="relative w-full h-[550vh] sm:h-[650vh] m-0 p-0 transition-colors duration-150"
    >
      {/* Pinned Sticky 100vh Viewport with Dynamic Frame-Matched Color */}
      <div
        ref={viewportRef}
        className="sticky top-0 left-0 w-screen h-screen h-[100dvh] overflow-hidden m-0 p-0 flex items-center justify-center transition-colors duration-150"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block m-0 p-0 pointer-events-none"
          style={{
            display: 'block',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
};
