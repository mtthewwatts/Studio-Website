import type { Metadata } from 'next';

// page.tsx is a Client Component (filter/search state), so its title lives here.
export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
