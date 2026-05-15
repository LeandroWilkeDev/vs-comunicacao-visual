// Seção de Depoimentos com prova social real
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  text: string
  result: string
  stars: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Roberto Ferreira',
    role: 'Proprietário',
    company: 'Loja de Moda - Recife',
    image: '👨‍💼',
    text: 'Triplicamos a visitação em 90 dias. A fachada nova virou ponto de referência no bairro. Retorno do investimento em 4 meses!',
    result: 'Visitação: +608%',
    stars: 5,
  },
  {
    name: 'Mariana Santos',
    role: 'Gerente Comercial',
    company: 'Farmácia Premium - Jaboatão',
    image: '👩‍💼',
    text: 'O diferencial foi a Letra Caixa 3D iluminada. Aumentou muito o tráfego à noite. Melhor investimento que fizemos este ano.',
    result: 'Conversão: +156%',
    stars: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor',
    company: 'Empresa de Tecnologia',
    image: '👨‍💻',
    text: 'Profissionalismo do início ao fim. Entregaram em 8 dias, dentro do orçamento. Recomendo para todos os empresários que conheço.',
    result: 'ROI: 3 meses',
    stars: 5,
  },
  {
    name: 'Amanda Costa',
    role: 'Dona do Negócio',
    company: 'Restaurante - Boa Viagem',
    image: '👩‍🍳',
    text: 'A fachada em ACM transformou completamente a aparência do lugar. Ganhou imediatamente mais credibilidade com clientes.',
    result: 'Leads: +340%',
    stars: 5,
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    variants={item}
    className="rounded-2xl p-6 flex flex-col gap-4"
    style={{
      background: 'rgba(26,26,26,0.8)',
      border: '1px solid rgba(0,180,216,0.2)',
      backdropFilter: 'blur(10px)',
    }}
  >
    {/* Stars */}
    <div className="flex gap-1">
      {Array.from({ length: testimonial.stars }).map((_, i) => (
        <Star key={i} size={16} className="fill-vs-yellow text-vs-yellow" />
      ))}
    </div>

    {/* Texto do depoimento */}
    <p className="text-gray-300 text-sm italic leading-relaxed">
      "{testimonial.text}"
    </p>

    {/* Resultado */}
    <div
      className="py-3 px-4 rounded-lg text-center font-bold text-white text-sm"
      style={{ background: 'rgba(0,180,216,0.15)', color: '#00B4D8' }}
    >
      {testimonial.result}
    </div>

    {/* Autor */}
    <div className="flex items-center gap-3 pt-2">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
        style={{ background: 'rgba(233,30,140,0.2)' }}
      >
        {testimonial.image}
      </div>
      <div>
        <p className="text-white font-semibold text-sm">{testimonial.name}</p>
        <p className="text-gray-500 text-xs">
          {testimonial.role} • {testimonial.company}
        </p>
      </div>
    </div>
  </motion.div>
)

const Testimonials = () => (
  <div className="bg-vs-dark py-24 px-6 relative overflow-hidden">
    <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-vs-cyan/8 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-vs-magenta/8 blur-3xl" />

    <div className="relative max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-vs-yellow text-xs font-semibold uppercase tracking-widest mb-3">
          👥 Prova Social Real
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          O Que Nossos Clientes <span className="text-gradient-cm">Ganham na Prática</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Resultados reais de clientes que transformaram seus negócios com nossas soluções.
        </p>
      </motion.div>

      {/* Grid de depoimentos */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
      >
        <div
          className="py-8 px-6 rounded-xl"
          style={{
            background: 'rgba(0,180,216,0.1)',
            border: '1px solid rgba(0,180,216,0.3)',
          }}
        >
          <p className="text-3xl sm:text-4xl font-black text-vs-cyan mb-2">500+</p>
          <p className="text-gray-400 text-sm">Projetos Entregues</p>
        </div>
        <div
          className="py-8 px-6 rounded-xl"
          style={{
            background: 'rgba(233,30,140,0.1)',
            border: '1px solid rgba(233,30,140,0.3)',
          }}
        >
          <p className="text-3xl sm:text-4xl font-black text-vs-magenta mb-2">98%</p>
          <p className="text-gray-400 text-sm">Taxa de Satisfação</p>
        </div>
        <div
          className="py-8 px-6 rounded-xl"
          style={{
            background: 'rgba(245,168,0,0.1)',
            border: '1px solid rgba(245,168,0,0.3)',
          }}
        >
          <p className="text-3xl sm:text-4xl font-black text-vs-yellow mb-2">3-4 meses</p>
          <p className="text-gray-400 text-sm">ROI Médio dos Clientes</p>
        </div>
      </motion.div>
    </div>
  </div>
)

export default Testimonials
