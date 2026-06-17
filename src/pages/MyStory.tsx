import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Briefcase, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { config } from '../config/candidate'

function fadeUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 32 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }
}

function CareerSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="bg-white border-t border-primary/10 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          {...(inView ? fadeUp(0) : { initial: { opacity: 0 } })}
          className="inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-4"
        >
          <Briefcase size={13} aria-hidden="true" />
          Career &amp; Experience
        </motion.div>

        <motion.h2
          {...(inView ? fadeUp(0.08) : { initial: { opacity: 0 } })}
          className="font-display text-4xl sm:text-5xl font-bold text-primary-dark leading-[1.08] mb-14"
        >
          Built for this work.
        </motion.h2>

        {/* Timeline */}
        <ol className="relative" aria-label="Career timeline">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-teal via-teal/40 to-transparent origin-top"
            aria-hidden="true"
          />
          {config.candidate.careerExperience.map((entry, i) => (
            <motion.li
              key={i}
              {...(inView ? fadeUp(0.15 + i * 0.12) : { initial: { opacity: 0 } })}
              className="relative pl-10 pb-12 last:pb-0"
            >
              <span
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-teal ring-4 ring-white shadow"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-display text-xl font-bold text-primary-dark">{entry.role}</h3>
                <span className="text-teal text-sm font-semibold whitespace-nowrap">{entry.period}</span>
              </div>
              <p className="text-primary/60 text-sm font-semibold uppercase tracking-wide mb-2">{entry.organization}</p>
              <p className="text-primary/80 leading-relaxed">{entry.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function MyStory() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const hasPhoto = Boolean(config.candidate.photo)
  const initials = config.candidate.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="min-h-screen">

      {/* ── Page header ── */}
      <div className="bg-primary-dark pt-36 pb-20 relative overflow-hidden">
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

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-teal text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              >
                Who I Am
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="font-display text-5xl sm:text-6xl font-bold text-white leading-[1.04] mb-4"
              >
                My Story
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="text-white/55 text-xl leading-relaxed"
              >
                A community builder, a committed advocate, and a Cambridge resident
                who knows what's at stake in 2026.
              </motion.p>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:flex justify-end"
            >
              <div className="w-64 aspect-square rounded-3xl overflow-hidden ring-2 ring-teal/30">
                {hasPhoto ? (
                  <img src={config.candidate.photo} alt={config.candidate.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="font-display text-7xl font-bold text-white/15 select-none" aria-hidden="true">{initials}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bio section ── */}
      <div className="bg-surface py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-start">

            {/* Bio paragraphs */}
            <div>
              <motion.span
                {...fadeUp(0)}
                className="inline-block text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-5"
              >
                About {config.candidate.name.split(' ')[0]}
              </motion.span>
              <motion.h2
                {...fadeUp(0.08)}
                className="font-display text-4xl sm:text-[2.75rem] font-bold text-primary-dark leading-[1.08] mb-8 text-balance"
              >
                A community builder.{' '}
                <span className="text-teal">A committed advocate.</span>
              </motion.h2>
              <motion.div {...fadeUp(0.16)} className="space-y-4">
                {config.candidate.bio.split('\n\n').map((para, i) => (
                  <p key={i} className="text-primary/80 text-lg leading-relaxed">{para}</p>
                ))}
              </motion.div>

              <motion.blockquote
                {...fadeUp(0.28)}
                className="border-l-[3px] border-teal pl-6 mt-10"
              >
                <p className="font-display text-xl text-primary italic leading-relaxed">
                  {config.candidate.whyRunning}
                </p>
              </motion.blockquote>
            </div>

            {/* Highlights card */}
            <motion.div {...fadeUp(0.12)}>
              <div className="bg-primary rounded-2xl p-8 text-white sticky top-24">
                <h3 className="font-display text-2xl font-bold mb-6">Highlights</h3>
                <ul className="space-y-4" role="list">
                  {config.candidate.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={19} className="text-teal mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-white/80 leading-snug text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Career timeline ── */}
      <CareerSection />

      {/* ── CTA footer ── */}
      <div className="bg-primary py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to work together?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/action-plan"
              className="inline-flex items-center bg-cta hover:bg-cta/90 text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-cta hover:shadow-cta-lg"
            >
              See My Action Plan
            </Link>
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
