import { motion } from 'framer-motion'
import { config } from '../config/candidate'

export function Hero() {
  const hasVideo      = Boolean(config.heroVideo)
  const hasBackground = Boolean(config.heroBackground)
  const hasPhoto      = Boolean(config.candidate.photo)

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="bg-primary-dark flex flex-col pt-20 pb-10 px-4 sm:px-8 lg:px-14 gap-6"
    >
      {/* ── Image card — natural height, no cropping ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative rounded-2xl overflow-hidden w-full max-w-[1400px] mx-auto"
      >
        {hasVideo ? (
          <video autoPlay muted loop playsInline className="w-full h-auto block">
            <source src={config.heroVideo} type="video/mp4" />
          </video>
        ) : hasPhoto ? (
          <img
            src={config.candidate.photo}
            alt={config.candidate.name}
            className="w-full h-auto block"
          />
        ) : hasBackground ? (
          <img src={config.heroBackground} alt="" className="w-full h-auto block" />
        ) : (
          <div className="w-full aspect-[21/9] bg-hero-gradient" />
        )}

        {/* Name overlay — bottom-left */}
        <div className="absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-primary-dark/80 via-primary-dark/30 to-transparent">
          <p className="font-display text-base font-bold text-white leading-tight">
            {config.candidate.name}
          </p>
          <p className="text-teal text-xs mt-0.5 font-medium">
            {config.election.position} · {config.election.voteYear}
          </p>
        </div>
      </motion.div>

      {/* ── Buttons — sit directly below the card ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href={config.donation.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-cta hover:bg-cta/90 text-primary-dark px-10 py-4 rounded-full font-bold text-lg transition-all shadow-cta hover:shadow-cta-lg w-full sm:w-auto"
        >
          Donate Today
        </a>
        <a
          href="#get-involved"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center justify-center text-white border border-white/30 hover:border-teal/60 hover:bg-white/[0.08] px-10 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto"
        >
          Get Involved
        </a>
      </motion.div>
    </section>
  )
}
