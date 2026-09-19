/**
 * Central site
 */

export const site = {
  name: 'Federico Peitti',
  role: '-',
  shortRole: 'B.Sc. in Digital Technologies',
  tagline: 'placeholder tagline',
  bio: `placeholder long bio`,
  philosophy: 'placeholder quote',
  url: 'https://pipo.com',
  email: 'fede.peitti@gmail.com',
  description:
    'placeholder description',
};

export const identity = {
  jobTitle: 'jobTitle',
  worksFor: { name: 'entity', url: 'https://www.illumina.com' },
  alumniOf: [
    { name: 'Universidad Torcuato Di Tella', url: 'https://www.utdt.edu/' },
  ],
  knowsAbout: [
    'Topic A',
    'Topic B',
    'Topic C',
  ],
  alternateNames: [
    'Fede P',
    'Peitti Federico',
    'Peiti Federico',
    'Peitti',
    'Peiti',
    'Federico Peiti',
    'Fede Peitti',
    'Federico Peitti',
    'fptt',
  ],
  twitter: '@twitter',
};

export type NavItem = { label: string; href: string; footerOnly?: boolean };

export const nav: NavItem[] = [
  { label: 'Research', href: '/research/' },
  { label: 'Projects', href: '/projects/', footerOnly: true },
  { label: 'Publications', href: '/publications/' },
  { label: 'Software', href: '/software/' },
  { label: 'Talks', href: '/talks/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'CV', href: '/cv/', footerOnly: true },
  { label: 'Photos', href: '/photos/', footerOnly: true },
  { label: 'Posts', href: '/posts/' },
  { label: 'News', href: '/news/' },
  { label: 'Search', href: '/search/', footerOnly: true },
  { label: 'Algorithms', href: '/algorithms/', footerOnly: true },
  { label: 'Papers', href: '/papers/', footerOnly: true },
  { label: 'Terminal', href: '/terminal/', footerOnly: true },
];

export type SocialKey =
  'email' |  'scholar' | 'github' | 'linkedin' ;

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'email', label: 'Email', href: 'mailto:fede.peitti@gmail.com' },
  /** 
  {
    key: 'scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=n2AvFg0AAAAJ&hl=en',
  },
  */
  { key: 'github', label: 'GitHub', href: 'https://github.com/fede-peitti' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/federico-peitti/' },
];

export const socialByKey = Object.fromEntries(socials.map((s) => [s.key, s]));
