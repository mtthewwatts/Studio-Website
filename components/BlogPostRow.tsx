import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/content';

export default function BlogPostRow({ slug, title, year, description, tags, imageSrc, placeholderColor }: BlogPost) {
  return (
    <Link href={`/blog/${slug}`} className="blog-row">
      <div className="blog-row__image" style={{ background: imageSrc ? undefined : placeholderColor }}>
        {imageSrc && <Image src={imageSrc} alt="" fill sizes="(max-width: 768px) 100vw, 45vw" />}
      </div>

      <div className="blog-row__body">
        <div className="blog-row__heading">
          <h3 className="blog-row__title">{title}</h3>
          <span className="t-label blog-row__year">{year}</span>
        </div>

        <p className="t-body blog-row__desc">{description}</p>

        <div className="blog-row__tags">
          {tags.map((tag) => (
            <span key={tag} className="chip chip--static">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
