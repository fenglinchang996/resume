import { describe, expect, test, vi } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { useInitializeThemeAppearance } from '@/composables/useInitializeThemeAppearance';
import About from '@/components/About/index.vue';
import Skills from '@/components/Skills/index.vue';
import Experience from '@/components/Experience/index.vue';
import Project from '@/components/Projects/index.vue';
import Education from '@/components/Education/index.vue';
import Menubar from '@/components/Menubar/index.vue';
import Toolbar from '@/components/Toolbar/index.vue';
import HomeView from './HomeView.vue';

describe('HomeView component', () => {
  let wrapper: VueWrapper;

  vi.mock('@/composables/useInitializeThemeAppearance', () => ({
    useInitializeThemeAppearance: vi.fn(),
  }));

  test('renders the component', () => {
    wrapper = mount(HomeView, {
      shallow: true,
    });

    expect(wrapper.findAllComponents(About).length).toStrictEqual(1);
    expect(wrapper.findAllComponents(Menubar).length).toStrictEqual(1);
    expect(wrapper.findAllComponents(Toolbar).length).toStrictEqual(1);
    expect(wrapper.findAllComponents(Skills).length).toStrictEqual(2);
    expect(wrapper.findAllComponents(Experience).length).toStrictEqual(2);
    expect(wrapper.findAllComponents(Project).length).toStrictEqual(2);
    expect(wrapper.findAllComponents(Education).length).toStrictEqual(2);
    expect(useInitializeThemeAppearance).toHaveBeenCalledOnce();
  });
});
