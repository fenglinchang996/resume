<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeAppearanceStore } from '@/stores/themeAppearance';
import { ThemeAppearance } from '@/constant/theme';
import { ref, watch } from 'vue';

const themeAppearanceStore = useThemeAppearanceStore();
const { themeAppearance } = storeToRefs(themeAppearanceStore);
const { switchThemeAppearance } = themeAppearanceStore;

const isDark = ref<boolean>(themeAppearance.value === ThemeAppearance.Dark);

watch(isDark, (isDark) => {
  isDark
    ? switchThemeAppearance(ThemeAppearance.Dark)
    : switchThemeAppearance(ThemeAppearance.Light);
});

const handleSwitch = () => (isDark.value = !isDark.value);
</script>
<template>
  <div class="flex items-center">
    <button
      class="flex items-center w-12 h-6 border border-gray-300 bg-gray-200 dark:bg-gray-700 shadow-lg rounded-full"
      @click="handleSwitch"
    >
      <span
        class="inline-block w-5 h-5 text-sm bg-white rounded-full dark:bg-gray-900 dark:translate-x-[26px] duration-500"
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
