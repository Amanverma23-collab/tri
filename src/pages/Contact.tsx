import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, MessageSquare, Sparkles, Building2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'All-in-One Advisory',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* =========================================================================
          1. REDESIGNED MASTHEAD: Editorial 2-Column Hero with Direct Desk Bento
          ========================================================================= */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>DIRECT INQUIRY DESK // CONTACT & ADVISORY</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A16] leading-[1.08]">
                Let's Talk Business
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#7A7A70] leading-relaxed font-light max-w-xl">
                Have a licensing mandate, statutory compliance audit, corporate insurance review, or workforce scaling requirement? Reach out to our senior executive team directly for prompt advisory.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+918585999922"
                  className="btn-editorial-primary text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 8585999922</span>
                </a>

                <a
                  href="mailto:anuragsharma0120@gmail.com"
                  className="btn-editorial-secondary text-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Advisory Desk</span>
                </a>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1A1A16]/10 max-w-lg">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    &lt; 2 Hrs
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Response Guarantee
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7C8B6F] block">
                    100%
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Confidential Review
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16] block">
                    Direct
                  </span>
                  <p className="font-mono text-[10px] uppercase text-[#7A7A70] tracking-wider mt-0.5">
                    Founder Advisory
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Desk Bento Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-[#1A1A16]/15 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A16]/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Direct Access Desk</span>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-semibold">
                    NO CALL CENTER QUEUES
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#1A1A16] leading-snug font-normal">
                  "Direct connection with senior business strategists who understand statutory bottlenecks, workforce operations, and capital protection."
                </p>

                {/* 3 Contact Channel Tiles */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7C8B6F] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Primary Phone</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">+91 8585999922 / +91 9716965062</p>
                      </div>
                    </div>
                    <a href="tel:+918585999922" className="text-xs font-mono font-bold text-[#7C8B6F] hover:underline">
                      CALL
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C9AF6B] text-[#1A1A16] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Official Email</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">anuragsharma0120@gmail.com</p>
                      </div>
                    </div>
                    <a href="mailto:anuragsharma0120@gmail.com" className="text-xs font-mono font-bold text-[#C9AF6B] hover:underline">
                      WRITE
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 border border-[#1A1A16]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1A1A16] text-white flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A1A16]">Business Hours</h4>
                        <p className="font-sans text-[11px] text-[#7A7A70]">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#1A1A16] font-bold">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN CONTACT FORM & DIRECT DETAILS SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Col: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-2 font-semibold">
                  // Submit Inquiry
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16] leading-tight">
                  Send a Detailed Business Requirement
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#7A7A70] mt-2 font-light">
                  Fill out the consultation form and our specialized practice lead will prepare an action roadmap for your review.
                </p>
              </div>

              {/* Direct Phone Block */}
              <div className="p-6 rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7C8B6F]/15 text-[#7C8B6F] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#7A7A70] uppercase">Direct Advisory Line</span>
                    <p className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A16]">
                      +91 8585999922
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+918585999922"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase font-bold tracking-wider hover:underline"
                >
                  <span>Dial Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Email Block */}
              <div className="p-6 rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#7A7A70] uppercase">Executive Email Desk</span>
                    <p className="font-serif text-base sm:text-lg font-bold text-[#1A1A16] truncate max-w-[260px]">
                      anuragsharma0120@gmail.com
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:anuragsharma0120@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#C9AF6B] uppercase font-bold tracking-wider hover:underline"
                >
                  <span>Send Email</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div className="lg:col-span-7 bg-[#F5F0E6] rounded-3xl p-8 sm:p-10 border border-[#1A1A16]/10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#7C8B6F] text-[#F5F0E6] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#1A1A16]">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#7A7A70] max-w-md mx-auto mb-8 font-light">
                    Thank you, <strong className="text-[#1A1A16]">{formData.name}</strong>. Our senior consultant will review your requirement regarding <strong className="text-[#7C8B6F]">{formData.service}</strong> and contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-editorial-primary text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-2 font-semibold">
                      // Consultation Request
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16]">
                      Schedule a Private Discovery Call
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Singhania"
                        className="editorial-input"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="editorial-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@enterprise.com"
                        className="editorial-input"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                        Practice Vertical *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="editorial-input cursor-pointer font-serif"
                      >
                        <option value="HR & Workforce">HR & Workforce Solutions</option>
                        <option value="Insurance & Loans">Insurance & Loan Financing</option>
                        <option value="Food Compliance">Food & Environmental Licensing</option>
                        <option value="Digital Marketing">Digital Marketing & Web Platform</option>
                        <option value="Statutory Licenses">Statutory License Clearance</option>
                        <option value="All-in-One Advisory">All-in-One Enterprise Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                      Requirement Details & Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current business challenge, required permits, staff scaling targets, or insurance queries..."
                      className="editorial-input resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#1A1A16]/10">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#7A7A70]">
                      <Clock className="w-3.5 h-3.5 text-[#7C8B6F]" />
                      <span>Guaranteed response within 2 business hours</span>
                    </div>

                    <button
                      type="submit"
                      className="btn-editorial-primary justify-center text-xs"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
