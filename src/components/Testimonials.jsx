import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Testimonials({ language = "es" }) {
  const content = {
    es: {
      tag: "Testimonios",
      title: "La confianza también se diseña.",
      description:
        "Así podría verse la experiencia de tus futuros clientes. Cada sitio está diseñado para transmitir profesionalismo y generar confianza desde el primer vistazo.",
      reviews: [
        {
          id: 1,
          name: "Cliente de restaurante",
          company: "Landing Page Premium",
          text: "El sitio transmite exactamente la identidad del negocio. Ahora nuestros clientes encuentran el menú y el WhatsApp en segundos.",
        },
        {
          id: 2,
          name: "Cliente de barbería",
          company: "Sitio Multipágina",
          text: "El diseño se siente moderno, rápido y profesional. La experiencia móvil superó por completo nuestra página anterior.",
        },
        {
          id: 3,
          name: "Cliente de clínica",
          company: "Web Corporativa",
          text: "La comunicación con nuestros pacientes mejoró muchísimo. La web inspira confianza desde el primer vistazo.",
        },
      ],
    },

    en: {
      tag: "Testimonials",
      title: "Trust is designed too.",
      description:
        "A preview of the experience your future clients could have. Every website is crafted to build trust and elevate your brand.",
      reviews: [
        {
          id: 1,
          name: "Restaurant Client",
          company: "Premium Landing Page",
          text: "The website perfectly reflects our business identity. Customers now find our menu and WhatsApp within seconds.",
        },
        {
          id: 2,
          name: "Barbershop Client",
          company: "Multi-page Website",
          text: "The design feels modern, fast and incredibly professional. The mobile experience is far better than our previous website.",
        },
        {
          id: 3,
          name: "Clinic Client",
          company: "Corporate Website",
          text: "Communication with our patients improved dramatically. The website inspires confidence from the very first glance.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-[#0D0D0D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
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

        <div className="grid gap-8 lg:grid-cols-3">
          {t.reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-[#C8A45D]/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <Quote size={22} className="text-[#C8A45D]/80" />

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-[#C8A45D] text-[#C8A45D]"
                    />
                  ))}
                </div>
              </div>

              <p className="mb-8 leading-8 text-neutral-300">
                “{review.text}”
              </p>

              <div className="border-t border-white/10 pt-5">
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="mt-1 text-sm tracking-wide text-[#C8A45D]">
                  {review.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500">
          {language === "es"
            ? "* Testimonios demostrativos. Serán reemplazados por reseñas de clientes reales conforme se completen nuevos proyectos."
            : "* Demonstration testimonials. They will be replaced with real client reviews as new projects are completed."}
        </p>
      </div>
    </section>
  );
}

export default Testimonials;