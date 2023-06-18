import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Toolbar from './index.vue';
import LanguageSelect from './LanguageSelect.vue';
import PagePrint from './PagePrint.vue';
import ThemeAppearanceSwitch from '@/components/common/ThemeAppearanceSwitch.vue';

describe('Toolbar component', () => {
  const wrapper = mount(Toolbar, { shallow: true });
  test('should renders the child component', () => {
    expect(wrapper.getComponent(LanguageSelect)).toBeDefined();
    expect(wrapper.getComponent(PagePrint)).toBeDefined();
    expect(wrapper.getComponent(ThemeAppearanceSwitch)).toBeDefined;
  });
});
