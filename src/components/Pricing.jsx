
import { useState } from "react";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const phone = "50672261373";

function Pricing({ language = "es" }) {
  const content = {
    es: {
      tag: "Planes",
      title: "Elegí el plan ideal para tu negocio.",
      description:
        "Desde una landing page hasta una tienda online completa. Todos los proyectos son personalizados y diseñados para convertir visitantes en clientes.",
      includes: "Lo que incluye",
      button: "Solicitar este plan",
      note:
        "* Los precios son una base y pueden variar según la cantidad de secciones, funciones, integraciones y personalizaciones del proyecto.",
      plans: {
        launch: {
          name: "Launch",
          badge: "Ideal para comenzar",
          price: "Desde ₡80.000",
          description:
            "Una landing page profesional para emprendedores y pequeños negocios que necesitan una presencia digital elegante, rápida y totalmente personalizable.",
          features: [
            "Landing page personalizada",
            "Diseño responsive",
            "Botón de WhatsApp",
            "Google Maps",
            "Subdominio gratuito",
            "Hosting incluido",
            "Soporte por 7 días",
          ],
        },
        growth: {
          name: "Growth",
          badge: "Más recomendado",
          price: "Desde ₡140.000",
          description:
            "Un sitio web multipágina pensado para empresas que desean transmitir confianza, mostrar sus servicios y captar nuevos clientes.",
          features: [
            "Sitio web multipágina",
            "Hasta 5 secciones",
            "Dominio personalizado",
            "Hosting configurado",
            "Formulario de contacto",
            "SEO básico",
            "Soporte por 30 días",
          ],
        },
        commerce: {
          name: "Commerce",
          badge: "Tiendas online",
          price: "Desde ₡250.000",
          description:
            "La solución completa para comercios que desean vender productos en línea con una experiencia moderna, segura y fácil de administrar.",
          features: [
            "Tienda online personalizada",
            "Catálogo de productos",
            "Carrito de compras",
            "Integración de pagos",
            "Panel básico de administración",
            "SEO para productos",
            "Soporte por 45 días",
          ],
        },
      },
    },

    en: {
      tag: "Plans",
      title: "Choose the ideal plan for your business.",
      description:
        "From a professional landing page to a complete online store. Every project is fully customized and built to convert visitors into customers.",
      includes: "What's included",
      button: "Request this plan",
      note:
        "* Prices are a starting point and may vary depending on the number of sections, features, integrations and custom requirements.",
      plans: {
        launch: {
          name: "Launch",
          badge: "Perfect to start",
          price: "From ₡80,000",
          description:
            "A professional landing page for entrepreneurs and small businesses looking for an elegant, fast and fully customizable online presence.",
          features: [
            "Custom landing page",
            "Responsive design",
            "WhatsApp button",
            "Google Maps integration",
            "Free subdomain",
            "Hosting included",
            "7-day support",
          ],
        },
        growth: {
          name: "Growth",
          badge: "Most popular",
          price: "From ₡140,000",
          description:
            "A multi-page website for businesses that want to build trust, showcase their services and attract new customers.",
          features: [
            "Multi-page website",
            "Up to 5 sections",
            "Custom domain",
            "Hosting configured",
            "Contact form",
            "Basic SEO",
            "30-day support",
          ],
        },
        commerce: {
          name: "Commerce",
          badge: "Online stores",
          price: "From ₡250,000",
          description:
            "A complete e-commerce solution for businesses that want to sell products online with a modern and secure shopping experience.",
          features: [
            "Custom online store",
            "Product catalog",
            "Shopping cart",
            "Payment integration",
            "Basic admin panel",
            "Product SEO",
            "45-day support",
          ],
        },
      },
    },
  };

  const t = content[language];

  // Growth seleccionado por defecto
  const [active, setActive] = useState("growth");
  const plan = t.plans[active];

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      language === "es"
        ? `¡Hola! Me interesa contratar el plan ${plan.name} para mi negocio.`
        : `Hi! I'm interested in the ${plan.name} plan for my business.`
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="planes" className="bg-[#111111] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
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

        {/* Selector */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur">
            {["launch", "growth", "commerce"].map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                  active === key
                    ? "bg-[#C8A45D] text-black"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {t.plans[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjeta */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Izquierda */}
              <div className="p-10 lg:p-12">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-4 py-2 text-sm text-[#C8A45D]">
                  <Sparkles size={14} />
                  {plan.badge}
                </div>

                <h3 className="mb-2 text-5xl font-bold">{plan.name}</h3>

                <p className="mb-8 text-3xl font-semibold text-[#C8A45D]">
                  {plan.price}
                </p>

                <p className="leading-8 text-neutral-300">
                  {plan.description}
                </p>
              </div>

              {/* Derecha */}
              <div className="border-t border-white/10 bg-black/25 p-10 lg:border-l lg:border-t-0 lg:p-12">
                <h4 className="mb-6 text-lg font-semibold">
                  {t.includes}
                </h4>

                <div className="space-y-4">
                  {plan.features.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#C8A45D]/15 p-1">
                        <Check size={14} className="text-[#C8A45D]" />
                      </div>

                      <span className="text-neutral-200">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openWhatsApp}
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
                >
                  {t.button}
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center text-sm text-neutral-500">
          {t.note}
        </p>
      </div>
    </section>
  );
}

export default Pricing;