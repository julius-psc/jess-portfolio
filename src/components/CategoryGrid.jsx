const categories = [
  {
    id: 'wildlife',
    label: 'Category',
    title: 'Wildlife',
    description: 'Intimate encounters with the natural world — patience rewarded with the extraordinary.',
    image: '/assets/images/01_Wildlife/image1.jpeg',
    alt: 'Wildlife photography',
  },
  {
    id: 'landscape',
    label: 'Category',
    title: 'Landscape & Nature',
    description: 'Vast horizons and quiet corners of the earth, rendered in their full elemental beauty.',
    image: '/assets/images/02_Landscape_and_Nature/image0.jpeg',
    alt: 'Landscape photography',
  },
  {
    id: 'travel',
    label: 'Category',
    title: 'Travel & Street',
    description: 'Cities alive with character, cultures distilled into a single frame.',
    image: '/assets/images/03_Travel_and_Street/image11.jpeg',
    alt: 'Travel and street photography',
  },
  {
    id: 'portrait',
    label: 'Category',
    title: 'Portrait & Fashion',
    description: 'Persons as their truest selves — character, light, and the quiet power of presence.',
    image: '/assets/images/04_Portrait_Fashion_Outdoor/image27.jpeg',
    alt: 'Portrait and fashion photography',
  },
  {
    id: 'street',
    label: 'Category',
    title: 'Street Style & Urban',
    description: 'The pulse of the city — style, motion, and the beauty of the everyday.',
    image: '/assets/images/05_Street_Style_Urban/image35.jpeg',
    alt: 'Street style and urban photography',
  },
]

export default function CategoryGrid() {
  return (
    <section className="category-section" id="portfolio">
      <div className="category-header reveal">
        <h2 className="category-title">
          What I <em>Photograph</em>
        </h2>
        <a className="cta-link" href="#gallery">View Full Gallery →</a>
      </div>

      <div className="category-grid">
        {/* Top row: first 3 */}
        {categories.slice(0, 3).map((cat) => (
          <div className="category-card" key={cat.id}>
            <div className="category-card-inner">
              <div className="category-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="category-img"
                  loading="lazy"
                />
              </div>
              <div className="category-card-info reveal">
                <span className="label">{cat.label}</span>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <a className="cta-link" href="#gallery">Explore →</a>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom row: last 2 */}
        <div className="cat-bottom-row">
          {categories.slice(3).map((cat) => (
            <div className="category-card" key={cat.id}>
              <div className="category-card-inner">
                <div className="category-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="category-img"
                    loading="lazy"
                  />
                </div>
                <div className="category-card-info reveal">
                  <span className="label">{cat.label}</span>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <a className="cta-link" href="#gallery">Explore →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
