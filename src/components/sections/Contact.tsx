import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Share2 } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Sede Principal',
    lines: ['Av. Corporativa 1234, Piso 15', 'Distrito Financiero, Buenos Aires, Argentina'],
    href: null,
  },
  {
    icon: Phone,
    title: 'Atención Telefónica',
    lines: ['+54 9 221 683 3008'],
    href: 'tel:+5492216833008',
  },
  {
    icon: Mail,
    title: 'Consultas y Asesoramiento',
    lines: ['consultas@dgconsultora.com.ar'],
    href: 'mailto:consultas@dgconsultora.com.ar',
  },
];

const SOCIALS = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/542216833008' },
  { icon: Share2, label: 'Redes', href: '#' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-medium uppercase tracking-brand text-[--theme-ink-muted] mb-4"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
          >
            Contacto Global
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="text-lg text-[--theme-ink-muted] leading-relaxed"
          >
            Nuestros asesores están disponibles para analizar los desafíos de su organización y diseñar soluciones a medida.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="p-8 rounded-lg bg-[--theme-surface-raised] border border-[--theme-border-soft] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          >
            <h3 className="text-xl font-semibold mb-8">Oficinas Centrales</h3>

            <div className="space-y-8">
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[--theme-border-soft] text-[--theme-ink-secondary] flex-shrink-0">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-[--theme-ink-muted] hover:text-[--theme-ink] transition-colors duration-200 font-medium"
                        >
                          {item.lines[0]}
                        </a>
                      ) : (
                        item.lines.map((line, j) => (
                          <p key={j} className="text-sm text-[--theme-ink-muted]">{line}</p>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-[--theme-border-soft]">
              <p className="text-sm font-semibold mb-4">Redes Profesionales</p>
              <div className="flex gap-2">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[--theme-border-soft] text-[--theme-ink-secondary] hover:bg-[--theme-border] hover:text-[--theme-ink] active:scale-[0.96] transition-[background-color,color,transform] duration-200"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="rounded-lg overflow-hidden border border-[--theme-border-soft] shadow-[0_1px_2px_rgba(0,0,0,0.03)] min-h-[400px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44366964724!2d-58.468200639943545!3d-34.61566249539304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88be5!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1716301321526!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
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
