import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "../data/content";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { cn } from "../utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "relative z-50 mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8",
          scrolled &&
            "mt-2 h-16 max-w-[72rem] rounded-full border border-white/10 px-5 glass-dark shadow-[0_12px_40px_-20px_rgb(0_0_0_/_0.6)] md:px-6",
        )}
      >
        <Logo light />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-cream/70 transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppCta
            source="nav"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[13px] font-semibold text-ink shadow-[0_10px_24px_-12px_rgb(196_162_101_/_0.9)] transition hover:bg-gold-light"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Chat on WhatsApp
          </WhatsAppCta>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-0 z-40 bg-ink/95 px-6 pb-10 pt-24 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 font-serif text-3xl text-cream/90"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <WhatsAppCta
            source="nav-mobile"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-ink"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </WhatsAppCta>
        </div>
      )}
    </header>
  );
}
