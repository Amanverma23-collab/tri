import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, MessageSquare, Sparkles, Building2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { CustomServiceSelect } from '../components/CustomServiceSelect';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Advisory',
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A16] text-[#F5F0E6] font-mono text-[11px] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#C9AF6B] animate-pulse" />
                <span>DIRECT ADVISORY DESK // CONTACT</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A16] tracking-tight leading-[1.05]">
                  Connect with Our <br />
                  <span className="italic font-normal text-[#7C8B6F]">Advisory Leads.</span>
                </h1>
                <p className="font-sans text-base sm:text-lg text-[#7A7A70] max-w-xl font-light leading-relaxed">
                  Fast-tracked consultations for statutory food licensing, enterprise insurance underwriting, custom debt financing, workforce architecture, and digital growth.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="btn-editorial-primary"
                >
                  <span>Submit Detailed Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+918585999922"
                  className="btn-editorial-secondary"
                >
                  <span>Helpline: +91 8585999922</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Access Desk Bento Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#141814] text-[#F5F0E6] rounded-3xl p-7 sm:p-9 border border-[#C9AF6B]/30 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#7C8B6F]/10 blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#C9AF6B] uppercase tracking-widest font-semibold">
                    <Building2 className="w-4 h-4" />
                    <span>Direct Channels</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/50">DELHI NCR & PAN-INDIA</span>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+918585999922"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#C9AF6B]/15 text-[#C9AF6B] flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-white/50 uppercase">Primary Advisory Line</p>
                        <p className="font-serif text-base font-bold text-white group-hover:text-[#C9AF6B] transition-colors">
                          +91 8585999922
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="tel:+919716965062"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C8B6F] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-white/50 uppercase">Executive Direct Line</p>
                        <p className="font-serif text-base font-bold text-white group-hover:text-[#7C8B6F] transition-colors">
                          +91 9716965062
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="mailto:anuragsharma0120@gmail.com"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C9AF6B] hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-mono text-[10px] text-white/50 uppercase">Founder Direct Mail</p>
                        <p className="font-sans text-xs font-medium text-white group-hover:text-[#C9AF6B] transition-colors truncate">
                          anuragsharma0120@gmail.com
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-transform group-hover:translate-x-1 shrink-0" />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono text-[10px]">
                  <div className="p-2 rounded-xl bg-white/[0.02]">
                    <span className="block text-[#C9AF6B] font-bold text-xs">&lt; 2 Hrs</span>
                    <span className="text-white/50">Response</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02]">
                    <span className="block text-white font-bold text-xs">100%</span>
                    <span className="text-white/50">Confidential</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02]">
                    <span className="block text-[#7C8B6F] font-bold text-xs">Pan-India</span>
                    <span className="text-white/50">Execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN SECTION: Direct Channels & Interactive Inquiry Form
          ========================================================================= */}
      <section id="contact-form" className="py-24 bg-[#FAF6EE]">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Access Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase block mb-2 font-semibold">
                  // Practice Inquiries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16] tracking-tight">
                  Reach Our Department Leads
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#7A7A70] mt-3 font-light leading-relaxed">
                  Whether you are scaling a 500-person enterprise workforce or establishing a new food processing facility, we assign a dedicated subject matter lead to your brief.
                </p>
              </div>

              {/* Department Contact Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A16]">Direct Phone Line</h3>
                    <p className="font-sans text-xs text-[#7A7A70] mb-2 font-light">
                      Mon – Sat from 9:00 AM to 7:00 PM IST
                    </p>
                    <a
                      href="tel:+918585999922"
                      className="font-mono text-sm font-semibold text-[#1A1A16] hover:text-[#7C8B6F] transition-colors"
                    >
                      +91 8585999922
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C8B6F] text-[#F5F0E6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A16]">Corporate Inquiries</h3>
                    <p className="font-sans text-xs text-[#7A7A70] mb-2 font-light">
                      Send your RFP or project requirement brief
                    </p>
                    <a
                      href="mailto:anuragsharma0120@gmail.com"
                      className="font-mono text-sm font-semibold text-[#1A1A16] hover:text-[#7C8B6F] transition-colors"
                    >
                      anuragsharma0120@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#C9AF6B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A16]">Operational Hubs</h3>
                    <p className="font-sans text-xs text-[#7A7A70] font-light">
                      Central Corporate Office: Delhi NCR. Full statutory and operational representation across Mumbai, Bengaluru, Hyderabad, and Tier-1 commercial centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F5F0E6] rounded-3xl p-8 sm:p-12 border border-[#1A1A16]/15 shadow-xl relative overflow-visible">
                {submitted ? (
                  <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#7C8B6F] text-[#F5F0E6] flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[#1A1A16]">
                      Inquiry Received
                    </h3>
                    <p className="font-sans text-base text-[#7A7A70] max-w-md mx-auto font-light">
                      Thank you for contacting Trisecure Solutions. A practice director has been assigned to your brief and will connect with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-editorial-secondary mt-4"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-[#7C8B6F] tracking-widest uppercase font-semibold">
                        // Advisory Briefing Form
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16]">
                        Send Us Your Requirements
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikramaditya Singh"
                          className="editorial-input"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98110 XXXXX"
                          className="editorial-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                      <div>
                        <label className="block font-mono text-xs text-[#7A7A70] uppercase mb-1 font-semibold">
                          Official Email Address *
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

                      {/* Custom Redesigned Service Dropdown */}
                      <div>
                        <CustomServiceSelect
                          value={formData.service}
                          onChange={(val) => setFormData({ ...formData, service: val })}
                          label="Practice Vertical *"
                        />
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
                        className="btn-editorial-primary flex items-center justify-center gap-2"
                      >
                        <span>Transmit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
