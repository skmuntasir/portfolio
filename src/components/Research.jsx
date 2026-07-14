import { motion } from 'framer-motion';

export default function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Research</h2>

          <p className="mt-8 text-current/75 opacity-90 leading-relaxed text-base sm:text-lg font-light">
            Completed undergraduate research focused on integrating{' '}
            <strong className="font-medium text-current">Machine Learning</strong> and{' '}
            <strong className="font-medium text-current">Causal Inference</strong> for food price
            forecasting and market shock analysis in Bangladesh. The research explored
            data-driven approaches to improve forecasting accuracy and understand causal
            relationships in economic trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
