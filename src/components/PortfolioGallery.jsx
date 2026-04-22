import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  { id: 'all',      label: 'All' },
  { id: 'wildlife', label: 'Wildlife' },
  { id: 'travel',   label: 'Travel & Nature' },
  { id: 'portrait', label: 'Portrait & Fashion' },
  { id: 'street',   label: 'Street Style' },
]

const ALL_IMAGES = [
  // Wildlife (12)
  { src: '/assets/images/01_Wildlife/gal1.jpeg',               cat: 'wildlife' },
  { src: '/assets/images/01_Wildlife/gal2.jpeg',               cat: 'wildlife' },
  { src: '/assets/images/03_Travel_and_Street/gal3.jpeg',      cat: 'travel'   },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/gal4.jpeg', cat: 'portrait' },
  { src: '/assets/images/03_Travel_and_Street/gal5.png',       cat: 'travel'   },
  { src: '/assets/images/03_Travel_and_Street/gal6.jpeg',      cat: 'travel'   },
  { src: '/assets/images/01_Wildlife/image7.jpeg',  cat: 'wildlife' },
  { src: '/assets/images/01_Wildlife/image9.jpeg',  cat: 'wildlife' },
  { src: '/assets/images/01_Wildlife/image10.jpeg', cat: 'wildlife' },
  { src: '/assets/images/01_Wildlife/image16.jpeg', cat: 'wildlife' },
  { src: '/assets/images/01_Wildlife/image26.jpeg', cat: 'wildlife' },
  { src: '/assets/images/01_Wildlife/image29.jpeg', cat: 'wildlife' },
  // Landscape merged into Travel (2)
  { src: '/assets/images/02_Landscape_and_Nature/image0.jpeg',  cat: 'travel' },
  { src: '/assets/images/02_Landscape_and_Nature/image14.jpeg', cat: 'travel' },
  // Travel & Street (14)
  { src: '/assets/images/03_Travel_and_Street/image11.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image12.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image13.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image15.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image17.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image18.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image19.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image20.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image21.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image22.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image23.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image24.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image25.jpeg', cat: 'travel' },
  { src: '/assets/images/03_Travel_and_Street/image41.png',  cat: 'travel' },
  // Portrait & Fashion (7)
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image27.jpeg', cat: 'portrait' },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image28.jpeg', cat: 'portrait' },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image30.jpeg', cat: 'portrait' },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image31.jpeg', cat: 'portrait' },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image32.jpeg', cat: 'portrait' },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image33.jpeg', cat: 'portrait' },
  { src: '/assets/images/04_Portrait_Fashion_Outdoor/image34.jpeg', cat: 'portrait' },
  // Street Style & Urban (6)
  { src: '/assets/images/05_Street_Style_Urban/image35.jpeg', cat: 'street' },
  { src: '/assets/images/05_Street_Style_Urban/image36.jpeg', cat: 'street' },
  { src: '/assets/images/05_Street_Style_Urban/image37.jpeg', cat: 'street' },
  { src: '/assets/images/05_Street_Style_Urban/image38.jpeg', cat: 'street' },
  { src: '/assets/images/05_Street_Style_Urban/image39.jpeg', cat: 'street' },
  { src: '/assets/images/05_Street_Style_Urban/image40.jpeg', cat: 'street' },
]

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show:   { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, scale: 0.96,
    transition: { duration: 0.25 } },
}

const MOBILE_LIMIT = 6

export default function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Reset expanded state when tab changes
  useEffect(() => { setMobileExpanded(false) }, [activeTab])

  const filtered = useMemo(() =>
    activeTab === 'all' ? ALL_IMAGES : ALL_IMAGES.filter((img) => img.cat === activeTab),
  [activeTab])

  const displayed = isMobile && !mobileExpanded ? filtered.slice(0, MOBILE_LIMIT) : filtered

  const prev = useCallback(() =>
    setLightbox((i) => (i - 1 + filtered.length) % filtered.length),
  [filtered.length])

  const next = useCallback(() =>
    setLightbox((i) => (i + 1) % filtered.length),
  [filtered.length])

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section className="gallery-section" id="portfolio">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="label">Full Portfolio</span>
        <h2>The <em>Complete Work</em></h2>
      </motion.div>

      {/* Tabs */}
      <div className="gallery-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`gallery-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry grid with AnimatePresence to fix filter transitions */}
      <div className="gallery-grid">
        <AnimatePresence mode="popLayout">
          {displayed.map((img, i) => (
            <motion.div
              key={img.src}
              className="gallery-item"
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              layout
              onClick={() => setLightbox(filtered.indexOf(img))}
              role="button"
              tabIndex={0}
              aria-label={`View image ${i + 1}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(filtered.indexOf(img))}
              transition={{ delay: i * 0.025 }}
            >
              <img src={img.src} alt="" loading="lazy" />
              <div className="gallery-item-overlay" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more button — mobile only */}
      {isMobile && !mobileExpanded && filtered.length > MOBILE_LIMIT && (
        <div className="gallery-show-more">
          <button className="gallery-show-more-btn" onClick={() => setMobileExpanded(true)}>
            Show all {filtered.length} photos
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button className="lightbox-close" onClick={close} aria-label="Close">×</button>

            <button
              className="lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >‹</button>

            <motion.img
              key={filtered[lightbox].src}
              src={filtered[lightbox].src}
              alt=""
              className="lightbox-img"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >›</button>

            <div className="lightbox-counter">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
