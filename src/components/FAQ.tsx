import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";
import { WhatsAppCta } from "./WhatsAppCta";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper py-20 md:py-28" id="faq">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Questions people ask before they start.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-stone">
            Still unsure? WhatsApp us — a human answers, usually the same afternoon.
          </p>
          <WhatsAppCta
            source="faq"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream hover:bg-ink-soft"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask on WhatsApp
          </WhatsAppCta>
        </Reveal>

        <div className="divide-y divide-line rounded-[1.6rem] border border-line bg-cream/30">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-serif text-lg text-ink sm:text-xl">{item.q}</span>
                    <span
                      className={cn(
                        "mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink transition",
                        isOpen && "rotate-45 bg-ink text-cream",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={cn("accordion-body px-6", isOpen && "open")}>
                    <p className="overflow-hidden pb-5 text-sm leading-relaxed text-stone">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
