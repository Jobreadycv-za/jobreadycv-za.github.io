import { useRef } from "react";
import { Play, Sparkles, Star } from "lucide-react";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useTilt } from "../hooks/useTilt";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const tilt = useTilt(6);

  const onMove = (e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  };

  const layer = (dx: number, dy: number) =>
    ({
      transform: `translate3d(calc(var(--px, 0) * ${dx}px), calc(var(--py, 0) * ${dy}px), 0)`,
    }) as React.CSSProperties;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative isolate overflow-hidden bg-ink text-cream"
      id="top"
    >
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="orb orb-gold -left-24 top-10 h-80 w-80" />
      <div className="orb orb-sage right-0 top-40 h-96 w-96" style={{ animationDelay: "-6s" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* spinning dashed ring, decorative */}
      <svg
        aria-hidden="true"
        className="animate-spin-slow pointer-events-none absolute -right-24 top-24 h-72 w-72 text-gold/25"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-32 lg:pt-40">
        <div>
          <div
            className="animate-fade-up inline-flex -rotate-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light shadow-[0_10px_24px_-12px_rgb(0_0_0_/_0.6)]"
            style={{ animationDelay: "80ms" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Built for the SA job market
          </div>

          <h1
            className="animate-fade-up mt-6 max-w-xl font-serif text-[3.15rem] leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-[4.6rem]"
            style={{ animationDelay: "160ms" }}
          >
            Get job-ready.
            <span className="gold-text mt-1 block italic">Get hired.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg"
            style={{ animationDelay: "260ms" }}
          >
            ATS-ready CVs, cover letters that sound like you, and a LinkedIn profile
            recruiters in Johannesburg, Cape Town and Durban actually stop for.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <WhatsAppCta
              source="hero"
              className="btn-3d btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Build my CV on WhatsApp
            </WhatsAppCta>
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cream/90 transition hover:border-white/30 hover:bg-white/10"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              See the kit
            </a>
          </div>

          <p
            className="animate-fade-up mt-5 text-xs text-cream/45"
            style={{ animationDelay: "460ms" }}
          >
            WhatsApp us · usually reply in minutes · no forms, no card
          </p>

          <dl
            className="animate-fade-up mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg"
            style={{ animationDelay: "540ms" }}
          >
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-cream/40">Callbacks</dt>
              <dd className="mt-1 font-serif text-3xl text-gold-light">3.2×</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-cream/40">CVs built</dt>
              <dd className="mt-1 font-serif text-3xl text-cream">48k+</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-cream/40">Rated</dt>
              <dd className="mt-1 font-serif text-3xl text-cream">4.9</dd>
            </div>
          </dl>
        </div>

        {/* ---- 3D scene ---- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-gold/20 via-transparent to-sage/15 blur-3xl" />

          {/* arch accent behind, drifting */}
          <div
            aria-hidden="true"
            className="animate-bob arch pointer-events-none absolute -right-2 -top-8 h-28 w-24 rotate-6 border border-gold/25 bg-gradient-to-b from-gold/15 to-transparent"
          />

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "280ms" }}
          >
          <div className="parallax-layer relative" style={{ ...layer(-14, -8) }}>
          <div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            className="preserve-3d relative transition-transform duration-200 ease-out will-change-transform"
          >
            {/* stacked sheets behind the main photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rotate-[2.4deg] translate-x-5 translate-y-6 rounded-[2rem] border border-white/10 bg-paper/90 shadow-sheet"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -rotate-[1.6deg] translate-x-2 translate-y-3 rounded-[2rem] border border-white/10 bg-paper/95 shadow-sheet"
            />

            {/* main photo card */}
            <span className="tape -top-4 left-12 rotate-2" aria-hidden="true" />
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-pop">
              <img
                src="images/hero-portrait.jpg"
                alt="A young South African professional smiling at her desk in a bright office"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5">
                <p className="font-serif text-2xl leading-none text-cream">Lerato M.</p>
                <p className="mt-1 text-xs text-cream/70">Product Designer · Cape Town</p>
              </figcaption>
            </figure>

            {/* ATS score card */}
            <div
              className="animate-float absolute -left-6 top-10 z-10 w-44 rounded-2xl border border-line bg-paper p-3 text-ink shadow-pop sm:-left-10"
              style={{ "--tilt": "-3deg" } as React.CSSProperties}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                ATS score
              </p>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-serif text-4xl leading-none">94</span>
                <svg viewBox="0 0 48 48" className="score-ring h-12 w-12">
                  <circle cx="24" cy="24" r="18" stroke="#ebe4d6" strokeWidth="4" />
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="#9a7b3c"
                    strokeWidth="4"
                    strokeDasharray="113"
                    strokeDashoffset="7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-[11px] text-stone">Ready for SuccessFactors</p>
            </div>

            {/* CV page card */}
            <div
              className="animate-float absolute -right-3 bottom-24 z-10 w-56 rounded-2xl border border-line bg-paper p-3.5 text-ink shadow-pop sm:-right-6"
              style={{ "--tilt": "2deg", animationDelay: "-2s" } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  CV · page 1
                </p>
                <span className="rounded-full bg-sage-soft px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-sage">
                  ATS ✓
                </span>
              </div>
              <p className="mt-1.5 font-serif text-lg leading-none">Lerato Molefe</p>
              <p className="mt-1 text-[11px] text-stone">Senior Product Designer</p>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-cream-deep" />
                <div className="h-1.5 w-5/6 rounded-full bg-cream-deep" />
                <div className="h-1.5 w-2/3 rounded-full bg-gold-mist" />
              </div>
            </div>

            {/* interview toast */}
            <div
              className="animate-toast absolute right-3 top-3 z-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-ink/80 px-3 py-2.5 shadow-pop backdrop-blur-xl sm:-right-2 sm:top-4 sm:px-3.5 sm:py-3"
              style={{ animationDelay: "1.1s" }}
            >
              <span className="relative mt-0.5 flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-[pulse-ring_1.8s_ease-out_infinite] rounded-full bg-sage" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-cream">Interview invite</p>
                <p className="text-[11px] text-cream/60">Discovery · Thursday 10:00</p>
              </div>
            </div>

            {/* callbacks sticker */}
            <div
              aria-hidden="true"
              className="sticker animate-bob absolute -left-5 bottom-6 z-10 h-20 w-20 rotate-6 sm:-left-8"
              style={{ animationDelay: "-1.4s" }}
            >
              <div className="text-center leading-none">
                <p className="font-serif text-2xl">3.2×</p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.14em]">
                  callbacks
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>

          {/* small floating star chip, outside the tilt so it stays flat */}
          <div
            className="animate-wiggle float-chip absolute -right-2 top-0 z-10 hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-ink lg:flex"
            aria-hidden="true"
          >
            <Star className="h-3.5 w-3.5 fill-gold text-gold-deep" />
            <span className="text-[11px] font-semibold">4.9 from 2,400 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
