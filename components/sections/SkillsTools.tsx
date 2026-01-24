"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  BarChart3, 
  Users, 
  Zap, 
  GitBranch, 
  Database,
  FileText,
  Target,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { useInViewFallback } from "@/hooks/useInViewFallback";

const skillCategories = [
  {
    title: "Product Strategy",
    icon: Target,
    items: [
      "PRD Writing",
      "Roadmap Planning",
      "Go-to-Market Strategy",
      "Market Research"
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Technical Skills",
    icon: Code,
    items: [
      "Python",
      "SQL",
      "REST APIs",
      "Data Analysis"
    ],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Analytics & Data",
    icon: BarChart3,
    items: [
      "Power BI",
      "KPI Definition",
      "A/B Testing",
      "User Research"
    ],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  {
    title: "Automation & Systems",
    icon: Zap,
    items: [
      "Workflow Automation",
      "System Integrations",
      "Requirements & Acceptance Criteria",
      "Operational Tooling"
    ],
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    title: "Program Management",
    icon: GitBranch,
    items: [
      "Cross-functional Leadership",
      "Stakeholder Management",
      "Agile/Scrum",
      "Risk Management"
    ],
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30"
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    items: [
      "Jira/Confluence",
      "Figma",
      "Notion",
      "GitHub"
    ],
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30"
  }
];

const methodologies = [
  {
    title: "Discovery",
    description: "User interviews, data analysis, and competitive research to identify real problems worth solving.",
    icon: FileText
  },
  {
    title: "Definition",
    description: "Clear PRDs, success metrics, and acceptance criteria that align engineering, design, and business goals.",
    icon: Target
  },
  {
    title: "Delivery",
    description: "Agile execution with continuous feedback loops, rapid iteration, and stakeholder alignment.",
    icon: Zap
  },
  {
    title: "Measurement",
    description: "Instrument everything, track KPIs, and iterate based on what users actually do — not assumptions.",
    icon: TrendingUp
  }
];

export default function SkillsTools() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Skills & Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Technical depth meets product thinking — the tools and methods I use to ship products that matter.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-xl bg-gradient-to-br ${category.color} border ${category.borderColor} hover:border-opacity-50 transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-slate-800/50">
                      <Icon className="h-5 w-5 text-primary-light" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-primary-light flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 text-center">
            How I Work
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A systematic approach to product development — from problem discovery to measurable outcomes.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Icon className="h-5 w-5 text-primary-light" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary-light">
                      {method.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
