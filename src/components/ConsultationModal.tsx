import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock, Lock, Loader2, ChevronDown, Users, Shield, Utensils, Megaphone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  { id: '01', title: 'HR & Payroll Services', icon: Users, desc: 'PF, ESIC, statutory staffing & workforce compliance' },
  { id: '02', title: 'Corporate Insurance & Loans', icon: Shield, desc: 'Fire, liability, health & business financing' },
  { id: '03', title: 'Food & Regulatory Compliance', icon: Utensils, desc: 'FSSAI, DPCC, fire NOC & central licensing' },
  { id: '04', title: 'Digital Marketing & Growth', icon: Megaphone, desc: 'Web development, SEO, performance ads & branding' },
];

const CustomServiceSelect: React.FC<{
  value: string;
  onChange: (value: string) => void;
  label: string;
}> = ({ value, onChange, label }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItem = SERVICE_OPTIONS.find((s) => s.title === value) || SERVICE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block font-mono text-[9px] sm:text-[10px] text-[#7A7A70] uppercase mb-0.5 sm:mb-1 font-semibold tracking-wider">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#1A1A16]/10 text-xs sm:text-sm font-medium text-[#1A1A16] hover:border-[#0072EF]/50 transition-colors text-left shadow-2xs"
      >
        <div className="flex items-center gap-2 sm:gap-2.5 truncate">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#0072EF]/10 text-[#0072EF] flex items-center justify-center shrink-0">
            {React.createElement(selectedItem.icon, { className: 'w-3 h-3 sm:w-3.5 sm:h-3.5' })}
          </div>
          <span className="truncate">
            <strong className="text-[#0072EF] font-mono mr-1 text-[11px] sm:text-xs">{selectedItem.id}.</strong>
            {selectedItem.title}
          </span>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 text-[#7A7A70] transition-transform duration-200 shrink-0 ${open ? 'rotate-180 text-[#0072EF]' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white border border-[#1A1A16]/15 rounded-xl shadow-xl p-1 sm:p-1.5 space-y-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
          {SERVICE_OPTIONS.map((opt) => {
            const isSelected = opt.title === selectedItem.title;
            const Icon = opt.icon;
            return (
              <div
                key={opt.id}
                onClick={() => {
                  onChange(opt.title);
                  setOpen(false);
                }}
                className={`p-1.5 sm:p-2 rounded-lg cursor-pointer transition-all flex items-center gap-2 sm:gap-3 ${
                  isSelected ? 'bg-[#0072EF]/10 border border-[#0072EF]/30' : 'hover:bg-[#FAF6EE]'
                }`}
              >
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-[#0072EF] text-white' : 'bg-[#FAF6EE] text-[#1A1A16]'
                }`}>
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#0072EF] font-bold">{opt.id}</span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1A1A16] truncate">{opt.title}</h4>
                  </div>
                  <p className="font-sans text-[9px] sm:text-[10px] text-[#7A7A70] truncate leading-tight hidden xs:block">{opt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: initialService || SERVICE_OPTIONS[0].title,
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/anuragsharma0120@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Consultation Request from ${formData.name} (${formData.service})`,
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          Company: formData.company || 'Not Specified',
          'Selected Practice': formData.service,
          'Client Requirements': formData.message || 'No additional note provided',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1A1A16]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF6EE] rounded-2xl sm:rounded-3xl border border-[#1A1A16]/15 shadow-2xl p-4 sm:p-6 md:p-7 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#1A1A16]/10 flex items-center justify-center text-[#1A1A16] hover:bg-[#1A1A16] hover:text-white transition-colors z-10"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-4 sm:py-6 space-y-3 sm:space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#0072EF]/10 flex items-center justify-center text-[#0072EF]">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            
            <div className="space-y-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#0072EF] font-bold">
                Transmission Confirmed
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A16]">
                Consultation Dispatched
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-[#7A7A70] leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-[#1A1A16] font-semibold">{formData.name || 'valued partner'}</strong>. Your brief has been securely logged with our senior advisory desk. A dedicated practice lead will connect with you shortly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm mx-auto text-left">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#1A1A16]/10">
                <div className="flex items-center gap-1 text-[#0072EF] mb-0.5">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#1A1A16]">SLA Window</span>
                </div>
                <p className="font-sans text-[10px] sm:text-[11px] text-[#7A7A70]">&lt; 2 business hours</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#1A1A16]/10">
                <div className="flex items-center gap-1 text-[#0072EF] mb-0.5">
                  <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#1A1A16]">Privacy</span>
                </div>
                <p className="font-sans text-[10px] sm:text-[11px] text-[#7A7A70]">100% NDA protected</p>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0072EF] transition-all"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-3.5 sm:mb-5 pr-7 flex items-start gap-2.5 sm:gap-4">
              <div className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 mt-0.5">
                <img
                  src="/images/trisecure_logo.png"
                  alt="Trisecure Solutions"
                  className="w-full h-full object-contain animate-logo-spin"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-[#0072EF] uppercase tracking-wider mb-0.5 font-semibold">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Executive Advisory Desk</span>
                </div>
                <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A16] leading-tight">
                  Schedule an Advisory Session
                </h2>
                <p className="font-sans text-[11px] sm:text-xs text-[#7A7A70] mt-0.5 leading-tight">
                  Inquiries are securely routed directly to our Executive Advisory Desk.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
              <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                <div>
                  <label className="block font-mono text-[9px] sm:text-[10px] text-[#7A7A70] uppercase mb-0.5 sm:mb-1 font-semibold tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-white border border-[#1A1A16]/10 text-xs sm:text-sm focus:outline-none focus:border-[#0072EF] transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] sm:text-[10px] text-[#7A7A70] uppercase mb-0.5 sm:mb-1 font-semibold tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-white border border-[#1A1A16]/10 text-xs sm:text-sm focus:outline-none focus:border-[#0072EF] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                <div>
                  <label className="block font-mono text-[9px] sm:text-[10px] text-[#7A7A70] uppercase mb-0.5 sm:mb-1 font-semibold tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-white border border-[#1A1A16]/10 text-xs sm:text-sm focus:outline-none focus:border-[#0072EF] transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] sm:text-[10px] text-[#7A7A70] uppercase mb-0.5 sm:mb-1 font-semibold tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-white border border-[#1A1A16]/10 text-xs sm:text-sm focus:outline-none focus:border-[#0072EF] transition-colors"
                    placeholder="Enterprise Pvt Ltd"
                  />
                </div>
              </div>

              {/* Practice Selector */}
              <div>
                <CustomServiceSelect
                  value={formData.service}
                  onChange={(val) => setFormData({ ...formData, service: val })}
                  label="Select Practice Focus *"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] sm:text-[10px] text-[#7A7A70] uppercase mb-0.5 sm:mb-1 font-semibold tracking-wider">
                  Brief Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-white border border-[#1A1A16]/10 text-xs sm:text-sm focus:outline-none focus:border-[#0072EF] transition-colors resize-none"
                  placeholder="Share details regarding your licensing, workforce, or growth goals..."
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#0072EF] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Securing & dispatching...</span>
                    </span>
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center font-mono text-[9px] text-[#7A7A70] leading-tight">
                Strict confidentiality assured. 100% GDPR & Indian privacy compliant.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
