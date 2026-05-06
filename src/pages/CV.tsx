import { useState } from "react";

export default function CV() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
            Mon Curriculum Vitae
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Contrôleur Financier • FP&A • Automatisation • Data Analytics
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href="/CV_El_Hadji_Balla_DIOP.pdf"
            download
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 transition-all font-semibold text-[#0F172A] shadow-lg hover:shadow-amber-500/50 hover:scale-105"
          >
            Télécharger le CV
          </a>
          <a
            href="/CV_El_Hadji_Balla_DIOP.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-500/50 transition-all font-semibold text-white hover:scale-105"
          >
            Ouvrir dans un nouvel onglet
          </a>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-10">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white font-medium">Chargement du CV...</p>
              </div>
            </div>
          )}
          <iframe
            src="/CV_El_Hadji_Balla_DIOP.pdf"
            title="CV El Hadji Balla DIOP"
            className="w-full h-[80vh] min-h-[600px]"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
