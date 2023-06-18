import { describe, test, expect } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Experience from './index.vue';

describe('Experience component', () => {
  let wrapper: VueWrapper;

  test('renders the component', () => {
    wrapper = mount(Experience, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const titleTexts = ['WORK EXPERIENCE', 'OTHER EXPERIENCE'];
    const titleComponents = wrapper.findAll('h2');

    expect(
      titleTexts.every((text) =>
        titleComponents.some((component) => component.text() === text)
      )
    ).toBe(true);
  });
});
