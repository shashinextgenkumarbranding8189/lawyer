import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Landmark, Quote } from 'lucide-react';

const OFFICE_IMG =
  'https://images.pexels.com/photos/8111872/pexels-photo-8111872.jpeg?auto=compress&cs=tinysrgb&w=940';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const credentials = [
  {
    icon: GraduationCap,
    title: 'Harvard Law School',
    detail: 'J.D., magna cum laude · Editor, Law Review',
  },
  {
    icon: Award,
    title: 'Super Lawyers distinction',
    detail: 'Top 100 attorney in New York, 2018–2025',
  },
  {
    icon: Landmark,
    title: 'Argued before the Second Circuit',
    detail: 'Landmark securities-fraud precedents',
  },
];

export default function About() {
  const root = useRef<HTMLElement>(null);
  const inView = useInView(root, { once: true, margin: '-120px' });

  return (
    <section id="about" ref={root} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl aspect-[4/5] border border-white/10">
            <img
              src={OFFICE_IMG}
              alt="Hale & Partners office"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute -bottom-8 -right-4 lg:-right-10 max-w-xs bg-ink-900 border border-gold-500/25 rounded-2xl p-6 shadow-2xl"
          >
            <Quote size={20} className="text-gold-400 mb-3" />
            <p className="font-display text-lg italic leading-snug text-ink-100">
              "The courtroom is won long before the trial begins."
            </p>
          </motion.blockquote>
        </motion.div>

        {/* Text side */}
        <div>
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : undefined}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-gold-500" />
            <span className="text-xs uppercase tracking-widest2 text-gold-400">
              About Alexander
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : undefined}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-medium"
          >
            A advocate shaped by <span className="italic text-gold-400">two decades</span> of verdicts.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : undefined}
            className="mt-8 space-y-5 text-ink-300 leading-relaxed font-light"
          >
            <p>
              Alexander Hale began his career as a federal clerk before joining
              one of the nation's most demanding litigation boutiques. In 2004,
              he founded Hale & Partners on a simple conviction: every client
              deserves the preparation of a trial team and the attention of a
              trusted counselor.
            </p>
            <p>
              He has tried more than 60 cases to verdict across securities
              disputes, shareholder actions, and high-stakes commercial
              litigation — and he is at his best when the matter is the one
              keeping you up at night.
            </p>
          </motion.div>

          <div className="mt-10 space-y-6">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                custom={3 + i}
                initial="hidden"
                animate={inView ? 'visible' : undefined}
                className="flex items-start gap-4 group"
              >
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl border border-gold-500/30 text-gold-400 group-hover:bg-gold-500 group-hover:text-ink-950 transition-colors duration-300">
                  <c.icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-medium text-ink-100">{c.title}</p>
                  <p className="text-sm text-ink-400 mt-0.5">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
