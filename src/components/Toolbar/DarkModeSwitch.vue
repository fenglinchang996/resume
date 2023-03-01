<script setup lang="ts">
import { ref, watch } from 'vue';

const isToggled = ref(false);
watch(isToggled, (isToggled) => {
  if (isToggled) {
    window.document.documentElement.classList.add('dark');
  } else {
    window.document.documentElement.classList.remove('dark');
  }
});
</script>
<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      id="switch"
      v-model="isToggled"
      class="h-0 w-0 invisible"
    />
    <label
      for="switch"
      class="inline-block relative w-12 h-6 cursor-pointer border border-gray-300 bg-gray-200 dark:bg-gray-700 shadow-lg rounded-full"
    >
      <span
        class="absolute top-1/2 -translate-y-1/2 right-full translate-x-full dark:right-0 dark:translate-x-0 duration-1000"
      >
        <span
          class="flex justify-center items-center rounded-full bg-white dark:bg-gray-900 w-5 h-5 text-sm"
        >
          <span class="text-gray-600 dark:hidden">
            <i class="fa-regular fa-sun"></i>
          </span>
          <span class="text-gray-100 hidden dark:inline">
            <i class="fa-regular fa-moon"></i>
          </span>
        </span>
      </span>
    </label>
  </div>
</template>
