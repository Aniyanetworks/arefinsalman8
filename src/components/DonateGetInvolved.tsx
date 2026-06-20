import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Send, Loader2, ExternalLink, Twitter, Instagram, Facebook } from 'lucide-react'
import { config } from '../config/candidate'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
interface FormData { name: string; email: string; postalCode: string; message: string }
const EMPTY: FormData = { name: '', email: '', postalCode: '', message: '' }

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
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, source: 'campaign-site' }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full bg-white/10 border border-white/15 focus:border-teal focus:ring-2 focus:ring-teal/25 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-white/30 transition-colors text-sm'

  return (
    <section
      id="get-involved"
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="action-heading"
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 lg:w-1/2 bg-primary" />
        <div className="absolute inset-0 lg:left-1/2 bg-primary-dark" />
        {/* Diagonal divider on desktop */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 left-[calc(50%-60px)] w-32 bg-primary-dark"
          style={{ clipPath: 'polygon(60px 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2">

          {/* ── LEFT: Donate ── */}
          <div className="py-12 sm:py-16 lg:pr-14 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.18em] uppercase mb-6">
                <Heart size={12} aria-hidden="true" />
                Support the Campaign
              </span>

              <h2
                id="action-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.06] mb-5"
              >
                Make a<br />
                <span className="text-teal">Real Difference.</span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                Grassroots contributions power lawn signs, canvassing, and the community events
                that let us have real conversations across Cambridge. Every dollar stays local.
              </p>

              <a
                href={config.donation.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to the campaign (opens in a new tab)"
                className="group inline-flex items-center gap-3 bg-cta hover:bg-cta/90 text-primary-dark px-10 py-5 rounded-full font-bold text-xl transition-all shadow-cta hover:shadow-cta-lg mb-6 self-start"
              >
                <Heart size={20} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                Donate Today
                <ExternalLink size={15} className="opacity-60" aria-hidden="true" />
              </a>

              <p className="text-white/30 text-xs leading-relaxed max-w-xs">
                {config.donation.note}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-10">
                <p className="text-white/35 text-xs uppercase tracking-widest font-medium mr-1">Follow</p>
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
                    className="w-9 h-9 bg-white/[0.08] hover:bg-teal/20 rounded-lg flex items-center justify-center text-white/50 hover:text-teal transition-colors"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Get Involved form ── */}
          <div className="py-12 sm:py-16 lg:pl-14 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            >
              <span className="inline-block text-teal text-xs font-semibold tracking-[0.18em] uppercase mb-6">
                Join the Movement
              </span>

              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.06] mb-5">
                Get<br />
                <span className="text-teal">Involved.</span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Volunteer, canvass, host a conversation — or simply reach out. Every voice matters.
              </p>

              {status === 'success' ? (
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <div
                    className="w-14 h-14 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <span className="text-teal text-2xl font-bold">✓</span>
                  </div>
                  <p className="text-white font-semibold text-xl mb-2">Message received!</p>
                  <p className="text-white/55 mb-6">We'll be in touch soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-teal hover:text-teal/80 text-sm underline underline-offset-2 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Get involved contact form">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="gi-name" className="block text-white/60 text-sm font-medium mb-1.5">
                        Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                      </label>
                      <input id="gi-name" name="name" type="text" required autoComplete="name"
                        value={form.name} onChange={handleChange} placeholder="Jane Doe" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="gi-postal" className="block text-white/60 text-sm font-medium mb-1.5">
                        Postal Code
                      </label>
                      <input id="gi-postal" name="postalCode" type="text" autoComplete="postal-code"
                        value={form.postalCode} onChange={handleChange} placeholder="N3C 1A1" className={inputCls} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="gi-email" className="block text-white/60 text-sm font-medium mb-1.5">
                      Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input id="gi-email" name="email" type="email" required autoComplete="email"
                      value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputCls} />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="gi-message" className="block text-white/60 text-sm font-medium mb-1.5">
                      How would you like to help?
                    </label>
                    <textarea id="gi-message" name="message" rows={3}
                      value={form.message} onChange={handleChange}
                      placeholder="Volunteer, lawn sign, host an event…"
                      className={`${inputCls} resize-none`} />
                  </div>

                  <p className="text-white/30 text-xs leading-relaxed mb-5">
                    Your information is used only for campaign communication and will not be shared with third parties.
                  </p>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm mb-4" role="alert">
                      Something went wrong. Email us at{' '}
                      <a href={`mailto:${config.contact.email}`} className="underline">{config.contact.email}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-primary-light hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-full font-bold text-base transition-colors"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 size={17} className="animate-spin" aria-hidden="true" /> Sending…</>
                    ) : (
                      <><Send size={17} aria-hidden="true" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
