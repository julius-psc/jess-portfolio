export default function FloralSVG({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`floral-corner ${className}`}
      aria-hidden="true"
    >
      {/* Center circle */}
      <circle cx="90" cy="90" r="6" stroke="#9E9080" strokeWidth="0.8" />
      {/* Petals */}
      <ellipse cx="90" cy="60" rx="7" ry="22" stroke="#9E9080" strokeWidth="0.7" />
      <ellipse cx="90" cy="120" rx="7" ry="22" stroke="#9E9080" strokeWidth="0.7" />
      <ellipse cx="60" cy="90" rx="22" ry="7" stroke="#9E9080" strokeWidth="0.7" />
      <ellipse cx="120" cy="90" rx="22" ry="7" stroke="#9E9080" strokeWidth="0.7" />
      <ellipse cx="69.4" cy="69.4" rx="7" ry="22" transform="rotate(-45 69.4 69.4)" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="110.6" cy="110.6" rx="7" ry="22" transform="rotate(-45 110.6 110.6)" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="110.6" cy="69.4" rx="7" ry="22" transform="rotate(45 110.6 69.4)" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="69.4" cy="110.6" rx="7" ry="22" transform="rotate(45 69.4 110.6)" stroke="#9E9080" strokeWidth="0.6" />
      {/* Outer ring */}
      <circle cx="90" cy="90" r="36" stroke="#9E9080" strokeWidth="0.5" strokeDasharray="2 4" />
      {/* Tiny dots */}
      <circle cx="90" cy="48" r="1.5" fill="#9E9080" opacity="0.5" />
      <circle cx="90" cy="132" r="1.5" fill="#9E9080" opacity="0.5" />
      <circle cx="48" cy="90" r="1.5" fill="#9E9080" opacity="0.5" />
      <circle cx="132" cy="90" r="1.5" fill="#9E9080" opacity="0.5" />
      {/* Stems */}
      <line x1="90" y1="126" x2="90" y2="160" stroke="#9E9080" strokeWidth="0.6" />
      <line x1="78" y1="148" x2="90" y2="160" stroke="#9E9080" strokeWidth="0.5" />
      <line x1="102" y1="148" x2="90" y2="160" stroke="#9E9080" strokeWidth="0.5" />
      {/* Leaves */}
      <path d="M90 140 Q76 132 72 122 Q82 126 90 140Z" stroke="#9E9080" strokeWidth="0.5" fill="none" />
      <path d="M90 140 Q104 132 108 122 Q98 126 90 140Z" stroke="#9E9080" strokeWidth="0.5" fill="none" />
    </svg>
  )
}

export function SmallFloral({ size = 80, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`floral-corner ${className}`}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="3" stroke="#9E9080" strokeWidth="0.8" />
      <ellipse cx="40" cy="24" rx="4" ry="12" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="40" cy="56" rx="4" ry="12" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="24" cy="40" rx="12" ry="4" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="56" cy="40" rx="12" ry="4" stroke="#9E9080" strokeWidth="0.6" />
      <ellipse cx="28.7" cy="28.7" rx="4" ry="12" transform="rotate(-45 28.7 28.7)" stroke="#9E9080" strokeWidth="0.5" />
      <ellipse cx="51.3" cy="51.3" rx="4" ry="12" transform="rotate(-45 51.3 51.3)" stroke="#9E9080" strokeWidth="0.5" />
      <ellipse cx="51.3" cy="28.7" rx="4" ry="12" transform="rotate(45 51.3 28.7)" stroke="#9E9080" strokeWidth="0.5" />
      <ellipse cx="28.7" cy="51.3" rx="4" ry="12" transform="rotate(45 28.7 51.3)" stroke="#9E9080" strokeWidth="0.5" />
      <circle cx="40" cy="40" r="16" stroke="#9E9080" strokeWidth="0.4" strokeDasharray="1.5 3" />
    </svg>
  )
}
