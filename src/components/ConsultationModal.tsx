import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Phone, Mail, User, FileText, Building } from 'lucide-react';

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
    'Food Compliance (FSSAI / MCD / DPCC / Trade License)',
    'HR & Workforce (Staffing, Payroll, Labour Law Compliance)',
    'Business & Commercial Loans (Working Capital, MSME Term Loans)',
    'Personal / Home / Auto Loans & Mortgage',
    'Corporate & Asset Insurance Solutions',
    'Digital Marketing (SEO, Performance Ads, Brand Growth)',
    'Integrated Multi-Vertical Enterprise Package'
  ];

  useEffect(() => {
    if (initialService) {
      // Find closest match or prefill
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
    // Simulate reliable API submission
    setTimeout(() => {
      const generatedRef = 'TS-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#100904]/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-xl rounded-[12px] border border-[#40372e] bg-[#100904] p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-[#40372e] text-[#6c5f51] hover:text-[#ffedd7] hover:border-[#ffedd7] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-[#dc5000] uppercase mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL CONSULTATION DESK</span>
              </div>
              <h3 className="text-[24px] sm:text-[28px] font-medium text-[#ffedd7] uppercase leading-tight">
                REQUEST EXPERT CONSULTATION.
              </h3>
              <p className="text-[13px] text-[#6c5f51] mt-1">
                Connect directly with our regulatory specialists, loan advisors, or HR managers.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider block mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="input-editorial"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="input-editorial"
                    />
                  </div>
                </div>
              </div>

              {/* Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider block mb-1">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="input-editorial"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider block mb-1">
                    City / State (Location)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Delhi, Mumbai, Bengaluru"
                    className="input-editorial"
                  />
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label className="text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider block mb-1">
                  Primary Service Required *
                </label>
                <select
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full bg-[#100904] border-b border-[#40372e] text-[#ffedd7] text-[13px] uppercase py-3 outline-none focus:border-[#ffedd7] transition-colors"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv} className="bg-[#100904] text-[#ffedd7]">
                      {srv}
                    </option>
                  ))}
                  {initialService && !servicesList.includes(initialService) && (
                    <option value={initialService} className="bg-[#100904] text-[#ffedd7]">
                      {initialService}
                    </option>
                  )}
                </select>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="text-[11px] font-medium text-[#6c5f51] uppercase tracking-wider block mb-1">
                  Brief Requirement / Query (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your current business stage, headcount, loan quantum, or specific license requirement..."
                  className="w-full bg-transparent border border-[#40372e] focus:border-[#ffedd7] text-[#ffedd7] text-[13px] rounded-[8px] p-3 outline-none resize-none placeholder:text-[#6c5f51] placeholder:text-[12px]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill w-full justify-center py-3.5 text-[13px] tracking-wider"
                >
                  <span>{isSubmitting ? 'PROCESSING CONSULTATION REQUEST...' : 'SUBMIT CONSULTATION REQUEST'}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4 text-[#ffedd7]" />}
                </button>
              </div>

              <p className="text-legal text-center pt-2">
                * YOUR INFORMATION IS SECURED UNDER STRICT NON-DISCLOSURE PROTOCOLS. ZERO SPAM GUARANTEE.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full border border-[#40372e] bg-[#382416]/40 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-7 h-7 text-[#dc5000]" />
            </div>

            <span className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase block mb-1">
              CONSULTATION INITIATED
            </span>

            <h3 className="text-[26px] font-medium text-[#ffedd7] uppercase mb-2">
              REQUEST CONFIRMED.
            </h3>

            <p className="text-[14px] text-[#ffedd7]/80 max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#ffedd7] font-medium">{name}</span>. Your consultation dossier has been routed to our senior lead for <span className="text-[#ffedd7] font-medium">{serviceRequired}</span>.
            </p>

            <div className="p-4 rounded-[8px] border border-[#40372e] bg-[#382416]/20 max-w-sm mx-auto mb-6 text-left">
              <div className="flex justify-between text-[12px] mb-1">
                <span className="text-[#6c5f51] uppercase">Reference ID:</span>
                <span className="font-mono font-medium text-[#ffedd7]">{refId}</span>
              </div>
              <div className="flex justify-between text-[12px] mb-1">
                <span className="text-[#6c5f51] uppercase">Contact Number:</span>
                <span className="font-mono text-[#ffedd7]">{phone}</span>
              </div>
              <div className="flex justify-between text-[12px]">
                <span className="text-[#6c5f51] uppercase">Expected Response:</span>
                <span className="text-[#dc5000] font-medium">Within 2 Business Hours</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-ghost px-6 py-2.5 text-[12px]"
            >
              <span>CLOSE WINDOW</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
