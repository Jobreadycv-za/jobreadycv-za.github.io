import { cn } from "../utils/cn";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)} aria-label="jobready.za home">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-gold-light via-gold to-gold-deep shadow-[0_8px_20px_-10px_rgb(196_162_101_/_0.9)]">
        <svg viewBox="0 0 32 32" className="h-5 w-5 text-ink" aria-hidden="true">
          <path
            d="M8 9.5h10.2c3.3 0 5.8 2.3 5.8 5.6 0 3.4-2.5 5.7-5.9 5.7H14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M11.2 24.2 14.6 21l-3.4-3.3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex items-baseline gap-0.5">
        <span
          className={cn(
            "text-[17px] font-semibold tracking-tight",
            light ? "text-cream" : "text-ink",
          )}
        >
          jobready
        </span>
        <span className={cn("font-serif text-[17px] italic", light ? "text-gold-light" : "text-gold-deep")}>
          .za
        </span>
      </span>
    </a>
  );
}
