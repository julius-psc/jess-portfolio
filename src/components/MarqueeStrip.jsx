const items = [
  'Wildlife',
  'Travel & Nature',
  'Street Style',
  'Portrait & Fashion',
  'Manchester, UK',
  'Urban Photography',
  'Outdoor Shoots',
  'Candid Moments',
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
