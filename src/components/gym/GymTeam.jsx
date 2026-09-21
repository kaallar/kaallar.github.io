import { Award, Dumbbell } from "lucide-react";

import coach1 from "../../assets/images/coach-1.jpg";
import coach2 from "../../assets/images/coach-2.jpg";
import coach3 from "../../assets/images/coach-3.jpg";

const coaches = [
  {
    name: "Alejandro Mora",
    specialty: "Strength Coach",
    experience: "Especialista en fuerza y levantamiento",
    image: coach1,
  },
  {
    name: "Valeria Rojas",
    specialty: "Personal Trainer",
    experience: "Entrenamiento personalizado y recomposición corporal",
    image: coach2,
  },
  {
    name: "Diego Vargas",
    specialty: "Functional Coach",
    experience: "Movilidad, HIIT y rendimiento deportivo",
    image: coach3,
  },
];

function GymTeam() {
  return (
    <section className="bg-[#F7F4EE] py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestro equipo
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Entrenadores que impulsan tu mejor versión
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            Profesionales certificados que combinan experiencia, técnica y
            acompañamiento para ayudarte a alcanzar tus objetivos de forma segura.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="overflow-hidden rounded-[30px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C8A45D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#9C7A3B]">
                  <Award size={14} />
                  Certificado
                </div>

                <h3 className="mb-2 text-2xl font-bold">
                  {coach.name}
                </h3>

                <div className="mb-3 flex items-center gap-2 text-[#C8A45D]">
                  <Dumbbell size={18} />
                  <span className="font-medium">{coach.specialty}</span>
                </div>

                <p className="leading-7 text-neutral-600">
                  {coach.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GymTeam;