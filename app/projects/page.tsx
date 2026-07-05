import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { PROJECTS } from '@/lib/content';

export default function ProjectsPage() {
  return (
    <main className="page">
      <div className="projects">
        <PageHero title="Projects">
          A selection of my favourite projects. Clicking a tile opens up a more detailed
          explanation.
        </PageHero>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
