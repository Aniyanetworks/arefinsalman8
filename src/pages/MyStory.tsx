import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { config } from '../config/candidate'

export function MyStory() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const hasPhoto = Boolean(config.candidate.photo)
  const initials = config.candidate.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="min-h-screen bg-primary-dark relative overflow-hidden">

      {/* ── Background decorations ── */}
      <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ms-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ms-hex)" />
      </svg>
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.12] bg-purple pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.10] bg-teal pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.10] bg-purple pointer-events-none" aria-hidden="true" />
      <svg aria-hidden="true" className="pointer-events-none select-none absolute right-0 top-1/4 w-96 h-96 opacity-[0.06]" viewBox="0 0 400 400" fill="none">
        <circle cx="400" cy="200" r="80"  stroke="#3BC4C4" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="400" cy="200" r="140" stroke="#3BC4C4" strokeWidth="1" strokeDasharray="5 7" />
        <circle cx="400" cy="200" r="200" stroke="#6B2FA0" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="400" cy="200" r="260" stroke="#6B2FA0" strokeWidth="0.7" strokeDasharray="3 10" />
      </svg>

      {/* ── Page content ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24">

        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-teal text-sm font-medium mb-12 transition-colors">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Home
        </Link>

        {/* ── Hero row ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-[1.15] mb-5">
              <span className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block text-white"
                >
                  My
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block text-shimmer"
                >
                  Story
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="text-muted text-lg leading-relaxed max-w-md"
            >
              A community builder, a committed advocate, and a Cambridge resident who knows what's at stake in 2026.
            </motion.p>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal/20 to-purple/20 blur-xl" aria-hidden="true" />
              <div className="relative w-72 aspect-square rounded-3xl overflow-hidden ring-2 ring-teal/30 shadow-2xl">
                {hasPhoto ? (
                  <img src={config.candidate.photo} alt={config.candidate.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)' }}>
                    <span className="font-display text-7xl font-bold text-white/20 select-none" aria-hidden="true">{initials}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thin gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent mb-20" aria-hidden="true" />

        {/* ── Bio + Highlights ── */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start mb-20">

          {/* Bio */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1, y: 0,
                textShadow: ['0 0 0px rgba(59,196,196,0)', '0 0 14px rgba(59,196,196,0.6)', '0 0 0px rgba(59,196,196,0)'],
              }}
              viewport={{ once: true }}
              transition={{
                opacity:    { duration: 0.45 },
                y:          { duration: 0.45 },
                textShadow: { duration: 2.5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="inline-block text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-5"
            >
              About {config.candidate.name.split(' ')[0]}
            </motion.span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.2] mb-8">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
                  className="block text-white"
                >
                  A community builder.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.22, ease: [0.33, 1, 0.68, 1] }}
                  className="block text-shimmer"
                >
                  A committed advocate.
                </motion.span>
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="space-y-5 mb-10"
            >
              {config.candidate.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted text-base leading-relaxed">{para}</p>
              ))}
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22, ease: 'easeOut' }}
              className="border-l-[3px] border-teal pl-6 py-1"
            >
              <Quote size={18} className="text-teal/40 mb-2" aria-hidden="true" />
              <p className="font-display text-lg text-white/75 italic leading-relaxed">
                {config.candidate.whyRunning}
              </p>
            </motion.blockquote>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="sticky top-24"
          >
            <div
              className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-xl"
              style={{ background: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)' }}
            >
              <div className="h-[3px] w-full bg-teal" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20 bg-teal pointer-events-none" aria-hidden="true" />
              <div className="relative z-10 p-7">
                <h3 className="font-display text-xl font-bold text-white mb-5">Highlights</h3>
                <ul className="space-y-4" role="list">
                  {config.candidate.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="text-teal mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-white/80 leading-snug text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thin gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent mb-20" aria-hidden="true" />

        {/* ── CTA ── */}
        <div className="text-center">
          <p className="font-display text-3xl sm:text-4xl font-bold mb-3 leading-[1.2]">
            {(['Ready', 'to', 'work'] as const).map((word, i) => (
              <span key={word} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
                <motion.span
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block text-white"
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.27, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block text-shimmer"
              >
                together?
              </motion.span>
            </span>
          </p>
          <p className="text-muted text-lg mb-8">Join the movement building a stronger Cambridge.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/action-plan" className="inline-flex items-center bg-cta hover:bg-cta/90 text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-cta hover:shadow-cta-lg">
              See My Action Plan
            </Link>
            <Link to="/" state={{ scrollTo: 'get-involved' }} className="inline-flex items-center text-white border border-white/25 hover:border-teal/50 hover:bg-white/[0.05] px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Get Involved
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
