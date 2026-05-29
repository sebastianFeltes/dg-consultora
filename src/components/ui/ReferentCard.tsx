import { motion } from "framer-motion";
import { fadeScale, STAGGER } from "../../lib/animations";

interface ReferentCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
}

/**
 * Full-bleed photo card with glassmorphic overlay showing
 * referent name, title and a quote. Used in all 4 area sections.
 *
 * Mobile: full width with a shorter aspect ratio (4/5).
 * Desktop: max-w-md with the taller 3/4 ratio.
 */
export default function ReferentCard({
  name,
  title,
  image,
  quote,
}: ReferentCardProps) {
  return (
    <motion.div
      {...fadeScale(STAGGER.card)}
      className="relative w-full max-w-sm sm:max-w-md aspect-4/5 sm:aspect-3/4 rounded-[28px] overflow-hidden shadow-2xl group border border-white/10 mx-auto"
    >
      {/* Full-bleed photo */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
        loading="lazy"
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Glassmorphic content overlay */}
      <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
        <div className="p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 space-y-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-pearl/50">
              Referente del Área
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5 text-balance">
              {name}
            </h3>
            <p className="text-[11px] font-medium uppercase tracking-wider text-brand-pearl/70 mt-0.5 leading-relaxed">
              {title}
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <p className="text-xs italic text-brand-pearl/90 leading-relaxed text-pretty pl-4 relative before:content-['\u201c'] before:text-2xl before:font-serif before:text-white/20 before:absolute before:-top-2 before:left-0">
            {quote}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
