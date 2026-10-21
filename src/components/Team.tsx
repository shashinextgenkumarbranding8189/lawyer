import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: 'Eleanor Voss',
    role: 'Partner · Securities Litigation',
    img: 'https://images.pexels.com/photos/32800771/pexels-photo-32800771.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Marcus Chen',
    role: 'Partner · Commercial Disputes',
    img: 'https://images.pexels.com/photos/39974539/pexels-photo-39974539.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Priya Natarajan',
    role: 'Senior Associate · White Collar',
    img: 'https://images.pexels.com/photos/38889892/pexels-photo-38889892.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Thomas Reyes',
    role: 'Of Counsel · Appellate',
    img: 'https://images.pexels.com/photos/37148282/pexels-photo-37148282.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold-500" />
              <span className="text-xs uppercase tracking-widest2 text-gold-400">
                The Firm
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-medium">
              Counsel behind <span className="italic text-gold-400">the counsel.</span>
            </h2>
          </div>
          <p className="text-ink-400 max-w-sm leading-relaxed font-light">
            Fourteen attorneys. Three former federal clerks. One shared
            standard — no case leaves this office underprepared.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-900"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-display text-2xl text-ink-50">{m.name}</h3>
                <p className="text-xs uppercase tracking-widest2 text-gold-400 mt-1.5">
                  {m.role}
                </p>
                <div className="mt-4 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href="#contact"
                    aria-label={`Email ${m.name}`}
                    className="grid place-items-center w-9 h-9 rounded-full border border-white/20 text-ink-200 hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 transition-colors"
                  >
                    <Mail size={15} />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`${m.name} on LinkedIn`}
                    className="grid place-items-center w-9 h-9 rounded-full border border-white/20 text-ink-200 hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 transition-colors"
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`Book with ${m.name}`}
                    className="grid place-items-center w-9 h-9 rounded-full border border-white/20 text-ink-200 hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 transition-colors"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
