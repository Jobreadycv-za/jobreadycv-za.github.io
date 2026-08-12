import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappHref, WHATSAPP_DISPLAY } from "../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("float")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
      aria-label={`Chat on WhatsApp ${WHATSAPP_DISPLAY}`}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-line bg-paper px-3.5 py-2 text-xs font-semibold text-ink opacity-0 shadow-[var(--shadow-lift)] transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_32px_-12px_rgb(37_211_102_/_0.8)] transition hover:scale-105 hover:bg-[#1ebe5d]">
        <span className="absolute inset-0 animate-[pulse-ring_1.8s_ease-out_infinite] rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
