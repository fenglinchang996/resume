<template>
  <button @click="print">
    <i class="fa-solid fa-print text-gray-600"></i>
  </button>
</template>

<script setup lang="ts">
const print = () => window.print();
</script>
