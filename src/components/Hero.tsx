import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { config } from '../config/candidate'

export function Hero() {
  const hasVideo      = Boolean(config.heroVideo)
  const hasBackground = Boolean(config.heroBackground)
  const hasPhoto      = Boolean(config.candidate.photo)
  const initials      = config.candidate.name.split(' ').map(n => n[0]).join('')

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {hasVideo ? (
          <>
            <video
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={config.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary-950/72" />
          </>
        ) : hasBackground ? (
          <>
            <img
              src={config.heroBackground}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient: heavier on left so text stays legible, lighter on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/92 via-primary-900/80 to-primary-900/50" />
          </>
        ) : (
          /* Placeholder until Cambridge city photo is provided */
          <div className="absolute inset-0 bg-primary-950">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-[#0d2340] to-primary-900" />
            <div
              className="absolute inset-0 opacity-25"
              style={{
                background:
                  'radial-gradient(ellipse 120% 60% at 70% 100%, #1e4a7a 0%, transparent 65%)',
              }}
            />
          </div>
        )}

        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-950 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-36 pb-28 lg:pt-44 lg:pb-32">

        {/* Identity bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-4 bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3.5 mb-12"
        >
          {/* Circular candidate photo */}
          <div
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-accent-500 flex-shrink-0"
            aria-label={hasPhoto ? config.candidate.name : 'Candidate photo placeholder'}
          >
            {hasPhoto ? (
              <img
                src={config.candidate.photo}
                alt={config.candidate.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center">
                <span className="font-display text-lg font-bold text-white/35" aria-hidden="true">
                  {initials}
                </span>
              </div>
            )}
          </div>

          {/* Name + title */}
          <div>
            <p className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
              {config.candidate.name}
            </p>
            <p className="text-accent-400 text-xs sm:text-sm font-medium mt-0.5">
              For Regional Councillor — Cambridge
            </p>
          </div>

          {/* Election date badge */}
          <div className="hidden sm:flex items-center gap-3 ml-2 pl-5 border-l border-white/10">
            <div className="text-center">
              <span
                className="block w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse mx-auto mb-1"
                aria-hidden="true"
              />
              <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium whitespace-nowrap">
                {config.election.date}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="max-w-3xl">

          {/* Highlighted tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="font-display font-bold leading-[1.08] mb-9"
          >
            <span className="block text-white text-[2.6rem] sm:text-[3.4rem] lg:text-[4.1rem]">
              Cambridge Deserves
            </span>
            <span
              className="inline-block bg-accent-500 text-primary-950 text-[2.6rem] sm:text-[3.4rem] lg:text-[4.1rem] px-4 py-1 rounded-xl mt-2 leading-[1.15]"
            >
              Its Fair Share.
            </span>
          </motion.h1>

          {/* Key points checklist */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.52 }}
            className="grid sm:grid-cols-2 gap-x-10 gap-y-3.5 mb-10"
            role="list"
          >
            {config.keyPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.58 + i * 0.07 }}
                className="flex items-start gap-2.5 text-white/80 text-[15px] sm:text-base leading-snug"
              >
                <CheckCircle2
                  size={18}
                  className="text-accent-400 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.92 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={config.donation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_4px_24px_rgba(232,149,32,0.35)] hover:shadow-[0_4px_36px_rgba(232,149,32,0.5)]"
            >
              Donate Today
            </a>
            <a
              href={config.lawnSignUrl}
              {...(config.lawnSignUrl.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              onClick={e => {
                if (config.lawnSignUrl.startsWith('#')) {
                  e.preventDefault()
                  document.querySelector(config.lawnSignUrl)?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 text-white border border-white/25 hover:border-accent-500/50 hover:bg-white/[0.06] px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Get Your Lawn Sign
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <motion.span
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
            animate={{ y: [0, 14, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <span className="text-white/25 text-[10px] tracking-widest uppercase font-medium">Scroll</span>
      </motion.div>
    </section>
  )
}
