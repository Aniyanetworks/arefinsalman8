import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { config } from '../config/candidate'
import { useDonate } from './DonateModal'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location     = useLocation()
  const navigate     = useNavigate()
  const { openDonate } = useDonate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 300)
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const linkCls = 'text-white/75 hover:text-white text-sm font-medium tracking-wide transition-colors'

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-primary-dark/96 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo / wordmark */}
        <Link
          to="/"
          aria-label="Home — Salman Arefin for Regional Councillor"
          className="font-display font-bold text-xl text-white leading-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {config.candidate.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7" role="list">
          <Link to="/my-story"    className={linkCls} role="listitem">My Story</Link>
          <Link to="/action-plan" className={linkCls} role="listitem">Action Plan</Link>
          <button onClick={() => scrollToSection('#video')}        className={linkCls}>Watch</button>
          <button onClick={() => scrollToSection('#get-involved')} className={linkCls}>Contact</button>
          <button
            onClick={openDonate}
            className="bg-cta hover:bg-cta/90 text-primary-dark px-5 py-2 rounded-full text-sm font-bold transition-all shadow-cta hover:shadow-cta-lg"
          >
            Donate
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden text-white p-2 -mr-2 rounded"
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0,  height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-primary-dark border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
              <Link
                to="/my-story"
                role="menuitem"
                className="text-white/80 hover:text-white text-left py-3.5 text-base font-medium border-b border-white/[0.06] transition-colors"
              >
                My Story
              </Link>
              <Link
                to="/action-plan"
                role="menuitem"
                className="text-white/80 hover:text-white text-left py-3.5 text-base font-medium border-b border-white/[0.06] transition-colors"
              >
                Action Plan
              </Link>
              <button
                role="menuitem"
                onClick={() => scrollToSection('#video')}
                className="text-white/80 hover:text-white text-left py-3.5 text-base font-medium border-b border-white/[0.06] transition-colors"
              >
                Watch
              </button>
              <button
                role="menuitem"
                onClick={() => scrollToSection('#get-involved')}
                className="text-white/80 hover:text-white text-left py-3.5 text-base font-medium border-b border-white/[0.06] transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => { setMenuOpen(false); openDonate() }}
                role="menuitem"
                className="mt-4 mb-2 bg-cta hover:bg-cta/90 text-primary-dark py-3 rounded-full font-bold transition-all text-center shadow-cta w-full"
              >
                Donate Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
