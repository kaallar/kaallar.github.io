import { Award, Stethoscope } from "lucide-react";

import doctor1 from "../../assets/images/doctor-1.jpg";
import doctor2 from "../../assets/images/doctor-2.jpg";
import doctor3 from "../../assets/images/doctor-3.jpg";

const doctors = [
  {
    name: "Dra. María Fernández",
    specialty: "Medicina Estética",
    experience: "12 años de experiencia",
    image: doctor1,
  },
  {
    name: "Dra. Sofía Ramírez",
    specialty: "Dermatología Clínica",
    experience: "Especialista en rejuvenecimiento facial",
    image: doctor2,
  },
  {
    name: "Dr. Daniel Vargas",
    specialty: "Cirugía Dermatológica",
    experience: "Procedimientos mínimamente invasivos",
    image: doctor3,
  },
];

function ClinicaTeam() {
  return (
    <section className="bg-[#F7F4EE] py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Equipo Médico
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Profesionales que inspiran confianza
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            Nuestro equipo combina experiencia médica, actualización constante y
            un trato humano para brindar una atención personalizada a cada
            paciente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-[30px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C8A45D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#9C7A3B]">
                  <Award size={14} />
                  Especialista
                </div>

                <h3 className="mb-2 text-2xl font-bold">
                  {doctor.name}
                </h3>

                <div className="mb-3 flex items-center gap-2 text-[#C8A45D]">
                  <Stethoscope size={18} />
                  <span className="font-medium">{doctor.specialty}</span>
                </div>

                <p className="leading-7 text-neutral-600">
                  {doctor.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClinicaTeam;