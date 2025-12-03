// src/components/ExperienceCard.tsx
import type { Experience } from "../data/experienceData";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  const { title, company, date, tasks } = experience;

  return (
    <div className="p-5 md:p-6 rounded-xl bg-white/5 border border-white/10 mb-4">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1.5">
        <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
        <span className="text-sm text-gray-400 italic">{date}</span>
      </div>

      <p className="text-sm text-blue-200 mb-3">{company}</p>

      <ul className="space-y-1.5 text-sm text-gray-200">
        {tasks.map((task, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-blue-400 flex-shrink-0" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
