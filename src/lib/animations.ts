/**
 * Centralized framer-motion animation variants.
 * All components in this project should import from here
 * to keep animation timing consistent site-wide.
 */

const EASE = [0.2, 0, 0, 1] as const;

/** Fade in + slide up. Use for most text content. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: EASE },
});

/** Subtle fade in + small slide (for eyebrow labels). */
export const fadeUpSm = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: EASE },
});

/** Fade in + scale. Use for cards and images. */
export const fadeScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: EASE },
});

/** Stagger delays used across section headers. */
export const STAGGER = {
  eyebrow: 0,
  tagline: 0.05,
  headline: 0.1,
  body: 0.15,
  tags: 0.2,
  card: 0.1,
} as const;
