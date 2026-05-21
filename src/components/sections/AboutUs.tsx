import { motion } from 'framer-motion';
import { Globe2, Building2, Award } from 'lucide-react';

const PILLARS = [
  {
    icon: Globe2,
    title: 'Alcance Global',
    body: 'Operamos en múltiples jurisdicciones brindando un servicio estandarizado de primer nivel internacional.',
  },
  {
    icon: Building2,
    title: 'Soluciones Integrales',
    body: 'Abordamos los desafíos corporativos desde una perspectiva multidisciplinaria y estratégica.',
  },
  {
    icon: Award,
    title: 'Excelencia Comprobada',
    body: 'Nuestra trayectoria respalda el éxito de las implementaciones en organizaciones líderes.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[--theme-ink-muted] mb-4"
          >
            Sobre Nosotros
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
          >
            El socio estratégico que su organización necesita
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="text-lg text-[--theme-ink-muted] leading-relaxed"
          >
            En <strong className="text-[--theme-ink] font-semibold">DG Integral Consultora</strong>, ayudamos a empresas a escalar operaciones, mitigar riesgos y consolidar su liderazgo en el mercado global.
          </motion.p>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="group p-8 rounded-lg bg-[--theme-surface-raised] border border-[--theme-border-soft] hover:border-[--theme-border] transition-[border-color,box-shadow] duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-[--theme-border-soft] text-[--theme-ink-secondary] mb-5 group-hover:bg-[--theme-border] transition-[background-color] duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
                <p className="text-sm text-[--theme-ink-muted] leading-relaxed">{pillar.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
