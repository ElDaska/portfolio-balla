import { useState, useEffect } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu l'écran de bienvenue
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      onComplete();
      return;
    }

    // Animations progressives
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2500)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  const handleContinue = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenWelcome', 'true');
    setTimeout(() => onComplete(), 600);
  };

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-white z-50 transition-opacity duration-600 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center overflow-hidden">
      {/* Motifs géométriques de fond */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 border border-slate-900 rotate-45 -translate-x-32 -translate-y-32 md:-translate-x-48 md:-translate-y-48" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 border border-slate-900 rotate-45 translate-x-32 translate-y-32 md:translate-x-48 md:translate-y-48" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] border border-slate-900 rounded-full" />
      </div>

      {/* Contenu principal */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Logo + Nom */}
        <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-900 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-bold text-white">B</span>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
                EL HADJI BALLA <span className="font-semibold">DIOP</span>
              </h1>
              <div className="h-0.5 w-full bg-slate-900 mt-1.5 sm:mt-2" />
            </div>
          </div>
        </div>

        {/* Titre "Bienvenue" */}
        <div className={`mb-6 sm:mb-8 transition-all duration-700 delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-3 sm:mb-4 tracking-tight">
            Bienvenue
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-slate-900 mx-auto" />
        </div>

        {/* Description + Cartes */}
        <div className={`mb-10 sm:mb-12 md:mb-16 transition-all duration-700 delay-500 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Texte descriptif */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-light px-2">
              Portfolio professionnel dédié au{' '}
              <span className="font-medium text-slate-900">contrôle financier</span>,{' '}
              <span className="font-medium text-slate-900">FP&A</span> et{' '}
              <span className="font-medium text-slate-900">automatisation des processus</span>.
            </p>

            {/* Grille de cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
              
              {/* Carte Expertise */}
              <div className="p-5 sm:p-6 border border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Expertise</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  5+ années en contrôle de gestion et analyse financière
                </p>
              </div>

              {/* Carte Projets */}
              <div className="p-5 sm:p-6 border border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Projets</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Réalisations concrètes et études de cas détaillées
                </p>
              </div>

              {/* Carte Technologies */}
              <div className="p-5 sm:p-6 border border-slate-200 bg-white hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Technologies</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Power BI, Python, SQL et outils d'automatisation
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bouton Continuer */}
        <div className={`transition-all duration-700 delay-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={handleContinue}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-slate-900 text-white overflow-hidden transition-all hover:gap-4 w-full sm:w-auto"
          >
            <span className="relative z-10 font-medium tracking-wide text-sm sm:text-base">
              Continuer
            </span>
            <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-slate-800 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          
          <p className="mt-4 sm:mt-6 text-xs text-slate-500 font-light px-4">
            Cette introduction ne s'affichera qu'une seule fois par session
          </p>
        </div>

      </div>
    </div>
  );
}