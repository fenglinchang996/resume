import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemeAppearanceStore } from '@/stores/themeAppearance';
import { ThemeAppearance } from '@/constant/theme';
import {
  getPrefersColorScheme,
  getUserThemeAppearance,
} from '@/utils/themeUtils';

export const useInitializeThemeAppearance = () => {
  const themeStore = useThemeAppearanceStore();
  const { themeAppearance } = storeToRefs(themeStore);

  onMounted(() => {
    themeAppearance.value =
      getUserThemeAppearance() ||
      getPrefersColorScheme() ||
      ThemeAppearance.Light;
  });
};
