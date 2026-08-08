'use client';

import { useSite } from '@/lib/site-context';
import { IconMenuToggle, IconMoon, IconSun } from './icons';

export default function Topbar() {
  const { isMenuOpen, toggleMenu, theme, toggleTheme } = useSite();

  return (
    <header className="topbar">
      <div className="topbar__controls">
        <button
          type="button"
          className="topbar__btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          {theme === 'dark' ? <IconSun width={16} height={16} /> : <IconMoon width={16} height={16} />}
        </button>

        <button
          type="button"
          className="topbar__btn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
        >
          <span>Menu</span>
          <IconMenuToggle open={isMenuOpen} width={16} height={16} />
        </button>
      </div>
    </header>
  );
}
