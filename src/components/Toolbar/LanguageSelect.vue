<script setup lang="ts">
import { lang, LANGUAGE_OPTIONS } from '@/constant/language';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

const languageStore = useLanguageStore();
const { language } = storeToRefs(languageStore);
const { switchLanguage } = languageStore;

function handleSelect(lang: lang) {
  switchLanguage(lang);
}
</script>

<template>
  <div class="relative group">
    <button class="text-gray-600 dark:text-gray-400 pl-5">
      <i class="fa-solid fa-globe"></i>
    </button>
    <div
      class="invisible opacity-0 translate-y-[-4px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all"
    >
      <ul
        class="absolute top-[85%] right-[-10px] min-w-max py-2 pl-4 pr-8 space-y-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-xl"
      >
        <li v-for="{ text, value } in LANGUAGE_OPTIONS" :key="value">
          <button
            @click="() => handleSelect(value)"
            :disabled="language.value === value"
            :class="[
              language.value === value
                ? 'text-gray-700 dark:text-gray-300 font-bold'
                : 'text-gray-400 dark:text-gray-600 hover:text-blue-400 dark:hover:text-blue-600',
            ]"
          >
            {{ text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
