import Link from 'next/link';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer__col-title">Navigation</p>
        <ul className="footer__nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="footer__nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="footer__col-title">Networking</p>
        <ul className="footer__social-list">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} className="footer__social-item" target="_blank" rel="noreferrer noopener">
                <Icon className="footer__social-icon" width={16} height={16} />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
