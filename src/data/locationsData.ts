export interface LocationRecord {
  id: string;
  city: string;
  district: string;
  state: string;
  region: "North" | "South" | "West" | "East" | "Central";
  fssaiJurisdiction: string;
  labourDepartment: string;
  pollutionControlBoard: string;
  bankingCluster: string;
  fieldSupport: string;
  popularServices: string[];
}

export const locationDatabase: LocationRecord[] = [
  {
    id: "delhi-ncr-central",
    city: "New Delhi",
    district: "Central Delhi / South Delhi",
    state: "Delhi (NCR)",
    region: "North",
    fssaiJurisdiction: "FSSAI Central / Delhi State Food Safety Dept (Mayur Bhawan)",
    labourDepartment: "Department of Labour, GNCTD (Pusa Road / Kasturba Gandhi Marg)",
    pollutionControlBoard: "Delhi Pollution Control Committee (DPCC - Kashmere Gate)",
    bankingCluster: "PSU & Private Banks Regional Hubs (Connaught Place & Nehru Place)",
    fieldSupport: "Direct On-site Field Representation & Municipal Liaison",
    popularServices: ["FSSAI Central License", "DPCC Consent (CTE/CTO)", "MCD Health Trade License", "Corporate HR & Payroll", "Business Loans"]
  },
  {
    id: "delhi-ncr-gurgaon",
    city: "Gurugram (Gurgaon)",
    district: "Gurugram",
    state: "Haryana",
    region: "North",
    fssaiJurisdiction: "Haryana FDA / FSSAI Northern Regional Office",
    labourDepartment: "Labour Department Haryana (Sector 12, Gurugram)",
    pollutionControlBoard: "Haryana State Pollution Control Board (HSPCB)",
    bankingCluster: "Cyber City & Golf Course Road Corporate Credit Desks",
    fieldSupport: "Direct Corporate Workforce & Compliance Support",
    popularServices: ["Corporate HR & Staffing", "Shop & Commercial Establishment Act", "FSSAI State License", "Fintech & Business Loans"]
  },
  {
    id: "delhi-ncr-noida",
    city: "Noida & Greater Noida",
    district: "Gautam Buddha Nagar",
    state: "Uttar Pradesh",
    region: "North",
    fssaiJurisdiction: "UP Food Safety and Drug Administration (FSDA Gautam Buddha Nagar)",
    labourDepartment: "Deputy Labour Commissioner Office (Sector 12, Noida)",
    pollutionControlBoard: "UP Pollution Control Board (UPPCB Sector 1)",
    bankingCluster: "Sector 18 Commercial Financial District",
    fieldSupport: "Industrial & Cloud Kitchen Verification Assistance",
    popularServices: ["FSSAI License", "UPPCB Industrial Consent", "MSME Working Capital", "Shop Act Registration"]
  },
  {
    id: "mumbai-mmr",
    city: "Mumbai & Navi Mumbai",
    district: "Mumbai City / Mumbai Suburban / Thane",
    state: "Maharashtra",
    region: "West",
    fssaiJurisdiction: "FDA Maharashtra (Bandra Kurla Complex) & FSSAI Western Region",
    labourDepartment: "Office of the Commissioner of Labour (BKC & Thane)",
    pollutionControlBoard: "Maharashtra Pollution Control Board (MPCB Sion)",
    bankingCluster: "BKC & Nariman Point Commercial Banking Headquarters",
    fieldSupport: "Full Municipal Corporation (BMC/NMMC) Liaison",
    popularServices: ["BMC Health Trade License", "FSSAI Central/State License", "Corporate GMC Insurance", "Executive Staffing"]
  },
  {
    id: "pune-city",
    city: "Pune",
    district: "Pune",
    state: "Maharashtra",
    region: "West",
    fssaiJurisdiction: "FDA Maharashtra Pune Regional Directorate",
    labourDepartment: "Labour Commissionerate, Wakdewadi, Pune",
    pollutionControlBoard: "MPCB Regional Office, Jog Center, Pune",
    bankingCluster: "Shivajinagar & Hinjewadi Corporate Loan Hubs",
    fieldSupport: "Tech Parks & Industrial Zone Advisory",
    popularServices: ["HR Statutory Compliance (EPF/ESIC)", "Shop Act Gumasta", "Business & Term Loans", "FSSAI Cloud Kitchen Registration"]
  },
  {
    id: "bengaluru-urban",
    city: "Bengaluru (Bangalore)",
    district: "Bengaluru Urban / Rural",
    state: "Karnataka",
    region: "South",
    fssaiJurisdiction: "Karnataka Food Safety Directorate & FSSAI Southern Region",
    labourDepartment: "Department of Labour, Karmika Bhavana, Bannerghatta Road",
    pollutionControlBoard: "Karnataka State Pollution Control Board (KSPCB Church Street)",
    bankingCluster: "MG Road & Whitefield Commercial Credit Hubs",
    fieldSupport: "Dedicated Startup & Enterprise Field Operations",
    popularServices: ["BBMP Trade License", "FSSAI Food License", "Tech Staffing & Payroll", "Commercial MSME Loans"]
  },
  {
    id: "hyderabad-ts",
    city: "Hyderabad",
    district: "Hyderabad / Rangareddy / Medchal",
    state: "Telangana",
    region: "South",
    fssaiJurisdiction: "Institute of Preventive Medicine (IPM) / Food Safety Telangana",
    labourDepartment: "Telangana Labour Department (RTC X Roads, Hyderabad)",
    pollutionControlBoard: "Telangana State Pollution Control Board (TSPCB Sanathnagar)",
    bankingCluster: "Hitec City & Gachibowli Financial District",
    fieldSupport: "GHMC Licensing and Corporate HR Field Cell",
    popularServices: ["GHMC Trade License", "FSSAI State License", "Corporate Group Insurance", "Working Capital Loan"]
  },
  {
    id: "chennai-city",
    city: "Chennai",
    district: "Chennai / Kanchipuram / Tiruvallur",
    state: "Tamil Nadu",
    region: "South",
    fssaiJurisdiction: "Designated Officer - Food Safety Dept, DMS Campus, Teynampet",
    labourDepartment: "Labour Commissioner Office, DMS Complex, Chennai",
    pollutionControlBoard: "Tamil Nadu Pollution Control Board (TNPCB Guindy)",
    bankingCluster: "Mount Road & Nungambakkam Banking District",
    fieldSupport: "Greater Chennai Corporation (GCC) Trade Representation",
    popularServices: ["GCC Trade License", "FSSAI Manufacturing License", "Statutory Labour Compliance", "Corporate Loans"]
  },
  {
    id: "ahmedabad-guj",
    city: "Ahmedabad & Gandhinagar",
    district: "Ahmedabad / Gandhinagar",
    state: "Gujarat",
    region: "West",
    fssaiJurisdiction: "Gujarat FDCA (Food and Drugs Control Administration Gandhinagar)",
    labourDepartment: "Office of the Labour Commissioner, Udhyog Bhavan, Gandhinagar",
    pollutionControlBoard: "Gujarat Pollution Control Board (GPCB Sector 10A)",
    bankingCluster: "SG Highway & GIFT City Financial Institutions",
    fieldSupport: "Manufacturing & Commercial Enterprise Field Help",
    popularServices: ["GPCB Environmental Consent", "FSSAI Manufacturing & Export", "MSME & Capital Loans", "Payroll Outsourcing"]
  },
  {
    id: "jaipur-raj",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    region: "North",
    fssaiJurisdiction: "Rajasthan Food Safety Directorate, Swasthya Bhawan",
    labourDepartment: "Labour Department Rajasthan (Shram Bhawan, Hasanpura)",
    pollutionControlBoard: "Rajasthan State Pollution Control Board (RSPCB Jhalana)",
    bankingCluster: "Tonk Road & MI Road Commercial Credit Centres",
    fieldSupport: "Heritage Hospitality & Retail Advisory",
    popularServices: ["FSSAI License & Trade Clearance", "Hospitality Staffing", "Business Expansion Loan", "Digital Marketing"]
  },
  {
    id: "lucknow-up",
    city: "Lucknow",
    district: "Lucknow / Kanpur",
    state: "Uttar Pradesh",
    region: "North",
    fssaiJurisdiction: "UP Food Safety & Drug Administration (FSDA Lucknow)",
    labourDepartment: "Labour Commissioner Office (AP Sen Road, Lucknow)",
    pollutionControlBoard: "UP Pollution Control Board (UPPCB Gomti Nagar)",
    bankingCluster: "Hazratganj & Gomti Nagar Financial Hubs",
    fieldSupport: "Direct Regulatory & Government Department Liaison",
    popularServices: ["FSSAI Food Licensing", "Shop & Establishment Act", "Business Loans & Project Reports", "Trade License"]
  },
  {
    id: "kolkata-wb",
    city: "Kolkata",
    district: "Kolkata / North 24 Parganas / Howrah",
    state: "West Bengal",
    region: "East",
    fssaiJurisdiction: "West Bengal Health & Family Welfare (Food Safety Wing Swasthya Bhawan)",
    labourDepartment: "Labour Directorate, New Secretariat Buildings, Kolkata",
    pollutionControlBoard: "West Bengal Pollution Control Board (WBPCB Salt Lake)",
    bankingCluster: "BBD Bagh & Salt Lake Sector V Financial District",
    fieldSupport: "KMC Municipal Clearance & Corporate Support",
    popularServices: ["KMC Trade License", "FSSAI State License", "Workforce Recruitment", "Commercial Vehicle Finance"]
  },
  {
    id: "chandigarh-tri",
    city: "Chandigarh, Mohali & Panchkula (Tricity)",
    district: "Chandigarh (UT) / SAS Nagar Mohali",
    state: "Punjab / Haryana / UT",
    region: "North",
    fssaiJurisdiction: "Food Safety Department (Sector 16, Chandigarh)",
    labourDepartment: "Labour Department UT / Punjab Shram Bhawan Mohali",
    pollutionControlBoard: "Chandigarh Pollution Control Committee (CPCC Sector 19)",
    bankingCluster: "Sector 17 & Mohali Phase 8 Corporate Banking Wings",
    fieldSupport: "Tricity Business & Regulatory Advisory",
    popularServices: ["FSSAI Cloud Kitchen License", "Shop Act Registration", "Working Capital Credit", "HR Payroll Management"]
  },
  {
    id: "indore-mp",
    city: "Indore",
    district: "Indore",
    state: "Madhya Pradesh",
    region: "Central",
    fssaiJurisdiction: "Madhya Pradesh FDA (Collectorate Office, Indore)",
    labourDepartment: "Labour Commissioner Office (Moti Bunglow, Indore)",
    pollutionControlBoard: "MP Pollution Control Board (MPPCB Vijay Nagar)",
    bankingCluster: "AB Road & Vijay Nagar Commercial Banks",
    fieldSupport: "Commercial Hub & Food Establishment Advisory",
    popularServices: ["FSSAI Licensing", "IMC Trade License", "MSME Term Loans", "Staffing Solutions"]
  }
];
