import QRCode from "react-qr-code";

export default function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] px-5 py-10">
      <div className="w-full max-w-sm bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1f2937] rounded-3xl p-7 border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.7)]">

        {/* PHOTO */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Halo premium */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500/10 blur-xl"></div>

            <div className="w-28 h-28 rounded-2xl overflow-hidden border border-white/20 shadow-lg">
              <img
                src="/photo_pro.JPG"
                alt="Balla Diop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-white text-2xl font-bold mt-4 tracking-wide text-center">
            El Hadji Balla <span className="text-blue-400">DIOP</span>
          </h1>

          <p className="text-gray-400 text-sm text-center leading-tight mt-1">
            Contrôleur Financier • FP&A <br />
            Data Analytics & Automatisation
          </p>
        </div>

        {/* SEPARATOR */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* ACTION BUTTONS */}
        <div className="mt-6 space-y-3">
          <a
            href="tel:+212609685667"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all tracking-wide"
          >
            <span className="text-lg">📞</span> Appeler
          </a>

          <a
            href="https://wa.me/212609685667"
            target="_blank"
            className="w-full py-3 rounded-xl bg-green-600/90 hover:bg-green-700 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all tracking-wide"
          >
            <span className="text-lg">💬</span> WhatsApp
          </a>

          <a
            href="mailto:diop.ehb@gmail.com"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all tracking-wide"
          >
            <span className="text-lg">✉️</span> Email
          </a>

          <a
            href="https://www.linkedin.com/in/elhadjiballadiop"
            target="_blank"
            className="w-full py-3 rounded-xl bg-[#0A66C2] hover:bg-[#09509b] text-white text-sm font-medium flex items-center justify-center gap-2 transition-all tracking-wide"
          >
            <span className="text-lg">🔗</span> LinkedIn
          </a>
        </div>

        {/* QR CODE */}
        <div className="mt-8 flex flex-col items-center">
          <div className="p-3 bg-white rounded-xl shadow-lg border border-gray-200">
            <QRCode
              value="https://portfolio-balla.vercel.app/" // Mets ton lien ici
              size={120}
              fgColor="#0B0F19"
            />
          </div>

          <p className="text-gray-400 text-xs mt-3 text-center tracking-wide">
            Scanne pour accéder au portfolio
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-6 text-center">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            Carte Professionnelle • Finance & Performance
          </p>
        </div>
      </div>
    </div>
  );
}
