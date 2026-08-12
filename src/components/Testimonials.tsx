import { testimonials } from "../data/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-28" id="stories">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Stories
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            From overlooked to in the room.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-stone">
            Real searches. Real cities. The same Sunday-afternoon rebuild that turned silence
            into a panel.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-[1.6rem] border border-line bg-cream/40 p-6 card-hover">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/30"
                  />
                  <div>
                    <figcaption className="text-sm font-semibold text-ink">{t.name}</figcaption>
                    <p className="text-xs text-stone">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg leading-snug text-ink/90">
                  “{t.quote}”
                </blockquote>
                <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-gold-deep">{t.city}</p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
