// Seção de Lead Magnet - Captura de E-mail
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, CheckCircle2 } from 'lucide-react'

const LeadMagnet = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Aqui você integraria com seu backend/email service
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <div className="bg-vs-anthracite py-20 px-6 relative overflow-hidden">
      {/* Fundo animado */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-vs-cyan/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-vs-magenta/12 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        {/* Ícone */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,180,216,0.3), rgba(233,30,140,0.3))',
              border: '2px solid rgba(0,180,216,0.3)',
            }}
          >
            📋
          </div>
        </div>

        {/* Headline */}
        <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Receba Nosso <span className="text-gradient-vs">Checklist Premium</span>
        </h3>

        <p className="text-gray-400 text-lg mb-8">
          Guia completo com 15 estratégias para aumentar visitação da sua fachada. 
          Usado por empresas que cresceram 300%+.
        </p>

        {/* Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle2 size={18} className="text-vs-cyan shrink-0" />
            <span>15 estratégias testadas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle2 size={18} className="text-vs-cyan shrink-0" />
            <span>Ferramentas e templates</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CheckCircle2 size={18} className="text-vs-cyan shrink-0" />
            <span>Sem compromisso</span>
          </div>
        </div>

        {/* Formulário */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-vs-cyan" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white 
                           placeholder:text-gray-500 outline-none focus:border-vs-cyan focus:bg-white/15 
                           transition-all text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl font-bold text-white whitespace-nowrap border-none cursor-pointer 
                         transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 
                         text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, #00B4D8, #E91E8C)',
                boxShadow: '0 8px 24px rgba(0,180,216,0.3)',
              }}
            >
              <Download size={18} />
              Receber Agora
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-8 flex flex-col items-center gap-4"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
              style={{
                background: 'linear-gradient(135deg, #00B4D8, #E91E8C)',
              }}
            >
              ✓
            </div>
            <p className="text-white font-bold text-lg">E-mail enviado com sucesso!</p>
            <p className="text-gray-400 text-sm">Verifique sua caixa de e-mail. Seu checklist está lá!</p>
          </motion.div>
        )}

        <p className="text-gray-500 text-xs mt-6">
          💡 Você receberá também nossas melhores estratégias de conversão por e-mail (max 1x por semana)
        </p>
      </motion.div>
    </div>
  )
}

export default LeadMagnet
