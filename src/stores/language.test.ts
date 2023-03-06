import { describe, test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useLanguageStore } from './language';
import { Lang, LANGUAGE_OPTIONS } from '@/constant/language';

describe('Language Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('default language', () => {
    const store = useLanguageStore();
    expect(store.language).toEqual(LANGUAGE_OPTIONS.EN);
  });

  test('switch language', () => {
    const store = useLanguageStore();
    store.switchLanguage(Lang.ZHT);
    expect(store.language).toEqual(LANGUAGE_OPTIONS.ZHT);
  });
});
