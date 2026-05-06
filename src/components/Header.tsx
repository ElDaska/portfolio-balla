import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Projets", path: "/projects" },
    { label: "Contact", path: "/contact" },
    { label: "CV", path: "/cv" },
  ];

  return (
    <header className="w-full bg-[#0B1120]/95 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500/50 shadow-lg group-hover:shadow-amber-500/50 transition-all group-hover:scale-110">
            <img src="/photo_pro.JPG" alt="El Hadji Balla DIOP" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg font-bold tracking-wide text-white group-hover:text-amber-400 transition">
            El Hadji Balla <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">DIOP</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                  isActive
                    ? "text-white bg-amber-500/20 border border-amber-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex items-center gap-2">
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

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

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
      }`}>
        <nav className="px-6 py-4 space-y-2 bg-[#080E1A]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-white bg-amber-500/20 border border-amber-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="mailto:diop.ehb@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 text-sm font-semibold text-[#0F172A] shadow-lg mt-4"
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
