import { CheckCircle2, ShieldCheck, Quote } from "lucide-react";
import { motion } from "framer-motion";

function Guarantee({ language = "es" }) {
  const content = {
    es: {
      tag: "Garantía kaallar",
      title:
        "Tu sitio web estará listo para representar tu negocio desde el primer día.",
      description:
        "No entregamos plantillas genéricas. Cada proyecto es desarrollado específicamente para la identidad, objetivos y público de tu empresa, cuidando tanto el diseño como el rendimiento.",
      badgeTitle: "Entrega garantizada",
      badgeText:
        "Revisiones finales y acompañamiento durante la publicación del sitio.",
      includes: "Cada proyecto incluye",
      quote:
        "Diseñamos experiencias digitales que hacen que tu negocio se vea tan profesional como realmente es.",
      items: [
        "Diseño 100% responsive",
        "Optimización de velocidad",
        "Diseño completamente personalizado",
        "Integración con WhatsApp",
        "Conexión con redes sociales",
        "Configuración de dominio y hosting",
        "Publicación del sitio web",
        "Soporte según el plan contratado",
        "Corrección de errores post-entrega",
        "Capacitación básica incluida",
      ],
    },

    en: {
      tag: "Kaallar Guarantee",
      title:
        "Your website will be ready to represent your business from day one.",
      description:
        "We don't deliver generic templates. Every project is designed specifically for your brand, goals and audience, with equal attention to aesthetics and performance.",
      badgeTitle: "Guaranteed delivery",
      badgeText:
        "Final revisions and guidance during the website launch.",
      includes: "Every project includes",
      quote:
        "We design digital experiences that make your business look as professional as it truly is.",
      items: [
        "100% responsive design",
        "Speed optimization",
        "Fully custom design",
        "WhatsApp integration",
        "Social media integration",
        "Domain & hosting setup",
        "Website deployment",
        "Support included according to your plan",
        "Post-launch bug fixes",
        "Basic training included",
      ],
    },
  };

  const t = content[language];

  return (
    <section id="garantia" className="bg-[#0D0D0D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              {t.tag}
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              {t.title}
            </h2>

            <p className="mb-8 text-lg leading-8 text-neutral-300">
              {t.description}
            </p>

            <div className="flex items-center gap-4 rounded-2xl border border-[#C8A45D]/30 bg-[#C8A45D]/10 p-5">
              <ShieldCheck className="text-[#C8A45D]" size={34} />

              <div>
                <h3 className="font-semibold">{t.badgeTitle}</h3>

                <p className="text-sm text-neutral-300">
                  {t.badgeText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              {t.includes}
            </h3>

            <div className="grid gap-4">
              {t.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 text-[#C8A45D]"
                    size={20}
                  />

                  <span className="text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cita */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[30px] border border-[#C8A45D]/20 bg-gradient-to-r from-[#C8A45D]/10 via-transparent to-[#C8A45D]/5 p-10"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-5 rounded-full bg-[#C8A45D]/10 p-3">
              <Quote size={26} className="text-[#C8A45D]" />
            </div>

            <p className="text-xl italic leading-9 text-neutral-100 md:text-2xl">
              “{t.quote}”
            </p>

            <div className="mt-6 h-px w-16 bg-[#C8A45D]/40" />

            <p className="mt-4 font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
              kaallar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Guarantee;