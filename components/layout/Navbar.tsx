"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import MagneticLink from "@/components/ui/MagneticLink";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToElement } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollDirection, scrollY } = useScrollDirection();
  const { scrollY: scrollYProgress } = useScroll();

  const navLinks = [
    { label: "Case Studies", id: "case-studies" },
    { label: "Impact", id: "impact" },
    { label: "Approach", id: "approach" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: scrollDirection === "down" && scrollY > 100 ? -100 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrollY > 50 && "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800"
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Animated Logo */}
        <motion.a
          href="/"
          className="text-xl font-heading font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Vijay Walunj
          </motion.span>
        </motion.a>

        {/* Nav Links with Magnetic Effect */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <MagneticLink
              key={link.id}
              href={`#${link.id}`}
              delay={i * 0.1}
            >
              {link.label}
            </MagneticLink>
          ))}

          {/* Animated CTA Button */}
          <MagneticButton
            href="/Vijay_Walunj_Resume.pdf"
            variant="outline"
          >
            Download Resume
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </nav>
    </motion.header>
  );
}
