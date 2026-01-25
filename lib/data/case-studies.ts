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

  figmaUrl?: string;

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

    slug: "husky-tracks",

    productName: "Husky Tracks",

    oneLine:

      "Lost & Found Management Platform transforming campus item recovery from chaos to clarity.",

    heroAccent: "Campus Product • Full-Stack",

    gradient: "from-red-500 to-orange-600",

    image: "/images/Husky Tracks.png",

    notionUrl:

      "https://www.notion.so/Vijay-Walunj-Product-Manager-Project-Manager-Data-Analyst-2a8148e21a7c803f948cc174f7de6be2?source=copy_link",

    card: {

      productName: "Husky Tracks",

      problem:

        "Students at Northeastern University lacked a centralized platform to report and track lost items, leading to fragmented recovery processes and low recovery rates.",

      role: "Product Manager (vision, strategy, user research, feature prioritization, roadmap)",

      impact: [

        "1.7 min report submission time (Target: <2 min)",

        "72% projected match success rate (Industry avg: 40-50%)",

        "80% reduction in administrative overhead",

      ],

    },

    sections: {

      overview:

        "Husky Tracks is a role-based web platform that transforms campus lost and found operations from chaos into an organized, efficient system. The platform enables students to report lost items in under 2 minutes, supervisors to efficiently match and manage items, and administrators to oversee operations with data-driven insights. Built with React.js, Node.js, and MongoDB, the platform addresses fragmented recovery processes, lack of real-time updates, and overwhelmed supervisors.",

      problemStatement: [

        "Students lacked a centralized platform to report and track lost items, leading to fragmented, manual recovery processes.",

        "No real-time status updates left students uncertain about their lost items and next steps.",

        "Supervisors were overwhelmed with unorganized reports and time-consuming matching processes.",

        "Low recovery rates (30% industry average) due to inefficient systems and poor communication.",

      ],

      goalsAndSuccessMetrics: [

        "Reduce report submission time to under 2 minutes for students.",

        "Achieve 70%+ match success rate within 3 days (vs. 40-50% industry average).",

        "Reduce supervisor matching time by 50% through organized dashboards.",

        "Achieve 99.5% system uptime and <500ms API response times.",

        "Improve recovery rate from 30% to 70%+ through better matching and communication.",

      ],

      myRoleAndResponsibilities: [

        "Led product vision, strategy, and roadmap from ideation to launch planning.",

        "Conducted user research with students and supervisors, developing detailed personas and identifying pain points.",

        "Defined feature prioritization using MoSCoW framework and impact vs. effort analysis.",

        "Created comprehensive product documentation: PRD, MVP specification, technical architecture, UX design, testing plan, and go-to-market strategy.",

        "Established success metrics and KPIs, including time-to-submit, match success rate, and user satisfaction.",

        "Managed stakeholder alignment across students, supervisors, and administrators with role-based requirements.",

      ],

      discoveryAndInsights: [

        "Students needed a simple, fast reporting process (<2 min) with clear status tracking and email notifications.",

        "Supervisors required organized dashboards with filtering and matching tools to reduce manual work by 50%.",

        "Administrators needed analytics and visibility into operations to identify bottlenecks and trends.",

        "Market opportunity: 47,000+ universities globally, with 6,000+ in North America as initial target.",

        "Role-based access control was critical to ensure appropriate permissions and data security.",

        "Real-time status updates and email notifications significantly improved user trust and engagement.",

      ],

      solution: [

        "Role-based platform with three distinct user experiences: Students (report & track), Supervisors (match & manage), Administrators (oversee & analyze).",

        "Lost item reporting form with photo upload, category selection, description, and interactive map location pinning (Leaflet.js integration).",

        "NEU SSO integration with JWT authentication and role-based access control (RBAC) for security.",

        "Automated email notifications via Nodemailer when items are matched, with status tracking workflow: Pending → Matched → Returned → NUPD.",

        "Customized dashboards for each role: Students see their reports, Supervisors see pending items with filtering, Admins see analytics and trends.",

        "MongoDB database with flexible schema supporting Users, Items, and Activity Logs collections.",

        "RESTful API architecture with Node.js/Express backend and React.js/Material-UI frontend.",

      ],

      execution: [

        "Conducted user research through interviews with students (HuskyCam) to validate pain points and requirements.",

        "Created comprehensive PRD with feature specifications, user flows, and technical requirements.",

        "Prioritized MVP features using MoSCoW framework: authentication, reporting, dashboards, matching, notifications, maps, status tracking.",

        "Designed scalable architecture supporting 1,000+ concurrent users with <500ms API response times.",

        "Implemented security measures: JWT tokens (24hr expiration), bcrypt password hashing, HTTPS/TLS encryption, input validation, rate limiting.",

        "Developed phased go-to-market strategy: Pilot at Snell Library + Curry Student Center, then campus-wide rollout, then multi-campus expansion.",

      ],

      resultsAndImpact: [

        "Designed platform achieving 1.7-minute report submission time (target: <2 min).",

        "Projected 72% match success rate within 3 days, significantly above 40-50% industry average.",

        "Targeted 100% email delivery accuracy and <1.2% form submission error rate.",

        "Architecture designed to support 1,000+ concurrent users with 99.5% uptime target.",

        "Expected 80% reduction in administrative overhead and improvement from 30% to 70%+ recovery rate.",

        "Created complete product strategy from ideation to launch with comprehensive documentation and roadmap.",

      ],

      keyLearnings: [

        "Adoption follows trust: transparency and control drive sustained usage.",

        "Value compounds when paired with workflow design, not bolted on.",

        "The best improvements often come from guardrails, defaults, and constraints—not bigger models.",

      ],

      whatIdImproveNext: [

        "Implement AI-powered image and description matching to improve match accuracy and reduce supervisor workload.",

        "Add mobile app (React Native) for on-the-go reporting and push notifications.",

        "Develop advanced analytics dashboard with predictive insights and trend identification.",

        "Expand to multi-university support with white-label B2B solution for broader market reach.",

        "Integrate with campus security systems (NUPD) for seamless escalation workflow.",

        "Add in-app messaging feature to reduce email dependency and improve communication speed.",

      ],

    },

  },

  {

    slug: "coursera-smartassist",

    productName: "Coursera SmartAssist",

    oneLine:

      "No-code accessibility initiative making online learning inclusive for neurodivergent learners.",

    heroAccent: "Accessibility • Product Design",

    gradient: "from-purple-500 to-pink-600",

    image: "/images/smartassist-hero.png",

    notionUrl:

      "https://www.canva.com/design/DAG_X74HqcI/LkY1P9Ef4xZlgxIWZgnvVw/edit?utm_content=DAG_X74HqcI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",

    figmaUrl:

      "https://www.figma.com/proto/Y7LTavpW3braMc3j1sP6q5/Screenshot-2024-11-19-at-2.19.18%E2%80%AFPM?node-id=74-31&t=MNVSI9ixAyA9xki9-1",

    card: {

      productName: "Coursera SmartAssist",

      problem:

        "Traditional e-learning platforms overload neurodivergent learners with dense content, uniform pacing, and low personalization.",

      role: "Product Strategy & UX Design (accessibility-first product feature)",

      impact: [

        "4 core accessibility features designed",

        "3 cognitive accessibility profiles created",

        "100% no-code implementation approach",

      ],

    },

    sections: {

      overview:

        "SmartAssist is a no-code accessibility initiative built to make online learning more inclusive for neurodivergent learners, particularly those with ADHD, dyslexia, and autism. Traditional e-learning platforms like Coursera often overload students with dense content, uniform pacing, and low personalization. SmartAssist bridges this gap by layering adaptive focus tools, customizable pacing, and cognitive-friendly interfaces directly into Coursera's experience.",

      problemStatement: [

        "Neurodivergent learners, especially those with ADHD and dyslexia, struggle with cognitive overload on platforms like Coursera.",

        "Scrolling through endless content, battling distractions, and trying to decode dense material made learning feel like a test of endurance.",

        "Traditional platforms lack personalization and adaptive features that accommodate different cognitive needs.",

        "Accessibility was treated as an add-on rather than a core product feature.",

      ],

      goalsAndSuccessMetrics: [

        "Empower every learner to thrive on Coursera regardless of cognitive differences.",

        "Reduce cognitive overload through adaptive focus tools and customizable interfaces.",

        "Increase engagement and completion rates for neurodivergent learners.",

        "Create personalized, accessible, and supportive digital learning experiences.",

        "Validate accessibility as a product feature, not an afterthought.",

      ],

      myRoleAndResponsibilities: [

        "Identified the accessibility gap in online learning platforms through user research and observation.",

        "Designed Cognitive Accessibility Profiles with lightweight settings for personalized content consumption.",

        "Created core features: Focus Mode, Display Flexibility, Custom Pacing, Interactive Flashcards, and Accessibility Profiles.",

        "Developed product strategy positioning accessibility as a core feature rather than an add-on.",

      ],

      discoveryAndInsights: [

        "Online learning, despite being flexible, often leaves behind the very people it claims to empower.",

        "Neurodivergent learners need adaptive focus tools, customizable pacing, and cognitive-friendly interfaces.",

        "Accessibility shouldn't be an add-on—it should be a product feature.",

        "Learners want to choose how they consume content, not be forced into a one-size-fits-all experience.",

        "Small adjustments like font styles, colors, text spacing, and chunked content can dramatically improve learning outcomes.",

      ],

      solution: [

        "Focus Mode: Toggle distractions off with audio-visual relaxation cues, hiding sidebars and UI noise.",

        "Display Flexibility: Adjustable font styles, colors, and text spacing for dyslexia-friendly reading.",

        "Custom Pacing: Break large lectures into smaller, cognitively digestible chunks for improved focus.",

        "Interactive Flashcards: Reinforce memory retention through active learning.",

        "Accessibility Profiles: Save personalized preferences for future sessions, allowing learners to toggle, combine, or save preferences.",

        "Smart Reminders: Send tailored study nudges based on pacing and activity.",

      ],

      execution: [

        "Introduced Cognitive Accessibility Profiles as lightweight settings that let learners choose how they wanted to consume content.",

        "Designed Focus Mode to hide sidebars and UI noise for better concentration.",

        "Created Reading Comfort Mode with dyslexia-friendly fonts and color contrast.",

        "Implemented Chunk Learning to divide lectures into bite-sized segments.",

        "Built a system where learners could toggle, combine, or save preferences, making Coursera feel like a personal coach rather than a one-size-fits-all platform.",

      ],

      resultsAndImpact: [

        "Designed 4 core accessibility features addressing different cognitive needs.",

        "Created 3 cognitive accessibility profiles (Focus Mode, Reading Comfort Mode, Chunk Learning).",

        "Developed a 100% no-code implementation approach for rapid deployment.",

        "Positioned accessibility as a product feature, not an add-on.",

        "Demonstrated how small, thoughtful design changes can make learning more inclusive.",

      ],

      keyLearnings: [

        "Accessibility is a product feature, not an add-on—it should be designed into the core experience.",

        "Personalization and choice empower learners to thrive in ways that work for their cognitive differences.",

        "Small adjustments (fonts, spacing, chunking) can have outsized impact on learning outcomes.",

        "The best accessibility solutions are flexible and allow users to customize their experience.",

        "Observing user struggles can reveal opportunities to create more inclusive products.",

      ],

      whatIdImproveNext: [

        "Conduct user testing with neurodivergent learners to validate and refine features.",

        "Expand accessibility profiles to include more customization options.",

        "Add analytics to measure engagement and completion rates for different accessibility modes.",

        "Explore AI-powered personalization that adapts to individual learning patterns.",

        "Create a feedback loop to continuously improve accessibility features based on learner needs.",

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

        "Students struggled to find relevant mentors quickly and didn't know where to start.",

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



