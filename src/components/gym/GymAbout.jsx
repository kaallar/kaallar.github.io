import gymAbout from "../../assets/images/gym-about.jpg";

function GymAbout() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestra filosofía
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Rendimiento, disciplina y resultados reales.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En NEXUS Fitness Club creemos que un gimnasio debe ofrecer mucho más
            que equipos: debe brindar una experiencia que motive a cada persona a
            alcanzar sus objetivos con acompañamiento profesional y un ambiente
            moderno.
          </p>

          <p className="leading-8 text-neutral-500">
            Esta es una demostración desarrollada por kaallar para mostrar cómo
            podría verse el sitio web de un gimnasio o centro de entrenamiento de
            alta gama.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={gymAbout}
            alt="Interior de NEXUS Fitness Club"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default GymAbout;