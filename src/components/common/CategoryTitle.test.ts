import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CategoryTitle from './CategoryTitle.vue';

describe('CategoryTitle component', () => {
  test('test UI', () => {
    const wrapper = mount(CategoryTitle, {
      props: { title: 'test' },
    });

    expect(wrapper.get('h2').text()).toBe('TEST');
  });
});
