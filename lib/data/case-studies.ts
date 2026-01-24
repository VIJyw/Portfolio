export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyCard {
  productName: string;
  problem: string;
  role: string;
  impact: string[];
}

export interface CaseStudy {
  slug: string;
  productName: string;
  oneLine: string;
  card: CaseStudyCard;
  heroAccent?: string; // short label like "Enterprise" / "Civic UX" / "Hackathon"
  gradient: string;
  image?: string;
  notionUrl?: string;
  sections: {
    overview: string;
    problemStatement: string[];
    goalsAndSuccessMetrics: string[];
    myRoleAndResponsibilities: string[];
    discoveryAndInsights: string[];
    solution: string[];
    execution: string[];
    resultsAndImpact: string[];
    keyLearnings: string[];
    whatIdImproveNext: string[];
  };
}

export const productImpactMetrics: CaseStudyMetric[] = [
  { value: "$180K", label: "project budget delivered" },
  { value: "500+", label: "enterprise users supported" },
  { value: "3+ hrs/wk", label: "saved per user via automation" },
  { value: "1st place", label: "hackathon (100+ teams)" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "workflow-automation-platform",
    productName: "Workflow Automation Platform",
    oneLine: "Enterprise automation that removes manual work and scales operations.",
    heroAccent: "Enterprise • Automation",
    gradient: "from-indigo-500 to-purple-600",
    image: "/images/ai-automation-hero.svg",
    notionUrl:
      "https://www.notion.so/Vijay-Walunj-Product-Manager-Project-Manager-Data-Analyst-2a8148e21a7c803f948cc174f7de6be2?source=copy_link",
    card: {
      productName: "Workflow Automation Platform",
      problem:
        "Manual, error-prone workflows created delays, rework, and scaling bottlenecks.",
      role: "Product Manager (discovery → PRD → delivery → measurement)",
      impact: [
        "$180K budget delivered end-to-end",
        "500+ enterprise users supported",
        "3+ hours saved per user per week",
      ],
    },
    sections: {
      overview:
        "Enterprise workflow automation that reduced manual effort in high-frequency operational tasks while keeping the right human controls. The goal was measurable time savings without increasing risk.",
      problemStatement: [
        "Critical workflows were manual, inconsistent, and slow.",
        "Tribal knowledge drove decisions, increasing errors and rework.",
        "Scaling output required headcount growth faster than throughput.",
      ],
      goalsAndSuccessMetrics: [
        "Reduce time-on-task for the workflow end-to-end.",
        "Increase successful completion rate and reduce rework loops.",
        "Increase weekly active usage in core user cohorts.",
        "Improve throughput without adding operational overhead.",
        "Track trust signals (overrides, retries, escalations) to validate adoption quality.",
      ],
      myRoleAndResponsibilities: [
        "Owned problem framing, success metrics, and MVP scope.",
        "Led user + stakeholder discovery and converted insights into a tight PRD (goals, non-goals, risks, acceptance criteria).",
        "Aligned engineering, operations, and stakeholders on tradeoffs and sequencing.",
        "Defined instrumentation and rollout plan to measure outcomes post-launch.",
      ],
      discoveryAndInsights: [
        "The main bottleneck wasn’t effort—it was uncertainty at decision points.",
        "Users needed explainability and control; fully automated black-box outputs reduced adoption.",
        "Highest ROI came from automating repeatable steps while keeping human review where risk was highest.",
        "Small workflow defaults and guardrails delivered outsized time savings.",
      ],
      solution: [
        "Assisted workflow steps with editable outputs and clear rationale.",
        "Guardrails: validation rules, confidence signals, and safe fallbacks.",
        "Human-in-the-loop approvals for high-risk actions.",
        "Templates and structured inputs to standardize outcomes and reduce variance.",
        "Instrumentation for adoption, time savings, overrides, and error categories.",
      ],
      execution: [
        "Defined baseline metrics before building to quantify improvement.",
        "Shipped an MVP on the highest-frequency workflow and expanded by ROI and risk.",
        "Rolled out progressively with rapid feedback loops from power users.",
        "Partnered closely with engineering on acceptance criteria and edge cases to prevent regressions.",
      ],
      resultsAndImpact: [
        "Delivered against a $180K workstream budget.",
        "Supported 500+ enterprise users in production workflows.",
        "Saved 3+ hours per user per week by reducing manual steps and rework.",
      ],
      keyLearnings: [
        "Adoption follows trust: transparency and control drive sustained usage.",
        "Value compounds when paired with workflow design, not bolted on.",
        "The best improvements often come from guardrails, defaults, and constraints—not bigger models.",
      ],
      whatIdImproveNext: [
        "Add stronger attribution for time saved by workflow segment (where value is created).",
        "Convert overrides into a feedback loop for iterative UX + model improvements.",
        "Expand role-based personalization to reduce edits and increase first-pass quality.",
      ],
    },
  },
  {
    slug: "boston-311-civic-issue-reporting",
    productName: "Boston 311 Civic Issue Reporting",
    oneLine:
      "Civic reporting UX designed for speed, clarity, and operationally useful signals.",
    heroAccent: "Civic UX • Service Design",
    gradient: "from-cyan-500 to-emerald-600",
    image: "/images/boston-311-hero.svg",
    notionUrl:
      "https://www.notion.so/Vijay-Walunj-Product-Manager-Project-Manager-Data-Analyst-2a8148e21a7c803f948cc174f7de6be2?source=copy_link",
    card: {
      productName: "Boston 311 Civic Issue Reporting",
      problem:
        "Residents lacked clarity on what to report and couldn’t trust what would happen next.",
      role: "Product Manager (MVP scope, workflow, measurement plan)",
      impact: [
        "Defined funnel + operational success metrics (completion, duplicates, routing)",
        "Designed a structured intake flow to improve triage quality",
        "Built a measurable MVP plan and iteration roadmap",
      ],
    },
    sections: {
      overview:
        "A civic reporting product case study focused on making reporting faster, clearer, and more trustworthy—while producing operationally useful inputs for triage and resolution.",
      problemStatement: [
        "Residents didn’t know what information mattered for resolution.",
        "Category selection and status visibility were unclear, reducing trust.",
        "Operations needed structured signals to reduce manual triage and misroutes.",
      ],
      goalsAndSuccessMetrics: [
        "Increase successful submission completion rate.",
        "Reduce time-to-submit and reduce clarification loops.",
        "Reduce duplicates and misrouted reports.",
        "Improve status engagement and perceived transparency.",
        "Improve triage quality signals (location accuracy, category confidence, photos).",
      ],
      myRoleAndResponsibilities: [
        "Defined the end-to-end workflow, MVP scope, and prioritization logic.",
        "Wrote a PRD with goals, metrics, constraints, risks, and acceptance criteria.",
        "Designed the information architecture for category selection and status states.",
        "Created an event taxonomy and measurement plan (citizen funnel + operational outcomes).",
      ],
      discoveryAndInsights: [
        "Residents want certainty: “Did you get it?” and “What happens next?”",
        "Category selection is the highest-friction step; guidance beats a long list.",
        "Trust improves when status is plain-language, predictable, and actionable.",
        "Operational needs (routing quality) should be captured through structured prompts, not long forms.",
      ],
      solution: [
        "Guided reporting flow with issue-type prompts that produce actionable details.",
        "Location-first capture with clear confirmation and easy correction.",
        "Structured fields + photo capture to increase routing quality.",
        "Transparent status states with expectation-setting (timelines, next steps, escalation path).",
      ],
      execution: [
        "Scoped an MVP around the highest-volume categories and a clear status model.",
        "Defined instrumentation aligned to submission funnel and triage quality signals.",
        "Built a backlog that separated UX wins from operational integration work.",
        "Created an iteration plan based on measurable friction points and routing errors.",
      ],
      resultsAndImpact: [
        "Produced a complete PM case study: PRD, end-to-end workflow, event taxonomy, and measurable success plan.",
        "Defined metrics that balance citizen experience (completion, time-to-submit) and operations outcomes (duplicates, routing quality).",
        "Created a practical MVP path and iteration roadmap grounded in trust and clarity.",
      ],
      keyLearnings: [
        "Civic UX is a trust product: clarity and expectation-setting are core features.",
        "Speed comes from fewer wrong turns, not fewer screens.",
        "Success must be measured on both sides: citizen completion and operational resolution.",
      ],
      whatIdImproveNext: [
        "Add proactive notifications to reduce repetitive status checking.",
        "Introduce duplicate detection and merge flows with clear user messaging.",
        "Expand accessibility requirements (language, readability, assistive UX) as first-class scope.",
      ],
    },
  },
  {
    slug: "husky-match-hackathon-product",
    productName: "Husky Match (Hackathon Winner)",
    oneLine:
      "Mentorship matching MVP shipped fast with clear recommendations.",
    heroAccent: "Hackathon • MVP",
    gradient: "from-fuchsia-500 to-rose-600",
    image: "/images/husky-match-hero.png",
    notionUrl:
      "https://www.notion.so/Vijay-Walunj-Product-Manager-Project-Manager-Data-Analyst-2a8148e21a7c803f948cc174f7de6be2?source=copy_link",
    card: {
      productName: "Husky Match",
      problem:
        "Students struggled to find relevant mentors quickly and didn’t know where to start.",
      role: "PM + builder (scope, matching logic, MVP delivery)",
      impact: ["1st place hackathon (100+ teams)", "MVP shipped in 48 hours"],
    },
    sections: {
      overview:
        "A hackathon-built mentorship matching product designed to connect students with the right mentors quickly, with an end-to-end MVP focused on usability and trust.",
      problemStatement: [
        "Finding a relevant mentor was slow and inconsistent.",
        "A generic directory experience increased drop-off and low-quality matches.",
        "Users needed confidence in why a mentor was recommended.",
      ],
      goalsAndSuccessMetrics: [
        "Reduce time-to-first-match and increase match relevance.",
        "Increase profile completion and successful match requests.",
        "Increase engagement signals (messages sent, sessions scheduled).",
        "Validate trust via explainable matching factors.",
      ],
      myRoleAndResponsibilities: [
        "Owned MVP scope, user journey, and success metrics for the demo outcome.",
        "Converted the problem into requirements, flows, and acceptance criteria.",
        "Built and shipped the MVP with rapid iteration under time constraints.",
      ],
      discoveryAndInsights: [
        "Users want the right mentor for a specific goal—not a larger directory.",
        "A guided intake improves match quality and reduces noise.",
        "Explainability increases trust faster than sophistication.",
      ],
      solution: [
        "Guided onboarding capturing goals, interests, and constraints.",
        "Matching with transparent rationale (why this mentor fits).",
        "Clear next actions: request, message, schedule, and follow-up.",
        "Lightweight feedback loop to improve recommendations over time.",
      ],
      execution: [
        "Scoped a narrow MVP: intake → match → request → engagement loop.",
        "Prioritized reliability and clarity over feature count.",
        "Designed the demo around the user outcome (finding a mentor), not the tech stack.",
      ],
      resultsAndImpact: [
        "1st place hackathon winner out of 100+ teams.",
        "MVP shipped in 48 hours.",
      ],
      keyLearnings: [
        "Right scope wins: a tight MVP beats a broad prototype.",
        "Explainability is a product feature, not a nice-to-have.",
        "In early-stage products, removing uncertainty drives adoption quickly.",
      ],
      whatIdImproveNext: [
        "Add evaluation and feedback loops to improve match quality iteratively.",
        "Improve mentor supply management (availability, responsiveness, coverage).",
        "Expand lifecycle UX: reminders, session outcomes, and retention hooks.",
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

