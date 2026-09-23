import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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

        {project.imageSrc && (
          <div className="project-detail__banner">
            <Image src={project.imageSrc} alt="" fill sizes="(max-width: 900px) 100vw, 900px" priority />
          </div>
        )}

        <div className="project-detail__body">
          <div className="project-detail__text">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {project.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
