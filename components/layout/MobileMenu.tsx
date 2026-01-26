"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { scrollToElement } from "@/lib/utils";

interface NavLink {
  label: string;
  id: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
}: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-16 z-[70] h-[calc(100vh-4rem)] w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-white/[0.08] shadow-2xl md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-left text-base font-medium text-gray-light hover:text-navy-light transition-colors py-3 px-4 rounded-lg hover:bg-white/[0.05]"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 mt-2 border-t border-white/[0.08]">
                <motion.button
                  onClick={() => handleNavClick("contact")}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="w-full rounded-lg px-6 py-3 text-base font-semibold bg-navy text-gray-light hover:bg-navy-light transition-colors"
                >
                  Let&apos;s Connect
                </motion.button>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
