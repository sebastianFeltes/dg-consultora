import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background photograph */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/consulting-bg.jpg')" }}
        />
        {/* Gradient overlay — dark enough to read text */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-28 sm:py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[#8B8B8B] mb-6"
          >
            Consultoría Integral
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white mb-6 text-balance"
          >
            Acompañamos organizaciones en sus procesos de crecimiento, orden y
            transformación
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="text-lg md:text-xl text-[#C4C8CE] mb-10 max-w-xl text-pretty"
          >
            Ayudamos a empresas a escalar operaciones, mitigar riesgos y
            consolidar su liderazgo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
