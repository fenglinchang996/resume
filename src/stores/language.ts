import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Language } from '@/types/language';
import { DEFAULT_LANGUAGE, Lang, LANGUAGE_OPTIONS } from '@/constant/language';
import { getUserLanguage, setUserLanguage } from '@/utils/languageUtils';

export const useLanguageStore = defineStore('language', () => {
  const language = ref<Language>(
    LANGUAGE_OPTIONS[getUserLanguage() ?? DEFAULT_LANGUAGE]
  );
  function switchLanguage(lang: Lang) {
    language.value = LANGUAGE_OPTIONS[lang];
    setUserLanguage(lang);
  }

  return { language, switchLanguage };
});
