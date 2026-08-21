export interface BusinessProfile {
  id: string;
  categoryName: string;
  badge: string;
  description: string;
  mandatoryLicenses: {
    name: string;
    authority: string;
    criticality: "High" | "Mandatory" | "Recommended";
    notes: string;
  }[];
  recommendedFinancials: {
    facility: string;
    typicalTicket: string;
    idealFor: string;
  }[];
  hrRequirements: {
    role: string;
    statutoryMandate: string;
  }[];
}

export const businessProfiles: BusinessProfile[] = [
  {
    id: "food-beverage",
    categoryName: "Food & Beverage (Cloud Kitchen / Restaurant / Cafe)",
    badge: "Hospitality & Food Retail",
    description: "For food outlets, dining restaurants, cloud kitchens, and bakeries needing immediate municipal and statutory clearance before opening.",
    mandatoryLicenses: [
      {
        name: "FSSAI Food License (State/Central)",
        authority: "FSSAI",
        criticality: "Mandatory",
        notes: "Required before accepting customer orders or listing on food delivery platforms."
      },
      {
        name: "Municipal Health & Trade License",
        authority: "Local Municipal Corporation (MCD/BMC/BBMP)",
        criticality: "Mandatory",
        notes: "Certifies premise sanitation, hygiene, and safe operating standards."
      },
      {
        name: "Shop & Establishment Act Registration",
        authority: "State Labour Dept",
        criticality: "Mandatory",
        notes: "Statutory trade registration required within 30 days of opening premises."
      },
      {
        name: "DPCC / SPCB Environmental Consent",
        authority: "Pollution Control Board",
        criticality: "High",
        notes: "Mandatory for commercial kitchens with oil traps/effluent generation."
      },
      {
        name: "Fire Safety Clearance / NOC",
        authority: "Fire Department",
        criticality: "Recommended",
        notes: "Applicable based on floor area and seating capacity."
      }
    ],
    recommendedFinancials: [
      {
        facility: "Equipment & Kitchen Setup Loan",
        typicalTicket: "₹10 Lakh – ₹1.5 Crore",
        idealFor: "Commercial ovens, refrigeration, POS infrastructure, and kitchen fitouts"
      },
      {
        facility: "Working Capital Cash Credit (CC)",
        typicalTicket: "₹5 Lakh – ₹50 Lakh",
        idealFor: "Managing inventory, vendor payouts, and daily operational cash flow"
      }
    ],
    hrRequirements: [
      {
        role: "Chef & Service Staffing",
        statutoryMandate: "Medical fitness certification & basic food safety training"
      },
      {
        role: "Payroll & ESIC Registration",
        statutoryMandate: "Mandatory if workforce exceeds statutory threshold (10/20 employees)"
      }
    ]
  },
  {
    id: "tech-enterprise",
    categoryName: "Technology, SaaS & Professional Services",
    badge: "Enterprise & Scale-up",
    description: "For technology firms, consulting practices, and high-growth services needing robust payroll, EPF/ESIC compliance, and executive talent.",
    mandatoryLicenses: [
      {
        name: "Shop & Commercial Establishment Act",
        authority: "State Labour Dept",
        criticality: "Mandatory",
        notes: "Core registration for IT parks and commercial office spaces."
      },
      {
        name: "EPFO & ESIC Employer Registration",
        authority: "Ministry of Labour",
        criticality: "Mandatory",
        notes: "Mandatory monthly filing for employee provident fund and health insurance."
      },
      {
        name: "Professional Tax (PT) Registration",
        authority: "State Commercial Tax Dept",
        criticality: "Mandatory",
        notes: "Monthly salary deduction and annual state employer returns."
      },
      {
        name: "POSH Internal Committee Setup",
        authority: "Statutory Compliance",
        criticality: "Mandatory",
        notes: "Mandatory for all offices with 10+ employees with annual reporting."
      }
    ],
    recommendedFinancials: [
      {
        facility: "Unsecured Business Growth Credit",
        typicalTicket: "₹25 Lakh – ₹3 Crore",
        idealFor: "Talent acquisition, runway expansion, and technology infrastructure"
      },
      {
        facility: "Corporate Group Medical Insurance (GMC)",
        typicalTicket: "Comprehensive Cover",
        idealFor: "Employee retention, family healthcare cover, and tax benefits"
      }
    ],
    hrRequirements: [
      {
        role: "Tech & Management Hiring",
        statutoryMandate: "Structured employment agreements with IP & confidentiality clauses"
      },
      {
        role: "Automated Monthly Payroll",
        statutoryMandate: "Zero-error TDS withholding, Form 16, and salary disbursement registers"
      }
    ]
  },
  {
    id: "manufacturing-logistics",
    categoryName: "Manufacturing, FMCG & Logistics",
    badge: "Industrial & Production",
    description: "For food manufacturers, packaging units, warehouses, and transport fleets requiring high-tier compliance, pollution consent, and asset financing.",
    mandatoryLicenses: [
      {
        name: "FSSAI Central Manufacturing License",
        authority: "FSSAI Central",
        criticality: "Mandatory",
        notes: "Required for food processing, packing, or interstate distribution units."
      },
      {
        name: "Pollution Consent to Establish / Operate (CTE/CTO)",
        authority: "State PCB / DPCC",
        criticality: "Mandatory",
        notes: "Air/water act consent verifying industrial emissions and waste treatment."
      },
      {
        name: "Factory License & Industrial Safety",
        authority: "Directorate of Industrial Safety",
        criticality: "Mandatory",
        notes: "Workplace hazard inspection, machinery guards, and worker safety approvals."
      },
      {
        name: "Trade & Warehouse Storage License",
        authority: "Municipal Authority",
        criticality: "Mandatory",
        notes: "Commercial storage and goods transit authorization."
      }
    ],
    recommendedFinancials: [
      {
        facility: "Industrial Machinery & Term Loan",
        typicalTicket: "₹50 Lakh – ₹10 Crore",
        idealFor: "Heavy machinery purchase, plant automation, and warehouse setup"
      },
      {
        facility: "Commercial Vehicle & Fleet Finance",
        typicalTicket: "Up to 90% On-Road",
        idealFor: "Logistics trucks, refrigerated transport, and corporate fleets"
      }
    ],
    hrRequirements: [
      {
        role: "Factory & Shift Workforce Management",
        statutoryMandate: "Strict adherence to Factories Act overtime limits & safety gear protocols"
      },
      {
        role: "Labour Welfare Fund (LWF) & EPF",
        statutoryMandate: "Statutory monthly returns with zero penalty exposure"
      }
    ]
  }
];
