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
      className="relative bg-primary-dark flex flex-col pt-20 pb-12 gap-0 overflow-hidden"
    >
      {/* ── Ambient glow blobs (background layer) ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 bg-purple pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 bg-teal pointer-events-none" aria-hidden="true" />

      {/* ── Diagonal geometric lines (top-left corner) ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-72 h-72 opacity-[0.06]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <line x1="0" y1="60"  x2="240" y2="300" stroke="#3BC4C4" strokeWidth="1" />
        <line x1="0" y1="120" x2="180" y2="300" stroke="#3BC4C4" strokeWidth="1" />
        <line x1="0" y1="180" x2="120" y2="300" stroke="#3BC4C4" strokeWidth="1" />
        <line x1="60"  y1="0" x2="300" y2="240" stroke="#6B2FA0" strokeWidth="1" />
        <line x1="120" y1="0" x2="300" y2="180" stroke="#6B2FA0" strokeWidth="1" />
        <line x1="180" y1="0" x2="300" y2="120" stroke="#6B2FA0" strokeWidth="1" />
      </svg>

      {/* ── Dot grid pattern (subtle, top-right) ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-0 w-80 h-80 opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ── Image card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden w-full"
      >
        {hasVideo ? (
          <video autoPlay muted loop playsInline className="w-full h-auto block">
            <source src={config.heroVideo} type="video/mp4" />
          </video>
        ) : hasPhoto ? (
          <img
            src={config.candidate.photo}
            alt={config.candidate.name}
            className="w-full block"
            style={{ height: 'auto', maxHeight: '620px', objectFit: 'cover', objectPosition: 'center top' }}
          />
        ) : hasBackground ? (
          <img src={config.heroBackground} alt="" className="w-full h-auto block" />
        ) : (
          <div className="w-full aspect-[21/9] bg-hero-gradient" />
        )}

        {/* Name overlay — bottom-left, desktop only */}
        <div className="hidden sm:block absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-primary-dark/80 via-primary-dark/30 to-transparent">
          <p className="font-display text-base font-bold text-white leading-tight">
            {config.candidate.name}
          </p>
          <p className="text-teal text-xs mt-0.5 font-medium">
            {config.election.position} · {config.election.voteYear}
          </p>
        </div>
      </motion.div>

      {/* ── CTA area with decorative graphic ── */}
      <div className="relative py-10 px-4 sm:px-8">

        {/* Animated concentric rings (centered behind buttons) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          {[180, 280, 380, 480].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-teal/[0.12]"
              style={{ width: size, height: size }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 4 + i * 1.2, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
            />
          ))}
          {/* Teal centre dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-teal/30"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted/60 text-sm font-medium tracking-[0.12em] uppercase mb-6 relative"
        >
          {config.candidate.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center relative"
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
      </div>

      {/* ── Bottom wave into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10 fill-primary-dark opacity-0">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>

    </section>
  )
}
