import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { CustomServiceSelect } from './CustomServiceSelect';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'HR Services',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1A1A16]/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-xl bg-[#F5F0E6] text-[#1A1A16] rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border border-[#1A1A16]/15 overflow-visible">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1A1A16]/5 hover:bg-[#1A1A16]/10 flex items-center justify-center transition-colors text-[#1A1A16]"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure Solutions"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Consultation Requested
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#1A1A16]">{formData.name}</strong>. Our senior advisory team will review your inquiry regarding <strong className="text-[#0072EF]">{formData.service}</strong> and contact you within 2 business hours.
            </p>
            <button
              onClick={onClose}
              className="btn-editorial-primary"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5 pr-8 flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/images/trisecure_logo.png"
                  alt="Trisecure Solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#7C8B6F] uppercase tracking-widest mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Executive Advisory Desk</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A16] leading-snug">
                  Schedule an Advisory Session
                </h2>
                <p className="font-sans text-xs text-[#7A7A70] mt-1">
                  Direct consultation for business compliance, HR, financing, and digital strategy.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#1A1A16]/15 text-[#1A1A16] text-xs focus:outline-none focus:border-[#0072EF]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#1A1A16]/15 text-[#1A1A16] text-xs focus:outline-none focus:border-[#0072EF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corporate@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#1A1A16]/15 text-[#1A1A16] text-xs focus:outline-none focus:border-[#0072EF]"
                  />
                </div>

                {/* Custom Redesigned Service Dropdown */}
                <div>
                  <CustomServiceSelect
                    value={formData.service}
                    onChange={(val) => setFormData({ ...formData, service: val })}
                    label="Select Practice Vertical *"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                  Requirements & Company Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your licensing, workforce, or growth goals..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#1A1A16]/15 text-[#1A1A16] text-xs focus:outline-none focus:border-[#0072EF] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#7A7A70]">
                  <Phone className="w-3.5 h-3.5 text-[#0072EF]" />
                  <span>Immediate priority callback guarantee</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold text-xs uppercase tracking-wider hover:bg-[#0072EF] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
