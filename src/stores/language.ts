import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Language } from '@/types/language';
import { Lang, LANGUAGE_OPTIONS } from '@/constant/language';

export const useLanguageStore = defineStore('language', () => {
  const language = ref<Language>(LANGUAGE_OPTIONS.EN);
  function switchLanguage(lang: Lang) {
    language.value = LANGUAGE_OPTIONS[lang];
  }

  return { language, switchLanguage };
});
