import type { Project } from "../data/projectsData";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { title, subtitle, description, tech, image, link, repo } = project;

  return (
    <div className="group rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-0">
        <div className="relative md:w-2/5 w-full aspect-video md:aspect-auto bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
              Projet {index + 1}
            </span>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-amber-400 mb-2 group-hover:translate-x-1 transition-transform">{title}</h3>
            {subtitle && <p className="text-sm text-gray-300 font-medium">{subtitle}</p>}
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-5">{description}</p>
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-amber-500/30 transition-all hover:scale-105">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto flex flex-wrap gap-3">
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold text-sm hover:scale-105 transition-all">
                Voir le projet
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-semibold text-sm transition-all hover:scale-105">
                Code source
              </a>
            )}
            {!link && !repo && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                Projet privé
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
