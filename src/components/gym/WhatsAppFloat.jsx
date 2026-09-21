import { MessageCircle } from "lucide-react";

function WhatsAppFloat() {
  const phone = "50688888888";

  const message = encodeURIComponent(
    "¡Hola! Vi la demostración de NEXUS Fitness Club desarrollada por kaallar y me gustaría solicitar información."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}

export default WhatsAppFloat;