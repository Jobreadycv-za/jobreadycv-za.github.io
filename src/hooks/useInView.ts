import { useEffect, useState, type RefObject } from "react";

export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return inView;
}
