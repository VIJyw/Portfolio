"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import MagneticLink from "@/components/ui/MagneticLink";
import MagneticButton from "@/components/ui/MagneticButton";
import MobileMenu from "@/components/layout/MobileMenu";
import { scrollToElement } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          className="text-xl font-fancy font-semibold text-white tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-light via-navy-light to-gray-light bg-clip-text text-transparent font-medium"
            style={{
              letterSpacing: "0.05em",
              textShadow: "0 0 20px rgba(242, 242, 242, 0.1)",
            }}
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors relative z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute top-0 left-0 w-6 h-0.5 bg-current rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 11 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-2.5 left-0 w-6 h-0.5 bg-current rounded-full"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute bottom-0 left-0 w-6 h-0.5 bg-current rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -11 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </motion.header>
  );
}
