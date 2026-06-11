import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Briefcase } from 'lucide-react'
import { config } from '../config/candidate'

function fadeUp(delay = 0) {
  return {
    hidden:  { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  }
}

const STATS = [
  { value: '20+',    label: 'Years in Cambridge'       },
  { value: '2026',   label: 'Election Year'            },
  { value: 'Oct 26', label: 'Vote Date'                },
  { value: '3',      label: 'Cambridge Regional Seats' },
]

export function About() {
  const bioRef    = useRef<HTMLDivElement>(null)
  const careerRef = useRef<HTMLDivElement>(null)
  const bioInView    = useInView(bioRef,    { once: true, margin: '-80px' })
  const careerInView = useInView(careerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="bg-warm-50"
      aria-labelledby="about-heading"
    >
      {/* ── Bio block ── */}
      <div ref={bioRef} className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* Left: bio */}
            <div>
              <motion.span
                variants={fadeUp(0)}
                initial="hidden"
                animate={bioInView ? 'visible' : 'hidden'}
                className="inline-block text-accent-600 text-xs font-semibold tracking-[0.16em] uppercase mb-5"
              >
                About {config.candidate.name.split(' ')[0]}
              </motion.span>

              <motion.h2
                id="about-heading"
                variants={fadeUp(0.08)}
                initial="hidden"
                animate={bioInView ? 'visible' : 'hidden'}
                className="font-display text-4xl sm:text-[2.75rem] lg:text-5xl font-bold text-primary-900 leading-[1.08] mb-8 text-balance"
              >
                A community builder.{' '}
                <span className="text-accent-600">A committed advocate.</span>
              </motion.h2>

              <motion.div
                variants={fadeUp(0.16)}
                initial="hidden"
                animate={bioInView ? 'visible' : 'hidden'}
                className="space-y-4 mb-8"
              >
                {config.candidate.bio.split('\n\n').map((para, i) => (
                  <p key={i} className="text-primary-700 text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </motion.div>

              <motion.blockquote
                variants={fadeUp(0.24)}
                initial="hidden"
                animate={bioInView ? 'visible' : 'hidden'}
                className="border-l-[3px] border-accent-500 pl-6"
              >
                <p className="font-display text-xl text-primary-800 italic leading-relaxed">
                  {config.candidate.whyRunning}
                </p>
              </motion.blockquote>
            </div>

            {/* Right: highlights + stats */}
            <div className="space-y-5">
              <motion.div
                variants={fadeUp(0.12)}
                initial="hidden"
                animate={bioInView ? 'visible' : 'hidden'}
                className="bg-primary-900 rounded-2xl p-8 text-white"
              >
                <h3 className="font-display text-2xl font-bold mb-6">Credibility Highlights</h3>
                <ul className="space-y-4" role="list">
                  {config.candidate.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp(0.16 + i * 0.06)}
                      initial="hidden"
                      animate={bioInView ? 'visible' : 'hidden'}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-accent-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-white/80 leading-snug text-[15px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp(0.28)}
                initial="hidden"
                animate={bioInView ? 'visible' : 'hidden'}
                className="grid grid-cols-2 gap-4"
                role="list"
                aria-label="Key facts"
              >
                {STATS.map(stat => (
                  <div
                    key={stat.label}
                    role="listitem"
                    className="bg-white border border-warm-200 rounded-xl p-5 text-center shadow-sm"
                  >
                    <p className="font-display text-3xl font-bold text-primary-900">{stat.value}</p>
                    <p className="text-primary-500 text-sm mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Career experience timeline ── */}
      <div
        ref={careerRef}
        className="border-t border-warm-200 bg-white py-24 sm:py-32"
        aria-labelledby="experience-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <motion.span
              variants={fadeUp(0)}
              initial="hidden"
              animate={careerInView ? 'visible' : 'hidden'}
              className="inline-flex items-center gap-2 text-accent-600 text-xs font-semibold tracking-[0.16em] uppercase mb-4"
            >
              <Briefcase size={13} aria-hidden="true" />
              Career Experience
            </motion.span>
            <motion.h2
              id="experience-heading"
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={careerInView ? 'visible' : 'hidden'}
              className="font-display text-4xl sm:text-5xl font-bold text-primary-900 leading-[1.08]"
            >
              Built for this work.
            </motion.h2>
          </div>

          {/* Timeline */}
          <ol className="relative" aria-label="Career timeline">
            {/* Vertical rule */}
            <motion.div
              variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } } }}
              initial="hidden"
              animate={careerInView ? 'visible' : 'hidden'}
              className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-500 via-accent-500/40 to-transparent origin-top"
              aria-hidden="true"
            />

            {config.candidate.careerExperience.map((entry, i) => (
              <motion.li
                key={i}
                variants={fadeUp(0.15 + i * 0.12)}
                initial="hidden"
                animate={careerInView ? 'visible' : 'hidden'}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <span
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent-500 ring-4 ring-white shadow"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-display text-xl font-bold text-primary-900">{entry.role}</h3>
                  <span className="text-accent-600 text-sm font-semibold whitespace-nowrap">{entry.period}</span>
                </div>
                <p className="text-primary-500 text-sm font-semibold uppercase tracking-wide mb-2">
                  {entry.organization}
                </p>
                <p className="text-primary-700 leading-relaxed">{entry.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
