export interface NewsCategory {
  value: string;
  label: string;
}

export const NEWS_CATEGORIES: NewsCategory[] = [
  { value: 'publication', label: 'Publication' },
  { value: 'talk', label: 'Talk' },
  { value: 'award', label: 'Award' },
  { value: 'release', label: 'Release' },
  { value: 'join', label: 'Milestone' },
  { value: 'misc', label: 'Other' },
];

export const NEWS_LABELS: Record<string, string> = Object.fromEntries(
  NEWS_CATEGORIES.map((c) => [c.value, c.label])
);
