// src/components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section className="mt-6 md:mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        À propos
      </h2>

      <div className="grid md:grid-cols-[2fr,1fr] gap-6 items-start">
        {/* Texte principal */}
        <div className="text-sm md:text-base text-gray-200 space-y-3 leading-relaxed">
          <p>
            Je m’appelle <span className="font-semibold text-white">El Hadji Balla DIOP</span>, 
            contrôleur financier et analyste FP&amp;A, avec une forte appétence pour 
            l’automatisation et la data. Mon terrain de jeu : transformer des chiffres 
            en décisions utiles et des processus lourds en systèmes fluides et fiables.
          </p>

          <p>
            Ces dernières années, j’ai travaillé pour une PME industrielle canadienne
            en télétravail, en gérant la paie multi-filiales, les reportings financiers,
            le suivi des coûts transport et l’optimisation des délais d’approvisionnement.
            J’utilise au quotidien des outils comme <span className="font-medium">Power BI, Excel avancé, Python et SQL</span>.
          </p>

          <p>
            Mon approche est simple : <span className="font-medium">compréhension métier d’abord</span>, 
            puis mise en place d’outils et d’automatisations qui apportent un gain 
            concret en temps, en fiabilité et en visibilité pour la direction.
          </p>

          <p>
            Je suis ouvert aux opportunités en <span className="font-medium">contrôle de gestion, FP&amp;A,
            finance d’entreprise</span> ou à des missions d’accompagnement pour 
            structurer et automatiser la fonction finance.
          </p>
        </div>

        {/* Bloc “en bref” */}
        <aside className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-300 mb-2">
            En bref
          </h3>

          <p><span className="font-semibold text-white">Localisation :</span> Fès, Maroc</p>
          <p><span className="font-semibold text-white">Domaines :</span> FP&amp;A, contrôle de gestion, automatisation</p>
          <p><span className="font-semibold text-white">Outils clés :</span> Power BI, Excel avancé, Python, SQL, SAP FI/CO</p>
          <p><span className="font-semibold text-white">Langues :</span> Français (C2), Anglais (B1), Wolof (natif)</p>
          <p className="pt-1 text-blue-300 font-medium">
            Disponible pour missions remote et collaborations internationales.
          </p>
        </aside>
      </div>
    </section>
  );
}
