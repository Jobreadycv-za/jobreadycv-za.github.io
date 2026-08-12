import { steps } from "../data/content";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

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

        <ol className="mt-16 grid list-none gap-8 p-0 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <li className="group relative">
                {/* connector */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="dashed-connector absolute -right-7 top-16 hidden w-8 md:block"
                  />
                )}

                {/* stacked card */}
                <div className="card-stack relative h-full rounded-3xl border border-line bg-paper p-8 shadow-3d card-hover">
                  <span
                    className="tape tape-mist -top-3 left-1/2 -translate-x-1/2 rotate-1 opacity-80"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "sticker h-14 w-14 font-serif text-xl font-semibold transition duration-300 group-hover:rotate-6",
                        i === 0 ? "-rotate-3" : i === 2 ? "rotate-3" : "",
                      )}
                      aria-hidden="true"
                    >
                      {step.n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full border border-gold/40 text-center text-[10px] leading-[1.8rem] text-gold-deep opacity-0 transition group-hover:opacity-100"
                    >
                      ↓
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{step.copy}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
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
            ].map((tag, i) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-ink/70 transition hover:border-gold hover:text-ink"
                style={{
                  transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.4}deg)`,
                }}
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
