<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <h2 class="text-2xl font-bold">{{ title.toUpperCase() }}</h2>
  <hr class="mb-3 border-neutral-400 border-t-1" />
</template>
