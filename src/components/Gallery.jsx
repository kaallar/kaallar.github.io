import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import cafe from "../assets/images/cafe.jpg";
import clinica from "../assets/images/clinica.jpg";
import salon from "../assets/images/salon.jpg";
import tienda from "../assets/images/tienda.jpg";
import gym from "../assets/images/gym.jpg";

function Gallery({ language = "es" }) {
  const content = {
    es: {
      tag: "Portafolio",
      title: "Proyectos diseñados para vender.",
      description:
        "Estos proyectos muestran el nivel de diseño que desarrolla kaallar. Cada sitio puede adaptarse completamente a tu negocio, identidad visual y necesidades.",
      explore: "Explorar proyecto",
      projects: [
        {
          title: "Gastronomía y Hospitalidad",
          category: "Landing & multipágina",
          image: cafe,
          path: "/cafe",
        },
        {
          title: "Clínicas, Consultorios y Bufetes",
          category: "Sitio corporativo",
          image: clinica,
          path: "/clinica",
        },
        {
          title: "Barberías y salones",
          category: "Reservas & servicios",
          image: salon,
          path: "/salon",
        },
        {
          title: "Comercio minorista y tiendas especializadas",
          category: "E-commerce",
          image: tienda,
          path: "/tienda",
        },
        {
          title: "Centros de Entrenamiento",
          category: "Membresías & clases",
          image: gym,
          path: "/gym",
        },
      ],
    },

    en: {
      tag: "Portfolio",
      title: "Projects designed to sell.",
      description:
        "These projects showcase the design quality developed by kaallar. Every website can be fully adapted to your business, branding and specific needs.",
      explore: "Explore project",
      projects: [
        {
          title: "Food & Hospitality",
          category: "Landing & Multi-page",
          image: cafe,
          path: "/cafe",
        },
        {
          title: "Clinics, Practices & Law Firms",
          category: "Corporate Website",
          image: clinica,
          path: "/clinica",
        },
        {
          title: "Barbershops & Salons",
          category: "Bookings & Services",
          image: salon,
          path: "/salon",
        },
        {
          title: "Retail & Online Commerce",
          category: "E-commerce",
          image: tienda,
          path: "/tienda",
        },
        {
          title: "Fitness & Training Centers",
          category: "Memberships & Classes",
          image: gym,
          path: "/gym",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="portafolio" className="bg-[#111111] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            {t.tag}
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            {t.title}
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-400">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {t.projects.map((project, index) => (
            <div
              key={project.title}
              className={index === 4 ? "md:col-span-2" : ""}
            >
              <Link to={project.path}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-[#C8A45D]/30"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
                      {project.category}
                    </p>

                    <h3 className="mb-4 text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 font-medium text-white transition group-hover:text-[#C8A45D]">
                      {t.explore}
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;