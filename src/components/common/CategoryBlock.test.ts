import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CategoryBlock from './CategoryBlock.vue';

describe('CategoryBlock component', () => {
  test('test UI', () => {
    const wrapper = mount(CategoryBlock, {
      slots: {
        default: '<div>test</div>',
      },
    });

    expect(wrapper.html()).toBe(
      '<article>\n' + '  <div>test</div>\n' + '</article>',
    );
  });
});
