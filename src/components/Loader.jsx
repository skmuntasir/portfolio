import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950 dark:bg-ink-950"
          style={{ backgroundColor: 'var(--color-ink-950)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="font-mono text-sm tracking-widest text-white/70 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent-2)]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
            />
            sk.dev — loading
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
