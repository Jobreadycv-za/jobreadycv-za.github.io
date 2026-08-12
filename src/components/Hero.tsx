import { Play, Sparkles } from "lucide-react";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {

  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream" id="top">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="orb orb-gold -left-24 top-10 h-80 w-80" />
      <div className="orb orb-sage right-0 top-40 h-96 w-96" style={{ animationDelay: "-6s" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-32 lg:pt-40">
        <div>
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light"
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
            <span className="mt-1 block italic text-gold-light">Get hired.</span>
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_18px_40px_-16px_rgb(196_162_101_/_0.85)] transition hover:bg-gold-light"
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

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-fade-up relative" style={{ animationDelay: "280ms" }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-sage/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 shadow-[0_40px_80px_-24px_rgb(0_0_0_/_0.7)]">
              <img
                src="images/hero-portrait.jpg"
                alt="A confident South African professional standing in a sunlit office"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-serif text-2xl leading-none text-cream">Lerato M.</p>
                <p className="mt-1 text-xs text-cream/70">Product Designer · Cape Town</p>
              </div>
            </div>

            <div className="animate-float-slow absolute -left-6 top-10 hidden w-48 rounded-2xl border border-white/10 bg-ink/75 p-3 shadow-2xl backdrop-blur-xl sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                ATS score
              </p>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-serif text-4xl leading-none text-cream">94</span>
                <svg viewBox="0 0 48 48" className="score-ring h-12 w-12">
                  <circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="#e4c98a"
                    strokeWidth="4"
                    strokeDasharray="113"
                    strokeDashoffset="7"
                  />
                </svg>
              </div>
              <p className="mt-1 text-[11px] text-cream/55">Ready for SuccessFactors</p>
            </div>

            <div
              className="animate-float absolute -right-4 bottom-24 hidden w-[15.5rem] rounded-2xl border border-white/10 bg-paper p-3.5 text-ink shadow-2xl sm:block"
              style={{ animationDelay: "-2s" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                CV · page 1
              </p>
              <p className="mt-1.5 font-serif text-lg leading-none">Lerato Molefe</p>
              <p className="mt-1 text-[11px] text-stone">Senior Product Designer</p>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-cream-deep" />
                <div className="h-1.5 w-5/6 rounded-full bg-cream-deep" />
                <div className="h-1.5 w-2/3 rounded-full bg-gold-mist" />
              </div>
            </div>

            <div
              className="animate-toast absolute right-3 top-3 flex items-start gap-3 rounded-2xl border border-white/10 bg-ink/80 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:-right-2 sm:top-4 sm:px-3.5 sm:py-3"
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
          </div>
        </div>
      </div>
    </section>
  );
}
