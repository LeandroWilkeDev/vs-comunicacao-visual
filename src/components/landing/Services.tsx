// Seção de Serviços — grid de cards com ícones, descrição e animação stagger
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Building2, Type, Lightbulb, Award, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ── Tipos ──────────────────────────────────────────────────────────────────
interface Service {
  icon:        LucideIcon
  title:       string
  description: string
  accent:      string   // cor de destaque do card
}

// ── Dados dos serviços ─────────────────────────────────────────────────────
const SERVICES: Service[] = [
  {
    icon:        Building2,
    title:       'Fachadas em ACM',
    description: 'Revestimento em Alumínio Composto com acabamento premium. Durabilidade, elegância e identidade visual para a fachada do seu negócio.',
    accent:      '#00B4D8',
  },
  {
    icon:        Type,
    title:       'Letra Caixa',
    description: 'Letras tridimensionais iluminadas em acrílico ou metal. Alto impacto visual, dia e noite, valorizando sua marca na fachada.',
    accent:      '#E91E8C',
  },
  {
    icon:        Lightbulb,
    title:       'Painéis Luminosos',
    description: 'Painéis LED e lightboxes de alta luminosidade. Comunicação visual impactante com baixo consumo de energia e longa durabilidade.',
    accent:      '#F5A800',
  },
  {
    icon:        Award,
    title:       'Projetos Especiais',
    description: 'Soluções personalizadas para necessidades únicas. Instalações criativas, totens, displays e projetos sob medida para sua marca.',
    accent:      '#00B4D8',
  },
]

// ── Variantes de animação com stagger ─────────────────────────────────────
const container: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const item: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' as const } },
}

// ── Card de serviço ────────────────────────────────────────────────────────
interface ServiceCardProps { service: Service }

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative rounded-2xl p-7 flex flex-col gap-5 cursor-default
                 transition-all duration-300"
      style={{
        background:   '#1A1A1A',
        border:       `1px solid rgba(255,255,255,0.07)`,
        boxShadow:    '0 4px 24px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${service.accent}40`
        e.currentTarget.style.boxShadow   = `0 8px 32px ${service.accent}20`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow   = '0 4px 24px rgba(0,0,0,0.4)'
      }}
    >
      {/* Ícone com fundo gradiente */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${service.accent}18`, color: service.accent }}
      >
        <Icon size={24} />
      </div>

      {/* Texto */}
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Link "Saiba mais" */}
      <div
        className="flex items-center gap-1 text-xs font-semibold mt-auto
                   transition-colors duration-200"
        style={{ color: service.accent }}
      >
        Saiba mais <ChevronRight size={14} />
      </div>
    </motion.div>
  )
}

// ── Componente principal ───────────────────────────────────────────────────
const Services = () => (
  <div className="bg-vs-anthracite py-24 px-6">
    <div className="max-w-7xl mx-auto">

      {/* Cabeçalho da seção */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-vs-cyan text-xs font-semibold uppercase tracking-widest mb-3">
          O que fazemos
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Nossos <span className="text-gradient-cm">Serviços</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base">
          Do projeto à instalação, entregamos soluções completas de comunicação visual
          com qualidade e acabamento premium.
        </p>
      </motion.div>

      {/* Grid de cards com animação stagger */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </div>
  </div>
)

export default Services
