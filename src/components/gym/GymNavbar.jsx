import { Link } from "react-router-dom";

function GymNavbar() {
  const goTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Volver a kaallar */}
        <Link
          to="/"
          className="text-sm uppercase tracking-[0.2em] text-[#C8A45D] transition hover:opacity-80"
        >
          ← kaallar
        </Link>

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight text-white">
          NEXUS Fitness Club
        </h1>

        {/* Navegación */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          <button
            type="button"
            onClick={() => goTo("inicio")}
            className="bg-transparent transition duration-200 hover:text-[#C8A45D]"
          >
            Inicio
          </button>

          <button
            type="button"
            onClick={() => goTo("servicios")}
            className="bg-transparent transition duration-200 hover:text-[#C8A45D]"
          >
            Membresías
          </button>

          <button
            type="button"
            onClick={() => goTo("galeria")}
            className="bg-transparent transition duration-200 hover:text-[#C8A45D]"
          >
            Galería
          </button>

          <button
            type="button"
            onClick={() => goTo("contacto")}
            className="bg-transparent transition duration-200 hover:text-[#C8A45D]"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
}

export default GymNavbar;