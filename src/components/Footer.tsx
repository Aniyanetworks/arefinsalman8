import { Link, useNavigate } from 'react-router-dom'
import { Mail, MapPin, Twitter, Instagram, Facebook, ArrowUpRight, Heart } from 'lucide-react'
import { config } from '../config/candidate'
import { useDonate } from './DonateModal'

function NavLink({ to, label, external }: { to: string; label: string; external?: boolean }) {
  return (
    <li>
      <Link
        to={to}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group inline-flex items-center gap-2 text-white/45 hover:text-teal text-sm transition-colors"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-teal group-hover:scale-125 transition-all flex-shrink-0"
          aria-hidden="true"
        />
        {label}
        {external && <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-70" aria-hidden="true" />}
      </Link>
    </li>
  )
}

export function Footer() {
  const year         = new Date().getFullYear()
  const navigate     = useNavigate()
  const { openDonate } = useDonate()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <footer className="relative bg-primary-dark overflow-hidden" role="contentinfo">

      {/* Gradient top border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-teal via-purple to-teal" aria-hidden="true" />

      {/* Hex grid bg */}
      <svg aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon points="28,2 54,16 54,32 28,46 2,32 2,16" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-hex)" />
      </svg>

      {/* Ambient glows */}
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full blur-[100px] opacity-[0.07] bg-teal pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.06] bg-purple pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand ── */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <p className="font-display text-2xl font-bold text-white leading-tight tracking-tight">
                {config.candidate.name}
              </p>
              <p className="text-teal font-extrabold text-[10px] uppercase tracking-[0.3em] my-1.5">
                FOR
              </p>
              <p className="text-white/45 text-sm leading-snug">
                Regional Councillor — Cambridge
              </p>
            </div>
            <p className="text-white/22 text-xs leading-relaxed max-w-[200px] mb-5">
              Building a stronger Cambridge through community-first leadership.
            </p>
            {/* Social icons */}
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
                  className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-teal/20 border border-white/[0.08] hover:border-teal/30 flex items-center justify-center text-white/40 hover:text-teal transition-all"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Pages ── */}
          <div>
            <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">Pages</p>
            <ul className="space-y-3">
              <NavLink to="/"            label="Home"        />
              <NavLink to="/my-story"    label="My Story"    />
              <NavLink to="/action-plan" label="Action Plan" />
            </ul>
          </div>

          {/* ── Take Action ── */}
          <div>
            <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">Take Action</p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollTo('get-involved')}
                  className="group inline-flex items-center gap-2 text-white/45 hover:text-teal text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-teal group-hover:scale-125 transition-all flex-shrink-0" aria-hidden="true" />
                  Get Involved
                </button>
              </li>
              <li>
                <button
                  onClick={openDonate}
                  className="group inline-flex items-center gap-2 text-white/45 hover:text-teal text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-teal group-hover:scale-125 transition-all flex-shrink-0" aria-hidden="true" />
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('get-involved')}
                  className="group inline-flex items-center gap-2 text-white/45 hover:text-teal text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-teal group-hover:scale-125 transition-all flex-shrink-0" aria-hidden="true" />
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('get-involved')}
                  className="group inline-flex items-center gap-2 text-white/45 hover:text-teal text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-teal group-hover:scale-125 transition-all flex-shrink-0" aria-hidden="true" />
                  Lawn Sign
                </button>
              </li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">Contact</p>
            <div className="space-y-4">
              <a
                href={`mailto:${config.contact.email}`}
                className="flex items-start gap-2.5 text-teal hover:text-teal/70 transition-colors min-w-0"
                aria-label={`Email ${config.contact.email}`}
              >
                <Mail size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[11px] whitespace-nowrap">{config.contact.email}</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-white/25 flex-shrink-0" aria-hidden="true" />
                <p className="text-white/30 text-xs">{config.election.municipality}</p>
              </div>
            </div>

            {/* Donate pill */}
            <button
              onClick={openDonate}
              className="mt-6 inline-flex items-center gap-1.5 bg-cta/90 hover:bg-cta text-primary-dark text-xs font-bold px-4 py-2 rounded-full transition-all"
            >
              <Heart size={12} aria-hidden="true" />
              Donate Today
            </button>
          </div>

        </div>

        {/* Divider + legal */}
        <div className="border-t border-white/[0.10] pt-7 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-white/55 text-xs leading-relaxed max-w-xl">
              Authorized by the {config.candidate.name} Campaign. Not affiliated with the City of Cambridge or Region of Waterloo.
            </p>
            <p className="text-white/45 text-xs whitespace-nowrap">
              © {year} {config.candidate.name} Campaign
            </p>
          </div>
        </div>

        {/* Dev credit */}
        <div className="border-t border-white/[0.08] pt-5">
          <p className="text-white/45 text-xs text-center tracking-wide">
            Designed &amp; Developed by{' '}
            <a
              href="https://aniyanetworks.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aniya Network Solutions Inc. (opens in a new tab)"
              className="text-white/65 font-medium hover:text-teal transition-colors"
            >
              Aniya Network Solutions Inc.
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
