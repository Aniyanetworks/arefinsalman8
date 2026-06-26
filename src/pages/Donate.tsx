import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { config } from '../config/candidate'

const TIER_STYLES = [
  { gradient: 'linear-gradient(135deg, #0A2550 0%, #0D2D5E 100%)', hover: 'hover:shadow-[0_0_0_2px_#3BC4C4,0_16px_48px_rgba(59,196,196,0.3)]', accent: '#3BC4C4' },
  { gradient: 'linear-gradient(135deg, #0A2550 0%, #0D2D5E 100%)', hover: 'hover:shadow-[0_0_0_2px_#3BC4C4,0_16px_48px_rgba(59,196,196,0.3)]', accent: '#3BC4C4' },
  { gradient: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)', hover: 'hover:shadow-[0_0_0_2px_#3BC4C4,0_16px_48px_rgba(59,196,196,0.45)]', accent: '#3BC4C4' },
  { gradient: 'linear-gradient(135deg, #0A2550 0%, #0D2D5E 100%)', hover: 'hover:shadow-[0_0_0_2px_#6B2FA0,0_16px_48px_rgba(107,47,160,0.3)]', accent: '#6B2FA0' },
  { gradient: 'linear-gradient(135deg, #0A2550 0%, #0D2D5E 100%)', hover: 'hover:shadow-[0_0_0_2px_#6B2FA0,0_16px_48px_rgba(107,47,160,0.3)]', accent: '#6B2FA0' },
  { gradient: 'linear-gradient(135deg, #6B2FA0 0%, #4A1E7A 55%, #0A1F5C 100%)', hover: 'hover:shadow-[0_0_0_2px_#6B2FA0,0_16px_48px_rgba(107,47,160,0.45)]', accent: '#6B2FA0' },
]

export function Donate() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const tiers = config.donation.tiers

  return (
    <div className="min-h-screen bg-primary-dark relative overflow-hidden">

      {/* Background decorations */}
      <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="donate-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#donate-hex)" />
      </svg>
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.14] bg-purple pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.10] bg-teal pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full blur-[110px] opacity-[0.10] bg-purple pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">

        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-teal text-sm font-medium mb-12 transition-colors">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.18em] uppercase mb-5"
          >
            <ShieldCheck size={13} aria-hidden="true" />
            Secure Contribution
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.15] mb-4">
            <span className="inline-block overflow-hidden align-bottom mr-[0.22em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block text-white"
              >
                Support
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden align-bottom mr-[0.22em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.18, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block text-white"
              >
                the
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.28, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block text-shimmer"
              >
                Campaign
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-muted text-lg leading-relaxed max-w-xl mx-auto"
          >
            Choose a contribution amount. You will be taken to a secure Stripe page to complete your donation.
          </motion.p>
        </div>

        {/* Amount buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
        >
          {tiers.map((tier, i) => {
            const style = TIER_STYLES[i % TIER_STYLES.length]
            const isPlaceholder = !tier.stripeUrl
            const Tag = isPlaceholder ? 'div' : 'a'
            const linkProps = isPlaceholder
              ? {}
              : { href: tier.stripeUrl, target: '_blank', rel: 'noopener noreferrer' }

            return (
              <Tag
                key={tier.amount}
                {...linkProps}
                className={[
                  'group relative flex items-center justify-between px-7 py-5 rounded-2xl border border-white/[0.09]',
                  'transition-all duration-300 hover:-translate-y-1 overflow-hidden',
                  style.hover,
                  isPlaceholder ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer',
                ].join(' ')}
                style={{ background: style.gradient }}
                title={isPlaceholder ? 'Stripe URL not yet configured' : undefined}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${style.accent}99, ${style.accent})` }} aria-hidden="true" />

                {/* Inner shine */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" aria-hidden="true" />

                <div className="flex items-center gap-4 relative z-10">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {tier.display}
                  </span>
                  {tier.badge && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full text-white"
                      style={{ background: `${style.accent}33`, border: `1px solid ${style.accent}55` }}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>

                <ArrowRight
                  size={20}
                  className="relative z-10 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                  aria-hidden="true"
                />
              </Tag>
            )
          })}
        </motion.div>

        {/* Legal rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="rounded-2xl border border-white/[0.08] p-7 sm:p-8"
          style={{ background: 'linear-gradient(135deg, rgba(30,58,138,0.25) 0%, rgba(10,31,92,0.4) 100%)' }}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <ShieldCheck size={16} className="text-teal flex-shrink-0" aria-hidden="true" />
            <h2 className="font-display text-base font-bold text-white">Contribution Rules — Ontario Municipal Elections Act</h2>
          </div>
          <ul className="space-y-5">
            {config.donation.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal/60 mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white/75 text-sm font-semibold leading-snug mb-0.5">{rule.heading}</p>
                  <p className="text-muted text-xs leading-relaxed">{rule.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-white/25 text-xs mt-6 pt-5 border-t border-white/[0.07] leading-relaxed">
            {config.donation.note}
          </p>
        </motion.div>

      </div>
    </div>
  )
}
