import { skillCategories } from "../data/skillsData";

export default function SkillsSection() {
  return (
    <section className="mt-6 md:mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Compétences
      </h2>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="p-4 md:p-5 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="text-sm font-semibold text-amber-300 mb-3 uppercase tracking-wide">
              {cat.title}
            </h3>

            <ul className="space-y-1.5 text-sm text-gray-200">
              {cat.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
