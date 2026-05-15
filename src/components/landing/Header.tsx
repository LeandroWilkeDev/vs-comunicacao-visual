import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLogo } from "../../hooks/useScrollLogo";

// ── Tipos ──────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfolio", href: "#portfolio" },
];

// ── Sub-componente: Logo ───────────────────────────────────────────────────
interface VSLogoProps {
  isVisible?: boolean;
  logoScale?: number;
}

const VSLogo = ({ isVisible = true, logoScale = 1 }: VSLogoProps) => (
  <motion.div
    className="flex flex-col items-center justify-center select-none cursor-pointer"
    style={{ scale: logoScale, opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <img
      alt="Logo VS Comunicação Visual"
      // Definimos alturas máximas para não estourar o header
      className="h-40 sm:h-46 md:h-46 lg:h-50 w-auto max-h-full object-contain py-5" 
      draggable="false"
      loading="eager"
      src="/logo.png"
    />
    <div className="leading-none mt-1">
      <p className=" text-1xl sm:text-lg md:text-[30px] font-light tracking-widest uppercase text-white m-0 whitespace-nowrap">
        Comunicação Visual
      </p>
    </div>
  </motion.div>
);

// ── Componente Principal ───────────────────────────────────────────────────
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLogoInHeader, logoScale } = useScrollLogo();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
        isScrolled 
          ? "glass-header h-20 shadow-lg" // Altura quando scrollado
          : "bg-transparent h-28"         // Altura inicial (maior)
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Container da Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
          onClick={() => navigate("#inicio")}
        >
          <VSLogo isVisible={isLogoInHeader} logoScale={logoScale} />
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => navigate(link.href)}
                className="group relative text-gray-100 hover:text-white text-sm font-medium bg-transparent border-none cursor-pointer p-0 transition-colors"
              >
                {link.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00B4D8] transition-all duration-300 group-hover:w-full"
                />
              </button>
            </li>
          ))}
          
          {/* CTA no Header */}
          <li>
            <button
              onClick={() => navigate("#contato")}
              className="px-6 py-2 rounded-lg font-bold text-white text-sm border-none cursor-pointer transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #00B4D8, #E91E8C)",
                boxShadow: "0 4px 12px rgba(0,180,216,0.3)",
              }}
            >
              Solicitar Orçamento
            </button>
          </li>
        </ul>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white bg-white/10 p-2 rounded-lg border-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 md:hidden glass-header border-t border-white/10 shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className="text-gray-200 hover:text-[#00B4D8] text-left text-lg font-medium bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigate("#contato")}
                className="py-4 rounded-xl text-white font-bold border-none cursor-pointer shadow-lg active:scale-95 transition-transform"
                style={{ background: "linear-gradient(135deg, #00B4D8, #E91E8C)" }}
              >
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;