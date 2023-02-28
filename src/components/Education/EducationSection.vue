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
  <section class="flex-column md:flex print:flex justify-between">
    <div>
      <h3 class="text-lg font-bold">{{ school }}</h3>
      <div>{{ degree }}</div>
      <div>{{ fieldOfStudy }}</div>
    </div>
    <div class="text-gray-600 dark:text-gray-400">
      {{ startDate.getFullYear() }} - {{ endDate?.getFullYear() || 'Present' }}
    </div>
  </section>
</template>
