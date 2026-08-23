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
    label: 'HR Services & Payroll',
    code: '01',
    tag: 'Workforce',
    icon: Users,
  },
  {
    value: 'Insurance & Loans',
    label: 'Insurance & Business Loans',
    code: '02',
    tag: 'Capital & Risk',
    icon: ShieldCheck,
  },
  {
    value: 'Food Compliance',
    label: 'Food Compliance (FSSAI/MCD)',
    code: '03',
    tag: 'Statutory Safety',
    icon: Utensils,
  },
  {
    value: 'Digital Marketing',
    label: 'Digital Marketing & Web',
    code: '04',
    tag: 'Digital Scale',
    icon: TrendingUp,
  },
  {
    value: 'Statutory Licensing',
    label: 'Statutory Trade Licenses',
    code: '05',
    tag: 'Government Desk',
    icon: FileText,
  },
  {
    value: 'General Advisory',
    label: 'General Corporate Advisory',
    code: '06',
    tag: 'Executive Strategy',
    icon: Sparkles,
  },
];

interface CustomServiceSelectProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  darkTheme?: boolean;
}

export const CustomServiceSelect: React.FC<CustomServiceSelectProps> = ({
  value = '',
  onChange,
  label = 'Select Practice Focus *',
  darkTheme = false,
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
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label
          className={`block font-mono text-[10px] uppercase mb-1.5 font-semibold tracking-wider ${
            darkTheme ? 'text-white/60' : 'text-[#7A7A70]'
          }`}
        >
          {label}
        </label>
      )}

      {/* Selected Value Trigger Card */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group shadow-xs ${
          darkTheme
            ? 'bg-[#1A1A16] border-white/15 text-white hover:border-[#C9AF6B]'
            : 'bg-white border-[#1A1A16]/15 text-[#1A1A16] hover:border-[#7C8B6F]'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              darkTheme ? 'bg-white/10 text-[#C9AF6B]' : 'bg-[#0072EF]/10 text-[#0072EF]'
            }`}
          >
            <SelectedIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-[#0072EF]">
                {selectedOption.code}.
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold">
                {selectedOption.label}
              </span>
            </div>
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#0072EF]' : 'text-[#7A7A70]'
          }`}
        />
      </button>

      {/* Dropdown Options List */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl border shadow-2xl overflow-hidden p-2 space-y-1 animate-in fade-in zoom-in-95 duration-200 ${
            darkTheme
              ? 'bg-[#1A1A16] border-white/20 text-white'
              : 'bg-[#FAF6EE] border-[#1A1A16]/15 text-[#1A1A16]'
          }`}
        >
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
                className={`w-full p-2.5 rounded-xl text-left transition-all duration-150 flex items-center justify-between ${
                  isSelected
                    ? darkTheme
                      ? 'bg-white/15 text-[#C9AF6B]'
                      : 'bg-[#1A1A16] text-[#F5F0E6]'
                    : darkTheme
                    ? 'hover:bg-white/5 text-white/80'
                    : 'hover:bg-[#EFE9DC] text-[#1A1A16]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#0072EF] text-white'
                        : darkTheme
                        ? 'bg-white/5 text-white/60'
                        : 'bg-[#1A1A16]/5 text-[#7C8B6F]'
                    }`}
                  >
                    <OptionIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#7C8B6F] block font-semibold">
                      {option.code} // {option.tag}
                    </span>
                    <span className="font-serif text-xs font-bold block mt-0.5">
                      {option.label}
                    </span>
                  </div>
                </div>

                {isSelected && <Check className="w-4 h-4 text-[#0072EF] shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
