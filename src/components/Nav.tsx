import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { config } from '../config/candidate'

const NAV_LINKS = [
  { label: 'About',      href: '#about'       },
  { label: 'Priorities', href: '#priorities'  },
  { label: 'Watch',      href: '#video'       },
  { label: 'Donate',     href: '#donate'      },
  { label: 'Get Involved', href: '#get-involved' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    scrollTo(href)
  }

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
          ? 'bg-primary-950/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="font-display font-bold text-xl text-white leading-none"
        >
          {config.candidate.name}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              role="listitem"
              onClick={() => handleLink(link.href)}
              className="text-white/75 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#get-involved')}
            className="bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
          >
            Get Involved
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
            exit={{ opacity: 0,  height: 0  }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-primary-950 border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  role="menuitem"
                  onClick={() => handleLink(link.href)}
                  className="text-white/80 hover:text-white text-left py-3.5 text-base font-medium border-b border-white/[0.06] last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                role="menuitem"
                onClick={() => handleLink('#get-involved')}
                className="mt-4 mb-2 bg-accent-500 hover:bg-accent-400 text-white py-3 rounded-full font-semibold transition-colors text-center"
              >
                Get Involved
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
