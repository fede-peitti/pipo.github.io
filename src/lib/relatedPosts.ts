import { getCollection } from 'astro:content';

export interface RelatedPostLink {
  href: string;
  label: string;
  title: string;
}

export async function resolveRelatedPosts(slugs: string[]): Promise<RelatedPostLink[]> {
  if (!slugs?.length) return [];
  const byId = new Map((await getCollection('posts')).map((p) => [p.id, p]));
  const posts = slugs
    .map((slug) => byId.get(slug))
    .filter((p): p is NonNullable<typeof p> => !!p && !p.data.draft);
  const single = posts.length === 1;
  return posts.map((p) => ({
    href: `/posts/${p.id}/`,
    label: single ? 'Blog' : (p.data.linkLabel ?? p.data.title),
    title: p.data.title,
  }));
}
