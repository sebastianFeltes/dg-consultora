import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Users } from "lucide-react";

const SERVICES = [
  {
    icon: Shield,
    title: "Confianza y Seguridad",
    body: "Auditoría integral, cumplimiento normativo y gestión de riesgos para proteger los activos de su empresa.",
  },
  {
    icon: Target,
    title: "Estrategia Empresarial",
    body: "Diseño de modelos de negocio, penetración de nuevos mercados internacionales y planificación financiera.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento y Escalamiento",
    body: "Optimización de procesos, transformación digital e inteligencia de negocios para potenciar su rentabilidad.",
  },
  {
    icon: Users,
    title: "Compromiso Organizacional",
    body: "Gestión del talento, desarrollo de liderazgo y cultura corporativa orientada al alto rendimiento.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Dark background band */}
      <div className="absolute inset-0 bg-[#0D1B2A] dark:bg-[#070F18]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[#8B8B8B] mb-4"
          >
            Soluciones Digitales
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-5"
          >
            Nuestras Soluciones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="text-lg text-[#C4C8CE] leading-relaxed"
          >
            Un portfolio de servicios diseñado para resolver las problemáticas
            más complejas del entorno empresarial actual.
          </motion.p>
        </div>

        {/* Service cards — 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.2, 0, 0, 1],
                }}
                className="group p-8 md:p-10 rounded-lg bg-[#132238] border border-white/[0.06] hover:border-white/[0.12] transition-[border-color] duration-300 da"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-white/[0.06] text-white mb-5 group-hover:bg-white/[0.1] transition-[background-color] duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8B8B8B] leading-relaxed">
                  {service.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
