import { motion } from "framer-motion";
import { fadeUpSm, fadeUp, STAGGER } from "../../lib/animations";

interface SectionHeaderProps {
  /** Small label above tagline (e.g. "Estrategia") */
  eyebrow: string;
  /** Short all-caps tagline (e.g. "CONVERTIMOS OBJETIVOS EN PLANES ACCIONABLES.") */
  tagline: string;
  /** Main headline h2 */
  headline: string;
  /** Body paragraph */
  body: string;
  /** Optional extra className for the wrapper */
  className?: string;
}

/**
 * Animated section header used in area sections and other light-on-dark blocks.
 * Stagger order: eyebrow → tagline → headline → body.
 */
export default function SectionHeader({
  eyebrow,
  tagline,
  headline,
  body,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <motion.p
        {...fadeUpSm(STAGGER.eyebrow)}
        className="text-xs font-semibold uppercase tracking-brand text-brand-pearl/70 mb-3"
      >
        {eyebrow}
      </motion.p>

      <motion.span
        {...fadeUp(STAGGER.tagline)}
        className="text-sm font-medium uppercase tracking-wider text-brand-pearl/50 mb-4 block"
      >
        {tagline}
      </motion.span>

      <motion.h2
        {...fadeUp(STAGGER.headline)}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight text-balance mb-6"
      >
        {headline}
      </motion.h2>

      <motion.p
        {...fadeUp(STAGGER.body)}
        className="text-base sm:text-lg text-brand-pearl/80 leading-relaxed text-pretty mb-10 max-w-2xl"
      >
        {body}
      </motion.p>
    </div>
  );
}
