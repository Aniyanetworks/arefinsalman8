import { config } from '../config/candidate'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-primary-950 border-t border-white/[0.07]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Top grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          <div>
            <p className="font-display text-white font-bold text-xl mb-1.5">
              {config.candidate.name}
            </p>
            <p className="text-white/45 text-sm leading-snug">
              {config.election.position}<br />
              {config.election.municipality}
            </p>
          </div>

          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.12em] mb-3">
              Contact
            </p>
            <a
              href={`mailto:${config.contact.email}`}
              className="text-accent-400 hover:text-accent-300 text-sm transition-colors"
            >
              {config.contact.email}
            </a>
          </div>

          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.12em] mb-3">
              Election Day
            </p>
            <p className="text-white/45 text-sm">{config.election.date}</p>
            <p className="text-white/30 text-sm mt-1">{config.election.municipality}</p>
          </div>

        </div>

        {/* Legal / compliance block */}
        <div className="border-t border-white/[0.07] pt-8 space-y-3">

          {/* Ontario MEA — required authorization line */}
          <p className="text-white/55 text-sm font-medium">
            Authorized by the {config.candidate.name} Campaign.
          </p>

          {/* MEA — required non-affiliation disclaimer */}
          <p className="text-white/35 text-xs leading-relaxed max-w-3xl">
            This is the personal campaign website of {config.candidate.name} and is not
            affiliated with the City of Cambridge or Region of Waterloo.
          </p>

          {/* Copyright */}
          <p className="text-white/20 text-xs">
            © {year} {config.candidate.name} Campaign. All rights reserved.
          </p>

        </div>

        {/* Agency credit */}
        <div className="border-t border-white/[0.05] mt-6 pt-5">
          <p className="text-white/20 text-xs text-center tracking-wide">
            Designed &amp; Developed by{' '}
            <a
              href="https://aniyanetworks.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 font-medium hover:text-accent-400 transition-colors"
              aria-label="Aniya Network Solutions Inc. (opens in a new tab)"
            >
              Aniya Network Solutions Inc.
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
