import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ZoomIn, X } from 'lucide-react'

// ── Tipos ──────────────────────────────────────────────────────────────────
interface PortfolioItem {
  id: number
  img: string
  title: string
  category: string
  accent: string
}

const ITEMS: PortfolioItem[] = [
  { id: 1, img: '/acm.jpg', title: 'Fachada Corporativa ACM', category: 'Fachadas em ACM', accent: '#00B4D8' },
  { id: 2, img: '/caixaIlu.jpg', title: 'Letra Caixa Iluminada', category: 'Letra Caixa', accent: '#E91E8C' },
  { id: 3, img: '/outdoor.jpg', title: 'Outdoor', category: 'Outdoor', accent: '#F5A800' },
  { id: 4, img: '/totem.jpeg', title: 'Totem Direcional', category: 'Projetos Especiais', accent: '#00B4D8' },
  { id: 5, img: '/acmRes.jpg', title: 'Fachada Residencial ACM', category: 'Fachadas em ACM', accent: '#E91E8C' },
  { id: 6, img: '/letreiro3d.jpg', title: 'Letreiro 3D Premium', category: 'Letra Caixa', accent: '#F5A800' },
]

// ── Variantes de animação ──────────────────────────────────────────────────
const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const cardAnim: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ── Card de portfólio ──────────────────────────────────────────────────────
const PortfolioCard = ({ item, onOpen }: { item: PortfolioItem; onOpen: (item: PortfolioItem) => void }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardAnim}
      onClick={() => onOpen(item)}
      className="relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
        style={{ background: `${item.accent}22` }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: item.accent }}
        >
          <ZoomIn size={20} className="text-white" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: item.accent }}>
          {item.category}
        </p>
        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
      </div>
    </motion.div>
  )
}

// ── Componente principal com Modal ───────────────────────────────────────────
const Portfolio = () => {
  const [selectedImg, setSelectedImg] = useState<PortfolioItem | null>(null)

  // Bloquear scroll quando o modal estiver aberto
  useEffect(() => {
    if (selectedImg) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [selectedImg])

  return (
    <div className="bg-[#0a0a0a] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16"
        >
          <p className="text-[#E91E8C] text-xs font-semibold uppercase tracking-widest mb-3">Nosso trabalho</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Portfólio de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E91E8C] to-[#F5A800]">Projetos</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Cada projeto é único. Conheça alguns dos trabalhos que entregamos com excelência.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ITEMS.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpen={setSelectedImg} />
          ))}
        </motion.div>

        {/* Botão Ver Mais */}
        <div className="text-center mt-14">
           <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl font-semibold text-white text-sm border-none cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #E91E8C, #F5A800)',
              boxShadow: '0 0 24px rgba(233,30,140,0.3)',
            }}
          >
            Solicitar Projeto Similar
          </button>
        </div>
      </div>

      {/* ── MODAL LIGHTBOX ── */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            {/* Botão Fechar */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>

            {/* Container da Imagem */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na imagem
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
            >
              <img
                src={selectedImg.img}
                alt={selectedImg.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Info da Imagem no Modal */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h4 className="text-white text-lg font-bold">{selectedImg.title}</h4>
                <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: selectedImg.accent }}>
                  {selectedImg.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio