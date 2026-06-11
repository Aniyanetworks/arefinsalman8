import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config/candidate'

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    setCount(0)
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed  = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: { value: number; suffix: string; label: string }
  index: number
  active: boolean
}) {
  const count = useCountUp(stat.value, 1600 + index * 200, active)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.14, ease: 'easeOut' }}
      className="text-center px-4"
    >
      <p
        className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white tabular-nums"
        aria-live="polite"
        aria-label={`${count}${stat.suffix} ${stat.label}`}
      >
        {count.toLocaleString()}{stat.suffix}
      </p>
      <p className="text-accent-400 text-base sm:text-lg font-semibold mt-3 tracking-wide">
        {stat.label}
      </p>
    </motion.div>
  )
}

export function CampaignStats() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="bg-primary-900 py-20 sm:py-24 border-y border-white/[0.06]"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.p
          id="stats-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-white/40 text-xs font-semibold tracking-[0.18em] uppercase mb-14"
        >
          On the Ground · Across Cambridge
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 sm:divide-x sm:divide-white/10">
          {config.campaignStats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} active={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-center text-white/30 text-sm mt-14 leading-relaxed"
        >
          And growing every day.{' '}
          <a
            href="#get-involved"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-accent-400 hover:text-accent-300 font-medium underline underline-offset-2 transition-colors"
          >
            Get involved.
          </a>
        </motion.p>

      </div>
    </section>
  )
}
