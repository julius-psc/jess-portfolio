const articles = [
  {
    image: '/assets/images/03_Travel_and_Street/image22.jpeg',
    alt: 'San Francisco street scene',
    category: 'Travel',
    date: 'March 2025',
    title: 'A Day in San Francisco',
    excerpt:
      'Golden Gate at dawn, espresso in the Mission, the light as it climbs through the fog. A city that knows how to be beautiful without trying.',
  },
  {
    image: '/assets/images/02_Landscape_and_Nature/image0.jpeg',
    alt: 'Slow morning in nature',
    category: 'Reflections',
    date: 'February 2025',
    title: 'The Beauty of Slow Living',
    excerpt:
      "There's a kind of luxury in unhurried mornings. In light observed carefully, in a day with no agenda and the whole world to look at.",
  },
  {
    image: '/assets/images/01_Wildlife/image5.jpeg',
    alt: 'Wildlife in natural habitat',
    category: 'Nature',
    date: 'January 2025',
    title: 'Finding Inspiration in the Everyday',
    excerpt:
      'The most extraordinary photographs are made in the most ordinary places. Patience, stillness, and a willingness to simply wait.',
  },
]

export default function JournalSection() {
  return (
    <section className="journal-section" id="journal">
      <div className="journal-header">
        <h2 className="journal-title reveal">
          Stories &amp; <em>Inspiration</em>
        </h2>
        <a className="cta-link reveal" href="#journal">Read All Stories →</a>
      </div>

      <div className="journal-grid">
        {articles.map((article, i) => (
          <article className="journal-card" key={i}>
            <div className="journal-img-wrap">
              <img
                src={article.image}
                alt={article.alt}
                className="journal-img"
                loading="lazy"
              />
            </div>
            <div className="journal-card-content reveal">
              <div className="journal-date">{article.date}</div>
              <span className="label">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a className="cta-link" href="#journal">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
