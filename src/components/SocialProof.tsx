import { companies, stats } from "../data/content";
import { Reveal } from "./Reveal";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  active: boolean;
}) {
  const n = useCountUp(value, active, 1600);
  const display = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-ZA");

  return (
    <div className="text-center">
      <p className="font-serif text-4xl text-ink sm:text-5xl">
        {display}
        <span className="text-gold-deep">{suffix}</span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone">{label}</p>
    </div>
  );
}

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { threshold: 0.3 });

  return (
    <section className="relative bg-cream pb-8 pt-4" aria-label="Social proof">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-stone">
            Candidates now at teams inside
          </p>
        </Reveal>
      </div>

      <div className="marquee-mask relative overflow-hidden border-y border-line/80 py-5">
        <div className="animate-marquee flex w-max gap-14 pr-14">
          {[...companies, ...companies].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-serif text-2xl text-ink/35 transition hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
        {/* corner stickers */}
        <span
          aria-hidden="true"
          className="sticker sticker-paper animate-bob absolute left-5 top-1/2 hidden h-14 w-14 -mt-7 rotate-[-8deg] lg:grid"
        >
          <span className="text-center leading-none">
            <span className="block font-serif text-base">18</span>
            <span className="block text-[8px] font-semibold uppercase tracking-wider">brands</span>
          </span>
        </span>
        <span
          aria-hidden="true"
          className="sticker sticker-sage animate-bob absolute right-5 top-1/2 hidden h-14 w-14 -mt-7 rotate-[8deg] lg:grid"
          style={{ animationDelay: "-2s" }}
        >
          <span className="text-center leading-none">
            <span className="block font-serif text-base">0+</span>
            <span className="block text-[8px] font-semibold uppercase tracking-wider">fees</span>
          </span>
        </span>
      </div>

      <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 py-16 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <Stat key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
