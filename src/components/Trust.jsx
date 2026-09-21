import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Palette,
  MessageCircle,
} from "lucide-react";

function Trust({ language = "es" }) {
  const content = {
    es: {
      tag: "¿Por qué kaallar?",
      title: "Diseñado para generar confianza desde el primer clic.",
      description:
        "Creamos experiencias digitales elegantes, rápidas y enfocadas en convertir visitantes en clientes para negocios de Costa Rica.",
      features: [
        {
          icon: Smartphone,
          title: "100% Responsive",
          text: "Perfecto en celular, tablet y computadora.",
        },
        {
          icon: Zap,
          title: "Alta Velocidad",
          text: "Sitios optimizados para cargar en segundos.",
        },
        {
          icon: Palette,
          title: "Diseño Premium",
          text: "Cada proyecto es único, sin plantillas genéricas.",
        },
        {
          icon: MessageCircle,
          title: "WhatsApp Integrado",
          text: "Convierte visitantes en conversaciones reales.",
        },
      ],
    },

    en: {
      tag: "Why kaallar?",
      title: "Designed to build trust from the very first click.",
      description:
        "We create elegant, fast and conversion-focused digital experiences for businesses across Costa Rica.",
      features: [
        {
          icon: Smartphone,
          title: "100% Responsive",
          text: "Perfect on mobile, tablet and desktop.",
        },
        {
          icon: Zap,
          title: "High Performance",
          text: "Optimized to load in just seconds.",
        },
        {
          icon: Palette,
          title: "Premium Design",
          text: "Every project is unique, never based on generic templates.",
        },
        {
          icon: MessageCircle,
          title: "WhatsApp Integration",
          text: "Turn visitors into real conversations.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 backdrop-blur-xl md:p-14"
        >
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              {t.tag}
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {t.title}
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-neutral-300">
              {t.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-[#C8A45D]/40 hover:bg-black/40"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A45D]/10">
                    <Icon size={26} className="text-[#C8A45D]" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-neutral-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Trust;