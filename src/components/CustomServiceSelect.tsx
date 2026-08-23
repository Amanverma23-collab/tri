import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface ServiceOption {
  value: string;
  label: string;
  code: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    value: 'HR Services',
    label: 'HR Services & Payroll Management',
    code: '01',
  },
  {
    value: 'Insurance & Loans',
    label: 'Insurance Underwriting & Business Loans',
    code: '02',
  },
  {
    value: 'Food Compliance',
    label: 'Food Compliance (FSSAI, DPCC, MCD)',
    code: '03',
  },
  {
    value: 'Digital Marketing',
    label: 'Digital Marketing & Performance SEO',
    code: '04',
  },
  {
    value: 'Statutory Licensing',
    label: 'Statutory Trade Licenses & Fire NOC',
    code: '05',
  },
  {
    value: 'General Advisory',
    label: 'General Corporate Strategy & Advisory',
    code: '06',
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
  label = 'Select Practice Vertical *',
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

      {/* Selected Value Trigger Card (Clean, No Icon, Full Text Display) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-3 px-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group shadow-xs ${
          darkTheme
            ? 'bg-[#1A1A16] border-white/20 text-white hover:border-[#C9AF6B]'
            : 'bg-white border-[#1A1A16]/20 text-[#1A1A16] hover:border-[#0072EF]'
        } ${isOpen ? (darkTheme ? 'border-[#C9AF6B] ring-2 ring-[#C9AF6B]/20' : 'border-[#0072EF] ring-2 ring-[#0072EF]/20') : ''}`}
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="font-mono text-xs font-bold text-[#0072EF] shrink-0">
            {selectedOption.code}.
          </span>
          <span className="font-sans text-xs sm:text-sm font-semibold truncate text-[#1A1A16]">
            {selectedOption.label}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-[#0072EF]' : 'text-[#7A7A70]'
          }`}
        />
      </button>

      {/* Dropdown Options List: Clean Full-Width Rows, No Icons, 100% Readable */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-1.5 z-50 rounded-xl border shadow-xl p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150 ${
            darkTheme
              ? 'bg-[#1A1A16] border-white/20 text-white'
              : 'bg-[#FAF6EE] border-[#1A1A16]/20 text-[#1A1A16]'
          }`}
        >
          {SERVICE_OPTIONS.map((option) => {
            const isSelected = selectedOption.value === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full py-2.5 px-3 rounded-lg text-left transition-all duration-150 flex items-center justify-between ${
                  isSelected
                    ? darkTheme
                      ? 'bg-white/15 text-[#C9AF6B] font-bold'
                      : 'bg-[#1A1A16] text-[#F5F0E6] font-bold'
                    : darkTheme
                    ? 'hover:bg-white/5 text-white/85'
                    : 'hover:bg-[#ECE5D8] text-[#1A1A16]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected
                        ? 'text-[#0072EF]'
                        : 'text-[#7C8B6F]'
                    }`}
                  >
                    {option.code}.
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-medium">
                    {option.label}
                  </span>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-[#0072EF] shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
