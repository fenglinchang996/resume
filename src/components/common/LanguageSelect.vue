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
  <div class="relative group print:hidden">
    <button class="text-2xl text-gray-600 pl-5">
      <i class="fa-solid fa-language"></i>
    </button>
    <ul
      class="absolute invisible group-hover:visible top-[85%] right-[-10px] min-w-max py-2 pl-4 pr-8 space-y-1 rounded-md border border-gray-100 bg-white shadow-xl"
    >
      <li v-for="{ text, value } in LANGUAGE_OPTIONS" :key="value">
        <button
          @touchdown="() => handleSelect(value)"
          @mousedown="() => handleSelect(value)"
          :disabled="language.value === value"
          class="text-gray-400"
          :class="{
            ['text-gray-600']: language.value === value,
            ['font-bold']: language.value === value,
          }"
        >
          {{ text }}
        </button>
      </li>
    </ul>
  </div>
</template>
