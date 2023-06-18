import { describe, test, expect } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Skills from './index.vue';

describe('Experience component', () => {
  let wrapper: VueWrapper;

  test('renders the component', () => {
    wrapper = mount(Skills, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find('h2').text()).toBe('SKILLS');
  });
});
