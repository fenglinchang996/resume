<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeAppearanceStore } from '@/stores/themeAppearance';
import { ThemeAppearance } from '@/constant/theme';

const themeAppearanceStore = useThemeAppearanceStore();
const { themeAppearance } = storeToRefs(themeAppearanceStore);
const { switchThemeAppearance } = themeAppearanceStore;

const handleSwitch = () => {
  if (themeAppearance.value === ThemeAppearance.Light) {
    switchThemeAppearance(ThemeAppearance.Dark);
  } else if (themeAppearance.value === ThemeAppearance.Dark) {
    switchThemeAppearance(ThemeAppearance.Light);
  }
};
</script>
<template>
  <div class="flex items-center">
    <button
      type="button"
      title="Switch Theme Appearance"
      class="flex items-center border border-gray-300 w-12 h-6 bg-gray-200 dark:bg-gray-700 shadow-lg rounded-full"
      @click="handleSwitch"
    >
      <span
        class="inline-block text-sm bg-white rounded-full duration-300 w-5 h-5 dark:bg-gray-900 dark:translate-x-[26px]"
      >
        <span class="text-gray-600 dark:hidden">
          <i class="fa-regular fa-sun"></i>
        </span>
        <span class="text-gray-100 hidden dark:inline">
          <i class="fa-regular fa-moon"></i>
        </span>
      </span>
    </button>
  </div>
</template>
