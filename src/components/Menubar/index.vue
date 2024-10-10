<script setup lang="ts">
import { ref, watch } from 'vue';
import { Lang, LANGUAGE_OPTIONS } from '@/constant/language';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { disablePageScroll, enablePageScroll } from '@/utils/pageScrollUtils';
import ThemeAppearanceSwitch from '@/components/common/ThemeAppearanceSwitch.vue';
import MenubarItem from './MenubarItem.vue';

const isMenubarShown = ref(false);
const toggleMenubar = () => (isMenubarShown.value = !isMenubarShown.value);

watch(isMenubarShown, (isMenubarShown) => {
  if (isMenubarShown) {
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
  <div>
    <button
      type="button"
      title="Menubar"
      class="text-gray-600 dark:text-gray-400 duration-300 text-xl transition-opacity"
      :class="isMenubarShown ? 'opacity-0' : 'opacity-100'"
      @click="toggleMenubar"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
    <div
      class="duration-300 fixed inset-0 px-6 py-4 transition-all"
      :class="isMenubarShown ? 'visible' : 'invisible'"
    >
      <div
        class="inset-0 transition-all duration-300 absolute"
        :class="
          isMenubarShown
            ? 'bg-opacity-70 backdrop-blur bg-neutral-200 dark:bg-neutral-700'
            : 'bg-opacity-0'
        "
        @click="toggleMenubar"
      ></div>
      <button
        type="button"
        title="Close Menubar"
        class="text-3xl text-gray-600 dark:text-gray-400 absolute transition-opacity duration-300 top-4 right-6"
        :class="isMenubarShown ? 'opacity-100' : 'opacity-0'"
        @click="toggleMenubar"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <ul
        class="duration-300 py-12 mx-8 space-y-3 transition-transform"
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
            <span class="text-lg">
              <i class="fa-solid fa-language"></i>
            </span>
          </div>
          <ul class="space-y-2 my-3">
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
