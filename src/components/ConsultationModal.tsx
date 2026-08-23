import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

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
      <div className="relative w-full max-w-xl bg-[#F5F0E6] text-[#1A1A16] rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border border-[#1A1A16]/15 overflow-hidden">
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
            <div className="w-14 h-14 rounded-full bg-[#7C8B6F] text-[#F5F0E6] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Consultation Requested
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#1A1A16]">{formData.name}</strong>. Our senior advisory team will review your inquiry regarding <strong className="text-[#7C8B6F]">{formData.service}</strong> and contact you within 2 business hours.
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
            <div className="mb-5 pr-8">
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
                    placeholder="e.g. Rahul Sharma"
                    className="editorial-input text-sm py-2"
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
                    className="editorial-input text-sm py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.com"
                    className="editorial-input text-sm py-2"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                    Practice Vertical
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="editorial-input text-sm py-2 cursor-pointer font-serif"
                  >
                    <option value="HR Services">HR & Workforce Solutions</option>
                    <option value="Insurance & Loans">Insurance & Loan Advisory</option>
                    <option value="Food Compliance">Food Compliance & Licensing</option>
                    <option value="Digital Marketing">Digital Marketing & Branding</option>
                    <option value="Licenses">Government & Trade Licenses</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                  Brief Requirements / Query
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your business goals, timeline, or current compliance status..."
                  className="editorial-input text-sm py-2 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#1A1A16]/10">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#7A7A70]">
                  <Phone className="w-3 h-3 text-[#7C8B6F]" />
                  <span>Call: <strong className="text-[#1A1A16] font-sans font-semibold">+91 8585999922</strong></span>
                </div>

                <button
                  type="submit"
                  className="btn-editorial-primary justify-center py-2.5 px-6 text-xs"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
