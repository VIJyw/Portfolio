"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/lib/data/testimonials";
import { Quote } from "lucide-react";
import { useInViewFallback } from "@/hooks/useInViewFallback";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  const featured = testimonials.filter((t) => t.featured);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 text-center"
        >
          What People Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-center mb-12 text-lg"
        >
          Testimonials from colleagues and managers
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="h-full p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
                <Quote className="h-8 w-8 text-indigo-400 mb-4 opacity-50" />
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs">
                    {testimonial.relationship}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
