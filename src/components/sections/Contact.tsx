import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import logoImg from "../../assets/dg-consultora.png";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Teléfono",
    lines: ["+54 9 221 683 3008"],
    href: "tel:+5492216833008",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["consultas@dgconsultora.com.ar"],
    href: "mailto:consultas@dgconsultora.com.ar",
  },
  {
    customIcon: whatsappIcon,
    label: "WhatsApp",
    lines: ["+54 9 221 683 3008"],
    href: "https://wa.me/5492216833008",
  },
  {
    customIcon: instagramIcon,
    label: "Instagram",
    lines: ["@dg.consultora"],
    href: "https://instagram.com/dgintegral.ar",
  },
];

export default function Contact() {
  const getIconSrc = (src: any) => (typeof src === "string" ? src : src.src);

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
          >
            Contacto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="text-lg text-[--theme-ink-muted] leading-relaxed"
          >
            Nuestros asesores están disponibles para analizar los desafíos de su
            organización y diseñar soluciones a medida.
          </motion.p>
        </div>

        {/* Two-column card */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[--theme-border-soft] shadow-[0_2px_16px_rgba(0,0,0,0.06)]">

            {/* ── Left: Logo ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
              className="flex flex-col items-center justify-center gap-6 p-10 bg-[--theme-surface-raised]"
            >
              <img
                src={logoImg.src}
                alt="DG Integral Consultora"
                className="w-full max-w-[220px] object-contain select-none"
                draggable={false}
              />
              <p className="text-sm text-[--theme-ink-muted] text-center leading-relaxed max-w-[200px]">
                Consultoría integral para el crecimiento de su organización.
              </p>
            </motion.div>

            {/* ── Right: Contact info ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
              className="flex flex-col justify-center gap-1 p-10 bg-[--theme-surface]"
            >
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                const wrapperProps = {
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" : undefined,
                  rel: item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                };

                return (
                  <motion.a
                    key={i}
                    {...wrapperProps}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.07,
                      ease: [0.2, 0, 0, 1],
                    }}
                    className="flex items-center gap-4 p-3 -mx-3 rounded-xl transition-[background-color,transform] duration-200 group cursor-pointer hover:bg-[--theme-border-soft]/60 active:scale-[0.98]"
                  >
                    {/* Icon bubble */}
                    <div className="inline-flex items-center justify-center w-13 h-13 rounded-xl bg-[--theme-border-soft] group-hover:bg-[--theme-surface-raised] text-[--theme-ink-secondary] group-hover:text-[--theme-ink] transition-colors duration-200 shrink-0 shadow-sm"
                      style={{ width: "3.25rem", height: "3.25rem" }}
                    >
                      {item.customIcon ? (
                        <img
                          src={getIconSrc(item.customIcon)}
                          className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                          alt=""
                        />
                      ) : Icon ? (
                        <Icon size={24} strokeWidth={1.5} />
                      ) : null}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[--theme-ink-muted] mb-0.5">
                        {item.label}
                      </span>
                      {item.lines.map((line, j) => (
                        <span
                          key={j}
                          className="text-[15px] font-medium text-[--theme-ink-muted] group-hover:text-[--theme-ink] transition-colors duration-200 leading-snug truncate"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
