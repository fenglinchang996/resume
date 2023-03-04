import { describe, test, expect } from 'vitest';
import { useDarkModeSwitch } from './useDarkModeSwitch';

describe('test useDarkModeSwitch', () => {
  test('test switching dark mode', () => {
    const { switchDarkMode } = useDarkModeSwitch();
    switchDarkMode(true);
    expect(window.document.documentElement.classList.contains('dark')).toBe(
      true
    );
    switchDarkMode(false);
    expect(window.document.documentElement.classList.contains('dark')).toBe(
      false
    );
  });
});
