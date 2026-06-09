import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Heart, ChevronDown, ShieldCheck, Info } from 'lucide-react'
import { config } from '../config/candidate'

function fadeUp(delay = 0) {
  return {
    initial:  { opacity: 0, y: 30 },
    animate:  { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }
}

export function Donate() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openRule, setOpenRule] = useState<number | null>(null)

  const toggle = (i: number) => setOpenRule(prev => (prev === i ? null : i))

  return (
    <section
      id="donate"
      ref={ref}
      className="py-24 sm:py-32 bg-primary-900"
      aria-labelledby="donate-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <motion.span
            {...(inView ? fadeUp(0) : { initial: { opacity: 0 } })}
            className="inline-flex items-center gap-2 text-accent-400 text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          >
            <Heart size={13} aria-hidden="true" />
            Support the Campaign
          </motion.span>

          <motion.h2
            id="donate-heading"
            {...(inView ? fadeUp(0.08) : { initial: { opacity: 0 } })}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.08] mb-5"
          >
            Help Us Reach Every<br className="hidden sm:block" /> Cambridge Resident
          </motion.h2>

          <motion.p
            {...(inView ? fadeUp(0.16) : { initial: { opacity: 0 } })}
            className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Grassroots contributions fund lawn signs, canvassing materials, and community
            events that let us have real conversations with neighbours across Cambridge.
          </motion.p>
        </div>

        {/* ── Primary CTA ── */}
        <motion.div
          {...(inView ? fadeUp(0.24) : { initial: { opacity: 0 } })}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={config.donation.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate to the campaign (opens external site in a new tab)"
            className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_4px_32px_rgba(232,149,32,0.35)] hover:shadow-[0_4px_48px_rgba(232,149,32,0.5)]"
          >
            <Heart
              size={22}
              className="group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            Donate Now
            <ExternalLink size={16} className="opacity-70" aria-hidden="true" />
          </a>

          <p className="text-white/40 text-sm text-center sm:text-left max-w-xs leading-snug">
            Processed securely through our campaign platform. Max $1,200 per contributor.
          </p>
        </motion.div>

        {/* ── Rules accordion ── */}
        <motion.div
          {...(inView ? fadeUp(0.32) : { initial: { opacity: 0 } })}
          className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Accordion header */}
          <div className="flex items-center gap-3 px-7 py-5 border-b border-white/10">
            <ShieldCheck size={20} className="text-accent-400 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-white font-semibold">Ontario Municipal Elections Act — Donation Rules</p>
              <p className="text-white/45 text-xs mt-0.5">
                All contributions are governed by provincial law. Click any rule to learn more.
              </p>
            </div>
          </div>

          {/* Rules list */}
          <ul role="list" aria-label="Ontario MEA donation rules">
            {config.donation.rules.map((rule, i) => (
              <li key={i} className="border-b border-white/[0.07] last:border-0">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openRule === i}
                  aria-controls={`rule-detail-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-7 py-4 text-left hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center shrink-0 text-accent-400"
                      aria-hidden="true"
                    >
                      <Info size={11} />
                    </span>
                    <span className="text-white/85 text-sm font-medium">{rule.heading}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={[
                      'text-white/40 shrink-0 transition-transform duration-200',
                      openRule === i ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openRule === i && (
                    <motion.div
                      id={`rule-detail-${i}`}
                      role="region"
                      aria-label={rule.heading}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-5 pt-1 text-white/55 text-sm leading-relaxed pl-[3.5rem]">
                        {rule.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Footer note */}
          <div className="px-7 py-4 bg-white/[0.02] border-t border-white/[0.07] flex items-start gap-2">
            <ShieldCheck size={14} className="text-accent-500/70 mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-white/35 text-xs leading-relaxed">
              For complete rules, see the{' '}
              <a
                href="https://www.ontario.ca/laws/statute/96m32"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500/70 hover:text-accent-400 underline underline-offset-2 transition-colors"
                aria-label="Ontario Municipal Elections Act, 1996 (opens in new tab)"
              >
                Ontario Municipal Elections Act, 1996
              </a>
              . {config.donation.note}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
