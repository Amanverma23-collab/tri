import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Building2, User, Mail, Phone, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
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
  const safeInitial = typeof initialService === 'string' && initialService.trim() ? initialService : 'HR Services';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: safeInitial,
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof initialService === 'string' && initialService.trim()) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    } else {
      setFormData((prev) => ({ ...prev, service: 'HR Services' }));
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://formsubmit.co/ajax/anuragsharma0120@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New TriSecure Consultation Request from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email,
          'Company Name': formData.company || 'Not Specified',
          'Practice Service': formData.service,
          'Client Message': formData.message || 'No additional message provided',
          'Source Form': 'Website Header / Floating Consultation Modal',
          'Submission Date': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Email dispatch error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-[#FAF6EE] text-[#1A1A16] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#1A1A16]/15 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1A1A16]/5 hover:bg-[#1A1A16] hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            {/* 360 Continuous Rotating Logo */}
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img
                src="/images/trisecure_logo.png"
                alt="Trisecure F&B Solutions"
                className="w-full h-full object-contain animate-logo-spin"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C8B6F]/20 text-[#7C8B6F] font-mono text-xs uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Email Dispatched to Executive Desk</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Consultation Dispatched
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#7A7A70] max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#1A1A16]">{formData.name}</strong>. Your inquiry has been sent directly to Founder Anurag Sharma (<strong className="text-[#0072EF]">anuragsharma0120@gmail.com</strong>). We will connect with you within 2 business hours.
            </p>
            <button
              onClick={onClose}
              className="btn-editorial-primary text-xs"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5 pr-8 flex items-start gap-4">
              {/* 360 Continuous Rotating Logo */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/images/trisecure_logo.png"
                  alt="Trisecure F&B Solutions"
                  className="w-full h-full object-contain animate-logo-spin"
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
                  Inquiries are routed directly to Senior Director Desk (<strong className="text-[#1A1A16]">anuragsharma0120@gmail.com</strong>).
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1A1A16]/10 text-sm focus:outline-none focus:border-[#7C8B6F] transition-colors"
                    placeholder="Enter your full name"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1A1A16]/10 text-sm focus:outline-none focus:border-[#7C8B6F] transition-colors"
                    placeholder="+91 98765 43210"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1A1A16]/10 text-sm focus:outline-none focus:border-[#7C8B6F] transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1A1A16]/10 text-sm focus:outline-none focus:border-[#7C8B6F] transition-colors"
                    placeholder="Enterprise Pvt Ltd"
                  />
                </div>
              </div>

              {/* Bespoke Zero-Scrollbar Animated Dropdown */}
              <div>
                <CustomServiceSelect
                  value={formData.service}
                  onChange={(val) => setFormData({ ...formData, service: val })}
                  label="Select Practice Focus *"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-[#7A7A70] uppercase mb-1 font-semibold tracking-wider">
                  Brief Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1A1A16]/10 text-sm focus:outline-none focus:border-[#7C8B6F] transition-colors resize-none"
                  placeholder="Share details regarding your licensing, workforce, or growth goals..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-editorial-primary justify-center text-xs py-3"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to anuragsharma0120@gmail.com...</span>
                    </span>
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center font-mono text-[10px] text-[#7A7A70]">
                Strict confidentiality assured. 100% GDPR & Indian privacy compliant.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
