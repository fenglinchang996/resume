import { onMounted, ref } from 'vue';
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
  const themeAppearance = ref<ThemeAppearance>(ThemeAppearance.Light);

  function switchThemeAppearance(selectedThemeAppearance: ThemeAppearance) {
    if (selectedThemeAppearance) {
      themeAppearance.value = selectedThemeAppearance;
      triggerThemeAppearanceTransition();
      setThemeAppearanceClass(selectedThemeAppearance);
      setUserThemeAppearance(selectedThemeAppearance);
    }
  }

  onMounted(() => {
    themeAppearance.value =
      getUserThemeAppearance() ||
      getPrefersColorScheme() ||
      ThemeAppearance.Light;
  });

  return {
    themeAppearance,
    switchThemeAppearance,
  };
});
