import { motion } from 'framer-motion'

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
  </svg>
)

export default function CtaSection() {
  return (
    <section className="cta-section" id="contact">
      <motion.div
        className="cta-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="label">Manchester & Beyond</span>

        <h2 style={{ marginTop: 20 }}>
          Offering Shoots<br />
          Across <em>Manchester</em>
        </h2>

        <p>
          Based in Manchester, UK. Feel free to reach out on Instagram or TikTok.
          I would love to hear from you.
        </p>

        <div className="cta-socials">
          <a
            className="cta-social-btn"
            href="https://www.instagram.com/photography_by_jessgrace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            @photography_by_jessgrace
          </a>
          <a
            className="cta-social-btn"
            href="https://www.tiktok.com/@photography_by_jessgrace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TikTokIcon />
            @photography_by_jessgrace
          </a>
        </div>
      </motion.div>
    </section>
  )
}
