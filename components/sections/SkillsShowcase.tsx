"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useInViewFallback } from "@/hooks/useInViewFallback";
import { cn } from "@/lib/utils";

type SkillCategoryKey =
  | "product-strategy"
  | "analytics-experimentation"
  | "research-insights"
  | "execution-delivery";

type LogoBadge = {
  label: string;
  fg: string;
  bg: string;
  border: string;
};

type SkillCategory = {
  key: SkillCategoryKey;
  title: string;
  subtitle: string;
  bullets: string[];
  logos: LogoBadge[];
  accent: string;
};

const toolHints: Record<string, string> = {
  PRD: "Define problem, scope, and success metrics",
  Roadmap: "Sequencing and tradeoffs",
  Discovery: "Interviews, research, and baseline metrics",
  GTM: "Launch messaging, positioning, and rollout",
  Figma: "Flows, prototypes, and UI reviews",
  Notion: "Specs, notes, and product docs",
  SQL: "Funnels, cohorting, and analysis",
  Python: "Automation + analysis workflows",
  "Power BI": "Executive dashboards and KPI reporting",
  Tableau: "Exploration + stakeholder dashboards",
  Looker: "Semantic layers and BI reporting",
  Amplitude: "Event analytics + retention",
  Mixpanel: "Product analytics + funnels",
  GA4: "Web analytics and acquisition",
  "A/B": "Experiment design and evaluation",
  Events: "Event taxonomy + instrumentation",
  Segment: "Event collection and routing",
  Snowflake: "Warehouse + analytics datasets",
  BigQuery: "Warehouse + analytics datasets",
  Excel: "Quick modeling, analysis, and ops tooling",
  "User research": "Interviews and synthesis",
  Surveys: "Quant signal and validation",
  Usability: "Task-based testing and iteration",
  Heatmaps: "Behavior signals (scroll/click)",
  Miro: "Workshops and mapping",
  Docs: "Documentation and alignment",
  Jira: "Backlog and delivery management",
  Confluence: "Specs and team documentation",
  GitHub: "Delivery collaboration and reviews",
  Slack: "Cross-functional coordination",
  Agile: "Iteration cadence and planning",
  Launch: "Release planning and rollout",
  Airtable: "Lightweight systems and tracking",
};

const categories: SkillCategory[] = [
  {
    key: "product-strategy",
    title: "Product Strategy",
    subtitle: "Discovery → PRDs → roadmaps → alignment",
    bullets: [
      "Problem framing, JTBD, and crisp PRDs with measurable success metrics",
      "Roadmap sequencing with explicit tradeoffs (scope / risk / time)",
      "Stakeholder alignment and decision-making with clear narratives",
    ],
    logos: [
      { label: "PRD", fg: "text-indigo-200", bg: "bg-indigo-500/15", border: "border-indigo-500/25" },
      { label: "Roadmap", fg: "text-indigo-200", bg: "bg-indigo-500/15", border: "border-indigo-500/25" },
      { label: "Discovery", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "GTM", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Figma", fg: "text-fuchsia-200", bg: "bg-fuchsia-500/15", border: "border-fuchsia-500/25" },
      { label: "Notion", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
    ],
    accent: "from-indigo-500/20 to-purple-500/10",
  },
  {
    key: "analytics-experimentation",
    title: "Analytics & Experimentation",
    subtitle: "Instrument, measure, and iterate",
    bullets: [
      "KPI design, funnel analysis, and instrumentation plans",
      "Experiment design and analysis (A/B, multivariate, cohort changes)",
      "Dashboards that answer decisions—not vanity metrics",
    ],
    logos: [
      { label: "SQL", fg: "text-emerald-200", bg: "bg-emerald-500/15", border: "border-emerald-500/25" },
      { label: "Python", fg: "text-emerald-200", bg: "bg-emerald-500/15", border: "border-emerald-500/25" },
      { label: "Power BI", fg: "text-yellow-200", bg: "bg-yellow-500/15", border: "border-yellow-500/25" },
      { label: "Tableau", fg: "text-cyan-200", bg: "bg-cyan-500/15", border: "border-cyan-500/25" },
      { label: "Looker", fg: "text-cyan-200", bg: "bg-cyan-500/15", border: "border-cyan-500/25" },
      { label: "Amplitude", fg: "text-cyan-200", bg: "bg-cyan-500/15", border: "border-cyan-500/25" },
      { label: "Mixpanel", fg: "text-cyan-200", bg: "bg-cyan-500/15", border: "border-cyan-500/25" },
      { label: "GA4", fg: "text-cyan-200", bg: "bg-cyan-500/15", border: "border-cyan-500/25" },
      { label: "A/B", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Events", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Segment", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Snowflake", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "BigQuery", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Excel", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
    ],
    accent: "from-cyan-500/20 to-emerald-500/10",
  },
  {
    key: "research-insights",
    title: "Research & Insights",
    subtitle: "Turn ambiguity into decisions",
    bullets: [
      "User interviews, survey design, and synthesis into clear opportunity areas",
      "Competitive analysis and pricing/packaging inputs",
      "Translate qualitative + quantitative signals into prioritization",
    ],
    logos: [
      { label: "User research", fg: "text-purple-200", bg: "bg-purple-500/15", border: "border-purple-500/25" },
      { label: "Surveys", fg: "text-purple-200", bg: "bg-purple-500/15", border: "border-purple-500/25" },
      { label: "Usability", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Heatmaps", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Miro", fg: "text-indigo-200", bg: "bg-indigo-500/15", border: "border-indigo-500/25" },
      { label: "Docs", fg: "text-indigo-200", bg: "bg-indigo-500/15", border: "border-indigo-500/25" },
    ],
    accent: "from-purple-500/20 to-fuchsia-500/10",
  },
  {
    key: "execution-delivery",
    title: "Execution & Delivery",
    subtitle: "Cross-functional delivery that lands",
    bullets: [
      "Agile delivery with strong acceptance criteria and edge-case coverage",
      "Stakeholder updates that unblock and keep scope tight",
      "Launch plans, rollout strategy, and post-launch iteration loops",
    ],
    logos: [
      { label: "Jira", fg: "text-blue-200", bg: "bg-blue-500/15", border: "border-blue-500/25" },
      { label: "Confluence", fg: "text-blue-200", bg: "bg-blue-500/15", border: "border-blue-500/25" },
      { label: "GitHub", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Slack", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Agile", fg: "text-slate-200", bg: "bg-white/[0.06]", border: "border-white/[0.10]" },
      { label: "Launch", fg: "text-amber-200", bg: "bg-amber-500/15", border: "border-amber-500/25" },
      { label: "Airtable", fg: "text-amber-200", bg: "bg-amber-500/15", border: "border-amber-500/25" },
    ],
    accent: "from-amber-500/20 to-rose-500/10",
  },
];

export default function SkillsShowcase() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-120px" });
  const [active, setActive] = useState<SkillCategoryKey>("product-strategy");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const activeCategory = useMemo(
    () => categories.find((c) => c.key === active) ?? categories[0],
    [active]
  );

  return (
    <section id="skills" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-60" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">
            Skills & toolset
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
            Product + execution, with a technical edge
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Tap a category to see how I work and the tools I use to ship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 items-start">
          {/* Left: animated illustration + category chips */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 card-premium"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-white/[0.08] bg-black/20"
            >
              <Image
                src="/images/skills-illustration.png"
                alt="Skills illustration"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
                priority={false}
              />
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {categories.map((c) => {
                const isActive = c.key === active;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setActive(c.key)}
                    className={cn(
                      "text-left rounded-xl border px-4 py-3 transition-all duration-200",
                      "bg-black/20",
                      isActive ? "border-white/[0.22] shadow-lg" : "border-white/[0.10] hover:border-white/[0.16]"
                    )}
                  >
                    <div className="text-sm font-semibold text-white">{c.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{c.subtitle}</div>
                    <div
                      className={cn(
                        "mt-3 h-1 rounded-full bg-gradient-to-r",
                        isActive ? c.accent : "from-white/[0.08] to-white/[0.03]"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: animated content panel */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 card-premium"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                      {activeCategory.subtitle}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <div className={cn("h-10 w-10 rounded-xl bg-gradient-to-br", activeCategory.accent)} />
                </div>

                <ul className="mt-2 space-y-3 text-slate-300">
                  {activeCategory.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span className="flex-1 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                    Tools & platforms
                    <span className="text-[11px] text-slate-500">Hover a tool</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeCategory.logos.map((l) => (
                      <motion.span
                        key={l.label}
                        whileHover={{ y: -4, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className={cn(
                          "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-sm border",
                          l.fg,
                          l.bg,
                          l.border
                        )}
                        onMouseEnter={() => setHoveredTool(l.label)}
                        onMouseLeave={() => setHoveredTool(null)}
                      >
                        {l.label}
                      </motion.span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {hoveredTool && (
                      <motion.div
                        key={hoveredTool}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="mt-4 rounded-xl border border-white/[0.08] bg-black/20 p-4"
                      >
                        <div className="text-sm font-semibold text-white">
                          {hoveredTool}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">
                          {toolHints[hoveredTool] ?? "Tooling I use in product work"}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

