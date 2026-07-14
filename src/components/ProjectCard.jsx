import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowTopRightOnSquare, HiPhoto } from 'react-icons/hi2';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-[var(--color-accent-2)] transition-colors"
    >
      {/* Screenshot placeholder — drop an image at the path in project.image to replace */}
      <div className="relative aspect-video bg-white/[0.03] flex items-center justify-center border-b border-white/10 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-current/30 opacity-50">
            <HiPhoto size={32} />
            <span className="font-mono text-[11px]">screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mt-2.5 text-sm text-current/70 opacity-80 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[11px] font-mono text-current/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-sm hover:border-[var(--color-accent-2)] hover:text-[var(--color-accent-2)] transition-colors"
          >
            <FaGithub size={14} /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-3.5 py-2 text-sm text-white hover:bg-[var(--color-accent-2)] transition-colors"
            >
              <HiArrowTopRightOnSquare size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
