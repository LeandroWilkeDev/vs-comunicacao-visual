// Seção Hero — impacto visual máximo com blobs animados, gradientes e CTAs
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useScrollLogo } from "../../hooks/useScrollLogo";

// ── Variantes Framer Motion ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// ── Dados de estatísticas da empresa ──────────────────────────────────────
interface Stat {
  value: string;
  label: string;
}
const STATS: Stat[] = [
  { value: "30+", label: "Anos de experiência" },
  { value: "500+", label: "Projetos entregues" },
  { value: "100%", label: "Clientes satisfeitos" },
];

// ── Componente principal ───────────────────────────────────────────────────
const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const { logoScale, logoOpacity } = useScrollLogo();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-vs-dark">
      {/* ── Blobs de fundo animados (cores da marca) ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div
          className="animate-blob absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: "#00ccff" }}
        />
        <div
          className="animate-blob animation-delay-2000 absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl"
          style={{ background: "#F5A800" }}
        />
        <div
          className="animate-blob animation-delay-4000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-10 blur-3xl"
          style={{ background: "#F5A800" }}
        />
      </div>

      {/* ── Grade de pontos decorativa ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* ── Conteúdo principal ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* ── Logo animada no hero com efeito de scroll ── */}
        <motion.div
          className="flex flex-col items-center justify-center mb-6"
          style={{
            scale: logoScale,
            opacity: logoOpacity,
          }}
        >
          <img
            alt="logo-vs-comunicacao-visual"
            className="h-24 md:h-32 w-auto cursor-pointer select-none"
            draggable="false"
            loading="eager"
            src="/logo.png"
          />
          <p className="text-sm md:text-base font-light tracking-widest uppercase text-white mt-3 leading-tight">
            Comunicação Visual
          </p>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6"
        >
          Sua Marca <span className="text-gradient-vs">Impõe Presença</span>{" "}
          onde quer que esteja
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Especialistas em Fachadas em ACM, Letra Caixa, Painéis Luminosos e
          Projetos Especiais. Transformamos sua identidade visual em
          experiências reais e impactantes.
        </motion.p>

        {/* Botões CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* CTA primário */}
          <button
            onClick={() => scrollTo("#portfolio")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base
                       border-none cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0077d8, #d80065ff, #efff0aff)",
              boxShadow: "0 0 30px rgba(209, 206, 53, 0.64)",
            }}
          >
            Ver Projetos
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* CTA secundário */}
          <button
            onClick={() => scrollTo("#contato")}
            className="px-8 py-4 rounded-xl font-semibold text-white text-base cursor-pointer
                       transition-all duration-300 hover:scale-105 hover:bg-white/10"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Solicitar Orçamento
          </button>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-gradient-vs">
                {value}
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-tight">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Seta de scroll ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 1.8 },
        }}
        onClick={() => scrollTo("#servicos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-vs-cyan
                   transition-colors duration-200 bg-transparent border-none cursor-pointer"
        aria-label="Rolar para serviços"
      >
        <ChevronDown size={28} />
      </motion.button>
    </div>
  );
};

export default Hero;
