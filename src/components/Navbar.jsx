import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const closeMenu = () => setOpen(false);

  const scrollToTop = (e) => {
    if (!isHome) return;

    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    closeMenu();
  };

  const t = {
    services: language === "es" ? "Servicios" : "Services",
    plans: language === "es" ? "Planes" : "Plans",
    warranty: language === "es" ? "Garantía" : "Warranty",
    faq: language === "es" ? "FAQ" : "FAQ",
    contact: language === "es" ? "Contacto" : "Contact",
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="transition hover:opacity-80"
        >
          <h1
            className="text-4xl font-normal italic text-white md:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            kaallar
          </h1>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            <a
              href="#servicios"
              className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
            >
              {t.services}
            </a>

            <a
              href="#planes"
              className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
            >
              {t.plans}
            </a>

            <a
              href="#garantia"
              className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
            >
              {t.warranty}
            </a>

            <a
              href="#faq"
              className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
            >
              {t.faq}
            </a>

            <a
              href="#contacto"
              className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
            >
              {t.contact}
            </a>
          </nav>

          {/* Idioma */}
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setLanguage("es")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                language === "es"
                  ? "bg-[#C8A45D] text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              ES
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                language === "en"
                  ? "bg-[#C8A45D] text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setLanguage("es")}
              className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                language === "es"
                  ? "bg-[#C8A45D] text-black"
                  : "text-neutral-400"
              }`}
            >
              ES
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                language === "en"
                  ? "bg-[#C8A45D] text-black"
                  : "text-neutral-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/10 p-2 text-white transition hover:border-[#C8A45D]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#servicios"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              {t.services}
            </a>

            <a
              href="#planes"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              {t.plans}
            </a>

            <a
              href="#garantia"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              {t.warranty}
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              {t.faq}
            </a>

            <a
              href="#contacto"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;