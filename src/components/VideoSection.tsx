import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Film } from 'lucide-react'
import { config } from '../config/candidate'

// ── Helpers to normalise embed URLs ──────────────────────────────────────────

function youtubeEmbedUrl(raw: string): string | null {
  if (!raw) return null
  const m = raw.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  )
  if (m) return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1`
  if (raw.includes('youtube.com/embed/')) return raw
  return null
}

function vimeoEmbedUrl(raw: string): string | null {
  if (!raw) return null
  const m = raw.match(/vimeo\.com\/(?:.*\/)?(\d+)/)
  if (m) return `https://player.vimeo.com/video/${m[1]}?dnt=1`
  if (raw.includes('player.vimeo.com')) return raw
  return null
}

type VideoKind = 'youtube' | 'vimeo' | 'local' | 'none'

function resolveKind(): { kind: VideoKind; src: string } {
  const v = config.videoSection
  const yt = youtubeEmbedUrl(v.youtubeUrl)
  if (yt)            return { kind: 'youtube', src: yt   }
  const vi = vimeoEmbedUrl(v.vimeoUrl)
  if (vi)            return { kind: 'vimeo',   src: vi   }
  if (v.localVideo)  return { kind: 'local',   src: v.localVideo }
  return             { kind: 'none', src: '' }
}

// ── Placeholder component ─────────────────────────────────────────────────────

function VideoPlaceholder() {
  return (
    <div
      className="w-full aspect-video bg-primary rounded-2xl overflow-hidden relative flex items-center justify-center"
      aria-label="Video placeholder — campaign video will be placed here"
    >
      {/* Ambient teal glow — uses named CSS class from index.css, no hex in component */}
      <div className="absolute inset-0 opacity-30 bg-video-glow" aria-hidden="true" />

      {/* Faint film-strip grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Pulsing rings around play button */}
      <div className="relative flex items-center justify-center" aria-hidden="true">
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-teal/20"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-teal/15"
          animate={{ scale: [1, 1.9, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
        />
        {/* Play button */}
        <div className="relative w-20 h-20 bg-teal/20 hover:bg-teal/30 border border-teal/40 rounded-full flex items-center justify-center transition-colors">
          <Play size={28} className="text-teal ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 inset-x-0 px-6 py-5 flex items-center gap-2">
        <Film size={14} className="text-white/25 shrink-0" aria-hidden="true" />
        <p className="text-white/30 text-xs tracking-wide">
          Campaign video — client to provide. Drop file in{' '}
          <code className="text-white/40 font-mono">public/</code> and set{' '}
          <code className="text-white/40 font-mono">videoSection.localVideo</code> in config.
        </p>
      </div>
    </div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────

export function VideoSection() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { kind, src } = resolveKind()

  if (kind === 'none') return null

  return (
    <section
      id="video"
      ref={ref}
      className="py-24 sm:py-32 bg-white"
      aria-labelledby="video-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-teal text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          >
            {config.videoSection.label}
          </motion.span>

          <motion.h2
            id="video-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl font-bold text-primary-dark leading-[1.08] text-balance"
          >
            {config.videoSection.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-primary/70 text-lg mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            {config.videoSection.description}
          </motion.p>
        </div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.24, ease: 'easeOut' }}
          className="shadow-[0_24px_80px_rgba(10,31,92,0.14)] rounded-2xl overflow-hidden"
        >
          {kind === 'youtube' || kind === 'vimeo' ? (
            <div className="aspect-video">
              <iframe
                src={src}
                title={config.videoSection.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : kind === 'local' ? (
            <video
              controls
              className="w-full aspect-video bg-primary"
              aria-label={config.videoSection.title}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <VideoPlaceholder />
          )}
        </motion.div>

      </div>
    </section>
  )
}
