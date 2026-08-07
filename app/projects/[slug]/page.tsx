import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PageHero from '@/components/PageHero';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page">
      <div className="project-detail">
        <PageHero title={project.title} />

        <div className="project-detail__body">
          <div className="project-detail__text">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>

          <div className="project-detail__image">
            {project.imageSrc && (
              <Image
                src={project.imageSrc}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
