import { describe, it, expect } from 'vitest';
import { ALGORITHMS } from '../data/algorithms';

describe('Algorithms data integrity for Command Palette', () => {
  it('has indexed algorithms with required search fields', () => {
    expect(ALGORITHMS.length).toBeGreaterThanOrEqual(10);
    for (const algo of ALGORITHMS) {
      expect(algo.id).toBeTruthy();
      expect(algo.title).toBeTruthy();
      expect(algo.area).toBeTruthy();
      expect(algo.category).toBeTruthy();
      expect(algo.href).toBeTruthy();
      expect(algo.tag).toBeTruthy();
      expect(algo.summary).toBeTruthy();
    }
  });

  it('contains shortTitle and blurb for concise presentation', () => {
    const featured = ALGORITHMS.filter((a) => a.featured);
    expect(featured.length).toBeGreaterThanOrEqual(4);
    for (const algo of featured) {
      expect(algo.shortTitle).toBeTruthy();
      expect(algo.blurb).toBeTruthy();
    }
  });
});
