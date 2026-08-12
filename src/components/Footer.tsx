import { Logo } from "./Logo";
import { footerColumns } from "../data/content";
import { whatsappHref, WHATSAPP_DISPLAY } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 pb-28 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
              The career kit for South African job seekers. CVs, cover letters and LinkedIn
              — written for this market.
            </p>
            <a
              href={whatsappHref("footer")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-light transition hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-cream/40">
              Cape Town · Johannesburg · Remote
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => {
                    const isWhatsApp = l.href === "whatsapp";
                    return (
                      <li key={l.label}>
                        <a
                          href={isWhatsApp ? whatsappHref("footer") : l.href}
                          target={isWhatsApp ? "_blank" : undefined}
                          rel={isWhatsApp ? "noopener noreferrer" : undefined}
                          className="text-sm text-cream/70 transition hover:text-gold-light"
                        >
                          {l.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} jobready.za · All rights reserved.</p>
          <p>Made for people looking for work in South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
