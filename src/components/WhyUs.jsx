
import {
  Palette,
  Gauge,
  Smartphone,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";

function WhyUs({ language = "es" }) {
  const content = {
    es: {
      tag: "¿Por qué kaallar?",
      title: "Diseñamos sitios que venden, no solo que se ven bien.",
      description:
        "Cada proyecto combina estrategia, diseño y rendimiento para que tu negocio transmita confianza y convierta visitantes en clientes.",
      features: [
        {
          icon: Palette,
          title: "Diseño personalizado",
          text: "Nada de plantillas genéricas. Cada sitio refleja la identidad de tu marca.",
        },
        {
          icon: Gauge,
          title: "Alto rendimiento",
          text: "Optimización para velocidad, experiencia de usuario y dispositivos móviles.",
        },
        {
          icon: Smartphone,
          title: "Experiencia responsive",
          text: "Tu sitio se adapta perfectamente a celulares, tablets y computadoras.",
        },
        {
          icon: Headset,
          title: "Acompañamiento real",
          text: "Te guiamos desde la planificación hasta la publicación y el soporte inicial.",
        },
      ],
    },

    en: {
      tag: "Why kaallar?",
      title: "We design websites that sell, not just look good.",
      description:
        "Every project blends strategy, design and performance to help your business build trust and convert visitors into clients.",
      features: [
        {
          icon: Palette,
          title: "Custom Design",
          text: "No generic templates. Every website is tailored to your brand identity.",
        },
        {
          icon: Gauge,
          title: "High Performance",
          text: "Optimized for speed, user experience and mobile devices.",
        },
        {
          icon: Smartphone,
          title: "Responsive Experience",
          text: "Your website looks perfect on phones, tablets and desktops.",
        },
        {
          icon: Headset,
          title: "Real Support",
          text: "We guide you from planning through launch and initial support.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-[#F7F4EE] py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            {t.tag}
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            {t.title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-neutral-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;