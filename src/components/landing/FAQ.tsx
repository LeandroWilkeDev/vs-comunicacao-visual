// Seção de FAQ - Respondendo Objeções
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Quanto custa uma fachada em ACM?',
    answer: 'Depende do tamanho, design e acabamento. Geralmente varia entre R$ 15.000 a R$ 85.000. Oferecemos parcelamento em até 12x sem juros. Solicitando análise grátis, você recebe proposta personalizada.',
  },
  {
    id: 2,
    question: 'Quanto tempo demora para instalar?',
    answer: 'Instalação padrão leva 7-14 dias, dependendo da complexidade. Projetos especiais podem levar até 30 dias. Todas as etapas são comunicadas com antecedência. Mantemos cronograma rigoroso.',
  },
  {
    id: 3,
    question: 'Preciso de aprovação da prefeitura?',
    answer: 'Sim, a maioria dos projetos exige aprovação. Nossa equipe cuida disso! Obtemos as aprovações necessárias e documentamos todo o processo. Tempo estimado: 10-15 dias para documentação.',
  },
  {
    id: 4,
    question: 'Qual é o retorno do investimento?',
    answer: 'Média: 3-4 meses. Clientes relatam aumento de 150-600% em visitação. Isso gera de R$ 50-500k em receita adicional anual. Quanto maior a loja, maior o ROI.',
  },
  {
    id: 5,
    question: 'Vocês oferecem garantia?',
    answer: 'Sim! 5 anos de garantia em fachadas e 3 anos em sistemas elétricos. Cobrimos defeitos de fabricação, instalação e mão-de-obra. Manutenção preventiva também está incluída.',
  },
  {
    id: 6,
    question: 'Como funciona o pagamento?',
    answer: 'Aceitamos: dinheiro à vista (5% desconto), cheques, PIX, cartão (até 12x), e carnê. Pedidos de 50% da entrada para começar projeto. Restante na entrega.',
  },
  {
    id: 7,
    question: 'Posso mudar de ideia durante o projeto?',
    answer: 'Sim! Alterações menores (cores, tamanho) não têm custo até 20% do orçamento. Mudanças maiores recebem orçamento adicional. Comunicação clara em todo o processo.',
  },
  {
    id: 8,
    question: 'Vocês fazem projetos internacionais?',
    answer: 'Atualmente, focamos no Nordeste. Temos experiência em PE, CE e BA. Projetos muito distantes podem ter custo de transporte. Entre em contato para avaliar viabilidade.',
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const FAQItem = ({ faq }: { faq: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={item}
      className="rounded-xl overflow-hidden border border-white/10 transition-all"
      style={{
        background: isOpen ? 'rgba(0,180,216,0.08)' : 'transparent',
        borderColor: isOpen ? 'rgba(0,180,216,0.3)' : 'rgba(255,255,255,0.1)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-transparent border-none cursor-pointer hover:bg-white/5 transition-colors"
      >
        <h3 className="text-white font-semibold text-base pr-4">{faq.question}</h3>
        <ChevronDown
          size={20}
          className="text-vs-cyan shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10"
          >
            <p className="px-6 py-4 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => (
  <div className="bg-vs-dark py-24 px-6 relative">
    <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-vs-magenta/8 blur-3xl" />

    <div className="relative max-w-3xl mx-auto">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-vs-yellow text-xs font-semibold uppercase tracking-widest mb-3">
          ❓ Dúvidas Frequentes
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Respondendo Suas <span className="text-gradient-cm">Objeções</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Confira as respostas para as perguntas mais comuns dos nossos clientes.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="space-y-3"
      >
        {FAQ_ITEMS.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </motion.div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(0,180,216,0.1), rgba(233,30,140,0.1))',
          border: '1px solid rgba(0,180,216,0.2)',
        }}
      >
        <p className="text-white font-semibold text-lg mb-4">
          Ainda tem dúvidas? Fale direto com nosso especialista!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/558198934275"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-bold text-white text-sm border-none cursor-pointer transition-all hover:scale-105 active:scale-95"
            style={{
              background: '#25D366',
            }}
          >
            💬 WhatsApp Agora
          </a>
          <a
            href="tel:+558198934275"
            className="px-8 py-3 rounded-xl font-bold text-white text-sm border-none cursor-pointer transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #00B4D8, #E91E8C)',
            }}
          >
            📞 Ligar
          </a>
        </div>
      </motion.div>
    </div>
  </div>
)

export default FAQ
