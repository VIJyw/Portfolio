"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewFallback } from "@/hooks/useInViewFallback";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
            Northeastern University
          </h2>
          <p className="text-slate-400">
            M.S. in Project Management — Product Analytics Concentration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
        >
          <div className="text-sm text-slate-400">Graduation</div>
          <div className="text-xl font-heading font-semibold text-white">
            May 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

