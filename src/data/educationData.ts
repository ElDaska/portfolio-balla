// src/data/educationData.ts

export interface EducationItem {
  degree: string;
  school: string;
  years: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Master Audit & Expertise (CCA) – Comptabilité, Contrôle et Audit",
    school: "HECF Business School, Fès",
    years: "2020 – 2022",
  },
  {
    degree: "Licence Comptabilité & Gestion",
    school: "HECF Business School, Fès",
    years: "2017 – 2020",
  },
  {
    degree: "Bachelor Marketing & Communication",
    school: "IPAC / HECF, Fès",
    years: "2017 – 2020",
  },
];
