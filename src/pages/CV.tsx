// src/pages/CV.tsx

import { useState, type ReactNode } from "react";

export default function CV() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Mon Curriculum Vitae
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Contrôleur Financier • FP&A • Automatisation • Data Analytics
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard number="4+" label="Années d'expérience" color="blue" />
          <StatCard number="10+" label="Projets réalisés" color="purple" />
          <StatCard number="Python" label="Excel & Power BI" color="green" />
          <StatCard number="Remote" label="International" color="orange" />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <DownloadButton />
          <OpenInNewTabButton />
          <SendByEmailButton />
        </div>

        {/* PDF VIEWER + LOADER */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">

          {isLoading && <PDFLoader />}

          <iframe
            src="/CV_El_Hadji_Balla_DIOP.pdf"
            title="CV El Hadji Balla DIOP"
            className="w-full h-[80vh] min-h-[600px]"
            onLoad={() => setIsLoading(false)}
          />

          <PDFViewerFooter />
        </div>

        {/* EXTRAS */}
        <AdditionalInfo />
      </div>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------- */

function StatCard({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className={`p-4 rounded-xl bg-gradient-to-br from-${color}-500/10 to-${color}-600/5 border border-${color}-500/20 text-center`}
    >
      <div className={`text-2xl font-bold text-${color}-400`}>{number}</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}

function DownloadButton() {
  return (
    <a
      href="/CV_El_Hadji_Balla_DIOP.pdf"
      download
      className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all font-semibold text-white shadow-lg hover:shadow-blue-500/50 hover:scale-105"
    >
      <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Télécharger le CV
    </a>
  );
}

function OpenInNewTabButton() {
  return (
    <a
      href="/CV_El_Hadji_Balla_DIOP.pdf"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-blue-500/50 transition-all font-semibold text-white hover:scale-105"
    >
      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      Ouvrir dans un nouvel onglet
    </a>
  );
}

function SendByEmailButton() {
  return (
    <a
      href="mailto:diop.ehb@gmail.com?subject=Candidature - CV Portfolio"
      className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-green-500/50 transition-all font-semibold text-white hover:scale-105"
    >
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      Envoyer par email
    </a>
  );
}

function PDFLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-10">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white font-medium">Chargement du CV...</p>
        <p className="text-gray-400 text-sm mt-2">Veuillez patienter</p>
      </div>
    </div>
  );
}

function PDFViewerFooter() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>CV_El_Hadji_Balla_DIOP.pdf</span>
        </div>
        
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
          ✓ À jour - 2025
        </span>
      </div>

      <p className="text-xs text-gray-500 text-center mt-3">
        💡 Si le PDF ne s'affiche pas correctement, utilisez le bouton "Télécharger" ou "Ouvrir dans un nouvel onglet"
      </p>
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <AdditionalInfoCard
        title="Expérience"
        description="Contrôle financier, FP&A et projets data"
        iconColor="blue"
        icon={
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        }
      />
      <AdditionalInfoCard
        title="Formation"
        description="Master CCA + diplômes en gestion"
        iconColor="purple"
        icon={
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        }
      />
      <AdditionalInfoCard
        title="Compétences"
        description="Python, Excel, Power BI, SQL"
        iconColor="green"
        icon={
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        }
      />
    </div>
  );
}

function AdditionalInfoCard({
  title,
  description,
  icon,
  iconColor,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  iconColor: string;
}) {
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-10 h-10 rounded-lg bg-${iconColor}-500/20 flex items-center justify-center`}
        >
          <svg className={`w-5 h-5 text-${iconColor}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
