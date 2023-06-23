import { DEFAULT_LANGUAGE, Lang, USER_LANGUAGE_KEY } from '@/constant/language';

export function isLang(language: string): language is Lang {
  return Object.values(Lang).includes(language as Lang);
}

export function getUserLanguage() {
  const userLang = window.localStorage.getItem(USER_LANGUAGE_KEY);
  if (userLang && isLang(userLang)) {
    return userLang;
  }
  return null;
}

export function setUserLanguage(selectedLanguage: Lang) {
  if (selectedLanguage !== DEFAULT_LANGUAGE) {
    window.localStorage.setItem(USER_LANGUAGE_KEY, selectedLanguage);
  } else {
    window.localStorage.removeItem(USER_LANGUAGE_KEY);
  }
}
