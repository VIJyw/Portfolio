export interface Experience {
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Internship" | "Apprenticeship";
  location: string;
  startDate: string;
  endDate: string | "Present";
  duration: string;
  description: string;
  achievements: string[];
  skills?: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    company: "FMJR - Wollaston's Market",
    role: "Technical Project Manager",
    type: "Internship",
    location: "Boston, Massachusetts, United States (On-site)",
    startDate: "Jan 2026",
    endDate: "Present",
    duration: "1 month",
    description:
      "Managing end-to-end workforce optimization and inventory analytics projects, developing technical solutions, and coordinating cross-functional initiatives.",
    achievements: [
      "Managed end-to-end workforce optimization project including requirements gathering with operations manager, technical solution development (Python automation), and user training. Reduced manual planning by 70% (from 5 hours to 1.5 hours weekly), saving ~90 hours across 25-person operations team.",
      "Led inventory analytics initiative from discovery through deployment. Developed SQL tracking system and Tableau dashboard for 2,500+ SKUs, managing stakeholder adoption. Reduced stockouts by ~20% and waste by ~15% (estimated $12K combined impact over 6 months).",
      "Coordinated vendor performance program across 8 key suppliers. Built Excel tracking framework and facilitated monthly performance reviews. Improved delivery reliability from 78% to 92%.",
      "Developed Confluence documentation platform for operational processes and trained 12 team members, achieving ~80% adoption within 6 weeks.",
      "Facilitated agile retrospectives using Jira board to track process improvements. Implemented sprint-based project delivery reducing cycle time by 30%.",
    ],
    skills: [
      "Python Automation",
      "SQL",
      "Tableau",
      "Project Management",
      "Agile/Scrum",
      "Jira",
      "Confluence",
      "Stakeholder Management",
    ],
  },
  {
    company: "Great Manager Institute",
    role: "Product Analyst",
    type: "Full-time",
    location: "Mumbai, India",
    startDate: "Feb 2023",
    endDate: "July 2024",
    duration: "1 year 6 months",
    description:
      "Analyzed product data, built analytics dashboards, and developed predictive models to drive product improvements and customer success initiatives.",
    achievements: [
      "Analyzed 10,000+ sessions via SQL identifying 35% onboarding drop-off. Collaborated with product/engineering on tested improvements, contributing to 8% engagement lift generating estimated $50,000+ incremental ARR.",
      "Built Power BI self-service dashboard with 15+ KPIs for 100+ enterprise customers. Achieved 87% adoption reducing ad-hoc reporting by 40%.",
      "Developed Python churn prediction model consolidating 5 data sources automating client health scoring. Partnered with customer success implementing system for 50+ accounts ($2M+ ARR), reduced analysis from 5 days to daily with 78% accuracy.",
      "Analyzed 2,000+ support tickets identifying issues driving 30% of volume. Findings informed engineering prioritization reducing resolution time by 25% and improving CSAT by 15 points.",
      "Conducted adoption analysis for $180,000 at-risk account. Partnered with customer success on retention strategy, account renewed with 40% utilization improvement.",
    ],
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Data Analysis",
      "Churn Prediction",
      "Customer Success",
      "Product Analytics",
      "A/B Testing",
    ],
  },
  {
    company: "SparkPlus Technology",
    role: "Data Analyst Intern",
    type: "Internship",
    location: "Arizona, USA (Remote)",
    startDate: "Feb 2022",
    endDate: "Jan 2023",
    duration: "1 year",
    description:
      "Designed and executed A/B tests, developed competitive intelligence systems, and established analytical tracking frameworks to drive data-driven product decisions.",
    achievements: [
      "Designed and executed multivariate A/B test with 200+ users over 4 weeks; identified activation flow variant with 2.8x higher conversion; analysis reduced sprint cycle from 3 weeks to 1 week.",
      "Developed competitive intelligence database tracking 8 market players; analyzed pricing, feature sets, and user reviews to identify 3 product gaps; insights informed 2 launches exceeding 500 early signups each.",
      "Established and maintained analytical tracking system in Amplitude, defining 12 KPIs; communicated performance baselines to founders and engineering, enabling data-driven decisions for Series A reporting.",
    ],
    skills: [
      "A/B Testing",
      "Amplitude",
      "Data Analysis",
      "Competitive Intelligence",
      "SQL",
      "Python",
      "Product Analytics",
    ],
  },
];
