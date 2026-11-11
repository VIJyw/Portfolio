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

  {

    slug: "retail-demand-forecasting",

    productName: "Retail Demand Forecasting",

    oneLine:

      "SQL and Python pipeline on 59M+ Walmart sales records that forecasts 28 days of demand, estimates sales lost to stockouts, and measures price sensitivity.",

    heroAccent: "Data Analytics • Forecasting",

    gradient: "from-blue-500 to-indigo-600",

    image: "/images/retail-demand-forecasting.png",

    card: {

      productName: "Retail Demand Forecasting",

      problem:

        "Retail planners need to know how many units each store will sell of each product over the next few weeks, but many still plan with a simple 'same as last week' rule.",

      role: "Data Analyst (self-directed portfolio project: data pipeline, SQL modeling, forecasting, analysis)",

      impact: [

        "32% lower forecast error (WAPE) than a seasonal-naive baseline at category-store level",

        "$2.1M in estimated lost sales from 28,970 likely stockouts",

        "59M+ daily sales records processed across 3,049 products",

      ],

    },

    sections: {

      overview:

        "A demand forecasting and sell-through analysis built on the Walmart M5 public dataset: 3,049 products in 10 stores across 3 states, with 1,941 days of daily sales (2011 to 2016), weekly shelf prices and a calendar of events. The pipeline loads and models the data in DuckDB with SQL, trains a LightGBM forecasting model in Python, and exports tidy data feeds for Tableau or Power BI. It answers three planning questions: how much will each store sell over the next 4 weeks, where are empty shelves likely costing sales, and how strongly do shoppers react to price.",

      problemStatement: [

        "Planners often forecast with 'same as last week', which ignores seasonality, events and price changes.",

        "Empty shelves hide true demand: a day with zero sales can mean no demand or no stock.",

        "Without price-response estimates, discount depth is set by habit rather than evidence.",

      ],

      goalsAndSuccessMetrics: [

        "Beat the seasonal-naive baseline on forecast error (WAPE) at the levels where planning decisions are made: category, store and chain.",

        "Score the model only on a held-out 28-day test window it never saw during training or tuning.",

        "Estimate lost sales from likely stockouts and size them as a share of revenue.",

        "Measure own-price elasticity for each product category.",

      ],

      myRoleAndResponsibilities: [

        "Designed the end-to-end pipeline: data loading, SQL models, feature engineering, model training, evaluation and exports.",

        "Wrote 6 SQL models in DuckDB using CTEs, window functions, gaps-and-islands and REGR_SLOPE.",

        "Built and evaluated the LightGBM model against two baselines, and documented the method and its limits.",

      ],

      discoveryAndInsights: [

        "The raw file has one column per day (1,941 columns). It had to be unpivoted into 59,181,090 item-store-day rows before any analysis.",

        "Data-quality check: no units were sold on a day an item had no shelf price, so 'has a price that week' is a reliable availability flag.",

        "Many item-store series are intermittent, with many zero-sales days, so the model uses a Tweedie objective built for that pattern.",

      ],

      solution: [

        "Forecasting: LightGBM with 28 SQL-built features (same-weekday lags, 7/28/56/180-day rolling means, volatility, intermittency, price vs. history and vs. other stores, calendar, events and SNAP days).",

        "Baselines: seasonal naive (repeat the last week) and a 28-day moving average.",

        "Stockouts: improbable zero-sales streaks flagged with gaps-and-islands SQL, then turned into an estimate of lost units and revenue.",

        "Pricing: log-log price elasticity with fixed effects, plus volume lift by discount depth.",

        "Outputs: 10 tidy CSV feeds (forecast vs. actual, stockout risk, price effects) ready for Tableau or Power BI.",

      ],

      execution: [

        "Split time into train (23,160,315 rows), a validation window for model selection, and a held-out 28-day test window.",

        "Lagged every sales feature at least 28 days so the full horizon is scored from data available at the forecast date.",

        "Compared 4 model configurations on the validation window only, using a selection rule fixed before the run.",

        "Measured WAPE, RMSE and bias from single item-store-days up to the chain-wide daily total.",

      ],

      resultsAndImpact: [

        "Forecast error (WAPE) vs. seasonal naive: 32% lower at category-store level, 37% lower at store level, 60% lower on the chain-wide daily total.",

        "Forecast bias of -1.95%, vs. -7.36% for the seasonal-naive baseline.",

        "Estimated $2.1M in lost sales (4.65% of the year's revenue) from 28,970 likely stockout events; 7,019 item-stores are chronic (30+ stockout days a year).",

        "Flagged 7,770 slow-moving item-stores: listed 180+ days but sold on fewer than 20% of them.",

        "All three categories are price-inelastic (FOODS -0.52, HOBBIES -0.41, HOUSEHOLD -0.33); discounts deeper than 15% were associated with 1.3x weekly units in FOODS.",

      ],

      keyLearnings: [

        "Gains show up where decisions are made: at single item-store-day level the model is only 0.8% better than a 28-day moving average, but much better at category, store and chain level.",

        "Without inventory data, stockouts and lost sales can only be estimated, so they are reported as estimates.",

        "Price effects here are associations, not causal effects, because the data has no promotion or advertising variables.",

      ],

      whatIdImproveNext: [

        "Build the Tableau or Power BI dashboard on top of the exported data feeds.",

        "Add prediction intervals so planners can set safety stock, not just a single forecast.",

        "Test the approach on data that includes inventory and promotions to confirm the stockout and price estimates.",

      ],

    },

  },

  {

    slug: "glucose-analytics-pipeline",

    productName: "Glucose Analytics Pipeline",

    oneLine:

      "dbt pipeline on Snowflake and PostgreSQL that cleans 1.2M+ glucose monitor, smartwatch and meal-log records from 250 study participants, with 48 automated data quality tests.",

    heroAccent: "Data Engineering • Analytics",

    gradient: "from-emerald-500 to-teal-600",

    card: {

      productName: "Glucose Analytics Pipeline",

      problem:

        "Wearable health data is messy: sensors drop out, wear periods overlap and timestamps duplicate. If those errors reach the analysis, metrics like time-in-range are wrong.",

      role: "Data Analyst (self-directed portfolio project: dbt modeling, data quality testing, dashboard)",

      impact: [

        "99.8% data integrity across downstream models",

        "48 automated dbt data quality tests",

        "1.2M+ raw records from 250 participants modeled",

      ],

    },

    sections: {

      overview:

        "A dbt transformation pipeline on Snowflake and PostgreSQL for a public clinical study dataset of continuous glucose monitor (CGM), smartwatch and meal-log records from 250 participants. The pipeline tests and quarantines bad records before modeling, then produces daily health metrics such as time-in-range and glycemic variability, with a Tableau dashboard on top.",

      problemStatement: [

        "Sensor dropouts, overlapping wear intervals and duplicate timestamps are common in wearable data.",

        "Errors that reach the models distort daily metrics like time-in-range and glycemic variability.",

        "Silently dropping bad records hides data problems instead of making them visible.",

      ],

      goalsAndSuccessMetrics: [

        "Catch bad records with automated tests before they reach any downstream model.",

        "Keep data integrity high across all downstream models.",

        "Produce reliable daily and rolling 7-day glucose metrics for a dashboard.",

      ],

      myRoleAndResponsibilities: [

        "Built the dbt project and its models on Snowflake and PostgreSQL.",

        "Wrote the custom and generic data quality tests and the quarantine logic.",

        "Built the Tableau dashboard.",

      ],

      discoveryAndInsights: [

        "5.4% of raw records were anomalies, enough to distort daily metrics if left in.",

        "Average CGM wear-time adherence was 92% across 250 participants, so adherence itself needed tracking alongside glucose metrics.",

      ],

      solution: [

        "48 dbt tests (custom singular and generic) for sensor dropouts, overlapping wear intervals and duplicate timestamps.",

        "Failing records are quarantined instead of being silently dropped.",

        "Daily time-in-range (TIR) and glycemic variability (CV and standard deviation) models.",

        "Rolling 7-day metrics with SQL window functions (PARTITION BY, ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).",

        "Tableau dashboard for post-meal glucose spikes and adherence trends.",

      ],

      execution: [

        "Loaded 1.2M+ raw CGM, smartwatch and meal-log records.",

        "Ran the dbt tests so bad records are flagged before modeling.",

        "Built the rolling metrics in SQL so the dashboard updates automatically.",

      ],

      resultsAndImpact: [

        "99.8% data integrity across downstream models.",

        "5.4% of raw records flagged and quarantined as anomalies.",

        "92% average CGM wear-time adherence measured across 250 participants.",

        "Rolling 7-day glucose metrics calculated automatically for the dashboard.",

      ],

      keyLearnings: [

        "Testing data before modeling is cheaper than explaining wrong metrics afterwards.",

        "Quarantining bad records keeps data problems visible and auditable.",

      ],

      whatIdImproveNext: [

        "Publish the dashboard on Tableau Public and make the repository public.",

        "Add alerts when the share of quarantined records rises above its usual level.",

      ],

    },

  },

];



export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {

  return caseStudies.find((c) => c.slug === slug);

}



