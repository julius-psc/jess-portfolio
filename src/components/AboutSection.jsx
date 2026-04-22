import { motion } from 'framer-motion'
import { SmallFloral } from './FloralSVG'

const ABOUT_IMG = '/assets/images/jess-grace.JPG'

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      {/* Image */}
      <motion.div
        style={{ position: 'relative' }}
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="about-image-frame">
          <img
            src={ABOUT_IMG}
            alt="Jess Grace"
            className="about-img"
            loading="lazy"
          />
        </div>
        <div className="about-accent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <span className="label">About Me</span>

        <h2 style={{ marginTop: 24 }}>
          Hi, I'm <em>Jess</em>
        </h2>

        <p>
          I'm a photographer from Manchester with a genuine passion for capturing
          the world around me — from wildlife and nature to people and city streets.
        </p>

        <p>
          I started shooting because I couldn't stop noticing things I wanted to
          remember. Now I get to remember them forever.
        </p>

        <div className="about-signature">Jess</div>

        <a className="cta-link" href="#contact">Get in Touch →</a>
      </motion.div>
    </section>
  )
}
