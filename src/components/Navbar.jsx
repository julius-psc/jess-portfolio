import { useState, useEffect } from 'react'

const links = ['Home', 'Portfolio', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-logo">Jess <span>Grace</span></div>

        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>

        <button
          className="navbar-mobile-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span style={open ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}} />
        </button>
      </nav>

      <div className={`mobile-drawer${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
      </div>
    </>
  )
}
