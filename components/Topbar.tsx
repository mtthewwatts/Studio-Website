'use client'

interface TopbarProps {
  onMenuOpen: () => void
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export default function Topbar({ onMenuOpen, theme, onThemeToggle }: TopbarProps) {
  return (
    <header className="topbar">
      <a href="/" className="topbar__logo">Homepage</a>
      <nav className="topbar__controls">
        <button className="topbar__btn" onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          <span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span>
        </button>
        <button className="topbar__btn" aria-label="Search">
          Search
        </button>
        <button className="topbar__btn" onClick={onMenuOpen} aria-label="Open menu">
          Menu
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </nav>
    </header>
  )
}
