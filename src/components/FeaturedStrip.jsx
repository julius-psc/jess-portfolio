const images = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&auto=format&fit=crop',
    label: 'Golden Hour',
    alt: 'Golden hour portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=700&q=80&auto=format&fit=crop',
    label: 'Still Life',
    alt: 'Coffee table still life',
  },
  {
    src: 'https://images.unsplash.com/photo-1518621845936-4e3a6fedfb41?w=700&q=80&auto=format&fit=crop',
    label: 'Bloom',
    alt: 'Floral arrangement',
  },
  {
    src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700&q=80&auto=format&fit=crop',
    label: 'Intimate',
    alt: 'Intimate couple moment',
  },
]

export default function FeaturedStrip() {
  return (
    <div className="featured-strip" aria-label="Featured photography">
      {images.map((img, i) => (
        <div className="featured-strip-item" key={i}>
          <img src={img.src} alt={img.alt} loading="lazy" />
          <div className="featured-strip-overlay" />
          <span className="featured-strip-label">{img.label}</span>
        </div>
      ))}
    </div>
  )
}
