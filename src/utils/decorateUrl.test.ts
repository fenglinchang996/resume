import { test, expect } from 'vitest';
import { decorateUrl } from './decorateUrl';

test('test decorateUrl', () => {
  const rawUrl = 'github.com';
  expect(decorateUrl('')).toBeUndefined();
  expect(decorateUrl(rawUrl)).toBe('https://github.com');
  expect(decorateUrl('https://' + rawUrl));
});
