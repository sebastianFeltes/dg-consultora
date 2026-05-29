import { motion } from "framer-motion";
import { fadeUp, STAGGER } from "../../lib/animations";
import type { AreaConfig } from "../../data/areas";
import SectionHeader from "../ui/SectionHeader";
import ReferentCard from "../ui/ReferentCard";
import FocusTag from "../ui/FocusTag";

const BASE = import.meta.env.BASE_URL;

interface AreaSectionProps {
  config: AreaConfig;
}

/**
 * Generic area section used by Estrategia, Procesos, Personas, Transformacion.
 *
 * Layout:
 * - MOBILE:   ReferentCard (top, full width) → SectionHeader + FocusTags
 * - DESKTOP:  SectionHeader + FocusTags (col 7) | ReferentCard (col 5)
 *
 * This is achieved with `order-first lg:order-last` on the card column.
 */
export default function AreaSection({ config }: AreaSectionProps) {
  const {
    id,
    label,
    tagline,
    headline,
    body,
    bgImage,
    bgColor,
    overlayColor,
    focusAreas,
    referent,
  } = config;

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center overflow-hidden py-20 sm:py-24 text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* Parallax background photograph */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${BASE}${bgImage.replace(/^\//, '')}')` }}
      />

      {/* Color overlay */}
      <div
        className="absolute inset-0 z-0 mix-blend-multiply"
        style={{ backgroundColor: `${overlayColor}cc` /* ~80% opacity */ }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Right: Referent card — appears FIRST on mobile ── */}
          <div className="order-first lg:order-last lg:col-span-5 flex justify-center">
            <ReferentCard
              name={referent.name}
              title={referent.title}
              image={`${BASE}${referent.image.replace(/^\//, '')}`}
              quote={referent.quote}
            />
          </div>

          {/* ── Left: Text content — appears SECOND on mobile ── */}
          <div className="order-last lg:order-first lg:col-span-7 flex flex-col justify-center">
            <SectionHeader
              eyebrow={label}
              tagline={tagline}
              headline={headline}
              body={body}
            />

            {/* Focus area pills */}
            <motion.div
              {...fadeUp(STAGGER.tags)}
              className="flex flex-wrap gap-2.5"
            >
              {focusAreas.map((area, idx) => (
                <FocusTag key={idx} icon={area.icon} name={area.name} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
