export interface PaperCategory {
  slug: 'all' | 'category A' | 'category B' | 'category C';
  label: string;
}

export interface PaperEntry {
  id: string;
  title: string;
  shortTitle?: string;
  authors: string[];
  affiliation: string;
  venue: string;
  year: number;
  doi: string;
  doiUrl: string;
  area: string;
  category: 'category A' | 'category B' | 'category C';
  tag: string;
  readingTime: string;
  summary: string;
  highlights: string[];
  equations: string[];
  href: string;
  actionText: string;
  featured: boolean;
  icon?: string;
  status: 'published' | 'coming-soon';
}

export const PAPER_CATEGORIES: PaperCategory[] = [
  { slug: 'all', label: 'All Papers' },
  { slug: 'category B', label: 'label A' },
  { slug: 'category C', label: 'label B' },
  { slug: 'category A', label: 'label C' },
];

export const PAPERS: PaperEntry[] = [
  {
    id: 'id',
    title: 'title',
    shortTitle: 'shortTitle',
    authors: ['author A', 'author B', 'author C'],
    affiliation: 'affiliation',
    venue: 'venue',
    year: 2025,
    doi: 'doi',
    doiUrl: 'https://doi.org/xxx',
    area: 'area',
    category: 'category A',
    tag: 'tag',
    readingTime: '22 min read',
    summary:
      'summary',
    highlights: [
      'highlights A',
      'highlights B',
      'highlights C',
    ],
    equations: [
      '\\mathcal{L}_{\\text{Poisson}} = \\sum_{b, t} \\left( \\hat{y}_{b, t} - y_{b, t} \\log \\hat{y}_{b, t} \\right)',
    ],
    href: '/papers/borzoi/',
    actionText: 'Read full technical paper summary',
    featured: true,
    icon: 'ism',
    status: 'published',
  },
];
