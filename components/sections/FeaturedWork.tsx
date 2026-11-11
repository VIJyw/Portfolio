"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data/case-studies";
import { useRef } from "react";
import { useInViewFallback } from "@/hooks/useInViewFallback";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { NOTION_PORTFOLIO_URL } from "@/lib/constants";

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInViewFallback(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20 bg-slate-950"
    >
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-60" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-3 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-navy-light" />
              Featured case studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
              Shipped products and measurable outcomes
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Product and data case studies: problem, role, impact.
            </p>
          </div>
          <a
            href={NOTION_PORTFOLIO_URL}
            className="hidden sm:inline-flex text-sm font-semibold text-indigo-300 hover:text-indigo-200"
          >
            View all →
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {caseStudies.map((cs, index) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 card-premium"
              style={{ transformStyle: "preserve-3d" }}
            >
              {cs.image && (
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-white/[0.08] bg-black/20 mb-4">
                  <Image
                    src={cs.image}
                    alt={cs.productName}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    priority={index === 0}
                  />
                </div>
              )}
              <div className="text-xs text-slate-400 mb-2">{cs.heroAccent}</div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {cs.card.productName}
              </h3>

              <div className="space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-2.5 font-medium">
                    Problem
                  </div>
                  <p className="text-base text-slate-200 leading-relaxed">
                    {cs.card.problem}
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-2.5 font-medium">
                    My role
                  </div>
                  <p className="text-base text-slate-200 leading-relaxed">{cs.card.role}</p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-2.5 font-medium">
                    Impact
                  </div>
                  <ul className="space-y-2 text-base text-slate-200">
                    {cs.card.impact.map((x) => (
                      <li key={x} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-navy shrink-0" />
                        <span className="flex-1 leading-relaxed">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`/case-studies/${cs.slug}`}
                    className="group inline-flex items-center justify-center w-full rounded-lg px-5 py-3 text-base font-semibold bg-navy text-gray-light hover:bg-navy-light transition-colors"
                  >
                    Read more
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                  <a
                    href={cs.notionUrl ?? "https://www.notion.so/Vijay-Walunj-Product-Manager-Project-Manager-Data-Analyst-2a8148e21a7c803f948cc174f7de6be2?source=copy_link"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center w-full rounded-lg px-5 py-3 text-base font-semibold border border-white/[0.14] text-white hover:bg-white/[0.06] transition-colors"
                  >
                    Open in Notion
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href={NOTION_PORTFOLIO_URL}
            className="inline-flex text-sm font-semibold text-navy-light hover:text-navy transition-colors"
          >
            View all case studies →
          </a>
        </div>
      </div>
    </section>
  );
}
