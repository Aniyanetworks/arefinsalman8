import { motion } from 'framer-motion'
import { config } from '../config/candidate'

// Soft blurred orbs — used when no hero video is configured
const ORBS = [
  { w: 700, h: 700, x: '72%',  y: '-20%', color: '#E89520', opacity: 0.07, dur: 14, delay: 0   },
  { w: 500, h: 500, x: '85%',  y: '55%',  color: '#ffffff', opacity: 0.05, dur: 18, delay: 2   },
  { w: 380, h: 380, x: '55%',  y: '85%',  color: '#E89520', opacity: 0.06, dur: 12, delay: 1   },
  { w: 420, h: 420, x: '5%',   y: '15%',  color: '#ffffff', opacity: 0.04, dur: 16, delay: 3   },
  { w: 220, h: 220, x: '18%',  y: '80%',  color: '#E89520', opacity: 0.07, dur: 10, delay: 1.5 },
]

const initials = config.candidate.name
  .split(' ')
  .map(n => n[0])
  .join('')

export function Hero() {
  const hasVideo = Boolean(config.heroVideo)

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center bg-primary-900 overflow-hidden"
    >
      {/* ── Background: video OR animated orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {hasVideo ? (
          // ── Video background ──────────────────────────────────────────────
          // Replace config.heroVideo ("/hero-bg.mp4") with the client's file.
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={config.heroVideo} type="video/mp4" />
            </video>
            {/* Darkening overlay so text stays legible */}
            <div className="absolute inset-0 bg-primary-900/65" />
          </>
        ) : (
          // ── Animated orb fallback (shown until client provides video) ──────
          <>
            {ORBS.map((orb, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width:  orb.w,
                  height: orb.h,
                  left:   orb.x,
                  top:    orb.y,
                  transform: 'translate(-50%, -50%)',
                  background: orb.color,
                  opacity: orb.opacity,
                  borderRadius: '50%',
                  filter: 'blur(90px)',
                }}
                animate={{ y: [0, -28, 0], scale: [1, 1.06, 1] }}
                transition={{ duration: orb.dur, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
              />
            ))}
          </>
        )}

        {/* Dot-grid texture — shown over both video and orbs */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-900 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-36 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Text block */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="inline-flex items-center gap-2 border border-accent-500/35 bg-accent-500/10 text-accent-400 text-xs font-semibold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" aria-hidden="true" />
              {config.election.municipality} · {config.election.date}
            </motion.span>

            <motion.h1
              className="font-display text-[3.25rem] sm:text-[4rem] lg:text-[4.75rem] xl:text-[5.5rem] text-white font-bold leading-[1.02] tracking-tight mb-5"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              {config.candidate.name}
            </motion.h1>

            <motion.p
              className="font-display text-accent-400 text-xl sm:text-2xl font-semibold mb-6 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              {config.candidate.title}
            </motion.p>

            <motion.p
              className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.55, delay: 0.6 }}
            >
              {config.candidate.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.55, delay: 0.75 }}
            >
              <a
                href="#get-involved"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#get-involved')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_4px_24px_rgba(232,149,32,0.3)] hover:shadow-[0_4px_32px_rgba(232,149,32,0.45)]"
              >
                Get Involved
              </a>
              <a
                href="#about"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-white/45 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Portrait placeholder — replace with <img> once photo is supplied */}
          <motion.div
            className="hidden lg:flex justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0  }}
            transition={{ duration: 0.75, delay: 0.4, ease: 'easeOut' }}
          >
            <div
              className="relative w-80 xl:w-[22rem] aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10"
              aria-label={`Portrait placeholder for ${config.candidate.name} — replace with candidate photo`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="font-display text-7xl font-bold text-white/15 select-none" aria-hidden="true">
                  {initials}
                </span>
                <span className="text-white/25 text-xs tracking-widest uppercase font-medium">
                  Photo placeholder
                </span>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent-500/40 rounded-tl-lg" aria-hidden="true" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-500/40 rounded-tr-lg" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent-500/40 rounded-bl-lg" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent-500/40 rounded-br-lg" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 px-7 py-6 bg-gradient-to-t from-primary-950/90 via-primary-950/50 to-transparent">
                <p className="font-display text-lg font-bold text-white">{config.candidate.name}</p>
                <p className="text-accent-400 text-sm mt-0.5">{config.election.position}</p>
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
