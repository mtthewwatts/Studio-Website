'use client';

import { useState } from 'react';
import type { BlogCategory } from '@/lib/content';
import { IconChevronDown, IconSearch } from './icons';

interface BlogFilterBarProps {
  categories: BlogCategory[];
  activeCategory: BlogCategory | 'All Posts';
  onSelectCategory: (category: BlogCategory | 'All Posts') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const PRIMARY_VISIBLE = 2; // "Project" and "Opinion" show as their own chips; the rest live under "More".

export default function BlogFilterBar({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: BlogFilterBarProps) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const primary = categories.slice(0, PRIMARY_VISIBLE);
  const overflow = categories.slice(PRIMARY_VISIBLE);
  const activeIsOverflow = overflow.includes(activeCategory as BlogCategory);

  return (
    <div className="blog-filter-bar">
      <div className="blog-filter-bar__chips">
        <button
          type="button"
          className={`chip${activeCategory === 'All Posts' ? ' chip--active' : ''}`}
          onClick={() => onSelectCategory('All Posts')}
        >
          All Posts
        </button>

        {primary.map((category) => (
          <button
            key={category}
            type="button"
            className={`chip${activeCategory === category ? ' chip--active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}

        {overflow.length > 0 && (
          <div className="blog-filter-bar__more">
            <button
              type="button"
              className={`chip${activeIsOverflow ? ' chip--active' : ''}`}
              onClick={() => setIsMoreOpen((v) => !v)}
              aria-expanded={isMoreOpen}
            >
              <span>{activeIsOverflow ? activeCategory : 'More'}</span>
              <IconChevronDown width={14} height={14} />
            </button>

            {isMoreOpen && (
              <ul className="blog-filter-bar__more-menu">
                {overflow.map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      className="blog-filter-bar__more-item"
                      onClick={() => {
                        onSelectCategory(category);
                        setIsMoreOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="blog-filter-bar__search">
        {isSearchVisible ? (
          <input
            type="text"
            autoFocus
            className="blog-filter-bar__search-input"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onBlur={() => {
              if (searchQuery.trim() === '') setIsSearchVisible(false);
            }}
          />
        ) : (
          <button
            type="button"
            className="blog-filter-bar__search-btn"
            onClick={() => setIsSearchVisible(true)}
            aria-label="Search posts"
          >
            <IconSearch width={18} height={18} />
          </button>
        )}
      </div>
    </div>
  );
}
