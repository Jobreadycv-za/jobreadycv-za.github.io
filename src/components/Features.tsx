import {
  ScanSearch,
  Crosshair,
  Languages,
  Layers3,
  Mic2,
  Lock,
} from "lucide-react";
import { featureGrid } from "../data/content";
import { Reveal } from "./Reveal";

const icons = {
  scan: ScanSearch,
  target: Crosshair,
  language: Languages,
  layers: Layers3,
  mic: Mic2,
  lock: Lock,
};

export function Features() {
  return (
    <section className="bg-cream py-20 md:py-28" id="features">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
              The kit
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Everything a serious search needs. Nothing a gimmick would add.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-[15px] leading-relaxed text-stone md:justify-self-end">
              One workspace for the three documents that decide whether a recruiter replies:
              your CV, your letter, and the profile they check before they book you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureGrid.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-paper p-7 card-hover">
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-mist transition duration-500 group-hover:scale-[1.6]"
                  />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-gold-light to-gold-deep text-ink shadow-[0_5px_0_-1px_rgb(154_123_60_/_0.9),0_14px_24px_-10px_rgb(11_18_32_/_0.35)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="relative mt-6 font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-stone">{item.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
