import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2004',
    title: 'Hale & Partners founded',
    desc: 'Opened the doors with a two-person team and a single conviction: meticulous preparation beats raw talent.',
  },
  {
    year: '2009',
    title: 'First nine-figure verdict',
    desc: 'Led a shareholder class action to a landmark $112M judgment in the Southern District of New York.',
  },
  {
    year: '2015',
    title: 'Chambers & Partners ranking',
    desc: 'Recognized Band 1 in New York commercial litigation — a ranking held every year since.',
  },
  {
    year: '2019',
    title: 'Second Circuit precedent',
    desc: 'Argued and won the appeal that reshaped the standard for fiduciary-duty claims in fund governance.',
  },
  {
    year: '2024',
    title: '20 years at the bar',
    desc: 'The firm now counts 14 attorneys, three of them former federal clerks, and a docket spanning four circuits.',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.55'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setActive(Math.min(milestones.length - 1, Math.floor(v * milestones.length + 0.35)));
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <section id="experience" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 -left-40 w-[26rem] h-[26rem] rounded-full bg-gold-500/6 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold-500" />
            <span className="text-xs uppercase tracking-widest2 text-gold-400">
              Career Timeline
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-medium">
            Two decades, <span className="italic text-gold-400">five turning points.</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* track */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-ink-700 md:-translate-x-1/2" />
          {/* progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-1/2 top-0 w-px bg-gradient-to-b from-gold-400 to-gold-600 md:-translate-x-1/2"
          />

          <div className="space-y-14 md:space-y-20">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const isActive = i <= active;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-[19px] md:left-1/2 -translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? 'bg-gold-400 border-gold-400 shadow-[0_0_18px_rgba(217,185,106,0.6)]'
                        : 'bg-ink-900 border-ink-600'
                    }`}
                  />

                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'
                    }`}
                  >
                    <p className="font-display text-5xl md:text-6xl text-stroke font-medium leading-none">
                      {m.year}
                    </p>
                    <h3 className="mt-3 text-xl font-medium text-ink-100">{m.title}</h3>
                    <p
                      className={`mt-2 text-ink-400 leading-relaxed max-w-md font-light ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      {m.desc}
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
