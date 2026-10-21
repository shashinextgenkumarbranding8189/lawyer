import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Scale } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/40072144/pexels-photo-40072144.jpeg?auto=compress&cs=tinysrgb&w=940';

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.9, delay: 0.5 })
        .from(
          '.hero-line',
          { opacity: 0, y: 90, rotate: 2, duration: 1.2, stagger: 0.14 },
          '-=0.5'
        )
        .from('.hero-sub', { opacity: 0, y: 24, duration: 0.9 }, '-=0.7')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.8, stagger: 0.12 }, '-=0.6')
        .from('.hero-portrait', { opacity: 0, scale: 1.08, duration: 1.6 }, '-=1.2')
        .from('.hero-frame', { opacity: 0, x: 40, duration: 1 }, '-=1.1')
        .from('.hero-stat', { opacity: 0, y: 18, duration: 0.7, stagger: 0.1 }, '-=0.8');

      gsap.to('.hero-ornament', {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'none',
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-screen flex items-center overflow-hidden grain pt-28 pb-16"
    >
      {/* ambient glow */}
      <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-gold-500/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold-600/6 blur-[120px] pointer-events-none" />

      {/* giant background word */}
      <span
        aria-hidden
        className="hero-line absolute top-[16%] left-1/2 -translate-x-1/2 font-display text-[22vw] leading-none text-stroke opacity-[0.14] select-none pointer-events-none whitespace-nowrap"
      >
        JUSTICE
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left copy */}
        <div className="lg:col-span-7">
          <div className="hero-eyebrow flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold-500" />
            <span className="text-xs uppercase tracking-widest2 text-gold-400">
              Trial Attorney · New York
            </span>
          </div>

          <h1 className="font-display font-medium leading-[1.02] text-[clamp(3rem,8vw,6.5rem)]">
            <span className="hero-line block">Defending what</span>
            <span className="hero-line block">
              you've <span className="italic text-gold-400">built,</span>
            </span>
            <span className="hero-line block">with precision.</span>
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-ink-300 text-lg leading-relaxed font-light">
            Two decades of courtroom craft in complex civil litigation and
            corporate defense. When the stakes are existential, counsel should
            be measured in results — not hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="hero-cta group inline-flex items-center gap-2 bg-gold-500 text-ink-950 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest2 hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,162,74,0.35)]"
            >
              Book a Consultation
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#about"
              className="hero-cta inline-flex items-center gap-2 border border-ink-600 text-ink-200 px-8 py-4 rounded-full text-sm uppercase tracking-widest2 hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
            >
              The Story
            </a>
          </div>
        </div>

        {/* Right portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* rotating ornament */}
            <div className="hero-ornament absolute -top-8 -right-4 z-20 w-28 h-28 lg:w-32 lg:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gold-500/70">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text fill="currentColor" fontSize="8.5" letterSpacing="3.5">
                  <textPath href="#circlePath">
                    EST. 2004 · HALE & PARTNERS ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <Scale size={22} className="text-gold-400" strokeWidth={1.25} />
              </div>
            </div>

            <div className="hero-portrait relative overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-white/10 aspect-[3/4]">
              <img
                src={HERO_IMG}
                alt="Alexander Hale, attorney at law"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/20" />
            </div>

            {/* floating frame badge */}
            <div className="hero-frame absolute -left-6 lg:-left-12 bottom-10 bg-ink-900/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl">
              <p className="text-3xl font-display text-gold-400 leading-none">98%</p>
              <p className="text-[11px] uppercase tracking-widest2 text-ink-300 mt-1.5">
                Case Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom stats bar */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/5 bg-ink-950/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['20+', 'Years at the Bar'],
            ['400+', 'Cases Resolved'],
            ['$180M', 'Recovered for Clients'],
            ['15', 'Professional Honors'],
          ].map(([v, l]) => (
            <div key={l} className="hero-stat flex flex-col">
              <span className="font-display text-2xl md:text-3xl text-gold-400">{v}</span>
              <span className="text-[11px] uppercase tracking-widest2 text-ink-400 mt-1">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="hidden lg:grid absolute bottom-28 left-6 place-items-center w-11 h-11 rounded-full border border-ink-600 text-ink-400 hover:text-gold-400 hover:border-gold-500 transition-colors"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
