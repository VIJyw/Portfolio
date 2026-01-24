"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewFallback } from "@/hooks/useInViewFallback";

const skills = [
  {
    title: "Product Strategy",
    bullets: ["Discovery", "PRDs", "Roadmaps", "Stakeholder alignment"],
  },
  {
    title: "Analytics & Experimentation",
    bullets: ["KPI design", "Funnel analysis", "Instrumentation", "A/B testing", "SQL dashboards"],
  },
  {
    title: "Research & Insights",
    bullets: ["User interviews", "Usability testing", "Competitive analysis", "Synthesis & prioritization"],
  },
  {
    title: "Execution & Delivery",
    bullets: ["Agile delivery", "Cross-functional execution", "Launch planning", "Iteration cadence"],
  },
];

export default function SkillsCompressed() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">
            Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
            Skills snapshot
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Capability areas that show up in shipped outcomes—not a keyword list.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6"
            >
              <div className="text-lg font-heading font-semibold text-white mb-3">
                {s.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <span
                    key={b}
                    className="text-sm text-slate-200 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

