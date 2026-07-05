import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Hamburger lines that morph into an X when `open` is true. */
export function IconMenuToggle({ open, ...props }: IconProps & { open?: boolean }) {
  return (
    <svg {...base} {...props}>
      <line
        x1="4" y1={open ? 6 : 7} x2="20" y2={open ? 18 : 7}
        style={{ transformOrigin: 'center', transition: 'all 0.25s var(--ease-out, ease)' }}
        transform={open ? 'rotate(45 12 12)' : undefined}
      />
      <line
        x1="4" y1="12" x2="20" y2="12"
        style={{ transition: 'opacity 0.2s' }}
        opacity={open ? 0 : 1}
      />
      <line
        x1="4" y1={open ? 18 : 17} x2="20" y2={open ? 6 : 17}
        style={{ transformOrigin: 'center', transition: 'all 0.25s var(--ease-out, ease)' }}
        transform={open ? 'rotate(-45 12 12)' : undefined}
      />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.3" y1="15.3" x2="20" y2="20" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="5 8 12 15 19 8" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4.5" />
      <line x1="12" y1="19.5" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4.5" y2="12" />
      <line x1="19.5" y1="12" x2="22" y2="12" />
      <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
      <line x1="17.4" y1="17.4" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="6.6" y2="17.4" />
      <line x1="17.4" y1="6.6" x2="19.1" y2="4.9" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

/** Filled social icons — sized for a 20px box, currentColor fill. */
const fill = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor' };

export function IconLinkedIn(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.47V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.21-1.76 3.43 0 4.06 2.26 4.06 5.2V20Z" />
    </svg>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.35 4.68-4.58 4.92.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function IconYoutube(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M21.6 7.6a3 3 0 0 0-2.1-2.1C17.7 5 12 5 12 5s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.6 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.4 3 3 0 0 0 2.1 2.1C6.3 19 12 19 12 19s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M12 2c2.72 0 3.06 0 4.12.06 1.07.05 1.79.22 2.43.47.66.25 1.22.6 1.77 1.15.5.5.87 1.06 1.14 1.76.25.64.42 1.36.47 2.43C22 8.94 22 9.28 22 12s0 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43-.25.66-.6 1.22-1.15 1.77-.5.5-1.06.87-1.76 1.14-.64.25-1.36.42-2.43.47C15.06 22 14.72 22 12 22s-3.06 0-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.14-1.76c-.25-.64-.42-1.36-.47-2.43C2 15.06 2 14.72 2 12s0-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.25-.66.6-1.22 1.15-1.77.5-.5 1.06-.87 1.76-1.14.64-.25 1.36-.42 2.43-.47C8.94 2 9.28 2 12 2Zm0 2.7c-2.67 0-2.99 0-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65C4.27 9 4.27 9.32 4.27 12s0 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.05 4.04.05s2.99 0 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.05-1.37.05-4.04s0-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.67-1.02 2.7 2.7 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.05-4.04-.05ZM12 7.3A4.7 4.7 0 1 1 12 16.7 4.7 4.7 0 0 1 12 7.3Zm0 2.16a2.54 2.54 0 1 0 0 5.08 2.54 2.54 0 0 0 0-5.08Zm4.9-2.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.1.5 6.4 5 .5.34.5-.34 6.4-5H5.1Zm-.6 1.24V18h15V7.24l-6.62 5.18a2 2 0 0 1-2.46 0L4.5 7.24Z" />
      <circle cx="18.5" cy="6" r="2.3" />
    </svg>
  );
}

export function IconDiscord(props: IconProps) {
  return (
    <svg {...fill} {...props}>
      <path d="M18.9 5.6A16.6 16.6 0 0 0 14.8 4.3c-.18.32-.38.75-.52 1.09a15.4 15.4 0 0 0-4.56 0A9 9 0 0 0 9.2 4.3a16.5 16.5 0 0 0-4.1 1.3C2.6 9 1.94 12.3 2.27 15.6a16.7 16.7 0 0 0 5.05 2.55c.41-.55.77-1.14 1.08-1.76-.6-.22-1.16-.5-1.7-.83.14-.1.28-.21.42-.32a11.9 11.9 0 0 0 10.02 0c.14.11.27.22.42.32-.54.33-1.11.6-1.71.83.31.62.67 1.21 1.08 1.76a16.6 16.6 0 0 0 5.06-2.55c.4-3.8-.6-7.06-2.5-9.99ZM9.68 13.6c-.83 0-1.5-.76-1.5-1.7 0-.93.66-1.7 1.5-1.7s1.52.77 1.5 1.7c0 .94-.66 1.7-1.5 1.7Zm4.66 0c-.83 0-1.5-.76-1.5-1.7 0-.93.67-1.7 1.5-1.7.85 0 1.52.77 1.5 1.7 0 .94-.65 1.7-1.5 1.7Z" />
    </svg>
  );
}
