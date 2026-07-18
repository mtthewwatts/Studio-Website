import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  children?: ReactNode;
  withDivider?: boolean;
  /** 'display' = EB Garamond (default), 'body' = Inter */
  headingFont?: 'display' | 'body';
  /** 'default' = large hero-style title, 'small' = compact heading */
  headingSize?: 'default' | 'small';
  /** Makes the description white + larger instead of the default muted grey */
  descriptionEmphasis?: boolean;
  /** Centers the description block on the page */
  descriptionCentered?: boolean;
}

export default function PageHero({
  title,
  children,
  withDivider = false,
  headingFont = 'display',
  headingSize = 'default',
  descriptionEmphasis = false,
  descriptionCentered = false,
}: PageHeroProps) {
  const titleClass = [
    'page-hero__title',
    headingFont === 'body' ? 'page-hero__title--body' : 't-display',
    headingSize === 'small' ? 'page-hero__title--small' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const descClass = [
    't-body',
    'page-hero__desc',
    descriptionEmphasis ? 'page-hero__desc--white' : '',
    descriptionCentered ? 'page-hero__desc--center' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="page-hero">
      <h1 className={titleClass}>{title}</h1>
      {children && <p className={descClass}>{children}</p>}
      {withDivider && <div className="page-hero__divider" />}
    </div>
  );
}
