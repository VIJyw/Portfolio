"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cardVariants } from "@/lib/animations";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      whileHover={
        hover
          ? {
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transition: { type: "spring", stiffness: 300 },
            }
          : undefined
      }
      className={cn(
        "bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
