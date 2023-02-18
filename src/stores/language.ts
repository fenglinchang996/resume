import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Language } from '@/types/language';
import { lang, LANGUAGE_OPTIONS } from '@/constants/language';

export const useLanguageStore = defineStore('language', () => {
  const language = ref<Language>(LANGUAGE_OPTIONS.EN);
  function switchLanguage(lang: lang) {
    language.value = LANGUAGE_OPTIONS[lang];
  }

  return { language, switchLanguage };
});
