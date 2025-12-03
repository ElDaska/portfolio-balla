import DownloadCV from "./DownloadCV";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center px-6 py-14 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo avec effets premium */}
          <div className="relative group flex-shrink-0">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
            
            {/* Photo container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/photo_pro.JPG"
                alt="El Hadji Balla DIOP"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Badge flottant "Disponible" */}
            <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg border-2 border-white/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Disponible
            </div>
          </div>

          {/* Contenu texte */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Badge métier */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                Contrôle Financier • FP&A • Automatisation
              </span>
            </div>

            {/* Titre principal */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                El Hadji Balla{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Contrôleur financier spécialisé en <span className="text-blue-400 font-semibold">FP&A</span> et{" "}
              <span className="text-purple-400 font-semibold">automatisation</span>, avec une forte orientation{" "}
              <span className="text-green-400 font-semibold">data</span> (Power BI, Python, SQL). 
              Focus : réduire les coûts, fiabiliser les process et transformer la finance en véritable outil d'aide à la décision.
            </p>

            {/* Tags de compétences */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                { label: "FP&A & Budget", icon: "📊", color: "blue" },
                { label: "Power BI / Data", icon: "📈", color: "purple" },
                { label: "Python & Automatisation", icon: "🤖", color: "green" },
                { label: "Multi-filiales / Paie", icon: "🏢", color: "orange" }
              ].map((skill) => (
                <span
                  key={skill.label}
                  className={`group/skill px-4 py-2 text-sm rounded-lg bg-${skill.color}-500/10 border border-${skill.color}-500/20 text-${skill.color}-300 font-medium hover:bg-${skill.color}-500/20 hover:border-${skill.color}-500/40 transition-all hover:scale-105 cursor-default flex items-center gap-2`}
                >
                  <span className="group-hover/skill:scale-110 transition-transform">{skill.icon}</span>
                  {skill.label}
                </span>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <DownloadCV />

              <a
                href="mailto:diop.ehb@gmail.com"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-blue-500/50 transition-all font-semibold text-white hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Me contacter
              </a>

              <a
                href="https://www.linkedin.com/in/elhadjiballadiop"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-blue-500/50 transition-all font-semibold text-white hover:scale-105"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-xs text-gray-400 mt-1">Années</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-xs text-gray-400 mt-1">Projets</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-2xl font-bold text-green-400">3</div>
                <div className="text-xs text-gray-400 mt-1">Pays</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}