import { Helmet } from 'react-helmet-async';
﻿import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, MessageSquare, Sparkles, Building2, Loader2 } from 'lucide-react';
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
  const [loading, setLoading] = useState(false);

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
          _subject: `New TriSecure Website Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Contact Phone Number': formData.phone,
          'Official Email Address': formData.email,
          'Selected Practice Vertical': formData.service,
          'Requirement Details': formData.message || 'No specific notes provided',
          'Source Form': 'Main Website Contact Page Form',
          'Submission Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
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
    <PageTransition>
      <Helmet>
        <title>Contact Trisecure Solutions | Get a Free Consultation</title>
        <meta name="description" content="Get in touch with Trisecure Solutions for HR, insurance, licensing, and digital marketing consultation. Call, email, or message us." />
        <meta property="og:title" content="Contact Trisecure Solutions | Get a Free Consultation" />
        <meta property="og:description" content="Get in touch with Trisecure Solutions for HR, insurance, licensing, and digital marketing consultation. Call, email, or message us." />
        <meta property="og:type" content="website" />
      </Helmet>
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
                  className="btn-editorial-primary text-xs"
                >
                  <span>Submit Inquiry Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+918585999922"
                  className="btn-editorial-secondary text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7C8B6F]" />
                  <span>Call Direct: +91 8585999922</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-End Bento Box with Anurag Sharma Profile */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#1A1A16] text-[#F5F0E6] shadow-2xl border border-[#1A1A16] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C8B6F] animate-pulse" />
                    <span className="font-mono text-xs text-[#C9AF6B] uppercase tracking-widest font-semibold">
                      Senior Partner Desk
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-white/50 bg-white/10 px-2.5 py-1 rounded-full">
                    Direct Line
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#C9AF6B]/40 shrink-0 bg-[#262621]">
                    <img
                      src="/images/anurag_sharma.jpg"
                      alt="Anurag Sharma - Founder"
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white leading-tight">
                      Anurag Sharma
                    </h3>
                    <p className="font-mono text-xs text-[#C9AF6B] uppercase tracking-wider mt-0.5">
                      Founder & Managing Director
                    </p>
                    <p className="font-sans text-xs text-white/60 mt-1 font-light">
                      F&B Regulatory & Corporate Advisor
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <a
                    href="tel:+918585999922"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-[#C9AF6B] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#C9AF6B]/20 text-[#C9AF6B] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-white/50 uppercase">Primary Helpline</p>
                        <p className="font-mono text-sm font-bold text-white tracking-wider group-hover:text-[#C9AF6B] transition-colors">
                          +91 8585999922
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-transform group-hover:translate-x-1 shrink-0" />
                  </a>

                  <a
                    href="mailto:anuragsharma0120@gmail.com"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-[#7C8B6F] transition-all group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-xl bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center shrink-0">
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
                    <p className="font-sans text-xs text-[#7A7A70] mt-1 font-light">
                      Immediate regulatory, workforce, and underwriting support:
                    </p>
                    <a
                      href="tel:+918585999922"
                      className="font-mono text-sm font-bold text-[#1A1A16] hover:text-[#0072EF] transition-colors mt-2 inline-block"
                    >
                      +91 8585999922 / +91 9716965062
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A16]">Direct Email Communications</h3>
                    <p className="font-sans text-xs text-[#7A7A70] mt-1 font-light">
                      Send RFPs, license dossiers, audit requests, or pitch decks:
                    </p>
                    <a
                      href="mailto:anuragsharma0120@gmail.com"
                      className="font-mono text-sm font-bold text-[#1A1A16] hover:text-[#0072EF] transition-colors mt-2 inline-block"
                    >
                      anuragsharma0120@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#1A1A16]/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A16] text-[#F5F0E6] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A16]">Advisory Desk Working Hours</h3>
                    <p className="font-mono text-xs text-[#7A7A70] mt-1 font-medium">
                      Monday — Saturday: 09:30 AM — 07:00 PM IST
                    </p>
                    <p className="font-mono text-xs text-[#7C8B6F] mt-1">
                      Emergency compliance escalations: 24/7 hotline access
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F0E6] border border-[#1A1A16]/10 shadow-lg">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#7C8B6F]/20 text-[#7C8B6F] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs text-[#7C8B6F] uppercase tracking-widest font-semibold block">
                      Email Dispatched to Executive Desk
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#1A1A16]">
                      Inquiry Successfully Dispatched
                    </h3>
                    <p className="font-sans text-base text-[#7A7A70] max-w-md mx-auto font-light">
                      Thank you for contacting Trisecure Solutions. Your brief has been sent directly to Anurag Sharma (<strong className="text-[#0072EF]">anuragsharma0120@gmail.com</strong>). A practice lead will connect with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-editorial-secondary mt-4 text-xs"
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
                      <p className="font-sans text-xs text-[#7A7A70]">
                        Submissions route directly to Senior Director Desk (<strong className="text-[#1A1A16]">anuragsharma0120@gmail.com</strong>).
                      </p>
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
                          className="editorial-input text-sm"
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
                          className="editorial-input text-sm"
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
                          className="editorial-input text-sm"
                        />
                      </div>

                      {/* Custom Redesigned Service Dropdown */}
                      <div>
                        <CustomServiceSelect
                          value={formData.service}
                          onChange={(val) => setFormData({ ...formData, service: val })}
                          label="Practice Vertical *"
                          hideTags={true}
                          hideIcons={true}
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
                        className="editorial-input resize-none text-sm"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-editorial-primary w-full justify-center text-xs py-3.5"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending directly to anuragsharma0120@gmail.com...</span>
                          </span>
                        ) : (
                          <>
                            <span>Transmit Advisory Brief</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-mono text-xs text-[#7A7A70] text-center">
                      Strict client confidentiality. Response guaranteed within 2 business hours.
                    </p>
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
