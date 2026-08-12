import { testimonials } from "../data/content";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

// literal strings so Tailwind can scan them
const rotations = [
  "-rotate-[1.6deg]",
  "rotate-[1.2deg]",
  "-rotate-[1deg]",
  "rotate-[1.4deg]",
  "-rotate-[1.2deg]",
  "rotate-[1.6deg]",
];

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

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure
                className={cn(
                  "note-card relative flex h-full flex-col rounded-[1.6rem] border border-line bg-cream/50 p-6 shadow-sheet",
                  rotations[i % rotations.length],
                )}
              >
                <span
                  className="tape tape-mist -top-3 left-1/2 -translate-x-1/2"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-3">
                  <span
                    className="polaroid rotate-[-3deg]"
                    style={{ padding: 4 }}
                    aria-hidden="true"
                  >
                    <img
                      src={t.image}
                      alt={`Portrait of ${t.name}`}
                      width={52}
                      height={52}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </span>
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
                <p className="mt-5">
                  <span className="sticker sticker-paper h-8 px-3 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    {t.city}
                  </span>
                </p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
