import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const servicesList = [
    'Food Compliance (FSSAI License, MCD Trade, DPCC, Shop Act)',
    'HR Services (Staffing, Monthly Payroll, EPF/ESIC Compliance)',
    'Business & MSME Loans (Working Capital, Term Loans)',
    'Personal / Home / Mortgage Loans',
    'Corporate & Asset Insurance Solutions',
    'Digital Marketing (SEO, Google Ads, Brand Growth)',
    'Complete Business Setup & Compliance Package'
  ];

  useEffect(() => {
    if (initialService) {
      const match = servicesList.find((s) => s.toLowerCase().includes(initialService.toLowerCase()));
      setServiceRequired(match || initialService);
    } else {
      setServiceRequired(servicesList[0]);
    }
  }, [initialService, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = 'TS-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setCity('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0a1118]/60 backdrop-blur-xs animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-xl rounded-2xl border border-[#e5e4de] bg-[#ffffff] p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-[#e5e4de] text-[#64748b] hover:text-[#0a1118] hover:bg-[#fafaf7] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>CONFIDENTIAL CONSULTATION DESK</span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-bold text-[#0a1118] leading-tight">
                Request Free Expert Consultation
              </h3>
              <p className="text-[14px] text-[#475569] mt-1">
                Connect directly with our regulatory specialists, loan advisors, or HR managers.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase tracking-wider block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[14px] rounded-lg p-3 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase tracking-wider block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[14px] rounded-lg p-3 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase tracking-wider block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[14px] rounded-lg p-3 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase tracking-wider block mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Delhi, Mumbai, Bengaluru"
                    className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[14px] rounded-lg p-3 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase tracking-wider block mb-1">
                  Service You Need Help With *
                </label>
                <select
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[14px] rounded-lg p-3 outline-none transition-all"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv}>
                      {srv}
                    </option>
                  ))}
                  {initialService && !servicesList.includes(initialService) && (
                    <option value={initialService}>
                      {initialService}
                    </option>
                  )}
                </select>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase tracking-wider block mb-1">
                  Brief Requirement (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need FSSAI State License for new cloud kitchen in Delhi / Need ₹20L Business loan..."
                  className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[14px] rounded-lg p-3 outline-none resize-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-island-primary w-full justify-between py-3 px-6 text-[14px] font-bold"
                >
                  <span>{isSubmitting ? 'Submitting Details...' : 'Request Free Consultation'}</span>
                  <div className="btn-island-icon">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#64748b] pt-1 font-mono">
                🔒 Strict Non-Disclosure Protected · Zero Spam Guarantee
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#047857]" />
            </div>

            <span className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase block mb-1">
              REQUEST CONFIRMED
            </span>

            <h3 className="text-[24px] font-bold text-[#0a1118] mb-2">
              We'll Connect With You Shortly
            </h3>

            <p className="text-[14px] text-[#475569] max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-[#0a1118]">{name}</span>. Our specialist lead for <span className="font-semibold text-[#0a1118]">{serviceRequired}</span> has received your dossier.
            </p>

            <div className="p-4 rounded-xl bg-[#fafaf7] border border-[#e5e4de] max-w-sm mx-auto mb-6 text-left space-y-1.5 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#64748b] font-mono">Reference ID:</span>
                <span className="font-mono font-bold text-[#0a1118]">{refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b] font-mono">Contact Number:</span>
                <span className="font-medium text-[#0a1118]">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b] font-mono">Expected Response:</span>
                <span className="text-[#047857] font-semibold">Within 2 Business Hours</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-island-secondary px-6 py-2.5 text-[13px]"
            >
              <span>Close Window</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
