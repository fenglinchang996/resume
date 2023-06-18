import { describe, test, expect } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Education from './index.vue';

describe('Education component', () => {
  let wrapper: VueWrapper;

  test('renders the component', () => {
    wrapper = mount(Education, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find('h2').text()).toBe('EDUCATION');
  });
});
