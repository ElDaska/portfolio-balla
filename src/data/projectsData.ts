// src/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "pdf-to-excel",
    title: "Convertisseur PDF → Excel",
    subtitle: "Application desktop Python pour la finance",
    description:
      "Outil développé pour transformer automatiquement des relevés bancaires et documents PDF en fichiers Excel structurés, prêts à être analysés (Pandas, PyPDF…). Optimise le temps de traitement et réduit les erreurs manuelles.",
    tech: ["Python", "Pandas", "PyPDF", "Automatisation", "Finance"],
    image: "/PDF_to_excel.png", // adapte l’extension si besoin
    // link: "",
    // repo: "",
  },
  {
    id: "taux-de-change",
    title: "Automatisation des taux de change",
    subtitle: "API Banque du Canada + reporting multi-devises",
    description:
      "Script et outil d’automatisation qui récupère les taux EUR/USD/CAD via API, alimente des modèles Excel / Power BI et fiabilise les conversions dans les reportings financiers multi-filiales.",
    tech: ["Python", "API", "Automatisation", "Power BI", "Reporting"],
    image: "/taux_de_change.png", // adapte l’extension si besoin
  },
];
