import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bus,
  Home,
  Leaf,
  DollarSign,
  Users,
  Building2,
  type LucideIcon,
} from 'lucide-react'
import { config } from '../config/candidate'

const ICON_MAP: Record<string, LucideIcon> = {
  Bus,
  Home,
  Leaf,
  DollarSign,
  Users,
  Building2,
}

export function Priorities() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="priorities"
      ref={ref}
      className="py-24 sm:py-32 bg-primary-900"
      aria-labelledby="priorities-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent-400 text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          >
            Platform
          </motion.span>

          <motion.h2
            id="priorities-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.08] text-balance"
          >
            What I'll Fight For
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/55 text-lg mt-5 leading-relaxed"
          >
            Six priorities shaped by what Cambridge families, workers, and businesses actually
            need from Regional Council.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Campaign priorities"
        >
          {config.priorities.map((priority, i) => {
            const Icon = ICON_MAP[priority.icon]
            return (
              <motion.article
                key={i}
                role="listitem"
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: 'easeOut' }}
                className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent-500/30 rounded-2xl p-7 transition-all duration-200 cursor-default"
              >
                <div
                  className="w-11 h-11 bg-accent-500/15 group-hover:bg-accent-500/25 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  aria-hidden="true"
                >
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-accent-400"
                      aria-hidden={true}
                    />
                  )}
                </div>

                <h3 className="font-display text-[1.2rem] font-bold text-white mb-3 leading-snug">
                  {priority.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {priority.description}
                </p>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
