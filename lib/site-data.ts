import type { ComponentType, SVGProps } from 'react';
import {
  IconDiscord,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconYoutube,
} from '@/components/icons';

export interface NavItem {
  label: string;
  href: string;
}

// Note: no Contact page yet — add it here (and nowhere else) when it exists.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Main', href: '/' },
  { label: 'Biography', href: '/biography' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'CV', href: '/cv' },
];

export interface SocialLink {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', Icon: IconLinkedIn },
  { label: 'GitHub', href: 'https://github.com/your-handle', Icon: IconGithub },
  { label: 'YouTube', href: 'https://youtube.com/@your-handle', Icon: IconYoutube },
  { label: 'Instagram', href: 'https://instagram.com/your-handle', Icon: IconInstagram },
  { label: 'Email', href: 'mailto:you@example.com', Icon: IconMail },
  { label: 'Discord', href: 'https://discord.com/users/your-id', Icon: IconDiscord },
];
