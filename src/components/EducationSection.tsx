import { educationData } from "../data/educationData";

export default function EducationSection() {
  return (
    <section className="mt-10 md:mt-14">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Formation
      </h2>

      <div className="space-y-5 relative">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="p-4 md:p-5 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-blue-400">
                {edu.degree}
              </h3>
              <span className="text-sm text-gray-400">{edu.years}</span>
            </div>

            <p className="text-sm text-gray-300">{edu.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
