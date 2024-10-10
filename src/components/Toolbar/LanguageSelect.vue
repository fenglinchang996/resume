<script setup lang="ts">
import { Lang, LANGUAGE_OPTIONS } from '@/constant/language';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

const languageStore = useLanguageStore();
const { language } = storeToRefs(languageStore);
const { switchLanguage } = languageStore;

function handleSelect(lang: Lang) {
  switchLanguage(lang);
}
</script>

<template>
  <div class="relative group">
    <button
      type="button"
      title="Select Language"
      class="text-2xl text-gray-600 dark:text-gray-400"
    >
      <i class="fa-solid fa-language"></i>
    </button>
    <div
      class="transition-all invisible opacity-0 translate-y-[-4px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
    >
      <ul
        class="absolute pl-4 space-y-1 rounded-md bg-white dark:bg-neutral-900 top-[85%] right-[-10px] min-w-max py-2 pr-8 border border-gray-300 dark:border-gray-700 shadow-xl"
      >
        <li v-for="{ text, value } in LANGUAGE_OPTIONS" :key="value">
          <button
            type="button"
            :title="text"
            @click="() => handleSelect(value)"
            :disabled="language.value === value"
            class="w-full text-start"
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
