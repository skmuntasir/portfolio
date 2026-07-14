import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';

export default function Technologies() {
  return (
    <section id="tech" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Technologies</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-10">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group flex flex-col items-center gap-3 rounded-2xl py-4 transition-colors hover:bg-white/[0.03]"
            >
              <tech.icon
                size={30}
                style={tech.color ? { color: tech.color } : undefined}
                className={`transition-transform duration-300 ease-out group-hover:scale-110 ${
                  tech.color ? '' : 'text-current/70'
                }`}
              />
              <span className="text-sm text-current/65 transition-colors group-hover:text-current">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}