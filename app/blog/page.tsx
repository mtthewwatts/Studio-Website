'use client';

import { useMemo, useState } from 'react';
import PageHero from '@/components/PageHero';
import BlogFilterBar from '@/components/BlogFilterBar';
import BlogPostRow from '@/components/BlogPostRow';
import Footer from '@/components/Footer';
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategory } from '@/lib/content';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All Posts'>('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
      const matchesQuery = q === '' || post.title.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  function handleSelectCategory(category: BlogCategory | 'All Posts') {
    setActiveCategory(category);
    setPage(1);
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query);
    setPage(1);
  }

  return (
    <main className="page">
      <div className="blog">
        <PageHero title="Blog" withDivider headingFont="body" descriptionEmphasis>
          A place for more detailed explanations of my previous projects, as well as
          opinion and informational pieces on the things I&rsquo;m interested in.
        </PageHero>

        <BlogFilterBar
          categories={BLOG_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        <div className="blog__list">
          {visiblePosts.length === 0 && (
            <p className="t-body blog__empty">No posts match that filter yet.</p>
          )}
          {visiblePosts.map((post) => (
            <BlogPostRow key={post.slug} {...post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="blog__pagination">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              &larr;
            </button>
            <span>Page</span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              &rarr;
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
