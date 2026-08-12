import { useState } from "react";
import { Check } from "lucide-react";
import { plans } from "../data/content";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { cn } from "../utils/cn";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-cream py-20 md:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Start free. Upgrade the month you’re hunting.
          </h2>
          <p className="mt-4 text-[15px] text-stone">
            Billed in rand. Start the conversation on WhatsApp — we confirm the plan there.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex items-center justify-center gap-3">
          <span className={cn("text-sm", !annual ? "font-semibold text-ink" : "text-stone")}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className={cn(
              "relative h-8 w-14 rounded-full transition shadow-inner",
              annual ? "bg-ink" : "bg-line",
            )}
          >
            <span
              className={cn(
                "absolute top-1 h-6 w-6 rounded-full bg-gold transition-all shadow-[0_3px_0_-1px_rgb(154_123_60_/_0.9),0_6px_10px_-4px_rgb(11_18_32_/_0.5)]",
                annual ? "left-7" : "left-1",
              )}
            />
            <span className="sr-only">Toggle annual billing</span>
          </button>
          <span className={cn("text-sm", annual ? "font-semibold text-ink" : "text-stone")}>
            Annual
            <span className="ml-2 rounded-full bg-gold-mist px-2 py-0.5 text-[11px] font-semibold text-gold-deep">
              Save 33%
            </span>
          </span>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <Reveal key={plan.id} delay={i * 90} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-[1.7rem] border p-7 transition",
                    plan.featured
                      ? "card-stack border-gold bg-ink text-cream shadow-gold lg:-translate-y-3"
                      : "border-line bg-paper text-ink shadow-3d",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink shadow-[0_8px_18px_-8px_rgb(196_162_101_/_0.9)]">
                      Most chosen
                    </span>
                  )}
                  <h3 className="font-serif text-3xl">{plan.name}</h3>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      plan.featured ? "text-cream/60" : "text-stone",
                    )}
                  >
                    {plan.blurb}
                  </p>
                  <p className="mt-6 flex items-end gap-1">
                    <span className="font-serif text-5xl">
                      {price === 0 ? "R0" : `R${price}`}
                    </span>
                    {price > 0 && (
                      <span
                        className={cn(
                          "mb-1 text-sm",
                          plan.featured ? "text-cream/50" : "text-stone",
                        )}
                      >
                        /mo
                      </span>
                    )}
                  </p>
                  {price > 0 && (
                    <p className={cn("text-xs", plan.featured ? "text-cream/40" : "text-stone")}>
                      {annual ? "billed annually" : "billed monthly"} · ZAR
                    </p>
                  )}

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            plan.featured ? "text-gold-light" : "text-gold-deep",
                          )}
                        />
                        <span className={plan.featured ? "text-cream/85" : "text-ink/80"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <WhatsAppCta
                    source={`pricing-${plan.id}`}
                    className={cn(
                      "mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition",
                      plan.featured
                        ? "btn-3d btn-shine bg-gold text-ink"
                        : "bg-ink text-cream hover:bg-ink-soft shadow-[0_4px_0_-1px_rgb(11_18_32_/_0.8),0_14px_26px_-12px_rgb(11_18_32_/_0.5)]",
                    )}
                  >
                    {plan.cta}
                  </WhatsAppCta>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
