// src/data/experienceData.ts

export interface Experience {
  title: string;
  company: string;
  date: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    title: "Contrôleur Financier & Responsable Paies",
    company: "Régence Inc. – PME industrielle +200 employés, Canada (Télétravail)",
    date: "Décembre 2024 – Présent",
    tasks: [
      "Analyse des écarts budgétaires mensuels avec production de rapports financiers et dashboards Power BI interactifs",
      "Gestion paie de 120 employés sur 3 filiales avec 100% conformité fiscale et légale",
      "Automatisation des processus financiers (API taux de change, conversion PDF → Excel, extraction de données)",
    ],
  },
  {
    title: "Superviseur Approvisionnements",
    company: "Régence Inc. – Canada (Télétravail)",
    date: "Juin – Décembre 2024",
    tasks: [
      "Supervision du cycle complet d'approvisionnement (production → livraison) avec optimisation des stocks et des KPI",
      "Réduction de 20% des délais via restructuration des processus logistiques et meilleure anticipation",
    ],
  },
  {
    title: "Data Analyst (Transport & Logistique)",
    company: "Régence Inc. – Canada",
    date: "Août 2022 – Juin 2024 (Temps partiel)",
    tasks: [
      "Développement de dashboards Power BI pour le suivi temps réel des KPI transporteurs",
      "Réduction de 8,4% des coûts de transport via refonte des processus, renégociation tarifaire et automatisation SQL/Python",
    ],
  },
  {
    title: "Référent Technique / Responsable Activité",
    company: "Alten Maroc",
    date: "Juillet 2022 – Juin 2024",
    tasks: [
      "Management de 42 personnes avec formation continue et standardisation des processus opérationnels",
      "Amélioration du taux de résolution à 83% (+8 pts) via optimisation des workflows ServiceNow et mise en place de KPI",
    ],
  },
  {
    title: "Comptable Junior (3 stages)",
    company:
      "ACF International – Saisie comptable, lettrage, rapprochements bancaires, états financiers",
    date: "2018 – 2021",
    tasks: [
      "Participation aux travaux de saisie et de révision comptable",
      "Contributions aux états financiers et rapprochements bancaires",
    ],
  },
];
