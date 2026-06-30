'use client'

import { useState, useEffect } from 'react'
import Topbar from '@/components/Topbar'
import MenuOverlay from '@/components/MenuOverlay'
import Footer from '@/components/Footer'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="site-wrapper">
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Topbar
        onMenuOpen={() => setMenuOpen(true)}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      <main>
        <section className="hero">
          <p className="t-eyebrow hero__eyebrow">Technologist + Creative</p>

          <h1 className="t-display hero__name">Matthew Watts</h1>

          <div className="hero__cta">
            <a href="/about" className="btn btn--filled">Biography</a>
            <a href="/projects" className="btn btn--outline">Projects</a>
          </div>

          {/* 
            Replace the src below with your actual stippled hands image.
            Drop it into /public/hands.png and it will load automatically.
          */}
          <div className="hero__image-wrap">
            <img
              src="/hands.png"
              alt="Stippled illustration of two hands reaching toward each other"
              width={700}
              height={300}
            />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
