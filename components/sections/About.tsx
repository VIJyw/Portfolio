"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewFallback } from "@/hooks/useInViewFallback";

const aboutContent = {
  intro: "Hello 👋 I'm Vijay, a product builder who ships end-to-end — from defining the problem to measuring success.",
  
  builder: {
    title: "Builder",
    text: "I've led a $180K workflow integration, built scheduling automation tools from scratch, and shipped a hackathon-winning prototype in 48 hours. I don't just write specs — I get my hands dirty."
  },
  
  bridge: {
    title: "Bridge", 
    text: "I sit between engineering, data, and stakeholders to make sure everyone's building toward the same goal. I translate technical complexity into business outcomes."
  },
  
  craft: {
    title: "Craft",
    text: "I care about the details that make products feel right — clear metrics, thoughtful edge cases, and experiences users actually trust."
  },
  
  impact: {
    title: "Impact",
    text: "I measure success by the problems solved and value delivered. From reducing processing time by 65% to saving teams 3+ hours weekly, I focus on outcomes that matter."
  }
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  const sections = [
    aboutContent.builder,
    aboutContent.bridge,
    aboutContent.craft,
    aboutContent.impact,
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-slate-200 mb-16 text-center leading-relaxed"
        >
          {aboutContent.intro}
        </motion.p>

        {/* Builder / Bridge / Craft / Impact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-200"
            >
              <h3 className="text-xl font-heading font-semibold text-primary-light mb-4">
                {section.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
