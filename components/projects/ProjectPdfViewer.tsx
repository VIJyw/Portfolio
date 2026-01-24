"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FileText, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectPdfViewer({
  title,
  pdfUrl,
}: {
  title: string;
  pdfUrl: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-white font-semibold transition-all duration-200"
      >
        <FileText className="w-5 h-5" />
        <span>View PDF</span>
      </motion.button>

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-slate-700/50 hover:border-slate-600 text-slate-200 font-semibold transition-all duration-200"
      >
        <ExternalLink className="w-5 h-5" />
        <span>Open in New Tab</span>
      </a>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-4 md:inset-12 lg:inset-20 z-50 flex flex-col bg-slate-950 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} PDF`}
            >
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-slate-800">
                <div>
                  <div className="text-sm text-slate-400">PDF</div>
                  <div className="text-lg md:text-xl font-heading font-semibold text-white">
                    {title}
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-slate-300" />
                </button>
              </div>

              <div className="flex-1 bg-black">
                {/* Native browser PDF viewer */}
                <iframe
                  title={`${title} PDF`}
                  src={pdfUrl}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

