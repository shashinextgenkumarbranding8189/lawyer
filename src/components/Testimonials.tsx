import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Alexander took a case three other firms called unwinnable and tried it flawlessly. The verdict changed the trajectory of our company.',
    name: 'Meredith Lang',
    role: 'CEO, Langfield Capital',
  },
  {
    quote:
      'Precise, calm, and utterly prepared. Opposing counsel settled within weeks once they understood who was across the table.',
    name: 'David Okafor',
    role: 'General Counsel, Meridian Health',
  },
  {
    quote:
      'He treated my family matter with the same rigor as a corporate case. I never once felt like a file number.',
    name: 'Sofia Ramirez',
    role: 'Private Client',
  },
  {
    quote:
      'The rare litigator who writes as brilliantly as he argues. Our appellate win set the standard our industry now follows.',
    name: 'James Whitfield',
    role: 'Managing Partner, Whitfield & Co.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    timer.current = setInterval(() => go(1), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-ink-900/40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-gold-500/7 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-gold-500" />
          <span className="text-xs uppercase tracking-widest2 text-gold-400">
            Client Voices
          </span>
          <span className="h-px w-12 bg-gold-500" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          Trusted when it <span className="italic text-gold-400">matters most.</span>
        </h2>

        <div className="relative mt-14 min-h-[16rem] md:min-h-[13rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Quote size={30} className="mx-auto text-gold-500/60 mb-6" />
              <blockquote className="font-display text-2xl md:text-[1.7rem] italic leading-relaxed text-ink-100">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold tracking-wide text-ink-100">{t.name}</p>
                <p className="text-xs uppercase tracking-widest2 text-ink-400 mt-1">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid place-items-center w-11 h-11 rounded-full border border-ink-600 text-ink-300 hover:border-gold-500 hover:text-gold-400 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-8 bg-gold-400' : 'w-1.5 bg-ink-600 hover:bg-ink-500'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid place-items-center w-11 h-11 rounded-full border border-ink-600 text-ink-300 hover:border-gold-500 hover:text-gold-400 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
