import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Toolbar from './index.vue';
import LanguageSelect from './LanguageSelect.vue';
import PagePrint from './PagePrint.vue';
import ThemeAppearanceSwitch from './ThemeAppearanceSwitch.vue';

describe('Toolbar component', () => {
  const wrapper = shallowMount(Toolbar);
  test('child component', () => {
    expect(wrapper.findComponent(LanguageSelect)).toBeDefined();
    expect(wrapper.findComponent(PagePrint)).toBeDefined();
    expect(wrapper.findComponent(ThemeAppearanceSwitch)).toBeDefined;
  });
});
