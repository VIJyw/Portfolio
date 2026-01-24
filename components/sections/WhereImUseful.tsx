"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { capabilities } from "@/lib/data/capabilities";
import Card from "@/components/ui/Card";
import { useInViewFallback } from "@/hooks/useInViewFallback";

export default function WhereImUseful() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="capabilities"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4 text-center"
        >
          Where I&apos;m Most Useful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-center mb-12 text-lg"
        >
          Here&apos;s when you should bring me in
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
