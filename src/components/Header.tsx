import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", path: "/", icon: "🏠" },
    { label: "Projets", path: "/projects", icon: "💼" },
    { label: "Contact", path: "/contact", icon: "📧" },
    { label: "CV", path: "/cv", icon: "📄" },
  ];

  return (
    <header className="w-full bg-[#0f172a]/95 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Nom avec animation */}
        <Link 
          to="/" 
          className="group flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-blue-500/50 transition-all group-hover:scale-110">
            B
          </div>
          <span className="text-xl font-bold tracking-wide text-white group-hover:text-blue-400 transition">
            Balla DIOP
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                  isActive 
                    ? "text-white bg-blue-600/20 border border-blue-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex items-center gap-2">
                  <span className={`text-base transition-transform ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}>
                    {item.icon}
                  </span>
                  {item.label}
                  
                  {/* Indicateur actif */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        

        {/* Menu Hamburger Mobile */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white hover:bg-white/10 rounded-lg transition group"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
      }`}>
        <nav className="px-6 py-4 space-y-2 bg-[#0a0f1a]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? "text-white bg-blue-600/20 border border-blue-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          
          {/* CTA Mobile */}
          <a
            href="mailto:diop.ehb@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-sm font-semibold text-white shadow-lg mt-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}