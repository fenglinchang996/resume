<script setup lang="ts">
const print = () => window.print();
</script>

<template>
  <button
    type="button"
    title="Print"
    class="flex items-center text-xl text-gray-600 dark:text-gray-400"
    @click="print"
  >
    <i class="fa-solid fa-print"></i>
  </button>
</template>
