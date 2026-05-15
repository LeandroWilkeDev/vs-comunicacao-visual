// Página principal — monta todas as seções da landing page VS Comunicação Visual
import Header      from '../components/landing/Header'
import Hero        from '../components/landing/Hero'
import Services    from '../components/landing/Services'
import Portfolio   from '../components/landing/Portfolio'
import ContactForm from '../components/landing/ContactForm'
import Footer      from '../components/landing/Footer'

const Landing = () => (
  <div className="bg-vs-dark overflow-x-hidden">
    {/* Cabeçalho fixo com glassmorphism */}
    <Header />

    {/* Hero — impacto visual máximo */}
    <section id="inicio">
      <Hero />
    </section>

    {/* Grid de serviços */}
    <section id="servicos">
      <Services />
    </section>

    {/* Galeria do portfólio */}
    <section id="portfolio">
      <Portfolio />
    </section>

    {/* Formulário de contato */}
    <section id="contato">
      <ContactForm />
    </section>

    {/* Rodapé */}
    <Footer />
  </div>
)

export default Landing
