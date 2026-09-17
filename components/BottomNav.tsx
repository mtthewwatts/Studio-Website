'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/site-data';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <footer className="bottom-nav">
      <div className="bottom-nav__col">
        <span className="bottom-nav__label">Navigation</span>
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bottom-nav__link${isActive ? ' bottom-nav__link--active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="bottom-nav__col">
        <span className="bottom-nav__label">&nbsp;Connect</span>
        <div className="bottom-nav__icons">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="bottom-nav__icon-badge"
              aria-label={label}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon width={18} height={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
