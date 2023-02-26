import { describe, test, expect, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import LanguageSelect from './LanguageSelect.vue';
import { LANGUAGE_OPTIONS } from '@/constant/language';
import { useLanguageStore } from '@/stores/language';

describe('LanguageSelect component', () => {
  test('test selecting language', async () => {
    const wrapper = mount(LanguageSelect, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })],
      },
    });
    const list = wrapper.get('ul');
    const zhtButton = list
      .findAll('button')
      .find((el) => el.text() === LANGUAGE_OPTIONS.ZHT.text);
    expect(zhtButton?.attributes('disabled')).toBeUndefined();
    await zhtButton?.trigger('mousedown');
    await flushPromises();
    const languageStore = useLanguageStore();
    expect(languageStore.language).toEqual(LANGUAGE_OPTIONS.ZHT);
    expect(zhtButton?.attributes('disabled')).toBe('');
  });
});
