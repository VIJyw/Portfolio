"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInViewFallback } from "@/hooks/useInViewFallback";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "User interviews, data analysis, and competitive research to identify real problems worth solving.",
    color: "text-cyan-400",
  },
  {
    icon: Target,
    title: "Definition",
    description:
      "Clear PRDs, success metrics, and acceptance criteria that align engineering, design, and business goals.",
    color: "text-indigo-400",
  },
  {
    icon: Zap,
    title: "Delivery",
    description:
      "Agile execution with continuous feedback loops, rapid iteration, and stakeholder alignment.",
    color: "text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Measurement",
    description:
      "Instrument everything, track KPIs, and iterate based on what users actually do — not assumptions.",
    color: "text-emerald-400",
  },
];

export default function HowIWork() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  // Auto-progress through steps
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-heading font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          How I Work
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          A systematic approach to product development — from problem discovery
          to measurable outcomes.
        </motion.p>

        {/* Animated Progress Bar */}
        <div className="flex justify-center gap-2 mb-12">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-16 bg-slate-700 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: activeStep >= i ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Cards with active state */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "cursor-pointer p-6 rounded-2xl border transition-all duration-300",
                  activeStep === i
                    ? "bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-500/20"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                )}
                whileHover={{ y: -5 }}
                animate={{
                  scale: activeStep === i ? 1.02 : 1,
                  opacity: isInView ? (activeStep === i ? 1 : 0.7) : 0,
                  y: isInView ? 0 : 20,
                }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    rotate: activeStep === i ? [0, 10, -10, 0] : 0,
                    scale: activeStep === i ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-8 h-8 ${step.color} mb-4`} />
                </motion.div>

                <h3 className={`text-lg font-semibold mb-2 ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
