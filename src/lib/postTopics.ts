export interface PostTopic {
  slug: string;
  label: string;
  tags: string[];
}

export const POST_TOPICS: PostTopic[] = [
  {
    slug: 'multi-agent-systems',
    label: 'Multi-agent systems',
    tags: [
      'Multi-agent systems',
      'LLM agents',
      'Emergent behavior',
      'Collective intelligence',
    ],
  },
  {
    slug: 'llms',
    label: 'Large language models',
    tags: [
      'LLMs',
      'Large language models',
      'Generative AI',
      'Natural language processing',
      'NLP',
    ],
  },
  {
    slug: 'ai-safety',
    label: 'AI safety & alignment',
    tags: [
      'AI safety',
      'AI alignment',
      'Value alignment',
      'Human values',
      'Persuasion',
    ],
  },
];

export function topicSlugs(tags: string[]): string[] {
  return POST_TOPICS
    .filter((topic) => topic.tags.some((tag) => tags.includes(tag)))
    .map((topic) => topic.slug);
}