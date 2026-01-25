export interface Software {
  name: string;
  logo?: string; // Path to logo image in /public/images/software/
  // Note: category is not needed here since it's determined by the Record key in softwareByCategory
}

export const softwareByCategory: Record<string, Software[]> = {
  Product: [
    { name: "Figma", logo: "/images/software/Figma.svg" },
    { name: "Notion", logo: "/images/software/Notion.svg" },
    { name: "Miro", logo: "/images/software/Miro.svg" },
    { name: "Jira", logo: "/images/software/Jira.svg" },
    { name: "Confluence", logo: "/images/software/Confluence.svg" },
    { name: "Productboard", logo: "/images/software/Productboard.svg" },
    { name: "Aha!", logo: "/images/software/Aha.svg" },
    { name: "Balsamiq", logo: "/images/software/Balsamiq.svg" },
  ],
  Analytics: [
    { name: "Tableau", logo: "/images/software/Tableau.svg" },
    { name: "Power BI", logo: "/images/software/Powerbi.svg" },
    { name: "Google Analytics", logo: "/images/software/ga.svg" },
    { name: "Mixpanel", logo: "/images/software/mixpanel.svg" },
    { name: "Amplitude", logo: "/images/software/Amplitude.svg" },
    { name: "SQL", logo: "/images/software/SQL.svg" },
    { name: "Python", logo: "/images/software/Python.svg" },
    { name: "Excel", logo: "/images/software/Excel.svg" },
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
