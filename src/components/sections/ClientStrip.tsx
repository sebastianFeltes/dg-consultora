import { motion } from 'framer-motion';
import { Globe, BarChart3, Target, Users, Handshake } from 'lucide-react';

const LOGOS = [
  { icon: Globe, label: 'Clients' },
  { icon: BarChart3, label: 'Análisis' },
  { icon: Target, label: 'Soluciones' },
  { icon: Users, label: 'Confianza' },
  { icon: Handshake, label: 'Partners' },
];

export default function ClientStrip() {
  return (
    <section className="py-16 border-y border-[--theme-border-soft]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center text-sm font-semibold uppercase tracking-brand text-[--theme-ink-muted] mb-10"
        >
          Clientes Globales
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {LOGOS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.2, 0, 0, 1] }}
                className="flex items-center gap-3 text-[--theme-ink-muted]"
              >
                <Icon size={24} strokeWidth={1.5} />
                <span className="text-sm font-semibold uppercase tracking-wider">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
