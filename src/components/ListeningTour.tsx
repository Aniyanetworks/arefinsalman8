import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, MessageCircle, Building2 } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import { config } from '../config/candidate'

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    if (target === 0) { setCount(0); return }
    setCount(0)
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed  = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

const CARD_META: { icon: LucideIcon; gradient: string; numColor: string; iconBg: string; iconColor: string; glow: string }[] = [
  { icon: Users,         gradient: 'from-primary-light to-primary-dark', numColor: 'text-teal',    iconBg: 'bg-teal/20',   iconColor: 'text-teal',   glow: 'bg-teal'   },
  { icon: MessageCircle, gradient: 'from-purple to-purple-dark',          numColor: 'text-white',   iconBg: 'bg-white/15',  iconColor: 'text-white',  glow: 'bg-purple' },
  { icon: Building2,     gradient: 'from-primary-light to-primary-dark', numColor: 'text-teal',    iconBg: 'bg-teal/20',   iconColor: 'text-teal',   glow: 'bg-teal'   },
  { icon: MapPin,        gradient: 'from-purple to-purple-dark',          numColor: 'text-white',   iconBg: 'bg-white/15',  iconColor: 'text-white',  glow: 'bg-purple' },
]

function TourCard({
  item,
  index,
  active,
}: {
  item: { label: string; value: number }
  index: number
  active: boolean
}) {
  const count = useCountUp(item.value, 1400 + index * 150, active)
  const meta  = CARD_META[index % CARD_META.length]
  const Icon  = meta.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: 0.08 + index * 0.12, ease: 'easeOut' }}
      className={`group relative bg-gradient-to-br ${meta.gradient} rounded-3xl p-8 overflow-hidden border border-white/[0.08] hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default`}
    >
      {/* Corner glow */}
      <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-25 pointer-events-none ${meta.glow}`} aria-hidden="true" />

      {/* Top row: icon + label */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className={`w-11 h-11 ${meta.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`} aria-hidden="true">
          <Icon size={20} className={meta.iconColor} />
        </div>
        <p className="text-white/50 text-[11px] font-bold tracking-[0.18em] uppercase">
          {item.label}
        </p>
      </div>

      {/* Large number */}
      <div className="relative z-10">
        {item.value === 0 ? (
          <p className={`font-display text-5xl sm:text-6xl font-bold ${meta.numColor} opacity-30 leading-none`}>—</p>
        ) : (
          <p
            className={`font-display text-5xl sm:text-6xl font-bold ${meta.numColor} leading-none tabular-nums`}
            aria-live="polite"
            aria-label={`${count} ${item.label}`}
          >
            {count.toLocaleString()}
            <span className="text-3xl ml-0.5">+</span>
          </p>
        )}

        {/* Accent underline */}
        <div className={`mt-4 h-[3px] w-12 rounded-full ${meta.iconBg}`} aria-hidden="true" />
      </div>
    </motion.div>
  )
}

export function ListeningTour() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const tour   = config.listeningTour

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-primary-dark overflow-hidden"
      aria-labelledby="tour-heading"
    >
      {/* Hex grid background */}
      <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tour-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tour-hex)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-10 bg-teal pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-10 bg-purple pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? {
              opacity: 1, y: 0,
              textShadow: ['0 0 0px rgba(59,196,196,0)', '0 0 14px rgba(59,196,196,0.6)', '0 0 0px rgba(59,196,196,0)'],
            } : {}}
            transition={{
              opacity:    { duration: 0.4 },
              y:          { duration: 0.4 },
              textShadow: { duration: 2.5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          >
            <MapPin size={13} aria-hidden="true" />
            Out in the Community
          </motion.div>

          <h2 id="tour-heading" className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] mb-5">
            {(['The', 'Cambridge'] as const).map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.1, ease: 'easeOut' }}
                className="inline-block text-white mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
            {(['Listening', 'Tour'] as const).map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.28 + i * 0.1, ease: 'easeOut' }}
                className="inline-block text-shimmer mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-muted text-lg leading-relaxed"
          >
            {tour.description}
          </motion.p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tour.items.map((item, i) => (
            <TourCard key={i} item={item} index={i} active={inView} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-white/25 text-sm mt-12"
        >
          Numbers updated regularly as the campaign grows. Want to add your name?{' '}
          <a
            href="#get-involved"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-teal hover:text-teal/80 font-medium underline underline-offset-2 transition-colors"
          >
            Get involved.
          </a>
        </motion.p>

      </div>
    </section>
  )
}
