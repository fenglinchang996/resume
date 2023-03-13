import { defineComponent } from 'vue';
import { setActivePinia, createPinia, storeToRefs } from 'pinia';
import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import * as themeUtils from '@/utils/themeUtils';
import { ThemeAppearance } from '@/constant/theme';
import { useThemeAppearanceStore } from './themeAppearance';

describe('Theme Appearance Store', () => {
  const getUserThemeAppearanceSpy = vi
    .spyOn(themeUtils, 'getUserThemeAppearance')
    .mockImplementation(() => undefined);
  const getPrefersColorSchemeSpy = vi
    .spyOn(themeUtils, 'getPrefersColorScheme')
    .mockImplementation(() => undefined);
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

  test('get theme appearance when component mounted', async () => {
    getPrefersColorSchemeSpy.mockImplementation(() => ThemeAppearance.Dark);
    const TestComponent = defineComponent({
      setup() {
        const themeAppearanceStore = useThemeAppearanceStore();
        const { themeAppearance } = storeToRefs(themeAppearanceStore);
        return {
          themeAppearance,
        };
      },
    });
    const wrapper = mount(TestComponent);

    await flushPromises();
    expect(getUserThemeAppearanceSpy).toHaveBeenCalledOnce();
    expect(getPrefersColorSchemeSpy).toHaveBeenCalledOnce();
    expect(wrapper.vm.themeAppearance).toBe(ThemeAppearance.Dark);
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
