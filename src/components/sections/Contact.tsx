import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import dgLogo from "../../assets/dg-consultora-resize.png";

const OFFICES = [
  {
    label: "Oficina CABA",
    lines: ["San Martín N° 66 of. 315", "CABA"],
    href: "https://maps.google.com/?q=San+Martin+66+CABA+Buenos+Aires",
  },
  {
    label: "Oficina La Plata",
    lines: ["Calle 10 N° 686 PB of. B", "La Plata"],
    href: "https://maps.google.com/?q=Calle+10+686+La+Plata+Buenos+Aires",
  },
];

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
    href: "mailto:contacto@dgconsultora.com.ar",
  },
];

const SOCIAL_INFO = [
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
        {/* Section header — always centered */}
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

        {/* Main 2-column grid on desktop, stacked on mobile */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── Column 1: Logo — centered on mobile, left panel on desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="flex items-center justify-center p-8 rounded-lg bg-[--theme-surface-raised] border border-[--theme-border-soft] shadow-[0_1px_2px_rgba(0,0,0,0.03)] min-h-[200px] lg:min-h-0"
          >
            <img
              src={getIconSrc(dgLogo)}
              alt="DG Integral Consultora"
              className="w-48 sm:w-56 lg:w-full lg:max-w-[220px] h-auto object-contain"
            />
          </motion.div>

          {/* ── Column 2: Contact info + social ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="p-8 rounded-lg bg-[--theme-surface-raised] border border-[--theme-border-soft] shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col justify-center"
          >
            <div className="space-y-1">
              {/* Office locations */}
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[--theme-ink-muted] px-4 mb-2">
                Nuestras sedes
              </p>
              {OFFICES.map((office, i) => (
                <a
                  key={i}
                  href={office.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 -mx-4 rounded-xl transition-[background-color,transform] duration-200 group cursor-pointer hover:bg-[--theme-border-soft]/50 active:scale-[0.98]"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[--theme-border-soft] group-hover:bg-white dark:group-hover:bg-white/10 text-[--theme-ink-secondary] group-hover:text-[--theme-ink] transition-colors duration-200 shrink-0 shadow-sm mt-0.5">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[--theme-ink-secondary] leading-none mb-1">
                      {office.label}
                    </span>
                    {office.lines.map((line, j) => (
                      <span
                        key={j}
                        className="text-[15px] font-medium text-[--theme-ink-muted] group-hover:text-[--theme-ink] transition-colors duration-200 leading-relaxed"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </a>
              ))}

              {/* Divider */}
              <div className="w-full h-px bg-[--theme-border-soft] !my-3" />

              {/* Phone / email */}
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 -mx-4 rounded-xl transition-[background-color,transform] duration-200 group cursor-pointer hover:bg-[--theme-border-soft]/50 active:scale-[0.98]"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[--theme-border-soft] group-hover:bg-white dark:group-hover:bg-white/10 text-[--theme-ink-secondary] group-hover:text-[--theme-ink] transition-colors duration-200 shrink-0 shadow-sm">
                      <Icon size={20} strokeWidth={1.5} />
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
                  </a>
                );
              })}

              {/* Divider */}
              <div className="w-full h-px bg-[--theme-border-soft] !my-3" />

              {/* Social links — centered row on mobile, left-aligned on sm+ */}
              <div className="flex flex-row justify-center sm:justify-start gap-3 pt-1">
                {SOCIAL_INFO.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl transition-[background-color,transform] duration-200 group cursor-pointer hover:bg-[--theme-border-soft]/50 active:scale-[0.98] flex-1 sm:flex-none sm:flex-row sm:gap-4"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[--theme-border-soft] group-hover:bg-white dark:group-hover:bg-white/10 text-[--theme-ink-secondary] group-hover:text-[--theme-ink] transition-colors duration-200 shrink-0 overflow-hidden shadow-sm">
                      <img
                        src={getIconSrc(item.customIcon)}
                        className="w-5 h-5 object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-200"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[--theme-ink-muted] leading-none mb-0.5">
                        {item.label}
                      </span>
                      {item.lines.map((line, j) => (
                        <span
                          key={j}
                          className="text-[13px] font-medium text-[--theme-ink-muted] group-hover:text-[--theme-ink] transition-colors duration-200 leading-relaxed text-center sm:text-left"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
