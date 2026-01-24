"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Hammer, GitBranch, Sparkles, TrendingUp } from "lucide-react";
import { textReveal, cardVariants } from "@/lib/animations";
import { useInViewFallback } from "@/hooks/useInViewFallback";

const valueProps = [
  {
    title: "Builder",
    description:
      "I've led a $180K workflow integration, built scheduling automation tools from scratch, and shipped a hackathon-winning prototype in 48 hours. I don't just write specs — I get my hands dirty.",
    icon: Hammer,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Bridge",
    description:
      "I sit between engineering, data, and stakeholders to make sure everyone's building toward the same goal. I translate technical complexity into business outcomes.",
    icon: GitBranch,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Craft",
    description:
      "I care about the details that make products feel right — clear metrics, thoughtful edge cases, and experiences users actually trust.",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Impact",
    description:
      "I measure success by problems solved and value delivered. From reducing processing time by 65% to saving teams 3+ hours weekly, I focus on outcomes that matter.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ValueProps() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          variants={textReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl sm:text-5xl font-heading font-bold text-white text-center mb-4"
        >
          What I Bring to the Table
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                {/* Animated gradient icon */}
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-4`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-heading font-semibold text-indigo-400 mb-3">
                  {prop.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
