// src/components/ExperienceSection.tsx
import { experiences } from "../data/experienceData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section className="mt-10 md:mt-14">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Expérience professionnelle
      </h2>
      <p className="text-sm text-gray-300 mb-6 max-w-2xl">
        Un parcours entre contrôle financier, FP&A, automatisation des flux
        et pilotage opérationnel, avec un focus constant sur la performance
        et l’optimisation des processus.
      </p>

      {experiences.map((exp) => (
        <ExperienceCard key={exp.title + exp.date} experience={exp} />
      ))}
    </section>
  );
}
