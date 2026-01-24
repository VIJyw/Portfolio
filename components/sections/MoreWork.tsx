"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { otherProjects } from "@/lib/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { useInViewFallback } from "@/hooks/useInViewFallback";

export default function MoreWork() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  if (otherProjects.length === 0) return null;

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4 text-center"
        >
          More Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-center mb-12 text-lg"
        >
          Additional projects and case studies
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
