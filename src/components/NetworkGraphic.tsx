export function NetworkGraphic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer dashed orbit rings */}
      <circle cx="210" cy="170" r="148" stroke="#3BC4C4" strokeWidth="0.6" strokeDasharray="6 8" opacity="0.12" />
      <circle cx="210" cy="170" r="108" stroke="#6B2FA0" strokeWidth="0.6" strokeDasharray="5 7" opacity="0.10" />

      {/* Spoke lines: center → peripheral nodes */}
      <line x1="210" y1="170" x2="210" y2="38"  stroke="#3BC4C4" strokeWidth="1" strokeDasharray="5 5" opacity="0.30" />
      <line x1="210" y1="170" x2="345" y2="98"  stroke="#3BC4C4" strokeWidth="1" strokeDasharray="5 5" opacity="0.30" />
      <line x1="210" y1="170" x2="345" y2="242" stroke="#6B2FA0" strokeWidth="1" strokeDasharray="5 5" opacity="0.30" />
      <line x1="210" y1="170" x2="210" y2="302" stroke="#6B2FA0" strokeWidth="1" strokeDasharray="5 5" opacity="0.30" />
      <line x1="210" y1="170" x2="75"  y2="242" stroke="#6B2FA0" strokeWidth="1" strokeDasharray="5 5" opacity="0.30" />
      <line x1="210" y1="170" x2="75"  y2="98"  stroke="#3BC4C4" strokeWidth="1" strokeDasharray="5 5" opacity="0.30" />

      {/* Outer hexagon ring (node-to-node) */}
      <polygon points="210,38 345,98 345,242 210,302 75,242 75,98"
        stroke="white" strokeWidth="0.5" opacity="0.07" fill="none" />

      {/* Midpoint accent dots on spokes */}
      <circle cx="210" cy="104" r="3.5" fill="white" opacity="0.18" />
      <circle cx="278" cy="134" r="3.5" fill="white" opacity="0.18" />
      <circle cx="278" cy="206" r="3.5" fill="white" opacity="0.18" />
      <circle cx="210" cy="236" r="3.5" fill="white" opacity="0.18" />
      <circle cx="142" cy="206" r="3.5" fill="white" opacity="0.18" />
      <circle cx="142" cy="134" r="3.5" fill="white" opacity="0.18" />

      {/* Peripheral nodes */}
      <circle cx="210" cy="38"  r="9"  fill="#3BC4C4" opacity="0.55" />
      <circle cx="345" cy="98"  r="11" fill="#3BC4C4" opacity="0.45" />
      <circle cx="345" cy="242" r="8"  fill="#6B2FA0" opacity="0.60" />
      <circle cx="210" cy="302" r="10" fill="#6B2FA0" opacity="0.50" />
      <circle cx="75"  cy="242" r="9"  fill="#6B2FA0" opacity="0.55" />
      <circle cx="75"  cy="98"  r="11" fill="#3BC4C4" opacity="0.45" />

      {/* Small secondary nodes off the peripheral ring */}
      <circle cx="280" cy="50"  r="5" fill="#3BC4C4" opacity="0.30" />
      <circle cx="370" cy="170" r="5" fill="white"   opacity="0.15" />
      <circle cx="280" cy="290" r="5" fill="#6B2FA0"  opacity="0.30" />
      <circle cx="140" cy="290" r="5" fill="#6B2FA0"  opacity="0.30" />
      <circle cx="50"  cy="170" r="5" fill="white"   opacity="0.15" />
      <circle cx="140" cy="50"  r="5" fill="#3BC4C4" opacity="0.30" />

      {/* Faint lines to secondary nodes */}
      <line x1="345" y1="98"  x2="280" y2="50"  stroke="white" strokeWidth="0.5" opacity="0.08" />
      <line x1="345" y1="242" x2="370" y2="170" stroke="white" strokeWidth="0.5" opacity="0.08" />
      <line x1="345" y1="242" x2="280" y2="290" stroke="white" strokeWidth="0.5" opacity="0.08" />
      <line x1="75"  cy="242" x2="140" y2="290" stroke="white" strokeWidth="0.5" opacity="0.08" />
      <line x1="75"  y1="98"  x2="140" y2="50"  stroke="white" strokeWidth="0.5" opacity="0.08" />
      <line x1="75"  y1="98"  x2="50"  y2="170" stroke="white" strokeWidth="0.5" opacity="0.08" />

      {/* Central glow layers */}
      <circle cx="210" cy="170" r="52" fill="#3BC4C4" opacity="0.04" />
      <circle cx="210" cy="170" r="34" fill="#3BC4C4" opacity="0.09" />
      <circle cx="210" cy="170" r="20" fill="#3BC4C4" opacity="0.22" />
      {/* Central dot */}
      <circle cx="210" cy="170" r="11" fill="#3BC4C4" opacity="0.90" />
      <circle cx="210" cy="170" r="5"  fill="white"   opacity="0.85" />
    </svg>
  )
}
