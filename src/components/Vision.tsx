import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config/candidate'

export function Vision() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-28 sm:py-40 bg-warm-50 overflow-hidden"
      aria-label="Vision statement"
    >
      {/* Decorative large quotation mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 0.055, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[22rem] sm:text-[28rem] text-primary-900 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </motion.div>

      {/* Subtle accent gradient blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-primary-900 leading-[1.18] text-balance mb-8">
            {config.vision.quote}
          </p>
          <footer>
            <cite className="not-italic text-accent-600 font-semibold text-lg tracking-wide">
              {config.vision.attribution}
            </cite>
          </footer>
        </motion.blockquote>

        {/* Decorative rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="w-20 h-1 bg-accent-500 mx-auto mt-12 rounded-full origin-center"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
