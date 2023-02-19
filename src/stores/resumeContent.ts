import { computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { ResumeContent } from '@/types/resumeContent';
import { lang } from '@/constant/language';
import { resumeContentEN, resumeContentZHT } from '@/data/resumeContent';
import { useLanguageStore } from './language';

export const useResumeContentStore = defineStore('resumeContent', () => {
  const languageStore = useLanguageStore();
  const { language } = storeToRefs(languageStore);
  const content = computed<ResumeContent>(() => {
    switch (language.value.value) {
      case lang.ZHT:
        return resumeContentZHT;
      case lang.EN:
      default:
        return resumeContentEN;
    }
  });

  return { content };
});
