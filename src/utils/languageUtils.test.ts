import { describe, test, expect, afterEach, vi } from 'vitest';
import { getUserLanguage, setUserLanguage } from './languageUtils';
import { Lang } from '@/constant/language';

describe('test language utils', () => {
  const getItemSpy = vi.spyOn(window.Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(window.Storage.prototype, 'setItem');
  const removeItemSpy = vi.spyOn(window.Storage.prototype, 'removeItem');

  afterEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    removeItemSpy.mockClear();
    window.localStorage.clear();
  });

  describe('test getUserLanguage', () => {
    test('should be no user-set language', () => {
      expect(getUserLanguage()).toBeNull();
      expect(getItemSpy).toHaveBeenCalledOnce();
    });

    test('should get user language ZHT setting', () => {
      setUserLanguage(Lang.ZHT);

      expect(getUserLanguage()).toBe(Lang.ZHT);
      expect(getItemSpy).toHaveBeenCalledOnce();
    });
  });

  describe('test setUserLanguage', () => {
    test('should not set user language in local storage', () => {
      setUserLanguage(Lang.EN);

      expect(setItemSpy).not.toHaveBeenCalled();
      expect(removeItemSpy).toHaveBeenCalledOnce();
    });

    test('should set user language to ZHT', () => {
      setUserLanguage(Lang.ZHT);

      expect(setItemSpy).toHaveBeenCalledOnce();
      expect(getUserLanguage()).toBe(Lang.ZHT);
    });
  });
});
