import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

const CONTACT_INFO = [
  {
    icon: MapPin,
    lines: [
      "Av. Corporativa 1234, Piso 15",
      "Distrito Financiero, Buenos Aires, Argentina",
    ],
    href: null,
  },
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

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="rounded-lg overflow-hidden border border-[--theme-border-soft] shadow-[0_1px_2px_rgba(0,0,0,0.03)] min-h-[300px] sm:min-h-[400px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44366964724!2d-58.468200639943545!3d-34.61566249539304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88be5!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1716301321526!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación DG Integral Consultora"
              className="dark:invert dark:hue-rotate-180 dark:contrast-75"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
