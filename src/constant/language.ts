export enum Lang {
  EN = 'EN',
  ZHT = 'ZHT',
}

export const LANGUAGE_OPTIONS = {
  EN: { text: 'English', value: Lang.EN },
  ZHT: { text: '繁體中文', value: Lang.ZHT },
};

export const USER_LANGUAGE_KEY = 'user-language';

export const DEFAULT_LANGUAGE = Lang.EN;
