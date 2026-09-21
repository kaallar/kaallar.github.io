import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServiceCard({
  title,
  description,
  price,
  image,
  href,
  cta = "Explorar proyecto",
  external = false,
}) {
  const content = (
    <div className="group block overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-[#C8A45D]/40">
      {/* Imagen */}
      <div className="aspect-[5/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
          {price}
        </p>

        <h3 className="mb-3 text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mb-6 leading-7 text-neutral-300">
          {description}
        </p>

        <div className="flex items-center gap-2 font-medium text-white transition group-hover:text-[#C8A45D]">
          {cta}
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link to={href}>{content}</Link>
      )}
    </motion.div>
  );
}

export default ServiceCard;