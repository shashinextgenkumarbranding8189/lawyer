import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const inputCls =
  'w-full bg-ink-900/70 border border-white/10 rounded-xl px-5 py-4 text-ink-100 placeholder:text-ink-500 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/15 transition-all duration-300';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-gold-500/7 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-14 lg:gap-20">
        {/* Info side */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold-500" />
            <span className="text-xs uppercase tracking-widest2 text-gold-400">
              Get in Touch
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-medium">
            Your case deserves <span className="italic text-gold-400">a conversation.</span>
          </h2>
          <p className="mt-6 text-ink-300 leading-relaxed font-light">
            The first consultation is free and confidential. Tell us where you
            stand — we'll tell you plainly what we'd do.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { icon: MapPin, label: 'Office', value: '590 Madison Avenue, 38th Floor, New York, NY' },
              { icon: Phone, label: 'Phone', value: '+1 (212) 555-0184' },
              { icon: Mail, label: 'Email', value: 'chambers@halepartners.law' },
              { icon: Clock, label: 'Hours', value: 'Mon – Fri · 8:00 AM – 7:00 PM ET' },
            ].map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl border border-gold-500/30 text-gold-400">
                  <c.icon size={17} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest2 text-ink-500">
                    {c.label}
                  </p>
                  <p className="text-ink-100 mt-1">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <div className="relative rounded-3xl border border-white/10 bg-ink-900/60 backdrop-blur p-8 md:p-10 grain overflow-hidden">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <CheckCircle2 size={56} className="mx-auto text-gold-400 mb-6" strokeWidth={1.25} />
                <h3 className="font-display text-3xl">Message received.</h3>
                <p className="mt-3 text-ink-300 max-w-sm mx-auto font-light">
                  Thank you for reaching out. A member of the team will respond
                  within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs uppercase tracking-widest2 text-gold-400 hover:text-gold-300 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] uppercase tracking-widest2 text-ink-400 mb-2">
                      Full Name
                    </label>
                    <input id="name" required placeholder="Jane Doe" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-widest2 text-ink-400 mb-2">
                      Email
                    </label>
                    <input id="email" type="email" required placeholder="jane@company.com" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label htmlFor="matter" className="block text-[11px] uppercase tracking-widest2 text-ink-400 mb-2">
                    Type of Matter
                  </label>
                  <select id="matter" className={`${inputCls} appearance-none cursor-pointer`} defaultValue="Commercial Litigation">
                    {[
                      'Commercial Litigation',
                      'Securities & Finance',
                      'Criminal Defense',
                      'Employment Law',
                      'Estate & Trust',
                      'Arbitration & Mediation',
                      'Other',
                    ].map((o) => (
                      <option key={o} className="bg-ink-900">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-widest2 text-ink-400 mb-2">
                    Brief Description
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="A short, confidential summary of your situation…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 text-ink-950 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest2 hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,162,74,0.35)]"
                >
                  Request Consultation
                  <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <p className="text-xs text-ink-500 leading-relaxed">
                  Submitting this form does not create an attorney–client
                  relationship. Please do not include highly sensitive
                  information until an engagement is confirmed.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
