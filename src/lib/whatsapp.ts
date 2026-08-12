export const WHATSAPP_NUMBER = "27682510828";
export const WHATSAPP_DISPLAY = "+27 68 251 0828";

const messages: Record<string, string> = {
  hero: "Hi jobready.za — I want a CV that gets interviews.",
  nav: "Hi jobready.za — I'd like to get started on my CV.",
  "nav-mobile": "Hi jobready.za — I'd like to get started on my CV.",
  showcase: "Hi jobready.za — I want help with my CV, cover letter or LinkedIn.",
  "showcase-cv": "Hi jobready.za — I need a professional CV.",
  "showcase-letter": "Hi jobready.za — I need a cover letter written.",
  "showcase-linkedin": "Hi jobready.za — I want my LinkedIn profile rewritten.",
  "pricing-starter": "Hi jobready.za — I want to start with a free CV.",
  "pricing-pro": "Hi jobready.za — I'm interested in the Pro plan.",
  "pricing-career": "Hi jobready.za — I'm interested in the Career plan.",
  "final-cta": "Hi jobready.za — I'm ready to get job-ready. Can we start?",
  float: "Hi jobready.za — I saw the site and I want help getting hired.",
  faq: "Hi jobready.za — I have a question before I start.",
  footer: "Hi jobready.za — I'd like to chat about a CV, cover letter or LinkedIn.",
};

export function whatsappHref(source = "cta") {
  const text = messages[source] ?? "Hi jobready.za — I'd like help getting job-ready.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
