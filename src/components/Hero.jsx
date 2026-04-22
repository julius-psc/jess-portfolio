import { motion } from 'framer-motion'

const HERO_PORTRAIT = '/assets/images/04_Portrait_Fashion_Outdoor/hero1.jpeg'

// Right-side image strip
const gridImages = [
  '/assets/images/04_Portrait_Fashion_Outdoor/hero2.jpeg',
  '/assets/images/04_Portrait_Fashion_Outdoor/hero3.jpeg',
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* LEFT — text */}
      <div className="hero-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span className="label" variants={itemVariants}>
            Manchester, UK
          </motion.span>

          <motion.h1 className="hero-headline" variants={itemVariants}>
            Capturing<br />
            Life's <span className="italic">Beautiful</span><br />
            Moments
          </motion.h1>

          <motion.p className="hero-body" variants={itemVariants}>
            Photography is how I see the world, one frame at a time.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a className="cta-link" href="#portfolio">View My Work</a>
          </motion.div>
        </motion.div>
      </div>

      {/* CENTER — dominant portrait */}
      <div className="hero-center">
        <img
          src={HERO_PORTRAIT}
          alt="Portrait photography"
          className="hero-center-img"
          loading="eager"
        />
      </div>

      {/* RIGHT — image grid */}
      <div className="hero-right-grid">
        {gridImages.map((src, i) => (
          <motion.div
            className="hero-grid-cell"
            key={src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={src} alt="" loading={i < 2 ? 'eager' : 'lazy'} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
