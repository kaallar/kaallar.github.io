import {
  ShieldCheck,
  Dumbbell,
  Trophy,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Entrenamiento seguro",
    text: "Protocolos, técnica correcta y acompañamiento profesional para entrenar con confianza.",
  },
  {
    icon: Dumbbell,
    title: "Equipamiento premium",
    text: "Máquinas de última generación y zonas especializadas para fuerza, cardio y entrenamiento funcional.",
  },
  {
    icon: Trophy,
    title: "Resultados medibles",
    text: "Planes personalizados y seguimiento continuo para ayudarte a progresar de forma constante.",
  },
  {
    icon: HeartHandshake,
    title: "Comunidad que motiva",
    text: "Más que un gimnasio, un espacio donde entrenadores y miembros impulsan tu mejor versión.",
  },
];

function GymWhyUs() {
  return (
    <section className="bg-[#F7F4EE] py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            ¿Por qué elegirnos?
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Entrena en un entorno diseñado para progresar
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            En NEXUS Fitness Club combinamos tecnología, entrenamiento
            personalizado y una comunidad que inspira para ofrecer una experiencia
            fitness de alto nivel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-[28px] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
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

export default GymWhyUs;