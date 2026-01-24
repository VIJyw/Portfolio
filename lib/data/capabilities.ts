import { Brain, GitBranch, BarChart3, Zap } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    title: "Workflow Product Development",
    description:
      "When you need to improve a workflow without breaking what works. I’ve shipped automation and operational improvements to 500+ enterprise users and scope projects realistically.",
    icon: Brain,
  },
  {
    title: "Technical Program Management",
    description:
      "When cross-functional projects need someone who can translate between engineering, design, and leadership. I manage complexity so teams can focus on building.",
    icon: GitBranch,
  },
  {
    title: "Data & Analytics",
    description:
      "When you have data but no clarity. I build dashboards and define KPIs that answer 'what's working' and 'what should we do next' — not just 'what happened.'",
    icon: BarChart3,
  },
  {
    title: "Process & Automation",
    description:
      "When manual work is eating your team's time. I find the repetitive pain points and build tools to eliminate them — like the scheduling system I built that saves 3+ hours weekly.",
    icon: Zap,
  },
];
