import Image from 'next/image';
import Link from 'next/link';
import type { ProjectMeta } from '@/lib/projects';

export default function ProjectCard({ slug, title, excerpt, imageSrc }: ProjectMeta) {
  return (
    <Link href={`/projects/${slug}`} className="project-card">
      <div className="project-card__image">
        {imageSrc && <Image src={imageSrc} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" />}
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="t-body project-card__desc">{excerpt}</p>
    </Link>
  );
}
