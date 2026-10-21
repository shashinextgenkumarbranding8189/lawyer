import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Scale, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [year] = useState(new Date().getFullYear());

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 origin-left z-[70]"
      />

      <footer className="relative border-t border-white/8 bg-ink-900/50">
        {/* big CTA band */}
        <div className="mx-auto max-w-7xl px-6 py-20 text-center border-b border-white/8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-medium"
          >
            Ready when <span className="italic text-gold-400">you are.</span>
          </motion.h2>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 inline-flex items-center gap-2 border border-gold-500/50 text-gold-400 px-10 py-4 rounded-full text-sm uppercase tracking-widest2 hover:bg-gold-500 hover:text-ink-950 transition-all duration-300"
          >
            Schedule a Call
          </motion.a>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-full border border-gold-500/40 text-gold-400">
                <Scale size={16} strokeWidth={1.5} />
              </span>
              <span className="font-display text-xl">
                Hale <span className="text-gold-400 italic">& Partners</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-ink-400 leading-relaxed max-w-xs font-light">
              Strategic litigation and counsel for clients who cannot afford to
              lose. New York · Nationwide representation.
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="text-[11px] uppercase tracking-widest2 text-ink-500 mb-4">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {[
                ['About', '#about'],
                ['Practice', '#practice'],
                ['Experience', '#experience'],
                ['Testimonials', '#testimonials'],
                ['Team', '#team'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-ink-400 hover:text-gold-400 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end flex flex-col items-start md:items-end gap-4">
            <p className="text-[11px] uppercase tracking-widest2 text-ink-500">
              Emergency counsel line
            </p>
            <a
              href="tel:+12125550184"
              className="font-display text-2xl text-gold-400 hover:text-gold-300 transition-colors"
            >
              +1 (212) 555-0184
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="mt-2 grid place-items-center w-11 h-11 rounded-full border border-ink-600 text-ink-300 hover:border-gold-500 hover:text-gold-400 transition-colors"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-500">
            <p>© {year} Hale & Partners LLP. All rights reserved.</p>
            <p>
              Attorney advertising. Prior results do not guarantee a similar
              outcome.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
