<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { Lang, LANGUAGE_OPTIONS } from '@/constant/language';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { disablePageScroll, enablePageScroll } from '@/utils/pageScrollUtils';
import ThemeAppearanceSwitch from '@/components/common/ThemeAppearanceSwitch.vue';
import MenubarItem from './MenubarItem.vue';

const isMenubarShown = ref(false);
const toggleMenubar = () => (isMenubarShown.value = !isMenubarShown.value);

watchEffect(() => {
  if (isMenubarShown.value) {
    disablePageScroll();
  } else {
    enablePageScroll();
  }
});

const languageStore = useLanguageStore();
const { language } = storeToRefs(languageStore);
const { switchLanguage } = languageStore;

function handleLanguageSelect(lang: Lang) {
  switchLanguage(lang);
}

const print = () => window.print();
</script>

<template>
  <div class="relative">
    <button
      type="button"
      title="Menubar"
      class="text-xl text-gray-600 dark:text-gray-400 transition-opacity duration-300"
      :class="isMenubarShown ? 'opacity-0' : 'opacity-100'"
      @click="toggleMenubar"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
    <div
      class="fixed inset-0 px-6 py-4 bg-neutral-200 dark:bg-neutral-700 transition-all duration-300"
      :class="
        isMenubarShown
          ? 'visible bg-opacity-70 backdrop-blur'
          : 'invisible bg-opacity-0'
      "
    >
      <button
        type="button"
        title="Close Menubar"
        class="text-3xl text-gray-600 dark:text-gray-400 absolute top-4 right-6 transition-opacity duration-300"
        :class="isMenubarShown ? 'opacity-100' : 'opacity-0'"
        @click="toggleMenubar"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <ul
        class="py-12 mx-8 space-y-3 transition-transform duration-300"
        :class="isMenubarShown ? 'translate-y-0' : '-translate-y-full'"
      >
        <MenubarItem>
          <div
            class="flex items-center justify-between text-gray-600 dark:text-gray-400"
          >
            <span class="text-sm">
              {{
                language.value === LANGUAGE_OPTIONS.ZHT.value
                  ? '語言'
                  : 'Translations'
              }}
            </span>
            <i class="fa-solid fa-globe"></i>
          </div>
          <ul class="my-3 space-y-2">
            <li v-for="{ text, value } in LANGUAGE_OPTIONS" :key="value">
              <button
                type="button"
                :title="text"
                @click="() => handleLanguageSelect(value)"
                :disabled="language.value === value"
                class="w-full text-start"
                :class="[
                  language.value === value
                    ? 'text-gray-700 dark:text-gray-300 font-bold'
                    : 'text-gray-400 dark:text-gray-600',
                ]"
              >
                {{ text }}
              </button>
            </li>
          </ul>
        </MenubarItem>
        <MenubarItem>
          <button
            class="w-full flex items-center justify-between text-gray-600 dark:text-gray-400"
            @click="print"
          >
            <span class="text-sm">
              {{
                language.value === LANGUAGE_OPTIONS.ZHT.value ? '列印' : 'Print'
              }}
            </span>
            <i class="fa-solid fa-print"></i>
          </button>
        </MenubarItem>
        <MenubarItem>
          <button
            class="w-full flex items-center justify-between text-gray-600 dark:text-gray-400"
          >
            <span class="text-sm">
              {{
                language.value === LANGUAGE_OPTIONS.ZHT.value
                  ? '外觀'
                  : 'Appearance'
              }}
            </span>
            <ThemeAppearanceSwitch />
          </button>
        </MenubarItem>
      </ul>
    </div>
  </div>
</template>
