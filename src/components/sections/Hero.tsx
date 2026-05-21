import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/consulting-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          style={{ outline: '1px solid rgba(0,0,0,0.1)' }}
        />
        {/* Gradient overlay — dark enough to read text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[#8B8B8B] mb-6"
          >
            Consultoría Estratégica
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6"
          >
            Aceleramos el crecimiento{' '}
            <span className="block">empresarial mediante</span>
            <span className="block">análisis de datos</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="text-lg md:text-xl text-[#C4C8CE] mb-10 max-w-xl"
          >
            Acompañamos a organizaciones de múltiples países a alcanzar su máximo potencial estratégico y operativo.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.2, 0, 0, 1] }}
          >
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider bg-white text-[#0D1B2A] hover:bg-[#F2F2F2] active:scale-[0.96] transition-[background-color,transform] duration-200 rounded"
            >
              Ver Soluciones
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
