import { useState, useEffect } from "react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("hasSeenWelcome");
    if (seen) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 1200);
    const t3 = setTimeout(() => setStep(3), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setVisible(false);
    setTimeout(() => onComplete(), 500);
  };

  if (!visible) {
    return (
      <div className="fixed inset-0 bg-[#0B1120] opacity-0 transition-opacity duration-500 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1120] overflow-y-auto flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 border border-amber-500 rotate-45 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 border border-amber-500 rotate-45 translate-x-32 translate-y-32" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 md:w-[550px] md:h-[550px] border border-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-10">
        <div className={`transition-all duration-700 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-16 h-16 bg-amber-500 flex items-center justify-center">
              <span className="text-3xl text-[#0F172A] font-semibold">B</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                EL HADJI BALLA <span className="font-semibold">DIOP</span>
              </h1>
              <div className="h-[2px] bg-amber-500 mt-2" />
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Bienvenue
          </h2>
          <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-3" />
        </div>

        <div className={`transition-all duration-700 delay-300 ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Portfolio dédié au{" "}
            <span className="font-medium text-white">contrôle financier</span>,{" "}
            <span className="font-medium text-white">FP&A</span>{" "}
            et{" "}
            <span className="font-medium text-white">automatisation des processus</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {[
              { title: "Expertise", desc: "5+ années d'expérience en contrôle de gestion" },
              { title: "Projets", desc: "Études de cas, analyses et outils financiers" },
              { title: "Technologies", desc: "Python, Power BI, SQL & automatisation" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 hover:shadow-xl hover:border-amber-500/30 transition-all">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-500 ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button
            onClick={handleContinue}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-[#0F172A] text-sm md:text-base tracking-wide font-medium relative overflow-hidden hover:gap-4 transition-all hover:bg-amber-400"
          >
            <span className="relative z-10">Continuer</span>
            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="text-xs text-gray-600 mt-4">
            Cette introduction ne s'affichera qu'une seule fois par session
          </p>
        </div>
      </div>
    </div>
  );
}
