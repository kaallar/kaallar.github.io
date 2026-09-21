import { motion } from "framer-motion";

import gymAbout from "../../assets/images/gym-about.jpg";
import gallery1 from "../../assets/images/gym-gallery-1.jpg";
import gallery2 from "../../assets/images/gym-gallery-2.jpg";
import gallery3 from "../../assets/images/gym-gallery-3.jpg";
import gallery4 from "../../assets/images/gym-gallery-4.jpg";
import gallery5 from "../../assets/images/gym-gallery-5.jpg";


const images = [
  { src: gymAbout, title: "Zona de entrenamiento", large: true },
  { src: gallery1, title: "Área de pesas", large: false },
  { src: gallery2, title: "Entrenamiento funcional", large: false },
  { src: gallery3, title: "Cardio premium", large: true },
  { src: gallery4, title: "Zona de recuperación", large: false },
  { src: gallery5, title: "Espacios diseñados para rendir", large: false },
];

function GymGallery() {
  return (
    <section id="galeria" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Galería
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Un gimnasio pensado para entrenar al máximo.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            Equipamiento moderno, zonas funcionales y un ambiente diseñado para
            ofrecer una experiencia fitness profesional.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-2">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`group relative overflow-hidden rounded-[30px] ${
                image.large ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">
                  NEXUS Fitness Club
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GymGallery;