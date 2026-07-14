import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/achievements';
import { HiOutlineTrophy, HiOutlineCheckBadge } from 'react-icons/hi2';

function Card({ title, org, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[var(--color-accent-2)] transition-colors"
    >
      <span className="shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-[var(--color-accent-2)]">
        <Icon size={18} />
      </span>
      <div>
        <h3 className="font-semibold text-sm sm:text-base leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-current/60 opacity-80">{org}</p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Achievements &amp; Certifications
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-current/50 opacity-70 mb-4">
              Achievements
            </h3>
            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => (
                <Card key={a.title} title={a.title} org={a.org} icon={HiOutlineTrophy} delay={i * 0.08} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-current/50 opacity-70 mb-4">
              Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {certifications.map((c, i) => (
                <Card key={c.title} title={c.title} org={c.org} icon={HiOutlineCheckBadge} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
