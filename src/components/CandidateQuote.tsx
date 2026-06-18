import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config/candidate'

export function CandidateQuote() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const hasPhoto  = Boolean(config.candidate.photo)
  const initials  = config.candidate.name.split(' ').map(n => n[0]).join('')

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 bg-primary overflow-hidden"
      aria-label="Candidate statement"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div
                className="absolute -inset-4 rounded-[2rem] border-2 border-teal/20"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-8 rounded-[2.5rem] border border-teal/10"
                aria-hidden="true"
              />

              <div
                className="relative w-full xl:w-80  rounded-3xl overflow-hidden ring-1 ring-white/10"
                aria-label={hasPhoto ? `Portrait of ${config.candidate.name}` : 'Candidate photo'}
              >
                {hasPhoto ? (
                  <img
                    src={config.candidate.photo}
                    alt={config.candidate.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-8xl font-bold text-white/10 select-none" aria-hidden="true">
                        {initials}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <div>
            {/* Decorative opening quote */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 0.12, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-display text-[8rem] text-teal leading-none select-none -mb-10"
              aria-hidden="true"
            >
              "
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-white font-bold leading-[1.35] mb-8 text-balance">
                {config.candidate.whyRunning}
              </p>

              <footer className="not-italic">
                <p className="text-teal font-bold text-lg">{config.candidate.name}</p>
                <p className="text-white/45 text-sm mt-0.5">
                  Candidate for {config.election.position}, {config.election.municipality}
                </p>
              </footer>
            </motion.blockquote>

            {/* Accent rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-16 h-1 bg-teal mt-8 rounded-full origin-left"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
