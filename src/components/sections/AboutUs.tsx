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
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[--theme-ink-muted] mb-4"
          >
            ¿Quiénes Somos?
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
            Acompañamos organizaciones en sus procesos de crecimiento, orden y transformación. Ayudamos a empresas a escalar operaciones, mitigar riesgos y consolidar su liderazgo.
          </motion.p>
        </div>

        {/* Pillar cards temporarily hidden */}
      </div>
    </section>
  );
}
