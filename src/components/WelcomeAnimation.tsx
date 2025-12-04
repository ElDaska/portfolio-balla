import { useState, useEffect } from "react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  // Animation + sessionStorage
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
      <div className="fixed inset-0 bg-white opacity-0 transition-opacity duration-500 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto flex items-center justify-center py-12 px-4">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 border border-slate-900 rotate-45 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 border border-slate-900 rotate-45 translate-x-32 translate-y-32" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 md:w-[550px] md:h-[550px] border border-slate-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-10">

        {/* LOGO + NAME */}
        <div
          className={`transition-all duration-700 ${
            step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-16 h-16 bg-slate-900 flex items-center justify-center">
              <span className="text-3xl text-white font-semibold">B</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">
                EL HADJI BALLA <span className="font-semibold">DIOP</span>
              </h1>
              <div className="h-[2px] bg-slate-900 mt-2" />
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div
          className={`transition-all duration-700 delay-200 ${
            step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">
            Bienvenue
          </h2>
          <div className="w-20 h-[2px] bg-slate-900 mx-auto mt-3" />
        </div>

        {/* DESCRIPTION + CARDS */}
        <div
          className={`transition-all duration-700 delay-300 ${
            step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg md:text-xl text-slate-700 font-light max-w-xl mx-auto leading-relaxed">
            Portfolio dédié au{" "}
            <span className="font-medium text-slate-900">
              contrôle financier
            </span>
            ,{" "}
            <span className="font-medium text-slate-900">
              FP&A
            </span>{" "}
            et{" "}
            <span className="font-medium text-slate-900">
              automatisation des processus
            </span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {[
              {
                title: "Expertise",
                desc: "5+ années d’expérience en contrôle de gestion",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                )
              },
              {
                title: "Projets",
                desc: "Études de cas, analyses et outils financiers",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                )
              },
              {
                title: "Technologies",
                desc: "Python, Power BI, SQL & automatisation",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                )
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 mx-auto bg-slate-900 flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div
          className={`transition-all duration-700 delay-500 ${
            step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={handleContinue}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white text-sm md:text-base tracking-wide font-medium relative overflow-hidden hover:gap-4 transition-all"
          >
            <span className="relative z-10">Continuer</span>

            <svg
              className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>

            <div className="absolute inset-0 bg-slate-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>

          <p className="text-xs text-slate-500 mt-4">
            Cette introduction ne s’affichera qu’une seule fois par session
          </p>
        </div>
      </div>
    </div>
  );
}
