import { defineComponent } from 'vue';
import { setActivePinia, createPinia, storeToRefs } from 'pinia';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import * as themeUtils from '@/utils/themeUtils';
import { ThemeAppearance } from '@/constant/theme';
import { useThemeAppearanceStore } from '@/stores/themeAppearance';
import { useInitializeThemeAppearance } from './useInitializeThemeAppearance';

describe('test useInitializeThemeAppearance composable', async () => {
  const getUserThemeAppearanceSpy = vi
    .spyOn(themeUtils, 'getUserThemeAppearance')
    .mockImplementation(() => undefined);
  const getPrefersColorSchemeSpy = vi
    .spyOn(themeUtils, 'getPrefersColorScheme')
    .mockImplementation(() => undefined);

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('get theme appearance when component mounted', async () => {
    getPrefersColorSchemeSpy.mockImplementation(() => ThemeAppearance.Dark);
    const TestComponent = defineComponent({
      setup() {
        const themeAppearanceStore = useThemeAppearanceStore();
        const { themeAppearance } = storeToRefs(themeAppearanceStore);

        useInitializeThemeAppearance();

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
});
