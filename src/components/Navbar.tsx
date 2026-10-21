import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Practice', href: '#practice' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center w-9 h-9 rounded-full border border-gold-500/40 text-gold-400 group-hover:bg-gold-500 group-hover:text-ink-950 transition-colors duration-300">
              <Scale size={16} strokeWidth={1.5} />
            </span>
            <span className="font-display text-xl tracking-wide">
              Alexander <span className="text-gold-400 italic">Hale</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-widest2 text-ink-300 hover:text-gold-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[13px] uppercase tracking-widest2 border border-gold-500/50 text-gold-400 px-5 py-2.5 rounded-full hover:bg-gold-500 hover:text-ink-950 transition-all duration-300"
            >
              Consultation
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-ink-100 p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-950/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl text-gold-400">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-ink-100 hover:text-gold-400"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="font-display text-4xl py-3 text-ink-100 hover:text-gold-400 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 text-sm uppercase tracking-widest2 border border-gold-500/50 text-gold-400 px-8 py-3.5 rounded-full"
              >
                Free Consultation
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
