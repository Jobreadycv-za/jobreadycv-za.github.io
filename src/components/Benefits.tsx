import { benefits } from "../data/content";
import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left" className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-gold/20 blur-2xl" />
          <figure className="relative overflow-hidden rounded-[1.8rem] border border-line shadow-[var(--shadow-lift)]">
            <img
              src="images/workspace.jpg"
              alt="A Cape Town desk with a CV builder open on a laptop beside a protea"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
              <p className="font-serif text-2xl text-cream">Designed at the pace of a real search.</p>
              <p className="mt-1 text-xs text-cream/70">Cape Town · Johannesburg · everywhere between</p>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Why switch
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              American resume tools flatten a South African story.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              Hiring here is its own language — longer CVs, different spelling, different
              proof. jobready.za was written for that language from the first line.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <li className="border-l-2 border-gold/50 pl-5">
                  <h3 className="font-serif text-xl text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone">{b.copy}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
