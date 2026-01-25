"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { softwareByCategory, softwareCategories } from "@/lib/data/software";
import { useInViewFallback } from "@/hooks/useInViewFallback";
import { useRef } from "react";

export default function SoftwareShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  // Auto-rotate categories every 40 seconds
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % softwareCategories.length);
    }, 40000);
    return () => clearInterval(interval);
  }, [isInView]);

  const currentCategory = softwareCategories[activeCategory];
  const currentSoftware = softwareByCategory[currentCategory] || [];

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % softwareCategories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + softwareCategories.length) % softwareCategories.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 card-premium h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
          Software & Tools
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevCategory}
            className="p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors text-slate-400 hover:text-white"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {softwareCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeCategory
                    ? "w-6 bg-indigo-500"
                    : "w-1.5 bg-white/[0.2] hover:bg-white/[0.3]"
                }`}
                aria-label={`Go to ${softwareCategories[index]}`}
              />
            ))}
          </div>
          <button
            onClick={nextCategory}
            className="p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors text-slate-400 hover:text-white"
            aria-label="Next category"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col flex-1"
        >
          <div className="mb-4">
            <h3 className="text-lg font-heading font-semibold text-white mb-1">
              {currentCategory}
            </h3>
            <p className="text-xs text-slate-400">
              {currentSoftware.length} tools
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 flex-1">
            {currentSoftware.map((software, index) => (
              <motion.div
                key={software.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group relative rounded-xl border border-white/[0.08] bg-black/20 p-3 hover:bg-black/30 hover:border-white/[0.12] transition-all cursor-pointer flex flex-col"
              >
                {software.logo ? (
                  <div className="relative w-full h-16 mb-2 flex items-center justify-center rounded-lg bg-white p-3 group-hover:bg-gray-50 transition-colors shadow-sm flex-1">
                    <Image
                      src={software.logo}
                      alt={software.name}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                      style={{ filter: 'contrast(1.1)' }}
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-16 mb-2 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex-1">
                    <span className="text-lg font-semibold text-indigo-300">
                      {software.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-[11px] text-slate-400 text-center group-hover:text-slate-300 transition-colors leading-tight mt-auto">
                  {software.name}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Spacer to fill remaining space */}
          <div className="flex-1"></div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
