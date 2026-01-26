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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOpen(false);
  };

  return (
    <div className="md:hidden fixed left-0 right-0 z-[80] px-4 pointer-events-none bottom-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="max-w-5xl mx-auto flex items-end justify-center">
        <div className="pointer-events-auto">
          <motion.button
            type="button"
            onClick={handleOpen}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-slate-950/70 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] cursor-pointer"
            aria-label="Open connect menu"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-navy-25 to-orange-25 border border-white/[0.10]">
              <MessageCircle className="h-4 w-4 text-navy-light" />
            </span>
            Connect
            <span className="text-navy-light/90 group-hover:text-navy transition-colors">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[79]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Sheet */}
            <motion.div
              className="fixed left-0 right-0 z-[80] px-4 bottom-[calc(0px+env(safe-area-inset-bottom))] pointer-events-auto"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-5xl mx-auto rounded-t-3xl border border-white/[0.12] bg-slate-950/90 backdrop-blur-xl shadow-[0_-24px_80px_rgba(0,0,0,0.6)]">
                <div className="px-5 pt-4 pb-3 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      Connect
                    </div>
                    <a
                      href="mailto:walunj.v@northeastern.edu"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                      className="text-base font-semibold text-white hover:text-navy-light transition-colors break-all cursor-pointer"
                    >
                      walunj.v@northeastern.edu
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-black/20 text-white hover:bg-black/30 transition-colors cursor-pointer shrink-0"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-5 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {links.map((l, index) => {
                      const Icon = l.icon;
                      const rel = l.external ? "noopener noreferrer" : undefined;
                      const target = l.external ? "_blank" : undefined;
                      const isDownload = l.label === "Resume";
                      return (
                        <motion.a
                          key={l.label}
                          href={l.href}
                          target={target}
                          rel={rel}
                          download={isDownload ? true : undefined}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Close modal after a short delay to allow navigation
                            setTimeout(() => {
                              setOpen(false);
                            }, 150);
                          }}
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.10] bg-white/[0.04] px-3 sm:px-4 py-3 text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-white/[0.15] active:scale-[0.98] transition-all cursor-pointer"
                        >
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black/20 border border-white/[0.10] shrink-0">
                            <Icon className="h-4 w-4 text-navy-light" />
                          </span>
                          <span className="truncate">{l.label}</span>
                        </motion.a>
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

