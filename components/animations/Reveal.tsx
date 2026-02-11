"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "zoomIn";

interface RevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

const animations: Record<AnimationType, string> = {
  fadeUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  slideLeft: "animate-slide-left",
  slideRight: "animate-slide-right",
  zoomIn: "animate-zoom-in",
};

export default function Reveal({
  children,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.15,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "50px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      // Solo aplicamos el delay; el fill-mode lo gestiona el CSS con "both"
      // No ponemos opacity:0 inline para evitar el parpadeo al activarse la clase
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${className} ${isVisible ? animations[animation] : "opacity-0"}`}
    >
      {children}
    </div>
  );
}