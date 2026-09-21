import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FAQ({ language = "es" }) {
  const [hovered, setHovered] = useState(null);

  const content = {
    es: {
      tag: "Preguntas frecuentes",
      title: "Todo lo que normalmente preguntan antes de comenzar.",
      description:
        "Respuestas claras sobre tiempos de entrega, pagos, dominio, hosting y soporte.",

      questions: [
        {
          q: "¿Cuánto tarda en estar listo mi sitio web?",
          a: "La mayoría de proyectos se entregan entre 5 y 15 días hábiles, dependiendo de la cantidad de páginas y funcionalidades.",
        },
        {
          q: "¿Necesito comprar el dominio y el hosting?",
          a: "No. Nosotros podemos encargarnos de todo el proceso de compra, configuración y publicación si así lo prefieres.",
        },
        {
          q: "¿Puedo pagar en partes?",
          a: "Sí. Trabajamos normalmente con un 50% para iniciar el proyecto y el 50% restante al momento de la entrega.",
        },
        {
          q: "¿El sitio funcionará en celulares y tablets?",
          a: "Sí. Todos los sitios que desarrollamos son completamente responsive y están optimizados para cualquier dispositivo.",
        },
        {
          q: "¿Qué pasa si luego quiero hacer cambios?",
          a: "Podés solicitar modificaciones, contratar mantenimiento o solicitar nuevas secciones. Además, todos los planes incluyen un período inicial de soporte.",
        },
      ],
    },

    en: {
      tag: "Frequently Asked Questions",
      title: "Everything clients usually ask before we start.",
      description:
        "Clear answers about delivery times, payments, domains, hosting and support.",

      questions: [
        {
          q: "How long does a website take?",
          a: "Most projects are delivered within 5–15 business days depending on the number of pages and features.",
        },
        {
          q: "Do I need to buy the domain and hosting?",
          a: "No. We can handle the purchase, setup and deployment for you.",
        },
        {
          q: "Can I pay in installments?",
          a: "Yes. We usually work with a 50% upfront payment and the remaining 50% upon delivery.",
        },
        {
          q: "Will my website work on mobile devices?",
          a: "Absolutely. Every website is fully responsive and optimized for phones, tablets and desktops.",
        },
        {
          q: "Can I request changes later?",
          a: "Yes. You can request updates, hire maintenance, or add new sections after launch. Every plan also includes an initial support period.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="faq" className="bg-[#0D0D0D] py-28 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            {t.tag}
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-6xl">
            {t.title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            {t.description}
          </p>
        </div>

        <div className="space-y-4">
          {t.questions.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#C8A45D]/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span className="text-lg font-semibold">{item.q}</span>

                <motion.div
                  animate={{ rotate: hovered === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown
                    size={22}
                    className="text-[#C8A45D]"
                  />
                </motion.div>
              </div>

              <AnimatePresence>
                {hovered === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 py-5">
                      <p className="leading-8 text-neutral-300">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;