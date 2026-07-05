'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSite } from '@/lib/site-context';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/site-data';
import { BLOG_POSTS } from '@/lib/content';
import { IconArrowRight, IconClose } from './icons';

export interface BlogPostPreview {
  title: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc?: string;
}

const DEFAULT_RECENT_POSTS: BlogPostPreview[] = BLOG_POSTS.slice(0, 3).map((post) => ({
  title: post.title,
  date: post.date,
  readTime: post.readTime,
  href: `/blog/${post.slug}`,
  imageSrc: post.imageSrc,
}));

interface MenuOverlayProps {
  recentPosts?: BlogPostPreview[];
}

export default function MenuOverlay({ recentPosts = DEFAULT_RECENT_POSTS }: MenuOverlayProps) {
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
          <p className="t-eyebrow menu-overlay__bio-eyebrow">Technologist + Creative</p>

          <p className="menu-overlay__bio-text">
            I&rsquo;m Matthew Watts (b. 2004, Northern Ontario, Canada), a fourth year
            Engineering Student at the University of Waterloo. I have a background in
            Mechanical and Electrical Design through previous roles in manufacturing,
            automation, and research. I&rsquo;m looking to bridge into embedded systems
            design for consumer-facing products for my next experience!
          </p>
          <p className="menu-overlay__bio-text">
            I spend my personal time working in student advocacy and leadership,
            exploring my interest of the intersection between art + tech and working at
            becoming a triathlete (swimming is my downfall 😔).
          </p>

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
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="menu-overlay__recent">
        <div className="menu-overlay__footer">
          <span className="menu-overlay__footer-label">Recent blog posts</span>
          <Link href="/blog" className="menu-overlay__view-all" onClick={closeMenu}>
            <span>View all</span>
            <IconArrowRight width={14} height={14} />
          </Link>
        </div>

        {recentPosts.length > 0 && (
          <ul className="menu-overlay__posts-grid">
            {recentPosts.slice(0, 3).map((post) => (
              <li key={post.href} className="menu-overlay__post">
                <Link href={post.href} className="menu-overlay__post" onClick={closeMenu}>
                  <div className="menu-overlay__post-text">
                    <p className="t-label">
                      {post.date} &middot; {post.readTime}
                    </p>
                    <p className="t-body menu-overlay__post-title">{post.title}</p>
                  </div>
                  {post.imageSrc && (
                    <Image
                      src={post.imageSrc}
                      alt=""
                      width={64}
                      height={64}
                      className="menu-overlay__post-thumb"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
