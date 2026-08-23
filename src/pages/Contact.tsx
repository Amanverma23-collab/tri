import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
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
      {/* 1. MASTHEAD: Oversized "Let's Talk" */}
      <section className="relative pt-36 pb-20 bg-[#F5F0E6] border-b border-[#1A1A16]/10 overflow-hidden">
        <div className="editorial-container">
          <div className="flex items-center gap-2 font-mono text-xs text-[#7C8B6F] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#7C8B6F]" />
            <span>Direct Inquiry Desk // Contact</span>
          </div>

          <h1 className="font-serif text-display-giant text-[#1A1A16] font-bold tracking-tight">
            Let's Talk
          </h1>

          <p className="font-sans text-lg sm:text-2xl text-[#7A7A70] max-w-3xl font-light mt-4">
            Have a project, compliance audit, insurance review, or funding requirement in mind? Reach out to our executive team directly.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION: Editorial Grid */}
      <section className="py-24 sm:py-32 bg-[#FAF6EE] border-b border-[#1A1A16]/10">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Col: Contact Details with Large Serif Type Treatment & Click-to-Action Buttons */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-4">
                  // Direct Communication Channels
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A16] mb-8">
                  Get in touch directly with our leadership team.
                </h2>
              </div>

              {/* Direct Phone Block */}
              <div className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7C8B6F]/15 text-[#7C8B6F] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#7A7A70] uppercase">Direct Phone Line</span>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A16]">
                      +91 8585999922
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+918585999922"
                  className="btn-editorial-primary w-full justify-center text-xs"
                  data-cursor="Call"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Click to Call Now</span>
                </a>
              </div>

              {/* Direct Email Block */}
              <div className="p-8 rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9AF6B]/20 text-[#C9AF6B] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1A1A16]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#7A7A70] uppercase">Official Email</span>
                    <p className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A16] break-all">
                      anuragsharma0120@gmail.com
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:anuragsharma0120@gmail.com"
                  className="btn-editorial-secondary w-full justify-center text-xs"
                  data-cursor="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Click to Send Email</span>
                </a>
              </div>

              {/* Operational SLA */}
              <div className="p-6 rounded-2xl bg-[#EFE9DC] flex items-center gap-4 text-xs text-[#7A7A70]">
                <Clock className="w-5 h-5 text-[#7C8B6F] shrink-0" />
                <span>
                  <strong className="text-[#1A1A16]">Business Response SLA:</strong> All inbound inquiries receive an executive response within 2 business hours.
                </span>
              </div>
            </div>

            {/* Right Col: Editorial Form with Underline Inputs */}
            <div className="lg:col-span-7 bg-[#F5F0E6] rounded-3xl p-8 sm:p-14 border border-[#1A1A16]/15 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#7C8B6F] text-[#F5F0E6] flex items-center justify-center mb-6 shadow-xl">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-[#1A1A16]">
                    Message Dispatched
                  </h3>
                  <p className="font-sans text-base text-[#7A7A70] max-w-md mx-auto mb-8 font-light">
                    Thank you, <strong className="text-[#1A1A16]">{formData.name}</strong>. Your inquiry has been routed to our managing director. We will call you at <strong className="text-[#7C8B6F]">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-editorial-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest block mb-2">
                      // Direct Inquiry Form
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#1A1A16]">
                      Tell us about your requirements
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A70]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anurag Sharma"
                        className="editorial-input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A70]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="anurag@company.com"
                          className="editorial-input"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A70]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 8585999922"
                          className="editorial-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A70]">
                        Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="editorial-input cursor-pointer"
                      >
                        <option value="All-in-One Advisory">All-in-One Corporate Advisory</option>
                        <option value="HR Services">HR & Workforce Solutions</option>
                        <option value="Insurance & Loans">Insurance & Loan Financing</option>
                        <option value="Food Compliance">Food Compliance & FSSAI</option>
                        <option value="Digital Marketing">Digital Marketing & Web</option>
                        <option value="Licenses">MCD / DPCC / Factory / Shop Act</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A70]">
                        Your Message / Scope of Work *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your current business stage, license requirements, team size, or target timeline..."
                        className="editorial-input resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#7A7A70]">
                      <ShieldCheck className="w-4 h-4 text-[#7C8B6F]" />
                      <span>Non-disclosure & data privacy guaranteed.</span>
                    </div>

                    <button
                      type="submit"
                      className="btn-editorial-primary"
                      data-cursor="Send"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
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
