'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSite } from '@/lib/site-context';
import { BLOG_POSTS } from '@/lib/content';
import { PROJECTS } from '@/lib/content';
import { IconClose, IconSearch } from './icons';

interface SearchResult {
  title: string;
  href: string;
  kind: 'Blog' | 'Project';
}

const INDEX: SearchResult[] = [
  ...BLOG_POSTS.map((post) => ({ title: post.title, href: `/blog/${post.slug}`, kind: 'Blog' as const })),
  ...PROJECTS.map((project) => ({ title: project.title, href: `/projects/${project.slug}`, kind: 'Project' as const })),
];

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useSite();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('');
      // Focus after the element mounts / transitions in.
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [isSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter((item) => item.title.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <div
      id="site-search"
      className={`search-overlay${isSearchOpen ? ' is-open' : ''}`}
      aria-hidden={!isSearchOpen}
      inert={!isSearchOpen ? true : undefined}
      onClick={closeSearch}
    >
      <div className="search-overlay__panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-overlay__input-row">
          <IconSearch width={18} height={18} />
          <input
            ref={inputRef}
            type="text"
            className="search-overlay__input"
            placeholder="Search posts and projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="search-overlay__close" onClick={closeSearch} aria-label="Close search">
            <IconClose width={16} height={16} />
          </button>
        </div>

        {query.trim() !== '' && (
          <ul className="search-overlay__results">
            {results.length === 0 && <li className="search-overlay__empty">No matches for &ldquo;{query}&rdquo;.</li>}
            {results.map((result) => (
              <li key={result.href}>
                <Link href={result.href} className="search-overlay__result" onClick={closeSearch}>
                  <span className="t-label search-overlay__result-kind">{result.kind}</span>
                  <span>{result.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
