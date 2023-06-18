import { describe, test, expect } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import About from './index.vue';
import Title from './Title.vue';
import Contact from './Contact.vue';
import Summary from './Summary.vue';

describe('About component', () => {
  let wrapper: VueWrapper;

  test('should render the child components', () => {
    wrapper = mount(About, {
      shallow: true,
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.getComponent(Title)).toBeDefined();
    expect(wrapper.getComponent(Contact)).toBeDefined();
    expect(wrapper.getComponent(Summary)).toBeDefined();
  });
});
