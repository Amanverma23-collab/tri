import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaConfig {
  title: string;
  description: string;
  keywords?: string;
}

const routeMetaMap: Record<string, MetaConfig> = {
  '/': {
    title: 'Trisecure Solutions | HR, Insurance & Licensing Hub',
    description: 'Single-window advisory for HR & payroll, PF/ESIC compliance, FSSAI licensing, insurance, business loans, and digital marketing.',
    keywords: 'Trisecure Solutions, Business Solutions, Corporate Advisory, HR Services, FSSAI Licensing, Delhi NCR',
  },
  '/about': {
    title: 'About Trisecure Solutions | HR & Business Advisory',
    description: 'Learn how Trisecure Solutions delivers end-to-end HR, insurance, licensing, and digital marketing support for growing businesses.',
    keywords: 'About Trisecure, Anurag Sharma, Corporate Advisory Delhi, F&B Consultancy, Enterprise Pedigree',
  },
  '/services': {
    title: 'Our Services | HR, Insurance & Licensing Advisory',
    description: 'Explore Trisecure Solutions\' full range of services: HR, insurance & loans, food compliance, and digital marketing under one roof.',
    keywords: 'Trisecure Services, Corporate Advisory Verticals, Business Practice Areas, Compliance Hub',
  },
  '/services/hr': {
    title: 'HR Services for Businesses | Trisecure Solutions',
    description: 'End-to-end HR solutions including recruitment, payroll, compliance, training & development, and employee relations for your team.',
    keywords: 'HR Services, Payroll Processing, PF ESIC Consultant, Labour Law Compliance, CTC Structuring, HR Administration India',
  },
  '/services/insurance-loans': {
    title: 'Insurance & Loan Services | Trisecure Solutions',
    description: 'Comprehensive insurance and loan services including life, health, auto, home, business insurance, and personal or business loans.',
    keywords: 'Corporate Insurance, Business Loans India, Debt Advisory, Commercial Liability, Group Health Policy',
  },
  '/services/food-compliance': {
    title: 'Food Compliance & FSSAI Services | Trisecure',
    description: 'Regulatory compliance, quality assurance, audits, training, and documentation support to keep your food business fully compliant.',
    keywords: 'FSSAI License Consultant, DPCC Pollution Consent, MCD Health Trade License, Eating House Permit, Fire Safety NOC Delhi',
  },
  '/services/digital-marketing': {
    title: 'Digital Marketing Services | Trisecure Solutions',
    description: 'Grow your brand with website development, SEO, social media management, ad campaigns, branding, and professional content creation.',
    keywords: 'Digital Marketing Delhi NCR, Performance Marketing, SEO Agency, Brand Scaling, Google Ads Consultant',
  },
  '/licenses': {
    title: 'Business Licenses We Handle | Trisecure Solutions',
    description: 'We handle FSSAI, Shop & Establishment, MCD Trade, and DPCC licenses end-to-end, from application to approval and renewal support.',
    keywords: 'Statutory License Matrix, Government Clearances, Business Permits India, FSSAI Shop Establishment',
  },
  '/pricing': {
    title: 'License Consultation Charges | Trisecure Solutions',
    description: 'View transparent consultation charges for FSSAI, MCD Trade, Factory, and Shop & Establishment licenses across Delhi NCR locations.',
    keywords: 'Trisecure Pricing, Advisory Retainer Fees, FSSAI Cost, HR Service Packages, Corporate Retainer India',
  },
  '/contact': {
    title: 'Contact Trisecure Solutions | Get a Free Consultation',
    description: 'Get in touch with Trisecure Solutions for HR, insurance, licensing, and digital marketing consultation. Call, email, or message us.',
    keywords: 'Contact Trisecure, Anurag Sharma Contact, Direct Advisory Desk, Business Consultation Delhi NCR',
  },
  '/privacy': {
    title: 'Privacy Policy & Data Protection | Trisecure Solutions',
    description: 'Our data protection protocols, Digital Personal Data Protection Act compliance, non-disclosure commitments, and secure enterprise information governance.',
    keywords: 'Trisecure Privacy Policy, Data Protection, DPDP Act India, Confidentiality Standards',
  },
  '/terms': {
    title: 'Terms & Conditions of Advisory Engagement | Trisecure Solutions',
    description: 'Terms of service, advisory engagement scope, client responsibilities, statutory filing disclaimers, and legal jurisdiction for Trisecure Solutions.',
    keywords: 'Trisecure Terms of Engagement, Legal Terms, Consulting Agreement, Delhi NCR Jurisdiction',
  },
};

export const SEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const currentMeta = routeMetaMap[location.pathname] || {
      title: '404 - Page Not Found | Trisecure Solutions',
      description: 'The requested advisory page could not be located. Explore our corporate directory or contact our direct practice desk.',
      keywords: 'Trisecure, Error 404, Page Not Found',
    };

    // 1. Update Document Title
    document.title = currentMeta.title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'title', currentMeta.title);
    setMetaTag('name', 'description', currentMeta.description);
    if (currentMeta.keywords) {
      setMetaTag('name', 'keywords', currentMeta.keywords);
    }

    // 4. Update OpenGraph Meta Tags
    setMetaTag('property', 'og:title', currentMeta.title);
    setMetaTag('property', 'og:description', currentMeta.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', `https://trisecure.in${location.pathname}`);

    // 5. Update Twitter Meta Tags
    setMetaTag('name', 'twitter:title', currentMeta.title);
    setMetaTag('name', 'twitter:description', currentMeta.description);

    // 6. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://trisecure.in${location.pathname}`);
  }, [location.pathname]);

  return null;
};
