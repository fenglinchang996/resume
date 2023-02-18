<script setup lang="ts">
defineProps<{ summary: string }>();
</script>

<template>
  <div class="[hyphens:auto]">
    {{ summary }}
  </div>
</template>
