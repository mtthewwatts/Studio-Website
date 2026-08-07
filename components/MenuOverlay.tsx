'use client';

import Link from 'next/link';
import { useSite } from '@/lib/site-context';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/site-data';
import { IconClose } from './icons';

export default function MenuOverlay() {
  const { isMenuOpen, closeMenu } = useSite();

  return (
    <div
      id="site-menu"
      className={`menu-overlay${isMenuOpen ? ' is-open' : ''}`}
      aria-hidden={!isMenuOpen}
      inert={!isMenuOpen ? true : undefined}
    >
      <div className="menu-overlay__topbar">
        <button type="button" className="menu-overlay__close" onClick={closeMenu}>
          <span>Menu</span>
          <IconClose width={16} height={16} />
        </button>
      </div>

      <div className="menu-overlay__body">
        <nav className="menu-overlay__nav" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="t-nav-large menu-overlay__nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="menu-overlay__bio">
          <p className="menu-overlay__bio-name">Matthew Watts</p>
          <p className="t-eyebrow menu-overlay__bio-eyebrow">Personal Site</p>

          <div className="menu-overlay__social-row">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="menu-overlay__social-icon"
                aria-label={label}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon width={64} height={64} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="menu-overlay__divider" />
    </div>
  );
}
