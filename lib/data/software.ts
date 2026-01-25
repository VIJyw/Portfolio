export interface Software {
  name: string;
  logo?: string; // Path to logo image in /public/images/software/
  category: "Product" | "Analytics" | "Project" | "Development";
}

export const softwareByCategory: Record<string, Software[]> = {
  Product: [
    { name: "Figma", logo: "/images/software/figma.svg" },
    { name: "Notion", logo: "/images/software/notion.svg" },
    { name: "Miro", logo: "/images/software/miro.svg" },
    { name: "Jira", logo: "/images/software/jira.svg" },
    { name: "Confluence", logo: "/images/software/confluence.svg" },
    { name: "Productboard", logo: "/images/software/productboard.svg" },
    { name: "Aha!", logo: "/images/software/aha.svg" },
    { name: "Balsamiq", logo: "/images/software/balsamiq.svg" },
  ],
  Analytics: [
    { name: "Tableau", logo: "/images/software/tableau.svg" },
    { name: "Power BI", logo: "/images/software/powerbi.svg" },
    { name: "Google Analytics", logo: "/images/software/ga.svg" }, // File: ga.svg
    { name: "Mixpanel", logo: "/images/software/mixpanel.svg" },
    { name: "Amplitude", logo: "/images/software/amplitude.svg" },
    { name: "SQL", logo: "/images/software/sql.svg" },
    { name: "Python", logo: "/images/software/python.svg" },
    { name: "Excel", logo: "/images/software/excel.svg" },
  ],
  Project: [
    { name: "Asana", logo: "/images/software/asana.svg" },
    { name: "Monday.com", logo: "/images/software/monday.svg" },
    { name: "Trello", logo: "/images/software/trello.svg" },
    { name: "Microsoft Project", logo: "/images/software/msproject.svg" },
    { name: "Smartsheet", logo: "/images/software/smartsheet.svg" },
    { name: "ClickUp", logo: "/images/software/clickup.svg" },
    { name: "Airtable", logo: "/images/software/airtable.svg" },
  ],
};

export const softwareCategories = ["Product", "Analytics", "Project"] as const;
