<script setup lang="ts">
defineProps<{
  name: string;
  headline: string;
}>();
</script>

<template>
  <div class="md:flex md:space-x-4 md:items-center">
    <h1>
      <span class="text-2xl font-bold">{{ name }}</span>
    </h1>
    <h2>
      <span class="text-xl">{{ headline }}</span>
    </h2>
  </div>
</template>
