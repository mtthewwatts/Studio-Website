'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'dark' | 'light';

interface SiteContextValue {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  const openMenu = useCallback(() => {
    setIsSearchOpen(false);
    setIsMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);

  const openSearch = useCallback(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const toggleSearch = useCallback(() => setIsSearchOpen((v) => !v), []);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  // Lock body scroll while an overlay is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isSearchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isSearchOpen]);

  // Close on Escape.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMenu();
        closeSearch();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeMenu, closeSearch]);

  return (
    <SiteContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        isSearchOpen,
        openSearch,
        closeSearch,
        toggleSearch,
        theme,
        toggleTheme,
      }}
    >
      <div data-theme={theme === 'light' ? 'light' : undefined}>{children}</div>
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error('useSite must be called within a <SiteProvider>');
  }
  return ctx;
}
