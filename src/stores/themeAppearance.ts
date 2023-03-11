import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ThemeAppearance } from '@/constant/theme';
import {
  getPrefersColorScheme,
  getUserThemeAppearance,
  setThemeAppearanceClass,
  setUserThemeAppearance,
  triggerThemeAppearanceTransition,
} from '@/utils/themeUtils';

export const useThemeAppearanceStore = defineStore('themeAppearance', () => {
  const themeAppearance = ref<ThemeAppearance>(
    getUserThemeAppearance() || getPrefersColorScheme() || ThemeAppearance.Light
  );

  function switchThemeAppearance(selectedThemeAppearance: ThemeAppearance) {
    if (selectedThemeAppearance) {
      themeAppearance.value = selectedThemeAppearance;
      triggerThemeAppearanceTransition();
      setThemeAppearanceClass(selectedThemeAppearance);
      setUserThemeAppearance(selectedThemeAppearance);
    }
  }

  return { themeAppearance, switchThemeAppearance };
});
