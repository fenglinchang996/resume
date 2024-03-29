import { setActivePinia, createPinia } from 'pinia';
import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';
import * as themeUtils from '@/utils/themeUtils';
import { ThemeAppearance } from '@/constant/theme';
import { useThemeAppearanceStore } from './themeAppearance';

describe('Theme Appearance Store', () => {
  const setUserThemeAppearanceSpy = vi
    .spyOn(themeUtils, 'setUserThemeAppearance')
    .mockImplementation(() => undefined);
  const triggerThemeAppearanceTransitionSpy = vi
    .spyOn(themeUtils, 'triggerThemeAppearanceTransition')
    .mockImplementation(() => undefined);
  const setUserThemeAppearanceClassSpy = vi
    .spyOn(themeUtils, 'setThemeAppearanceClass')
    .mockImplementation(() => undefined);

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('default theme appearance', () => {
    const themeAppearanceStore = useThemeAppearanceStore();

    expect(themeAppearanceStore.themeAppearance).toBe(ThemeAppearance.Light);
  });

  test('switch theme appearance', () => {
    const themeAppearanceStore = useThemeAppearanceStore();
    const { switchThemeAppearance } = themeAppearanceStore;

    switchThemeAppearance(ThemeAppearance.Dark);
    expect(themeAppearanceStore.themeAppearance).toBe(ThemeAppearance.Dark);
    expect(triggerThemeAppearanceTransitionSpy).toHaveBeenCalledOnce();
    expect(setUserThemeAppearanceClassSpy).toHaveBeenCalledOnce();
    expect(setUserThemeAppearanceSpy).toHaveBeenCalledOnce();
  });
});
