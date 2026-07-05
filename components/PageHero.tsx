import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  children: ReactNode;
  withDivider?: boolean;
}

export default function PageHero({ title, children, withDivider = false }: PageHeroProps) {
  return (
    <div className="page-hero">
      <h1 className="t-display page-hero__title">{title}</h1>
      <p className="t-body page-hero__desc">{children}</p>
      {withDivider && <div className="page-hero__divider" />}
    </div>
  );
}
