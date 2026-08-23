import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';

interface FrameScrollAnimationProps {
  onOpenConsultation: (service?: string) => void;
}

const TOTAL_FRAMES = 300;

export const FrameScrollAnimation: React.FC<FrameScrollAnimationProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(1);

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
      return `/frames/frame_${num}.png`;
    };

    // Load initial essential batch first (0 to 30) for instant rendering
    const loadBatch = async () => {
      // First 30 frames
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!isMounted) return;
        const img = new Image();
        img.src = getFrameUrl(i);
        
        img.onload = () => {
          if (!isMounted) return;
          images[i] = img;
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));

          // Once first frame is ready, draw immediately
          if (i === 0 && canvasRef.current) {
            renderFrame(img);
          }

          if (loadedCount >= 30) {
            setImagesLoaded(true);
          }
        };

        img.onerror = () => {
          loadedCount++;
        };
      }
      imagesRef.current = images;
    };

    loadBatch();

    return () => {
      isMounted = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Draw image to canvas with cover/contain scaling
  const renderFrame = (img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions based on display size & pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Calculate aspect ratio containment
    const imgAspect = img.naturalWidth / img.naturalHeight || 16 / 9;
    const canvasAspect = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    // Cover or Contain based on aesthetics (contain gives clean crisp object presentation)
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

  // Scroll listener & smooth lerp animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable <= 0) return;

      // Progress from 0 to 1
      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      
      // Calculate target frame
      const frame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))));
      targetFrameRef.current = frame;

      // Update milestone for content fade
      if (progress < 0.25) {
        setActiveMilestone(1);
      } else if (progress < 0.55) {
        setActiveMilestone(2);
      } else if (progress < 0.82) {
        setActiveMilestone(3);
      } else {
        setActiveMilestone(4);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60FPS Lerp loop for silky smooth scrubbing
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.2; // Smooth lerp factor
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

  return (
    <div
      ref={containerRef}
      className="relative h-[350vh] bg-[#fafaf7] text-[#0a1118]"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 border-b border-[#e5e4de]">
        
        {/* Background Subtle Hairline Grid */}
        <div className="absolute inset-0 bg-alabaster-grid pointer-events-none opacity-60" />

        {/* Center 3D Frame Sequence Canvas */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-full max-w-4xl h-[65vh] sm:h-[75vh] flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Top Operational Status Bar */}
        <div className="relative z-20 max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e5e4de] bg-white/90 backdrop-blur-md text-[#0a1118] text-[11px] font-mono font-semibold uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-pulse" />
            <span>INTERACTIVE SCROLL SEQUENCE // TRISECURE</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-[#64748b] uppercase">
            <span>FRAME {String(currentFrameIndex + 1).padStart(3, '0')} / {TOTAL_FRAMES}</span>
            <div className="w-20 h-1 bg-[#e5e4de] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#047857] transition-all duration-75"
                style={{ width: `${((currentFrameIndex + 1) / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Editorial Content Moments based on Scroll Milestones */}
        <div className="relative z-20 max-w-6xl mx-auto w-full flex-1 flex items-center">
          
          {/* Milestone 1: Intro Command */}
          {activeMilestone === 1 && (
            <div className="max-w-xl animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] text-[10px] font-mono font-bold uppercase mb-3">
                01 // SINGLE-WINDOW BUSINESS ADVISORY
              </div>
              <h1 className="text-[36px] sm:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.98] text-[#0a1118] mb-4">
                Statutory Compliance, <br />
                Human Capital & <br />
                <span className="text-[#047857]">Working Credit.</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] text-[#475569] leading-relaxed mb-6">
                Single-window institutional advisory for FSSAI food licensing, workforce payroll, banking loan syndication, and digital marketing across India.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenConsultation('General Business Advisory')}
                  className="btn-island-primary"
                >
                  <span>INITIATE ENGAGEMENT</span>
                  <div className="btn-island-icon">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Milestone 2: Food & Labour Compliance */}
          {activeMilestone === 2 && (
            <div className="max-w-xl animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] text-[10px] font-mono font-bold uppercase mb-3">
                02 // STATUTORY CERTAINTY
              </div>
              <h2 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
                Zero-Rejection Food & <br />
                <span className="text-[#047857]">Labour Compliance.</span>
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#475569] leading-relaxed mb-5">
                Official FoSCoS portal filings, MCD & BMC health trade licenses, DPCC clearances, and statutory payroll with EPF/ESIC registers.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['FSSAI Central/State', 'MCD Health Trade', 'DPCC Consent', 'Shop Act', 'EPF & ESIC'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white border border-[#e5e4de] text-[11px] font-mono font-semibold text-[#0a1118] shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenConsultation('Food & Statutory Compliance')}
                className="btn-island-secondary text-[12px] font-bold"
              >
                <span>EXPLORE COMPLIANCE SCOPE →</span>
              </button>
            </div>
          )}

          {/* Milestone 3: Capital & Credit Facilities */}
          {activeMilestone === 3 && (
            <div className="max-w-xl animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] text-[10px] font-mono font-bold uppercase mb-3">
                03 // INSTITUTIONAL FINANCING
              </div>
              <h2 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
                Multi-Bank Loans & <br />
                <span className="text-[#047857]">Working Capital.</span>
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#475569] leading-relaxed mb-5">
                Syndicated credit lines, MSME term expansion loans, machinery funding, and corporate insurance with lowest market interest rates.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Working Capital CC/OD', 'MSME Term Loans', 'Home Loans', 'Group Health GMC'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white border border-[#e5e4de] text-[11px] font-mono font-semibold text-[#0a1118] shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenConsultation('Business Loans & Working Capital')}
                className="btn-island-secondary text-[12px] font-bold"
              >
                <span>CHECK LOAN ELIGIBILITY →</span>
              </button>
            </div>
          )}

          {/* Milestone 4: Scaling & Consultation CTA */}
          {activeMilestone === 4 && (
            <div className="max-w-xl animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] text-[10px] font-mono font-bold uppercase mb-3">
                04 // READY TO SCALE
              </div>
              <h2 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
                Build & Grow Without <br />
                <span className="text-[#047857]">Operational Friction.</span>
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#475569] leading-relaxed mb-6">
                Connect directly with our senior compliance officers, loan advisors, and HR managers for a complimentary diagnostic audit.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Comprehensive Business Solutions')}
                  className="btn-island-primary"
                >
                  <span>BOOK FREE CONSULTATION</span>
                  <div className="btn-island-icon">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </button>
                <a
                  href="#services"
                  className="btn-island-secondary text-[12px] font-bold"
                >
                  <span>EXPLORE 4 PRACTICES ↓</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Scroll Prompt Bar */}
        <div className="relative z-20 max-w-6xl mx-auto w-full flex items-center justify-between pt-4 border-t border-[#e5e4de]">
          <div className="flex items-center gap-2 text-[12px] font-mono text-[#64748b]">
            <span className="w-2 h-2 rounded-full bg-[#047857]" />
            <span>Scroll to Rotate & Explore Architecture</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#047857] uppercase tracking-wider animate-bounce">
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};
