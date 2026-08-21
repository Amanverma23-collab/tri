export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  details: string[];
  timeline: string;
  statutoryAuthority?: string;
  keyDeliverables: string[];
}

export interface ServiceVertical {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  iconName: string;
  services: ServiceItem[];
  highlightMetric: {
    value: string;
    label: string;
  };
  whyItMatters: string;
}

export const serviceVerticals: ServiceVertical[] = [
  {
    id: "food-compliance",
    title: "Food Compliance & Licensing",
    tagline: "REGULATORY COMPLIANCE WITHOUT OPERATIONAL DOWNTIME",
    overview: "Comprehensive statutory licensing, environmental clearances, and municipal registrations for food operators, cloud kitchens, retail chains, and manufacturing facilities.",
    iconName: "ShieldCheck",
    highlightMetric: {
      value: "100%",
      label: "Audit-ready legal documentation & regulatory liaison"
    },
    whyItMatters: "Unlicensed operations risk immediate seizure, heavy statutory penalties, and reputational damage. TriSecure ensures absolute legal standing from day one.",
    services: [
      {
        id: "fssai-licensing",
        name: "FSSAI License (Basic, State & Central)",
        shortDesc: "Complete application filing, product categorization, inspection readiness, and mandatory annual returns for Food Business Operators (FBOs).",
        details: [
          "Eligibility assessment between Basic Registration, State License, and Central License",
          "FoSCoS portal filing with exact food category mapping and layout validation",
          "Water test report coordination, FSMS plan drafting, and inspection representation",
          "Annual return submission (Form D1) and modification of existing licenses"
        ],
        timeline: "7–15 Business Days",
        statutoryAuthority: "Food Safety and Standards Authority of India (FSSAI)",
        keyDeliverables: ["FSSAI 14-Digit Registration/License Certificate", "FSMS Plan Copy", "Compliance Calendar"]
      },
      {
        id: "shop-establishment",
        name: "Shop & Establishment Act Registration",
        shortDesc: "Mandatory commercial establishment registration with state labor departments across Indian states.",
        details: [
          "Commercial entity registration within 30 days of commencement",
          "Employee working hours, holiday schedules, and wage register compliance",
          "Liaison with local municipal and state labor inspectors",
          "Annual renewal and employee headcount updates"
        ],
        timeline: "3–7 Business Days",
        statutoryAuthority: "State Labour Department",
        keyDeliverables: ["Registration Certificate (Gumasta / Shop Act)", "Statutory Display Formats"]
      },
      {
        id: "health-trade-license",
        name: "Health & Trade License",
        shortDesc: "Municipal corporation certifications verifying public health, sanitation, and safety parameters for commercial premises.",
        details: [
          "Municipal Corporation (MCD/BMC/BBMP etc.) zoning and premises scrutiny",
          "Sanitation, waste disposal, and fire clearance document verification",
          "On-site health inspector liaison and objection resolution",
          "Timely annual renewal filings to avoid municipal sealings"
        ],
        timeline: "10–20 Business Days",
        statutoryAuthority: "Municipal Corporation / Local Body",
        keyDeliverables: ["Municipal Trade License Certificate", "Health Clearance Document"]
      },
      {
        id: "dpcc-clearance",
        name: "DPCC / State Pollution Control Clearances",
        shortDesc: "Consent to Establish (CTE) and Consent to Operate (CTO) for food processing, hospitality, and commercial operations.",
        details: [
          "Categorization into Green, Orange, or White industry schedules",
          "Effluent Treatment (ETP) / Grease trap adequacy documentation",
          "Online DPCC/SPCB portal dossier submission and compliance tracking",
          "Periodic environmental compliance auditing and consent renewal"
        ],
        timeline: "15–30 Business Days",
        statutoryAuthority: "Delhi Pollution Control Committee / State PCB",
        keyDeliverables: ["Consent to Establish (CTE)", "Consent to Operate (CTO)"]
      },
      {
        id: "compliance-renewals",
        name: "Renewals & Statutory Support",
        shortDesc: "End-to-end monitoring of license validity, automated renewal alerts, and dispute resolution.",
        details: [
          "Proactive renewal tracking 60 days before expiration",
          "Rectification of government notices and inspection show-cause queries",
          "Multi-location corporate license portfolio management",
          "Quarterly regulatory audit reports"
        ],
        timeline: "Continuous Monitoring",
        statutoryAuthority: "All Statutory Boards",
        keyDeliverables: ["Active Compliance Dashboard", "Renewal Endorsements"]
      }
    ]
  },
  {
    id: "hr-services",
    title: "HR Services & Workforce Solutions",
    tagline: "SYSTEMATIC TALENT, PAYROLL, AND LABOUR COMPLIANCE",
    overview: "Scalable workforce infrastructure covering executive talent acquisition, error-free automated payroll, employee development, and statutory labour law compliance.",
    iconName: "Users",
    highlightMetric: {
      value: "Zero Error",
      label: "Statutory payroll calculation & labour law compliance"
    },
    whyItMatters: "Workforce inefficiency and non-compliance with EPF/ESI laws lead to severe operational friction. TriSecure provides an institutional-grade HR engine.",
    services: [
      {
        id: "recruitment-staffing",
        name: "Recruitment & Staffing",
        shortDesc: "End-to-end talent sourcing, technical screening, background verification, and lateral/bulk workforce deployment.",
        details: [
          "Role-specific competency mapping and talent pipeline building",
          "Multi-stage vetting including technical assessment and reference verification",
          "Executive search for leadership roles and contract-to-hire staffing",
          "Seamless candidate onboarding and offer lifecycle management"
        ],
        timeline: "Ongoing / Need-Based",
        keyDeliverables: ["Curated Talent Shortlists", "Verified Candidate Profiles", "Onboarding Kits"]
      },
      {
        id: "payroll-management",
        name: "Payroll Management & Processing",
        shortDesc: "Accurate monthly payroll computation, tax withholding, payslip distribution, and statutory deductions.",
        details: [
          "Automated salary computation with customized pay structures and allowances",
          "TDS calculation, Form 16 issuance, and investment declaration processing",
          "Reimbursement management, attendance/leave reconciliation",
          "Digital payslips, bank disbursement files, and MIS reporting"
        ],
        timeline: "Monthly Cycle",
        keyDeliverables: ["Monthly Payroll Register", "Employee Payslips", "Statutory Challans"]
      },
      {
        id: "compliance-regulatory",
        name: "Labour Law & Statutory Compliance",
        shortDesc: "Complete management of EPF, ESIC, Professional Tax, Labour Welfare Fund, and POSH compliance.",
        details: [
          "Monthly EPF and ESIC return filings and electronic challan generation",
          "Maintenance of statutory registers under Factories Act and Minimum Wages Act",
          "Internal Committee setup and POSH (Prevention of Sexual Harassment) training",
          "Labour inspection assistance and statutory notices management"
        ],
        timeline: "Monthly / Annual",
        statutoryAuthority: "EPFO, ESIC, Ministry of Labour & Employment",
        keyDeliverables: ["EPF/ESIC Filed Challans", "Statutory Audit Certificate", "POSH Policy Blueprint"]
      },
      {
        id: "training-development",
        name: "Employee Training & Development",
        shortDesc: "Custom corporate training programs on compliance, technical competencies, and managerial effectiveness.",
        details: [
          "Organizational training needs analysis (TNA)",
          "Workplace ethics, compliance standards, and leadership bootcamps",
          "Post-training effectiveness evaluation and skill progression tracking",
          "Customized hybrid modules for distributed workforces"
        ],
        timeline: "Structured Cohorts",
        keyDeliverables: ["Training Modules", "Employee Assessment Metrics", "Certification"]
      },
      {
        id: "employee-relations",
        name: "Employee Relations & Policy Structuring",
        shortDesc: "Structuring transparent HR policies, code of conduct, performance management, and grievance frameworks.",
        details: [
          "Comprehensive Employee Handbook and Code of Conduct formulation",
          "Objective Performance Appraisal (KPI/OKR) framework design",
          "Formal grievance redressal and conflict mediation protocols",
          "Exit management, separation interviews, and full & final settlement"
        ],
        timeline: "Institutional Setup",
        keyDeliverables: ["Employee Handbook", "Appraisal Matrix", "Grievance Policy Document"]
      }
    ]
  },
  {
    id: "insurance-loans",
    title: "Insurance & Loan Advisory",
    tagline: "TAILORED CAPITAL AND RISK SHIELDING FOR GROWTH",
    overview: "Institutional financial advisory connecting individuals and enterprises to optimal credit facilities, capital loans, and structured insurance coverage with leading banking partners.",
    iconName: "Landmark",
    highlightMetric: {
      value: "Multi-Bank",
      label: "Lending network for competitive interest rates & quick processing"
    },
    whyItMatters: "Access to working capital and tailored insurance protects business continuity and fuels expansion without restrictive capital bottlenecks.",
    services: [
      {
        id: "business-loans",
        name: "Business & Working Capital Loans",
        shortDesc: "Secured and unsecured credit facilities, MSME financing, machinery loans, and cash credit lines.",
        details: [
          "Financial profile analysis and balance sheet debt-capacity evaluation",
          "Preparation of detailed Project Reports (DPR) and CMA data for banking syndication",
          "Working capital limits (Cash Credit / Overdraft) and term loans",
          "Liaison with PSU banks, private banks, and NBFCs for lowest interest rates"
        ],
        timeline: "5–10 Business Days",
        keyDeliverables: ["Approved Sanction Letter", "Disbursement Advisory", "Repayment Schedule"]
      },
      {
        id: "home-loans",
        name: "Home Loans & Balance Transfer",
        shortDesc: "Optimal financing for residential property acquisition, construction, and high-saving balance transfers.",
        details: [
          "Property title assessment and legal feasibility review",
          "Comparison of floating vs. fixed interest options across top tier banks",
          "Lower ROI balance transfer advisory with top-up loan options",
          "End-to-end documentation pickup and doorstep processing"
        ],
        timeline: "7–12 Business Days",
        keyDeliverables: ["Lowest-Rate Loan Sanction", "Title Clearance Advisory"]
      },
      {
        id: "personal-loans",
        name: "Personal Loans",
        shortDesc: "Collateral-free personal financing with transparent terms, flexible repayment tenures, and quick disbursals.",
        details: [
          "Instant eligibility check with zero impact on credit score",
          "Tenures ranging from 12 to 60 months with minimal documentation",
          "Direct banking partnerships ensuring zero hidden intermediary charges",
          "Pre-approved limits assessment for salaried and self-employed professionals"
        ],
        timeline: "24–48 Hours",
        keyDeliverables: ["Fast Direct Disbursement", "Transparent Sanction Terms"]
      },
      {
        id: "auto-loans",
        name: "Auto & Commercial Vehicle Loans",
        shortDesc: "Financing solutions for commercial vehicle fleets, corporate transport, and personal automobiles.",
        details: [
          "Up to 90–100% on-road financing options depending on asset profile",
          "Fleet financing options for logistics, transport, and corporate operations",
          "Quick hypothecation clearance and flexible EMI structures",
          "Competitive interest rates with minimal foreclosure penalties"
        ],
        timeline: "2–4 Business Days",
        keyDeliverables: ["Vehicle Sanction Order", "Insurance Tie-in Options"]
      },
      {
        id: "insurance-solutions",
        name: "Corporate & Individual Insurance",
        shortDesc: "Risk mitigation coverage including Group Health Insurance, Fire & Asset cover, Keyman Insurance, and Marine/Transit cover.",
        details: [
          "Corporate Group Medical Insurance (GMC) and Group Personal Accident (GPA)",
          "Commercial Property, Fire & Special Perils, and Machinery Breakdown insurance",
          "Directors & Officers (D&O) liability and Professional Indemnity",
          "Claims assistance cell for prompt settlement without bureaucratic delay"
        ],
        timeline: "Instant Underwriting",
        keyDeliverables: ["Comprehensive Insurance Policy", "Claims Support Hotline"]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    tagline: "MEASURABLE ENTERPRISE VISIBILITY AND DEMAND GENERATION",
    overview: "Data-backed digital marketing strategies designed to position your brand with corporate gravity, acquire high-value customer inquiries, and build sustainable market presence.",
    iconName: "TrendingUp",
    highlightMetric: {
      value: "ROI Driven",
      label: "Attribution-focused performance and authority building"
    },
    whyItMatters: "Modern corporate buyers and consumers research online before making decisions. TriSecure builds a serious digital presence that converts attention into revenue.",
    services: [
      {
        id: "performance-marketing",
        name: "Performance Marketing & Paid Search",
        shortDesc: "High-intent lead generation on Google Ads, LinkedIn Campaign Manager, and Meta Ads with strict CPA control.",
        details: [
          "High-intent search keyword architecture targeting decision-makers",
          "B2B LinkedIn account-based marketing (ABM) for enterprise service verticals",
          "Conversion tracking, UTM attribution modeling, and automated bid optimization",
          "Weekly performance reporting with verified cost-per-acquisition (CPA) metrics"
        ],
        timeline: "Continuous Optimization",
        keyDeliverables: ["Live Ads Dashboard", "Weekly Performance Reports", "Lead Delivery Pipeline"]
      },
      {
        id: "seo-visibility",
        name: "Search Engine Optimization (SEO)",
        shortDesc: "Technical website optimization, localized search ranking, and high-authority industry content architecture.",
        details: [
          "Comprehensive technical audit (Core Web Vitals, site speed, crawlability)",
          "Keyword strategy focused on commercial queries and local geographic modifiers",
          "Authority backlink acquisition from verified trade and business publications",
          "Structured data schema implementation for high search engine visibility"
        ],
        timeline: "3–6 Month Growth Curve",
        keyDeliverables: ["Technical Audit Report", "Keyword Rank Tracking", "Monthly Organic Traffic Growth"]
      },
      {
        id: "brand-positioning",
        name: "Brand Positioning & Narrative",
        shortDesc: "Corporate identity structuring, professional messaging frameworks, and executive brand positioning.",
        details: [
          "Brand tone-of-voice and value proposition documentation",
          "Corporate presentation decks, sales collateral, and executive whitepapers",
          "Website copy optimization designed to establish immediate trust",
          "Visual asset consistency across digital touchpoints"
        ],
        timeline: "2–4 Weeks",
        keyDeliverables: ["Brand Messaging Guide", "Corporate Sales Collateral", "Digital Identity Assets"]
      },
      {
        id: "conversion-funnels",
        name: "Conversion Rate Optimization (CRO)",
        shortDesc: "Structuring frictionless customer journeys, high-converting enquiry funnels, and landing page engineering.",
        details: [
          "User behavior heatmaps, drop-off analysis, and scroll tracking",
          "A/B split testing of headlines, call-to-actions, and inquiry forms",
          "Speed optimization and mobile usability enhancements",
          "CRM integration for instant lead notification and automated follow-ups"
        ],
        timeline: "Ongoing Sprints",
        keyDeliverables: ["CRO Audit & Action Plan", "Optimized Landing Page Frameworks"]
      }
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    name: "UNDERSTAND",
    title: "Comprehensive Business & Risk Audit",
    desc: "We analyze your specific business model, jurisdiction, headcount, or capital needs to identify exact statutory obligations and growth opportunities.",
    icon: "Search"
  },
  {
    step: "02",
    name: "RECOMMEND",
    title: "Customized Roadmap & Fee Transparency",
    desc: "You receive a clear, actionable execution blueprint detailing required filings, lending partners, timeline milestones, and fixed pricing with zero hidden charges.",
    icon: "FileText"
  },
  {
    step: "03",
    name: "EXECUTE",
    title: "Specialist-Led Implementation",
    desc: "Our dedicated regulatory specialists, HR consultants, or loan advisors handle all liaison, documentation, portal filings, and verification procedures.",
    icon: "Zap"
  },
  {
    step: "04",
    name: "SUPPORT",
    title: "Continuous Lifecycle Advisory",
    desc: "We maintain ongoing compliance calendars, annual return tracking, workforce updates, and proactive renewal alerts to ensure permanent business peace of mind.",
    icon: "ShieldAlert"
  }
];

export const whyTriSecurePoints = [
  {
    number: "01",
    title: "Regulatory Insight & Zero-Error Filing",
    desc: "Our compliance teams maintain direct working expertise with statutory authorities (FSSAI, DPCC, Labour Dept, EPFO), preventing costly rejections and regulatory penalties."
  },
  {
    number: "02",
    title: "Unified Single-Window Solutions",
    desc: "Eliminate the fragmentation of managing separate consultants for food licenses, HR payroll, financial loans, and digital marketing. TriSecure handles your entire operational backend."
  },
  {
    number: "03",
    title: "Client-Centric Speed & Dedicated Account Leads",
    desc: "Every client is assigned a dedicated relationship manager ensuring real-time status updates, rapid turnaround times, and accountable milestone delivery."
  },
  {
    number: "04",
    title: "Enterprise Data Confidentiality & Integrity",
    desc: "Your sensitive corporate records, employee data, and financial statements are protected with strict NDA protocols and enterprise-grade data security practices."
  }
];
