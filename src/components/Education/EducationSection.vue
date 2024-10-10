<script setup lang="ts">
defineProps<{
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
}>();
</script>

<template>
  <section class="space-y-1">
    <div class="text-sm text-gray-600 dark:text-gray-400">
      {{ startDate.getFullYear() }} - {{ endDate?.getFullYear() || 'Present' }}
    </div>
    <div>
      <h3 class="font-bold text-lg">{{ school }}</h3>
      <div>{{ degree }}</div>
      <div>{{ fieldOfStudy }}</div>
    </div>
  </section>
</template>
