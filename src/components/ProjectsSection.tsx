import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech)));
  const categories = ["all", ...allTechs];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section className="min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une sélection de projets orientés <span className="text-amber-400 font-semibold">automatisation</span>,
            <span className="text-amber-300 font-semibold"> finance</span> et
            <span className="text-amber-400 font-semibold"> data</span>.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-amber-500 text-[#0F172A] border border-amber-500 shadow-lg shadow-amber-500/30"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {cat === "all" ? "Tous" : cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg font-medium">Aucun projet trouvé</p>
          </div>
        )}

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Intéressé par ces projets ?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Disponible pour discuter de collaborations et opportunités.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-[#0F172A] font-semibold shadow-lg transition-all hover:scale-105">
              Me contacter
            </a>
            <a href="/cv" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 text-white font-semibold transition-all hover:scale-105">
              Voir mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
