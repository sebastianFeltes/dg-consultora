import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Soluciones", href: "#services" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "glass shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]"
          : "bg-transparent glass"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
        {/* Logo — matching branding: DG | INTEGRAL */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="text-lg font-bold tracking-brand uppercase text-[--theme-ink]">
            DG
          </span>
          <span className="w-px h-5 bg-[--theme-border]" aria-hidden="true" />
          <span className="text-sm font-light tracking-brand uppercase text-[--theme-ink-secondary]">
            Integral
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-[--theme-ink-secondary] hover:text-[--theme-ink] transition-colors duration-200 rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Language toggle — visual placeholder */}
          <button
            onClick={() => alert("Traducción próximamente")}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-md text-[--theme-ink-muted] hover:text-[--theme-ink] hover:bg-[--theme-border] transition-[color,background-color] duration-200"
            aria-label="Cambiar idioma"
          >
            <Globe size={18} strokeWidth={1.5} />
          </button>

          {/* Theme toggle with icon cross-fade */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-md text-[--theme-ink-muted] hover:text-[--theme-ink] hover:bg-[--theme-border] transition-[color,background-color] duration-200"
            aria-label="Cambiar tema"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  className="absolute"
                >
                  <Sun size={18} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  className="absolute"
                >
                  <Moon size={18} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* CTA — desktop only */}
          <a
            href="#services"
            className="hidden md:inline-flex items-center ml-3 px-5 py-2.5 text-sm font-medium uppercase tracking-wider border border-[--theme-ink] text-[--theme-ink] hover:bg-[--theme-ink] hover:text-[--theme-surface] active:scale-[0.96] transition-[background-color,color,transform] duration-200 rounded"
          >
            Ver Soluciones
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[--theme-ink-muted] hover:text-[--theme-ink] hover:bg-[--theme-border] transition-[color,background-color] duration-200"
            aria-label="Menú"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  className="absolute"
                >
                  <X size={20} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  className="absolute"
                >
                  <Menu size={20} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="md:hidden glass border-t border-[--theme-border-soft]"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    duration: 0.3,
                    bounce: 0,
                  }}
                  className="block px-4 py-3 text-sm font-medium text-[--theme-ink-secondary] hover:text-[--theme-ink] hover:bg-[--theme-border-soft] rounded-md transition-[color,background-color] duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-4 py-3 text-sm font-medium text-center uppercase tracking-wider border border-[--theme-ink] text-[--theme-ink] hover:bg-[--theme-ink] hover:text-[--theme-surface] active:scale-[0.96] transition-[background-color,color,transform] duration-200 rounded"
              >
                Ver Soluciones
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
