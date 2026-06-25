import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Megaphone, Scale, Bus, Home, Shield, GraduationCap,
  Heart, TreePine, Brain, MessageSquare, type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { config } from '../config/candidate'

const ICON_MAP: Record<string, LucideIcon> = {
  Megaphone, Scale, Bus, Home, Shield, GraduationCap, Heart, TreePine, Brain, MessageSquare,
}

const CARD_THEMES = [
  {
    gradientStyle: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)',
    border:        'border-teal/30',
    hoverBorder:   'hover:border-teal',
    hoverShadow:   'hover:shadow-[0_0_0_3px_#3BC4C4,0_20px_60px_rgba(59,196,196,0.55)]',
    numColor:      'text-white/80',
    iconBg:        'bg-white/15',
    iconColor:     'text-white',
    catColor:      'text-teal/80',
    line:          'bg-teal',
    glow:          'bg-teal',
  },
  {
    gradientStyle: 'linear-gradient(135deg, #6B2FA0 0%, #4A1E7A 55%, #0A1F5C 100%)',
    border:        'border-purple/30',
    hoverBorder:   'hover:border-purple',
    hoverShadow:   'hover:shadow-[0_0_0_3px_#6B2FA0,0_20px_60px_rgba(107,47,160,0.60)]',
    numColor:      'text-white/80',
    iconBg:        'bg-white/15',
    iconColor:     'text-white',
    catColor:      'text-white/50',
    line:          'bg-purple',
    glow:          'bg-purple',
  },
]

function PriorityCard({
  priority,
  index,
}: {
  priority: (typeof config.priorities)[0]
  index: number
}) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon   = ICON_MAP[priority.icon]
  const num    = String(index + 1).padStart(2, '0')
  const theme  = CARD_THEMES[index % 2]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: (index % 2) * 0.12, ease: 'easeOut' }}
      style={{ background: theme.gradientStyle }}
      className={`group relative border-2 ${theme.border} ${theme.hoverBorder} rounded-3xl p-8 sm:p-10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] ${theme.hoverShadow} cursor-default`}
    >
      {/* Corner glow */}
      <div
        className={`absolute -top-10 -right-10 w-52 h-52 rounded-full blur-3xl opacity-25 pointer-events-none ${theme.glow}`}
        aria-hidden="true"
      />

      {/* Number + icon row */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <span
          className={`font-display text-[5.5rem] sm:text-[6.5rem] font-bold ${theme.numColor} leading-none tracking-tight select-none`}
          aria-hidden="true"
        >
          {num}
        </span>
        <div
          className={`w-14 h-14 ${theme.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 transition-all duration-300 group-hover:scale-115 group-hover:brightness-125`}
          aria-hidden="true"
        >
          {Icon && <Icon size={28} className={theme.iconColor} aria-hidden="true" />}
        </div>
      </div>

      {/* Category */}
      <p className={`text-[10px] font-bold tracking-[0.22em] uppercase ${theme.catColor} mb-3 relative z-10`}>
        {priority.category}
      </p>

      {/* Accent line */}
      <div className={`w-10 h-[3px] ${theme.line} rounded-full mb-4 relative z-10`} aria-hidden="true" />

      {/* Title */}
      <h2 className="font-display text-2xl sm:text-[1.75rem] font-bold text-white leading-[1.22] mb-4 relative z-10">
        {priority.title}
      </h2>

      {/* Description */}
      <p className="text-muted text-sm sm:text-base leading-relaxed relative z-10">
        {priority.description}
      </p>
    </motion.article>
  )
}

export function ActionPlan() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">

      {/* ── Dark page header ── */}
      <div className="bg-primary-dark pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="absolute -top-24 right-0 w-[520px] h-[520px] rounded-full blur-[130px] opacity-20 bg-purple pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full blur-[100px] opacity-10 bg-teal pointer-events-none" aria-hidden="true" />

        {/* Decorative concentric circle rings — right side */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.06]" viewBox="0 0 480 480" fill="none">
          <circle cx="480" cy="240" r="80"  stroke="#3BC4C4" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="480" cy="240" r="130" stroke="#3BC4C4" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="480" cy="240" r="180" stroke="#6B2FA0" strokeWidth="1" strokeDasharray="5 9" />
          <circle cx="480" cy="240" r="230" stroke="#6B2FA0" strokeWidth="0.8" strokeDasharray="4 10" />
          <circle cx="480" cy="240" r="280" stroke="white"   strokeWidth="0.6" strokeDasharray="3 12" />
        </svg>

        {/* Hex dot pattern — left side */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute left-0 bottom-0 w-64 h-64 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ap-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ap-dots)" />
        </svg>

        {/* Diagonal accent lines — top-left */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute left-0 top-0 w-56 h-56 opacity-[0.07]" viewBox="0 0 240 240" fill="none">
          <line x1="0" y1="80"  x2="160" y2="240" stroke="#3BC4C4" strokeWidth="1" />
          <line x1="0" y1="140" x2="100" y2="240" stroke="#3BC4C4" strokeWidth="1" />
          <line x1="80"  y1="0" x2="240" y2="160" stroke="#6B2FA0" strokeWidth="1" />
          <line x1="140" y1="0" x2="240" y2="100" stroke="#6B2FA0" strokeWidth="1" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium mb-12 transition-colors">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Home
          </Link>

          {/* Two-column: text left, "10" graphic right */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6">
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
                {(['Action', 'Plan'] as const).map((word, i) => (
                  <span key={word} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                    <motion.span
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.55, delay: 0.2 + i * 0.13, ease: [0.33, 1, 0.68, 1] }}
                      className="inline-block text-shimmer"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted text-xl leading-relaxed max-w-2xl"
              >
                <span className="text-teal font-bold text-2xl">10</span> concrete commitments to Cambridge residents — on transit, housing, safety,
                fairness, and a Regional government that actually delivers for this city.
              </motion.p>
            </div>

            {/* Highlighted "10" graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="hidden lg:flex items-center justify-center relative w-56 h-56 flex-shrink-0"
              aria-hidden="true"
            >
              {/* Outer pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-teal/20"
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-[-20px] rounded-full border border-purple/20"
                animate={{ scale: [1, 1.10, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-[-40px] rounded-full border border-teal/10"
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.05, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
              />

              {/* SVG dashed rings + spokes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 224 224" fill="none">
                <circle cx="112" cy="112" r="100" stroke="#3BC4C4" strokeWidth="1"   strokeDasharray="6 5"  opacity="0.35" />
                <circle cx="112" cy="112" r="80"  stroke="#6B2FA0" strokeWidth="0.8" strokeDasharray="4 7"  opacity="0.25" />
                {/* 8 spokes */}
                {[0,45,90,135,180,225,270,315].map(deg => {
                  const r = Math.PI * deg / 180
                  return (
                    <line
                      key={deg}
                      x1={112 + 82 * Math.cos(r)} y1={112 + 82 * Math.sin(r)}
                      x2={112 + 102 * Math.cos(r)} y2={112 + 102 * Math.sin(r)}
                      stroke={deg % 90 === 0 ? '#3BC4C4' : '#6B2FA0'}
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  )
                })}
                {/* Corner dots */}
                {[0,45,90,135,180,225,270,315].map(deg => {
                  const r = Math.PI * deg / 180
                  return (
                    <circle
                      key={`dot-${deg}`}
                      cx={112 + 100 * Math.cos(r)} cy={112 + 100 * Math.sin(r)}
                      r="3"
                      fill={deg % 90 === 0 ? '#3BC4C4' : '#6B2FA0'}
                      opacity="0.7"
                    />
                  )
                })}
              </svg>

              {/* Glowing backdrop circle */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-teal/10 to-purple/10 backdrop-blur-sm border border-white/10" />

              {/* The "10" number */}
              <span className="relative font-display text-[5.5rem] font-bold leading-none bg-gradient-to-br from-teal via-white to-purple bg-clip-text text-transparent drop-shadow-lg">
                10
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Cards section — dark gradient background ── */}
      <div className="relative bg-primary-dark py-20 overflow-hidden">

        {/* Hex grid */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cards-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
              <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="#1E3A8A" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cards-hex)" />
        </svg>

        {/* Ghost "10" watermark */}
        <div
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold leading-none"
          style={{ fontSize: 'clamp(14rem, 38vw, 30rem)', opacity: 0.05, color: '#1E3A8A' }}
          aria-hidden="true"
        >
          10
        </div>

        {/* Teal glow — left, offset below top edge */}
        <div
          className="absolute top-[15%] -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,196,196,0.28) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        {/* Purple glow — centre-right */}
        <div
          className="absolute top-1/2 -right-40 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(107,47,160,0.32) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        {/* Teal glow — bottom-right */}
        <div
          className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,196,196,0.20) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        {/* Purple glow — bottom-left */}
        <div
          className="absolute bottom-[10%] -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(107,47,160,0.20) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        {/* Diagonal lines — top-right */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute top-0 right-0 w-80 h-80 opacity-[0.1]" viewBox="0 0 320 320" fill="none">
          <line x1="320" y1="0"   x2="0"   y2="320" stroke="#3BC4C4" strokeWidth="1.2" />
          <line x1="320" y1="70"  x2="70"  y2="320" stroke="#3BC4C4" strokeWidth="1.2" />
          <line x1="320" y1="140" x2="140" y2="320" stroke="#6B2FA0" strokeWidth="1"   />
          <line x1="320" y1="210" x2="210" y2="320" stroke="#6B2FA0" strokeWidth="0.8" />
        </svg>

        {/* Concentric arcs — bottom-left */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute bottom-0 left-0 w-[440px] h-[440px] opacity-[0.12]" viewBox="0 0 440 440" fill="none">
          <circle cx="0" cy="440" r="140" stroke="#3BC4C4" strokeWidth="1.2" strokeDasharray="6 5" />
          <circle cx="0" cy="440" r="220" stroke="#6B2FA0" strokeWidth="1"   strokeDasharray="5 7" />
          <circle cx="0" cy="440" r="300" stroke="white"   strokeWidth="0.6" strokeDasharray="4 9" />
          <circle cx="0" cy="440" r="390" stroke="white"   strokeWidth="0.4" strokeDasharray="3 12" />
        </svg>

        {/* Concentric rings — top-left */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute top-0 left-0 w-72 h-72 opacity-[0.09]" viewBox="0 0 300 300" fill="none">
          <circle cx="0" cy="0" r="90"  stroke="#3BC4C4" strokeWidth="1.2" strokeDasharray="5 6" />
          <circle cx="0" cy="0" r="160" stroke="#6B2FA0" strokeWidth="1"   strokeDasharray="4 8" />
          <circle cx="0" cy="0" r="230" stroke="white"   strokeWidth="0.6" strokeDasharray="3 10" />
        </svg>

        {/* Diagonal lines — bottom-right */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute bottom-0 right-0 w-64 h-64 opacity-[0.1]" viewBox="0 0 260 260" fill="none">
          <line x1="260" y1="30"  x2="30"  y2="260" stroke="#6B2FA0" strokeWidth="1.2" />
          <line x1="260" y1="100" x2="100" y2="260" stroke="#6B2FA0" strokeWidth="1"   />
          <line x1="260" y1="170" x2="170" y2="260" stroke="#3BC4C4" strokeWidth="0.8" />
        </svg>

        {/* Cards */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {config.priorities.map((priority, i) => (
              <PriorityCard key={i} priority={priority} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Dark CTA footer ── */}
      <div className="bg-primary-dark py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-[1.2]">
            {(['Ready', 'to', 'build', 'this', 'Cambridge'] as const).map((word, i) => (
              <span key={word} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
                <motion.span
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
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
                transition={{ duration: 0.55, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block text-shimmer"
              >
                together?
              </motion.span>
            </span>
          </p>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            Join the campaign, support our work, or reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={config.donation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cta hover:bg-cta/90 text-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-cta hover:shadow-cta-lg"
            >
              Donate Today
            </a>
            <Link
              to="/"
              state={{ scrollTo: 'get-involved' }}
              className="inline-flex items-center text-white border border-white/25 hover:border-teal/50 hover:bg-white/[0.06] px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
