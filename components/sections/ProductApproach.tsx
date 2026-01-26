"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewFallback } from "@/hooks/useInViewFallback";
import { Compass } from "lucide-react";

const blocks = [
  {
    title: "Discover",
    bullets: [
      "Map the workflow end-to-end and identify the true constraint (time, risk, cost, trust).",
      "Use interviews + data to quantify baseline and define the job-to-be-done.",
      "Pull the signal forward: what must be true for this to be worth building?",
    ],
  },
  {
    title: "Decide",
    bullets: [
      "Write a tight PRD: problem, non-goals, assumptions, metrics, risks, acceptance criteria.",
      "Make tradeoffs explicit (scope vs. quality vs. timeline) and align early.",
      "Choose an MVP that proves value quickly and reduces implementation risk.",
    ],
  },
  {
    title: "Deliver",
    bullets: [
      "Ship in increments with fast feedback loops—optimize for learning and adoption.",
      "Instrument outcomes, monitor usage, and iterate against measurable goals.",
      "Close the loop: translate insights into the next release, not a deck.",
    ],
  },
];

export default function ProductApproach() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="approach"
      ref={ref}
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-3 inline-flex items-center gap-2">
            <Compass className="h-4 w-4 text-navy-light" />
            How I think
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
            How I work as a Product Manager
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Clear discovery, crisp decisions, and delivery measured by outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 card-premium"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-lg font-heading font-semibold text-white mb-3">
                {b.title}
              </div>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                {b.bullets.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-navy shrink-0" />
                    <span className="flex-1">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

