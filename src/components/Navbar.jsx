import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';

const links = [
  { href: '#about', label: 'About' },
  { href: '#tech', label: 'Tech' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/skmuntasir', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sk-tasrian-muntasir/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/sheikh_muntasir_/', label: 'Instagram' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? 'glass-strong' : ''}`}>
          <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-white/90 dark:text-white/90" style={{ color: 'inherit' }}>
            sk<span className="text-[var(--color-accent-2)]">.</span>dev
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-current/70 opacity-70 hover:opacity-100 transition-opacity rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 pr-1 mr-1 border-r border-white/10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-8 w-8 place-items-center rounded-lg text-current/60 hover:text-[var(--color-accent-2)] transition-colors"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:border-[var(--color-accent-2)] transition-colors"
            >
              {theme === 'dark' ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-white/10"
            >
              {open ? <HiXMark size={16} /> : <HiBars3 size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-1 pt-2 border-t border-white/10 flex items-center gap-1 px-1 sm:hidden">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg text-current/60 hover:text-[var(--color-accent-2)] transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
