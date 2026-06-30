const navLinks = [
  { label: 'Main', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'CV', href: '/cv' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '▣' },
  { label: 'GitHub', href: 'https://github.com', icon: '◎' },
  { label: 'YouTube', href: 'https://youtube.com', icon: '▷' },
  { label: 'Instagram', href: 'https://instagram.com', icon: '◻' },
  { label: 'Email', href: 'mailto:hello@matthewwatts.ca', icon: '✉' },
  { label: 'Discord', href: 'https://discord.com', icon: '◈' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__col">
        <p className="footer__col-title">Navigation</p>
        <ul className="footer__nav-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="footer__nav-link t-label">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__col">
        <p className="footer__col-title">Networking</p>
        <ul className="footer__social-list">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="footer__social-item"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
              >
                <span className="footer__social-icon" aria-hidden="true">{s.icon}</span>
                <span className="t-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
