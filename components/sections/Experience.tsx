"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/lib/data/experience";
import { MapPin, Calendar, Briefcase, ChevronDown, Building2, Sparkles, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInViewFallback } from "@/hooks/useInViewFallback";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "Full-time":
        return {
          color: "from-emerald-500 to-teal-500",
          bgColor: "bg-emerald-500/10",
          borderColor: "border-emerald-500/20",
          textColor: "text-emerald-400",
          icon: Building2,
        };
      case "Part-time":
        return {
          color: "from-blue-500 to-cyan-500",
          bgColor: "bg-blue-500/10",
          borderColor: "border-blue-500/20",
          textColor: "text-blue-400",
          icon: Users,
        };
      case "Internship":
        return {
          color: "from-purple-500 to-pink-500",
          bgColor: "bg-purple-500/10",
          borderColor: "border-purple-500/20",
          textColor: "text-purple-400",
          icon: Sparkles,
        };
      case "Apprenticeship":
        return {
          color: "from-amber-500 to-orange-500",
          bgColor: "bg-amber-500/10",
          borderColor: "border-amber-500/20",
          textColor: "text-amber-400",
          icon: TrendingUp,
        };
      default:
        return {
          color: "from-slate-500 to-slate-600",
          bgColor: "bg-slate-500/10",
          borderColor: "border-slate-500/20",
          textColor: "text-slate-400",
          icon: Briefcase,
        };
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Professional Journey</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Click on any role to explore achievements and impact
          </motion.p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Experience Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {experiences.map((exp, index) => {
              const config = getTypeConfig(exp.type);
              const Icon = config.icon;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={`${exp.company}-${exp.role}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot - Desktop Only */}
                  <div className="hidden lg:flex absolute -top-6 left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <motion.div
                      className={cn(
                        "relative w-12 h-12 rounded-xl flex items-center justify-center",
                        "border-2 backdrop-blur-xl shadow-lg",
                        config.bgColor,
                        config.borderColor,
                        isExpanded && "scale-110"
                      )}
                      animate={isExpanded ? {
                        rotate: [0, 5, -5, 0],
                        scale: 1.1,
                      } : {
                        rotate: 0,
                        scale: 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={cn("w-6 h-6", config.textColor)} />
                      {isExpanded && (
                        <motion.div
                          className={cn(
                            "absolute inset-0 rounded-xl",
                            config.borderColor,
                            "border-2"
                          )}
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ 
                            scale: 1.5,
                            opacity: 0,
                          }}
                          transition={{ 
                            duration: 1,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className={cn(
                      "relative group/card cursor-pointer",
                      "p-6 rounded-2xl",
                      "bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50",
                      "border border-slate-700/50",
                      "backdrop-blur-xl",
                      "transition-all duration-300",
                      isExpanded && "border-slate-600/50 shadow-2xl",
                      "hover:border-slate-600/50",
                      "shadow-xl hover:shadow-2xl"
                    )}
                    onClick={() => toggleExpanded(index)}
                    whileHover={{ y: -5 }}
                    animate={isExpanded ? { y: -10 } : { y: 0 }}
                  >
                    {/* Gradient overlay on hover/expand */}
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
                        "bg-gradient-to-r",
                        config.color,
                        "mix-blend-overlay"
                      )}
                      animate={{ opacity: isExpanded ? 0.05 : 0 }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <motion.h3
                            className="text-xl font-heading font-bold text-white mb-2 leading-tight"
                            animate={isExpanded ? { color: "#a78bfa" } : { color: "#ffffff" }}
                          >
                            {exp.role}
                          </motion.h3>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                            <p className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Type Badge */}
                        <motion.div
                          className={cn(
                            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg",
                            "border backdrop-blur-sm",
                            config.bgColor,
                            config.borderColor,
                            "shadow-md"
                          )}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className={cn("w-3.5 h-3.5", config.textColor)} />
                          <span className={cn("text-xs font-semibold", config.textColor)}>
                            {exp.type}
                          </span>
                        </motion.div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-700/50">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span className="font-medium">
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        
                        <span className="text-slate-600">•</span>
                        
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.location.split(",")[0]}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                        {exp.description}
                      </p>

                      {/* Expand Indicator */}
                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-slate-700/50"
                        animate={isExpanded ? { opacity: 0.7 } : { opacity: 1 }}
                      >
                        <span className="text-xs font-medium text-indigo-400">
                          {isExpanded ? "Click to collapse" : "Click to expand"}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        </motion.div>
                      </motion.div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-4 border-t border-slate-700/50">
                              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-3 mb-6">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <motion.li
                                    key={achIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: achIndex * 0.05 }}
                                    className="text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                                  >
                                    <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                                    <span>{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>

                              {/* Skills */}
                              {exp.skills && exp.skills.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-amber-400" />
                                    Skills & Technologies
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, skillIndex) => (
                                      <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: skillIndex * 0.03 }}
                                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all duration-200"
                                      >
                                        {skill}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className={cn(
                        "absolute -inset-[1px] rounded-2xl opacity-0 blur-xl -z-10 transition-opacity duration-500",
                        "bg-gradient-to-r",
                        config.color
                      )}
                      animate={{
                        opacity: isExpanded ? [0.2, 0.4, 0.2] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isExpanded ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: experiences.length * 0.15 + 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-xl">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">
              {experiences.length} Roles • Multiple Industries • Continuous Growth
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
