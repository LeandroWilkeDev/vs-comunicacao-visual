// Rodapé — copyright, links de navegação, redes sociais e logo
import { motion } from 'framer-motion'
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react'

// ── Dados ─────────────────────────────────────────────────────────────────
const NAV = [
  { label: 'Início',    href: '#inicio'    },
  { label: 'Serviços',  href: '#servicos'  },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato',   href: '#contato'   },
]

const SERVICES = [
  'Fachadas em ACM',
  'Letra Caixa',
  'Painéis Luminosos',
  'Projetos Especiais',
]

const CONTACT = [
  { icon: <MapPin size={14} />,  text: 'Av. Barreto de Menezes, 669A, Loja 02 - Prazeres, Jaboatão dos Guararapes - PE' },
  { icon: <Phone size={14} />,   text: '+55 (81) 98934-4275'        },
  { icon: <Mail  size={14} />,   text: 'contato@vscomunicacao.com'   },
]


// ── Componente principal ───────────────────────────────────────────────────
const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const navigate  = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Linha gradiente topo */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #00B4D8 25%, #E91E8C 50%, #F5A800 75%, transparent)' }}
      />

      {/* Ruído de fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        {/* Grid principal — 4 colunas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14"
        >

          {/* Coluna 1 — Navegação */}
          <div>
            <FooterHeading>Navegação</FooterHeading>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {NAV.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="group flex items-center gap-2 text-gray-500 hover:text-white
                               text-xs transition-colors duration-200
                               bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    <span
                      className="inline-block w-3 h-[1px] transition-all duration-300
                                 group-hover:w-5"
                      style={{ background: 'linear-gradient(90deg, #00B4D8, #E91E8C)' }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2 — Serviços */}
          <div>
            <FooterHeading>Serviços</FooterHeading>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {SERVICES.map((s) => (
                <li key={s} className="text-gray-500 text-xs leading-relaxed">{s}</li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <FooterHeading>Contato</FooterHeading>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {CONTACT.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-gray-500 text-xs leading-relaxed">
                  <span className="mt-[1px] opacity-60 flex-shrink-0" style={{ color: '#00B4D8' }}>
                    {icon}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divisor */}
        <div
          className="h-[1px] mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
        />

        {/* Barra inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-[11px] tracking-wide">
            © {new Date().getFullYear()} VS Comunicação Visual. Todos os direitos reservados.
          </p>

          <p className="text-gray-700 text-[11px] tracking-wide">
            Feito com{' '}
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, #00B4D8, #E91E8C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              excelência
            </span>
          </p>

          {/* Botão voltar ao topo */}
          <button
            onClick={scrollTop}
            aria-label="Voltar ao topo"
            className="w-8 h-8 rounded-lg flex items-center justify-center
                       border-none cursor-pointer transition-all duration-300
                       hover:scale-110 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #00B4D8, #E91E8C)',
              boxShadow: '0 0 20px rgba(0,180,216,0.2)',
            }}
          >
            <ArrowUp size={14} className="text-white" />
          </button>
        </div>

      </div>
    </footer>
  )
}

// ── Sub-componente de heading ─────────────────────────────────────────────
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-white font-semibold text-[11px] uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
    <span
      className="inline-block w-4 h-[1px]"
      style={{ background: 'linear-gradient(90deg, #00B4D8, #E91E8C)' }}
    />
    {children}
  </h4>
)

export default Footer