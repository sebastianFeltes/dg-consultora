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
 * Mobile: stacked layout — image on top, content panel below.
 * Desktop: full-bleed photo with glassmorphic bottom overlay.
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
      className="w-full max-w-sm sm:max-w-md mx-auto"
    >
      {/* ── MOBILE layout: image top + info below ── */}
      <div className="sm:hidden rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
        {/* Photo */}
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Info panel below image */}
        <div className="p-5 bg-black/40 backdrop-blur-md border-t border-white/10 space-y-3">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-pearl/50">
              Referente del Área
            </span>
            <h3 className="text-lg font-bold tracking-tight text-white mt-0.5 text-balance">
              {name}
            </h3>
            <p className="text-[11px] font-medium uppercase tracking-wider text-brand-pearl/70 mt-0.5 leading-relaxed">
              {title}
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <p className="text-xs italic text-brand-pearl/90 leading-relaxed text-pretty pl-4 relative">
            <span className="absolute -top-2 left-0 text-2xl font-serif text-white/20 not-italic">"</span>
            {quote}
          </p>
        </div>
      </div>

      {/* ── DESKTOP layout: full-bleed photo with glass overlay ── */}
      <div className="hidden sm:block relative aspect-3/4 rounded-[28px] overflow-hidden shadow-2xl group border border-white/10">
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

            <p
              className="text-xs italic text-brand-pearl/90 leading-relaxed text-pretty pl-4 relative"
            >
              <span className="absolute -top-2 left-0 text-2xl font-serif text-white/20 not-italic">"</span>
              {quote}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
