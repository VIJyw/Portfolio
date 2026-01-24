"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  X,
} from "lucide-react";
import { NOTION_PORTFOLIO_URL } from "@/lib/constants";

type ConnectLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

export default function MobileConnectDock() {
  const [open, setOpen] = useState(false);

  const links: ConnectLink[] = useMemo(
    () => [
      { label: "Email", href: "mailto:walunj.v@northeastern.edu", icon: Mail },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vijay-walunj",
        icon: Linkedin,
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/vijaywalunj",
        icon: Github,
        external: true,
      },
      { label: "Notion", href: NOTION_PORTFOLIO_URL, icon: ExternalLink, external: true },
      { label: "Resume", href: "/Vijay_Walunj_Resume.pdf", icon: Download },
    ],
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden fixed left-0 right-0 z-[70] px-4 pointer-events-none bottom-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="max-w-5xl mx-auto flex items-end justify-center">
        <div className="pointer-events-auto">
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-slate-950/70 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            aria-label="Open connect menu"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/20 border border-white/[0.10]">
              <MessageCircle className="h-4 w-4 text-indigo-200" />
            </span>
            Connect
            <span className="text-indigo-200/90 group-hover:text-indigo-100 transition-colors">
              •
            </span>
            Quick links
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[69]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              className="fixed left-0 right-0 z-[70] px-4 bottom-[calc(0px+env(safe-area-inset-bottom))]"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="max-w-5xl mx-auto rounded-t-3xl border border-white/[0.12] bg-slate-950/90 backdrop-blur-xl shadow-[0_-24px_80px_rgba(0,0,0,0.6)]">
                <div className="px-5 pt-4 pb-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      Connect
                    </div>
                    <div className="text-base font-semibold text-white">
                      walunj.v@northeastern.edu
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-black/20 text-white"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-5 pb-5">
                  <div className="grid grid-cols-2 gap-3">
                    {links.map((l) => {
                      const Icon = l.icon;
                      const rel = l.external ? "noopener noreferrer" : undefined;
                      const target = l.external ? "_blank" : undefined;
                      return (
                        <a
                          key={l.label}
                          href={l.href}
                          target={target}
                          rel={rel}
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white active:scale-[0.99] transition"
                        >
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black/20 border border-white/[0.10]">
                            <Icon className="h-4 w-4 text-indigo-200" />
                          </span>
                          <span className="truncate">{l.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

