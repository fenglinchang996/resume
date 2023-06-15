import { describe, beforeEach, test, expect } from 'vitest';
import { disablePageScroll, enablePageScroll } from './pageScrollUtils';

describe('test page scroll utilities', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
  });

  test('should set body overflow to "hidden"', () => {
    disablePageScroll();
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('should set body overflow to "auto"', () => {
    enablePageScroll();
    expect(document.body.style.overflow).toBe('auto');
  });
});
