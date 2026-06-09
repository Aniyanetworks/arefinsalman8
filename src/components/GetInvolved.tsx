import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Twitter, Instagram, Facebook, ExternalLink, Heart, Send, Loader2 } from 'lucide-react'
import { config } from '../config/candidate'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name:       string
  email:      string
  postalCode: string
  message:    string
}

const EMPTY_FORM: FormData = { name: '', email: '', postalCode: '', message: '' }

const SOCIAL_LINKS = [
  { Icon: Twitter,   label: 'Twitter / X', href: config.contact.social.twitter   },
  { Icon: Instagram, label: 'Instagram',   href: config.contact.social.instagram },
  { Icon: Facebook,  label: 'Facebook',    href: config.contact.social.facebook  },
]

export function GetInvolved() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [status, setStatus] = useState<FormStatus>('idle')
  const [form,   setForm  ] = useState<FormData>(EMPTY_FORM)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    if (!config.webhookUrl) {
      // Dev mode: no webhook configured — simulate success so you can preview the form
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      setForm(EMPTY_FORM)
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
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  const fadeUp = (delay = 0) => ({
    initial:  { opacity: 0, y: 32 },
    animate:  inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  })

  return (
    <section
      id="get-involved"
      ref={ref}
      className="py-24 sm:py-32 bg-primary-950"
      aria-labelledby="get-involved-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <motion.span {...fadeUp(0)} className="inline-block text-accent-400 text-xs font-semibold tracking-[0.16em] uppercase mb-4">
            Join the Campaign
          </motion.span>
          <motion.h2
            id="get-involved-heading"
            {...fadeUp(0.08)}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Get Involved
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="text-white/55 text-lg mt-5 leading-relaxed">
            Volunteer, stay informed, or just say hello. Every connection helps build a
            stronger Cambridge.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-7 items-start">

          {/* ── Contact form ── */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-3 bg-white/[0.04] border border-white/10 rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-7">Send a Message</h3>

            {status === 'success' ? (
              <div className="text-center py-10" role="alert" aria-live="polite">
                <div
                  className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-green-400 text-2xl font-bold">✓</span>
                </div>
                <p className="text-white font-semibold text-xl mb-2">Message received!</p>
                <p className="text-white/55">We'll be in touch soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-accent-400 hover:text-accent-300 text-sm underline underline-offset-2 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact and volunteer form">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-white/65 text-sm font-medium mb-1.5">
                      Full Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-required="true"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white/8 border border-white/15 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-white/25 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-white/65 text-sm font-medium mb-1.5">
                      Postal Code
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      autoComplete="postal-code"
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="N3C 1A1"
                      className="w-full bg-white/8 border border-white/15 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-white/25 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/65 text-sm font-medium mb-1.5">
                    Email Address <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-required="true"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/8 border border-white/15 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-white/25 transition-colors text-sm"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className="block text-white/65 text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'd like to volunteer / I have a question about..."
                    className="w-full bg-white/8 border border-white/15 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-white/25 transition-colors resize-none text-sm"
                  />
                </div>

                {/* Ontario MEA privacy notice */}
                <p className="text-white/35 text-xs leading-relaxed mb-5">
                  Your information is used only for campaign communication and will not be shared
                  with third parties.
                </p>

                {status === 'error' && (
                  <p className="text-red-400 text-sm mb-4" role="alert" aria-live="assertive">
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href={`mailto:${config.contact.email}`} className="underline">
                      {config.contact.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 active:bg-accent-600 disabled:bg-accent-800 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-semibold transition-colors text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={17} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Side panel ── */}
          <motion.div
            {...fadeUp(0.3)}
            className="lg:col-span-2 space-y-5"
          >
            {/* Social */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-5">Follow Along</h3>
              <ul className="space-y-1" role="list">
                {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className="flex items-center gap-3 text-white/65 hover:text-white py-2.5 transition-colors group"
                    >
                      <span
                        className="w-9 h-9 bg-white/8 group-hover:bg-accent-500/20 rounded-lg flex items-center justify-center transition-colors shrink-0"
                        aria-hidden="true"
                      >
                        <Icon size={17} />
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Donation */}
            <div
              className="bg-accent-500/10 border border-accent-500/25 rounded-2xl p-6"
              aria-label="Support the campaign with a donation"
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart size={19} className="text-accent-400 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">Support the Campaign</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Financial contributions help us reach more Cambridge residents with our
                message. Donations are processed securely through our campaign platform.
              </p>
              <p className="text-accent-400/60 text-xs leading-relaxed mb-5">
                {config.donation.note}
              </p>
              <a
                href={config.donation.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to campaign (opens external site in new tab)"
                className="inline-flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-white px-5 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Donate Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
