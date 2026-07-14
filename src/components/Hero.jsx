import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Software Engineer', 'Full-Stack Developer', 'Machine Learning Enthusiast'];

function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 30, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.16), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-current/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            open to internship &amp; full-time roles
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Sk Tasrian
            <br />
            <span className="text-gradient">Muntasir</span>
          </h1>

          <p className="mt-5 h-7 font-mono text-base sm:text-lg text-[var(--color-accent-2)]">
            {typed}
            <span className="inline-block w-[2px] h-5 align-middle bg-[var(--color-accent-2)] ml-0.5 animate-pulse" />
          </p>

          <p className="mt-5 max-w-xl text-current/70 opacity-80 leading-relaxed">
            Full-stack developer and aspiring AI engineer passionate about building modern web
            applications, intelligent systems, and practical solutions that make an impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="justify-self-center"
        >
          <div
            className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full p-1"
            style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-2))' }}
          >
            <div
              className="h-full w-full rounded-full grid place-items-center overflow-hidden"
              style={{ background: 'var(--color-ink-900)' }}
            >
              {/* Replace src below with your own photo, e.g. /profile.jpg */}
              <img
                src="/profile.jpg"
                alt="Sk Tasrian Muntasir"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center text-5xl font-bold text-white/90"
                style={{ background: 'linear-gradient(135deg, var(--color-ink-800), var(--color-ink-700))' }}
              >
                SM
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
