import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

const CONTACT_INFO = [
  {
    icon: Phone,
    lines: ["+54 9 221 683 3008"],
    href: "tel:+5492216833008",
  },
  {
    icon: Mail,
    lines: ["consultas@dgconsultora.com.ar"],
    href: "mailto:consultas@dgconsultora.com.ar",
  },
  {
    customIcon: whatsappIcon,
    lines: ["+54 9 221 683 3008"],
    href: "https://wa.me/5492216833008",
  },
  {
    customIcon: instagramIcon,
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

        <div className="max-w-md mx-auto">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="p-8 rounded-lg bg-[--theme-surface-raised] border border-[--theme-border-soft] shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col justify-center"
          >
            <div className="space-y-2">
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http")
                        ? "_blank"
                        : undefined,
                      rel: item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined,
                    }
                  : {};

                return (
                  <Wrapper
                    key={i}
                    {...(wrapperProps as any)}
                    className={`flex items-center gap-4 p-4 -mx-4 rounded-xl transition-[background-color,transform] duration-200 group ${
                      item.href
                        ? "cursor-pointer hover:bg-[--theme-border-soft]/50 active:scale-[0.98]"
                        : ""
                    }`}
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[--theme-border-soft] group-hover:bg-white dark:group-hover:bg-white/10 text-[--theme-ink-secondary] group-hover:text-[--theme-ink] transition-colors duration-200 shrink-0 overflow-hidden shadow-sm">
                      {item.customIcon ? (
                        <img
                          src={getIconSrc(item.customIcon)}
                          className="w-5 h-5 object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-200"
                          alt=""
                        />
                      ) : Icon ? (
                        <Icon size={20} strokeWidth={1.5} />
                      ) : null}
                    </div>
                    <div className="flex flex-col">
                      {item.lines.map((line, j) => (
                        <span
                          key={j}
                          className="text-[15px] font-medium text-[--theme-ink-muted] group-hover:text-[--theme-ink] transition-colors duration-200 leading-relaxed"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
