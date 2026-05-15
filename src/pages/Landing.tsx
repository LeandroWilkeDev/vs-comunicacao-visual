// Página principal — monta todas as seções da landing page VS Comunicação Visual
import Header      from '../components/landing/Header'
import Hero        from '../components/landing/Hero'
import LeadMagnet  from '../components/landing/LeadMagnet'
import Testimonials from '../components/landing/Testimonials'
import Services    from '../components/landing/Services'
import CaseStudies from '../components/landing/CaseStudies'
import Portfolio   from '../components/landing/Portfolio'
import FAQ         from '../components/landing/FAQ'
import UrgencyBanner from '../components/landing/UrgencyBanner'
import ContactForm from '../components/landing/ContactForm'
import Footer      from '../components/landing/Footer'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/558198934275?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento.'

const FloatingWhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    initial={{ opacity: 0, y: 24, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className="group fixed z-50 bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] sm:bottom-6 sm:right-6"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
    <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/25" />

    <span className="relative flex items-center gap-0 sm:gap-3 rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(18,18,18,0.95),rgba(10,10,10,0.9))] px-2 py-2 sm:px-4 sm:py-3 pr-2 sm:pr-6 shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_0_1px_rgba(37,211,102,0.18)] backdrop-blur-md transition-all duration-300 group-hover:border-[#25D366]/40 group-hover:shadow-[0_18px_55px_rgba(0,0,0,0.5),0_0_30px_rgba(37,211,102,0.25)]">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] via-[#20b357] to-[#128C7E] text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)] ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
        <FaWhatsapp size={21} />
      </span>

      <span className="hidden sm:flex flex-col leading-tight text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">WhatsApp</span>
        <span className="text-sm font-semibold text-white">Fale com a equipe</span>
      </span>
    </span>
  </motion.a>
)

const Landing = () => (
  <div className="bg-vs-dark overflow-x-hidden">
    {/* Cabeçalho fixo com glassmorphism */}
    <Header />

    {/* Hero — impacto visual máximo */}
    <section id="inicio">
      <Hero />
    </section>

    {/* Lead Magnet — Captura de E-mail */}
    <section>
      <LeadMagnet />
    </section>

    {/* Prova Social — Depoimentos reais */}
    <section>
      <Testimonials />
    </section>

    {/* Serviços — Com benefício */}
    <section id="servicos">
      <Services />
    </section>

    {/* Case Studies — ROI Real */}
    <section>
      <CaseStudies />
    </section>

    {/* Portfolio — Galeria de projetos */}
    <section id="portfolio">
      <Portfolio />
    </section>

    {/* FAQ — Responder objeções */}
    <section>
      <FAQ />
    </section>

    {/* Urgência — Oferta limitada */}
    <section>
      <UrgencyBanner />
    </section>

    {/* Contato — Formulário */}
    <section id="contato">
      <ContactForm />
    </section>

    {/* Rodapé */}
    <Footer />

    {/* CTA flutuante de WhatsApp */}
    <FloatingWhatsAppButton />
  </div>
)

export default Landing
