import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const STATS = [
  { value: 750, suffix: '+', label: 'Estrategia', desc: 'Proyectos de estrategia corporativa' },
  { value: 600, suffix: '+', label: 'Análisis', desc: 'Auditorías de procesos completadas' },
  { value: 500, suffix: '+', label: 'Soluciones', desc: 'Soluciones implementadas con éxito' },
  { value: 40, suffix: '+', label: 'Confianza', desc: 'Países con presencia activa' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Deceleration curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {current}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[--theme-surface]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center text-2xl md:text-3xl font-bold uppercase tracking-wider mb-16"
        >
          Áreas de Estrategia
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[--theme-ink] mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-bold uppercase tracking-brand text-[--theme-ink-secondary] mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-[--theme-ink-muted]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
