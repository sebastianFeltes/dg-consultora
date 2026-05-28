import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Sofía Valenzuela',
    title: 'Directora de Estrategia',
    quote: 'La estrategia no es un plan estático, sino una brújula dinámica en un mercado en constante evolución.',
    image: '/images/team-sofia.png',
    website: '#',
    email: 'sofia.valenzuela@dgconsultora.com',
  },
  {
    name: 'Alejandro Montes',
    title: 'Consultor Financiero Principal',
    quote: 'El análisis riguroso de datos revela las oportunidades ocultas detrás de los desafíos más complejos.',
    image: '/images/team-alejandro.png',
    website: '#',
    email: 'alejandro.montes@dgconsultora.com',
  },
  {
    name: 'Valeria Benítez',
    title: 'Directora de Transformación Digital',
    quote: 'La verdadera transformación tecnológica comienza con el desarrollo de las personas y la cultura organizacional.',
    image: '/images/team-valeria.png',
    website: '#',
    email: 'valeria.benitez@dgconsultora.com',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[--theme-surface]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[--theme-ink-muted] mb-4"
          >
            Nuestro Equipo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-wrap-balance mb-5"
          >
            Profesionales comprometidos con su éxito
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="text-lg text-[--theme-ink-muted] leading-relaxed text-wrap-pretty"
          >
            Un equipo multidisciplinario con trayectoria internacional listo para impulsar los objetivos de su organización.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="group flex flex-col rounded-xl bg-[--theme-surface-raised] border border-[--theme-border-soft] hover:border-[--theme-border] transition-[border-color,box-shadow] duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Image Container with Bleed */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[--theme-border-soft]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                  loading="lazy"
                />
                {/* 1px overlay border for image outline definition per guidelines */}
                <div className="absolute inset-0 pointer-events-none border-b border-[--theme-border-soft]" />
                <div className="absolute inset-0 pointer-events-none outline-[1px] outline-black/10 dark:outline-white/10 -outline-offset-1" />
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold tracking-tight text-[--theme-ink] text-wrap-balance">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[--theme-ink-secondary] mt-1">
                    {member.title}
                  </p>
                </div>

                {/* Separator line */}
                <div className="w-full h-px bg-[--theme-border-soft] mb-5" />

                {/* Quote */}
                <p className="flex-1 text-sm italic text-[--theme-ink-muted] leading-relaxed text-wrap-pretty mb-6 pl-4 relative before:content-['“'] before:text-3xl before:font-serif before:text-[--theme-ink-secondary]/20 before:absolute before:-top-3 before:left-0">
                  {member.quote}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[--theme-border-soft]/60">
                  <a
                    href={member.website}
                    aria-label={`Sitio web de ${member.name}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[--theme-border-soft] text-[--theme-ink-secondary] hover:bg-[--theme-border] hover:text-[--theme-ink] active:scale-[0.96] transition-[background-color,color,transform] duration-200"
                  >
                    <Globe size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email de ${member.name}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[--theme-border-soft] text-[--theme-ink-secondary] hover:bg-[--theme-border] hover:text-[--theme-ink] active:scale-[0.96] transition-[background-color,color,transform] duration-200"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
