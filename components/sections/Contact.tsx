"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download, ArrowRight, ExternalLink } from "lucide-react";
import { useInViewFallback } from "@/hooks/useInViewFallback";
import { NOTION_PORTFOLIO_URL } from "@/lib/constants";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:walunj.v@northeastern.edu",
      label: "walunj.v@northeastern.edu",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vijay-walunj",
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/vijaywalunj",
      label: "View on GitHub",
    },
    {
      name: "Notion",
      icon: ExternalLink,
      href: NOTION_PORTFOLIO_URL,
      label: "View projects on Notion",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-45" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-40 w-[520px] h-[520px] bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 22, 0], y: [0, 14, 0], opacity: [0.22, 0.42, 0.22] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-40 w-[560px] h-[560px] bg-fuchsia-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, -12, 0], opacity: [0.20, 0.38, 0.20] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-4">
            Next steps
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Let’s connect.
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Case studies for context, resume for the quick view. If there’s a role where I can help, I’d love to talk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={NOTION_PORTFOLIO_URL}
              className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              View case studies
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Vijay_Walunj_Resume.pdf"
              download
              className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border border-white/[0.14] text-white hover:bg-white/[0.06] transition-colors"
            >
              Download resume
              <Download className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Horizontal Connect Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.10] bg-white/[0.03] p-6 card-premium"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                Connect
              </div>
              <div className="text-lg sm:text-xl font-heading font-semibold text-white break-all sm:break-normal">
                walunj.v@northeastern.edu
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Fastest way to reach me. I usually respond within 24–48 hours.
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                const isExternal = link.name !== "Email";
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.35, delay: 0.18 + index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-black/20 px-4 py-2.5 text-sm text-white hover:bg-white/[0.06] transition-colors"
                    aria-label={link.name}
                    title={link.label}
                  >
                    <Icon className="h-4 w-4 text-indigo-300 group-hover:text-indigo-200" />
                    <span className="font-semibold">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
