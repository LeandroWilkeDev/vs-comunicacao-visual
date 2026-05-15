import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// ── Tipos ──────────────────────────────────────────────────────────────────
interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

interface ContactInfo {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  subValue?: string;
}

// ── Dados de contato ───────────────────────────────────────────────────────
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp",
    value: "(81) 98934-4275",
    href: "https://wa.me/558198934275",
  },
  {
    icon: <Mail size={18} />,
    label: "E-mail",
    value: "contato@vscomunicacaovisual.com.br",
    href: "mailto:contato@vscomunicacaovisual.com.br",
  },
  {
    icon: <MapPin size={18} />,
    label: "Endereço",
    value: "Av. Barreto de Meneses, 669 A, Loja 02",
    subValue: "Prazeres, Jaboatão dos Guararapes - PE",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Barreto+de+Meneses,+669+A,+Loja+02,+Prazeres,+Jaboatao+dos+Guararapes",
  },
  {
    icon: <Clock size={18} />,
    label: "Horário de Funcionamento",
    value: "Segunda a Sexta",
    subValue: "Das 08:00h às 17:00h",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <FaInstagram size={18} />,
    href: "https://instagram.com",
    label: "Instagram",
    className:
      "hover:border-[#E1306C] hover:text-[#E1306C] hover:shadow-[0_0_24px_rgba(225,48,108,0.35)]",
  },
  {
    icon: <FaFacebookF size={17} />,
    href: "https://facebook.com",
    label: "Facebook",
    className:
      "hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_0_24px_rgba(24,119,242,0.35)]",
  },
  {
    icon: <MessageCircle size={18} />,
    href: "https://wa.me/558198934275",
    label: "WhatsApp",
    className:
      "hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.35)]",
  },
];

const inputClass =
  "w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm " +
  "placeholder:text-gray-600 outline-none transition-all duration-300 " +
  "focus:border-vs-cyan/70 focus:bg-[#151515] focus:shadow-[0_0_0_4px_rgba(0,180,216,0.12)]";

// ── Componente Principal ───────────────────────────────────────────────────
const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  // URL do Google Maps focada no endereço: Av Barreto de Meneses, 669
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1171830495814!2d-34.91970222405626!3d-8.163690681799757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e592736ad91%3A0x6b095697669d809f!2sAv.%20Barreto%20de%20Menezes%2C%20669%20-%20Prazeres%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1709585000000!5m2!1spt-BR!2sbr";

  return (
    <section id="contato" className="relative bg-vs-anthracite py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-vs-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-vs-magenta/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-vs-yellow text-xs font-semibold uppercase tracking-widest mb-3">Fale conosco</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Vamos criar algo <span className="text-gradient-cm">incrível?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Conte sua ideia e nossa equipe retorna com a melhor proposta para destacar sua marca com impacto visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Coluna do Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-[linear-gradient(180deg,#1B1B1B_0%,#131313_100%)] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              {submitted ? (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00B4D8] to-[#E91E8C] shadow-[0_0_20px_rgba(0,180,216,0.4)]">
                    <Send size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-2xl">Mensagem enviada!</h3>
                  <p className="text-gray-400">Retornaremos em até 24 horas. Obrigado!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="pb-2 border-b border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-vs-cyan font-black">Briefing rapido</p>
                    <p className="text-gray-400 text-sm mt-2">Preencha os campos e envie sua solicitacao em menos de 1 minuto.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">Nome completo *</label>
                      <input name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome" className={inputClass} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">E-mail *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">Telefone / WhatsApp</label>
                    <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(81) 98934-4275" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">Mensagem *</label>
                    <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required rows={5} placeholder="Descreva seu projeto ou solicite um orçamento..." className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-95 hover:brightness-110 shadow-[0_18px_40px_rgba(0,180,216,0.24)] bg-gradient-to-r from-[#00B4D8] to-[#E91E8C] border border-white/20 cursor-pointer text-base uppercase tracking-wider">
                    <Send size={18} /> Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Coluna de Informações e Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {CONTACT_INFO.map(({ icon, label, value, href, subValue }) => (
              <div key={label} className="rounded-2xl p-5 flex items-start gap-4 bg-[#171717] border border-white/10 transition-all hover:border-vs-cyan/35 hover:-translate-y-0.5 group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-vs-cyan bg-vs-cyan/10 group-hover:bg-vs-cyan group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-black mb-1">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:text-vs-cyan transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-semibold">{value}</p>
                  )}
                  {subValue && <p className="text-vs-cyan/70 text-xs mt-1.5 font-medium">{subValue}</p>}
                </div>
              </div>
            ))}

            {/* Redes Sociais */}
            <div className="rounded-2xl p-5 bg-[#171717] border border-white/10">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-4">Siga-nos</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-gray-300 border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 ${social.className}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mapa Google Maps */}
            <div className="rounded-2xl overflow-hidden h-72 border border-white/10 group relative shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <iframe
                title="Localização VS Comunicação Visual"
                width="100%"
                height="100%"
                frameBorder="0"
                src={mapUrl}
                allowFullScreen
                loading="lazy"
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              />
              <div className="absolute bottom-4 left-4 pointer-events-none bg-vs-anthracite/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] text-white font-bold tracking-tight">VS COMUNICAÇÃO VISUAL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;