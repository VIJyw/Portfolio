import { FileText, Presentation, Code, ExternalLink } from "lucide-react";
import { ExternalLinks as ExternalLinksType } from "@/lib/data/projects";

interface ExternalLinksProps {
  links: ExternalLinksType;
}

export default function ExternalLinks({ links }: ExternalLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.caseStudy && (
        <a
          href={links.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-sm"
        >
          <FileText className="h-4 w-4" />
          View Case Study
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {links.presentation && (
        <a
          href={links.presentation}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-sm"
        >
          <Presentation className="h-4 w-4" />
          View Presentation
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {links.prd && (
        <a
          href={links.prd}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-sm"
        >
          <Code className="h-4 w-4" />
          View PRD
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}
