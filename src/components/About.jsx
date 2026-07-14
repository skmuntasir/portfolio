import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">About Me</h2>

          <p className="mt-8 text-current/75 opacity-90 leading-relaxed text-base sm:text-lg font-light">
            I am a Computer Science student at BRAC University with a strong interest in
            software engineering, full-stack development, machine learning, causal AI, and
            computer graphics. I enjoy building practical software solutions while continuously
            exploring modern technologies and intelligent systems. Through academic and personal
            projects, I have developed experience in web development, machine learning, and
            desktop graphics applications. I have successfully completed my undergraduate thesis
            research, integrating Machine Learning and Causal Inference for food price forecasting
            and market shock analysis in Bangladesh. I am currently open to internship and
            full-time software engineering opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
