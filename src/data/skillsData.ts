// src/data/skillsData.ts

export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Finance & Contrôle",
    items: [
      "FP&A & Analyse budgétaire",
      "Contrôle de gestion",
      "Optimisation des coûts",
      "Gestion paie multi-filiales",
      "Conformité fiscale",
    ],
  },
  {
    title: "Data & Automatisation",
    items: [
      "Power BI & Dashboards",
      "SQL & Python",
      "Excel avancé (VBA, TCD)",
      "Make / n8n",
      "API & Web Scraping",
    ],
  },
  {
    title: "Outils & ERP",
    items: ["SAP FI/CO", "IPhenix", "ServiceNow"],
  },
  {
    title: "Langues",
    items: ["Français – C2", "Anglais – B1", "Wolof – Natif"],
  },
];
