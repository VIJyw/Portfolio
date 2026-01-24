"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Slide {
  title: string;
  description: string;
  image?: string;
}

interface ProjectSlidesProps {
  slides: Slide[];
  projectTitle: string;
}

export default function ProjectSlides({ slides, projectTitle }: ProjectSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <span>View Presentation</span>
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Slides Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-16 lg:inset-24 z-50 flex flex-col bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">{projectTitle}</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Slide {currentSlide + 1} of {slides.length}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Slide Content */}
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center"
                  >
                    <div className="max-w-4xl w-full text-center">
                      <h4 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        {slides[currentSlide].title}
                      </h4>
                      <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                        {slides[currentSlide].description}
                      </p>
                      {slides[currentSlide].image && (
                        <div className="mt-8 rounded-xl overflow-hidden">
                          <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="p-6 border-t border-slate-700">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-200",
                        index === currentSlide
                          ? "w-8 bg-indigo-500"
                          : "w-2 bg-slate-700 hover:bg-slate-600"
                      )}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
