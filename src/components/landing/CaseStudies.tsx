// Seção de Case Studies com Resultado Real
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  industry: string
  location: string
  image: string
  problem: string
  solution: string
  results: {
    metric: string
    value: string
    icon: React.ReactNode
  }[]
  investment: string
  roi_months: string
  testimonial: string
  client_name: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: 'Loja de Moda — Recife',
    industry: 'Varejo',
    location: 'Recife/PE',
    image: '👗',
    problem: 'Loja invisível no shopping, passava desapercebida entre concorrentes',
    solution: 'Fachada em ACM branco premium + Letra Caixa 3D em ouro iluminada',
    results: [
      { metric: 'Visitação diária', value: '+608%', icon: <Users size={20} /> },
      { metric: 'Conversão', value: '+245%', icon: <TrendingUp size={20} /> },
      { metric: 'Receita mensal', value: '+R$ 85k', icon: <DollarSign size={20} /> },
      { metric: 'ROI', value: '4 meses', icon: <Clock size={20} /> },
    ],
    investment: 'R$ 28.500',
    roi_months: '4 meses',
    testimonial: 'Triplicamos a visitação em 90 dias. A fachada nova virou ponto de referência no bairro.',
    client_name: 'Roberto Ferreira, Proprietário',
  },
  {
    id: 2,
    title: 'Farmácia Premium — Jaboatão',
    industry: 'Saúde',
    location: 'Jaboatão/PE',
    image: '💊',
    problem: 'Sem diferenciação visual, clientes não reconheciam à noite',
    solution: 'Painel LED de alta luminosidade + Letra Caixa iluminada 24/7',
    results: [
      { metric: 'Reconhecimento', value: '+340%', icon: <TrendingUp size={20} /> },
      { metric: 'Tráfego noturno', value: '+450%', icon: <Users size={20} /> },
      { metric: 'Economia energia', value: '-70%', icon: <DollarSign size={20} /> },
      { metric: 'ROI', value: '3 meses', icon: <Clock size={20} /> },
    ],
    investment: 'R$ 42.000',
    roi_months: '3 meses',
    testimonial: 'O diferencial foi a iluminação estratégica. Aumentou muito o tráfego à noite.',
    client_name: 'Mariana Santos, Gerente Comercial',
  },
  {
    id: 3,
    title: 'Empresa de Tecnologia — Recife',
    industry: 'Corporativo',
    location: 'Recife/PE',
    image: '💻',
    problem: 'Fachada datada, não passava credibilidade de empresa moderna',
    solution: 'Projeto especial: Fachada vidro + Letra Caixa LED em azul cristal',
    results: [
      { metric: 'Credibilidade', value: '+280%', icon: <TrendingUp size={20} /> },
      { metric: 'Leads B2B', value: '+520%', icon: <Users size={20} /> },
      { metric: 'Contracts', value: '+R$ 450k', icon: <DollarSign size={20} /> },
      { metric: 'ROI', value: '2.5 meses', icon: <Clock size={20} /> },
    ],
    investment: 'R$ 65.000',
    roi_months: '2.5 meses',
    testimonial: 'Profissionalismo do início ao fim. Entregaram em 8 dias. Melhor investimento que fizemos.',
    client_name: 'Carlos Mendes, Diretor',
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <motion.div
    variants={item}
    className="rounded-3xl overflow-hidden group"
    style={{
      background: 'rgba(26,26,26,0.9)',
      border: '1px solid rgba(0,180,216,0.2)',
    }}
  >
    {/* Header com emoji e info */}
    <div
      className="p-8"
      style={{
        background: 'linear-gradient(135deg, rgba(0,180,216,0.15), rgba(233,30,140,0.1))',
        borderBottom: '1px solid rgba(0,180,216,0.1)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-4xl mb-3">{study.image}</div>
          <h3 className="text-white font-black text-xl mb-1">{study.title}</h3>
          <p className="text-gray-400 text-sm">
            {study.industry} • {study.location}
          </p>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">
        <span className="font-semibold text-white">Problema:</span> {study.problem}
      </p>
      <p className="text-gray-300 text-sm">
        <span className="font-semibold text-white">Solução:</span> {study.solution}
      </p>
    </div>

    {/* Resultados */}
    <div className="p-8">
      <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">📊 Resultados</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {study.results.map((result, idx) => (
          <div key={idx} className="text-center p-4 rounded-lg" style={{ background: 'rgba(0,180,216,0.08)' }}>
            <div className="text-vs-cyan mb-2 flex justify-center">{result.icon}</div>
            <p className="text-white font-black text-lg mb-1">{result.value}</p>
            <p className="text-gray-400 text-xs">{result.metric}</p>
          </div>
        ))}
      </div>

      {/* Investment & ROI */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 p-4 rounded-lg text-center" style={{ background: 'rgba(245,168,0,0.1)' }}>
          <p className="text-gray-400 text-xs mb-1">Investimento</p>
          <p className="text-vs-yellow font-bold">{study.investment}</p>
        </div>
        <div className="flex-1 p-4 rounded-lg text-center" style={{ background: 'rgba(0,180,216,0.1)' }}>
          <p className="text-gray-400 text-xs mb-1">ROI</p>
          <p className="text-vs-cyan font-bold">{study.roi_months}</p>
        </div>
      </div>

      {/* Testimonial */}
      <div
        className="p-4 rounded-lg mb-6 border-l-4"
        style={{
          background: 'rgba(233,30,140,0.08)',
          borderLeftColor: '#E91E8C',
        }}
      >
        <p className="text-gray-300 text-sm italic mb-2">"{study.testimonial}"</p>
        <p className="text-gray-500 text-xs font-semibold">{study.client_name}</p>
      </div>

      {/* CTA */}
      <button
        className="w-full py-3 rounded-xl font-bold text-white text-sm border-none cursor-pointer transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #00B4D8, #E91E8C)',
          boxShadow: '0 4px 15px rgba(0,180,216,0.25)',
        }}
      >
        Receber Projeto Similar →
      </button>
    </div>
  </motion.div>
)

const CaseStudies = () => (
  <div className="bg-vs-anthracite py-24 px-6 relative">
    <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-vs-cyan/8 blur-3xl" />

    <div className="max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-vs-cyan text-xs font-semibold uppercase tracking-widest mb-3">
          📈 Casos de Sucesso
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Projetos que <span className="text-gradient-cm">Geraram Resultado Real</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Conheça os números reais. Clientes que aumentaram visitação, conversão e receita.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </motion.div>
    </div>
  </div>
)

export default CaseStudies
