import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaConfig {
  title: string;
  description: string;
  keywords?: string;
}

const routeMetaMap: Record<string, MetaConfig> = {
  '/': {
    title: 'Trisecure F&B Solutions | Business Solutions, Simplified | HR, Licensing & Advisory',
    description: 'Single-window corporate advisory across HR payroll infrastructure, PF/ESIC compliance, FSSAI licensing, corporate insurance, debt capital financing, and digital growth.',
    keywords: 'Trisecure F&B Solutions, Business Solutions, Corporate Advisory, HR Services, FSSAI Licensing, Delhi NCR',
  },
  '/about': {
    title: 'About Us | Founder Anurag Sharma & Institutional Pedigree | Trisecure F&B Solutions',
    description: 'Learn about Trisecure F&B Solutions, led by Founder Anurag Sharma. Discover our 12+ years pedigree in F&B corporate governance, statutory compliance, and workforce strategy.',
    keywords: 'About Trisecure, Anurag Sharma, Corporate Advisory Delhi, F&B Consultancy, Enterprise Pedigree',
  },
  '/services': {
    title: 'Practice Verticals & Advisory Hub | Trisecure F&B Solutions',
    description: 'Explore our 4 core institutional practices: Human Capital & Payroll, Corporate Insurance & Debt Advisory, Food Compliance & FSSAI Licensing, and Digital Brand Scaling.',
    keywords: 'Trisecure Services, Corporate Advisory Verticals, Business Practice Areas, Compliance Hub',
  },
  '/services/hr': {
    title: 'HR & Payroll Solutions | PF, ESIC, Labor Law Compliance | Trisecure F&B Solutions',
    description: 'Zero-error payroll processing, PF/EPFO compliance, ESIC registrations, PT/LWF filings, TDS deduction, and New Labour Code appointment letters across India.',
    keywords: 'HR Services, Payroll Processing, PF ESIC Consultant, Labour Law Compliance, CTC Structuring, HR Administration India',
  },
  '/services/insurance-loans': {
    title: 'Corporate Insurance & Debt Financing Advisory | Trisecure F&B Solutions',
    description: 'Enterprise risk mitigation through commercial liability, asset underwriting, group health insurance, working capital loans, and structured debt advisory.',
    keywords: 'Corporate Insurance, Business Loans India, Debt Advisory, Commercial Liability, Group Health Policy',
  },
  '/services/food-compliance': {
    title: 'Food Compliance, FSSAI Licensing, DPCC & MCD Permits | Trisecure F&B Solutions',
    description: 'End-to-end statutory clearances for restaurants, dark kitchens, and FMCG brands: FSSAI State & Central Licenses, DPCC CTE/CTO, MCD Health Trade, and Fire NOC.',
    keywords: 'FSSAI License Consultant, DPCC Pollution Consent, MCD Health Trade License, Eating House Permit, Fire Safety NOC Delhi',
  },
  '/services/digital-marketing': {
    title: 'Digital Marketing & Performance Brand Scaling | Trisecure F&B Solutions',
    description: 'High-ROI digital growth strategies: SEO, high-conversion Meta and Google ad campaigns, visual branding, and reputational positioning for modern enterprises.',
    keywords: 'Digital Marketing Delhi NCR, Performance Marketing, SEO Agency, Brand Scaling, Google Ads Consultant',
  },
  '/licenses': {
    title: 'Statutory License Matrix & Government Permits | Trisecure F&B Solutions',
    description: 'Comprehensive statutory licensing roadmap: FSSAI Central/State, DPCC Green/Orange consent, MCD Health Trade, Shop & Establishment, and Fire NOC clearances.',
    keywords: 'Statutory License Matrix, Government Clearances, Business Permits India, FSSAI Shop Establishment',
  },
  '/pricing': {
    title: 'Transparent Advisory Pricing & Practice Retainers | Trisecure F&B Solutions',
    description: 'Transparent, value-driven pricing structures for business licensing, full-stack HR retainers, corporate insurance advisory, and customized enterprise proposals.',
    keywords: 'Trisecure Pricing, Advisory Retainer Fees, FSSAI Cost, HR Service Packages, Corporate Retainer India',
  },
  '/contact': {
    title: 'Contact Advisory Desk | Senior Partner Direct Access | Trisecure F&B Solutions',
    description: 'Connect with senior practice leads and Founder Anurag Sharma. Guaranteed response within 2 business hours for business compliance, HR, financing, and licensing.',
    keywords: 'Contact Trisecure, Anurag Sharma Contact, Direct Advisory Desk, Business Consultation Delhi NCR',
  },
  '/privacy': {
    title: 'Privacy Policy & Data Protection Governance | Trisecure F&B Solutions',
    description: 'Our data protection protocols, Digital Personal Data Protection Act compliance, non-disclosure commitments, and secure enterprise information governance.',
    keywords: 'Trisecure Privacy Policy, Data Protection, DPDP Act India, Confidentiality Standards',
  },
  '/terms': {
    title: 'Terms & Conditions of Advisory Engagement | Trisecure F&B Solutions',
    description: 'Terms of service, advisory engagement scope, client responsibilities, statutory filing disclaimers, and legal jurisdiction for Trisecure F&B Solutions.',
    keywords: 'Trisecure Terms of Engagement, Legal Terms, Consulting Agreement, Delhi NCR Jurisdiction',
  },
};

export const SEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const currentMeta = routeMetaMap[location.pathname] || {
      title: '404 - Page Not Found | Trisecure F&B Solutions',
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
