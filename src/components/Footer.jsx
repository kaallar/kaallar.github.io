import { ArrowUpRight, Globe } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa6";

function Footer({ language = "es" }) {
  const content = {
    es: {
      tag: "Agencia Digital",
      description:
        "Diseñamos sitios web modernos, rápidos y elegantes para empresas que quieren transmitir profesionalismo y convertir más clientes.",
      button: "Solicitar cotización",
      services: "Servicios",
      location: "Costa Rica · Diseño Web Profesional",
      rights: "Todos los derechos reservados.",
      bottom: "Diseño Web · Branding · Experiencias Digitales",
      whatsappMsg:
        "Hola, me gustaría cotizar un sitio web con kaallar.",
      follow: "Síguenos",
    },

    en: {
      tag: "Digital Studio",
      description:
        "We design modern, fast and elegant websites for businesses that want to stand out and convert more clients.",
      button: "Request a Quote",
      services: "Services",
      location: "Costa Rica · Professional Web Design",
      rights: "All rights reserved.",
      bottom: "Web Design · Branding · Digital Experiences",
      whatsappMsg:
        "Hi, I'd like to request a quote for a website with kaallar.",
      follow: "Follow us",
    },
  };

  const t = content[language];

  const phone = "50672261373";

  const message = encodeURIComponent(t.whatsappMsg);

  const whatsapp = `https://wa.me/${phone}?text=${message}`;

  const instagram = "https://instagram.com/kaallar_studio";
  const facebook = "https://facebook.com/kaallar";
  const tiktok = "https://tiktok.com/@kaallar_studio";

  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Brand */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              {t.tag}
            </p>

            <h2
              className="mb-5 text-6xl font-normal italic leading-none text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              kaallar
            </h2>

            <p className="mb-8 max-w-md leading-8 text-neutral-400">
              {t.description}
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              {t.button}
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Globe className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">{t.services}</h3>
                <p className="text-neutral-400">{t.location}</p>
              </div>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 transition hover:text-[#C8A45D]"
            >
              <FaWhatsapp className="mt-1 text-[20px] text-[#C8A45D]" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-neutral-400">+506 7226-1373</p>
              </div>
            </a>

            {/* Socials */}
            <div>
              <h3 className="mb-4 font-semibold">{t.follow}</h3>

              <div className="flex gap-4">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href={tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
                  aria-label="TikTok"
                >
                  <FaTiktok size={19} />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 kaallar. {t.rights}</p>

          <p>{t.bottom}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;