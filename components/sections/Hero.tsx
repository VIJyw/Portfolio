"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { useInViewFallback } from "@/hooks/useInViewFallback";
import { productImpactMetrics } from "@/lib/data/case-studies";
import { NOTION_PORTFOLIO_URL } from "@/lib/constants";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-10 bg-slate-950"
    >
      {/* Animated background accents */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
        animate={{ x: [0, 18, 0], y: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -16, 0], y: [0, -10, 0], opacity: [0.22, 0.4, 0.22] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/[0.14] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <Image
                  src="/images/Vijay.jpg"
                  alt="Vijay Walunj"
                  fill
                  className="object-cover"
                  priority
                  sizes="160px"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Product Manager
                </div>
                <div className="text-sm text-slate-300">Automation • Analytics • Product</div>
                <div className="text-xs text-slate-400 mt-1">
                  Northeastern University • M.S. Project Management (Product Analytics) • May 2026
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight text-grad-hero">
              I ship products that remove manual work and move measurable metrics.
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Outcome-focused PM who builds workflow products and measures what changes.
              I run discovery, write crisp PRDs, execute with engineering, and iterate
              against metrics.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={NOTION_PORTFOLIO_URL}
                className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                View case studies
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/Vijay_Walunj_Resume.pdf"
                download
                className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border border-white/[0.14] text-white hover:bg-white/[0.06] transition-colors"
              >
                Download resume
                <Download className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 card-premium"
          >
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-4">
              Highlights
            </div>
            <div className="grid grid-cols-2 gap-3">
              {productImpactMetrics.map((m, i) => (
                <motion.div
                  key={`${m.value}-${m.label}`}
                  className="rounded-xl border border-white/[0.08] bg-black/20 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="text-xl font-heading font-bold text-white">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
