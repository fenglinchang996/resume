import { computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { ResumeContent } from '@/types/resumeContent';
import { Lang } from '@/constant/language';
import { resumeContentEN, resumeContentZHT } from '@/data/resumeContent';
import { useLanguageStore } from './language';

export const useResumeContentStore = defineStore('resumeContent', () => {
  const languageStore = useLanguageStore();
  const { language } = storeToRefs(languageStore);
  const content = computed<ResumeContent>(() => {
    switch (language.value.value) {
      case Lang.ZHT:
        return resumeContentZHT;
      case Lang.EN:
      default:
        return resumeContentEN;
    }
  });

  return { content };
});
