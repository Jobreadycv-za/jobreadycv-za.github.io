import { useRef, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "scale";
};

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const base =
    variant === "left" ? "reveal-left" : variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div
      ref={ref}
      className={cn(base, inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
