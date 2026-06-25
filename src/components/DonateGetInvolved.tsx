import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Heart, Send, Loader2, ExternalLink,
  Twitter, Instagram, Facebook,
  User, Mail, MapPin, MessageSquare,
} from 'lucide-react'
import { config } from '../config/candidate'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
interface FormData { name: string; email: string; postalCode: string; message: string }
const EMPTY: FormData = { name: '', email: '', postalCode: '', message: '' }

function IconInput({
  id, name, type = 'text', icon: Icon, label, required, placeholder, autoComplete, value, onChange,
}: {
  id: string; name: string; type?: string; icon: React.ElementType
  label: string; required?: boolean; placeholder: string; autoComplete?: string
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-white/40 text-[11px] font-semibold uppercase tracking-[0.14em] mb-1.5">
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      <div className="relative flex items-center">
        <span className="absolute left-4 text-white/30 pointer-events-none" aria-hidden="true">
          <Icon size={16} />
        </span>
        <div className="absolute left-11 w-px h-5 bg-white/[0.1]" aria-hidden="true" />
        <input
          id={id} name={name} type={type} required={required} autoComplete={autoComplete}
          value={value} onChange={onChange} placeholder={placeholder}
          className="w-full bg-white/[0.06] border border-white/[0.1] hover:border-white/20 focus:border-teal focus:ring-2 focus:ring-teal/15 focus:outline-none rounded-xl pl-14 pr-4 py-3.5 text-white placeholder-white/20 transition-all text-sm"
        />
      </div>
    </div>
  )
}

export function DonateGetInvolved() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [status, setStatus] = useState<FormStatus>('idle')
  const [form,   setForm]   = useState<FormData>(EMPTY)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    if (!config.webhookUrl) {
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      setForm(EMPTY)
      return
    }
    try {
      const res = await fetch(config.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'campaign-site' }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="get-involved"
      ref={ref}
      className="relative bg-primary-dark overflow-hidden py-20 sm:py-28"
      aria-labelledby="dgi-heading"
    >
      {/* Hex bg */}
      <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dgi-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dgi-hex)" />
      </svg>
      <div className="absolute top-0 left-1/3 w-[480px] h-[480px] rounded-full blur-[130px] opacity-[0.07] bg-teal pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full blur-[110px] opacity-[0.07] bg-purple pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.18em] uppercase mb-4"
          >
            <Heart size={12} aria-hidden="true" />
            Join the Campaign
          </motion.span>
          <h2 id="dgi-heading" className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.08]">
            {(["Let's", 'Build', 'Cambridge'] as const).map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.09, ease: 'easeOut' }}
                className="inline-block text-white mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              className="inline-block text-shimmer"
            >
              Together.
            </motion.span>
          </h2>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="grid lg:grid-cols-[1fr_2fr] rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl"
        >

          {/* ── LEFT: Info panel ── */}
          <div className="relative bg-gradient-to-b from-primary-light/50 to-primary/50 p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
            {/* Arc decorations */}
            <svg aria-hidden="true" className="pointer-events-none select-none absolute -bottom-4 -left-4 w-56 h-56 opacity-[0.08]" viewBox="0 0 240 240" fill="none">
              <circle cx="0" cy="240" r="90"  stroke="#3BC4C4" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="0" cy="240" r="150" stroke="#3BC4C4" strokeWidth="1" strokeDasharray="5 9" />
              <circle cx="0" cy="240" r="210" stroke="white"   strokeWidth="0.6" strokeDasharray="4 12" />
            </svg>
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20 bg-teal pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold text-white mb-3">Get Involved</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Volunteer, canvass, host a conversation — or simply reach out. Every voice matters.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${config.contact.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal/15 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/25 transition-colors" aria-hidden="true">
                    <Mail size={15} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-teal text-xs group-hover:text-teal/75 transition-colors break-all">{config.contact.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal/15 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <MapPin size={15} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white/55 text-xs">{config.election.municipality}</p>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mb-3">Follow</p>
                <div className="flex items-center gap-2">
                  {[
                    { Icon: Twitter,   href: config.contact.social.twitter,   label: 'Twitter'   },
                    { Icon: Instagram, href: config.contact.social.instagram, label: 'Instagram' },
                    { Icon: Facebook,  href: config.contact.social.facebook,  label: 'Facebook'  },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className="w-9 h-9 bg-white/[0.07] hover:bg-teal/20 border border-white/[0.08] hover:border-teal/30 rounded-xl flex items-center justify-center text-white/40 hover:text-teal transition-all"
                    >
                      <Icon size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Donate CTA at bottom */}
            <div className="relative z-10 mt-8 pt-8 border-t border-white/[0.08]">
              <p className="text-white/35 text-xs mb-3">Want to support financially?</p>
              <a
                href={config.donation.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to the campaign (opens in a new tab)"
                className="group inline-flex items-center gap-2 bg-cta hover:bg-cta/90 text-primary-dark px-6 py-3 rounded-full font-bold text-sm transition-all shadow-cta hover:shadow-cta-lg"
              >
                <Heart size={15} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                Donate Today
                <ExternalLink size={12} className="opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form panel ── */}
          <div className="relative bg-primary/40 p-8 sm:p-10 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-15 bg-purple pointer-events-none" aria-hidden="true" />

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center" role="alert" aria-live="polite">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(to bottom right, #3BC4C4, #6B2FA0)' }} aria-hidden="true">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <p className="text-white font-display text-2xl font-bold mb-2">Message received!</p>
                <p className="text-muted mb-6">We'll be in touch soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-teal hover:text-teal/80 text-sm underline underline-offset-2 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="relative z-10 space-y-4" onSubmit={handleSubmit} noValidate aria-label="Get involved contact form">

                <div className="grid sm:grid-cols-2 gap-4">
                  <IconInput
                    id="gi-name" name="name" icon={User} label="Full Name" required
                    placeholder="Jane Doe" autoComplete="name"
                    value={form.name} onChange={handleChange}
                  />
                  <IconInput
                    id="gi-postal" name="postalCode" icon={MapPin} label="Postal Code"
                    placeholder="N3C 1A1" autoComplete="postal-code"
                    value={form.postalCode} onChange={handleChange}
                  />
                </div>

                <IconInput
                  id="gi-email" name="email" type="email" icon={Mail} label="Email Address" required
                  placeholder="you@example.com" autoComplete="email"
                  value={form.email} onChange={handleChange}
                />

                {/* Message field — custom since it's a textarea */}
                <div>
                  <label htmlFor="gi-message" className="block text-white/40 text-[11px] font-semibold uppercase tracking-[0.14em] mb-1.5">
                    How would you like to help?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-white/30 pointer-events-none" aria-hidden="true">
                      <MessageSquare size={16} />
                    </span>
                    <div className="absolute left-11 top-3 bottom-3 w-px bg-white/[0.1]" aria-hidden="true" />
                    <textarea
                      id="gi-message" name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Volunteer, lawn sign, host an event…"
                      className="w-full bg-white/[0.06] border border-white/[0.1] hover:border-white/20 focus:border-teal focus:ring-2 focus:ring-teal/15 focus:outline-none rounded-xl pl-14 pr-4 py-3.5 text-white placeholder-white/20 transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                <p className="text-white/20 text-xs leading-relaxed">
                  Your information is used only for campaign communication and will not be shared with third parties.
                </p>

                {status === 'error' && (
                  <p className="text-red-400 text-sm" role="alert">
                    Something went wrong. Email us at{' '}
                    <a href={`mailto:${config.contact.email}`} className="underline">{config.contact.email}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 text-white py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(to right, #3BC4C4, #6B2FA0)' }}
                >
                  {status === 'submitting' ? (
                    <><Loader2 size={17} className="animate-spin" aria-hidden="true" /> Sending…</>
                  ) : (
                    <><Send size={17} aria-hidden="true" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
