import { describe, test, expect } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Projects from './index.vue';

describe('Experience component', () => {
  let wrapper: VueWrapper;

  test('renders the component', () => {
    wrapper = mount(Projects, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find('h2').text()).toBe('PROJECTS');
  });
});
