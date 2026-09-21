import {
  MapPin,
  Clock,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function ClinicaFooter() {
  const phone = "50688888888";

  const message = encodeURIComponent(
    "¡Hola! Me gustaría agendar una valoración."
  );

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const whatsapp = `https://wa.me/${phone}?text=${message}`;
  const instagram = "https://instagram.com/tuinstagram";
  const facebook = "https://facebook.com/tufacebook";
  const tiktok = "https://tiktok.com/@tutiktok";

  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Marca */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              Tu Marca
            </p>

            <h2 className="mb-5 text-4xl font-bold">
              Clínica & Centro Médico Premium
            </h2>

            <p className="max-w-md leading-8 text-neutral-400">
              Esta es una demostración desarrollada por kaallar para mostrar cómo
              podría verse el sitio web de una clínica moderna, elegante y
              completamente personalizable.
            </p>

            <button
              onClick={() => openLink(whatsapp)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              <FaWhatsapp size={18} />
              Agendar valoración
            </button>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#C8A45D] transition hover:translate-x-1"
            >
              ← Volver a kaallar
            </Link>
          </div>

          {/* Contacto */}
          <div className="space-y-2">
            <button
              onClick={() =>
                openLink("https://maps.google.com/?q=San+Jose+Costa+Rica")
              }
              className="flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/5"
            >
              <MapPin className="mt-1 text-[#C8A45D]" size={20} />

              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-neutral-400">
                  San José, Costa Rica
                </p>
              </div>
            </button>

            <div className="flex items-start gap-4 rounded-2xl p-4">
              <Clock className="mt-1 text-[#C8A45D]" size={20} />

              <div>
                <h3 className="font-semibold">Horario</h3>
                <p className="text-neutral-400">
                  Lunes a Viernes · 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <button
              onClick={() => openLink(`https://wa.me/${phone}`)}
              className="flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/5"
            >
              <FaWhatsapp
                className="mt-1 text-[#C8A45D]"
                size={20}
              />

              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-neutral-400">
                  +506 8888-8888
                </p>
              </div>
            </button>

            {/* Redes sociales */}
            <div className="rounded-2xl p-4">
              <h3 className="mb-4 font-semibold">
                Redes sociales
              </h3>

              <div className="flex gap-4">
                <button
                  onClick={() => openLink(instagram)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
                >
                  <FaInstagram size={20} />
                </button>

                <button
                  onClick={() => openLink(facebook)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
                >
                  <FaFacebookF size={18} />
                </button>

                <button
                  onClick={() => openLink(tiktok)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
                >
                  <FaTiktok size={19} />
                </button>
              </div>

              <div className="mt-4 space-y-1 text-sm text-neutral-400">
                <p>@tuinstagram</p>
                <p>@tufacebook</p>
                <p>@tutiktok</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tu Marca · Demo creada por kaallar.</p>

          <p>Diseño Web · Citas · Experiencias Digitales</p>
        </div>
      </div>
    </footer>
  );
}

export default ClinicaFooter;