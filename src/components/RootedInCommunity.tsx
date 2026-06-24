import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Briefcase, Star, type LucideIcon } from 'lucide-react'
import { HeartHandshake } from 'lucide-react'
import { config } from '../config/candidate'
import { NetworkGraphic } from './NetworkGraphic'

const ICON_MAP: Record<string, LucideIcon> = { Users, Briefcase, HeartHandshake, Star }

const CARD_META = [
  { gradientStyle: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)', iconBg: 'bg-white/15',  iconColor: 'text-white',  accent: 'bg-teal',   glow: 'bg-teal'   },
  { gradientStyle: 'linear-gradient(135deg, #6B2FA0 0%, #4A1E7A 55%, #0A1F5C 100%)', iconBg: 'bg-white/15',  iconColor: 'text-white',  accent: 'bg-purple', glow: 'bg-purple' },
  { gradientStyle: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)', iconBg: 'bg-white/15',  iconColor: 'text-white',  accent: 'bg-teal',   glow: 'bg-teal'   },
  { gradientStyle: 'linear-gradient(135deg, #6B2FA0 0%, #4A1E7A 55%, #0A1F5C 100%)', iconBg: 'bg-white/15',  iconColor: 'text-white',  accent: 'bg-purple', glow: 'bg-purple' },
]

export function RootedInCommunity() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const section = config.rootedInCommunity

  return (
    <section
      ref={ref}
      className="relative py-14 sm:py-24 bg-primary-dark overflow-hidden"
      aria-labelledby="rooted-heading"
    >
      {/* Hex dot background */}
      <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-bg" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-bg)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 bg-teal pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 bg-purple pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header — headline left + network graphic right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-block text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-5"
            >
              About Salman
            </motion.span>

            {/* Headline with highlighted word */}
            <motion.h2
              id="rooted-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.2] mb-6"
            >
              <span className="text-white">Rooted in </span>
              <br />
              <span
                className="text-white px-3 py-1 rounded-lg inline-block mt-2"
                style={{ background: 'linear-gradient(to right, #3BC4C4, #6B2FA0)' }}
              >
                Community
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-muted text-lg leading-relaxed"
            >
              {section.description}
            </motion.p>
          </div>

          {/* Network graphic — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
            aria-hidden="true"
          >
            <NetworkGraphic className="w-full max-w-[360px] h-auto" />
          </motion.div>
        </div>

        {/* Pillar cards — full gradient style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {section.pillars.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon]
            const meta = CARD_META[i % CARD_META.length]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.1, ease: 'easeOut' }}
                style={{ background: meta.gradientStyle }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default"
              >
                {/* Top accent bar */}
                <div className={`h-[3px] w-full ${meta.accent} opacity-90`} aria-hidden="true" />

                {/* Inner top shine */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" aria-hidden="true" />

                {/* Corner glow */}
                <div className={`absolute -bottom-8 -right-8 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none ${meta.glow}`} aria-hidden="true" />

                <div className="p-6 sm:p-7">
                  {/* Circular icon */}
                  <div
                    className={`relative z-10 w-13 h-13 w-[52px] h-[52px] ${meta.iconBg} rounded-full flex items-center justify-center mb-5 ring-2 ring-white/[0.08] transition-transform duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    {Icon && <Icon size={22} className={meta.iconColor} aria-hidden="true" />}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-display text-lg font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-muted text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
