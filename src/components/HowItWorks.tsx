import { steps } from "../data/content";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  return (
    <section className="bg-paper py-20 md:py-28" id="how">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            From blank page to interview pack.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-stone sm:text-base">
            Three quiet steps. No eight-page wizard. No American template pretending it’s local.
          </p>
        </Reveal>

        <ol className="mt-16 grid list-none gap-6 p-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <li className="group relative h-full overflow-hidden rounded-3xl border border-line bg-cream/50 p-8 card-hover">
                <span className="font-serif text-5xl text-gold/50">{step.n}</span>
                <h3 className="mt-6 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{step.copy}</p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone">
              Templates for
            </span>
            {[
              "Finance",
              "Tech",
              "Mining",
              "Healthcare",
              "Retail",
              "Public sector",
              "Legal",
              "Engineering",
              "Hospitality",
              "Education",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-ink/70 transition hover:border-gold hover:text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
