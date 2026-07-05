import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/content';

export default function ProjectCard({ slug, title, year, description, imageSrc }: Project) {
  return (
    <Link href={`/projects/${slug}`} className="project-card">
      <div className="project-card__image">
        {imageSrc && <Image src={imageSrc} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" />}
      </div>
      <p className="t-label project-card__year">{year}</p>
      <h3 className="project-card__title">{title}</h3>
      <p className="t-body project-card__desc">{description}</p>
    </Link>
  );
}
