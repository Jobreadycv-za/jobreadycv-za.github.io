import { MapPin } from "lucide-react";
import { benefits } from "../data/content";
import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* moodboard */}
        <Reveal variant="left" className="relative">
          <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 right-4 h-36 w-36 rounded-full bg-sage/15 blur-2xl" />

          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* main polaroid */}
            <figure className="polaroid w-[88%] rotate-[-2.5deg] transition duration-500 hover:rotate-0">
              <span className="tape -top-4 left-1/2 -translate-x-1/2 rotate-2" aria-hidden="true" />
              <img
                src="images/workspace.jpg"
                alt="Notebook, pen and a cup of coffee on a warm wooden desk"
                className="aspect-[4/5] w-full rounded-[4px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Designed at the pace of a real search.</figcaption>
            </figure>

            {/* overlapping second polaroid */}
            <figure
              className="polaroid animate-float absolute -bottom-8 -right-2 w-40 sm:-right-6 sm:w-44"
              style={{ "--tilt": "4deg" } as React.CSSProperties}
            >
              <img
                src="images/hero-portrait.jpg"
                alt="A happy professional mid-conversation at work"
                className="aspect-square w-full rounded-[4px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="text-sm">No blank-page hour.</figcaption>
            </figure>

            {/* city sticker */}
            <div
              className="sticker sticker-sage animate-bob absolute -top-5 right-6 h-24 w-24 rotate-6"
              aria-hidden="true"
            >
              <div className="text-center leading-none">
                <MapPin className="mx-auto h-4 w-4" />
                <p className="mt-1 font-serif text-sm leading-tight">
                  Cape Town
                  <br />
                  Johannesburg
                </p>
              </div>
            </div>

            {/* note card */}
            <div
              className="float-chip animate-wiggle absolute left-2 top-1/3 hidden -rotate-3 rounded-2xl px-4 py-3 text-ink sm:block"
              aria-hidden="true"
            >
              <p className="font-serif text-lg leading-none">48k+ CVs</p>
              <p className="mt-1 text-[11px] text-stone">built across SA</p>
            </div>
          </div>
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
                <li className="group flex items-start gap-4">
                  <span
                    className="sticker sticker-paper mt-0.5 h-9 w-9 shrink-0 rotate-3 font-serif text-sm font-semibold transition group-hover:rotate-6"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="border-l-2 border-gold/50 pl-5">
                    <h3 className="font-serif text-xl text-ink">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone">{b.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
