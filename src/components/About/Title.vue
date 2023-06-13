<script setup lang="ts">
defineProps<{
  name: string;
  headline: string;
}>();
</script>

<template>
  <div class="space-y-1 md:flex gap-x-4 items-center print:flex">
    <h1>
      <span class="text-3xl font-bold">{{ name }}</span>
    </h1>
    <h2>
      <span class="text-2xl">{{ headline }}</span>
    </h2>
  </div>
</template>
