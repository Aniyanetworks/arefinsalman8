import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Briefcase, Star, type LucideIcon } from 'lucide-react'
import { HeartHandshake } from 'lucide-react'
import { config } from '../config/candidate'

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Briefcase,
  HeartHandshake,
  Star,
}

function fadeUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 32 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }
}

export function RootedInCommunity() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const section = config.rootedInCommunity

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 bg-surface"
      aria-labelledby="rooted-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            {...(inView ? fadeUp(0) : { initial: { opacity: 0 } })}
            className="inline-block text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          >
            About Salman
          </motion.span>

          <motion.h2
            id="rooted-heading"
            {...(inView ? fadeUp(0.08) : { initial: { opacity: 0 } })}
            className="font-display text-4xl sm:text-5xl font-bold text-primary-dark leading-[1.08] mb-6 text-balance"
          >
            {section.headline}
          </motion.h2>

          <motion.p
            {...(inView ? fadeUp(0.16) : { initial: { opacity: 0 } })}
            className="text-primary/80 text-lg leading-relaxed"
          >
            {section.description}
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.pillars.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon]
            return (
              <motion.div
                key={i}
                {...(inView ? fadeUp(0.1 + i * 0.1) : { initial: { opacity: 0 } })}
                className="group bg-white border border-primary/10 hover:border-teal/30 rounded-2xl p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 bg-primary group-hover:bg-primary-light rounded-xl flex items-center justify-center mb-5 transition-colors"
                  aria-hidden="true"
                >
                  {Icon && <Icon size={22} className="text-teal" aria-hidden="true" />}
                </div>
                <h3 className="font-display text-lg font-bold text-primary-dark mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-primary/70 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
