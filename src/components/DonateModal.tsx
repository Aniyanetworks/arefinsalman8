import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ShieldCheck } from 'lucide-react'
import { config } from '../config/candidate'

// ── Context ──────────────────────────────────────────────────────────────────

interface DonateCtx { openDonate: () => void }
const Ctx = createContext<DonateCtx>({ openDonate: () => {} })
export const useDonate = () => useContext(Ctx)

// ── Tier styles ───────────────────────────────────────────────────────────────

const TIER_STYLES = [
  { gradient: 'linear-gradient(135deg, #0d2255 0%, #0f2860 100%)', accent: '#3BC4C4', shadow: 'rgba(59,196,196,0.35)' },
  { gradient: 'linear-gradient(135deg, #0d2255 0%, #0f2860 100%)', accent: '#3BC4C4', shadow: 'rgba(59,196,196,0.35)' },
  { gradient: 'linear-gradient(135deg, #3BC4C4 0%, #1E3A8A 55%, #0A1F5C 100%)', accent: '#3BC4C4', shadow: 'rgba(59,196,196,0.45)' },
  { gradient: 'linear-gradient(135deg, #0d2255 0%, #0f2860 100%)', accent: '#6B2FA0', shadow: 'rgba(107,47,160,0.35)' },
  { gradient: 'linear-gradient(135deg, #0d2255 0%, #0f2860 100%)', accent: '#6B2FA0', shadow: 'rgba(107,47,160,0.35)' },
  { gradient: 'linear-gradient(135deg, #6B2FA0 0%, #4A1E7A 55%, #0A1F5C 100%)', accent: '#6B2FA0', shadow: 'rgba(107,47,160,0.45)' },
]

// ── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ onClose }: { onClose: () => void }) {
  const tiers = config.donation.tiers

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Donate to the campaign"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/[0.1]"
        style={{ background: 'linear-gradient(160deg, #0d2560 0%, #0A1F5C 100%)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Gradient top border */}
        <div className="h-[3px] w-full rounded-t-3xl" style={{ background: 'linear-gradient(to right, #3BC4C4, #6B2FA0, #3BC4C4)' }} aria-hidden="true" />

        {/* Ambient glow */}
        <div className="absolute -top-16 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: '#6B2FA0' }} aria-hidden="true" />
        <div className="absolute bottom-0 -left-10 w-48 h-48 rounded-full blur-[60px] opacity-15 pointer-events-none" style={{ background: '#3BC4C4' }} aria-hidden="true" />

        {/* Hex pattern */}
        <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.04] rounded-3xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dm-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
              <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dm-hex)" />
        </svg>

        <div className="relative z-10 p-6 sm:p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={13} className="text-teal" aria-hidden="true" />
                <span className="text-teal text-[10px] font-bold tracking-[0.18em] uppercase">Secure Contribution</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Support the{' '}
                <span className="text-shimmer">Campaign</span>
              </h2>
              <p className="text-muted text-sm mt-1.5 leading-relaxed">
                Choose an amount — you'll go to a secure Stripe page.
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 flex-shrink-0 w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white transition-all"
              aria-label="Close donation modal"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Amount grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {tiers.map((tier, i) => {
              const s = TIER_STYLES[i % TIER_STYLES.length]
              const isPlaceholder = !tier.stripeUrl
              const Tag = isPlaceholder ? 'div' : 'a'
              const linkProps = isPlaceholder ? {} : { href: tier.stripeUrl, target: '_blank', rel: 'noopener noreferrer' }

              return (
                <Tag
                  key={tier.amount}
                  {...linkProps}
                  className={[
                    'group relative flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.09]',
                    'transition-all duration-250 overflow-hidden',
                    isPlaceholder
                      ? 'opacity-60 cursor-not-allowed'
                      : 'cursor-pointer hover:-translate-y-0.5',
                  ].join(' ')}
                  style={{
                    background: s.gradient,
                    ...(isPlaceholder ? {} : { ['--tw-shadow' as string]: `0 0 0 2px ${s.accent}, 0 12px 36px ${s.shadow}` }),
                  }}
                  title={isPlaceholder ? 'Stripe URL coming soon' : undefined}
                >
                  {/* top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${s.accent}66, ${s.accent})` }} aria-hidden="true" />
                  {/* shine */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" aria-hidden="true" />

                  <div className="flex items-center gap-3 relative z-10">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {tier.display}
                    </span>
                    {tier.badge && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-full"
                        style={{ background: `${s.accent}30`, border: `1px solid ${s.accent}55`, color: s.accent }}
                      >
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <ArrowRight
                    size={17}
                    className="relative z-10 text-white/35 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                    aria-hidden="true"
                  />
                </Tag>
              )
            })}
          </div>

          {/* Legal note */}
          <p className="text-white/25 text-[10px] leading-relaxed text-center border-t border-white/[0.07] pt-5">
            {config.donation.note}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Provider ──────────────────────────────────────────────────────────────────

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openDonate  = useCallback(() => setOpen(true),  [])
  const closeDonate = useCallback(() => setOpen(false), [])

  return (
    <Ctx.Provider value={{ openDonate }}>
      {children}
      <AnimatePresence>
        {open && <Modal onClose={closeDonate} />}
      </AnimatePresence>
    </Ctx.Provider>
  )
}
