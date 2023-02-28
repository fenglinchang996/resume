<script setup lang="ts">
const print = () => window.print();
</script>

<template>
  <button @click="print">
    <i class="fa-solid fa-print text-gray-600 dark:text-gray-400"></i>
  </button>
</template>
