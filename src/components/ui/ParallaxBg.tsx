import { useEffect, useRef } from "react";

interface ParallaxBgProps {
  src: string;
  speed?: number;
}

/**
 * Cross-browser parallax background image.
 *
 * Works on iOS Safari, Android Chrome, and Desktop by using a scroll-driven
 * translateY on an <img> element instead of the broken `background-attachment: fixed`.
 *
 * The image is scaled up (scale 1.3) so there is always room to translate
 * without revealing blank space at the edges.
 */
export default function ParallaxBg({ src, speed = 0.25 }: ParallaxBgProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Walk up to the nearest <section>
    sectionRef.current = img.closest("section");

    function update() {
      const section = sectionRef.current;
      if (!section || !img) return;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewCenter = viewH / 2;
      const offset = (sectionCenter - viewCenter) * speed;
      img.style.transform = `scale(1.3) translateY(${offset}px)`;
      rafRef.current = null;
    }

    function onScroll() {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    }

    // Set initial position
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        ref={imgRef}
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
        style={{ transform: "scale(1.3) translateY(0px)" }}
        loading="eager"
      />
    </div>
  );
}
