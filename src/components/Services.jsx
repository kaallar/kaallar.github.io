import ServiceCard from "./ServiceCard";

import cafe from "../assets/images/cafe.jpg";
import gym from "../assets/images/gym.jpg";
import clinica from "../assets/images/clinica.jpg";
import salon from "../assets/images/salon.jpg";
import tienda from "../assets/images/tienda.jpg";
import mas from "../assets/images/mas.jpg";

function Services({ language = "es" }) {
  const phone = "50672261373";

  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    language === "es"
      ? "Hola, me interesa un sitio web para mi negocio."
      : "Hi! I'm interested in a website for my business."
  )}`;

  const content = {
    es: {
      tag: "Servicios",
      title: "Soluciones para cada industria.",
      description:
        "Cada sitio está diseñado específicamente para tu negocio, con una experiencia elegante, rápida y totalmente personalizable.",
      items: [
        {
          title: "Gastronomía y Hospitalidad",
          description:
            "Menú digital, reservas, galería, Google Maps y WhatsApp.",
          price: "Desde ₡80.000",
          image: cafe,
          href: "/cafe",
        },
        {
          title: "Barberías y salones",
          description:
            "Galería de trabajos, reservas, promociones y servicios.",
          price: "Desde ₡80.000",
          image: salon,
          href: "/salon",
        },
        {
          title: "Clínicas, Consultorios y Bufetes",
          description:
            "Tratamientos, especialistas, testimonios y agenda de citas.",
          price: "Desde ₡140.000",
          image: clinica,
          href: "/clinica",
        },
        {
          title: "Centros de Entrenamiento",
          description:
            "Membresías, clases, entrenadores y planes personalizados.",
          price: "Desde ₡140.000",
          image: gym,
          href: "/gym",
        },
        {
          title: "Comercio minorista y tiendas especializadas",
          description:
            "Catálogo de productos, carrito de compras, pagos en línea y panel administrativo.",
          price: "Desde ₡250.000",
          image: tienda,
          href: "/tienda",
        },
        {
          title: "Y mucho más",
          description:
            "Hoteles, inmobiliarias, veterinarias, bufetes, academias, consultorios y cualquier negocio que necesite una presencia web profesional.",
          price: "Cotización personalizada",
          image: mas,
          href: whatsapp,
          external: true,
          cta: "Envíanos un mensaje",
        },
      ],
    },

    en: {
      tag: "Services",
      title: "Solutions for every industry.",
      description:
        "Every website is designed specifically for your business, with an elegant, fast and fully customizable experience.",
      items: [
        {
          title: "Restaurants & Cafés",
          description:
            "Digital menu, reservations, gallery, Google Maps and WhatsApp.",
          price: "From ₡80,000",
          image: cafe,
          href: "/cafe",
        },
        {
          title: "Barbershops & Salons",
          description:
            "Portfolio gallery, bookings, promotions and services.",
          price: "From ₡80,000",
          image: salon,
          href: "/salon",
        },
        {
          title: "Clinics",
          description:
            "Treatments, specialists, testimonials and appointment booking.",
          price: "From ₡140,000",
          image: clinica,
          href: "/clinica",
        },
        {
          title: "Gyms",
          description:
            "Memberships, classes, coaches and personalized training plans.",
          price: "From ₡140,000",
          image: gym,
          href: "/gym",
        },
        {
          title: "Retail & Online Stores",
          description:
            "Product catalog, shopping cart, online payments and admin panel.",
          price: "From ₡250,000",
          image: tienda,
          href: "/tienda",
        },
        {
          title: "And much more",
          description:
            "Hotels, real estate, veterinary clinics, law firms, academies, medical offices and any business that needs a professional website.",
          price: "Custom quote",
          image: mas,
          href: whatsapp,
          external: true,
          cta: "Send us a message",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="servicios" className="bg-[#0D0D0D] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
          {t.tag}
        </p>

        <h2 className="mb-5 text-4xl font-bold md:text-6xl">
          {t.title}
        </h2>

        <p className="mb-16 max-w-2xl text-lg leading-8 text-neutral-300">
          {t.description}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {t.items.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              href={item.href}
              external={item.external}
              cta={item.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;