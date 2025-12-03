// src/pages/Contact.tsx

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 relative">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl w-full relative">
        {/* Titre de page */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
          Carte de Visite Professionnelle
        </h1>

        {/* Carte de visite principale */}
        <div className="group rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/20 shadow-2xl p-8 md:p-10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] backdrop-blur-xl">
          
          {/* En-tête avec photo et nom */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 border-b border-white/10 pb-8">
            {/* Photo avec effet premium */}
            <div className="relative group/photo">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover/photo:opacity-75 transition-opacity"></div>
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gray-900 transform transition-transform group-hover/photo:scale-105">
                <img
                  src="/photo_pro.JPG"
                  alt="El Hadji Balla DIOP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Nom et titre principal */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                El Hadji Balla <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DIOP</span>
              </h2>
              <p className="text-lg text-gray-300 font-medium mb-2">
                Contrôleur Financier & FP&A
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                  Automatisation
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  Data Analytics
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                  Remote
                </span>
              </div>
            </div>
          </div>

          {/* Grille d'informations de contact */}
          <div className="grid md:grid-cols-2 gap-6 py-8">
            {/* Localisation */}
            <div className="group/item flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <div className="mt-0.5 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover/item:bg-blue-500/30 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Localisation</p>
                <p className="text-white font-medium">Fès, Maroc</p>
                <p className="text-sm text-gray-400">Remote international</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="group/item flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <div className="mt-0.5 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover/item:bg-green-500/30 transition-colors">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Téléphone</p>
                <a
                  href="tel:+212609685667"
                  className="text-white font-medium hover:text-green-400 transition block"
                >
                  +212 6 09 68 56 67
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group/item flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <div className="mt-0.5 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover/item:bg-purple-500/30 transition-colors">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:diop.ehb@gmail.com"
                  className="text-white font-medium hover:text-purple-400 transition block break-all"
                >
                  diop.ehb@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group/item flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <div className="mt-0.5 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover/item:bg-blue-500/30 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/elhadjiballadiop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-medium hover:text-blue-400 transition block"
                >
                  /elhadjiballadiop
                </a>
              </div>
            </div>
          </div>

          {/* Message professionnel */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">Disponible</span> pour des missions remote et opportunités en finance, FP&A, contrôle de gestion et projets data. 
              Particulièrement intéressé par des environnements où la fonction finance travaille main dans la main avec la data, les opérations et la direction pour piloter la performance.
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="mailto:diop.ehb@gmail.com?subject=Prise de contact - Portfolio"
              className="flex-1 min-w-[200px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm font-semibold text-white transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Écrire un email
            </a>
            <a
              href="https://www.linkedin.com/in/elhadjiballadiop"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[200px] px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-white border border-white/20 hover:border-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Profil LinkedIn
            </a>
          </div>
        </div>

        {/* Footer discret */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Carte de visite digitale • N'hésitez pas à me contacter pour discuter d'un poste, d'une mission ou d'un projet
          </p>
        </div>

        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    </div>
  );
}