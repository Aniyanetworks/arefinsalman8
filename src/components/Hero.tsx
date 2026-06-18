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
      className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {hasVideo ? (
          <>
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={config.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary-dark/75" />
          </>
        ) : hasBackground ? (
          <>
            <img src={config.heroBackground} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary/50" />
          </>
        ) : (
          /* Radial navy gradient per brand spec — class defined in index.css */
          <div className="absolute inset-0 bg-hero-gradient" />
        )}

        {/* Subtle dot texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Bottom fade to next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-dark to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative   mx-auto  lg:pt-20 lg:pb-24   items-center justify-center ">
          {/* LEFT — identity + tagline + CTAs */}
          <div>
            {/* RIGHT — candidate photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end mt-2 lg:mt-0 "
            >
              <div className="relative">
                {/* Teal glow ring — class in index.css, no hex in component */}
                <div className="absolute inset-0 rounded-3xl shadow-photo-glow" aria-hidden="true" />

                <div
                  className="relative w-full h-full  rounded-3xl overflow-hidden ring-1 ring-white/10"
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
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="font-display text-8xl font-bold text-white/10 select-none" aria-hidden="true">
                          {initials}
                        </span>
                        <span className="text-muted/30 text-xs tracking-widest uppercase font-medium">
                          Photo coming soon
                        </span>
                      </div>
                      {/* Corner accents */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-teal/30 rounded-tl-lg" aria-hidden="true" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-teal/30 rounded-tr-lg" aria-hidden="true" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal/30 rounded-bl-lg" aria-hidden="true" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal/30 rounded-br-lg" aria-hidden="true" />
                    </>
                  )}

                  {/* Name overlay */}
                  <div className="absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent">
                    <p className="font-display text-base font-bold text-white">{config.candidate.name}</p>
                    <p className="text-teal text-xs mt-0.5">{config.election.position} · {config.election.voteYear}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex flex-wrap gap-4 mt-4  items-center justify-center"
            >
              {/* Primary CTA — green reserved for conversion actions only */}
              <a
                href={config.donation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-cta hover:bg-cta/90 text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-cta hover:shadow-cta-lg"
              >
                Donate Today
              </a>
              <a
                href="#get-involved"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-white border border-white/25 hover:border-teal/50 hover:bg-white/[0.06] px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Get Involved
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
        <span className="text-muted/40 text-[10px] tracking-widest uppercase font-medium">Scroll</span>
      </motion.div>
    </section>
  )
}
