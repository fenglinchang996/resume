import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import * as LanguageUtils from '@/utils/languageUtils';
import { DEFAULT_LANGUAGE, Lang, LANGUAGE_OPTIONS } from '@/constant/language';
import { useLanguageStore } from './language';

describe('Language Store', () => {
  const setUserLanguageSpy = vi
    .spyOn(LanguageUtils, 'setUserLanguage')
    .mockImplementation(() => undefined);
  const getUserLanguageSpy = vi
    .spyOn(LanguageUtils, 'getUserLanguage')
    .mockImplementation(() => null);

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('default language', () => {
    const store = useLanguageStore();

    expect(getUserLanguageSpy).toHaveBeenCalledOnce();
    expect(store.language).toEqual(LANGUAGE_OPTIONS[DEFAULT_LANGUAGE]);
  });

  test('switch language', () => {
    const store = useLanguageStore();

    store.switchLanguage(Lang.ZHT);

    expect(setUserLanguageSpy).toHaveBeenCalledOnce();
    expect(store.language).toEqual(LANGUAGE_OPTIONS.ZHT);
  });
});
