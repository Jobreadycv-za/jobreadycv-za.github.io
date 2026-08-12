import { useState } from "react";
import { Check, FileText, Link2 } from "lucide-react";
import { features } from "../data/content";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useTilt } from "../hooks/useTilt";

export function Showcase() {
  const [active, setActive] = useState(0);
  const item = features[active];
  const tilt = useTilt(5);

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28" id="product">
      <div className="orb orb-gold left-[-10%] top-20 h-72 w-72" />
      <div className="orb orb-sage bottom-10 right-[-8%] h-80 w-80" />
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-40" />

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
                  ? "border-gold bg-gold text-ink shadow-[0_8px_20px_-8px_rgb(196_162_101_/_0.8)]"
                  : "border-white/15 bg-white/5 text-cream/70 hover:border-white/30 hover:text-cream",
              )}
              aria-pressed={i === active}
            >
              {f.eyebrow}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
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
              className="btn-3d btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get {item.eyebrow.toLowerCase()} on WhatsApp
            </WhatsAppCta>
          </div>

          <Reveal variant="scale" className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gold/10 blur-3xl" />

            {/* paper stack */}
            <div className="tilt-scene">
              <div
                ref={tilt.ref}
                onMouseMove={tilt.onMouseMove}
                onMouseLeave={tilt.onMouseLeave}
                className="preserve-3d relative mx-auto max-w-lg transition-transform duration-300 ease-out"
              >
                {/* back sheets */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rotate-3 translate-x-7 translate-y-7 rounded-[1.8rem] border border-white/10 bg-paper/80 shadow-sheet"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -rotate-2 translate-x-3 translate-y-4 rounded-[1.8rem] border border-white/10 bg-paper/90 shadow-sheet"
                />

                {/* front sheet with image */}
                <span className="tape -top-4 left-12 -rotate-2" aria-hidden="true" />
                <figure
                  key={item.image}
                  className="animate-fade-in relative overflow-hidden rounded-[1.7rem] border border-white/15 shadow-pop"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/85 via-ink/30 to-transparent px-5 pb-4 pt-10">
                    <p className="font-serif text-lg text-cream">{item.eyebrow}</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream/90 backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>
                </figure>

                {/* ATS sticker */}
                <div
                  className="sticker sticker-paper animate-float absolute -left-5 top-6 z-10 h-16 w-16 lg:-left-10"
                  style={{ "--tilt": "-8deg" } as React.CSSProperties}
                  aria-hidden="true"
                >
                  <div className="text-center leading-none">
                    <p className="font-serif text-xl">94</p>
                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.12em]">
                      ATS score
                    </p>
                  </div>
                </div>

                {/* export chip */}
                <div
                  className="animate-float absolute -bottom-5 left-8 z-10 flex items-center gap-2 rounded-2xl border border-line bg-paper px-3.5 py-2.5 text-ink shadow-pop"
                  style={{ "--tilt": "0deg", animationDelay: "-1.6s" } as React.CSSProperties}
                >
                  <FileText className="h-4 w-4 text-gold-deep" />
                  <div className="leading-none">
                    <p className="text-[11px] font-semibold">PDF + Word</p>
                    <p className="mt-0.5 text-[10px] text-stone">print-perfect export</p>
                  </div>
                </div>

                {/* link chip */}
                <div
                  className="animate-float absolute -right-3 bottom-16 z-10 hidden items-center gap-2 rounded-2xl border border-line bg-paper px-3.5 py-2.5 text-ink shadow-pop sm:flex lg:-right-8"
                  style={{ animationDelay: "-0.8s" } as React.CSSProperties}
                >
                  <Link2 className="h-4 w-4 text-sage" />
                  <div className="leading-none">
                    <p className="text-[11px] font-semibold">Tailored to the ad</p>
                    <p className="mt-0.5 text-[10px] text-stone">Careers24 · PNet · LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
