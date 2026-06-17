import { motion } from 'framer-motion'
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
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={config.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary-950/75" />
          </>
        ) : hasBackground ? (
          <>
            <img src={config.heroBackground} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-900/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-primary-950">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-[#0a2b18] to-primary-900" />
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(ellipse 120% 70% at 70% 100%, #1a5939 0%, transparent 65%)' }}
            />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-950 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT — text content */}
          <div>
            {/* Election badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-accent-500/30 bg-accent-500/10 text-accent-400 text-xs font-semibold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" aria-hidden="true" />
              {config.election.municipality} · {config.election.date}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="font-display font-bold text-white leading-[1.04] tracking-tight mb-3"
            >
              <span className="block text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem]">
                {config.candidate.name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="text-accent-400 text-lg sm:text-xl font-semibold tracking-wide mb-8"
            >
              For Regional Councillor — Cambridge
            </motion.p>

            {/* Highlighted tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <p className="font-display text-[1.75rem] sm:text-[2.15rem] font-bold leading-[1.15]">
                <span className="text-white/80">Cambridge </span>
                <span className="bg-accent-500 text-primary-950 px-3 py-0.5 rounded-lg">
                  Deserves Its
                </span>
                <br />
                <span className="text-white">Fair Share.</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={config.donation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-primary-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_4px_24px_rgba(212,157,16,0.35)] hover:shadow-[0_4px_36px_rgba(212,157,16,0.5)]"
              >
                Donate Today
              </a>
              <a
                href="#get-involved"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-white border border-white/25 hover:border-accent-500/50 hover:bg-white/[0.06] px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Get Involved
              </a>
            </motion.div>
          </div>

          {/* RIGHT — candidate photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ boxShadow: '0 0 80px 20px rgba(212,157,16,0.12)' }}
                aria-hidden="true"
              />

              <div
                className="relative w-80 xl:w-[22rem] aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10"
                aria-label={hasPhoto ? `Portrait of ${config.candidate.name}` : 'Candidate photo placeholder'}
              >
                {hasPhoto ? (
                  <img
                    src={config.candidate.photo}
                    alt={config.candidate.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <span className="font-display text-8xl font-bold text-white/10 select-none" aria-hidden="true">
                        {initials}
                      </span>
                      <span className="text-white/20 text-xs tracking-widest uppercase font-medium">
                        Photo coming soon
                      </span>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent-500/35 rounded-tl-lg" aria-hidden="true" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-500/35 rounded-tr-lg" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent-500/35 rounded-bl-lg" aria-hidden="true" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent-500/35 rounded-br-lg" aria-hidden="true" />
                  </>
                )}

                {/* Name overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-primary-950/90 via-primary-950/50 to-transparent">
                  <p className="font-display text-base font-bold text-white">{config.candidate.name}</p>
                  <p className="text-accent-400 text-xs mt-0.5">{config.election.position} · {config.election.voteYear}</p>
                </div>
              </div>
            </div>
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
