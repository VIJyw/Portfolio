"use client";

import { Project, ProjectResult } from "@/lib/data/projects";
import Accordion from "@/components/ui/Accordion";
import Badge from "@/components/ui/Badge";
import { FileText, Presentation, Code, ExternalLink } from "lucide-react";

interface CaseStudyAccordionProps {
  project: Project;
}

export default function CaseStudyAccordion({
  project,
}: CaseStudyAccordionProps) {
  return (
    <div className="space-y-6">
      {/* Problem */}
      {project.problem && (
        <Accordion title="The Problem" defaultOpen>
          <p className="text-muted leading-relaxed">{project.problem}</p>
        </Accordion>
      )}

      {/* Approach */}
      {project.approach && project.approach.length > 0 && (
        <Accordion title="My Approach">
          <ul className="space-y-3 list-none">
            {project.approach.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary font-semibold mt-1">{index + 1}.</span>
                <span className="text-muted flex-1">{step}</span>
              </li>
            ))}
          </ul>
        </Accordion>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <Accordion title="Results">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.results.map((result: ProjectResult, index: number) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-secondary"
              >
                <div className="text-2xl font-heading font-bold text-primary mb-1">
                  {result.metric}
                </div>
                <div className="text-xs text-muted">{result.label}</div>
              </div>
            ))}
          </div>
        </Accordion>
      )}

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <Accordion title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </Accordion>
      )}

      {/* External Links */}
      {project.externalLinks && (
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            View Documentation
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.externalLinks.caseStudy && (
              <a
                href={project.externalLinks.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-sm"
              >
                <FileText className="h-4 w-4" />
                Case Study
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {project.externalLinks.presentation && (
              <a
                href={project.externalLinks.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-sm"
              >
                <Presentation className="h-4 w-4" />
                Presentation
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {project.externalLinks.prd && (
              <a
                href={project.externalLinks.prd}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors text-sm"
              >
                <Code className="h-4 w-4" />
                PRD
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
