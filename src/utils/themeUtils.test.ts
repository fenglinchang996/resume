import {
  PREFERS_COLOR_SCHEME_DARK,
  PREFERS_COLOR_SCHEME_LIGHT,
  ThemeAppearance,
  USER_THEME_APPEARANCE_KEY,
} from '@/constant/theme';
import { describe, test, expect, vi, afterAll, afterEach } from 'vitest';
import {
  getPrefersColorScheme,
  getUserThemeAppearance,
  setUserThemeAppearance,
  setThemeAppearanceClass,
  triggerThemeAppearanceTransition,
} from './themeUtils';

describe('theme utilities', () => {
  let prefersColorSchemeQuery = '';
  const matchMediaMock = vi.fn().mockImplementation((query) => ({
    matches: query === prefersColorSchemeQuery,
  }));
  vi.stubGlobal('matchMedia', matchMediaMock);

  afterEach(() => {
    matchMediaMock.mockClear();
    prefersColorSchemeQuery = '';
  });
  afterAll(() => {
    vi.unstubAllGlobals();
  });

  describe('test getPrefersColorScheme', () => {
    test('test system default dark', () => {
      prefersColorSchemeQuery = PREFERS_COLOR_SCHEME_DARK;
      const prefersColorScheme = getPrefersColorScheme();
      expect(window.matchMedia).toHaveBeenCalledWith(PREFERS_COLOR_SCHEME_DARK);
      expect(prefersColorScheme).toBe(ThemeAppearance.Dark);
    });

    test('test system default light', () => {
      prefersColorSchemeQuery = PREFERS_COLOR_SCHEME_LIGHT;
      const prefersColorScheme = getPrefersColorScheme();
      expect(window.matchMedia).toHaveBeenCalledWith(
        PREFERS_COLOR_SCHEME_LIGHT
      );
      expect(prefersColorScheme).toBe(ThemeAppearance.Light);
    });
  });

  const getItemSpy = vi.spyOn(window.Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(window.Storage.prototype, 'setItem');
  const removeItemSpy = vi.spyOn(window.Storage.prototype, 'removeItem');

  afterEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    removeItemSpy.mockClear();
    window.localStorage.clear();
  });

  describe('test getUserThemeAppearance', () => {
    test('test user theme dark', () => {
      window.localStorage.setItem(
        USER_THEME_APPEARANCE_KEY,
        ThemeAppearance.Dark
      );
      expect(getUserThemeAppearance()).toBe(ThemeAppearance.Dark);
      expect(getItemSpy).toHaveBeenCalledOnce();
    });

    test('test user theme dark', () => {
      window.localStorage.setItem(
        USER_THEME_APPEARANCE_KEY,
        ThemeAppearance.Light
      );
      expect(getUserThemeAppearance()).toBe(ThemeAppearance.Light);
      expect(getItemSpy).toHaveBeenCalledOnce();
    });
  });

  describe('test setUserThemeAppearance', () => {
    test('set user theme dark when theme is different with system default', () => {
      prefersColorSchemeQuery = PREFERS_COLOR_SCHEME_LIGHT;
      setUserThemeAppearance(ThemeAppearance.Dark);
      expect(setItemSpy).lastCalledWith(
        USER_THEME_APPEARANCE_KEY,
        ThemeAppearance.Dark
      );
    });

    test('set user theme light when theme is different with system default', () => {
      prefersColorSchemeQuery = PREFERS_COLOR_SCHEME_DARK;
      setUserThemeAppearance(ThemeAppearance.Light);
      expect(setItemSpy).lastCalledWith(
        USER_THEME_APPEARANCE_KEY,
        ThemeAppearance.Light
      );
    });

    test('remove user theme when applied theme is the same with system default', () => {
      prefersColorSchemeQuery = PREFERS_COLOR_SCHEME_DARK;
      setUserThemeAppearance(ThemeAppearance.Dark);
      expect(removeItemSpy).lastCalledWith(USER_THEME_APPEARANCE_KEY);
    });
  });

  describe('test setUserThemeAppearanceClass', () => {
    afterAll(() => {
      window.document.documentElement.classList.value = '';
    });

    test('set class "dark"', () => {
      setThemeAppearanceClass(ThemeAppearance.Dark);
      expect(window.document.documentElement.classList.contains('dark')).toBe(
        true
      );
    });

    test('remove class "dark"', () => {
      setThemeAppearanceClass(ThemeAppearance.Light);
      expect(window.document.documentElement.classList.contains('dark')).toBe(
        false
      );
    });
  });

  describe('test triggerThemeAppearanceTransition', () => {
    test('trigger theme transition', () => {
      triggerThemeAppearanceTransition();
      expect(window.document.body.classList.contains('transition-all')).toBe(
        true
      );
      expect(window.document.body.classList.contains('duration-300')).toBe(
        true
      );
    });
  });
});
