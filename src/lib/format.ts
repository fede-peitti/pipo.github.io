const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/** "Mon YYYY" */
export function monthYear(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** "Mon DD, YYYY" */
export function fullDate(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

/** "Mon DD"  */
export function monthDay(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}`;
}

/** "Mon" only */
export function month(date: Date): string {
  return MONTHS[date.getUTCMonth()];
}

export function readingTime(body: string): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function dateRange(start: Date, end?: Date): string {
  if (!end) return monthYear(start);
  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();
  if (sameMonth) return monthYear(start);
  if (sameYear) {
    return `${MONTHS[start.getUTCMonth()]}–${MONTHS[end.getUTCMonth()]} ${end.getUTCFullYear()}`;
  }
  return `${monthYear(start)} – ${monthYear(end)}`;
}
