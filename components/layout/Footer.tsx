"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { NOTION_PORTFOLIO_URL } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vijay-walunj",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/vijaywalunj",
    },
    {
      name: "Notion",
      icon: ExternalLink,
      href: NOTION_PORTFOLIO_URL,
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:walunj.v@northeastern.edu",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">
              © {currentYear} Vijay Walunj. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Product Manager | Technical Program Manager
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                  aria-label={link.name}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
