import type { ReactNode } from "react";
import { whatsappHref } from "../lib/whatsapp";
import { cn } from "../utils/cn";

type WhatsAppCtaProps = {
  source?: string;
  children: ReactNode;
  className?: string;
};

export function WhatsAppCta({ source = "cta", children, className }: WhatsAppCtaProps) {
  return (
    <a
      href={whatsappHref(source)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("btn-shine", className)}
    >
      {children}
    </a>
  );
}
