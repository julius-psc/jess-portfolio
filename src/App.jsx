import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioGallery from './components/PortfolioGallery'
import AboutSection from './components/AboutSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <Hero />
      <PortfolioGallery />
      <AboutSection />
      <CtaSection />
      <Footer />
    </>
  )
}
