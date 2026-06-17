import { Link } from 'react-router-dom'
import { config } from '../config/candidate'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-primary-dark border-t border-white/[0.07]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Top grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-display text-white font-bold text-xl mb-1.5">{config.candidate.name}</p>
            <p className="text-white/45 text-sm leading-snug">
              {config.election.position}<br />{config.election.municipality}
            </p>
          </div>
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.12em] mb-3">Pages</p>
            <ul className="space-y-1.5">
              <li><Link to="/"            className="text-white/55 hover:text-teal text-sm transition-colors">Home</Link></li>
              <li><Link to="/my-story"    className="text-white/55 hover:text-teal text-sm transition-colors">My Story</Link></li>
              <li><Link to="/action-plan" className="text-white/55 hover:text-teal text-sm transition-colors">Action Plan</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.12em] mb-3">Contact</p>
            <a href={"mailto:" + config.contact.email} className="text-teal hover:text-teal/80 text-sm transition-colors block mb-2">
              {config.contact.email}
            </a>
            <p className="text-white/30 text-xs mt-3">{config.election.date}</p>
            <p className="text-white/20 text-xs mt-0.5">{config.election.municipality}</p>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-8 space-y-3">
          <p className="text-white/55 text-sm font-medium">Authorized by the {config.candidate.name} Campaign.</p>
          <p className="text-white/35 text-xs leading-relaxed max-w-3xl">
            This is the personal campaign website of {config.candidate.name} and is not affiliated with the City of Cambridge or Region of Waterloo.
          </p>
          <p className="text-white/20 text-xs">© {year} {config.candidate.name} Campaign. All rights reserved.</p>
        </div>

        <div className="border-t border-white/[0.05] mt-6 pt-5">
          <p className="text-white/20 text-xs text-center tracking-wide">
            Designed &amp; Developed by{' '}
            <a href="https://aniyanetworks.net/" target="_blank" rel="noopener noreferrer"
               className="text-white/35 font-medium hover:text-teal transition-colors"
               aria-label="Aniya Network Solutions Inc. (opens in a new tab)">
              Aniya Network Solutions Inc.
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
