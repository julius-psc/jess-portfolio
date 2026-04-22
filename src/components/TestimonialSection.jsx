const testimonials = [
  {
    quote: "Working with Claire was the most magical experience. She caught every quiet glance, every real laugh — and gave us photographs we'll treasure for our entire lives.",
    name: "Sophia & James",
    detail: "Couples Session · Malibu, CA",
  },
  {
    quote: "I've never felt so comfortable in front of a camera. Claire has this rare gift of making you forget she's there — and the images she creates are genuinely breathtaking.",
    name: "Olivia Chen",
    detail: "Portrait Session · San Francisco, CA",
  },
  {
    quote: "The photographs don't just document our wedding day — they capture the feeling of it. The warmth, the joy, the love. We are endlessly grateful.",
    name: "Emma & Thomas",
    detail: "Wedding · Napa Valley, CA",
  },
]

export default function TestimonialSection() {
  return (
    <section className="testimonial-section" id="testimonials">
      <span className="label" style={{ display: 'block', marginBottom: '48px' }}>
        Kind Words
      </span>

      {/* Show one featured testimonial prominently */}
      <blockquote className="testimonial-quote reveal">
        "{testimonials[0].quote}"
      </blockquote>
      <p className="testimonial-attr reveal reveal-delay-1">
        — {testimonials[0].name} · {testimonials[0].detail}
      </p>

      {/* Mini testimonial cards below */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          marginTop: '64px',
          background: 'var(--beige-mid)',
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              background: 'var(--beige)',
              padding: '36px 32px',
              textAlign: 'left',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '16px',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              "{t.quote}"
            </p>
            <div>
              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: 'var(--charcoal)',
                  marginBottom: '4px',
                }}
              >
                {t.name}
              </div>
              <div className="label" style={{ fontSize: '10px' }}>
                {t.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
