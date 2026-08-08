import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="page">
      <div className="projects">
        <PageHero title="Projects">
          A collection of my favourite projects. Clicking a tile opens up a more detailed
          explanation.
        </PageHero>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
