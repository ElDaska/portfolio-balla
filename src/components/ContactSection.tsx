// src/components/ContactSection.tsx

export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 md:mt-20 mb-10">
      {/* --- TITRE --- */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Contact & Informations
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* --- COLONNE GAUCHE : MESSAGE PROFESSIONNEL --- */}
        <div className="text-sm md:text-base text-gray-300 space-y-4">
          <p>
            Je vous accompagne sur des missions de{" "}
            <span className="font-semibold text-white">FP&A</span>,{" "}
            <span className="font-semibold text-white">contrôle de gestion</span>, 
            <span className="font-semibold text-white"> automatisation financière</span> 
            et <span className="font-semibold text-white">data analytics</span>.
          </p>

          <p>
            Ouvert aux opportunités{" "}
            <span className="text-blue-400 font-medium">remote internationales</span>, 
            aux projets à forte valeur ajoutée, ainsi qu'aux collaborations ponctuelles.
          </p>

          <p>
            Disponible pour échanger, analyser vos besoins et vous proposer 
            une approche structurée et orientée résultats.
          </p>

          <p className="text-xs text-gray-500 pt-2">
            Temps moyen de réponse : <span className="text-gray-300">24–48h</span>.
          </p>
        </div>

        {/* --- COLONNE DROITE : CARTE CONTACT CORPORATE --- */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-5">
            Coordonnées professionnelles
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Email</p>
                <a
                  href="mailto:diop.ehb@gmail.com"
                  className="text-white hover:text-blue-400 font-medium"
                >
                  diop.ehb@gmail.com
                </a>
              </div>
            </div>

            {/* TÉLÉPHONE */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Téléphone</p>
                <a
                  href="tel:+212609685667"
                  className="text-white font-medium hover:text-green-400"
                >
                  +212 6 09 68 56 67
                </a>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/elhadjiballadiop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white font-medium hover:text-purple-400"
                >
                  /elhadjiballadiop
                </a>
              </div>
            </div>

            {/* LOCALISATION */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Localisation</p>
                <p className="text-white font-medium">
                  Fès, Maroc — Remote international
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
