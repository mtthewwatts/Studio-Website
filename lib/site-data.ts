import type { ComponentType, SVGProps } from 'react';
import { IconDiscord, IconGithub, IconLinkedIn, IconMail } from '@/components/icons';

export interface NavItem {
  label: string;
  href: string;
}

// Note: no Contact page yet — add it here (and nowhere else) when it exists.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Main', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'CV', href: '/cv' },
];

export interface SocialLink {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/matthewhaddenwatts', Icon: IconLinkedIn },
  { label: 'GitHub', href: 'https://github.com/mtthewwatts', Icon: IconGithub },
  { label: 'Email', href: 'mailto:mhwatts@uwaterloo.ca', Icon: IconMail },
  { label: 'Discord', href: 'https://discord.gg/cS9CKjP8', Icon: IconDiscord },
];
