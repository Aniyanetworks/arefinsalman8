import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
      className="relative group"
    >
      <div className="bg-white/[0.05] border border-white/10 group-hover:border-teal/30 rounded-2xl p-8 transition-all duration-200">
        <p className="text-white/50 text-xs font-semibold tracking-[0.14em] uppercase mb-4">
          {item.label}
        </p>

        <div className="bg-white/[0.06] border border-white/10 rounded-xl py-5 px-6 text-center mb-1">
          {item.value === 0 ? (
            <p className="font-display text-4xl font-bold text-white/20 tabular-nums">—</p>
          ) : (
            <p
              className="font-display text-4xl font-bold text-teal tabular-nums"
              aria-live="polite"
              aria-label={`${count} ${item.label}`}
            >
              {count.toLocaleString()}
            </p>
          )}
        </div>

        {item.value === 0 && (
          <p className="text-white/25 text-[11px] text-center mt-2">Updating as campaign grows</p>
        )}
      </div>
    </motion.div>
  )
}

export function ListeningTour() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const tour = config.listeningTour

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 bg-primary-dark"
      aria-labelledby="tour-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          >
            <MapPin size={13} aria-hidden="true" />
            Out in the Community
          </motion.div>

          <motion.h2
            id="tour-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.08] mb-5"
          >
            The Cambridge
            <span className="block text-teal">Listening Tour</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/50 text-lg leading-relaxed"
          >
            {tour.description}
          </motion.p>
        </div>

        {/* Tour cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tour.items.map((item, i) => (
            <TourCard key={i} item={item} index={i} active={inView} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
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
