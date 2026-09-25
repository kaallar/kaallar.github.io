import {
  Dumbbell,
  Activity,
  Flame,
  Users,
  Trophy,
  HeartPulse,
} from "lucide-react";

function Fitness & Training Centerservices() {
  const services = [
    {
      name: "Membresía Full Access",
      desc: "Acceso ilimitado a todas las áreas del gimnasio y zona de cardio.",
      price: "Desde ₡28 000",
      icon: Dumbbell,
    },
    {
      name: "Entrenamiento Personal",
      desc: "Sesiones 1 a 1 con un entrenador certificado y plan personalizado.",
      price: "Desde ₡18 000",
      icon: Trophy,
    },
    {
      name: "Functional Training",
      desc: "Clases grupales enfocadas en fuerza, resistencia y movilidad.",
      price: "Incluido",
      icon: Flame,
    },
    {
      name: "Zona de Cardio Premium",
      desc: "Equipos de última generación para mejorar tu rendimiento cardiovascular.",
      price: "Incluido",
      icon: Activity,
    },
    {
      name: "Evaluación Física",
      desc: "Análisis corporal y planificación inicial según tus objetivos.",
      price: "Desde ₡12 000",
      icon: HeartPulse,
    },
    {
      name: "Clases Grupales",
      desc: "HIIT, fuerza, movilidad y entrenamiento funcional durante toda la semana.",
      price: "Incluido",
      icon: Users,
    },
  ];

  return (
    <section id="servicios" className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Membresías & Servicios
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Entrena con una experiencia premium
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Descubre algunos de los servicios más solicitados de NEXUS Fitness
            Club, diseñados para ayudarte a alcanzar tus objetivos con
            acompañamiento profesional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-[#C8A45D]/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Icon size={24} />
                </div>

                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>

                  <span className="text-right font-bold text-[#C8A45D]">
                    {service.price}
                  </span>
                </div>

                <p className="leading-7 text-neutral-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Fitness & Training Centerservices;