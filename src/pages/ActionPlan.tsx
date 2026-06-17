import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Megaphone, Scale, Bus, Home, Shield, GraduationCap,
  Heart, TreePine, Brain, MessageSquare, type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { config } from '../config/candidate'

const ICON_MAP: Record<string, LucideIcon> = {
  Megaphone, Scale, Bus, Home, Shield, GraduationCap, Heart, TreePine, Brain, MessageSquare,
}

// Alternating navy / navy+purple panels for visual rhythm
const ACCENTS = [
  'from-primary to-primary-dark',
  'from-purple-dark to-primary-dark',
  'from-primary to-primary-dark',
  'from-purple-dark to-primary-dark',
  'from-primary to-primary-dark',
  'from-purple-dark to-primary-dark',
  'from-primary to-primary-dark',
  'from-purple-dark to-primary-dark',
  'from-primary to-primary-dark',
  'from-purple-dark to-primary-dark',
]

function PriorityCard({
  priority,
  index,
}: {
  priority: (typeof config.priorities)[0]
  index: number
}) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon   = ICON_MAP[priority.icon]
  const num    = String(index + 1).padStart(2, '0')
  const isEven = index % 2 === 0

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl ${isEven ? '' : 'lg:[direction:rtl]'}`}
    >
      {/* Number + Icon panel */}
      <div className={`relative bg-gradient-to-br ${ACCENTS[index]} p-10 flex flex-col justify-between min-h-[220px] ${isEven ? '' : 'lg:[direction:ltr]'}`}>
        {/* Giant background number */}
        <span
          className="absolute bottom-4 right-6 font-display text-[7rem] font-bold text-white/[0.06] leading-none select-none"
          aria-hidden="true"
        >
          {num}
        </span>

        {/* Icon */}
        <div className="w-14 h-14 bg-teal/20 rounded-2xl flex items-center justify-center mb-6" aria-hidden="true">
          {Icon && <Icon size={26} className="text-teal" aria-hidden="true" />}
        </div>

        {/* Category chip */}
        <span className="inline-block bg-white/10 text-white/70 text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-full self-start">
          {priority.category}
        </span>
      </div>

      {/* Content panel */}
      <div className={`bg-white p-10 flex flex-col justify-center ${isEven ? '' : 'lg:[direction:ltr]'}`}>
        <p className="text-teal text-[11px] font-bold tracking-[0.16em] uppercase mb-3">
          {num} · {priority.category}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark leading-[1.18] mb-4">
          {priority.title}
        </h2>
        <p className="text-primary/70 text-base leading-relaxed">
          {priority.description}
        </p>
      </div>
    </motion.article>
  )
}

export function ActionPlan() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-surface">

      {/* ── Page header ── */}
      <div className="bg-primary-dark pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Home
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-teal text-xs font-semibold tracking-[0.18em] uppercase mb-4"
          >
            Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.04] mb-6"
          >
            My Action Plan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-white/55 text-xl leading-relaxed max-w-2xl"
          >
            Ten concrete commitments to Cambridge residents — on transit, housing, safety,
            fairness, and a Regional government that actually delivers for this city.
          </motion.p>
        </div>
      </div>

      {/* ── Priority cards ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-8">
        {config.priorities.map((priority, i) => (
          <PriorityCard key={i} priority={priority} index={i} />
        ))}
      </div>

      {/* ── CTA footer ── */}
      <div className="bg-primary py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to build this Cambridge together?
          </p>
          <p className="text-white/55 text-lg mb-10 leading-relaxed">
            Join the campaign, support our work, or reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={config.donation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cta hover:bg-cta/90 text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-cta hover:shadow-cta-lg"
            >
              Donate Today
            </a>
            <Link
              to="/"
              state={{ scrollTo: 'get-involved' }}
              className="inline-flex items-center text-white border border-white/25 hover:border-teal/50 px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
