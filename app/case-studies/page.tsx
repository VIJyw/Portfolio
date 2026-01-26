import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">
            Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-3">
            Product case studies
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Shipped work and product thinking — decisions, tradeoffs, and outcomes.
          </p>
        </div>

        <div className="grid gap-6">
          {caseStudies.map((cs) => (
            <a
              key={cs.slug}
              href={
                cs.notionUrl ??
                "https://www.notion.so/Vijay-Walunj-Product-Manager-Project-Manager-Data-Analyst-2a8148e21a7c803f948cc174f7de6be2?source=copy_link"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 mb-2">
                    {cs.heroAccent}
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                    {cs.productName}
                  </h2>
                  <p className="text-slate-400">{cs.oneLine}</p>
                </div>
                <div className="shrink-0 text-sm font-semibold text-navy-light group-hover:text-navy transition-colors">
                  View case study →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

