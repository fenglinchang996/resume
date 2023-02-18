<script setup lang="ts">
import { ref } from 'vue';
import { lang, LANGUAGE_OPTIONS } from '@/constants/language';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

const isToggled = ref<boolean>(false);
const languageStore = useLanguageStore();
const { language } = storeToRefs(languageStore);
const { switchLanguage } = languageStore;

function handleClick() {
  isToggled.value = true;
}
function handleBlur() {
  isToggled.value = false;
}
function handleSelect(lang: lang) {
  switchLanguage(lang);
}
</script>

<template>
  <div class="relative print:hidden">
    <button
      class="text-2xl text-gray-600"
      @click="handleClick"
      @blur="handleBlur"
    >
      <i class="fa-solid fa-language"></i>
    </button>
    <div
      class="absolute top-full right-0 min-w-max p-2 text-gray-400 border border-gray-400 rounded-md bg-white"
      :class="{ hidden: !isToggled }"
    >
      <ul>
        <li v-for="{ text, value } in LANGUAGE_OPTIONS" :key="value">
          <button
            @mousedown="() => handleSelect(value)"
            :disabled="language.value === value"
          >
            {{ text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
