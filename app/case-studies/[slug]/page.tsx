import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/data/case-studies";
import Image from "next/image";
import { NOTION_PORTFOLIO_URL } from "@/lib/constants";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 border-t border-white/[0.06]">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-300 leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              ← Back to portfolio
            </Link>
            <a
              href={NOTION_PORTFOLIO_URL}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              All case studies
            </a>
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">
              {cs.heroAccent}
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-3">
              {cs.productName}
            </h1>
            <p className="text-slate-300 text-lg">{cs.oneLine}</p>

            <div className="mt-4 flex flex-wrap gap-4">
              {cs.notionUrl && (
                <a
                  href={cs.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                >
                  View in Notion →
                </a>
              )}
              {cs.figmaUrl && (
                <a
                  href={cs.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                >
                  View Figma Prototype →
                </a>
              )}
            </div>

            {cs.image && (
              <div className="mt-6 relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/20">
                <Image
                  src={cs.image}
                  alt={cs.productName}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 768px, 100vw"
                  priority
                />
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="text-sm text-slate-400 mb-2">At a glance</div>
              <div className="space-y-2 text-slate-200">
                <div>
                  <span className="text-slate-400">Problem:</span>{" "}
                  {cs.card.problem}
                </div>
                <div>
                  <span className="text-slate-400">Role:</span> {cs.card.role}
                </div>
                {cs.card.impact.length > 0 && (
                  <div>
                    <span className="text-slate-400">Impact:</span>{" "}
                    {cs.card.impact.join(" • ")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Section title="Overview">
          <p className="text-slate-300 leading-relaxed">{cs.sections.overview}</p>
        </Section>

        <Section title="Problem Statement">
          <BulletList items={cs.sections.problemStatement} />
        </Section>

        <Section title="Goals & Success Metrics">
          <BulletList items={cs.sections.goalsAndSuccessMetrics} />
        </Section>

        <Section title="My Role & Responsibilities">
          <BulletList items={cs.sections.myRoleAndResponsibilities} />
        </Section>

        <Section title="Discovery & Insights">
          <BulletList items={cs.sections.discoveryAndInsights} />
        </Section>

        <Section title="Solution">
          <BulletList items={cs.sections.solution} />
        </Section>

        <Section title="Execution">
          <BulletList items={cs.sections.execution} />
        </Section>

        <Section title="Results & Impact">
          <BulletList items={cs.sections.resultsAndImpact} />
        </Section>

        <Section title="Key Learnings">
          <BulletList items={cs.sections.keyLearnings} />
        </Section>

        <Section title="What I’d Improve Next">
          <BulletList items={cs.sections.whatIdImproveNext} />
        </Section>

        <div className="pt-10 border-t border-white/[0.06]">
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6">
            <div className="text-white text-lg font-heading font-semibold mb-2">
              Want the full story in context?
            </div>
            <p className="text-slate-300 mb-5">
              I’m happy to walk through decisions, metrics, and execution details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={NOTION_PORTFOLIO_URL}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                View more case studies
              </a>
              <a
                href="/Vijay_Walunj_Resume.pdf"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border border-white/[0.14] text-white hover:bg-white/[0.06] transition-colors"
                download
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

