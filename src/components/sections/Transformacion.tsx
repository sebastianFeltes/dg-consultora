import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Briefcase, Lightbulb } from 'lucide-react';

const FOCUS_AREAS = [
  { icon: BookOpen, name: 'Educación' },
  { icon: GraduationCap, name: 'Formación' },
  { icon: Award, name: 'Capacitaciones' },
  { icon: Briefcase, name: 'Desarrollo profesional' },
  { icon: Lightbulb, name: 'Innovación' },
];

export default function Transformacion() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="transformacion"
      className="relative min-h-screen flex items-center overflow-hidden py-24 text-white bg-[#c47a5a]"
    >
      {/* Background Image with Fixed Scroll (Still background) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/resources/imagen-bg-naranja.jpeg')" }}
      />
      {/* Flat Color Overlay */}
      <div className="absolute inset-0 z-0 bg-[#c47a5a]/85 mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="text-xs font-semibold uppercase tracking-brand text-brand-pearl/70 mb-3"
            >
              Transformación
            </motion.p>
            
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0, 0, 1] }}
              className="text-sm font-medium uppercase tracking-wider text-brand-pearl/50 mb-4 block"
            >
              IMPULSAMOS CAMBIOS SOSTENIBLES Y MEDIBLES.
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight text-balance mb-6"
            >
              INNOVAR ES ADAPTARSE ANTES QUE EL RESTO.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="text-base sm:text-lg text-brand-pearl/80 leading-relaxed text-pretty mb-10 max-w-2xl"
            >
              ACOMPAÑAMOS CAMBIOS SOSTENIBLES QUE GENEREN IMPACTO REAL EN CADA PROYECTO.
            </motion.p>

            {/* Focus areas tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
              className="flex flex-wrap gap-2.5"
            >
              {FOCUS_AREAS.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-white/95 hover:bg-white/10 transition-colors duration-200"
                  >
                    <Icon size={14} className="opacity-70" />
                    <span>{area.name}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Referent Card with Full Overlap Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="relative w-full max-w-md aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl group border border-white/10"
            >
              {/* Full Card Background Image */}
              <img
                src="/resources/photos-team/foto-damian.jpeg"
                alt="D'Ambrosio Damian"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-700"
                loading="lazy"
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Overlapping Text Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                {/* Glassmorphic inner container */}
                <div className="p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-pearl/50">
                      Referente del Área
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white mt-0.5 text-balance">
                      D'Ambrosio Damian
                    </h3>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-brand-pearl/70 mt-0.5 leading-relaxed">
                      Diplomado universitario en gestión, diseño e innovación educativa
                    </p>
                  </div>

                  <div className="w-full h-px bg-white/10" />

                  <p className="text-xs italic text-brand-pearl/90 leading-relaxed text-pretty pl-4 relative before:content-['“'] before:text-2xl before:font-serif before:text-white/20 before:absolute before:-top-2 before:left-0">
                    CAPACITAR ES TRANSFORMAR EL FUTURO.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
