import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  children?: ReactNode;
  withDivider?: boolean;
  /** 'body' = Inter (default), 'display' = Instrument Sans */
  headingFont?: 'display' | 'body';
  /** 'default' = large hero-style title, 'small' = compact heading */
  headingSize?: 'default' | 'small';
  /** Makes the description full-contrast (white in dark mode, black in light mode) + larger instead of the default muted grey */
  descriptionEmphasis?: boolean;
  /** Centers the description block on the page */
  descriptionCentered?: boolean;
  /** Lets the description span the full page width instead of the default ~46rem cap */
  descriptionFullWidth?: boolean;
}

export default function PageHero({
  title,
  children,
  withDivider = false,
  headingFont = 'body',
  headingSize = 'default',
  descriptionEmphasis = false,
  descriptionCentered = false,
  descriptionFullWidth = false,
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
    descriptionFullWidth ? 'page-hero__desc--full' : '',
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
