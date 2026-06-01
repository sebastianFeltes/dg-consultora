import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/dg-consultora-no-text.png";

const NAV_ITEMS = [
  { label: "Personas", href: "#personas" },
  { label: "Estrategia", href: "#estrategia" },
  { label: "Transformación", href: "#transformacion" },
  { label: "Procesos", href: "#procesos" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]"
        : "bg-transparent backdrop-blur-xl"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <img
            src={typeof logoImg === "string" ? logoImg : logoImg.src}
            alt="DG Integral"
            className="h-10 w-auto object-contain transition-[transform,filter] duration-300 group-hover:scale-[1.03] dark:invert-0 dark:brightness-100 invert brightness-0"
          />
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
