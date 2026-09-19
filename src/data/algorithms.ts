export interface AlgorithmCategory {
  slug: 'all' | 'category A' | 'category B' | 'category C';
  label: string;
}

export interface AlgorithmEntry {
  id: string;
  title: string;
  shortTitle?: string;
  area: string;
  category: 'category A' | 'category B' | 'category C';
  tag: string;
  summary: string;
  blurb?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  keyMechanism?: string;
  highlights?: string[];
  href: string;
  badge?: string;
  actionText: string;
  cliCommand?: string;
  featured?: boolean;
}

export const ALGORITHM_CATEGORIES: AlgorithmCategory[] = [
  { slug: 'all', label: 'All' },
  { slug: 'category A', label: 'category A' },
  { slug: 'category B', label: 'category B' },
  { slug: 'category C', label: 'category C' },
];

export const ALGORITHMS: AlgorithmEntry[] = [
  {
    id: 'id',
    title: 'title',
    shortTitle: 'shortTitle',
    area: 'area',
    category: 'category A',
    tag: 'tag Core',
    summary:
      'summary.',
    blurb: 'blurb',
    timeComplexity: 'O(N + log K)',
    spaceComplexity: 'O(N)',
    keyMechanism: 'keyMechanism',
    highlights: [
      'highlights 1',
      'highlights 2',
    ],
    href: '/algorithms/xxx/',
    badge: 'Interactive Visualizer',
    actionText: 'actionText',
    cliCommand: 'xxx',
    featured: true, 
  },
];
