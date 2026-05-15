// Seção de Serviços — grid de cards com ícones, descrição e animação stagger
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Building2, Type, Lightbulb, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ── Tipos ──────────────────────────────────────────────────────────────────
interface Service {
  icon:        LucideIcon
  title:       string
  description: string
  accent:      string   // cor de destaque do card
}

// ── Dados dos serviços com benefícios e ROI ─────────────────────────────────
const SERVICES: Service[] = [
  {
    icon:        Building2,
    title:       'Fachadas em ACM Premium',
    description: 'Revestimento em Alumínio que transforma fachadas invisíveis em pontos de atração. Aumenta visitação em até 180%, durável 20+ anos. ROI em 4-5 meses.',
    accent:      '#00B4D8',
  },
  {
    icon:        Type,
    title:       'Letra Caixa 3D Iluminada',
    description: 'Letras tridimensionais que funcionam 24/7. Alto impacto visual dia e noite, aumenta reconhecimento de marca em 250%. Gasta 70% menos energia.',
    accent:      '#E91E8C',
  },
  {
    icon:        Lightbulb,
    title:       'Painéis LED Inteligentes',
    description: 'Painéis que não param de chamar atenção. Aumentam conversão até 156%, consomem 70% menos energia (economiza R$ 8-15k/ano). Vida útil 50k+ horas.',
    accent:      '#F5A800',
  },
  {
    icon:        Award,
    title:       'Projetos Especiais',
    description: 'Soluções personalizadas que vendem. Totens, displays, ambientação. Cada projeto gera em média R$ 50-500k em receita adicional para clientes.',
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
        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* CTA Funcional */}
      <div className="mt-auto pt-4">
        <button
          className="w-full py-2.5 rounded-lg font-semibold text-white text-sm border-none cursor-pointer
                     transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ 
            background: service.accent,
            color: 'white',
            boxShadow: `0 4px 12px ${service.accent}40`
          }}
        >
          Solicitar Orçamento →
        </button>
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
          ⚡ Soluções que Vendem
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Cada Serviço <span className="text-gradient-cm">Gera Resultado Real</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Não é só "bonito". Cada projeto aumenta visitação, conversão e receita. 
          Nossos clientes ganham em média R$ 50-500k em resultado.
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
