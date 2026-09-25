import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Hero({ language = "es" }) {
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top =
      section.getBoundingClientRect().top + window.pageYOffset - 80;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const content = {
    es: {
      tag: "Desarrollo Web • Costa Rica",
      line1: "Sitios web que",
      highlight: "impulsan",
      line2: "tu negocio.",
      description:
        "Diseñamos experiencias digitales premium para restaurantes, Clínicas, Consultorios y Bufetes, barberías, comercios, Centros de Entrenamiento y cualquier negocio que busque una presencia elegante y profesional.",
      plans: "Ver planes",
      portfolio: "Nuestro portafolio",
      online: "Online",
      heroTitle: "Tu Negocio",
      heroSubtitle: "Sitio web profesional",
      cta: "Reservar ahora",
      cards: [
        {
          id: "1",
          title: "Diseño",
          text: "Creamos una identidad visual elegante adaptada completamente a tu negocio.",
        },
        {
          id: "2",
          title: "Estrategia",
          text: "Organizamos cada página para generar confianza y convertir visitas en clientes.",
        },
        {
          id: "3",
          title: "Resultados",
          text: "Sitios rápidos, responsivos y optimizados para vender más.",
        },
      ],
      industries: [
        "Restaurantes",
        "Clínicas, Consultorios y Bufetes",
        "Barberías",
        "Comercios",
        "Centros de Entrenamiento",
        "Y más",
      ],
    },

    en: {
      tag: "Web Development • Costa Rica",
      line1: "Websites that",
      highlight: "grow",
      line2: "your business.",
      description:
        "We design premium digital experiences for restaurants, Clinics, Practices & Law Firms, barbershops, retail stores, Fitness & Training Centers and any business looking for an elegant, professional online presence.",
      plans: "View plans",
      portfolio: "Our portfolio",
      online: "Online",
      heroTitle: "Your Business",
      heroSubtitle: "Professional website",
      cta: "Book now",
      cards: [
        {
          id: "1",
          title: "Design",
          text: "We create a premium visual identity tailored to your business.",
        },
        {
          id: "2",
          title: "Strategy",
          text: "Every page is structured to build trust and increase conversions.",
        },
        {
          id: "3",
          title: "Results",
          text: "Fast, responsive websites built to generate real results.",
        },
      ],
      industries: [
        "Restaurants",
        "Clinics, Practices & Law Firms",
        "Barbershops",
        "Retail",
        "Fitness & Training Centers",
        "More",
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0A0A0A] text-white"
    >
      <div className="absolute left-[15%] top-20 h-96 w-96 rounded-full bg-[#C8A45D]/8 blur-[130px]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#C8A45D]/5 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-28 lg:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C8A45D]">
            {t.tag}
          </p>

          <h1 className="text-6xl leading-[1.02] md:text-7xl">
            <span className="font-light">{t.line1}</span>
            <br />
            <span
              className="font-serif italic text-[#E3C27A]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {t.highlight}
            </span>{" "}
            <span className="font-light">{t.line2}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("planes")}
              className="flex items-center gap-2 rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              {t.plans}
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo("portafolio")}
              className="rounded-full border border-[#C8A45D]/40 px-7 py-3 text-[#E7D4A4] transition hover:border-[#C8A45D]"
            >
              {t.portfolio}
            </button>
          </div>

          <div className="mt-12 space-y-3">
            {t.cards.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm uppercase tracking-[0.28em]">
                    {card.title}
                  </span>

                  <motion.div
                    animate={{ rotate: hovered === card.id ? 180 : 0 }}
                  >
                    <ChevronDown size={18} className="text-[#C8A45D]" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {hovered === card.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="border-t border-white/10 px-5 py-4 leading-7 text-neutral-400">
                        {card.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mockup elegante */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="rounded-[34px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
            {/* Barra navegador */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#121212]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <h3
                    className="text-xl italic text-[#E3C27A]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {t.heroTitle}
                  </h3>
                  <p className="text-xs text-neutral-400">{t.heroSubtitle}</p>
                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
                  {t.online}
                </span>
              </div>

              {/* Hero */}
              <div className="p-6">
                <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-[#2B2B2B] via-[#3A3A3A] to-[#C8A45D]/50" />

                <div className="mb-3 h-4 w-2/3 rounded bg-white" />
                <div className="mb-6 h-3 w-1/2 rounded bg-white/30" />

                <button className="rounded-full bg-[#C8A45D] px-5 py-2 text-sm font-semibold text-black">
                  {t.cta}
                </button>

                {/* Servicios */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="mb-2 h-8 w-8 rounded-lg bg-[#C8A45D]/20" />
                      <div className="h-2 w-full rounded bg-white/40" />
                      <div className="mt-2 h-2 w-2/3 rounded bg-white/20" />
                    </div>
                  ))}
                </div>

                {/* Footer mockup */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-neutral-500">
                  <span>WhatsApp</span>
                  <span>Google Maps</span>
                  <span>Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7 text-sm uppercase tracking-[0.2em] text-neutral-400">
          {t.industries.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;