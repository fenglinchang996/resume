import { describe, test, expect, beforeEach } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useThemeAppearanceStore } from '@/stores/themeAppearance';
import ThemeAppearanceSwitch from './ThemeAppearanceSwitch.vue';

describe('ThemeAppearanceSwitch component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(ThemeAppearanceSwitch, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });

  test('should switch theme appearance on button click', async () => {
    const themeAppearanceStore = useThemeAppearanceStore();

    const switchThemeButton = wrapper.find('button');
    await switchThemeButton.trigger('click');

    expect(themeAppearanceStore.switchThemeAppearance).toBeCalled();
  });
});
