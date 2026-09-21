import { motion } from "framer-motion";
import {
  MessageCircle,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";

function Process({ language = "es" }) {
  const content = {
    es: {
      tag: "Proceso",
      title: "Así convertimos tu idea en un sitio web.",
      description:
        "Un proceso claro, colaborativo y transparente para que sepas exactamente qué sucede desde el primer mensaje hasta el lanzamiento.",
      steps: [
        {
          icon: MessageCircle,
          number: "01",
          title: "Descubrimiento",
          text: "Conocemos tu negocio, tus objetivos y el estilo visual que quieres transmitir.",
        },
        {
          icon: Palette,
          number: "02",
          title: "Diseño",
          text: "Creamos la propuesta visual y la estructura del sitio antes de comenzar el desarrollo.",
        },
        {
          icon: Code2,
          number: "03",
          title: "Desarrollo",
          text: "Construimos un sitio rápido, responsive y optimizado para ofrecer la mejor experiencia.",
        },
        {
          icon: Rocket,
          number: "04",
          title: "Lanzamiento",
          text: "Publicamos tu web, configuramos el dominio y te acompañamos con soporte inicial.",
        },
      ],
    },

    en: {
      tag: "Process",
      title: "How we turn your idea into a website.",
      description:
        "A clear, collaborative and transparent workflow so you know exactly what happens from the first message to launch day.",
      steps: [
        {
          icon: MessageCircle,
          number: "01",
          title: "Discovery",
          text: "We learn about your business, goals and the visual identity you want to communicate.",
        },
        {
          icon: Palette,
          number: "02",
          title: "Design",
          text: "We create the visual concept and website structure before development begins.",
        },
        {
          icon: Code2,
          number: "03",
          title: "Development",
          text: "We build a fast, responsive website optimized for the best user experience.",
        },
        {
          icon: Rocket,
          number: "04",
          title: "Launch",
          text: "We publish your website, configure your domain and provide initial support.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-[#0D0D0D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            {t.tag}
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-6xl">
            {t.title}
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-neutral-400">
            {t.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea dorada */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#C8A45D] via-[#C8A45D]/40 to-transparent lg:block" />

          <div className="space-y-8">
            {t.steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:ml-16"
                >
                  {/* Número flotante */}
                  <div className="absolute -left-16 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-[#C8A45D]/30 bg-[#161616] lg:flex">
                    <span className="text-sm font-bold text-[#C8A45D]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A45D]/10">
                      <Icon size={28} className="text-[#C8A45D]" />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-sm font-semibold tracking-[0.2em] text-[#C8A45D] lg:hidden">
                          {step.number}
                        </span>

                        <h3 className="text-2xl font-semibold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="max-w-2xl leading-8 text-neutral-300">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;