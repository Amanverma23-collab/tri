import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './FlowingMenu.css';

export interface FlowingMenuItem {
  link?: string;
  text: string;
  image: string;
  tag?: string;
  desc?: string;
  category?: string;
  onClick?: () => void;
}

export interface FlowingMenuProps {
  items: FlowingMenuItem[];
  className?: string;
}

export default function FlowingMenu({ items, className = '' }: FlowingMenuProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`flowing-menu-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {items.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        const formattedIndex = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

        return (
          <div
            key={idx}
            className="flowing-menu-item group"
            onMouseEnter={() => setHoveredIdx(idx)}
            onClick={() => {
              if (item.onClick) item.onClick();
            }}
          >
            {/* Rest / Static Row State */}
            <div className="flowing-menu-item-inner">
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                <span className="font-mono text-xs sm:text-sm text-[#7A7A70] font-bold">
                  {formattedIndex}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1A1A16] group-hover:text-white transition-colors truncate">
                    {item.text}
                  </h3>
                  {item.desc && (
                    <p className="font-sans text-xs sm:text-sm text-[#7A7A70] font-light truncate mt-0.5 max-w-xl">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-4">
                {item.tag && (
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#1A1A16]/5 border border-[#1A1A16]/10 font-mono text-[10px] uppercase tracking-wider text-[#1A1A16] font-semibold">
                    {item.tag}
                  </span>
                )}
                <div className="w-8 h-8 rounded-full bg-[#1A1A16]/5 flex items-center justify-center text-[#1A1A16] group-hover:bg-white group-hover:text-[#1A1A16] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Hover Flowing Marquee Strip */}
            <div className="flowing-menu-marquee">
              <div className="flowing-menu-marquee-track">
                {[...Array(6)].map((_, rIdx) => (
                  <div key={rIdx} className="flowing-menu-marquee-item">
                    <span>{item.text}</span>
                    <span className="flowing-menu-marquee-dot" />
                    {item.tag && (
                      <span className="font-mono text-xs font-semibold text-[#0072EF] tracking-widest">
                        {item.tag}
                      </span>
                    )}
                    <span className="flowing-menu-marquee-dot" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating Image Preview that tracks mouse position */}
      {hoveredIdx !== null && items[hoveredIdx]?.image && (
        <div
          className="flowing-menu-floating-image"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          }}
        >
          <img
            src={items[hoveredIdx].image}
            alt={items[hoveredIdx].text}
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>
      )}
    </div>
  );
}
