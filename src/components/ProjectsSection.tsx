// src/components/ProjectsSection.tsx
import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");

  // Extraction des catégories uniques
  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech)));
  const categories = ["all", ...allTechs];

  // Filtrage des projets
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section className="min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec gradient */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une sélection de projets orientés <span className="text-blue-400 font-semibold">automatisation</span>, 
            <span className="text-purple-400 font-semibold"> finance</span> et 
            <span className="text-green-400 font-semibold"> data</span>, développés pour gagner du temps, 
            fiabiliser les processus et améliorer la qualité des décisions.
          </p>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-blue-400">{projects.length}</div>
            <div className="text-xs text-gray-400 mt-1">Projets réalisés</div>
          </div>
          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-purple-400">{allTechs.length}</div>
            <div className="text-xs text-gray-400 mt-1">Technologies</div>
          </div>
          <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-xs text-gray-400 mt-1">Automatisation</div>
          </div>
          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-400">Python</div>
            <div className="text-xs text-gray-400 mt-1">Langage principal</div>
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
              Filtrer par technologie
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white border border-blue-500 shadow-lg shadow-blue-500/30"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {cat === "all" ? "🔥 Tous" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des projets */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-400 text-lg font-medium">Aucun projet trouvé</p>
            <p className="text-gray-500 text-sm mt-2">Essayez un autre filtre</p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 border border-blue-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Intéressé par ces projets ?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Je suis disponible pour discuter de collaborations, missions freelance ou opportunités en finance et data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Me contacter
            </a>
            <a
              href="/cv"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-blue-500/50 text-white font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Voir mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}