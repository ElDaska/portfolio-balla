import { lazy, Suspense } from "react";
import DownloadCV from "./DownloadCV";

const Scene3D = lazy(() => import("./Scene3D"));

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center px-6 py-14 md:py-20 overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/photo_pro.JPG"
                alt="El Hadji Balla DIOP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg border-2 border-white/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Disponible
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-500/30 backdrop-blur-sm">
              <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">
                Contrôle Financier • FP&A • Automatisation
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                El Hadji Balla{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  DIOP
                </span>
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm mt-3">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Fès, Maroc
                </span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Remote international
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Contrôleur financier spécialisé en <span className="text-amber-400 font-semibold">FP&A</span> et{" "}
              <span className="text-amber-400 font-semibold">automatisation</span>, avec une forte orientation{" "}
              <span className="text-amber-300 font-semibold">data</span> (Power BI, Python, SQL).
              Focus : réduire les coûts, fiabiliser les process et transformer la finance en véritable outil d'aide à la décision.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                { label: "FP&A & Budget", color: "amber" },
                { label: "Power BI / Data", color: "amber" },
                { label: "Python & Automatisation", color: "amber" },
                { label: "Multi-filiales / Paie", color: "amber" }
              ].map((skill) => (
                <span
                  key={skill.label}
                  className="px-4 py-2 text-sm rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-medium hover:bg-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-105 cursor-default"
                >
                  {skill.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <DownloadCV />
              <a
                href="mailto:diop.ehb@gmail.com"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 transition-all font-semibold text-white hover:scale-105 shadow-lg"
              >
                Me contacter
              </a>
              <a
                href="https://www.linkedin.com/in/elhadjiballadiop"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 transition-all font-semibold text-white hover:scale-105"
              >
                LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-2xl font-bold text-amber-400">5+</div>
                <div className="text-xs text-gray-400 mt-1">Années</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-2xl font-bold text-amber-400">2+</div>
                <div className="text-xs text-gray-400 mt-1">Projets</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-2xl font-bold text-amber-400">3</div>
                <div className="text-xs text-gray-400 mt-1">Pays</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
