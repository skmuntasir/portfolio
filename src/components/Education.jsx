import { motion } from 'framer-motion';
import { education } from '../data/education';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Education</h2>
        </motion.div>

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-white/10" />
          <div className="flex flex-col gap-10">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1 grid h-5 w-5 place-items-center rounded-full"
                  style={{ background: 'var(--color-ink-950)', border: '2px solid var(--color-accent-2)' }}
                >
                  <HiOutlineAcademicCap size={11} className="text-[var(--color-accent-2)]" />
                </span>
                <h3 className="font-semibold text-base sm:text-lg">{ed.school}</h3>
                <p className="mt-1.5 text-sm sm:text-base text-current/70 opacity-80 font-light">{ed.degree}</p>
                {(ed.period || ed.detail) && (
                  <p className="mt-2 text-sm font-medium text-current/70">
                    {ed.period || ed.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
