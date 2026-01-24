import { ExternalLink, Github } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    if (project.notionUrl) {
      window.open(project.notionUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card hover className="h-full flex flex-col cursor-pointer" onClick={handleClick}>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted">{project.tagline}</p>
          </div>
          {project.highlight && (
            <Badge variant="success">{project.highlight}</Badge>
          )}
        </div>

        <p className="text-muted mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stats.slice(0, 3).map((stat, index) => (
            <Badge key={index} variant="default">
              {stat.value} {stat.label}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="flex-1" />
        {project.figmaUrl && (
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="View Figma Prototype"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {project.notionUrl && (
          <div className="text-sm font-medium text-primary hover:text-primary-light flex items-center gap-1">
            View Details
            <ExternalLink className="h-4 w-4" />
          </div>
        )}
      </div>
    </Card>
  );
}
