import type { CollectionEntry } from 'astro:content';

type PublicationData = CollectionEntry<'publications'>['data'];

function cleanAuthors(authors: string) {
  return authors.replace(/[*†]/g, '').replace(/\s+/g, ' ').trim();
}

export function authorNames(authors: string) {
  return cleanAuthors(authors)
    .split(',')
    .map((a) => a.trim())
    .filter((a) => a && !/^[….]+$/.test(a));
}

function venueWithDetail(data: PublicationData) {
  const volumeIssue = [data.volume, data.issue && `(${data.issue})`].filter(Boolean).join('');
  return [data.venue, volumeIssue, data.pages].filter(Boolean).join(', ');
}

export function publicationCitation(data: PublicationData) {
  const year = data.date.getUTCFullYear();
  const doi = data.doi ? ` ${data.doi}` : '';
  return `${cleanAuthors(data.authors)} (${year}). ${data.title}. ${venueWithDetail(data)}.${doi}`;
}

const RIS_TYPE: Record<PublicationData['type'], string> = {
  journal: 'JOUR',
  conference: 'CPAPER',
  preprint: 'JOUR',
  thesis: 'THES',
};

export function publicationRis(data: PublicationData) {
  const lines = [`TY  - ${RIS_TYPE[data.type] ?? 'GEN'}`];
  for (const author of authorNames(data.authors)) {
    lines.push(`AU  - ${author}`);
  }
  lines.push(`TI  - ${data.title}`);
  lines.push(`T2  - ${data.venue}`);
  lines.push(`PY  - ${data.date.getUTCFullYear()}`);
  if (data.volume) lines.push(`VL  - ${data.volume}`);
  if (data.issue) lines.push(`IS  - ${data.issue}`);
  if (data.pages) {
    const range = data.pages.match(/^(.+?)\s*[–—-]\s*(.+)$/);
    lines.push(`SP  - ${range ? range[1] : data.pages}`);
    if (range) lines.push(`EP  - ${range[2]}`);
  }
  if (data.doi) {
    lines.push(`DO  - ${data.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')}`);
    lines.push(`UR  - ${data.doi}`);
  }
  lines.push('ER  - ');
  return lines.join('\n');
}
