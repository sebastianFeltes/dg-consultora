import { useEffect, useRef, useCallback } from "react";

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
 *
 * Jump prevention: the initial transform is computed synchronously via a ref
 * callback so the correct translateY is applied before the browser paints,
 * even when the page is refreshed while scrolled mid-page.
 */
export default function ParallaxBg({ src, speed = 0.25 }: ParallaxBgProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number | null>(null);

  const getOffset = useCallback(
    (img: HTMLImageElement) => {
      const section = img.closest("section");
      if (!section) return 0;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewCenter = viewH / 2;
      return (sectionCenter - viewCenter) * speed;
    },
    [speed]
  );

  // Ref callback: runs synchronously when the DOM node is attached —
  // before the browser paints — so there is no visible jump.
  const setImgRef = useCallback(
    (node: HTMLImageElement | null) => {
      (imgRef as React.MutableRefObject<HTMLImageElement | null>).current = node;
      if (!node) return;
      // Apply correct transform immediately (handles scroll-position at load time)
      node.style.transform = `scale(1.3) translateY(${getOffset(node)}px)`;
    },
    [getOffset]
  );

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    function update() {
      if (!img) return;
      img.style.transform = `scale(1.3) translateY(${getOffset(img)}px)`;
      rafRef.current = null;
    }

    function onScroll() {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [getOffset]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        ref={setImgRef}
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
        style={{ transform: "scale(1.3) translateY(0px)" }}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />
    </div>
  );
}
