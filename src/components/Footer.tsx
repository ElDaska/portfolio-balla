// src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elhadjiballadiop",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:diop.ehb@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Téléphone",
      url: "tel:+212609685667",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { label: "Accueil", path: "/" },
    { label: "Projets", path: "/projects" },
    { label: "Contact", path: "/contact" },
    { label: "CV", path: "/cv" }
  ];

  return (
    <footer className="mt-20 border-t border-white/10 bg-gradient-to-b from-[#020617] to-[#0a0f1a]">
      {/* Section principale */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Colonne 1 : À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                B
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Balla DIOP</h3>
                <p className="text-xs text-gray-400">Contrôleur Financier</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Spécialisé en contrôle financier, FP&A et automatisation des processus data. 
              Basé à Fès, disponible en remote international.
            </p>
            
            {/* Badges de compétences */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                Finance
              </span>
              <span className="px-2 py-1 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">
                Data
              </span>
              <span className="px-2 py-1 text-xs font-semibold bg-green-500/10 text-green-400 rounded border border-green-500/20">
                Automation
              </span>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact & Réseaux */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Restons connectés
            </h4>
            
            {/* Contact direct */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:diop.ehb@gmail.com"
                className="text-sm text-gray-400 hover:text-blue-400 transition block"
              >
                diop.ehb@gmail.com
              </a>
              <a
                href="tel:+212609685667"
                className="text-sm text-gray-400 hover:text-green-400 transition block"
              >
                +212 6 09 68 56 67
              </a>
              <p className="text-xs text-gray-500">
                📍 Fès, Maroc
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {year} El Hadji Balla DIOP. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Construit avec
              <span className="text-blue-400">React</span>
              <span className="text-gray-600">•</span>
              <span className="text-blue-500">TypeScript</span>
              <span className="text-gray-600">•</span>
              <span className="text-purple-400">Vite</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}