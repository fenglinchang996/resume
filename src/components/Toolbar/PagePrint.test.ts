import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import PagePrint from './PagePrint.vue';

describe('PagePrint Component', () => {
  test('test print', () => {
    const wrapper = mount(PagePrint);
    window.print = vi.fn(() => {});
    const button = wrapper.get('button');
    button.trigger('click');
    expect(window.print).toHaveBeenCalled();
  });
});
