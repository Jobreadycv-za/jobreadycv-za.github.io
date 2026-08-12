import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CTA() {

  return (
    <section className="px-5 pb-16 md:px-8 md:pb-24" id="cta">
      <Reveal variant="scale">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-ink/10">
          <img
            src="https://images.pexels.com/photos/38238572/pexels-photo-38238572.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Cape Town skyline with Table Mountain at sunset"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
          <div className="grain pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative grid gap-8 px-8 py-16 sm:px-12 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
                Your move
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
                Your next interview is one honest CV away.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/70">
                Message us this afternoon. If the first draft doesn’t feel like you, you
                haven’t lost a rand — only the blank-page hour.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <WhatsAppCta
                source="final-cta"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] hover:bg-gold-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </WhatsAppCta>
              <p className="text-xs text-cream/50">+27 68 251 0828 · usually reply in minutes</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
