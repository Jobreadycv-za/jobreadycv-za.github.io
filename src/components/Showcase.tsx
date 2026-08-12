import { useState } from "react";
import { Check } from "lucide-react";
import { features } from "../data/content";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Showcase() {
  const [active, setActive] = useState(0);
  const item = features[active];
  

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28" id="product">
      <div className="orb orb-gold left-[-10%] top-20 h-72 w-72" />
      <div className="orb orb-sage bottom-10 right-[-8%] h-80 w-80" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Product
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Three tools. One standard of finish.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {features.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                i === active
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 bg-white/5 text-cream/70 hover:border-white/30 hover:text-cream",
              )}
              aria-pressed={i === active}
            >
              {f.eyebrow}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div key={item.id} className="animate-fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
              {item.eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/65">{item.copy}</p>
            <ul className="mt-7 space-y-3">
              {item.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-cream/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-light">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <WhatsAppCta
              source={`showcase-${item.id}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink hover:bg-gold-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get {item.eyebrow.toLowerCase()} on WhatsApp
            </WhatsAppCta>
          </div>

          <Reveal variant="scale" className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-2xl" />
            <figure
              key={item.image}
              className="relative overflow-hidden rounded-[1.6rem] border border-white/10 shadow-[0_40px_80px_-30px_rgb(0_0_0_/_0.8)] animate-fade-in"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
