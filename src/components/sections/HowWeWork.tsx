import { motion } from "framer-motion";

export default function HowWeWork() {
  return (
    <section className="relative py-16 bg-brand-[#f2efe9] overflow-hidden border-y border-[--theme-border-soft]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-xs font-semibold uppercase tracking-brand text-white mb-4"
        >
          Cómo Trabajamos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-silver"
        >
          <span>ESTRATEGIA</span>
          <span className="text-silver/30">•</span>
          <span>PROCESOS</span>
          <span className="text-silver/30">•</span>
          <span>PERSONAS</span>
          <span className="text-silver/30">•</span>
          <span>TRANSFORMACIÓN</span>
        </motion.div>
      </div>
    </section>
  );
}
