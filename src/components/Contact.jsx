import { motion } from 'framer-motion';
import { HiEnvelope, HiPhone, HiMapPin, HiArrowDownTray } from 'react-icons/hi2';

const info = [
  { icon: HiEnvelope, label: 'Email', value: 'tasrianmuntasir@gmail.com', href: 'mailto:tasrianmuntasir@gmail.com' },
  { icon: HiPhone, label: 'Phone', value: '+8801969498994', href: 'tel:+8801969498994' },
  { icon: HiMapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-5 text-current/70 opacity-80 font-light max-w-xl mx-auto">
            Have a role, project, or just want to say hi? Reach out — I usually reply within a day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16"
        >
          {info.map((it) => (
            <div key={it.label} className="flex flex-col items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 border border-white/10 text-[var(--color-accent-2)]">
                <it.icon size={18} />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-current/50 opacity-70">
                  {it.label}
                </p>
                {it.href ? (
                  <a href={it.href} className="mt-1 block text-sm hover:text-[var(--color-accent-2)] transition-colors">
                    {it.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm">{it.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          {/* Opens the PDF in a new tab; the browser's built-in PDF viewer provides its own download control. */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--color-accent-2)] transition-colors"
          >
            <HiArrowDownTray size={16} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
