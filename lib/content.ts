// ─── CV ───────────────────────────────────────────────────

export interface CVExperience {
  role: string;
  org: string;
  location: string;
  dateRange: string;
  description: string;
}

export const CV_EDUCATION = {
  eyebrow: 'Education',
  degree: 'Honours Bachelor of Applied Sciences in Mechatronics Engineering',
  note: 'With an Option in Computer Engineering',
  school: 'University of Waterloo',
  location: 'Waterloo, Ontario',
  dateRange: 'Sept 2022 - Present',
};

export const CV_EXPERIENCE: CVExperience[] = [
  {
    role: 'Research Assistant',
    org: 'Co-Op, Deutsches Zentrum für Luft- und Raumfahrt (DLR)',
    location: 'Stuttgart, Germany',
    dateRange: 'May 2026 - Aug 2026',
    description: 'Worked on Power Electronics System.',
  },
  {
    role: 'Mechanical Designer',
    org: 'Co-Op, Samuel Automation',
    location: 'Waterloo, Ontario',
    dateRange: 'Sept 2025 - Dec 2025',
    description:
      'Supported mechanical design and engineering documentation activities using SolidWorks, with a focus on drawing validation, CAD revisions, and design quality. Worked closely with engineering teams to ensure released documentation met manufacturing and design requirements.',
  },
  {
    role: 'Mechatronics Research Assistant',
    org: 'Co-Op, University of Waterloo Ideas Clinic',
    location: 'Waterloo, Ontario',
    dateRange: 'Jan 2025 - Apr 2025',
    description:
      'Worked on HMI development, industrial automation workflows, and pneumatic system integration using tools such as Ignition and Node-RED. Supported the development and delivery of Ideas Clinic modules across multiple courses, contributing to the design, implementation and troubleshooting of mechatronic lab systems.',
  },
  {
    role: 'Mill Student (Engineering)',
    org: 'Co-Op, West Fraser',
    location: 'Barwick, Ontario',
    dateRange: 'May 2024 - Aug 2024',
    description:
      'Supported mechanical design and engineering documentation activities using SolidWorks, with a focus on drawing validation, CAD revisions, and design quality. Worked closely with engineering teams to ensure released documentation met manufacturing and design requirements.',
  },
  {
    role: 'Process Design Assistant',
    org: 'Co-Op, Viryl Technologies',
    location: 'Toronto, Ontario',
    dateRange: 'Sept 2023 - Dec 2023',
    description:
      'Supported mechanical design and engineering documentation activities using SolidWorks, with a focus on drawing validation, CAD revisions, and design quality. Worked closely with engineering teams to ensure released documentation met manufacturing and design requirements.',
  },
  {
    role: 'Supply Chain Intern',
    org: 'Co-Op, Quaker (PepsiCo)',
    location: 'Peterborough, Ontario',
    dateRange: 'Jan 2023 - Apr 2023',
    description:
      'Supported mechanical design and engineering documentation activities using SolidWorks, with a focus on drawing validation, CAD revisions, and design quality. Worked closely with engineering teams to ensure released documentation met manufacturing and design requirements.',
  },
];

// ─── Projects ─────────────────────────────────────────────
// Projects now live as markdown files in content/projects/ — see lib/projects.ts.

// ─── Blog ─────────────────────────────────────────────────

export type BlogCategory = 'Project' | 'Opinion' | 'Tutorial' | 'Life';

export interface BlogPost {
  slug: string;
  title: string;
  year: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  tags: string[];
  description: string;
  imageSrc?: string;
  /** Placeholder color block shown until a real image is added. */
  placeholderColor?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'personalized-desk-display',
    title: 'Personalized Desk Display',
    year: '2026',
    date: 'January 1st, 2026',
    readTime: 'X Minute Read',
    category: 'Project',
    tags: ['Project', 'Hardware', 'Software'],
    description: 'Add a real description here — the Figma only had placeholder copy.',
    placeholderColor: '#1e2b52',
  },
  {
    slug: 'bionic-bulb-writeup',
    title: 'Bionic Bulb',
    year: '2026',
    date: 'January 1st, 2026',
    readTime: 'X Minute Read',
    category: 'Project',
    tags: ['Project', 'Hardware'],
    description: 'Add a real description here — the Figma only had placeholder copy.',
    placeholderColor: '#2b2b2b',
  },
];

export const BLOG_CATEGORIES: BlogCategory[] = ['Project', 'Opinion', 'Tutorial', 'Life'];
