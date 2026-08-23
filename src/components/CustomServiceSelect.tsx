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
  value: string;
  onChange: (value: string) => void;
  label?: string;
  darkTheme?: boolean;
}

export const CustomServiceSelect: React.FC<CustomServiceSelectProps> = ({
  value,
  onChange,
  label = 'Select Practice Vertical *',
  darkTheme = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    SERVICE_OPTIONS.find(
      (opt) => opt.value.toLowerCase() === value.toLowerCase() || opt.label.toLowerCase() === value.toLowerCase()
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
    <div className="relative w-full select-none" ref={dropdownRef}>
      {label && (
        <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 ${
          darkTheme
            ? 'bg-[#141814] border-white/15 text-white hover:border-[#0072EF]'
            : 'bg-[#FAF6EE] border-[#1A1A16]/15 text-[#1A1A16] hover:border-[#0072EF]'
        } ${isOpen ? 'ring-2 ring-[#0072EF]/30 border-[#0072EF]' : ''}`}
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div
            className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
              darkTheme ? 'bg-white/10 text-[#38BDF8]' : 'bg-[#0072EF]/10 text-[#0072EF]'
            }`}
          >
            <SelectedIcon className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-[11px] font-bold text-[#0072EF] shrink-0">
            {selectedOption.code}.
          </span>
          <span className="font-sans text-xs font-medium truncate">
            {selectedOption.label}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-300 text-[#7A7A70] ${
            isOpen ? 'rotate-180 text-[#0072EF]' : ''
          }`}
        />
      </button>

      {/* Custom Animated Dropdown Menu (No scrollbar, full clean display) */}
      {isOpen && (
        <div
          className={`absolute left-0 right-0 top-full mt-1.5 z-50 rounded-2xl p-1.5 shadow-2xl border backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 overflow-hidden ${
            darkTheme
              ? 'bg-[#141814]/98 border-white/15 text-[#F5F0E6]'
              : 'bg-[#FAF6EE]/98 border-[#1A1A16]/15 text-[#1A1A16]'
          }`}
        >
          <div className="space-y-1 p-0.5">
            {SERVICE_OPTIONS.map((opt) => {
              const isSelected = selectedOption.value === opt.value;
              const IconComp = opt.icon;

              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-left flex items-center justify-between transition-all duration-150 group ${
                    isSelected
                      ? 'bg-[#0072EF] text-white shadow-sm'
                      : darkTheme
                      ? 'hover:bg-white/10 text-white/85'
                      : 'hover:bg-[#1A1A16]/5 text-[#1A1A16]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : darkTheme
                          ? 'bg-white/5 text-[#38BDF8] group-hover:bg-white/10'
                          : 'bg-[#0072EF]/10 text-[#0072EF] group-hover:bg-[#0072EF]/20'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>

                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`font-mono text-[10px] font-bold ${
                            isSelected
                              ? 'text-white/90'
                              : 'text-[#0072EF]'
                          }`}
                        >
                          {opt.code}.
                        </span>
                        <span className="font-sans text-xs font-semibold truncate">
                          {opt.label}
                        </span>
                      </div>
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider ${
                          isSelected
                            ? 'text-white/80'
                            : 'text-[#7A7A70]'
                        }`}
                      >
                        {opt.tag}
                      </span>
                    </div>
                  </div>

                  {isSelected && <Check className="w-4 h-4 shrink-0 text-white ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
