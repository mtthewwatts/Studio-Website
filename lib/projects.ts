import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export interface ProjectMeta {
  slug: string;
  title: string;
  year: string;
  excerpt: string;
  imageSrc?: string;
}

export interface ProjectDetail extends ProjectMeta {
  content: string;
}

function readProjectFile(filename: string) {
  const slug = filename.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), 'utf8');
  const { data, content } = matter(raw);
  return { slug, data, content };
}

function toMeta(slug: string, data: Record<string, any>): ProjectMeta {
  return {
    slug,
    title: data.title,
    year: String(data.year),
    excerpt: data.excerpt,
    imageSrc: data.imageSrc,
  };
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

/** All projects, ordered by the `order` field in each file's frontmatter. */
export function getAllProjects(): ProjectMeta[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const { slug, data } = readProjectFile(filename);
      return { ...toMeta(slug, data), order: Number(data.order ?? 0) };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...meta }) => meta);
}

export function getProjectBySlug(slug: string): ProjectDetail | null {
  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(PROJECTS_DIR, filename))) return null;
  const { data, content } = readProjectFile(filename);
  return { ...toMeta(slug, data), content };
}
