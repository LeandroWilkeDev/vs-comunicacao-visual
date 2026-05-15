// Seção de Urgência - Oferta Limitada
import { motion } from 'framer-motion'
import { Flame, Clock, Gift } from 'lucide-react'
import { useEffect, useState } from 'react'

const UrgencyBanner = () => {
  const [days, setDays] = useState(15)
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(47)

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutes((prev) => {
        if (prev > 0) return prev - 1
        setHours((prev) => {
          if (prev > 0) return prev - 1
          setDays((prev) => (prev > 0 ? prev - 1 : 15))
          return 23
        })
        return 59
      })
    }, 60000) // Atualiza a cada 1 minuto

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden py-8 px-6"
      style={{
        background: 'linear-gradient(135deg, rgba(233,30,140,0.15), rgba(0,180,216,0.15))',
        border: '2px solid rgba(233,30,140,0.3)',
      }}
    >
      {/* Animação de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent, rgba(233,30,140,0.5), transparent)',
            animation: 'shimmer 3s infinite',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Esquerda - Promo */}
        <div className="flex items-center gap-4">
          <Flame size={32} className="text-vs-magenta shrink-0 animate-pulse" />
          <div>
            <p className="text-white font-black text-lg sm:text-xl leading-tight">
              🎁 Primeiros 5 Clientes Ganham <span className="text-vs-yellow">20% OFF</span>
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Válido até o fim deste mês. Não perca!
            </p>
          </div>
        </div>

        {/* Centro - Countdown */}
        <div className="flex items-center gap-3">
          <Clock size={20} className="text-vs-cyan" />
          <div className="flex gap-2 text-white font-bold text-sm">
            <div className="text-center">
              <span className="text-2xl">{String(days).padStart(2, '0')}</span>
              <p className="text-xs text-gray-400">dias</p>
            </div>
            <span className="text-2xl">:</span>
            <div className="text-center">
              <span className="text-2xl">{String(hours).padStart(2, '0')}</span>
              <p className="text-xs text-gray-400">horas</p>
            </div>
            <span className="text-2xl">:</span>
            <div className="text-center">
              <span className="text-2xl">{String(minutes).padStart(2, '0')}</span>
              <p className="text-xs text-gray-400">min</p>
            </div>
          </div>
        </div>

        {/* Direita - CTA */}
        <button
          onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 rounded-xl font-bold text-white whitespace-nowrap border-none cursor-pointer 
                     transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #E91E8C, #F5A800)',
            boxShadow: '0 8px 24px rgba(233,30,140,0.4)',
          }}
        >
          <Gift size={18} />
          Aproveitar Agora
        </button>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  )
}

export default UrgencyBanner
