export interface Project {
  slug: string;
  title: string;
  tagline: string;
  highlight?: string;
  description: string;
  gradient: string;
  heroImage?: string;
  stats: Array<{ value: string; label: string }>;
  notionUrl?: string;
  figmaUrl?: string;
  pptUrl?: string;
  pdfUrl?: string;
  // Optional deep case-study fields (used by generic `/projects/[slug]` page)
  problem?: string;
  approach?: string[];
  results?: ProjectResult[];
  techStack?: string[];
  externalLinks?: ExternalLinks;
  slides?: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
}

export interface ProjectResult {
  metric: string;
  label: string;
}

export interface ExternalLinks {
  caseStudy?: string;
  presentation?: string;
  prd?: string;
}

export const projects: Project[] = [
  {
    slug: "husky-match",
    title: "Husky Match",
    tagline: "Mentorship Matching Platform",
    highlight: "🏆 1st Place — 100+ Teams",
    description:
      "No-code platform connecting students with alumni mentors. Built in 48 hours.",
    gradient: "from-teal-500 to-cyan-600",
    heroImage: "/images/husky-match-hero.png",
    notionUrl: "https://www.notion.so/Husky-Match-2a8148e21a7c80d59c37dc59fb84ec6e",
    pdfUrl: "/pdfs/husky-match.pdf",
    stats: [
      { value: "48hrs", label: "To MVP" },
      { value: "85%", label: "Satisfaction" },
      { value: "45%", label: "More Engagement" },
    ],
  },
  {
    slug: "smartassist-coursera",
    title: "SmartAssist for Coursera",
    tagline: "Accessibility for Neurodivergent Learners",
    description:
      "No-code accessibility layer making online learning inclusive for ADHD, dyslexia, and autism.",
    gradient: "from-purple-500 to-pink-600",
    heroImage: "/images/smartassist-hero.png",
    notionUrl: "https://www.notion.so/Coursera-SmartAssist-2a8148e21a7c80c0aeebf3b86aad3e2a",
    pdfUrl: "/pdfs/smartassist-coursera.pdf",
    figmaUrl:
      "https://www.figma.com/proto/Y7LTavpW3braMc3j1sP6q5/Screenshot-2024-11-19-at-2.19.18%E2%80%AFPM?node-id=74-31&t=MNVSI9ixAyA9xki9-1",
    stats: [
      { value: "4", label: "Core Features" },
      { value: "3", label: "Accessibility Modes" },
      { value: "100%", label: "No-Code" },
    ],
  },
  {
    slug: "apple-fitness-studio",
    title: "Apple Fitness+ Studio Expansion",
    tagline: "Hybrid Wellness Ecosystem",
    description:
      "12-month program bridging digital fitness streaming with physical studio experiences.",
    gradient: "from-red-500 to-orange-600",
    heroImage: "/images/apple-fitness-hero.png",
    notionUrl: "https://www.notion.so/Apple-Fitness-Studio-Expansion-2a9148e21a7c804f90b7de83b0e172b1",
    pdfUrl: "/pdfs/apple-fitness-studio.pdf",
    stats: [
      { value: "12mo", label: "Timeline" },
      { value: "60%", label: "Faster Onboarding" },
      { value: "$40K", label: "Saved in QA" },
    ],
  },
];

// Legacy section support (kept empty intentionally)
export const otherProjects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
