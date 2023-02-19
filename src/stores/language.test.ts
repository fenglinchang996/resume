import { setActivePinia, createPinia } from 'pinia';
import { useLanguageStore } from './language';
import { lang, LANGUAGE_OPTIONS } from '@/constant/language';

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
    store.switchLanguage(lang.ZHT);
    expect(store.language).toEqual(LANGUAGE_OPTIONS.ZHT);
  });
});
