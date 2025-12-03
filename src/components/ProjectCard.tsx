// src/components/ProjectCard.tsx
import type { Project } from "../data/projectsData";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { title, subtitle, description, tech, image, link, repo } = project;

  // Couleurs alternées pour varier
  const accentColors = [
    { bg: "from-blue-500/10 to-purple-500/5", border: "border-blue-500/20", text: "text-blue-400", badge: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { bg: "from-purple-500/10 to-pink-500/5", border: "border-purple-500/20", text: "text-purple-400", badge: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    { bg: "from-green-500/10 to-emerald-500/5", border: "border-green-500/20", text: "text-green-400", badge: "bg-green-500/20 text-green-300 border-green-500/30" },
  ];
  
  const colors = accentColors[index % accentColors.length];

  return (
    <div className={`group rounded-2xl overflow-hidden bg-gradient-to-br ${colors.bg} border ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm`}>
      <div className="flex flex-col md:flex-row gap-0">
        {/* Image avec overlay et effets */}
        <div className="relative md:w-2/5 w-full aspect-video md:aspect-auto bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          {/* Overlay gradient au hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10`} />
          
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badge "Projet" flottant */}
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${colors.badge} border backdrop-blur-sm`}>
              💼 Projet {index + 1}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          {/* En-tête */}
          <div className="mb-4">
            <h3 className={`text-2xl font-bold ${colors.text} mb-2 group-hover:translate-x-1 transition-transform`}>
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-gray-300 font-medium flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed mb-5">
            {description}
          </p>

          {/* Tech stack avec icônes */}
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Liens d'action */}
          <div className="mt-auto flex flex-wrap gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`group/btn flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r ${colors.badge} border font-semibold text-sm hover:scale-105 transition-all shadow-lg`}
              >
                <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Voir le projet
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-sm transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code source
              </a>
            )}
            {!link && !repo && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Projet privé
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}