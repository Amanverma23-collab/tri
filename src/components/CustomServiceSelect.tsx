import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Users, ShieldCheck, Utensils, TrendingUp, FileText, Sparkles } from 'lucide-react';

export interface ServiceOption {
  value: string;
  label: string;
  code: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    value: 'HR Services',
    label: 'HR & Payroll Services',
    code: '01',
    tag: 'Workforce',
    icon: Users,
  },
  {
    value: 'Insurance & Loans',
    label: 'Insurance & Business Debt',
    code: '02',
    tag: 'Capital & Risk',
    icon: ShieldCheck,
  },
  {
    value: 'Food Compliance',
    label: 'Food Compliance (FSSAI)',
    code: '03',
    tag: 'Statutory Safety',
    icon: Utensils,
  },
  {
    value: 'Digital Marketing',
    label: 'Digital Marketing & Scale',
    code: '04',
    tag: 'Digital Scale',
    icon: TrendingUp,
  },
  {
    value: 'Statutory Licensing',
    label: 'Trade Licenses & NOC',
    code: '05',
    tag: 'Clearances',
    icon: FileText,
  },
  {
    value: 'General Advisory',
    label: 'Corporate Strategy Desk',
    code: '06',
    tag: 'Executive Desk',
    icon: Sparkles,
  },
];

interface CustomServiceSelectProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  darkTheme?: boolean;
  hideTags?: boolean;
}

export const CustomServiceSelect: React.FC<CustomServiceSelectProps> = ({
  value = '',
  onChange,
  label = 'Select Practice Focus *',
  darkTheme = false,
  hideTags = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const safeValue = typeof value === 'string' ? value.toLowerCase().trim() : '';

  const selectedOption =
    SERVICE_OPTIONS.find(
      (opt) =>
        opt.value.toLowerCase() === safeValue ||
        opt.label.toLowerCase() === safeValue ||
        safeValue.includes(opt.value.toLowerCase())
    ) || SERVICE_OPTIONS[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const SelectedIcon = selectedOption.icon;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label
          className={`block font-mono text-[10px] uppercase mb-1.5 font-semibold tracking-wider ${
            darkTheme ? 'text-white/60' : 'text-[#7A7A70]'
          }`}
        >
          {label}
        </label>
      )}

      {/* Trigger Bar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-3 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group shadow-xs ${
          darkTheme
            ? 'bg-[#1A1A16] border-white/20 text-white hover:border-[#C9AF6B]'
            : 'bg-white border-[#1A1A16]/15 text-[#1A1A16] hover:border-[#7C8B6F]'
        } ${isOpen ? (darkTheme ? 'border-[#C9AF6B] ring-1 ring-[#C9AF6B]/30' : 'border-[#0072EF] ring-1 ring-[#0072EF]/30') : ''}`}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              darkTheme ? 'bg-white/10 text-[#C9AF6B]' : 'bg-[#0072EF]/10 text-[#0072EF]'
            }`}
          >
            <SelectedIcon className="w-4 h-4" />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#0072EF]">
                {selectedOption.code}.
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold truncate text-[#1A1A16]">
                {selectedOption.label}
              </span>
            </div>
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-[#0072EF]' : 'text-[#7A7A70]'
          }`}
        />
      </button>

      {/* 2 SERVICES PER ROW (2-COLUMN GRID) */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl border shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-150 ${
            darkTheme
              ? 'bg-[#1A1A16] border-white/20 text-white'
              : 'bg-[#FAF6EE] border-[#1A1A16]/15 text-[#1A1A16]'
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {SERVICE_OPTIONS.map((option) => {
              const isSelected = selectedOption.value === option.value;
              const OptionIcon = option.icon;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`p-2.5 rounded-xl text-left transition-all duration-150 flex items-center justify-between border ${
                    isSelected
                      ? darkTheme
                        ? 'bg-white/15 border-white/30 text-[#C9AF6B] shadow-sm'
                        : 'bg-[#1A1A16] border-[#1A1A16] text-[#F5F0E6] shadow-sm'
                      : darkTheme
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white/90 hover:border-white/20'
                      : 'bg-white/80 border-[#1A1A16]/10 hover:bg-white hover:border-[#0072EF]/50 text-[#1A1A16]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 overflow-hidden">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#0072EF] text-white'
                          : darkTheme
                          ? 'bg-white/10 text-[#C9AF6B]'
                          : 'bg-[#1A1A16]/5 text-[#7C8B6F]'
                      }`}
                    >
                      <OptionIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      {/* Render tag only if hideTags is false */}
                      {!hideTags && (
                        <span
                          className={`font-mono text-[9px] uppercase tracking-wider block font-semibold leading-tight ${
                            isSelected
                              ? 'text-[#C9AF6B]'
                              : 'text-[#7C8B6F]'
                          }`}
                        >
                          {option.code} // {option.tag}
                        </span>
                      )}
                      <span className={`font-sans text-xs font-semibold block truncate leading-snug ${!hideTags ? 'mt-0.5' : ''}`}>
                        {option.label}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#0072EF] shrink-0 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
