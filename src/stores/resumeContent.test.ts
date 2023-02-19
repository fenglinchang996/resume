import { setActivePinia, createPinia } from 'pinia';
import { lang } from '@/constant/language';
import { resumeContentEN, resumeContentZHT } from '@/data/resumeContent';
import { useLanguageStore } from './language';
import { useResumeContentStore } from './resumeContent';

describe('Resume Content Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('default content', () => {
    const store = useResumeContentStore();
    expect(store.content).toEqual(resumeContentEN);
  });

  test('switch language', () => {
    const languageStore = useLanguageStore();
    const resumeContentStore = useResumeContentStore();
    languageStore.switchLanguage(lang.ZHT);
    expect(resumeContentStore.content).toEqual(resumeContentZHT);
  });
});
