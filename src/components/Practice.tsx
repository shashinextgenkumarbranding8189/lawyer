import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Landmark, Users, ShieldCheck, ScrollText, Gavel, Plus } from 'lucide-react';

const areas = [
  {
    icon: Briefcase,
    title: 'Commercial Litigation',
    desc: 'Contract breaches, partnership disputes, and business torts handled from demand letter through verdict and appeal.',
    tags: ['Contract Disputes', 'Business Torts', 'Appeals'],
  },
  {
    icon: Landmark,
    title: 'Securities & Finance',
    desc: 'Defense of issuers, funds, and officers in shareholder actions, regulatory inquiries, and complex derivative suits.',
    tags: ['SEC Defense', 'Shareholder Suits', 'Derivatives'],
  },
  {
    icon: ShieldCheck,
    title: 'Criminal Defense',
    desc: 'White-collar and serious felony defense with discreet, aggressive representation at every stage of the process.',
    tags: ['White Collar', 'Federal', 'Investigations'],
  },
  {
    icon: Users,
    title: 'Employment Law',
    desc: 'Counsel for executives and employers on restrictive covenants, separations, discrimination claims, and disputes.',
    tags: ['Executive Counsel', 'Wrongful Termination', 'Contracts'],
  },
  {
    icon: ScrollText,
    title: 'Estate & Trust',
    desc: 'Estate planning, probate administration, and contested trust litigation protecting legacies across generations.',
    tags: ['Wills & Trusts', 'Probate', 'Contests'],
  },
  {
    icon: Gavel,
    title: 'Arbitration & Mediation',
    desc: 'Alternative dispute resolution for parties seeking finality without the cost and exposure of a public trial.',
    tags: ['AAA Arbitration', 'Mediation', 'Settlements'],
  },
];

export default function Practice() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="practice" ref={ref} className="relative py-28 lg:py-36">
      <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] rounded-full bg-gold-500/6 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold-500" />
            <span className="text-xs uppercase tracking-widest2 text-gold-400">
              Areas of Practice
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-medium">
            Focused practice. <span className="italic text-gold-400">Uncompromising</span> depth.
          </h2>
          <p className="mt-6 text-ink-300 font-light leading-relaxed">
            Six disciplines, one standard of preparation. Hover a card to see
            how each engagement actually unfolds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-900/60 p-8 cursor-pointer transition-colors duration-500 hover:border-gold-500/40"
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-start justify-between">
                <span className="grid place-items-center w-12 h-12 rounded-xl border border-gold-500/30 text-gold-400 group-hover:bg-gold-500 group-hover:text-ink-950 transition-colors duration-500">
                  <a.icon size={20} strokeWidth={1.5} />
                </span>
                <Plus
                  size={18}
                  className={`text-ink-500 transition-transform duration-500 ${
                    active === i ? 'rotate-45 text-gold-400' : ''
                  }`}
                />
              </div>

              <h3 className="mt-6 font-display text-2xl text-ink-100">{a.title}</h3>
              <p className="mt-3 text-sm text-ink-400 leading-relaxed">{a.desc}</p>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5 flex flex-wrap gap-2">
                      {a.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] uppercase tracking-wider border border-gold-500/30 text-gold-400 rounded-full px-3 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
